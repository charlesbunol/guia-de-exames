export const expandedExamsData2 = [
  {
    id: "imunoglobulinas-iga-igg-igm",
    name: "Imunoglobulinas Totais (IgA, IgG, IgM)",
    category: "Imunologia",
    shortDescription: "Mede a quantidade total dos principais anticorpos no sangue.",
    purpose: "Avaliar o sistema imunológico, diagnosticar imunodeficiências, infecções crônicas, mieloma múltiplo e doenças autoimunes.",
    methodology: "Nefelometria ou Imunoturbidimetria.",
    preparation: [
      "Jejum de 4 a 8 horas (dependendo do laboratório).",
      "É importante informar se tomou vacinas recentemente, pois pode alterar os níveis."
    ],
    referenceValues: [
      "IgG (Adultos): 700 a 1600 mg/dL",
      "IgA (Adultos): 70 a 400 mg/dL",
      "IgM (Adultos): 40 a 230 mg/dL"
    ],
    interactions: [
      "Pacientes que recebem infusões de imunoglobulinas intravenosas (IGIV) terão valores falsamente elevados de acordo com o padrão próprio."
    ],
    related: ["eletroforese", "ige", "pcr"],
    synonyms: ["Dosagem de Imunoglobulinas", "IgA", "IgG", "IgM", "Anticorpos totais"],
    curiosities: [
      "A IgG é a nossa memória imunológica (indica se já tivemos uma doença), a IgM é a nossa tropa de choque (aparece nas infecções agudas) e a IgA atua como um escudo protetor nas mucosas, como o intestino e os pulmões!"
    ]
  },
  {
    id: "ige-total",
    name: "IgE Total",
    category: "Imunologia",
    shortDescription: "Marcador geral para processos alérgicos e infestações parasitárias.",
    purpose: "Diagnóstico de doenças alérgicas (asma, rinite, dermatite atópica) e suspeita de infecções por vermes.",
    methodology: "Eletroquimioluminescência ou Quimioluminescência.",
    preparation: [
      "Jejum não obrigatório, mas recomendável evitar refeições muito gordurosas."
    ],
    referenceValues: [
      "Adultos: Até 100 UI/mL"
    ],
    interactions: [
      "Corticoides (como prednisona) e medicamentos imunossupressores reduzem os níveis de IgE."
    ],
    related: ["ige-especifico", "hemograma", "epf"],
    synonyms: ["Imunoglobulina E Total", "IgE"],
    curiosities: [
      "Ter a IgE alta não significa que você sabe a O QUE você tem alergia. A IgE Total é como o alarme de incêndio tocando; para achar o fogo, precisamos fazer o exame de IgE Específica para cada alérgeno (poeira, leite, mofo)."
    ]
  },
  {
    id: "painel-ena",
    name: "Anticorpos ENA (Anti-Ro, Anti-La, Anti-Sm, Anti-RNP)",
    category: "Imunologia",
    shortDescription: "Painel de autoanticorpos para investigar doenças reumatológicas e autoimunes.",
    purpose: "Auxilia no diagnóstico de Lúpus Eritematoso Sistêmico (LES), Síndrome de Sjögren, Doença Mista do Tecido Conjuntivo e outras colagenoses.",
    methodology: "ELISA, Imunofluorescência Indireta ou Imunoblot.",
    preparation: [
      "Jejum de 4 horas."
    ],
    referenceValues: [
      "Normal: Não reagente (Negativo)."
    ],
    interactions: [],
    related: ["fan", "anti-dna", "fator-reumatoide"],
    synonyms: ["Anti-Ro", "SSA", "Anti-La", "SSB", "Anti-Sm", "Anti-SSL", "Anti-RNP"],
    curiosities: [
      "Normalmente esses exames só são solicitados se o FAN der positivo. Se o FAN é o investigador que diz 'tem um crime acontecendo', os ENAs são os peritos que identificam 'quem é o criminoso' (qual doença específica você tem)."
    ]
  },
  {
    id: "anti-dna",
    name: "Anti-DNA de Dupla Hélice (Anti-dsDNA)",
    category: "Imunologia",
    shortDescription: "O marcador de ouro para atividade da doença Lúpus.",
    purpose: "Confirmação do diagnóstico de Lúpus Eritematoso Sistêmico (LES) e acompanhamento da atividade da doença (se os rins estão sob ataque).",
    methodology: "Imunofluorescência Indireta (IFI) no substrato Crithidia luciliae ou ELISA.",
    preparation: [
      "Jejum de 4 a 8 horas."
    ],
    referenceValues: [
      "Normal: Não reagente (Negativo)."
    ],
    interactions: [
      "Certos medicamentos contínuos (como hidralazina ou isoniazida) podem desencadear Lúpus induzido por drogas, mas o Anti-DNA nativo costuma ser negativo nesses casos."
    ],
    related: ["fan", "painel-ena", "eas-urina"],
    synonyms: ["Anti-DNA Nativo", "Anti-DNA", "Anti ds-DNA", "Anti RNA"],
    curiosities: [
      "A técnica clássica de Imunofluorescência para este exame usa um pequeno protozoário brilhante chamado 'Crithidia luciliae'. Se o paciente tem a doença, a 'boca' (cinetoplasto) do protozoário acende no microscópio!"
    ]
  },
  {
    id: "beta-hcg",
    name: "Beta hCG (Quantitativo)",
    category: "Hormônios",
    shortDescription: "O exame definitivo para confirmação e acompanhamento de gravidez.",
    purpose: "Diagnóstico precoce de gravidez, acompanhamento de gestação, diagnóstico de gravidez ectópica e detecção de certos tumores germinativos.",
    methodology: "Eletroquimioluminescência ou Quimioluminescência.",
    preparation: [
      "Jejum NÃO é necessário.",
      "Para um resultado confiável para descartar gravidez, colher com pelo menos 1 a 3 dias de atraso menstrual."
    ],
    referenceValues: [
      "Homens e Mulheres não grávidas: Inferior a 5,0 mUI/mL",
      "Sugestivo de gravidez: Maior que 25,0 mUI/mL"
    ],
    interactions: [
      "Mulheres em tratamentos de fertilidade que tomam injeções de hCG podem ter resultados falso-positivos se colherem o sangue muito cedo."
    ],
    related: ["progesterona", "tsh"],
    synonyms: ["hCG Quanti", "Gonadotrofina Coriônica Humana", "Teste de Gravidez de Sangue"],
    curiosities: [
      "O Gato de Botas avisa: ao contrário do teste de farmácia (que só diz Sim ou Não), o Beta Quantitativo conta exatamente quanto hormônio tem. Nas primeiras semanas, esse número dobra a cada 48 horas!"
    ]
  },
  {
    id: "toxoplasmose",
    name: "Sorologia para Toxoplasmose (IgG e IgM)",
    category: "Infecciosas",
    shortDescription: "Pesquisa de anticorpos contra o parasita Toxoplasma gondii.",
    purpose: "Verificar imunidade ou infecção aguda da 'doença do gato'. Essencial no pré-natal de gestantes para evitar transmissão ao bebê.",
    methodology: "Eletroquimioluminescência ou ELISA.",
    preparation: [
      "Jejum de 4 horas (evita soro lipêmico que interfere no teste)."
    ],
    referenceValues: [
      "IgG Não Reagente e IgM Não Reagente: O paciente nunca teve contato com o parasita (suscetível).",
      "IgG Reagente e IgM Não Reagente: Infecção antiga (cicatriz imunológica / imune).",
      "IgM Reagente: Infecção recente."
    ],
    interactions: [],
    related: ["rubeola", "citomegalovirus", "avidez-igg"],
    synonyms: ["Toxo IgG", "Toxo IgM", "Doença do gato"],
    curiosities: [
      "Muitas pessoas culpam injustamente os gatos! A contaminação mais comum ocorre por comer carnes cruas/malpassadas (como porco ou boi) ou verduras mal lavadas contendo cistos do parasita no solo."
    ]
  },
  {
    id: "rubeola",
    name: "Sorologia para Rubéola (IgG e IgM)",
    category: "Infecciosas",
    shortDescription: "Exame que detecta a imunidade ou infecção aguda pelo vírus da rubéola.",
    purpose: "Fundamental para gestantes e mulheres que planejam engravidar. Se uma grávida pega rubéola no primeiro trimestre, o bebê tem alto risco de nascer com malformações congênitas severas (surdez, cegueira).",
    methodology: "Quimioluminescência ou Eletroquimioluminescência.",
    preparation: [
      "Jejum não é obrigatório."
    ],
    referenceValues: [
      "IgG Reagente: Imunidade (geralmente pela vacina Tríplice Viral ou doença prévia).",
      "IgM Reagente: Infecção ativa."
    ],
    interactions: [],
    related: ["toxoplasmose", "citomegalovirus"],
    synonyms: ["Rubéola IgG", "Rubéola IgM", "Teste do Vírus da Rubéola"],
    curiosities: [
      "Se o seu exame de Rubéola IgG der 'Não Reagente' e você não está grávida, procure o posto de saúde para tomar a vacina Tríplice Viral! A prevenção é a melhor cura."
    ]
  },
  {
    id: "citomegalovirus",
    name: "Sorologia para Citomegalovírus (CMV IgG e IgM)",
    category: "Infecciosas",
    shortDescription: "Detecta anticorpos contra o CMV, um vírus muito comum da família do herpes.",
    purpose: "Muitas vezes pedido no painel TORCH para gestantes (para avaliar risco de infecção fetal) e muito importante em pacientes imunossuprimidos e transplantados.",
    methodology: "Quimioluminescência ou Eletroquimioluminescência.",
    preparation: [
      "Jejum não é necessário, mas recomendável 4 horas."
    ],
    referenceValues: [
      "Maioria dos adultos saudáveis possui CMV IgG Reagente (contato antigo) sem ter sentido nenhum sintoma grave."
    ],
    interactions: [],
    related: ["toxoplasmose", "rubeola", "avidez-igg"],
    synonyms: ["CMV IgG", "CMV IgM"],
    curiosities: [
      "Assim como a catapora, o Citomegalovírus fica escondido e adormecido nas nossas células a vida toda depois da primeira infecção. Se nossa imunidade cair drasticamente, ele pode 'acordar' e causar problemas."
    ]
  },
  {
    id: "chagas",
    name: "Doença de Chagas (Sorologia IgG/IgM)",
    category: "Infecciosas",
    shortDescription: "Exame para detectar a infecção pelo parasita Trypanosoma cruzi, transmitido pelo inseto Barbeiro.",
    purpose: "Diagnóstico da Doença de Chagas (aguda ou crônica), screening em bancos de sangue e investigação de miocardiopatia dilatada ou megacólon.",
    methodology: "ELISA, Quimioluminescência ou Hemaglutinação Indireta. O Ministério da Saúde exige que 2 métodos diferentes confirmem o resultado reagente.",
    preparation: [
      "Jejum recomendável de 4 a 8 horas."
    ],
    referenceValues: [
      "Normal: Não Reagente."
    ],
    interactions: [
      "Reações cruzadas falsas (Falso-Positivo) podem acontecer em pacientes com Leishmaniose, Sífilis ou Malária."
    ],
    related: ["ecg"],
    synonyms: ["Sorologia para Chagas", "Machado Guerreiro", "Trypanosoma cruzi"],
    curiosities: [
      "A doença recebeu esse nome em homenagem a Carlos Chagas, um médico brasileiro genial. Ele foi o único cientista na história da medicina a descobrir completamente a nova doença: o parasita, o mosquito transmissor (barbeiro), os sintomas e a epidemiologia toda sozinho!"
    ]
  },
  {
    id: "hepatites-abc",
    name: "Sorologias para Hepatites Virais (A, B e C)",
    category: "Infecciosas",
    shortDescription: "Painel completo de exames para identificar infecção atual ou imunidade contra os vírus que atacam o fígado.",
    purpose: "Hepatite A (Anti-HAV Total/IgM), Hepatite B (HBsAg, Anti-HBs, Anti-HBc) e Hepatite C (Anti-HCV). Investigam desde infecção silenciosa até resposta a vacinas.",
    methodology: "Eletroquimioluminescência ou Quimioluminescência.",
    preparation: [
      "Jejum de 4 a 8 horas."
    ],
    referenceValues: [
      "Anti-HBs Reagente (> 10 mUI/mL) com HBsAg Não Reagente: Paciente imune (vacinado) contra Hepatite B.",
      "HBsAg Reagente: Indica que o paciente está com o vírus da Hepatite B presente no corpo (agudo ou crônico).",
      "Anti-HCV Reagente: Contato com o vírus da Hepatite C (necessita confirmação com PCR)."
    ],
    interactions: [],
    related: ["tgo-ast", "tgp-alt", "bilirrubinas", "gama-gt"],
    synonyms: ["HbsAg", "Anti-HBs", "aHBs", "Anti-HCV", "Hepatite A", "Hepatite B", "Hepatite C", "Painel de Hepatite"],
    curiosities: [
      "O vírus da Hepatite C é um mestre dos disfarces; ele sofre tantas mutações que o corpo não consegue criar uma vacina eficaz contra ele. Em compensação, hoje em dia, ele tem 95% de chance de CURA com antivirais tomados por via oral!"
    ]
  },
  {
    id: "ftabs",
    name: "FTA-ABS",
    category: "Infecciosas",
    shortDescription: "Teste altamente específico (Teste Treponêmico) para confirmar infecção por Sífilis.",
    purpose: "Usado geralmente como confirmação quando o VDRL dá positivo. Ele é o teste padrão para saber se os anticorpos contra a bactéria Treponema pallidum estão presentes.",
    methodology: "Imunofluorescência Indireta.",
    preparation: [
      "Jejum não é estritamente necessário, mas aconselha-se evitar comidas muito gordurosas para o soro não turvar."
    ],
    referenceValues: [
      "Normal: Não Reagente."
    ],
    interactions: [],
    related: ["vdrl", "hiv"],
    synonyms: ["Anticorpos anti-Treponema pallidum", "Sorologia para sífilis", "Teste confirmatório sífilis"],
    curiosities: [
      "Uma vez que o FTA-ABS dá positivo, ele provavelmente será positivo para o resto da sua vida (é o que chamamos de 'cicatriz imunológica'), mesmo depois que você tenha sido curado com Penicilina. Por isso, para ver se o tratamento deu certo, o médico acompanha o exame VDRL cair, não o FTA-ABS."
    ]
  },
  {
    id: "aslo",
    name: "Anti-Streptolisina O (ASLO)",
    category: "Imunologia",
    shortDescription: "Mede os anticorpos contra a bactéria causadora de infecções de garganta.",
    purpose: "Diagnóstico tardio de infecção pelo Estreptococo do grupo A. Usado na suspeita de Febre Reumática ou Glomerulonefrite (problema renal) que aparecem semanas após a infecção de garganta.",
    methodology: "Nefelometria ou Turbidimetria.",
    preparation: [
      "Jejum recomendável de 4 a 8 horas."
    ],
    referenceValues: [
      "Adultos: Até 200 UI/mL",
      "Crianças: Podem ter valores basais maiores devido a infecções frequentes de garganta."
    ],
    interactions: [],
    related: ["pcr", "fator-reumatoide", "vsh"],
    synonyms: ["ASO", "Anti streptolisina a", "Anti-Estreptolisina O"],
    curiosities: [
      "Um ASLO alto não diz que você tem a bactéria AGORA. Ele apenas diz que suas células de defesa produziram 'armas' contra a bactéria entre as últimas 2 a 8 semanas!"
    ]
  },
  {
    id: "mantoux",
    name: "PPD (Teste de Mantoux) / IGRA (Interferon)",
    category: "Infecciosas",
    shortDescription: "Testes para diagnosticar infecção latente pelo bacilo da Tuberculose.",
    purpose: "Investigar se a pessoa já teve contato com o Bacilo de Koch. O PPD é aplicado na pele, e o IGRA é um moderno exame de sangue.",
    methodology: "PPD (Aplicação Intradérmica com leitura em 72h). IGRA (Ensaio de liberação de Interferon-gama no sangue venoso).",
    preparation: [
      "Jejum: Não é necessário para nenhum dos dois.",
      "Para o PPD: Você terá que voltar ao laboratório/hospital em 48 a 72 horas APENAS para a leitura da vermelhidão no braço."
    ],
    referenceValues: [
      "PPD: Geralmente negativo se o nódulo for menor que 5mm.",
      "IGRA: Não Reagente / Negativo."
    ],
    interactions: [
      "Para o PPD: Quem já tomou a vacina BCG pode ter o PPD positivo falso, pois a pele reage à vacina antiga. O teste IGRA não é enganado pela vacina BCG!"
    ],
    related: ["baar", "pcr"],
    synonyms: ["PPD", "Prova Tuberculínica", "Mantoux", "Interferom", "IGRA", "Quantiferon"],
    curiosities: [
      "O teste IGRA é incrível! Ele mistura o sangue do paciente com partes do bacilo da tuberculose no laboratório e 'ouve' se os glóbulos brancos gritam liberando uma substância chamada Interferon. Se gritarem, é porque já conhecem o inimigo!"
    ]
  }
];
