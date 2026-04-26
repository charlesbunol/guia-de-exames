import { useState } from 'react';
import { getCollectionInfo } from '../data/collectionMaterials';

const AccordionItem = ({ title, children, isOpen, onClick, className = '' }) => {
  return (
    <div className={`accordion-item ${className} ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className="accordion-content">
        <div className="accordion-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const ExamDetails = ({ exam, onBack, onSelectRelated }) => {
  const [openSection, setOpenSection] = useState('purpose');
  const collectionInfo = getCollectionInfo(exam);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!exam) return null;

  return (
    <div className="details-container container animate-fade-in">
      <button className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Voltar para resultados
      </button>

      <div className="details-header">
        <div className="badge-group">
          <span className="category-badge">{exam.category}</span>
        </div>
        <h2>{exam.name}</h2>
        {exam.synonyms && exam.synonyms.length > 0 && (
          <p className="synonyms">
            <strong>Também conhecido como:</strong> {exam.synonyms.join(', ')}
          </p>
        )}
        {exam.components && exam.components.length > 0 && (
          <div className="components-list">
            <strong>Composto por:</strong> {exam.components.join(', ')}
          </div>
        )}
        <p className="description">{exam.shortDescription}</p>
        
        {exam.referenceValues && exam.referenceValues.length > 0 && (
          <div className="reference-values">
            <h4>Valores de Referência</h4>
            <ul>
              {exam.referenceValues.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
        )}
        
        {exam.related && exam.related.length > 0 && (
          <div className="related-exams">
            <span>Relacionados:</span>
            <div className="tags">
              {exam.related.map(r => (
                <span 
                  key={r} 
                  className="tag clickable" 
                  onClick={() => onSelectRelated && onSelectRelated(r)}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="accordion-group">
        <AccordionItem 
          title="Para que serve?" 
          isOpen={openSection === 'purpose'} 
          onClick={() => toggleSection('purpose')}
        >
          <p>{exam.purpose}</p>
        </AccordionItem>

        <AccordionItem 
          title="Metodologia (Como é feito)" 
          isOpen={openSection === 'methodology'} 
          onClick={() => toggleSection('methodology')}
        >
          <p>{exam.methodology}</p>
        </AccordionItem>

        <AccordionItem
          title="Tubo de Coleta"
          isOpen={openSection === 'collection'}
          onClick={() => toggleSection('collection')}
        >
          <div className="collection-info">
            <div className="collection-row">
              <strong>Material:</strong>
              <span>{collectionInfo.material}</span>
            </div>
            <div className="collection-row">
              <strong>Tubo/recipiente:</strong>
              <span>{collectionInfo.container}</span>
            </div>
            <div className="collection-row">
              <strong>Referência Fleury:</strong>
              <span>{collectionInfo.fleuryNote}</span>
            </div>
            {collectionInfo.handling && collectionInfo.handling.length > 0 && (
              <ul className="info-list collection-list">
                {collectionInfo.handling.map((item, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <p className="collection-source">
              Base: <a href={collectionInfo.sourceUrl} target="_blank" rel="noreferrer">{collectionInfo.sourceLabel}</a>. O tubo pode variar conforme unidade, kit analítico e pedido médico.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Preparo Necessário" 
          isOpen={openSection === 'preparation'} 
          onClick={() => toggleSection('preparation')}
        >
          <ul className="info-list">
            {exam.preparation.map((prep, idx) => (
              <li key={idx}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {prep}
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem 
          title="Interações Medicamentosas" 
          isOpen={openSection === 'interactions'} 
          onClick={() => toggleSection('interactions')}
        >
          {exam.interactions && exam.interactions.length > 0 ? (
            <ul className="info-list interactions-list">
              {exam.interactions.map((interaction, idx) => (
                <li key={idx}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {interaction}
                </li>
              ))}
            </ul>
          ) : (
            <p>Não há interações medicamentosas comumente relatadas ou significativas para a metodologia deste exame.</p>
          )}
        </AccordionItem>

        {exam.curiosities && exam.curiosities.length > 0 && (
          <AccordionItem 
            title="Curiosidades" 
            isOpen={openSection === 'curiosities'} 
            onClick={() => toggleSection('curiosities')}
            className="curiosities-panel"
          >
            <ul className="info-list curiosity-list">
              {exam.curiosities.map((curiosity, idx) => (
                <li key={idx}>
                  <span className="emoji">💡</span>
                  {curiosity}
                </li>
              ))}
            </ul>
          </AccordionItem>
        )}
      </div>

      <style>{`
        .details-container {
          padding-top: 2rem;
          padding-bottom: 4rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 2rem;
          transition: color 0.2s;
        }
        .back-btn:hover {
          color: var(--primary);
        }
        .details-header {
          background: var(--surface);
          border-radius: var(--radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          margin-bottom: 2rem;
        }
        .badge-group {
          margin-bottom: 1rem;
        }
        .category-badge {
          background: var(--primary-light);
          color: var(--primary-hover);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }
        .details-header h2 {
          font-size: 2rem;
          color: var(--text-main);
          margin-bottom: 1rem;
        }
        .synonyms {
          color: var(--primary);
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
          background-color: var(--primary-light);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          display: inline-block;
        }
        .components-list {
          color: var(--text-main);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          background-color: var(--background);
          border-left: 4px solid var(--accent);
          padding: 0.5rem 1rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .description {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        .reference-values {
          background: var(--background);
          border: 1px solid var(--border);
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
        }
        .reference-values h4 {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: var(--primary);
        }
        .reference-values ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .reference-values li {
          font-size: 0.9rem;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }
        .reference-values li:last-child {
          margin-bottom: 0;
        }
        .related-exams {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .related-exams > span {
          font-size: 0.875rem;
          color: var(--text-light);
        }
        .tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .tag {
          background: var(--background);
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }
        .tag.clickable {
          cursor: pointer;
        }
        .tag.clickable:hover {
          background: var(--primary-light);
          color: var(--primary-hover);
          border-color: var(--primary-light);
        }
        
        .accordion-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .accordion-item {
          background: var(--surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .accordion-item:hover {
          border-color: var(--primary-light);
        }
        .accordion-item.open {
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: transparent;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-main);
          text-align: left;
        }
        .chevron {
          color: var(--text-light);
          transition: transform 0.3s ease;
        }
        .accordion-item.open .chevron {
          transform: rotate(180deg);
          color: var(--primary);
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .accordion-item.open .accordion-content {
          max-height: none;
        }
        .accordion-content::-webkit-scrollbar,
        .curiosity-list::-webkit-scrollbar {
          width: 8px;
        }
        .accordion-content::-webkit-scrollbar-track,
        .curiosity-list::-webkit-scrollbar-track {
          background: rgba(14, 165, 233, 0.08);
          border-radius: var(--radius-full);
        }
        .accordion-content::-webkit-scrollbar-thumb,
        .curiosity-list::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: var(--radius-full);
        }
        .curiosities-panel.open .accordion-content {
          position: relative;
          overflow: visible;
          scrollbar-width: thin;
          scrollbar-color: var(--primary) rgba(14, 165, 233, 0.08);
          -webkit-overflow-scrolling: touch;
        }
        .accordion-inner {
          padding: 0 1.5rem 1.5rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .collection-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: var(--text-muted);
        }
        .collection-row {
          display: grid;
          grid-template-columns: minmax(130px, 0.34fr) 1fr;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .collection-row strong {
          color: var(--text-main);
        }
        .collection-list {
          padding: 0.25rem 0 0;
        }
        .collection-source {
          font-size: 0.85rem;
          color: var(--text-light);
        }
        
        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .info-list li:last-child {
          margin-bottom: 0;
        }
        .info-list li svg {
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        .curiosity-list li {
          background: #fffbeb; /* Light yellow */
          color: #92400e;
          padding: 1rem;
          border-radius: var(--radius-md);
          border-left: 4px solid #f59e0b;
        }
        .emoji {
          font-size: 1.2rem;
        }

        @media (max-width: 640px) {
          .details-container {
            padding-top: 1rem;
            padding-bottom: 2rem;
          }
          .back-btn {
            margin-bottom: 1rem;
          }
          .details-header {
            padding: 1.25rem;
            margin-bottom: 1rem;
          }
          .details-header h2 {
            font-size: 1.55rem;
          }
          .description {
            font-size: 1rem;
          }
          .accordion-group {
            gap: 0.75rem;
          }
          .accordion-header {
            padding: 1rem;
            font-size: 1rem;
          }
          .accordion-inner {
            padding: 0 1rem 1rem;
          }
          .collection-row {
            grid-template-columns: 1fr;
            gap: 0.35rem;
            padding: 0.8rem;
          }
          .curiosities-panel.open .accordion-content {
            max-height: none;
            overflow: visible;
            border-top: 1px solid var(--border);
          }
          .curiosity-list {
            max-height: none;
            overflow: visible;
            padding-right: 0.35rem;
          }
          .curiosity-list li {
            padding: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ExamDetails;
