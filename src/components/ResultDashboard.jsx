import { useMemo, useState } from 'react';

const ResultDashboard = ({ exams, onSelectExam }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const hasResults = exams && exams.length > 0;
  const categories = useMemo(() => {
    const counts = exams.reduce((acc, exam) => {
      acc[exam.category] = (acc[exam.category] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .sort(([a], [b]) => a.localeCompare(b, 'pt-BR'))
      .map(([name, count]) => ({ name, count }));
  }, [exams]);

  const activeCategory = selectedCategory !== 'Todos' && categories.some(category => category.name === selectedCategory)
    ? selectedCategory
    : 'Todos';

  const displayedExams = useMemo(() => {
    if (activeCategory === 'Todos') return exams;
    return exams.filter(exam => exam.category === activeCategory);
  }, [activeCategory, exams]);

  const groupedExams = useMemo(() => {
    return displayedExams.reduce((groups, exam) => {
      if (!groups[exam.category]) groups[exam.category] = [];
      groups[exam.category].push(exam);
      return groups;
    }, {});
  }, [displayedExams]);

  const categorySections = useMemo(() => {
    return Object.entries(groupedExams).sort(([a], [b]) => a.localeCompare(b, 'pt-BR'));
  }, [groupedExams]);

  const handleCardKeyDown = (event, exam) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelectExam(exam);
    }
  };

  return (
    <div className="dashboard-container container">
      <div className="results-motion">
        {hasResults ? (
          <>
            <div className="results-header">
              <div>
                <h3 className="section-title">Resultados da Busca ({displayedExams.length})</h3>
                <p className="section-subtitle">Organizado por categorias para conferir listas grandes de receitas com mais rapidez.</p>
              </div>
              <div className="category-filter" aria-label="Filtrar por categoria">
                <button
                  type="button"
                  className={`filter-chip ${activeCategory === 'Todos' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Todos')}
                >
                  Todos <span>{exams.length}</span>
                </button>
                {categories.map(category => (
                  <button
                    key={category.name}
                    type="button"
                    className={`filter-chip ${activeCategory === category.name ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name} <span>{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="category-sections">
              {categorySections.map(([category, categoryExams]) => (
                <section className="exam-category-section" key={category}>
                  <div className="category-heading">
                    <h4>{category}</h4>
                    <span>{categoryExams.length}</span>
                  </div>
                  <div className="grid">
                    {categoryExams.map((exam) => (
                      <div
                        key={exam.id}
                        className="card"
                        onClick={() => onSelectExam(exam)}
                        onKeyDown={(event) => handleCardKeyDown(event, exam)}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="card-header">
                          <span className="category-badge">{exam.category}</span>
                          <h4>{exam.name}</h4>
                        </div>
                        <div className="card-body">
                          <p>{exam.shortDescription}</p>
                        </div>
                        <div className="card-footer">
                          <span className="view-btn">Ver Detalhes
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <p>Nenhum exame encontrado. Tente buscar por Hemograma ou Glicemia.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes resultsSoftIn {
          from {
            opacity: 0.88;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .dashboard-container {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .results-motion {
          animation: resultsSoftIn 200ms ease-out both;
        }
        .section-title {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 0.35rem;
        }
        .section-subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 640px;
        }
        .results-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .category-filter {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: thin;
        }
        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          flex: 0 0 auto;
          min-height: 2.35rem;
          padding: 0.45rem 0.8rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          background: var(--surface);
          font-weight: 600;
          font-size: 0.84rem;
          transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
        }
        .filter-chip span {
          color: var(--text-light);
          font-variant-numeric: tabular-nums;
        }
        .filter-chip:hover,
        .filter-chip.active {
          border-color: var(--primary);
          color: var(--primary-hover);
          background: var(--primary-light);
        }
        .category-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .exam-category-section {
          scroll-margin-top: 7rem;
        }
        .category-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .category-heading h4 {
          color: var(--text-main);
          font-size: 1.1rem;
        }
        .category-heading span {
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.9rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .no-results {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
          background: var(--surface);
          border-radius: var(--radius-lg);
          margin: 2rem auto;
          max-width: 600px;
          box-shadow: var(--shadow-sm);
        }
        .card {
          background: var(--surface);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .card:focus-visible {
          outline: 3px solid rgba(14, 165, 233, 0.28);
          outline-offset: 3px;
        }
        .card-header {
          margin-bottom: 1rem;
        }
        .category-badge {
          display: inline-block;
          background: var(--primary-light);
          color: var(--primary-hover);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.5rem;
        }
        .card-header h4 {
          font-size: 1.25rem;
          color: var(--text-main);
        }
        .card-body {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .card-body p {
          color: var(--text-muted);
          font-size: 0.95rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-footer {
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }
        .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .view-btn:hover {
          color: var(--primary-hover);
        }
        .view-btn svg {
          transition: transform 0.2s;
        }
        .card:hover .view-btn svg {
          transform: translateX(4px);
        }
        @media (max-width: 640px) {
          .dashboard-container {
            padding-top: 1rem;
            padding-bottom: 2rem;
          }
          .section-title {
            font-size: 1.15rem;
          }
          .section-subtitle {
            display: none;
          }
          .results-header {
            margin-bottom: 1rem;
          }
          .category-sections {
            gap: 1.35rem;
          }
          .category-heading {
            margin-bottom: 0.75rem;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ResultDashboard;
