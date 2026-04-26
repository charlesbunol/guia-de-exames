import { useState, useEffect } from 'react';
import './Mascot.css';

const tips = [
  "Sabia que o EDTA (tubo roxo) sequestra o cálcio do sangue? Por isso o sangue não coagula no tubo!",
  "Atenção: O tubo de Citrato (azul) precisa ser preenchido até a marca exata, senão o coagulograma dá errado!",
  "O tubo com tampa vermelha ou amarela contém ativador de coágulo. Ele é perfeito para dosar hormônios no soro.",
  "Sangue colhido em tubo de Fluoreto (cinza) paralisa a quebra da glicose pelas hemácias. Ideal para glicemia!",
  "A Biotina (vitamina para cabelo) pode causar falsos resultados em exames de Tireoide e Troponina. Fique de olho!",
  "A amostra de Bilirrubina deve ser protegida da luz, pois os raios UV destroem o pigmento rapidinho!",
  "Se o garrote (borrachinha) ficar apertado no braço por mais de 1 minuto, o sangue concentra e o potássio pode dar falso-alto.",
  "Agite os tubos com anticoagulante suavemente, invertendo de 5 a 8 vezes. Se sacudir forte, as hemácias explodem (hemólise)!",
  "Hemólise é o inimigo número 1 do laboratório: o sangue vaza de dentro da célula e estraga exames de Potássio e TGO.",
  "O Cálcio Iônico precisa ser colhido sem garrotear muito e o tubo não pode ser aberto até a hora da análise!",
  "Cuidado! Tirar sangue de uma veia onde o paciente está tomando soro na hora vai diluir a amostra inteira.",
  "O tubo de tampa verde tem heparina. Ele é muito usado quando o laboratório precisa de plasma para análises bioquímicas.",
  "Beber água antes da coleta geralmente é permitido e ajuda a deixar as veias mais fáceis de encontrar.",
  "Jejum prolongado demais também atrapalha: muitas horas sem comer podem alterar glicose, triglicerídeos e corpos cetônicos.",
  "Exercício intenso antes da coleta pode aumentar CK, TGO, DHL e até alterar leucócitos por algumas horas.",
  "O cortisol costuma ser mais alto pela manhã. Por isso muitos exames hormonais precisam de horário de coleta definido.",
  "A urina tipo 1 deve chegar rápido ao laboratório. Com muita demora, bactérias podem crescer e mudar o resultado.",
  "No exame de fezes, algumas pesquisas precisam de amostras em dias diferentes porque parasitas podem aparecer de forma intermitente.",
  "A hemoglobina glicada mostra uma média aproximada da glicose dos últimos 2 a 3 meses, não apenas do dia da coleta.",
  "Triglicerídeos sobem bastante após refeições gordurosas. Informe ao laboratório se você não estava em jejum quando solicitado.",
  "A creatinina ajuda a estimar a função dos rins, mas idade, massa muscular e hidratação também influenciam.",
  "A PCR sobe em inflamações e infecções, mas ela não diz sozinha qual é a causa do problema.",
  "Ferritina guarda relação com estoque de ferro, mas também pode subir em inflamações. Contexto clínico importa muito.",
  "Medicamentos como corticoides podem alterar leucócitos e glicose. Sempre informe os remédios em uso.",
  "A ordem dos tubos na coleta existe para evitar contaminação de aditivos entre amostras.",
  "Plaquetas podem formar grumos no tubo e parecer falsamente baixas. O laboratório confere isso no microscópio quando suspeita.",
  "Amostras lipêmicas, com muita gordura no soro, podem deixar o material turvo e interferir em várias dosagens.",
  "A vitamina D varia com exposição solar, estação do ano, suplementação e hábitos de vida.",
  "TSH e T4 livre ajudam a avaliar a tireoide, mas doses recentes de biotina podem bagunçar alguns métodos.",
  "Antibiótico antes de cultura pode impedir o crescimento da bactéria e dar resultado falso-negativo.",
  "Coleta de urina para cultura pede higiene cuidadosa e jato médio para reduzir contaminação da amostra.",
  "O sangue venoso e o sangue capilar podem ter pequenas diferenças nos resultados, especialmente na glicose.",
  "Nem todo resultado fora da referência significa doença. Variações pequenas podem acontecer por preparo, horário ou biologia individual.",
  "Resultados críticos são valores que exigem comunicação rápida ao profissional de saúde, pois podem indicar risco imediato.",
  "Amostras coaguladas em tubos com anticoagulante podem invalidar exames como hemograma e coagulograma.",
  "O transporte da amostra também conta: temperatura, luz e tempo podem mudar a estabilidade de alguns exames.",
  "Sabia que o Gato de Botas original era tão sagaz que transformou seu dono pobre num Marquês? Sagacidade pura!"
];

export function Mascot() {
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Fecha o balão automaticamente após 15 segundos
  useEffect(() => {
    let timer;
    if (showTip) {
      timer = setTimeout(() => {
        setShowTip(false);
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [showTip]);

  const handleInteraction = () => {
    if (isAnimating) return; // Evita cliques duplos durante a animação

    // Escolhe uma dica aleatória diferente da atual
    let randomTip;
    do {
      randomTip = tips[Math.floor(Math.random() * tips.length)];
    } while (randomTip === currentTip && tips.length > 1);

    setCurrentTip(randomTip);
    setShowTip(false); // Reseta o balão se já estiver aberto
    setIsAnimating(true);

    // Pequeno atraso para a animação do gato acontecer antes de abrir o balão
    setTimeout(() => {
      setShowTip(true);
      setIsAnimating(false);
    }, 600); // 600ms é o tempo da animação de giro/pulo
  };

  return (
    <div className="mascot-container">
      {showTip && (
        <div className="speech-bubble fadeIn">
          <p>{currentTip}</p>
        </div>
      )}
      <div 
        className={`mascot-character ${isAnimating ? 'interact-anim' : 'floating'}`}
        onClick={handleInteraction}
        title="Clique em mim para uma dica sagaz!"
      >
        <img src="/gato_mascote.png" alt="Gato de Botas Mascote" />
      </div>
    </div>
  );
}
