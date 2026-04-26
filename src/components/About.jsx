const About = () => {
  return (
    <div className="about-container container">
      <div className="about-card">
        <h2>Sobre o Guia de Exames do Gato de Botas</h2>
        
        <div className="about-section">
          <h3>Objetivo</h3>
          <p>
            O <strong>Guia de Exames do Gato de Botas</strong> nasceu com a missão de democratizar a informação em saúde, 
            traduzindo o jargão laboratorial ("mediquês") para uma linguagem clara e acessível. 
            Nosso objetivo é empoderar o paciente, permitindo que ele compreenda o que está sendo 
            investigado no seu corpo, a importância do preparo correto e o significado geral dos resultados.
          </p>
        </div>

        <div className="about-section">
          <h3>O que você encontra aqui? (Ferramentas)</h3>
          <ul>
            <li><strong>Busca Inteligente:</strong> Motor de busca otimizado que reconhece siglas (ex: hemograma como HT), metodologias e sinônimos.</li>
            <li><strong>Valores de Referência:</strong> Parâmetros claros e didáticos usados pelos principais laboratórios.</li>
            <li><strong>Metodologias e Componentes:</strong> Detalhamento sobre como o exame é feito na máquina e quais testes menores compõem um "painel" (como o Coagulograma).</li>
            <li><strong>Interações e Curiosidades:</strong> Alertas sobre medicamentos que podem gerar "falsos-positivos" e curiosidades valiosas sobre a biologia do corpo humano.</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Como isso te beneficia?</h3>
          <p>
            Com este aplicativo, você evita sustos desnecessários ao interpretar um exame, aprende 
            como se preparar corretamente (evitando ter que refazer exames por quebra de jejum, por exemplo), 
            e passa a ter diálogos mais produtivos e informados com o seu médico de confiança.
          </p>
        </div>

        <div className="about-warning">
          <h4>Aviso Importante sobre Preparo e Metodologia</h4>
          <p>
            O <strong>Guia de Exames do Gato de Botas</strong> oferece apenas uma visão geral e ampla sobre os exames, metodologias e recomendações. Como cada laboratório preconiza suas próprias regras técnicas, <strong>é imprescindível</strong> que você procure o laboratório de sua escolha para receber as orientações oficiais de preparo e jejum, pois elas irão variar de acordo com o local e o equipamento utilizado.
          </p>
        </div>

        <div className="about-footer">
          <p>Desenvolvido e idealizado por <strong>Charles Buñol</strong></p>
        </div>
      </div>

      <style>{`
        .about-container {
          padding: 3rem 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .about-card {
          background: var(--surface);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--border);
        }
        .about-card h2 {
          color: var(--text-main);
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .about-section {
          margin-bottom: 2rem;
        }
        .about-section h3 {
          color: var(--primary);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--primary-light);
          padding-bottom: 0.5rem;
        }
        .about-section p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.05rem;
        }
        .about-section ul {
          list-style: none;
          padding: 0;
        }
        .about-section li {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .about-section li::before {
          content: "•";
          color: var(--accent);
          font-weight: bold;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -4px;
        }
        .about-warning {
          background-color: rgba(255, 152, 0, 0.1);
          border-left: 4px solid #ff9800;
          padding: 1.5rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-top: 2rem;
        }
        .about-warning h4 {
          color: #e65100;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .about-warning p {
          color: var(--text-main);
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.6;
        }
        .about-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-light);
          font-size: 1.1rem;
        }
        .about-footer strong {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default About;
