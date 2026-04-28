/* global process */
import { Buffer } from 'node:buffer';

const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;
const MAX_TOTAL_FILE_SIZE_BYTES = 20 * 1024 * 1024;
const OPENAI_RESPONSES_URL = 'https://api.openai.com/v1/responses';
const SUPPORTED_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

const readJsonBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
};

const getOutputText = (response) => {
  if (typeof response.output_text === 'string') {
    return response.output_text;
  }

  const parts = [];

  for (const item of response.output || []) {
    for (const content of item.content || []) {
      if (content.type === 'output_text' && content.text) {
        parts.push(content.text);
      }
    }
  }

  return parts.join('\n');
};

const buildContentInput = ({ fileData, mimeType, fileName }) => {
  if (mimeType === 'application/pdf') {
    return {
      type: 'input_file',
      filename: fileName || 'solicitacao-medica.pdf',
      file_data: fileData,
    };
  }

  return {
    type: 'input_image',
    image_url: fileData,
  };
};

const normalizeIncomingFiles = (body) => {
  if (Array.isArray(body.files) && body.files.length > 0) {
    return body.files;
  }

  if (body.fileData && body.mimeType) {
    return [{
      fileData: body.fileData,
      mimeType: body.mimeType,
      fileName: body.fileName,
      fileSize: body.fileSize,
    }];
  }

  return [];
};

const validateFiles = (files) => {
  if (files.length === 0) {
    return 'Arquivo nao enviado.';
  }

  const totalFileSize = files.reduce((sum, file) => sum + (Number(file.fileSize) || 0), 0);

  if (totalFileSize > MAX_TOTAL_FILE_SIZE_BYTES) {
    return 'Arquivos muito grandes. Envie no maximo 20 MB no total.';
  }

  for (const file of files) {
    if (!file.fileData || !file.mimeType) {
      return 'Um dos arquivos nao foi enviado corretamente.';
    }

    if (!SUPPORTED_TYPES.has(file.mimeType)) {
      return 'Formato nao suportado. Envie PDF, JPG, PNG ou WEBP.';
    }

    if (file.fileSize > MAX_FILE_SIZE_BYTES) {
      return 'Um dos arquivos esta muito grande. Envie arquivos de ate 8 MB cada.';
    }
  }

  return '';
};

const getFriendlyOpenAiError = (payload) => {
  const error = payload?.error;
  const code = error?.code || error?.type;
  const message = error?.message || '';

  if (code === 'insufficient_quota' || message.includes('exceeded your current quota')) {
    return 'Sua chave da OpenAI esta sem credito/cota disponivel. Verifique o plano, billing ou limite mensal em platform.openai.com.';
  }

  if (code === 'invalid_api_key' || message.includes('Incorrect API key')) {
    return 'A chave da OpenAI parece incorreta ou expirada. Gere uma nova chave e atualize o arquivo .env.local.';
  }

  if (code === 'rate_limit_exceeded' || message.includes('Rate limit')) {
    return 'A API recebeu muitas tentativas em pouco tempo. Aguarde alguns instantes e tente novamente.';
  }

  return message || 'Nao foi possivel analisar o arquivo.';
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo nao permitido.' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: 'OPENAI_API_KEY nao configurada no ambiente do servidor.',
    });
  }

  try {
    const body = await readJsonBody(req);
    const files = normalizeIncomingFiles(body);
    const validationError = validateFiles(files);

    if (validationError) {
      return res.status(validationError.includes('grande') ? 413 : 400).json({ error: validationError });
    }

    const userContent = [
      {
        type: 'input_text',
        text: files.length > 1
          ? 'Leia estas paginas de uma solicitacao medica e extraia uma lista unica de exames solicitados, sem duplicar itens repetidos.'
          : 'Leia esta solicitacao medica e extraia a lista de exames solicitados. Preserve o nome original quando possivel e normalize abreviacoes comuns.',
      },
      ...files.map(file => buildContentInput(file)),
    ];

    const openAiResponse = await fetch(OPENAI_RESPONSES_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        input: [
          {
            role: 'system',
            content: [
              {
                type: 'input_text',
                text: [
                  'Voce extrai nomes de exames laboratoriais de solicitacoes medicas em portugues.',
                  'Nao de diagnostico, interpretacao clinica, conduta medica ou conselho terapeutico.',
                  'Retorne apenas JSON valido conforme o schema. Se a leitura estiver incerta, mantenha o item com confidence menor e needsReview true.',
                  'Ignore dados pessoais, nomes de pacientes, CRM, enderecos, datas e CID. Extraia somente exames solicitados.',
                  'Pedidos podem vir em mais de uma imagem ou pagina. Una os exames e remova duplicidades.',
                ].join(' '),
              },
            ],
          },
          {
            role: 'user',
            content: userContent,
          },
        ],
        text: {
          format: {
            type: 'json_schema',
            name: 'medical_exam_request',
            strict: true,
            schema: {
              type: 'object',
              additionalProperties: false,
              properties: {
                exams: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                      originalText: { type: 'string' },
                      normalizedName: { type: 'string' },
                      confidence: { type: 'number' },
                      needsReview: { type: 'boolean' },
                    },
                    required: ['originalText', 'normalizedName', 'confidence', 'needsReview'],
                  },
                },
                notes: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
              required: ['exams', 'notes'],
            },
          },
        },
      }),
    });

    const payload = await openAiResponse.json();

    if (!openAiResponse.ok) {
      const message = getFriendlyOpenAiError(payload);
      return res.status(openAiResponse.status).json({ error: message });
    }

    const outputText = getOutputText(payload);
    const parsed = JSON.parse(outputText);

    return res.status(200).json(parsed);
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Erro inesperado ao analisar a solicitacao.',
    });
  }
}
