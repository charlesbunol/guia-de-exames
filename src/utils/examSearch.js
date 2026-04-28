const STOP_WORDS = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'em', 'no', 'na', 'nos', 'nas', 'para', 'por', 'com']);

export const normalizeText = (value = '') => (
  String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[./_+-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
);

export const compactText = (value = '') => normalizeText(value).replace(/\s/g, '');

export const normalizedEquals = (source, term) => (
  normalizeText(source) === normalizeText(term) || compactText(source) === compactText(term)
);

export const normalizedIncludes = (source, term) => {
  const normalizedSource = normalizeText(source);
  const normalizedTerm = normalizeText(term);
  const compactSource = compactText(normalizedSource);
  const compactTerm = compactText(normalizedTerm);

  if (!normalizedSource || !normalizedTerm) return false;
  return normalizedSource.includes(normalizedTerm) || compactSource.includes(compactTerm);
};

const getTokens = (value, minLength = 3) => (
  normalizeText(value)
    .split(' ')
    .filter(token => token.length >= minLength && !STOP_WORDS.has(token))
);

const levenshteinWithin = (source, target, limit = 1) => {
  if (Math.abs(source.length - target.length) > limit) return false;

  const previous = Array.from({ length: target.length + 1 }, (_, index) => index);
  const current = Array(target.length + 1).fill(0);

  for (let sourceIndex = 1; sourceIndex <= source.length; sourceIndex += 1) {
    current[0] = sourceIndex;
    let rowMin = current[0];

    for (let targetIndex = 1; targetIndex <= target.length; targetIndex += 1) {
      const cost = source[sourceIndex - 1] === target[targetIndex - 1] ? 0 : 1;
      current[targetIndex] = Math.min(
        current[targetIndex - 1] + 1,
        previous[targetIndex] + 1,
        previous[targetIndex - 1] + cost
      );
      rowMin = Math.min(rowMin, current[targetIndex]);
    }

    if (rowMin > limit) return false;

    for (let index = 0; index < previous.length; index += 1) {
      previous[index] = current[index];
    }
  }

  return previous[target.length] <= limit;
};

const tokenMatches = (queryToken, sourceToken) => {
  if (queryToken === sourceToken) return true;
  if (queryToken.length >= 4 && sourceToken.length >= 4 && levenshteinWithin(queryToken, sourceToken, 1)) return true;
  return queryToken.length >= 4 && sourceToken.length >= 4 && (
    sourceToken.includes(queryToken) || queryToken.includes(sourceToken)
  );
};

const countTokenHits = (query, source) => {
  const queryTokens = getTokens(query);
  const sourceTokens = getTokens(source, 2);

  if (queryTokens.length === 0 || sourceTokens.length === 0) {
    return { hits: 0, total: queryTokens.length };
  }

  const hits = queryTokens.filter(queryToken => (
    sourceTokens.some(sourceToken => tokenMatches(queryToken, sourceToken))
  )).length;

  return { hits, total: queryTokens.length };
};

const getExamSupportingText = (exam) => normalizeText([
  exam.category,
  exam.shortDescription,
  exam.purpose,
  exam.methodology,
  ...(exam.related || []),
].filter(Boolean).join(' '));

const getExamIdentityText = (exam) => normalizeText([
  exam.id,
  exam.name,
  ...(exam.synonyms || []),
  ...(exam.components || []),
].filter(Boolean).join(' '));

export const createExamSearchIndex = (exams) => exams.map(exam => ({
  exam,
  id: exam.id,
  name: exam.name,
  synonyms: exam.synonyms || [],
  components: exam.components || [],
  identityText: getExamIdentityText(exam),
  supportingText: getExamSupportingText(exam),
}));

export const scoreExamMatch = (examIndex, term) => {
  const normalizedTerm = normalizeText(term);
  const compactTerm = compactText(normalizedTerm);

  if (!normalizedTerm) return 0;

  if (normalizedEquals(examIndex.exam.id, normalizedTerm)) return 102;
  if (normalizedEquals(examIndex.exam.name, normalizedTerm)) return 100;
  if (examIndex.synonyms.some(alias => normalizedEquals(alias, normalizedTerm))) return 98;
  if (examIndex.components.some(component => normalizedEquals(component, normalizedTerm))) return 88;

  if (normalizedIncludes(examIndex.exam.name, normalizedTerm)) return 90;

  const safePartialMatch = (value) => {
    const compactValue = compactText(value);
    const valueTokens = getTokens(value);
    const queryTokens = getTokens(normalizedTerm);

    if (valueTokens.length === 1 && queryTokens.length > 1) return false;

    return compactTerm.length >= 3
      && compactValue.length >= 3
      && (normalizedIncludes(value, normalizedTerm) || normalizedIncludes(normalizedTerm, value));
  };

  if (examIndex.synonyms.some(safePartialMatch)) return 82;
  if (examIndex.components.some(safePartialMatch)) return 70;

  const identityHits = countTokenHits(normalizedTerm, examIndex.identityText);
  if (identityHits.total > 0 && identityHits.hits === identityHits.total) {
    return 72 + Math.min(identityHits.hits, 6);
  }

  const supportingHits = countTokenHits(normalizedTerm, examIndex.supportingText);
  if (supportingHits.total > 1 && supportingHits.hits === supportingHits.total) {
    return 58 + Math.min(supportingHits.hits, 4);
  }

  return 0;
};

export const findBestExamMatch = (examSearchIndex, extractedExam, minimumScore = 62) => {
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

  return bestMatch?.score >= minimumScore ? bestMatch : null;
};

export const filterExamSearchResults = (examSearchIndex, term) => {
  const normalizedTerm = normalizeText(term);

  if (!normalizedTerm) {
    return examSearchIndex.map(item => item.exam);
  }

  return examSearchIndex
    .map(item => ({
      exam: item.exam,
      score: scoreExamMatch(item, normalizedTerm),
    }))
    .filter(item => item.score >= 58)
    .sort((a, b) => b.score - a.score || a.exam.name.localeCompare(b.exam.name, 'pt-BR'))
    .map(item => item.exam);
};
