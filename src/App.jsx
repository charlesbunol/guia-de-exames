import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import SearchHero from './components/SearchHero';
import ResultDashboard from './components/ResultDashboard';
import ExamDetails from './components/ExamDetails';
import About from './components/About';
import { Mascot } from './components/Mascot';
import { examsData } from './data/exams';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'about'
  const [searchResults, setSearchResults] = useState(examsData); // Mostra todos inicialmente
  const [selectedExam, setSelectedExam] = useState(null);
  
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

  const handleSearch = useCallback((term) => {
    const termLower = term.trim().toLowerCase();

    if (!termLower) {
      setSearchResults(examsData);
      setSelectedExam(null);
      return;
    }

    const filtered = examsData.filter(exam => 
      exam.name.toLowerCase().includes(termLower) || 
      exam.shortDescription.toLowerCase().includes(termLower) ||
      (exam.purpose && exam.purpose.toLowerCase().includes(termLower)) ||
      (exam.methodology && exam.methodology.toLowerCase().includes(termLower)) ||
      exam.related.some(r => r.toLowerCase().includes(termLower)) ||
      (exam.synonyms && exam.synonyms.some(s => s.toLowerCase().includes(termLower))) ||
      (exam.components && exam.components.some(c => c.toLowerCase().includes(termLower)))
    ).sort((a, b) => {
      // Prioritize exact match or starts with
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const exactA = aName === termLower || a.id === termLower || (a.synonyms && a.synonyms.some(s => s.toLowerCase() === termLower));
      const exactB = bName === termLower || b.id === termLower || (b.synonyms && b.synonyms.some(s => s.toLowerCase() === termLower));
      if (exactA && !exactB) return -1;
      if (!exactA && exactB) return 1;
      
      const startsA = aName.startsWith(termLower);
      const startsB = bName.startsWith(termLower);
      if (startsA && !startsB) return -1;
      if (!startsA && startsB) return 1;
      
      return 0;
    });
    setSearchResults(filtered);
    setSelectedExam(null); // Volta para a listagem ao pesquisar
  }, []);

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRelated = (name) => {
    const termLower = name.toLowerCase();
    const foundExam = examsData.find(e => 
      e.name.toLowerCase().includes(termLower) || 
      e.id === termLower ||
      termLower.includes(e.id)
    );
    if (foundExam) {
      setSelectedExam(foundExam);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSearch(name);
    }
  };

  const handleBack = () => {
    setSelectedExam(null);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Header 
        currentView={currentView} 
        onViewChange={handleViewChange} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        {currentView === 'about' ? (
          <About />
        ) : !selectedExam ? (
          <>
            <SearchHero onSearch={handleSearch} />
            <ResultDashboard exams={searchResults} onSelectExam={handleSelectExam} />
          </>
        ) : (
          <ExamDetails exam={selectedExam} onBack={handleBack} onSelectRelated={handleSelectRelated} />
        )}
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
      `}</style>
      <Mascot />
    </div>
  );
}

export default App;
