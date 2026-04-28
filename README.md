# Guia de Exames

Aplicacao React + Vite para consulta de exames laboratoriais, preparos e orientacoes de coleta.

## Rodar em desenvolvimento

```bash
npm install
npm run dev
```

## Leitura de solicitacao medica

A rota `/ler-solicitacao` permite anexar fotos ou PDFs de pedidos medicos para extrair os exames solicitados e montar uma lista de preparos. A analise usa a API da OpenAI no endpoint local `/api/analyze-request`.

Para ativar a analise local:

1. Copie `.env.local.example` para `.env.local`.
2. Preencha `OPENAI_API_KEY` com sua chave.
3. Gere o build e suba o servidor local com API:

```bash
npm run build
npm run local
```

Depois abra `http://127.0.0.1:4176/ler-solicitacao`.

Arquivos enviados para analise nao sao salvos pelo servidor local. Ainda assim, remova ou cubra dados pessoais do pedido antes de enviar.
