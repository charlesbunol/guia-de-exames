import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { examsData } from '../data/exams';

const MAX_PDF_BYTES = 3.2 * 1024 * 1024;
const MAX_IMAGE_BYTES = 12 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 1800;
const SUPPORTED_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

const normalizeText = (value = '') => (
  String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[./_+-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
);

const compactText = (value = '') => normalizeText(value).replace(/\s/g, '');
const normalizedEquals = (source, term) => (
  normalizeText(source) === normalizeText(term) || compactText(source) === compactText(term)
);
const normalizedIncludes = (source, term) => {
  const normalizedSource = normalizeText(source);
  const normalizedTerm = normalizeText(term);

  return normalizedSource.includes(normalizedTerm) || compactText(normalizedSource).includes(compactText(normalizedTerm));
};

const getExamSearchText = (exam) => normalizeText([
  exam.id,
  exam.name,
  exam.category,
  exam.shortDescription,
  exam.purpose,
  exam.methodology,
  ...(exam.related || []),
  ...(exam.synonyms || []),
  ...(exam.components || []),
].filter(Boolean).join(' '));

const examSearchIndex = examsData.map(exam => ({
  exam,
  text: getExamSearchText(exam),
  aliases: [
    exam.id,
    exam.name,
    ...(exam.synonyms || []),
    ...(exam.components || []),
  ].filter(Boolean),
}));

const scoreExamMatch = (examIndex, term) => {
  const normalizedTerm = normalizeText(term);

  if (!normalizedTerm) return 0;
  if (examIndex.aliases.some(alias => normalizedEquals(alias, normalizedTerm))) return 100;
  if (normalizedEquals(examIndex.exam.id, normalizedTerm)) return 98;
  if (normalizedIncludes(examIndex.exam.name, normalizedTerm)) return 86;
  if (examIndex.aliases.some(alias => normalizedIncludes(alias, normalizedTerm) || normalizedIncludes(normalizedTerm, alias))) return 80;
  if (normalizedIncludes(examIndex.text, normalizedTerm)) return 68;

  const tokens = normalizedTerm.split(' ').filter(token => token.length > 2);
  if (tokens.length < 2) return 0;

  const hits = tokens.filter(token => normalizedIncludes(examIndex.text, token)).length;
  return hits === tokens.length ? 55 + hits : 0;
};

const findBestExamMatch = (extractedExam) => {
  const terms = [
    extractedExam.normalizedName,
    extractedExam.originalText,
  ].filter(Boolean);

  let bestMatch = null;

  for (const examIndex of examSearchIndex) {
    const score = Math.max(...terms.map(term => scoreExamMatch(examIndex, term)));

    if (score > (bestMatch?.score || 0)) {
      bestMatch = { exam: examIndex.exam, score };
    }
  }

  return bestMatch?.score >= 55 ? bestMatch : null;
};

const readBlobAsDataUrl = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(new Error('Nao foi possivel ler o arquivo.'));
  reader.readAsDataURL(blob);
});

const loadImage = (url) => new Promise((resolve, reject) => {
  const image = new Image();

  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error('Nao foi possivel abrir a imagem.'));
  image.src = url;
});

const compressImageFile = async (file) => {
  const objectUrl = URL.createObjectURL(file);

  try {
    const image = await loadImage(objectUrl);
    const ratio = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(image.naturalWidth, image.naturalHeight));
    const width = Math.max(1, Math.round(image.naturalWidth * ratio));
    const height = Math.max(1, Math.round(image.naturalHeight * ratio));
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Nao foi possivel preparar a imagem para envio.');
    }

    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0, width, height);

    const compressedBlob = await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Nao foi possivel compactar a imagem.'));
      }, 'image/jpeg', 0.86);
    });

    return {
      fileData: await readBlobAsDataUrl(compressedBlob),
      mimeType: 'image/jpeg',
      fileSize: compressedBlob.size,
    };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
};

