export const expandedExamsData3 = [
  {
    id: "cloro",
    name: "Cloro (Cl-)",
    category: "Bioquímica",
    shortDescription: "Eletrólito vital no equilíbrio ácido-base e hidratação do corpo.",
    purpose: "Avaliação do equilíbrio eletrolítico e da alcalose ou acidose no sangue. Auxilia no diagnóstico de desidratação e problemas renais.",
    methodology: "Eletrodo Íon Seletivo (ISE).",
    preparation: [
      "Jejum não é necessário.",
      "Uso de diuréticos pode afetar os resultados."
    ],
    referenceValues: [
      "Adultos: 98 a 107 mEq/L"
    ],
    interactions: [],
    related: ["sodio", "potassio", "bicarbonato"],
    synonyms: ["Cloreto", "Cloreto Sérico"],
    curiosities: [
      "O Cloro anda quase sempre de mãos dadas com o Sódio. Onde o sódio vai (sal), o cloro vai atrás!"
    ]
  },
  {
    id: "bicarbonato",
    name: "Bicarbonato (Reserva Alcalina)",
    category: "Bioquímica",
    shortDescription: "O principal 'tampão' do corpo humano.",
    purpose: "Avaliar o status do equilíbrio ácido-base. Descobrir se o sangue do paciente está ficando muito ácido ou muito alcalino.",
    methodology: "Enzimático ou Eletrodo Íon Seletivo.",
    preparation: [
      "Jejum de 4 horas é recomendável, pois a alimentação pesada altera o pH logo em seguida."
    ],
    referenceValues: [
      "Adultos: 22 a 29 mEq/L"
    ],
    interactions: [],
    related: ["cloro", "sodio", "potassio"],
    synonyms: ["Reserva Alcalina", "CO2 Total", "HCO3"],
    curiosities: [
      "O seu corpo precisa manter o sangue com um pH rigidamente em torno de 7.4. O Bicarbonato funciona como uma 'esponja' que absorve ácido sempre que as coisas começam a ficar muito azedas!"
    ]
  },
  {
    id: "calcio-ionico",
    name: "Cálcio Iônico",
    category: "Bioquímica",
    shortDescription: "A forma livre e mais perigosa do cálcio no sangue.",
    purpose: "Avaliar o nível real de cálcio que o corpo pode usar ativamente, principalmente em pacientes com doenças renais, paratireoide, ou deficiência grave de albumina.",
    methodology: "Eletrodo Íon Seletivo (ISE).",
    preparation: [
      "Jejum de 4 a 8 horas.",
      "O TÉCNICO DE LABORATÓRIO DEVE: Coletar SEM GARROTE ou garroteando no máximo por 1 minuto. O tubo NUNCA deve ser aberto (exposto ao ar) antes de testar!"
    ],
    referenceValues: [
      "Adultos: 1,15 a 1,32 mmol/L"
    ],
    interactions: [
      "Deixar a amostra exposta ao ar faz o CO2 evaporar, alterando o pH e mudando falsamente a concentração de Cálcio Iônico."
    ],
    related: ["calcio", "pth", "albumina"],
    synonyms: ["Ca++", "Cálcio Livre"],
    curiosities: [
      "Metade do seu cálcio viaja no sangue abraçado numa proteína (Albumina). A outra metade viaja 'solteira'. É essa metade livre (O Cálcio Iônico) que mantém seu coração batendo e os nervos disparando!"
    ]
  },
  {
    id: "magnesio-eritrocitario",
    name: "Magnésio Eritrocitário",
    category: "Bioquímica",
    shortDescription: "O magnésio escondido dentro das suas células do sangue.",
    purpose: "Mais sensível que o magnésio sérico para identificar deficiência REAL de magnésio (já que 99% do magnésio está dentro das células, não solto no soro).",
    methodology: "Espectrofotometria / Absorção Atômica.",
    preparation: [
      "Jejum de 8 horas.",
      "A amostra não pode sofrer hemólise sob hipótese alguma!"
    ],
    referenceValues: [
      "Adultos: 4,0 a 6,0 mg/dL"
    ],
    interactions: [],
    related: ["magnesio", "calcio", "potassio"],
    synonyms: ["Magnésio Intracelular", "Magnesio heritrocitario"],
    curiosities: [
      "Você pode ter o magnésio 'normal' no soro, mas suas células estarem implorando por ele. É como verificar sua conta corrente (Soro) achando que tem dinheiro, enquanto a sua poupança (Eritrócito) está totalmente zerada!"
    ]
  },
  {
    id: "albumina",
    name: "Albumina",
    category: "Bioquímica",
    shortDescription: "A proteína mais abundante e importante do nosso sangue.",
    purpose: "Avaliar o estado nutricional, investigar inchaços (edemas) severos e checar como está a 'fábrica' do corpo (o fígado, que produz a albumina).",
    methodology: "Colorimétrico (Verde de Bromocresol).",
    preparation: [
      "Jejum de 4 a 8 horas."
    ],
    referenceValues: [
      "Adultos: 3,5 a 5,2 g/dL"
    ],
    interactions: [],
    related: ["proteinas-totais", "calcio", "tgo-ast"],
    synonyms: ["Proteína Albumina"],
    curiosities: [
      "A albumina age como a 'cola' magnética do sangue. Ela segura a água dentro dos seus vasos sanguíneos. Quando o paciente não tem albumina, a água vaza dos vasos e a pessoa incha terrivelmente!"
    ]
  },
  {
    id: "proteinas-totais",
    name: "Proteínas Totais e Frações",
    category: "Bioquímica",
    shortDescription: "Mede todas as proteínas que estão fluindo no plasma.",
    purpose: "Avaliação do estado nutricional, doenças no fígado e rins. Inclui o cálculo das Globulinas (nossos anticorpos).",
    methodology: "Colorimétrico (Reação de Biureto para proteínas totais).",
    preparation: [
      "Jejum de 4 a 8 horas."
    ],
    referenceValues: [
      "Proteínas Totais: 6,4 a 8,3 g/dL",
      "Albumina: 3,5 a 5,2 g/dL",
      "Globulinas: 2,3 a 3,5 g/dL"
    ],
    interactions: [],
    related: ["albumina", "eletroforese", "tgo-ast"],
    synonyms: ["PT e Frações", "Protidograma", "Cálculo de Globulinas"],
    curiosities: [
      "A fórmula mágica deste exame é a Relação Albumina/Globulina (A/G). Quando ela inverte (ou seja, você tem mais Globulina do que Albumina), o médico liga o alerta máximo para doenças autoimunes ou infecções crônicas graves."
    ]
  },
  {
    id: "litio",
    name: "Lítio (Litemia)",
    category: "Toxicologia e Monitoramento Terapêutico",
    shortDescription: "Monitoramento crucial do medicamento estabilizador de humor.",
    purpose: "Garantir que a dose do medicamento Lítio (usado no Transtorno Bipolar) está na zona segura: nem tão baixa para ser inútil, nem tão alta para ser tóxica.",
    methodology: "Eletrodo Íon Seletivo ou Colorimetria.",
    preparation: [
      "A coleta TEM QUE OCORRER exatamente 12 horas após a última dose do medicamento. Se o paciente tomou o Lítio às 20h da noite, deve colher sangue às 08h da manhã.",
      "Jejum de 4 horas."
    ],
    referenceValues: [
      "Nível Terapêutico Desejável: 0,6 a 1,2 mEq/L",
      "Nível Tóxico: Acima de 1,5 mEq/L"
    ],
    interactions: [
      "Anti-inflamatórios e alguns diuréticos reduzem a saída do Lítio pelo rim, fazendo-o acumular até níveis venenosos no sangue."
    ],
    related: ["creatinina", "sodio", "tsh"],
    synonyms: ["Dosagem de Lítio", "Litemia", "Carbonato de Lítio"],
    curiosities: [
      "O Lítio é um remédio poderoso, mas sua 'janela' de segurança é minúscula. A diferença de concentração entre curar os sintomas bipolares e causar tremores pesados é muito fina, por isso as dosagens periódicas são obrigatórias!"
    ]
  },
  {
    id: "amilase-lipase",
    name: "Amilase e Lipase",
    category: "Bioquímica",
    shortDescription: "Enzimas do pâncreas usadas para digerir pães e gorduras.",
    purpose: "O teste padrão-ouro para detectar Pancreatite (inflamação aguda do pâncreas), manifestada frequentemente por uma dor alucinante no abdome e nas costas.",
    methodology: "Enzimático.",
    preparation: [
      "Jejum de 8 horas."
    ],
    referenceValues: [
      "Amilase: Até 100 U/L (varia por laboratório)",
      "Lipase: Até 60 U/L (varia por laboratório)"
    ],
    interactions: [
      "Opiáceos (morfina) administrados no hospital fecham a válvula biliar, fazendo a Amilase subir mesmo sem pancreatite."
    ],
    related: ["gama-gt", "bilirrubinas", "tgo-ast"],
    synonyms: ["Enzimas Pancreáticas", "Lipae"],
    curiosities: [
      "A Lipase é muito mais exclusiva do pâncreas do que a Amilase. A Amilase também é produzida pelas glândulas de saliva na sua boca. Se o paciente só tem Amilase alta e a Lipase é normal, ele pode estar com caxumba e não pancreatite!"
    ]
  },
  {
    id: "vsh",
    name: "Velocidade de Hemossedimentação (VHS)",
    category: "Hematologia",
    shortDescription: "Um teste antigo, mas muito usado, que mede a velocidade com que os glóbulos vermelhos 'afundam'.",
    purpose: "Indicar se existe alguma inflamação grave ou silenciosa acontecendo em qualquer parte do corpo.",
    methodology: "Método de Westergren.",
    preparation: [
      "Jejum não é necessário."
    ],
    referenceValues: [
      "Homens (abaixo de 50 anos): Até 15 mm/hora",
      "Mulheres (abaixo de 50 anos): Até 20 mm/hora"
    ],
    interactions: [
      "A gravidez e as anemias aceleram o VHS enormemente."
    ],
    related: ["pcr", "hemograma", "fator-reumatoide"],
    synonyms: ["VHS", "Velocidade de Sedimentação", "Velocidade de hemossedimentacao"],
    curiosities: [
      "Como é feito? O técnico coloca o seu sangue em um tubo bem fino e em pé, e vai tomar um café. Depois de exatamente 1 hora ele volta e mede quantos milímetros as células caíram para o fundo do tubo!"
    ]
  },
  {
    id: "fator-v-leiden",
    name: "Mutação do Fator V de Leiden",
    category: "Genética e Trombofilias",
    shortDescription: "A causa genética hereditária mais comum de coágulos e tromboses.",
    purpose: "Investigar pessoas com histórico familiar de trombose venosa profunda (TVP), embolia pulmonar e mulheres com múltiplos abortos sem explicação.",
    methodology: "Biologia Molecular (PCR).",
    preparation: [
      "Nenhum jejum é exigido."
    ],
    referenceValues: [
      "Normal: Ausência de mutação."
    ],
    interactions: [],
    related: ["protrombina-mutante", "anticoagulante-lupico", "coagulograma"],
    synonyms: ["Pesquisa de Mutação Fator V", "Fator 5 Leiden"],
    curiosities: [
      "O Gato de Botas explica: O Fator V de Leiden atua acelerando a coagulação, o que é ótimo se você for atacado na floresta. Mas nos dias de hoje, essa herança genética apenas facilita a criação de trombos bloqueando as veias!"
    ]
  },
  {
    id: "protrombina-mutante",
    name: "Mutação do Gene da Protrombina (G20210A)",
    category: "Genética e Trombofilias",
    shortDescription: "Segunda desordem genética mais comum que leva à hipercoagulabilidade.",
    purpose: "Investigação de histórico pessoal ou familiar de trombose, especialmente quando o paciente faz uso de anticoncepcionais orais.",
    methodology: "Biologia Molecular (PCR).",
    preparation: [
      "Nenhum jejum exigido."
    ],
    referenceValues: [
      "Normal: Ausência da mutação G20210A."
    ],
    interactions: [],
    related: ["fator-v-leiden", "anticoagulante-lupico", "homocisteina"],
    synonyms: ["Mutação G20210A", "Gene da Protrombina"],
    curiosities: [
      "Mulheres que possuem essa mutação e começam a tomar pílula anticoncepcional têm um risco astronomicamente maior de desenvolver uma trombose venosa profunda nas pernas!"
    ]
  },
  {
    id: "proteina-c-s",
    name: "Proteína C e Proteína S (Anticoagulantes Naturais)",
    category: "Coagulação",
    shortDescription: "As 'polícias' que evitam que seu sangue coagule o tempo todo.",
    purpose: "Pesquisar por deficiência genética dessas proteínas, o que leva à formação repentina de trombos nas veias.",
    methodology: "Coagulométrico (Proteína C Funcional, Proteína S Funcional).",
    preparation: [
      "Jejum de 4 a 8 horas."
    ],
    referenceValues: [
      "Proteína C: 70 a 140%",
      "Proteína S Livre: 60 a 130% (variável por sexo)"
    ],
    interactions: [
      "Não se pode dosar na vigência de trombose aguda ou enquanto o paciente toma o anticoagulante Marevan (Varfarina), pois o remédio destrói essas proteínas e mascara o resultado."
    ],
    related: ["antitrombina", "fator-v-leiden"],
    synonyms: ["Proteína C funcional", "Proteína S funcional"],
    curiosities: [
      "Se você sofre um corte, a coagulação tem que acontecer rápido. Mas algo tem que dizer 'Chega!'. A Proteína C e a Proteína S formam a equipe especializada em parar o sangramento do corpo exatamente na hora certa."
    ]
  },
  {
    id: "antitrombina",
    name: "Antitrombina III",
    category: "Coagulação",
    shortDescription: "Outro guerreiro da inibição da coagulação.",
    purpose: "Investigação da tendência ao desenvolvimento de trombose, ou investigar por que a medicação Heparina não está funcionando no paciente.",
    methodology: "Cromogênico / Coagulométrico.",
    preparation: [
      "Jejum de 4 horas."
    ],
    referenceValues: [
      "Adultos: 80 a 120%"
    ],
    interactions: [
      "Pacientes utilizando Heparina terão diminuição acentuada temporária."
    ],
    related: ["proteina-c-s", "coagulograma"],
    synonyms: ["AT III", "Atividade da Antitrombina"],
    curiosities: [
      "A famosa e caríssima medicação 'Heparina' só funciona se você tiver Antitrombina no corpo! A Heparina age unicamente se agarrando à Antitrombina para acelerar em 1000 vezes o poder dela."
    ]
  },
  {
    id: "anticoagulante-lupico",
    name: "Anticoagulante Lúpico",
    category: "Imunologia e Coagulação",
    shortDescription: "Um autoanticorpo letal associado à Síndrome do Anticorpo Antifosfolipídeo (SAF).",
    purpose: "Pesquisar uma doença muito séria onde a mulher tem tromboses repetidas e sofre abortos espontâneos sucessivos nos primeiros meses de gravidez.",
    methodology: "Testes de Veneno de Víbora de Russell (dRVVT) e TTPa Sensível.",
    preparation: [
      "Jejum de 4 horas.",
      "Informar TODOS os anticoagulantes em uso."
    ],
    referenceValues: [
      "Normal: Negativo (Não identificado)."
    ],
    interactions: [
      "Testes extremamente sensíveis a remédios anticoagulantes. Realizar sob orientação restrita de hematologista."
    ],
    related: ["anticardiolipina", "coagulograma", "beta-hcg"],
    synonyms: ["Pesquisa do Anticoagulante Lúpico", "Síndrome Antifosfolipíde"],
    curiosities: [
      "Apesar do nome 'Anticoagulante Lúpico', ele faz exatamente o CONTRÁRIO no corpo do paciente: causa trombose e coagulação severa! O nome foi dado há décadas devido a um erro de interpretação no vidro do laboratório e nunca foi mudado."
    ]
  },
  {
    id: "anticardiolipina",
    name: "Anticardiolipinas (IgG, IgM, IgA)",
    category: "Imunologia e Coagulação",
    shortDescription: "Mede autoanticorpos perigosos que atacam as células de dentro dos vasos.",
    purpose: "Completa a investigação para SAF (junto com o Anticoagulante Lúpico). Forte marcador de infarto em pessoas muito jovens ou abortos repetição.",
    methodology: "ELISA / Quimioluminescência.",
    preparation: [
      "Jejum de 4 a 8 horas."
    ],
    referenceValues: [
      "Normal: Negativo (Valores abaixo do limite de detecção do laboratório)."
    ],
    interactions: [
      "Infecções severas recentes, como a Sífilis, podem fazer com que a Anticardiolipina dê um falso positivo temporário!"
    ],
    related: ["anticoagulante-lupico", "vdrl"],
    synonyms: ["Anti-Cardiolipina IgG", "Anti-Cardiolipina IgM", "ACA"],
    curiosities: [
      "Você sabia que a Cardiolipina foi descoberta primeiramente no coração dos bois (bovinos)? É por isso que ela carrega a palavra 'Cardio' no seu nome!"
    ]
  }
];
