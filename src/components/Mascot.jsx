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
