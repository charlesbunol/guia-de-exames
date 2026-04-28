import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Header from './components/Header';
import SearchHero from './components/SearchHero';
import ResultDashboard from './components/ResultDashboard';
import ExamDetails from './components/ExamDetails';
import About from './components/About';
import RequestAnalyzer from './components/RequestAnalyzer';
import { Mascot } from './components/Mascot';
import { examsData } from './data/exams';

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
const normalizedIncludes = (source, term) => (
  source.includes(term) || compactText(source).includes(compactText(term))
);
const normalizedMatches = (source, term) => {
  if (normalizedIncludes(source, term)) return true;

  const tokens = term.split(' ').filter(token => token.length > 1);
  return tokens.length > 1 && tokens.every(token => normalizedIncludes(source, token));
};
const normalizedEquals = (source, term) => (
  normalizeText(source) === term || compactText(source) === compactText(term)
);

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

const filterExams = (term) => {
  const termLower = normalizeText(term);

  if (!termLower) {
    return examsData;
  }

  return examsData.filter(exam => normalizedMatches(getExamSearchText(exam), termLower)).sort((a, b) => {
    const aName = normalizeText(a.name);
    const bName = normalizeText(b.name);
    const exactA = normalizedEquals(a.name, termLower) || normalizedEquals(a.id, termLower) || (a.synonyms && a.synonyms.some(s => normalizedEquals(s, termLower)));
    const exactB = normalizedEquals(b.name, termLower) || normalizedEquals(b.id, termLower) || (b.synonyms && b.synonyms.some(s => normalizedEquals(s, termLower)));
    if (exactA && !exactB) return -1;
    if (!exactA && exactB) return 1;

    const startsA = aName.startsWith(termLower);
    const startsB = bName.startsWith(termLower);
    if (startsA && !startsB) return -1;
    if (!startsA && startsB) return 1;

    return 0;
  });
};

const findRelatedExam = (name) => {
  const termLower = normalizeText(name);

  return examsData.find(e =>
    normalizedIncludes(normalizeText(e.name), termLower) ||
    normalizedEquals(e.id, termLower) ||
    normalizedIncludes(termLower, normalizeText(e.id)) ||
    (e.synonyms && e.synonyms.some(s => normalizedIncludes(normalizeText(s), termLower) || normalizedIncludes(termLower, normalizeText(s))))
  );
};

const getExamPath = (examId) => `/exames/${encodeURIComponent(examId)}`;

const quickCategoryFilters = [
  'Sangue',
  'Urina',
  'Hormônios',
  'Bioquímica',
  'Coagulação',
  'Tireoide',
  'Marcadores Tumorais',
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => filterExams(query), [query]);

  const handleSearch = useCallback((term) => {
    const trimmedTerm = term.trim();
    setSearchParams(trimmedTerm ? { q: trimmedTerm } : {}, { replace: true });
  }, [setSearchParams]);

  const handleSelectExam = useCallback((exam) => {
    navigate(getExamPath(exam.id));
  }, [navigate]);

  return (
    <>
      <SearchHero
        searchValue={query}
        quickFilters={quickCategoryFilters}
        onSearch={handleSearch}
      />
      <ResultDashboard exams={searchResults} onSelectExam={handleSelectExam} />
    </>
  );
}

function ExamDetailsPage() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const exam = useMemo(() => {
    return examsData.find(item => item.id === examId);
  }, [examId]);

  const relatedExamLinks = useMemo(() => {
    if (!exam?.related) return [];

    return exam.related.map(name => {
      const foundExam = findRelatedExam(name);

      return {
        name,
        path: foundExam ? getExamPath(foundExam.id) : null,
      };
    });
  }, [exam]);

  const handleBack = useCallback(() => {
    if (location.key !== 'default') {
      navigate(-1);
      return;
    }

    navigate('/');
  }, [location.key, navigate]);

  const handleSelectRelated = useCallback((name) => {
    const foundExam = findRelatedExam(name);

    if (foundExam) {
      navigate(getExamPath(foundExam.id));
      return;
    }

    navigate(`/?q=${encodeURIComponent(name)}`);
  }, [navigate]);

  if (!exam) {
    return <ExamNotFound />;
  }

  return (
    <ExamDetails
      exam={exam}
      relatedExams={relatedExamLinks}
      onBack={handleBack}
      onSelectRelated={handleSelectRelated}
    />
  );
}

function ExamNotFound() {
  return (
    <div className="not-found container">
      <h2>Exame não encontrado</h2>
      <p>Não encontramos esse exame no guia. Você pode voltar para a busca e tentar outro termo.</p>
      <Link to="/" className="not-found-link">Voltar para a busca</Link>

      <style>{`
        .not-found {
          max-width: 720px;
          padding-top: 4rem;
          padding-bottom: 4rem;
          text-align: center;
        }
        .not-found h2 {
          color: var(--text-main);
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .not-found p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .not-found-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: #fff;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
        }
        .not-found-link:hover {
          color: #fff;
          background: var(--primary-hover);
        }
      `}</style>
    </div>
  );
}

function AppShell() {
  // Inicializa o tema checando o localStorage ou a preferência do sistema
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Aplica o tema na raiz do documento e salva no localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-wrapper">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ler-solicitacao" element={<RequestAnalyzer />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/exames/:examId" element={<ExamDetailsPage />} />
          <Route path="*" element={<ExamNotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Guia de Exames Médicos. Todos os direitos reservados.</p>
          <p className="disclaimer">Aviso: As informações disponíveis aqui são apenas para fins educativos. Consulte sempre um médico.</p>
        </div>
      </footer>

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
        .footer {
          background-color: var(--surface);
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          text-align: center;
          margin-top: auto;
        }
        .footer p {
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        .footer .disclaimer {
          font-size: 0.75rem;
          color: var(--text-light);
        }
        @media (max-width: 768px) {
          .footer {
            padding-bottom: calc(5.25rem + env(safe-area-inset-bottom, 0px));
          }
        }
      `}</style>
      <Mascot />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
