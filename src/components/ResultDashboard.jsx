const ResultDashboard = ({ exams, onSelectExam }) => {
  const hasResults = exams && exams.length > 0;

  return (
    <div className="dashboard-container container">
      <div className="results-motion">
        {hasResults ? (
          <>
            <h3 className="section-title">Resultados da Busca ({exams.length})</h3>
            <div className="grid">
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="card"
                  onClick={() => onSelectExam(exam)}
                >
                  <div className="card-header">
                    <span className="category-badge">{exam.category}</span>
                    <h4>{exam.name}</h4>
                  </div>
                  <div className="card-body">
                    <p>{exam.shortDescription}</p>
                  </div>
                  <div className="card-footer">
                    <button className="view-btn">Ver Detalhes
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
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
          margin-bottom: 1.5rem;
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
            margin-bottom: 0.85rem;
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
