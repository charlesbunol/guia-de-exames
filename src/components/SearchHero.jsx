import { useEffect, useRef, useState } from 'react';

const DEBOUNCE_DELAY = 300;

const SearchHero = ({ searchValue = '', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(searchValue);
  const [isFocused, setIsFocused] = useState(false);
  const debounceRef = useRef(null);
  const hasTypedRef = useRef(false);
  const skipNextDebounceRef = useRef(false);
  const isCompact = isFocused || searchTerm.trim().length > 0;

  useEffect(() => {
    const syncTimer = window.setTimeout(() => {
      setSearchTerm(searchValue);
      hasTypedRef.current = false;
      skipNextDebounceRef.current = false;
    }, 0);

    return () => {
      window.clearTimeout(syncTimer);
    };
  }, [searchValue]);

  useEffect(() => {
    if (!hasTypedRef.current) return undefined;
    if (skipNextDebounceRef.current) {
      skipNextDebounceRef.current = false;
      return undefined;
    }

    debounceRef.current = window.setTimeout(() => {
      onSearch(searchTerm);
    }, DEBOUNCE_DELAY);

    return () => {
      window.clearTimeout(debounceRef.current);
    };
  }, [onSearch, searchTerm]);

  const runSearchNow = (term) => {
    window.clearTimeout(debounceRef.current);
    onSearch(term);
  };

  const handleChange = (e) => {
    hasTypedRef.current = true;
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearchNow(searchTerm);
  };

  const handleQuickSearch = (term) => {
    hasTypedRef.current = true;
    skipNextDebounceRef.current = true;
    setSearchTerm(term);
    runSearchNow(term);
  };

  const handleClear = () => {
    hasTypedRef.current = true;
    skipNextDebounceRef.current = true;
    setSearchTerm('');
    runSearchNow('');
  };

  return (
    <div className={`hero ${isCompact ? 'hero-compact' : ''}`}>
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <h2 className="animate-fade-in">Entenda seus Exames de Saúde</h2>
        <p className="subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Pesquise exames laboratoriais, descubra para que servem e saiba como se preparar.
        </p>
        
        <form className="search-form animate-fade-in" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
          <div className="search-input-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Ex: Hemograma, Glicemia, Colesterol..." 
              value={searchTerm}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              aria-label="Buscar exames"
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-button"
                onClick={handleClear}
                aria-label="Limpar busca"
                title="Limpar busca"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
            <button type="submit" className="search-button">Pesquisar</button>
          </div>
        </form>
        
        <div className="popular-searches animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span>Buscas populares:</span>
          <button onClick={() => handleQuickSearch('Hemograma')}>Hemograma</button>
          <button onClick={() => handleQuickSearch('Glicemia')}>Glicemia</button>
        </div>
      </div>
      
      <style>{`
        .hero {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--surface) 100%);
        }
        .hero-bg {
          position: absolute;
          top: -50%;
          left: -10%;
          width: 120%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero h2 {
          font-size: 2.5rem;
          color: #0f172a; /* Forçado escuro devido ao gradiente claro */
          margin-bottom: 1rem;
          font-weight: 700;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
        }
        .subtitle {
          font-size: 1.125rem;
          color: #1e293b; /* Forçado escuro devido ao gradiente claro */
          max-width: 600px;
          margin-bottom: 2.5rem;
          font-weight: 500;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
        }
        .search-form {
          width: 100%;
          max-width: 600px;
          margin-bottom: 1.5rem;
        }
        .search-input-wrapper {
          display: flex;
          align-items: center;
          background: var(--surface);
          border-radius: var(--radius-full);
          padding: 0.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .search-input-wrapper:focus-within {
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
        .search-icon {
          color: var(--text-light);
          margin: 0 1rem;
        }
        .search-input-wrapper input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1rem;
          padding: 0.75rem 0;
          color: var(--text-main);
          background: transparent;
          min-width: 0;
        }
        .clear-button {
          width: 2.25rem;
          height: 2.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          margin-right: 0.5rem;
          color: var(--text-light);
          border-radius: var(--radius-full);
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .clear-button:hover,
        .clear-button:focus-visible {
          background: rgba(148, 163, 184, 0.14);
          color: var(--text-main);
        }
        .search-button {
          background-color: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: 500;
          transition: background-color 0.2s ease;
        }
        .search-button:hover {
          background-color: var(--primary-hover);
        }
        .popular-searches {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }
        .popular-searches span {
          color: #0f172a; /* Forçado escuro */
          font-size: 0.95rem;
          font-weight: 600;
        }
        .popular-searches button {
          font-size: 0.875rem;
          color: var(--primary);
          background: rgba(14, 165, 233, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          transition: background 0.2s;
        }
        .popular-searches button:hover {
          background: rgba(14, 165, 233, 0.2);
        }
        
        @media (max-width: 640px) {
          .hero {
            padding: 2rem 0 1.5rem;
            transition: padding 0.2s ease;
          }
          .hero h2 { font-size: 2rem; }
          .hero-compact {
            padding: 0.85rem 0;
            position: sticky;
            top: 5.9rem;
            z-index: 9;
            box-shadow: 0 8px 18px rgb(15 23 42 / 0.08);
          }
          .hero-compact h2,
          .hero-compact .subtitle,
          .hero-compact .popular-searches {
            display: none;
          }
          .hero-compact .search-form {
            margin-bottom: 0;
          }
          .search-input-wrapper { 
            display: grid;
            grid-template-columns: 1fr auto;
            border-radius: var(--radius-md);
            padding: 0;
            overflow: hidden;
          }
          .search-icon { display: none; }
          .search-input-wrapper input { padding: 1rem; width: 100%; }
          .clear-button { align-self: center; }
          .search-button { grid-column: 1 / -1; width: 100%; border-radius: 0; padding: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default SearchHero;