const prepareFileForUpload = async (file) => {
  if (!SUPPORTED_TYPES.has(file.type)) {
    throw new Error('Formato nao suportado. Envie PDF, JPG, PNG ou WEBP.');
  }

  if (file.type === 'application/pdf') {
    if (file.size > MAX_PDF_BYTES) {
      throw new Error('PDF muito grande. Envie um PDF de ate 3 MB ou uma foto do pedido.');
    }

    return {
      fileData: await readBlobAsDataUrl(file),
      mimeType: file.type,
      fileSize: file.size,
    };
  }

  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Imagem muito grande. Envie uma foto de ate 12 MB.');
  }

  return compressImageFile(file);
};

const formatConfidence = (confidence) => {
  if (typeof confidence !== 'number') return 'revisar';
  return `${Math.round(Math.max(0, Math.min(1, confidence)) * 100)}%`;
};

const dedupeMatches = (items) => {
  const seen = new Set();

  return items.filter(item => {
    const key = item.exam ? `exam:${item.exam.id}` : `raw:${normalizeText(item.extracted.normalizedName || item.extracted.originalText)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const parseManualExamList = (value) => (
  value
    .split(/\r?\n|;|,/)
    .map(item => item
      .replace(/^\s*[-*•]+\s*/, '')
      .replace(/^\s*\d+[.)-]?\s*/, '')
      .trim())
    .filter(Boolean)
);

const isNoFastingInstruction = (text) => {
  const normalized = normalizeText(text);

  return normalized.includes('jejum') && (
    normalized.includes('jejum nao e obrigatorio')
    || normalized.includes('jejum nao costuma ser obrigatorio')
    || normalized.includes('nao exige jejum')
    || normalized.includes('sem jejum')
  );
};

const isOptionalFastingInstruction = (text) => {
  const normalized = normalizeText(text);

  return normalized.includes('jejum') && (
    normalized.includes('pode ser recomendado')
    || normalized.includes('pode ser solicitado')
    || normalized.includes('pode variar')
  );
};

const getFastingHours = (text) => {
  const normalized = normalizeText(text);

  if (!normalized.includes('jejum')) return null;

  const hourMatches = [...normalized.matchAll(/(\d+)\s*(?:a\s*(\d+)\s*)?(?:h|hora|horas)/g)];
  if (hourMatches.length === 0) return null;

  return Math.max(...hourMatches.map(match => Number(match[2] || match[1])));
};

const isRequiredFastingInstruction = (text) => {
  const normalized = normalizeText(text);

  return normalized.includes('jejum')
    && !isNoFastingInstruction(text)
    && !isOptionalFastingInstruction(text)
    && (
      getFastingHours(text) !== null
      || normalized.includes('jejum absoluto')
      || normalized.includes('necessario jejum')
      || normalized.includes('exige jejum')
    );
};

const removeRedundantPreparationItems = (items) => {
  const requiredFastingItems = items.filter(item => isRequiredFastingInstruction(item.text));

  if (requiredFastingItems.length === 0) {
    return items.filter(item => !isNoFastingInstruction(item.text));
  }

  const strictestFastingHours = Math.max(
    ...requiredFastingItems.map(item => getFastingHours(item.text) || 0)
  );
  const hasTimedFasting = strictestFastingHours > 0;
  let keptFastingInstruction = false;

  return items.filter((item) => {
    if (isNoFastingInstruction(item.text) || isOptionalFastingInstruction(item.text)) return false;

    if (!isRequiredFastingInstruction(item.text)) return true;

    const itemHours = getFastingHours(item.text) || 0;
    const keepThisFasting = hasTimedFasting
      ? itemHours === strictestFastingHours
      : !keptFastingInstruction;

    if (keepThisFasting && !keptFastingInstruction) {
      keptFastingInstruction = true;
      return true;
    }

    return false;
  });
};

const RequestAnalyzer = () => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [manualText, setManualText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPrepSummary, setShowPrepSummary] = useState(false);
  const [printMode, setPrintMode] = useState('complete');
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const mappedResults = useMemo(() => {
    const items = (analysis?.exams || []).map(extracted => {
      const match = findBestExamMatch(extracted);
      const confidence = typeof extracted.confidence === 'number' ? extracted.confidence : 0;

      return {
        extracted,
        exam: match?.exam || null,
        score: match?.score || 0,
        needsReview: extracted.needsReview || confidence < 0.72 || !match,
      };
    });

    return dedupeMatches(items);
  }, [analysis]);

  const matchedResults = mappedResults.filter(item => item.exam && !item.needsReview);
  const reviewResults = mappedResults.filter(item => !item.exam || item.needsReview);
  const printableResults = mappedResults.filter(item => item.exam);
  const uniquePreparationItems = useMemo(() => {
    const prepMap = new Map();

    for (const item of printableResults) {
      const preparations = item.exam.preparation || ['Consulte o laboratório para confirmar o preparo.'];

      for (const preparation of preparations) {
        const key = normalizeText(preparation);
        if (!key) continue;

        if (!prepMap.has(key)) {
          prepMap.set(key, {
            text: preparation,
            exams: new Set(),
          });
        }

        prepMap.get(key).exams.add(item.exam.name);
      }
    }

    const uniqueItems = Array.from(prepMap.values()).map(item => ({
      text: item.text,
      exams: Array.from(item.exams),
    }));

    return removeRedundantPreparationItems(uniqueItems);
  }, [printableResults]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);

    setSelectedFiles(files);
    setError('');
    setAnalysis(null);
  };

  const handleClear = () => {
    setSelectedFiles([]);
    setManualText('');
    setShowPrepSummary(false);
    setPrintMode('complete');
    setAnalysis(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = async () => {
    if (selectedFiles.length === 0) {
      setError('Selecione uma ou mais fotos/PDFs da solicitacao medica.');
      return;
    }

    setIsAnalyzing(true);
    setError('');
    setAnalysis(null);

    try {
      const uploadFiles = await Promise.all(selectedFiles.map(async (file) => ({
        ...(await prepareFileForUpload(file)),
        fileName: file.name,
      })));
      const response = await fetch('/api/analyze-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: uploadFiles,
        }),
      });

      const responseText = await response.text();
      const payload = responseText ? JSON.parse(responseText) : {};

      if (!response.ok) {
        throw new Error(payload.error || 'Nao foi possivel analisar o arquivo.');
      }

      setAnalysis({
        exams: Array.isArray(payload.exams) ? payload.exams : [],
        notes: Array.isArray(payload.notes) ? payload.notes : [],
      });
      setShowPrepSummary(false);
      setPrintMode('complete');
    } catch (caughtError) {
      const message = caughtError instanceof SyntaxError
        ? 'A API local nao respondeu em JSON. Abra o site pelo servidor local do projeto e confira se a OPENAI_API_KEY esta configurada.'
        : caughtError.message;

      setError(message || 'Nao foi possivel analisar a solicitacao.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleManualAnalyze = () => {
    const manualExams = parseManualExamList(manualText);

    if (manualExams.length === 0) {
      setError('Digite ou cole pelo menos um exame para montar a lista.');
      return;
    }

    setError('');
    setShowPrepSummary(false);
    setPrintMode('complete');
    setAnalysis({
      exams: manualExams.map(examName => ({
        originalText: examName,
        normalizedName: examName,
        confidence: 0.95,
        needsReview: false,
      })),
      notes: ['Lista inserida manualmente. Confira os itens encontrados antes de imprimir.'],
    });
  };

  const handlePrint = (mode = 'complete') => {
    setPrintMode(mode);
    document.body.classList.add('printing-request-analysis');
    window.setTimeout(() => {
      window.print();
      window.setTimeout(() => {
        document.body.classList.remove('printing-request-analysis');
      }, 800);
    }, 0);
  };

  return (
    <article className="request-analyzer container animate-fade-in">
      <header className="request-hero">
        <span className="request-eyebrow">Leitura de solicitação médica</span>
        <h1>Envie uma foto, PDF ou digite a lista de exames</h1>
        <p>
          O site le uma ou mais paginas do pedido, ou aceita uma lista digitada, identifica os exames encontrados no banco de dados e organiza os preparos em uma lista unica para consulta ou impressao.
        </p>
      </header>

      <section className="upload-panel" aria-labelledby="upload-title">
        <div className="upload-copy">
          <h2 id="upload-title">Anexar solicitação</h2>
          <p>
            Use uma imagem nítida, com o pedido inteiro visível. O arquivo é enviado para análise por IA e não é salvo pelo site.
          </p>
          <div className="privacy-note">
            <strong>Privacidade:</strong> remova ou cubra dados pessoais que você não queira compartilhar antes de enviar.
          </div>
        </div>

        <div className="upload-box">
          <label className="file-drop">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
            />
            <span className="file-icon" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <path d="M14 2v6h6"></path>
                <path d="M12 18v-6"></path>
                <path d="m9 15 3-3 3 3"></path>
              </svg>
            </span>
            <span className="file-title">
              {selectedFiles.length > 0
                ? `${selectedFiles.length} arquivo(s) selecionado(s)`
                : 'Selecionar PDFs ou fotos'}
            </span>
            {selectedFiles.length > 0 && (
              <span className="selected-file-list">
                {selectedFiles.map(file => file.name).join(', ')}
              </span>
            )}
            <span className="file-help">PDF ate 3 MB. Fotos JPG, PNG ou WEBP ate 12 MB.</span>
          </label>

          <div className="upload-actions">
            <button type="button" className="analyze-btn" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? 'Analisando...' : 'Analisar solicitação'}
            </button>
            <button type="button" className="clear-request-btn" onClick={handleClear} disabled={isAnalyzing || (selectedFiles.length === 0 && !manualText && !analysis)}>
              Limpar
            </button>
          </div>

          {error && <p className="request-error" role="alert">{error}</p>}
        </div>
      </section>

      <section className="manual-panel" aria-labelledby="manual-title">
        <div className="manual-copy">
          <h2 id="manual-title">Inserir exames manualmente</h2>
          <p>
            Cole ou digite os exames um por linha. Tambem aceitamos itens separados por virgula ou ponto e virgula.
          </p>
        </div>
        <div className="manual-input-wrap">
          <textarea
            className="manual-exam-input"
            value={manualText}
            onChange={(event) => {
              setManualText(event.target.value);
              setError('');
            }}
            placeholder={'Hemograma completo\nGlicemia de jejum\nTSH'}
            rows={6}
          />
          <div className="upload-actions">
            <button type="button" className="analyze-btn" onClick={handleManualAnalyze} disabled={isAnalyzing}>
              Montar lista manual
            </button>
            <button type="button" className="clear-request-btn" onClick={handleClear} disabled={isAnalyzing || (selectedFiles.length === 0 && !manualText && !analysis)}>
              Limpar
            </button>
          </div>
        </div>
      </section>

      {analysis && (
        <section className="analysis-results" aria-labelledby="analysis-title">
          <div className="analysis-header">
            <div>
              <h2 id="analysis-title">Resultado da leitura</h2>
              <p>
                {mappedResults.length} exame(s) extraído(s), {printableResults.length} com preparo encontrado no guia.
              </p>
            </div>
            {printableResults.length > 0 && (
              <div className="analysis-actions">
                <button type="button" className="summary-toggle-btn" onClick={() => setShowPrepSummary(value => !value)}>
                  {showPrepSummary ? 'Ocultar resumo' : 'Resumo de preparo'}
                </button>
                <button type="button" className="print-request-btn" onClick={() => handlePrint('complete')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9V2h12v7"></path>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <path d="M6 14h12v8H6z"></path>
                  </svg>
                  Imprimir lista completa
                </button>
              </div>
            )}
          </div>

          {showPrepSummary && printableResults.length > 0 && (
            <section className="prep-summary-box" aria-labelledby="prep-summary-title">
              <div className="prep-summary-header">
                <div>
                  <h3 id="prep-summary-title">Resumo de preparo</h3>
                  <p>{uniquePreparationItems.length} orientacao(oes) essencial(is), sem duplicar ou contradizer preparos.</p>
                </div>
                <button type="button" className="print-request-btn" onClick={() => handlePrint('summary')}>
                  Imprimir resumo
                </button>
              </div>
              {uniquePreparationItems.length > 0 ? (
                <ol className="prep-summary-list">
                  {uniquePreparationItems.map((item, index) => (
                    <li key={`${item.text}-${index}`}>
                      <strong>{item.text}</strong>
                      <small>Aplica-se a: {item.exams.join(', ')}</small>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="prep-summary-empty">Nenhum preparo especial identificado para os exames encontrados.</p>
              )}
            </section>
          )}

          {matchedResults.length > 0 && (
            <div className="result-grid">
              {matchedResults.map(item => (
                <section className="request-exam-card" key={item.exam.id}>
                  <div className="card-topline">
                    <span>{item.exam.category}</span>
                    <span className="confidence">Confiança {formatConfidence(item.extracted.confidence)}</span>
                  </div>
                  <h3>{item.exam.name}</h3>
                  <p className="matched-from">Lido como: {item.extracted.originalText || item.extracted.normalizedName}</p>
                  <h4>Preparo</h4>
                  <ul>
                    {(item.exam.preparation || ['Consulte o laboratório para confirmar o preparo.']).map((prep, index) => (
                      <li key={index}>{prep}</li>
                    ))}
                  </ul>
                  <Link to={`/exames/${encodeURIComponent(item.exam.id)}`}>Ver detalhes do exame</Link>
                </section>
              ))}
            </div>
          )}

          {reviewResults.length > 0 && (
            <div className="review-box">
              <h3>Itens para revisar</h3>
              <p>Esses exames ficaram incertos ou não foram encontrados exatamente no banco de dados.</p>
              <ul>
                {reviewResults.map((item, index) => (
                  <li key={`${item.extracted.originalText}-${index}`}>
                    <strong>{item.extracted.originalText || item.extracted.normalizedName}</strong>
                    {item.exam ? (
                      <span> Possível correspondência: <Link to={`/exames/${encodeURIComponent(item.exam.id)}`}>{item.exam.name}</Link></span>
                    ) : (
                      <span> Sem correspondência automática.</span>
                    )}
                    <small>Confiança {formatConfidence(item.extracted.confidence)}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {analysis.notes?.length > 0 && (
            <div className="notes-box">
              <h3>Observações da leitura</h3>
              <ul>
                {analysis.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="request-print-sheet" aria-hidden="true">
        <h1>{printMode === 'summary' ? 'Resumo de preparo' : 'Lista de exames e preparos'}</h1>
        <p className="print-source">Gerado pelo Guia de Exames em {new Date().toLocaleDateString('pt-BR')}</p>
        {printMode === 'summary' && (
          <section className="print-exam">
            <h2>Preparos necessarios</h2>
            {uniquePreparationItems.length > 0 ? (
              <ol>
                {uniquePreparationItems.map((item, index) => (
                  <li key={`${item.text}-${index}`}>
                    <strong>{item.text}</strong>
                    <span>Exames: {item.exams.join(', ')}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p>Nenhum preparo especial identificado para os exames encontrados.</p>
            )}
          </section>
        )}
        {printMode === 'complete' && printableResults.map(item => (
          <section key={item.exam.id} className="print-exam">
            <h2>{item.exam.name}</h2>
            <p>Lido como: {item.extracted.originalText || item.extracted.normalizedName}</p>
            <ul>
              {(item.exam.preparation || ['Consulte o laboratório para confirmar o preparo.']).map((prep, index) => (
                <li key={index}>{prep}</li>
              ))}
            </ul>
          </section>
        ))}
        {printMode === 'complete' && reviewResults.length > 0 && (
          <section className="print-exam">
            <h2>Itens para revisar</h2>
            <ul>
              {reviewResults.map((item, index) => (
                <li key={index}>{item.extracted.originalText || item.extracted.normalizedName}</li>
              ))}
            </ul>
          </section>
        )}
        <p className="print-note">As informações são educativas. Confirme sempre o preparo com o laboratório e com o profissional de saúde.</p>
      </section>

      <style>{`
        .request-analyzer {
          padding-top: 3rem;
          padding-bottom: 4rem;
        }
        .request-hero {
          max-width: 760px;
          margin-bottom: 2rem;
        }
        .request-eyebrow {
          display: inline-flex;
          margin-bottom: 0.75rem;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 700;
        }
        .request-hero h1 {
          color: var(--text-main);
          font-size: clamp(2rem, 5vw, 3.2rem);
          letter-spacing: 0;
          margin-bottom: 1rem;
        }
        .request-hero p,
        .upload-copy p,
        .manual-copy p,
        .analysis-header p,
        .review-box p {
          color: var(--text-muted);
        }
        .upload-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
          gap: 1.25rem;
          align-items: stretch;
          margin-bottom: 2rem;
        }
        .manual-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
          gap: 1.25rem;
          align-items: stretch;
          margin-bottom: 2rem;
        }
        .upload-copy,
        .upload-box,
        .manual-copy,
        .manual-input-wrap,
        .request-exam-card,
        .review-box,
        .notes-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .upload-copy {
          padding: 1.5rem;
        }
        .upload-copy h2 {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
        }
        .privacy-note {
          margin-top: 1.25rem;
          padding: 0.85rem 1rem;
          border-left: 4px solid var(--secondary);
          background: rgba(16, 185, 129, 0.1);
          color: var(--text-main);
          border-radius: var(--radius-md);
        }
        .upload-box {
          padding: 1.25rem;
        }
        .manual-copy,
        .manual-input-wrap {
          padding: 1.25rem;
        }
        .manual-copy h2 {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
        }
        .manual-exam-input {
          width: 100%;
          min-height: 9rem;
          resize: vertical;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--surface);
          color: var(--text-main);
          font: inherit;
          line-height: 1.5;
          padding: 0.9rem 1rem;
          outline: none;
        }
        .manual-exam-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 16%, transparent);
        }
        .file-drop {
          display: grid;
          gap: 0.45rem;
          justify-items: center;
          text-align: center;
          padding: 2rem 1rem;
          border: 1.5px dashed var(--border);
          border-radius: var(--radius-md);
          background: color-mix(in srgb, var(--primary-light) 42%, var(--surface));
          cursor: pointer;
        }
        .file-drop input {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
        }
        .file-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: var(--radius-md);
          background: var(--surface);
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .file-title {
          color: var(--text-main);
          font-weight: 700;
          overflow-wrap: anywhere;
        }
        .selected-file-list {
          max-width: 100%;
          color: var(--text-muted);
          font-size: 0.82rem;
          overflow-wrap: anywhere;
        }
        .file-help {
          color: var(--text-muted);
          font-size: 0.88rem;
        }
        .upload-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .analyze-btn,
        .clear-request-btn,
        .print-request-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          min-height: 2.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .analyze-btn {
          background: var(--primary);
          color: #fff;
        }
        .analyze-btn:hover,
        .print-request-btn:hover {
          background: var(--primary-hover);
          color: #fff;
        }
        .clear-request-btn {
          border: 1px solid var(--border);
          color: var(--text-main);
          background: var(--surface);
        }
        .print-request-btn {
          background: var(--primary);
          color: #fff;
          white-space: nowrap;
        }
        .analyze-btn:disabled,
        .clear-request-btn:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }
        .request-error {
          margin-top: 1rem;
          color: #b91c1c;
          font-weight: 600;
        }
        .analysis-results {
          display: grid;
          gap: 1.25rem;
        }
        .analysis-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .analysis-actions,
        .prep-summary-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .analysis-header h2 {
          margin-bottom: 0.25rem;
        }
        .summary-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 2.75rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          color: var(--text-main);
          background: var(--surface);
          font-weight: 700;
        }
        .summary-toggle-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .prep-summary-box {
          padding: 1.25rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .prep-summary-header {
          margin-bottom: 1rem;
        }
        .prep-summary-header h3 {
          margin-bottom: 0.25rem;
        }
        .prep-summary-list {
          display: grid;
          gap: 0.75rem;
          margin: 0;
          padding-left: 1.25rem;
        }
        .prep-summary-list li {
          color: var(--text-main);
        }
        .prep-summary-list strong {
          display: block;
          margin-bottom: 0.15rem;
        }
        .prep-summary-list small {
          color: var(--text-muted);
        }
        .prep-summary-empty {
          margin: 0;
          color: var(--text-muted);
        }
        .result-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .request-exam-card {
          padding: 1.25rem;
        }
        .card-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
        }
        .confidence {
          color: var(--secondary);
        }
        .request-exam-card h3 {
          margin-bottom: 0.35rem;
          color: var(--text-main);
        }
        .matched-from {
          margin-bottom: 1rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .request-exam-card h4 {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .request-exam-card ul,
        .review-box ul,
        .notes-box ul {
          padding-left: 1.1rem;
          color: var(--text-muted);
        }
        .request-exam-card li,
        .review-box li,
        .notes-box li {
          margin-bottom: 0.45rem;
        }
        .request-exam-card a {
          display: inline-flex;
          margin-top: 0.65rem;
          font-weight: 700;
        }
        .review-box,
        .notes-box {
          padding: 1.25rem;
        }
        .review-box h3,
        .notes-box h3 {
          margin-bottom: 0.5rem;
        }
        .review-box small {
          display: block;
          margin-top: 0.15rem;
          color: var(--text-light);
        }
        .request-print-sheet {
          display: none;
        }
        @media (max-width: 760px) {
          .request-analyzer {
            padding-top: 2rem;
          }
          .upload-panel {
            grid-template-columns: 1fr;
          }
          .manual-panel {
            grid-template-columns: 1fr;
          }
          .analysis-header {
            align-items: flex-start;
            flex-direction: column;
          }
          .print-request-btn,
          .summary-toggle-btn,
          .analyze-btn,
          .clear-request-btn {
            width: 100%;
          }
        }
        @media print {
          @page {
            margin: 12mm;
          }
          body.printing-request-analysis {
            background: #fff !important;
            color: #111827 !important;
          }
          body.printing-request-analysis .app-wrapper {
            display: block !important;
            min-height: 0 !important;
          }
          body.printing-request-analysis .header,
          body.printing-request-analysis .footer,
          body.printing-request-analysis .mascot-container,
          body.printing-request-analysis .request-analyzer > :not(.request-print-sheet) {
            display: none !important;
          }
          body.printing-request-analysis main,
          body.printing-request-analysis .request-analyzer {
            display: block !important;
            width: auto !important;
            max-width: none !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          body.printing-request-analysis .request-print-sheet {
            display: block !important;
            position: static !important;
            width: auto !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff;
            color: #111827;
            font-family: Arial, sans-serif;
          }
          .request-print-sheet h1 {
            color: #111827;
            font-size: 22px;
            margin-bottom: 6px;
          }
          .request-print-sheet .print-source,
          .request-print-sheet .print-note,
          .request-print-sheet p {
            color: #374151;
            font-size: 12px;
          }
          .print-exam {
            break-inside: avoid;
            border-top: 1px solid #d1d5db;
            margin-top: 12px;
            padding-top: 10px;
          }
          .print-exam h2 {
            color: #111827;
            font-size: 16px;
            margin-bottom: 4px;
          }
          .print-exam ul,
          .print-exam ol {
            margin: 8px 0 0;
            padding-left: 18px;
          }
          .print-exam li {
            margin-bottom: 5px;
          }
          .print-exam strong,
          .print-exam span {
            display: block;
          }
          .print-exam span {
            color: #4b5563;
            font-size: 11px;
            margin-top: 2px;
          }
        }
      `}</style>
    </article>
  );
};

export default RequestAnalyzer;
