export const expandedExamsData = [
  {
    id: "ckmb",
    name: "CK-MB / CK-MB Massa",
    category: "Cardiologia",
    shortDescription: "Marcador específico para avaliação de lesão no músculo cardíaco.",
    purpose: "Utilizado principalmente para diagnóstico e monitoramento de infarto agudo do miocárdio, pois a CK-MB é uma enzima concentrada no coração.",
    methodology: "Imunoensaio (Quimioluminescência ou Eletroquimioluminescência). O teste de CK-MB Massa dosa a concentração da proteína, sendo muito mais sensível e específico que a atividade enzimática.",
    preparation: [
      "Jejum não é obrigatório para este exame.",
      "Informar se realizou injeções intramusculares recentes, cirurgias ou exercícios físicos intensos, pois podem alterar o resultado.",
      "O médico pode solicitar coletas seriadas (várias coletas de 3 em 3 horas) para avaliar a curva da enzima."
    ],
    referenceValues: [
      "CK-MB Massa: Inferior a 5,0 ng/mL",
      "Relação CK-MB / CK Total (Índice Relativo): Inferior a 4%",
      "Nota: Valores podem variar ligeiramente de acordo com o kit do laboratório."
    ],
    interactions: [
      "Traumas musculares severos ou doenças musculares (como distrofias) podem elevar levemente a CK-MB, mas o Índice Relativo ajuda a diferenciar da lesão cardíaca."
    ],
    related: ["troponina", "ck", "tgo-ast", "ldh"],
    synonyms: ["Creatinoquinase Fração MB", "CKMB", "CK-MB Massa", "Marcador Cardíaco"],
    curiosities: [
      "A CK-MB começa a subir no sangue cerca de 4 a 6 horas após um infarto, atinge o pico em 24 horas e volta ao normal em cerca de 48 a 72 horas.",
      "Hoje em dia, a Troponina é o exame padrão-ouro para infarto, mas a CK-MB ainda é super útil para detectar 'reinfartos' precoces, já que ela some do sangue mais rápido que a Troponina!"
    ]
  },
  {
    id: "bnp",
    name: "BNP e Pró-BNP",
    category: "Cardiologia",
    shortDescription: "Peptídeos liberados pelo coração quando ele está sobrecarregado.",
    purpose: "Fundamental para o diagnóstico, avaliação de gravidade e acompanhamento da Insuficiência Cardíaca (quando o coração não consegue bombear sangue adequadamente).",
    methodology: "Quimioluminescência ou Imunofluorescência (dosa o BNP ou o fragmento NT-proBNP).",
    preparation: [
      "Jejum não é necessário.",
      "Não é recomendado realizar esforço físico intenso nas 24 horas que antecedem o exame.",
      "Uso de medicamentos para o coração (como diuréticos ou Inibidores da ECA) pode alterar os níveis e deve ser relatado."
    ],
    referenceValues: [
      "BNP: Inferior a 100 pg/mL",
      "NT-proBNP (idade < 75 anos): Inferior a 125 pg/mL",
      "NT-proBNP (idade ≥ 75 anos): Inferior a 450 pg/mL",
      "Valores muito elevados são altamente sugestivos de insuficiência cardíaca congestiva."
    ],
    interactions: [
      "Pacientes em uso de 'Entresto' (sacubitril/valsartana) terão valores de BNP falsamente elevados, devendo-se utilizar exclusivamente o NT-proBNP para monitoramento."
    ],
    related: ["troponina", "ckmb", "ecg"],
    synonyms: ["Peptídeo Natriurético B", "NT-proBNP", "Pró BNP", "Peptídeo Natriurético Cerebral"],
    curiosities: [
      "Apesar do 'B' significar 'Brain' (Cérebro, pois foi descoberto primeiro no cérebro de porcos), no corpo humano ele é produzido e liberado principalmente pelos ventrículos do coração quando estão 'esticados' pelo excesso de volume ou pressão."
    ]
  },
  {
    id: "aldolase",
    name: "Aldolase",
    category: "Bioquímica",
    shortDescription: "Enzima presente nos músculos, útil na investigação de miopatias.",
    purpose: "Diagnóstico e monitoramento de doenças musculares esqueléticas (como distrofia muscular, polimiosite, dermatomiosite).",
    methodology: "Ensaio cinético UV.",
    preparation: [
      "Jejum de 8 horas é recomendável.",
      "É crucial não realizar exercícios físicos intensos nos 2 dias anteriores ao exame, pois causam elevações fisiológicas."
    ],
    referenceValues: [
      "Adultos: Até 7,6 U/L",
      "Crianças tendem a ter valores levemente superiores aos adultos."
    ],
    interactions: [
      "Drogas hepatotóxicas e miotóxicas (como estatinas em altas doses) podem elevar a enzima."
    ],
    related: ["ck", "tgo-ast", "tsh"],
    synonyms: ["Fosfofrutoaldolase", "Enzima muscular"],
    curiosities: [
      "A aldolase está presente em todo o corpo ajudando a quebrar açúcares (glicólise), mas é nas grandes massas musculares que ela faz mais diferença. Se o músculo sofre uma lesão, ela vaza direto para o sangue."
    ]
  },
  {
    id: "apolipoproteinas",
    name: "Apolipoproteínas (Apo A1 e Apo B)",
    category: "Bioquímica",
    shortDescription: "Proteínas transportadoras de colesterol, essenciais na avaliação de risco cardiovascular profundo.",
    purpose: "A Apo A1 é a principal proteína do HDL ('colesterol bom'), enquanto a Apo B está ligada ao LDL ('colesterol ruim'). A relação entre elas indica o verdadeiro risco de entupimento de artérias.",
    methodology: "Imunoturbidimetria ou Nefelometria.",
    preparation: [
      "Jejum não é obrigatório, mas um jejum de 12h pode ser solicitado se feito junto com triglicerídeos.",
      "Manter dieta habitual nos dias que antecedem a coleta."
    ],
    referenceValues: [
      "Apo A1 (Homens): 110 a 170 mg/dL",
      "Apo A1 (Mulheres): 120 a 190 mg/dL",
      "Apo B (Desejável): Menor que 90 mg/dL",
      "Relação Apo B / Apo A1: Quanto menor, melhor (idealmente < 0.8 para mulheres e < 0.9 para homens)."
    ],
    interactions: [],
    related: ["perfil-lipidico", "lipoproteina-a", "pcr"],
    synonyms: ["Apo A", "Apo B", "Relação Apo B/Apo A1"],
    curiosities: [
      "Muitas pessoas têm o colesterol total e LDL normais, mas ainda infartam. O dosar a Apo B revela a verdadeira quantidade de 'partículas' de colesterol ruim flutuando no sangue, sendo um marcador de risco muito mais preciso!"
    ]
  },
  {
    id: "lipoproteina-a",
    name: "Lipoproteína (a) - Lp(a)",
    category: "Bioquímica",
    shortDescription: "Um tipo genético de colesterol ruim altamente agressivo.",
    purpose: "Avaliar o risco genético independente para doença cardiovascular (infarto, derrame), especialmente em pessoas com histórico familiar de infartos precoces.",
    methodology: "Imunoturbidimetria ou Imunoensaio.",
    preparation: [
      "Jejum não é necessário.",
      "Evitar coletar o exame durante infecções ou inflamações agudas, pois a Lp(a) pode se comportar como uma proteína de fase aguda."
    ],
    referenceValues: [
      "Desejável: Inferior a 30 mg/dL",
      "Risco Aumentado: Superior a 50 mg/dL"
    ],
    interactions: [
      "Medicamentos convencionais para colesterol (como estatinas) não reduzem a Lp(a). Novos medicamentos (inibidores da PCSK9) possuem algum efeito."
    ],
    related: ["perfil-lipidico", "apolipoproteinas", "homocisteina"],
    synonyms: ["Lp(a)", "Lipoproteina azinha", "Lipidograma avançado"],
    curiosities: [
      "A Lp(a) é apelidada de 'Lp-azinha' pelos médicos. Ela é 90% determinada pelos seus genes, o que significa que dieta e exercícios quase não alteram seu valor! É o exame ideal para descobrir heranças familiares perigosas."
    ]
  },
  {
    id: "t3-total-livre",
    name: "T3 Total, Livre e Reverso",
    category: "Hormônios",
    shortDescription: "O Triiodotironina (T3) é a forma ativa do hormônio da tireoide que age nas células.",
    purpose: "Auxilia na avaliação do hipertireoidismo (quando há excesso de hormônio) e monitoramento de tratamentos tireoidianos. O T3 reverso é a forma inativa, solicitada em situações clínicas específicas.",
    methodology: "Eletroquimioluminescência ou Quimioluminescência.",
    preparation: [
      "Jejum de 3 a 4 horas é o suficiente.",
      "Se em uso de hormônios tireoidianos (Levotiroxina), não tomar o medicamento no dia da coleta até depois de tirar o sangue, a menos que o médico oriente o contrário.",
      "Informar uso de biotina, pois altas doses podem interferir no ensaio do laboratório."
    ],
    referenceValues: [
      "T3 Livre: 2,0 a 4,4 pg/mL",
      "T3 Total: 80 a 200 ng/dL",
      "Valores de referência variam conforme a metodologia do laboratório."
    ],
    interactions: [
      "Amiotarona, propranolol e corticoides podem diminuir a conversão de T4 em T3, reduzindo o T3 Livre e aumentando o T3 Reverso.",
      "Interferência brutal da Vitamina B7 (Biotina) em ensaios baseados em estreptavidina."
    ],
    related: ["tsh", "t4-livre", "t4-total"],
    synonyms: ["Triiodotironina", "T3L", "T3T", "T3R"],
    curiosities: [
      "A tireoide produz na verdade muito pouco T3! Ela produz quase 100% de T4. O T4 viaja até o fígado, onde perde uma molécula de iodo e se transforma no poderoso e ativo T3."
    ]
  },
  {
    id: "t4-total",
    name: "T4 Total",
    category: "Hormônios",
    shortDescription: "A tiroxina total circulante, englobando a forma livre e a ligada a proteínas.",
    purpose: "Avaliação da função tireoidiana, geralmente solicitado em conjunto com o TSH. Hoje em dia, o T4 Livre é mais utilizado que o Total.",
    methodology: "Quimioluminescência.",
    preparation: [
      "Jejum de 3 a 4 horas.",
      "Colher o sangue de preferência pela manhã.",
      "Não usar o hormônio tireoidiano antes da coleta (apenas no dia)."
    ],
    referenceValues: [
      "Adultos: 4,5 a 12,0 µg/dL"
    ],
    interactions: [
      "Gravidez e uso de anticoncepcionais elevam a TBG (proteína transportadora), causando um T4 Total falsamente ALTO, mesmo que o T4 Livre esteja normal."
    ],
    related: ["tsh", "t4-livre", "t3-total-livre"],
    synonyms: ["Tiroxina Total"],
    curiosities: [
      "Como 99,9% do T4 Total viaja de 'carona' grudado em proteínas no sangue, qualquer coisa que altere a quantidade dessas proteínas de transporte fará o T4 Total subir ou descer, por isso os médicos preferem o T4 Livre, que é independente dessa carona!"
    ]
  },
  {
    id: "estrona",
    name: "Estrona (E1)",
    category: "Hormônios",
    shortDescription: "Um estrogênio fraco, mas de extrema importância após a menopausa.",
    purpose: "Investigação de sangramento pós-menopausa, avaliação hormonal em mulheres na menopausa ou homens com ginecomastia, e monitoramento de terapias de reposição.",
    methodology: "Cromatografia Líquida acoplada à Espectrometria de Massas (LC-MS/MS) ou Radioimunoensaio.",
    preparation: [
      "Jejum recomendável de 4 horas.",
      "Anotar a data da última menstruação ou informar se está na menopausa."
    ],
    referenceValues: [
      "Fase Folicular: 15 a 115 pg/mL",
      "Pós-menopausa: 10 a 50 pg/mL",
      "Homens: 10 a 60 pg/mL"
    ],
    interactions: [
      "Pílulas anticoncepcionais e terapia de reposição hormonal afetam drasticamente os resultados."
    ],
    related: ["estradiol", "fsh", "lh", "testosterona-total"],
    synonyms: ["E1", "Hormônio Estrona"],
    curiosities: [
      "Enquanto o Estradiol reina absoluto nos anos reprodutivos da mulher, a Estrona vira o estrogênio principal durante a menopausa. Ela é produzida principalmente nas células de gordura (tecido adiposo), não nos ovários!"
    ]
  },
  {
    id: "dhea-dht",
    name: "DHEA, DHEAS e DHT",
    category: "Hormônios",
    shortDescription: "Andrógenos (hormônios masculinos) com grande impacto em ambos os sexos.",
    purpose: "Investigação de hirsutismo (excesso de pelos) e virilização em mulheres, síndrome dos ovários policísticos (SOP) e calvície/queda de cabelo androgênica.",
    methodology: "Eletroquimioluminescência ou LC-MS/MS.",
    preparation: [
      "Jejum de 4 horas.",
      "Mulheres: Pode ser solicitado em dias específicos do ciclo menstrual.",
      "Para DHT: o uso de Finasterida bloqueia a conversão, abaixando muito o resultado."
    ],
    referenceValues: [
      "DHEAS Mulheres (adultas): 100 a 350 µg/dL",
      "DHT Homens: 250 a 990 pg/mL",
      "DHT Mulheres: 24 a 368 pg/mL"
    ],
    interactions: [
      "Corticoides (como dexametasona) suprimem a glândula adrenal e diminuem o DHEA.",
      "Finasterida e Dutasterida bloqueiam a enzima 5-alfa-redutase, despencando os níveis de DHT (que é o objetivo desses remédios)."
    ],
    related: ["testosterona-total", "testosterona-livre", "androstenediona"],
    synonyms: ["Dehidroepiandrosterona", "DHEAS", "Di-hidrotestosterona"],
    curiosities: [
      "O DHT (Di-hidrotestosterona) é a versão 'turbinada' da Testosterona, sendo até 5 vezes mais potente. É o grande responsável por fazer nascer barba nos homens, mas infelizmente também é o culpado por fazer cair o cabelo da cabeça!"
    ]
  },
  {
    id: "androstenediona",
    name: "Androstenediona",
    category: "Hormônios",
    shortDescription: "O 'hormônio ponte', precursor da testosterona e do estradiol.",
    purpose: "Avaliar o excesso de produção androgênica nas glândulas suprarrenais e ovários, sendo crucial no diagnóstico da SOP (Síndrome dos Ovários Policísticos).",
    methodology: "Radioimunoensaio, Imunoensaio ou Cromatografia (LC-MS).",
    preparation: [
      "Jejum de 4 a 8 horas.",
      "Colher preferencialmente pela manhã (tem forte variação ao longo do dia).",
      "Mulheres que menstruam devem anotar o dia do ciclo (geralmente colhe-se na fase folicular precoce)."
    ],
    referenceValues: [
      "Mulheres Adultas: 0,3 a 3,3 ng/mL",
      "Homens: 0,6 a 3,1 ng/mL"
    ],
    interactions: [
      "Uso de esteroides, anticoncepcionais e glicocorticoides."
    ],
    related: ["testosterona-total", "dhea-dht", "shbg"],
    synonyms: ["Delta 4 Androstenediona", "Delta-4"],
    curiosities: [
      "Ele se chama hormônio 'ponte' porque o corpo o utiliza como uma peça de lego: pode encaixar mais um átomo e transformá-lo em Testosterona (masculino), ou usar a enzima aromatase e transformá-lo em Estrona (feminino)!"
    ]
  },
  {
    id: "aldosterona",
    name: "Aldosterona",
    category: "Hormônios",
    shortDescription: "O regulador mestre da pressão arterial e do sal no corpo.",
    purpose: "Investigar casos de pressão alta grave, hiperaldosteronismo e níveis de potássio cronicamente baixos.",
    methodology: "Radioimunoensaio ou Quimioluminescência. Pode ser dosada no sangue e na urina de 24h.",
    preparation: [
      "Jejum de 4 horas.",
      "Preparo rigoroso: O paciente não pode usar restrição de sal rígida antes do exame.",
      "Deve estar descansado. Pode ser exigido que o sangue seja colhido com o paciente Deitado (há 2 horas) ou Em pé (após andar)."
    ],
    referenceValues: [
      "Paciente em pé: 4 a 31 ng/dL",
      "Paciente deitado: 1 a 16 ng/dL"
    ],
    interactions: [
      "Medicamentos para pressão (Espironolactona, IECA, BRA) alteram violentamente os resultados. A interrupção desses remédios antes do exame só pode ser feita sob estrita ordem médica."
    ],
    related: ["renina", "sodio", "potassio"],
    synonyms: ["Hormônio mineralocorticoide"],
    curiosities: [
      "A Espironolactona (conhecida comercialmente como Aldactone) bloqueia exatamente os receptores desse hormônio. Sem a aldosterona agindo, os rins começam a eliminar sal e água na urina, e a pressão arterial despenca."
    ]
  }
];
