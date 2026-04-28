import { expandedExamsData } from './exams_expanded';
import { expandedExamsData2 } from './exams_expanded_2';
import { expandedExamsData3 } from './exams_expanded_3';
import { requestedExamsData } from './exams_requested';

const baseExamsData = [
  {
    id: 'hemograma',
    name: 'Hemograma Completo',
    category: 'Sangue',
    synonyms: ['Eritrograma', 'Leucograma', 'Plaquetograma', 'Quadro Hemático', 'HT', 'HMG', 'HM', 'plaquetas'],
    components: ['Glóbulos Vermelhos (Hemácias)', 'Glóbulos Brancos (Leucócitos)', 'Plaquetas', 'Hemoglobina', 'Hematócrito'],
    related: ['Glicemia', 'Coagulograma', 'Colesterol Total', 'Vitamina D', 'PCR'],
    shortDescription: 'Avalia as células do sangue e é usado para um check-up geral ou diagnóstico de condições como anemia.',
    purpose: 'O hemograma completo serve para avaliar a saúde geral e detectar uma ampla variedade de doenças e condições, como anemia, infecções, inflamações, problemas de coagulação, leucemia, entre outras. Ele mede componentes do sangue como glóbulos vermelhos, glóbulos brancos, hemoglobina, hematócrito e plaquetas.',
    referenceValues: [
      'Hemácias: 4,5 a 5,9 milhões/mm³ (Homens) | 4,0 a 5,2 milhões/mm³ (Mulheres)',
      'Hemoglobina: 13,5 a 17,5 g/dL (Homens) | 12,0 a 15,5 g/dL (Mulheres)',
      'Leucócitos (Glóbulos Brancos): 4.500 a 11.000 /mm³',
      'Plaquetas: 150.000 a 450.000 /mm³'
    ],
    methodology: 'A metodologia mais comum hoje é a Citometria de Fluxo Fluorescente e Impedância Elétrica em contadores hematológicos automatizados. Outras metodologias incluem a contagem manual em Câmara de Neubauer e a avaliação morfológica por Microscopia Óptica (esfregaço sanguíneo).',
    preparation: [
      'Jejum não é obrigatório para este exame.',
      'Evite exercícios físicos intensos 24 horas antes do exame.',
      'Beba água normalmente, pois ajuda a localizar as veias.'
    ],
    interactions: [
      'Corticoides (ex: Prednisona): Podem causar aumento nos glóbulos brancos (leucocitose) sem que haja infecção.',
      'Quimioterápicos e Imunossupressores: Reduzem drasticamente a contagem de glóbulos brancos (leucopenia).',
      'Diuréticos e desidratação: Podem falsamente elevar o hematócrito devido à concentração do sangue.'
    ],
    curiosities: [
      'Os glóbulos vermelhos vivem em média cerca de 120 dias no nosso corpo antes de serem destruídos e reciclados pelo baço.',
      'O sangue humano compõe cerca de 7 a 8% do peso corporal total de um adulto.',
      'Existem cerca de 5 litros de sangue no corpo humano, e o coração o bombeia por toda a rede vascular em apenas um minuto.',
      'Os glóbulos brancos, nossas células de defesa, têm uma vida muito mais curta, durando de algumas horas a alguns dias durante infecções ativas.',
      'O Hemograma é o exame laboratorial mais solicitado do mundo e fornece um "retrato" incrivelmente preciso do que acontece no nosso corpo.'
    ]
  },
  {
    id: 'coagulograma',
    name: 'Coagulograma',
    category: 'Sangue',
    synonyms: ['Estudo da Coagulação', 'Perfil de Coagulação', 'TS', 'TC', 'TAP', 'TP', 'TTPA', 'TPAE', 'KPTT'],
    components: ['Tempo de Sangramento (TS)', 'Tempo de Coagulação (TC)', 'Tempo de Protrombina (TAP/TP)', 'Tempo de Tromboplastina Parcial Ativada (TTPA/KPTT)', 'Plaquetas'],
    related: ['Hemograma', 'Fibrinogênio'],
    shortDescription: 'Conjunto de exames que analisa o processo de coagulação do sangue, essencial para pré-operatórios.',
    purpose: 'Serve para avaliar se o corpo consegue estancar sangramentos adequadamente. É amplamente usado antes de cirurgias, para investigar sangramentos anormais, e no monitoramento de pacientes em uso de medicamentos anticoagulantes.',
    referenceValues: [
      'TS: 1 a 3 minutos',
      'TC: 4 a 10 minutos',
      'TAP (Tempo de Protrombina): 11 a 14 segundos (Avaliado também pelo INR)',
      'TTPA: 25 a 45 segundos'
    ],
    methodology: 'Geralmente utiliza métodos coagulométricos foto-ópticos ou mecânicos. O TS e TC clássicos são testes manuais (método de Duke, Lee-White), mas hoje o TAP e TTPA são feitos em analisadores automatizados.',
    preparation: [
      'Jejum não é obrigatório.',
      'Informar OBRIGATORIAMENTE se faz uso de anticoagulantes (como Marevan, Xarelto, AAS).'
    ],
    interactions: [
      'Aspirina (AAS) e Anti-inflamatórios: Podem prolongar o Tempo de Sangramento (TS).',
      'Anticoagulantes orais (Varfarina/Marevan): Prolongam severamente o TAP (aumentam o INR).',
      'Heparina: Prolonga principalmente o TTPA.',
      'Vitamina K (Suplementos ou dieta muito rica em folhas verdes): Pode antagonizar os anticoagulantes e encurtar o tempo de coagulação.'
    ],
    curiosities: [
      'A coagulação é uma "cascata" incrivelmente complexa: quando você se corta, mais de 12 proteínas diferentes entram em ação uma após a outra para formar uma rede de fibrina e estancar o sangue.',
      'Pacientes que tomam o anticoagulante Varfarina precisam monitorar o TAP (através do INR) regularmente para garantir que o sangue não esteja ralo demais (risco de hemorragia) nem grosso demais (risco de trombose).',
      'Doenças genéticas como a Hemofilia causam falhas pontuais nessa cascata, fazendo com que a pessoa sangre por muito mais tempo em cortes simples.',
      'O sangue retirado para o Coagulograma vai para um tubo com tampa azul-clara contendo Citrato de Sódio, que impede o sangue de coagular dentro do tubo até o momento da análise na máquina.'
    ]
  },
  {
    id: 'glicemia',
    name: 'Glicemia de Jejum',
    category: 'Sangue',
    synonyms: ['Glicose de Jejum', 'Açúcar no Sangue', 'Glicemia Basal'],
    related: ['Hemoglobina Glicada', 'Insulina', 'Hemograma'],
    shortDescription: 'Mede a quantidade de glicose (açúcar) no sangue após um período de jejum.',
    purpose: 'É o principal exame para diagnosticar diabetes, pré-diabetes, hipoglicemia e para monitorar pessoas que já possuem a doença, ajudando a verificar se o tratamento está sendo eficaz.',
    referenceValues: [
      'Normal: 70 a 99 mg/dL',
      'Pré-diabetes: 100 a 125 mg/dL',
      'Diabetes: Maior ou igual a 126 mg/dL (em dois exames distintos)'
    ],
    methodology: 'A metodologia mais adotada é o Método Enzimático Colorimétrico (frequentemente usando a enzima Glicose Oxidase ou Hexoquinase). Outras metodologias incluem o sistema de Eletrodo de Enzima (amperometria) muito usado em glicosímetros capilares (teste de ponta de dedo).',
    preparation: [
      'Jejum de 8 horas (apenas água é permitida). Não ultrapassar 14 horas de jejum para evitar hipoglicemia.',
      'Não ingerir bebida alcoólica 72 horas antes.',
      'Informar ao laboratório sobre uso de medicamentos contínuos.'
    ],
    interactions: [
      'Corticoides (ex: Dexametasona, Prednisona): Aumentam significativamente os níveis de glicose no sangue.',
      'Betabloqueadores (ex: Propranolol, Atenolol): Podem alterar a tolerância à glicose e mascarar os sintomas de hipoglicemia.',
      'Diuréticos Tiazídicos (ex: Hidroclorotiazida): Podem causar elevação na glicemia em jejum.',
      'Antidepressivos e Antipsicóticos (ex: Olanzapina): Podem induzir resistência à insulina e aumentar o açúcar no sangue.'
    ],
    curiosities: [
      'A glicose é a principal fonte de energia do cérebro, consumindo cerca de 20% de toda a energia do nosso corpo, mesmo pesando apenas 2% do total.',
      'Situações de estresse extremo (físico ou emocional) fazem o corpo liberar hormônios que jogam açúcar na corrente sanguínea para uma resposta de "luta ou fuga".',
      'A diabetes já era documentada pelos egípcios há mais de 3.000 anos, que percebiam a doença quando as formigas eram atraídas pela urina doce dos pacientes.',
      'Comer carboidratos simples (como doces) sem fibras causa um pico muito rápido de glicose, o que frequentemente é seguido por uma queda brusca, causando cansaço.'
    ]
  },
  {
    id: 'perfil-lipidico',
    name: 'Perfil Lipídico (Colesterol)',
    category: 'Sangue',
    synonyms: ['Lipidograma', 'Colesterol Total e Frações', 'Colesterol Total e Fracoes', 'Colesterol Total e Fraçoe', 'Colesterol Toal e Fraçoe', 'Colesterol Toal e Fracoe', 'Exame de Colesterol'],
    components: ['Colesterol Total', 'HDL', 'LDL', 'VLDL', 'Triglicerídeos', 'Não-HDL'],
    related: ['Glicemia', 'TGO', 'TGP'],
    shortDescription: 'Mede os níveis de colesterol e triglicerídeos, ajudando a avaliar o risco cardiovascular.',
    purpose: 'Determina o risco de doenças cardíacas e bloqueio dos vasos sanguíneos. Avalia o Colesterol Total, HDL (bom colesterol), LDL (mau colesterol), VLDL e os triglicerídeos.',
    referenceValues: [
      'Colesterol Total: Desejável < 190 mg/dL',
      'HDL (Bom): Desejável > 40 mg/dL',
      'LDL (Mau): Ótimo < 100 mg/dL (ou menor dependendo do risco cardíaco do paciente)',
      'Triglicerídeos: Desejável < 150 mg/dL (com jejum)'
    ],
    methodology: 'O método primário é o Enzimático Colorimétrico Automatizado. Para o LDL, frequentemente usa-se a Fórmula de Friedewald (calculado a partir do Colesterol Total, HDL e Triglicerídeos), mas hoje a Dosagem Direta Enzimática de LDL (Homogêneo) também é muito utilizada quando os triglicerídeos estão muito altos.',
    preparation: [
      'Jejum não é mais obrigatório para o Perfil Lipídico, conforme o Consenso Brasileiro da SBC e SBPC/ML.',
      'O jejum de 12 horas só é exigido se o médico solicitar expressamente no pedido médico ou se os triglicerídeos anteriores estavam acima de 440 mg/dL.',
      'Mantenha a dieta habitual nos dias que antecedem o exame.',
      'Evitar o consumo de álcool 72 horas antes.'
    ],
    interactions: [
      'Anticoncepcionais orais e Terapia de Reposição Hormonal: Podem aumentar triglicerídeos e alterar níveis de HDL e LDL.',
      'Diuréticos (ex: Hidroclorotiazida): Podem aumentar o colesterol total e os níveis de triglicerídeos.',
      'Betabloqueadores: Alguns podem reduzir o HDL (bom colesterol) e aumentar os triglicerídeos.',
      'Isotretinoína (Roacutan): Pode causar aumento drástico nos níveis de triglicerídeos e colesterol.'
    ],
    curiosities: [
      'O colesterol não é "vilão". Ele é vital para construir a membrana de todas as nossas células e para a produção de hormônios como testosterona e estrogênio.',
      'Cerca de 70% a 80% do colesterol circulante no corpo é produzido pelo nosso próprio fígado, e não vindo diretamente da alimentação.',
      'O HDL é chamado de "bom colesterol" porque age como um faxineiro, retirando o excesso de colesterol das artérias e levando de volta ao fígado para ser excretado.',
      'Estudos mostram que rir e ter emoções positivas frequentes pode ajudar a aumentar os níveis do bom colesterol (HDL) no sangue.'
    ]
  },
  {
    id: 'colesterol-total',
    name: 'Colesterol Total',
    category: 'Bioquímica / Perfil Lipídico',
    synonyms: ['Colesterol', 'Dosagem de colesterol total', 'CT'],
    related: ['Perfil Lipídico (Colesterol)', 'HDL Colesterol', 'LDL Colesterol', 'Triglicerídeos'],
    shortDescription: 'Dosagem isolada do colesterol total no sangue.',
    purpose: 'Avalia a soma das principais frações de colesterol circulantes e auxilia na estimativa de risco cardiovascular junto de HDL, LDL, VLDL e triglicerídeos.',
    referenceValues: [
      'Desejável em adultos: geralmente abaixo de 190 mg/dL, conforme diretriz e risco cardiovascular.'
    ],
    methodology: 'Método enzimático colorimétrico automatizado em soro ou plasma, conforme rotina do laboratório.',
    preparation: [
      'Jejum geralmente não é obrigatório para colesterol total isolado.',
      'Manter dieta habitual nos dias anteriores.',
      'Confirmar com o laboratório se o pedido médico exige jejum.'
    ],
    interactions: [
      'Estatinas, fibratos e outros hipolipemiantes reduzem o colesterol.',
      'Gestação, hipotireoidismo, síndrome nefrótica e alguns medicamentos podem elevar o resultado.'
    ],
    curiosities: [
      'O colesterol total sozinho não separa frações boas e ruins; por isso costuma ser interpretado junto do HDL, LDL e triglicerídeos.'
    ]
  },
  {
    id: 'hdl-colesterol',
    name: 'HDL Colesterol',
    category: 'Bioquímica / Perfil Lipídico',
    synonyms: ['HDL', 'Colesterol HDL', 'HDL-C', 'High Density Lipoprotein'],
    related: ['Perfil Lipídico (Colesterol)', 'Colesterol Total', 'LDL Colesterol', 'Triglicerídeos'],
    shortDescription: 'Dosagem isolada da fração HDL, conhecida como colesterol bom.',
    purpose: 'Ajuda na avaliação de risco cardiovascular, pois o HDL participa do transporte reverso de colesterol.',
    referenceValues: [
      'Em adultos, valores mais altos tendem a ser melhores; muitos laboratórios usam desejável acima de 40 mg/dL.'
    ],
    methodology: 'Método enzimático homogêneo/colorimétrico em soro ou plasma.',
    preparation: [
      'Jejum geralmente não é obrigatório.',
      'Manter rotina alimentar habitual antes da coleta, salvo orientação médica.'
    ],
    interactions: [
      'Exercício, tabagismo, álcool, hormônios e alguns medicamentos podem alterar HDL.'
    ],
    curiosities: [
      'HDL é chamado de colesterol bom porque participa da remoção de colesterol dos tecidos para o fígado.'
    ]
  },
  {
    id: 'ldl-colesterol',
    name: 'LDL Colesterol',
    category: 'Bioquímica / Perfil Lipídico',
    synonyms: ['LDL', 'Colesterol LDL', 'LDL-C', 'Low Density Lipoprotein'],
    related: ['Perfil Lipídico (Colesterol)', 'Colesterol Total', 'HDL Colesterol', 'Triglicerídeos'],
    shortDescription: 'Dosagem ou cálculo da fração LDL, associada ao risco aterosclerótico.',
    purpose: 'É uma das principais metas no acompanhamento de risco cardiovascular e tratamento com hipolipemiantes.',
    referenceValues: [
      'A meta depende do risco cardiovascular individual; pacientes de alto risco podem precisar de LDL muito mais baixo.'
    ],
    methodology: 'Pode ser calculado por fórmula ou dosado por método direto, conforme triglicerídeos e rotina do laboratório.',
    preparation: [
      'Jejum geralmente não é obrigatório quando o laboratório usa métodos aceitos para perfil lipídico sem jejum.',
      'Confirmar jejum se triglicerídeos anteriores foram muito altos ou se o médico solicitou expressamente.'
    ],
    interactions: [
      'Estatinas, ezetimiba, inibidores de PCSK9, dieta e perda de peso podem reduzir LDL.'
    ],
    curiosities: [
      'LDL transporta colesterol do fígado para os tecidos; em excesso, favorece placas nas artérias.'
    ]
  },
  {
    id: 'vldl-colesterol',
    name: 'VLDL Colesterol',
    category: 'Bioquímica / Perfil Lipídico',
    synonyms: ['VLDL', 'Colesterol VLDL', 'VLDL-C', 'Very Low Density Lipoprotein'],
    related: ['Perfil Lipídico (Colesterol)', 'Triglicerídeos', 'Colesterol Total'],
    shortDescription: 'Estimativa ou dosagem da fração VLDL, ligada ao transporte de triglicerídeos.',
    purpose: 'Complementa a avaliação do metabolismo lipídico, especialmente quando há hipertrigliceridemia.',
    referenceValues: [
      'Valores de referência variam conforme método e forma de cálculo adotada pelo laboratório.'
    ],
    methodology: 'Frequentemente calculado a partir dos triglicerídeos; alguns laboratórios podem usar método direto.',
    preparation: [
      'Seguir a orientação do laboratório para perfil lipídico ou triglicerídeos.',
      'Jejum pode ser solicitado quando triglicerídeos estão muito elevados ou por orientação médica.'
    ],
    interactions: [
      'Álcool, dieta rica em carboidratos, diabetes descompensado e alguns medicamentos podem elevar VLDL/triglicerídeos.'
    ],
    curiosities: [
      'O VLDL carrega triglicerídeos produzidos pelo fígado e costuma acompanhar alterações dos triglicerídeos.'
    ]
  },
  {
    id: 'colesterol-nao-hdl',
    name: 'Colesterol Não-HDL',
    category: 'Bioquímica / Perfil Lipídico',
    synonyms: ['Não-HDL', 'Nao HDL', 'Colesterol não HDL', 'Colesterol nao HDL', 'Non-HDL'],
    related: ['Perfil Lipídico (Colesterol)', 'Colesterol Total', 'HDL Colesterol'],
    shortDescription: 'Cálculo do colesterol total menos o HDL.',
    purpose: 'Estima o conjunto das partículas aterogênicas e pode ser útil quando triglicerídeos estão elevados.',
    referenceValues: [
      'A meta depende do risco cardiovascular e costuma acompanhar metas de LDL com margem adicional.'
    ],
    methodology: 'Cálculo: colesterol total menos HDL colesterol.',
    preparation: [
      'Segue o preparo dos exames usados no cálculo: colesterol total e HDL.',
      'Jejum geralmente não é obrigatório, salvo orientação médica ou do laboratório.'
    ],
    interactions: [
      'Qualquer interferência em colesterol total ou HDL altera o cálculo do não-HDL.'
    ],
    curiosities: [
      'O não-HDL reúne LDL, VLDL e outras partículas ricas em colesterol que podem participar da aterosclerose.'
    ]
  },
  {
    id: 'triglicerideos',
    name: 'Triglicerídeos',
    category: 'Bioquímica / Perfil Lipídico',
    synonyms: ['Triglicerides', 'Triglicerídeos séricos', 'TG', 'TGL'],
    related: ['Perfil Lipídico (Colesterol)', 'VLDL Colesterol', 'Colesterol Total'],
    shortDescription: 'Dosagem isolada dos triglicerídeos no sangue.',
    purpose: 'Avalia metabolismo de gorduras, risco cardiovascular e risco de pancreatite quando muito elevado.',
    referenceValues: [
      'Desejável geralmente abaixo de 150 mg/dL; a interpretação depende de jejum, método e risco clínico.'
    ],
    methodology: 'Método enzimático colorimétrico em soro ou plasma.',
    preparation: [
      'Jejum pode ser solicitado conforme rotina do laboratório, valor prévio de triglicerídeos ou pedido médico.',
      'Evitar consumo de álcool por 72 horas antes, quando possível.',
      'Manter dieta habitual nos dias anteriores.'
    ],
    interactions: [
      'Álcool, diabetes descompensado, dieta rica em açúcar, gestação, corticoides e alguns medicamentos podem elevar triglicerídeos.'
    ],
    curiosities: [
      'Triglicerídeos muito altos podem aumentar risco de pancreatite, além de interferirem no cálculo do LDL.'
    ]
  },
  {
    id: 'tsh',
    name: 'TSH (Hormônio Estimulante da Tireoide)',
    category: 'Hormônios',
    synonyms: ['Tireotrofina', 'Hormônio Tireoestimulante'],
    related: ['T4 Livre', 'T3 Total', 'Hemograma'],
    shortDescription: 'Avalia a função da glândula tireoide, diagnosticando hipotireoidismo ou hipertireoidismo.',
    purpose: 'O TSH é o exame mais sensível para investigar o funcionamento da tireoide. Ele é produzido pela hipófise e estimula a tireoide a produzir seus hormônios (T3 e T4). Níveis altos de TSH geralmente indicam hipotireoidismo (tireoide lenta).',
    referenceValues: [
      'Adultos saudáveis: 0,4 a 4,5 µUI/mL',
      'Gestantes e idosos possuem faixas de referência específicas que variam conforme a idade e trimestre da gestação.'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA) são os métodos padrão-ouro devido à sua altíssima sensibilidade (Ensaios de 3ª geração). Outras metodologias mais antigas incluem o Radioimunoensaio (RIA) e ELISA.',
    preparation: [
      'Jejum não é obrigatório.',
      'A coleta deve ser preferencialmente realizada até as 9h da manhã.',
      'Se você toma remédio para a tireoide (Puran T4, Synthroid), deve tomá-lo apenas APÓS a coleta de sangue do dia.',
      'Suplementos contendo biotina (vitamina B7) podem interferir no resultado e devem ser suspensos 3 dias antes.'
    ],
    interactions: [
      'Biotina (Vitamina B7): Interfere DIRETAMENTE na metodologia do ensaio em laboratório, podendo causar falsos diagnósticos de hipertireoidismo.',
      'Amiodarona (Antiarrítmico): Por conter muito iodo, pode alterar os níveis de TSH causando hipo ou hipertireoidismo.',
      'Lítio (Estabilizador de humor): Pode inibir a liberação de hormônios tireoidianos, causando hipotireoidismo compensatório (TSH alto).',
      'Corticoides: Em altas doses, podem inibir a secreção de TSH na hipófise.'
    ],
    curiosities: [
      'A tireoide tem o formato de uma borboleta e pesa apenas de 15 a 25 gramas, mas controla o metabolismo de quase todas as células do corpo.',
      'Muitas vezes o TSH se altera muito antes dos hormônios T3 e T4 (que são os verdadeiros hormônios tireoidianos) saírem do normal. O corpo avisa antes que algo vai mal.',
      'Distúrbios da tireoide são incrivelmente comuns: afetam cerca de 10% das mulheres ao longo da vida.',
      'Uma tireoide hiperativa (hipertireoidismo) pode fazer o coração bater tão rápido e o metabolismo acelerar tanto que a pessoa perde peso mesmo comendo compulsivamente.'
    ]
  },
  {
    id: 'creatinina',
    name: 'Creatinina',
    category: 'Função Renal',
    synonyms: ['Creatinina Sérica', 'Creatinina no Sangue'],
    related: ['Ureia', 'Ácido Úrico'],
    shortDescription: 'Principal marcador para avaliar como está a função e a filtração dos rins.',
    purpose: 'Serve para identificar alterações na função renal. Como a creatinina é um resíduo filtrado exclusivamente pelos rins, se a taxa no sangue aumenta, significa que os rins não estão filtrando o sangue adequadamente.',
    referenceValues: [
      'Homens: 0,7 a 1,2 mg/dL',
      'Mulheres: 0,5 a 1,1 mg/dL'
    ],
    methodology: 'O método Colorimétrico Cinético de Jaffé Modificado é o mais tradicional e popular. Outra metodologia mais moderna e imune a certas interferências é o Método Enzimático (Creatininase).',
    preparation: [
      'Jejum não é obrigatório.',
      'Evitar exercícios físicos extenuantes 48 horas antes da coleta, pois podem alterar o resultado.',
      'Evitar excesso de carne vermelha nas 24 horas anteriores.'
    ],
    interactions: [
      'Anti-inflamatórios Não Esteroides (AINEs, ex: Ibuprofeno, Diclofenaco): Podem reduzir o fluxo sanguíneo nos rins e elevar a creatinina.',
      'Cimetidina e Trimetoprima: Bloqueiam a secreção tubular de creatinina, aumentando seus níveis no sangue sem que haja real dano renal.',
      'Suplementos de Creatina: Podem causar aumento direto nos níveis sanguíneos de creatinina.',
      'Inibidores da ECA (ex: Enalapril) e BRAs (ex: Losartana): Podem causar um leve aumento inicial na creatinina, o que geralmente é esperado.'
    ],
    curiosities: [
      'A creatinina é o lixo natural produzido pela quebra da fosfocreatina nos seus músculos toda vez que você se movimenta.',
      'Fisiculturistas e pessoas com muita massa muscular naturalmente têm níveis mais altos de creatinina, o que pode dar a falsa impressão de problemas renais.',
      'Os rins humanos filtram cerca de 180 litros de sangue por dia, o que significa que o seu sangue é purificado mais de 30 vezes diariamente.',
      'O suplemento alimentar "Creatina", muito popular entre atletas, aumenta as reservas de energia no músculo e frequentemente causa um pequeno aumento na creatinina sanguínea.'
    ]
  },
  {
    id: 'tgo-ast',
    name: 'TGO (AST) - Função Hepática',
    category: 'Função Hepática',
    synonyms: ['Aspartato Aminotransferase', 'Transaminase Oxalacética', 'AST', 'Transaminases'],
    related: ['TGP', 'Gama GT', 'Fosfatase Alcalina'],
    shortDescription: 'Enzima medida para avaliar lesões no fígado ou em músculos.',
    purpose: 'A Aspartato Aminotransferase (AST ou TGO) é usada principalmente para investigar doenças e lesões hepáticas (como hepatites e cirrose). Como também está presente nos músculos e coração, pode se elevar após exercícios intensos ou lesões musculares.',
    referenceValues: [
      'Homens: 10 a 40 U/L',
      'Mulheres: 9 a 32 U/L'
    ],
    methodology: 'Geralmente realizada através de Método Cinético UV com ou sem ativação por Piridoxal-Fosfato (Vitamina B6), que mede a taxa de oxidação do NADH. Outras metodologias incluem métodos colorimétricos antigos como o de Reitman-Frankel.',
    preparation: [
      'Jejum não é obrigatório.',
      'Não ingerir bebidas alcoólicas 24 horas antes do exame.',
      'Informar sobre o uso de medicamentos, vitaminas e suplementos fitoterápicos.'
    ],
    interactions: [
      'Estatinas (ex: Sinvastatina, Atorvastatina): Medicamentos para o colesterol que frequentemente causam leve a moderada elevação no TGO.',
      'Paracetamol (Acetaminofeno): Em doses altas, é extremamente tóxico para o fígado e causa pico drástico no TGO.',
      'Anti-inflamatórios (ex: Nimesulida, Diclofenaco): O uso contínuo pode causar toxicidade hepática.',
      'Anticonvulsivantes (ex: Ácido Valproico, Fenitoína): Podem elevar as enzimas hepáticas durante o tratamento.'
    ],
    curiosities: [
      'TGO e TGP são enzimas frequentemente chamadas de "transaminases". Elas são como operários trabalhando dentro das células do fígado; se a célula se rompe, elas vazam para o sangue.',
      'Antes dos testes modernos de troponina existirem, o TGO era o principal exame de sangue usado para confirmar se um paciente havia sofrido um infarto.',
      'Tomar muitos remédios para dor (como o Paracetamol) em altas doses pode causar uma elevação dramática e repentina nas enzimas hepáticas.',
      'O fígado é o único órgão interno humano capaz de se regenerar: mesmo que 75% dele seja removido, ele pode crescer novamente até o seu tamanho original.'
    ]
  },
  {
    id: 'tgp-alt',
    name: 'TGP (ALT) - Função Hepática',
    category: 'Função Hepática',
    synonyms: ['Alanina Aminotransferase', 'Transaminase Pirúvica', 'ALT', 'Transaminases'],
    related: ['TGO', 'Perfil Lipídico', 'Insulina'],
    shortDescription: 'Enzima específica do fígado usada para diagnosticar lesões e inflamações hepáticas.',
    purpose: 'A Alanina Aminotransferase (ALT ou TGP) é o marcador mais sensível e específico para lesão celular no fígado. Valores altos indicam inflamação, esteatose hepática (gordura no fígado), hepatites virais ou uso de medicamentos hepatotóxicos.',
    referenceValues: [
      'Homens: 10 a 50 U/L',
      'Mulheres: 10 a 35 U/L'
    ],
    methodology: 'Realizada através do Método Cinético UV (IFCC). Envolve o monitoramento contínuo da diminuição da absorbância do NADH em espectrofotômetro. Metodologias alternativas incluem métodos colorimétricos manuais, hoje pouco utilizados.',
    preparation: [
      'Jejum não é obrigatório.',
      'Abstinência de álcool por pelo menos 24 a 72 horas.',
      'A prática de atividades físicas intensas na véspera deve ser evitada.'
    ],
    interactions: [
      'Paracetamol: A principal causa medicamentosa de elevação severa de TGP por toxicidade no fígado.',
      'Estatinas (medicamentos para colesterol): Podem causar aumento benigno do TGP em algumas pessoas.',
      'Antibióticos (ex: Amoxicilina-Clavulanato): Podem causar hepatite medicamentosa aguda.',
      'Isotretinoína (Roacutan) e Cetoconazol (Antifúngico oral): Requerem monitoramento mensal do TGP devido ao risco de dano hepático.'
    ],
    curiosities: [
      'Diferente do TGO, o TGP mora quase que exclusivamente dentro do fígado. Quando o TGP está mais alto que o TGO, a suspeita recai fortemente sobre doenças estritamente hepáticas.',
      'Atualmente, a principal causa de aumento do TGP no mundo não é o álcool, e sim a Esteatose Hepática (Gordura no Fígado), intimamente ligada ao consumo de carboidratos em excesso e obesidade.',
      'Você pode ter cirrose ou danos severos ao fígado e ainda assim apresentar TGP normal, pois em estágios muito avançados o fígado já não tem células ativas suficientes para liberar essa enzima.',
      'Muitos chás de ervas e fitoterápicos que prometem "emagrecer e secar" são na verdade tóxicos para o fígado e causam picos de TGP.'
    ]
  },
  {
    id: 'vitamina-d',
    name: 'Vitamina D (25-OH)',
    category: 'Vitaminas',
    synonyms: ['25-Hidroxivitamina D', 'Calcidiol', 'Colecalciferol'],
    related: ['Cálcio', 'Paratormônio (PTH)', 'Fósforo'],
    shortDescription: 'Avalia a deficiência de Vitamina D, importante para a saúde óssea e o sistema imune.',
    purpose: 'Serve para identificar deficiência dessa vitamina, que é fundamental para a absorção de cálcio, saúde dos ossos, dentes, regulação do sistema imunológico e funcionamento muscular.',
    referenceValues: [
      'Deficiência: < 20 ng/mL',
      'Suficiente (população geral): 20 a 60 ng/mL',
      'Suficiente (grupos de risco / idosos): 30 a 60 ng/mL',
      'Risco de toxicidade: > 100 ng/mL'
    ],
    methodology: 'A técnica mais comum é a Quimioluminescência (CLIA) pela sua rapidez e automação. O padrão-ouro absoluto, usado para desempatar resultados conflitantes, é a Cromatografia Líquida acoplada à Espectrometria de Massas (LC-MS/MS). Radioimunoensaio (RIA) e ELISA também existem como alternativas.',
    preparation: [
      'Jejum não é obrigatório.',
      'Informar ao laboratório se está em tratamento com suplementos de Vitamina D.'
    ],
    interactions: [
      'Anticonvulsivantes (ex: Fenitoína, Carbamazepina): Aceleram a degradação da Vitamina D no fígado, podendo causar deficiência.',
      'Orlistate (Xenical): Reduz a absorção de gorduras no intestino, e como a Vitamina D é solúvel em gordura, sua absorção despenca.',
      'Corticoides (ex: Prednisona): Podem prejudicar a absorção da Vitamina D e reduzir seus níveis no sangue.',
      'Colestiramina e Laxantes estimulantes: Podem diminuir a absorção da vitamina D.'
    ],
    curiosities: [
      'A Vitamina D atua no corpo humano mais como um hormônio (mensageiro químico) do que como uma vitamina propriamente dita, ativando ou desativando genes.',
      'Cerca de 90% da nossa Vitamina D é sintetizada pelo contato direto dos raios solares (tipo UVB) com o colesterol presente sob a nossa pele.',
      'Pessoas com pele mais escura têm mais melanina, o que funciona como um protetor solar natural e faz com que precisem de muito mais sol para produzir a mesma quantidade de Vitamina D.',
      'Uma grande parte da população mundial urbana sofre de hipovitaminose D devido ao fato de passarmos a maior parte do nosso dia trabalhando em ambientes fechados sob luz artificial.'
    ]
  },
  {
    id: 'vitamina-b12',
    name: 'Vitamina B12',
    category: 'Vitaminas',
    synonyms: ['Cobalamina', 'Cianocobalamina'],
    related: ['Hemograma', 'Ácido Fólico', 'Ferro'],
    shortDescription: 'Mede os níveis dessa vitamina essencial para os nervos e para a produção de sangue.',
    purpose: 'Investiga as causas de anemias macrocíticas e neuropatias. A B12 é vital para a formação dos glóbulos vermelhos, funcionamento do sistema nervoso central e síntese de DNA e mielina.',
    referenceValues: [
      'Deficiência: < 200 pg/mL',
      'Normal/Desejável: 200 a 900 pg/mL (Muitos médicos preferem valores > 350 pg/mL para saúde neurológica)'
    ],
    methodology: 'Ensaios de Imunoensaio Competitivo Quimioluminescente (CLIA). Outras metodologias incluem a dosagem de Ácido Metilmalônico e Homocisteína para avaliar deficiência funcional de B12 celular. Ensaios microbiológicos também existem, mas são antigos.',
    preparation: [
      'Jejum não é obrigatório.',
      'Suspender o uso de suplementos de biotina (vitamina B7) 72 horas antes.',
      'Pacientes usando suplementação injetável ou oral devem avisar o laboratório.'
    ],
    interactions: [
      'Inibidores de Bomba de Prótons (ex: Omeprazol, Pantoprazol): Reduzem a acidez do estômago, o que é fundamental para a absorção da Vitamina B12 dos alimentos. O uso a longo prazo pode causar deficiência.',
      'Metformina (Medicamento para diabetes): Pode reduzir a absorção intestinal da Vitamina B12 em até 30% dos pacientes que a utilizam cronicamente.',
      'Anticoncepcionais Orais: Podem causar uma leve redução nos níveis de B12 medidas no sangue.',
      'Colchicina e Neomicina: Podem interferir na absorção no trato gastrointestinal.'
    ],
    curiosities: [
      'A B12 só existe na dieta a partir de fontes de origem animal (carnes, peixes, laticínios), motivo pelo qual os veganos devem obrigatoriamente suplementá-la.',
      'Para ser absorvida no fim do intestino, a B12 precisa se acoplar a uma substância fabricada no estômago chamada "Fator Intrínseco". Se você usa remédios para gastrite ("prazóis") frequentemente, pode bloquear essa absorção.',
      'A falta severa de B12 pode causar problemas de memória que simulam sintomas idênticos ao do Alzheimer, além de formigamentos irreversíveis nas mãos e nos pés.',
      'A vitamina B12 armazena-se muito bem no nosso fígado. Pode levar anos até que suas reservas se esgotem totalmente após parar de consumi-la.'
    ]
  },
  {
    id: 'hba1c',
    name: 'Hemoglobina Glicada (HbA1c)',
    category: 'Sangue',
    synonyms: ['Glico-hemoglobina', 'Hemoglobina Glicosilada', 'HbA1c', 'A1C'],
    related: ['Glicemia', 'Insulina', 'Colesterol'],
    shortDescription: 'Exibe a média dos níveis de açúcar no sangue dos últimos 2 a 3 meses.',
    purpose: 'É o padrão-ouro para monitoramento do Diabetes. Ele reflete a concentração média de glicose no sangue ao longo da vida útil dos glóbulos vermelhos (cerca de 90 a 120 dias).',
    referenceValues: [
      'Normal: Menor que 5,7%',
      'Pré-diabetes: 5,7% a 6,4%',
      'Diabetes: 6,5% ou mais',
      'Para diabéticos em tratamento: Alvo geralmente menor que 7,0%'
    ],
    methodology: 'O padrão-ouro certificado pelo NGSP é a Cromatografia Líquida de Alta Performance (HPLC). Outras metodologias perfeitamente aceitas são a Imunoturbidimetria, Eletroforese Capilar e Cromatografia de Afinidade ao Boronato.',
    preparation: [
      'Não necessita de jejum.',
      'Pode ser colhido a qualquer hora do dia.',
      'Alterações recentes na dieta (de 1 ou 2 dias) não afetam o resultado.'
    ],
    interactions: [
      'Vitamina C em altas doses e Vitamina E: Podem interferir nos métodos laboratoriais, gerando resultados falsamente baixos ou altos.',
      'Aspirina (AAS) em altas doses: Pode alterar o resultado de alguns métodos laboratoriais de hemoglobina glicada.',
      'Ferro e Eritropoetina: O tratamento da anemia pode afetar a renovação das hemácias, impactando a interpretação do exame.',
      'Medicamentos que causam anemia hemolítica (ex: Dapsona): Encurtam a vida das hemácias e dão um falso resultado baixo.'
    ],
    curiosities: [
      'A mágica desse exame é que o açúcar "gruda" na hemoglobina das hemácias, e como as hemácias duram cerca de 120 dias, esse açúcar grudado nos dá uma gravação em vídeo de meses do seu nível de açúcar!',
      'O nome do processo químico onde o açúcar gruda na proteína de forma irreversível se chama "glicação". É o mesmo princípio químico (Reação de Maillard) que faz a casca do pão ficar marrom e torrada no forno.',
      'Pessoas com níveis constantemente altos de glicação envelhecem mais rápido, pois suas fibras de colágeno (que mantém a pele firme) perdem elasticidade.',
      'Se você tem uma anemia hemolítica, onde suas hemácias morrem mais rápido, a HbA1c pode dar um falso-baixo, pois a "fita cassete" não durou o tempo necessário.'
    ]
  },
  {
    id: 'pcr',
    name: 'Proteína C Reativa (PCR)',
    category: 'Imunologia',
    synonyms: ['Proteína C-Reativa', 'CRP', 'PCR Ultrassensível', 'PCR-us', 'PCR us', 'PCR de Alta Sensibilidade'],
    related: ['Hemograma', 'Fator Reumatoide'],
    shortDescription: 'Um marcador geral de inflamação e infecção aguda no organismo.',
    purpose: 'A PCR é produzida pelo fígado em resposta à inflamação. O exame é usado para detectar infecções bacterianas, doenças inflamatórias crônicas (como artrite) ou avaliar o risco de problemas cardiovasculares (no exame de PCR ultrassensível).',
    referenceValues: [
      'PCR Clássico (Infecção): Normal < 1,0 mg/dL (ou < 10 mg/L)',
      'PCR Ultrassensível (Risco Cardíaco): Baixo risco < 1 mg/L | Médio risco 1 a 3 mg/L | Alto risco > 3 mg/L'
    ],
    methodology: 'Principalmente Imunoturbidimetria ou Nefelometria. Existem testes rápidos imunocromatográficos (Point-of-Care), mas são menos precisos para acompanhamento fino.',
    preparation: [
      'Jejum não é obrigatório para a PCR normal.',
      'Para a PCR Ultrassensível (risco cardíaco), manter a dieta e rotina habituais, sem necessidade de jejum estrito.'
    ],
    interactions: [
      'Estatinas e Fibratos: Podem reduzir a inflamação vascular e consequentemente baixar os níveis de PCR.',
      'Anticoncepcionais Orais e Terapia de Reposição Hormonal: Podem elevar significativamente a PCR sem que haja qualquer infecção, o que pode confundir o médico.',
      'Corticoides (ex: Prednisona) e Anti-inflamatórios potentes: Atuam cortando a inflamação na raiz e podem mascarar infecções reduzindo drasticamente a PCR.'
    ],
    curiosities: [
      'A PCR é um exame incrivelmente rápido e "fofoqueiro". Ela sobe radicalmente no sangue poucas horas depois de uma infecção bacteriana começar ou de um trauma severo.',
      'Não confunda PCR do sangue com o RT-PCR do cotonete (swab nasal) usado no diagnóstico da COVID. O do cotonete detecta DNA/RNA de vírus e bactérias. O PCR do sangue detecta uma proteína do seu corpo mostrando que há uma "guerra" biológica.',
      'Estudos recentes mostraram que pequenas inflamações silenciosas e crônicas (que geram PCR levemente alto) danificam as artérias, sendo a principal causa escondida de infartos do miocárdio.',
      'Um resfriado viral forte pode nem alterar o seu PCR, enquanto uma infecção de garganta por bactérias pode fazer os níveis aumentarem 10.000% da noite pro dia.'
    ]
  },
  {
    id: 'ureia',
    name: 'Ureia',
    category: 'Função Renal',
    synonyms: ['Nitrogênio Ureico no Sangue', 'BUN (Blood Urea Nitrogen)'],
    related: ['Creatinina', 'Ácido Úrico'],
    shortDescription: 'Avalia a função renal e o metabolismo das proteínas.',
    purpose: 'A ureia é um produto residual formado no fígado a partir da degradação das proteínas e filtrado pelos rins. O exame avalia o quão bem os rins estão limpando o sangue.',
    referenceValues: [
      'Valores normais variam de 15 a 45 mg/dL',
      'Pode variar ligeiramente dependendo do método laboratorial e da idade do paciente.'
    ],
    methodology: 'O método Enzimático UV (Urease / Glutamato Desidrogenase) é o mais prevalente. Outra alternativa clássica é o método Enzimático Colorimétrico (Urease de Berthelot).',
    preparation: [
      'Jejum não é obrigatório.',
      'Dietas muito ricas em proteínas podem elevar discretamente os resultados.'
    ],
    interactions: [
      'Diuréticos e Corticoides: Podem aumentar a quebra de proteínas e a concentração sanguínea, aumentando a ureia.',
      'Tetraciclinas (Classe de antibióticos): Podem causar elevação na ureia sanguínea sem necessariamente danificar os rins de forma permanente.',
      'Esteroides anabolizantes: Podem alterar o metabolismo de proteínas e os níveis de ureia.'
    ],
    curiosities: [
      'Na insuficiência renal severa, a alta concentração de ureia no sangue causa a "síndrome urêmica", que literalmente intoxica o cérebro do paciente e causa confusão mental.',
      'Desidratação leve a moderada frequentemente faz os níveis de ureia aumentarem, pois os rins seguram mais a água no corpo e os resíduos se concentram no sangue.',
      'Uma dieta focada excessivamente em "Whey Protein", peito de frango e ovos pode gerar mais lixo proteico (ureia) para os rins filtrarem, mas o corpo se adapta sem danos se não houver doença renal pré-existente.',
      'A Ureia presente no sangue é a mesma substância sintética utilizada pela indústria em hidratantes de pele intensos, servindo para segurar água nas células da pele.'
    ]
  },
  {
    id: 'acido-urico',
    name: 'Ácido Úrico',
    category: 'Bioquímica',
    synonyms: ['Urato', 'Ácido Úrico Sérico'],
    related: ['Creatinina', 'Ureia'],
    shortDescription: 'Monitora os níveis de ácido úrico no sangue, relacionado à Gota ou cálculos renais.',
    purpose: 'O ácido úrico é formado pela quebra das purinas (substâncias encontradas em certos alimentos). Níveis altos podem cristalizar nas articulações (causando a doença Gota) ou nos rins (cálculos renais).',
    referenceValues: [
      'Homens: 3,4 a 7,0 mg/dL',
      'Mulheres: 2,4 a 6,0 mg/dL'
    ],
    methodology: 'Método Enzimático Colorimétrico (Uricase) é o padrão de rotina. Metodologias baseadas em absorção no UV da Uricase também existem, além de métodos não enzimáticos antigos de redução de fosfotungstato (raramente usados hoje).',
    preparation: [
      'Jejum não é obrigatório.',
      'Evite o consumo de álcool (especialmente cerveja) 24 horas antes do exame.',
      'Pode ser necessário evitar alimentos ricos em purinas (como fígado ou sardinha) um dia antes, consulte o laboratório.'
    ],
    interactions: [
      'Diuréticos Tiazídicos (ex: Hidroclorotiazida): Uma das causas mais comuns de aumento medicamentoso do ácido úrico, pois diminuem a sua excreção pelos rins.',
      'Aspirina (AAS) em baixas doses: Pode aumentar os níveis de ácido úrico, dificultando sua eliminação.',
      'Alopurinol e Probenecida: Medicamentos usados especificamente para diminuir os níveis de ácido úrico no tratamento da Gota.',
      'Quimioterapia: Causa a destruição rápida de muitas células tumorais, liberando imensas quantidades de ácido úrico no sangue.'
    ],
    curiosities: [
      'A gota, uma artrite extremamente dolorosa causada pela cristalização do ácido úrico na articulação do dedão do pé, foi chamada durante séculos de "A Doença dos Reis", por afetar pessoas ricas que abusavam de carnes, vinhos e cerveja.',
      'Apenas um terço do ácido úrico no nosso sangue vem da comida; os outros dois terços vêm da quebra e renovação natural das nossas próprias células.',
      'Humanos e os grandes macacos perderam a enzima (uricase) capaz de dissolver o ácido úrico ao longo da evolução. Outros mamíferos, como cães, conseguem desmanchá-lo sem problemas.',
      'Alguns estudos sugerem que o fato dos humanos terem ácido úrico no sangue foi uma vantagem evolutiva, agindo como um poderoso antioxidante no cérebro contra o envelhecimento.'
    ]
  },
  {
    id: 'insulina',
    name: 'Insulina',
    category: 'Hormônios',
    synonyms: ['Insulina de Jejum', 'Insulinemia'],
    related: ['Glicemia', 'Hemoglobina Glicada'],
    shortDescription: 'Mede a produção de insulina pelo pâncreas, útil na avaliação da resistência insulínica.',
    purpose: 'Ajuda a diagnosticar problemas na produção ou utilização da insulina, como diabetes tipo 2, tumores no pâncreas e investigar a resistência à insulina (frequentemente com o cálculo do índice HOMA-IR).',
    referenceValues: [
      'Em jejum: Geralmente < 25 µUI/mL',
      'Índice HOMA-IR (para resistência): Idealmente < 2,5 (Pode variar conforme a etnia e população estudada)'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA) são os padrões modernos. Outra técnica menos comum atualmente, mas historicamente vital, é o Radioimunoensaio (RIA) - que rendeu um Prêmio Nobel a Rosalyn Yalow.',
    preparation: [
      'Jejum de 8 horas (ou conforme prescrição médica, caso seja feita curva insulinêmica).',
      'Aviso prévio se estiver fazendo uso de medicamentos hipoglicemiantes ou injetando insulina.'
    ],
    interactions: [
      'Corticoides: Causam resistência à insulina e podem elevar muito seus níveis como resposta compensatória do pâncreas.',
      'Anticoncepcionais Orais: Podem aumentar a resistência insulínica levemente.',
      'Betabloqueadores e Diuréticos Tiazídicos: Podem alterar a secreção de insulina pelo pâncreas.',
      'Medicamentos para o Diabetes (ex: Sulfonilureias como Glibenclamida): Estimulam o pâncreas a secretar mais insulina.'
    ],
    curiosities: [
      'Se você come muito açúcar regularmente, seu corpo exige tanta insulina que as células criam uma "resistência" (ficam surdas aos avisos dela). Isso força o pâncreas a trabalhar em dobro até falhar.',
      'A Insulina alta constante também funciona como um hormônio armazenador de gordura, impedindo que você queime a gordura abdominal não importa o quanto exercite ou coma pouco.'
    ]
  },
  {
    id: 'eas-urina',
    name: 'EAS (Exame de Urina Tipo 1)',
    category: 'Urinálise',
    synonyms: ['Urina Tipo 1', 'Urina de Rotina', 'Sumário de Urina', 'EAS'],
    components: ['Aspecto Físico (Cor, Densidade)', 'Pesquisa Química (pH, Glicose, Proteínas, Sangue)', 'Sedimentoscopia (Células, Cristais, Bactérias, Cilindros)'],
    related: ['Urocultura', 'Creatinina', 'Ureia'],
    shortDescription: 'Exame de rotina que analisa as propriedades físicas, químicas e o sedimento da urina.',
    purpose: 'Serve para identificar sinais de infecção urinária, doenças renais, sangramentos no trato urinário, presença de cálculos (cristais) e até mesmo descontrole do diabetes (glicose na urina).',
    referenceValues: [
      'Cor: Amarelo citrino',
      'pH: 5,0 a 8,0',
      'Densidade: 1.010 a 1.030',
      'Leucócitos: até 10.000/mL (ou até 5 por campo)',
      'Glicose, Proteínas, Nitrito, Sangue: Negativos'
    ],
    methodology: 'Geralmente realizado em três etapas: análise visual, uso de Tiras Reativas Químicas (dipstick) lidas por automação ou visualmente, e microscopia do sedimento urinário após centrifugação.',
    preparation: [
      'Não é obrigatório jejum.',
      'Coletar preferencialmente a primeira urina da manhã (mais concentrada).',
      'Desprezar o primeiro jato de urina e coletar o jato médio (para evitar contaminação da uretra).',
      'Mulheres devem preferencialmente não realizar o exame durante o período menstrual.'
    ],
    interactions: [
      'Vitamina C em altas doses: Pode mascarar a presença de sangue ou glicose na tira reativa (falso-negativo).',
      'Pyridium (Fenazopiridina): Medicamento para dor urinária que deixa a urina laranja fosforescente, inviabilizando a leitura química do exame.',
      'Antibióticos: Podem alterar a flora bacteriana observada no microscópio.'
    ],
    curiosities: [
      'O EAS é um dos exames médicos mais antigos da humanidade. Médicos na Idade Média usavam a "Roda das Urinas" para diagnosticar doenças apenas olhando a cor, o cheiro e até mesmo provando o gosto da urina.',
      'Urina turva nem sempre é infecção; muitas vezes é apenas a presença de cristais inofensivos devido à alimentação rica em certos vegetais.',
      'Se o teste de Nitrito der positivo no EAS, é um sinal clássico de que há bactérias vivas na bexiga transformando nitrato em nitrito (infecção).'
    ]
  },
  {
    id: 'urocultura',
    name: 'Urocultura (Cultura de Urina)',
    category: 'Microbiologia',
    synonyms: ['Cultura de Urina', 'Cultura de Jato Médio'],
    components: ['Isolamento Bacteriano', 'Antibiograma (Teste de Sensibilidade a Antibióticos)'],
    related: ['EAS (Exame de Urina Tipo 1)', 'Hemograma'],
    shortDescription: 'Exame que cultiva a urina em laboratório para identificar exatamente qual bactéria está causando a infecção urinária.',
    purpose: 'Detecta a presença de bactérias causadoras de infecção do trato urinário (ITU). Quando positivo, é seguido pelo Antibiograma, que diz exatamente qual antibiótico matará aquela bactéria específica.',
    referenceValues: [
      'Normal: Cultura Negativa (ausência de crescimento bacteriano)',
      'Positivo: Geralmente crescimento > 100.000 UFC/mL (Unidades Formadoras de Colônias)'
    ],
    methodology: 'Semeio da amostra de urina em meios de cultura sólidos (como Ágar CLED e MacConkey). As placas são incubadas em estufa por 24 a 48 horas. Se houver crescimento, a bactéria é identificada por painéis bioquímicos automatizados (ex: Vitek) ou Espectrometria de Massas (MALDI-TOF).',
    preparation: [
      'Ideal não estar em uso de antibióticos (ou informar ao laboratório).',
      'Higiene íntima rigorosa com água e sabão antes da coleta.',
      'Coletar exclusivamente o jato médio da urina.'
    ],
    interactions: [
      'Antibióticos em uso: Principal causa de falso-negativo. O remédio impede a bactéria de crescer na placa do laboratório, mesmo que ela ainda esteja na sua bexiga.',
      'Alta ingestão de líquidos antes do exame: Pode diluir a urina e dificultar o crescimento bacteriano.'
    ],
    curiosities: [
      'A bactéria *Escherichia coli*, que vive normalmente e em paz no nosso intestino, é a vilã causadora de cerca de 80 a 90% de todas as infecções urinárias no mundo.',
      'Um erro muito comum de coleta que contamina o exame é a urina escorrer pela pele ou pelos antes de cair no potinho.',
      'Graças ao Antibiograma feito junto com a Urocultura, os médicos conseguem evitar prescrever antibióticos superpotentes sem necessidade, combatendo a resistência bacteriana.'
    ]
  },
  {
    id: 'cultura-orofaringe',
    name: 'Cultura de Orofaringe (Swab)',
    category: 'Microbiologia',
    synonyms: ['Swab de Garganta', 'Cultura de Secreção de Orofaringe', 'Pesquisa de Estreptococo'],
    related: ['Hemograma', 'PCR'],
    shortDescription: 'Exame que utiliza um cotonete na garganta para identificar bactérias causadoras de faringite.',
    purpose: 'Diferencia uma dor de garganta causada por vírus (onde antibióticos não ajudam) de uma causada por bactérias (principalmente o *Streptococcus pyogenes*), que requer tratamento com antibiótico para evitar complicações no coração ou rins.',
    referenceValues: [
      'Normal: Flora bacteriana normal da orofaringe (Cultura Negativa para patógenos)',
      'Positivo: Presença de Streptococcus beta-hemolítico do grupo A (ou outros patógenos)'
    ],
    methodology: 'Coleta com swab flexível (cotonete longo) esfregado nas amígdalas e parede posterior da garganta. O material é cultivado em placa de Ágar Sangue e incubado. Existem também os Testes Rápidos Imunocromatográficos que dão o resultado em 15 minutos.',
    preparation: [
      'Estar em jejum de pelo menos 2 horas (para evitar vômitos com o reflexo do cotonete).',
      'Não escovar os dentes, não usar enxaguante bucal e não beber água imediatamente antes da coleta.',
      'Não estar usando antibióticos.'
    ],
    interactions: [
      'Enxaguantes bucais (Listerine, Cepacol): Possuem agentes antissépticos que podem matar a bactéria no swab, causando falso-negativo.',
      'Antibióticos recentes: Impedem o crescimento bacteriano no laboratório.'
    ],
    curiosities: [
      'Cerca de 70 a 80% de todas as dores de garganta são virais. Este exame evita que você tome Amoxicilina sem necessidade.',
      'A coleta geralmente causa ânsia de vômito porque o profissional precisa encostar o swab exatamente lá no fundo, onde a bactéria mora. Se encostar na língua ou nos dentes, o exame perde a validade.',
      'O *Streptococcus pyogenes*, se não tratado corretamente, pode confundir o sistema imune, fazendo-o atacar o próprio coração da pessoa, causando a Febre Reumática.'
    ]
  },
  {
    id: 'cultura-vaginal',
    name: 'Cultura de Secreção Vaginal',
    category: 'Microbiologia',
    synonyms: ['Swab Vaginal', 'Cultura de Conteúdo Vaginal', 'Cultura de Fundo de Saco', 'Exame Direto de Secreção Vaginal', 'Bacterioscopia Vaginal', 'Pesquisa a Fresco', 'Gardnerella sp', 'Ureaplasma sp', 'Trichomonas', 'Neisseria gonorrhoeae', 'Chlamydia sp', 'Candida sp'],
    components: ['Exame a Fresco (Microscopia)', 'Cultura para Bactérias', 'Cultura para Fungos (Leveduras)'],
    related: ['EAS (Exame de Urina Tipo 1)', 'VDRL (Sífilis)'],
    shortDescription: 'Analisa o corrimento ou flora vaginal para diagnosticar infecções por fungos ou bactérias.',
    purpose: 'Identifica microorganismos causadores de vaginites e vaginoses, como a *Candida albicans* (candidíase), *Trichomonas vaginalis* ou *Gardnerella vaginalis*.',
    referenceValues: [
      'Normal: Presença de flora normal (Lactobacillus spp.) e ausência de patógenos.'
    ],
    methodology: 'O fluido é coletado com um swab durante exame ginecológico. Parte vai para uma lâmina de vidro (avaliada a fresco no microscópio para ver se as bactérias estão "dançando" ou se há fungos) e parte vai para meios de cultura específicos.',
    preparation: [
      'Não estar menstruada.',
      'Abstinência sexual nas 48 a 72 horas anteriores.',
      'Não usar cremes, óvulos vaginais ou duchas higiênicas internas 48 horas antes da coleta.'
    ],
    interactions: [
      'Antifúngicos (ex: Fluconazol) e Antibióticos ginecológicos: Podem gerar resultados falso-negativos.',
      'Lubrificantes íntimos e Espermicidas: Podem ser tóxicos para as bactérias da cultura e alterar o resultado.'
    ],
    curiosities: [
      'O ambiente da vagina humana não é estéril; ele é povoado por bilhões de bactérias boas (Lactobacilos) que produzem ácido lático, mantendo o pH ácido e protegendo contra invasores.',
      'Muitos casos diagnosticados em casa pelas pacientes como "Candidíase" (fungo) são na verdade Vaginoses Bacterianas, que requerem remédios completamente diferentes. Daí a importância da cultura.',
      'O famoso teste do "Cheiro" (Teste das Aminas) pode ser feito na hora; o biomédico pinga hidróxido de potássio na lâmina e se subir um cheiro de peixe podre, indica vaginose bacteriana.'
    ]
  },
  {
    id: 'baar',
    name: 'Pesquisa de BAAR (Escarro)',
    category: 'Microbiologia',
    synonyms: ['Baciloscopia do Escarro', 'Pesquisa de Bacilo de Koch', 'Pesquisa de Tuberculose', 'Pesquisa de BK', 'BK'],
    related: ['PCR para Tuberculose', 'Cultura de Lavado Bronco-Alveolar'],
    shortDescription: 'Exame de escarro principal para diagnosticar a Tuberculose pulmonar.',
    purpose: 'A sigla BAAR significa "Bacilo Alcool-Ácido Resistente". O exame busca no escarro do paciente a presença do *Mycobacterium tuberculosis* (Bacilo de Koch), a bactéria causadora da Tuberculose.',
    referenceValues: [
      'Normal: Negativo (Ausência de BAAR nas amostras)'
    ],
    methodology: 'O paciente tosse profundamente e expectora muco em um pote. No laboratório, a amostra sofre a Coloração de Ziehl-Neelsen e é vista no microscópio. As bactérias BAAR ficam com uma cor vermelha/rosa brilhante contra um fundo azul.',
    preparation: [
      'Geralmente são colhidas 2 a 3 amostras em dias seguidos.',
      'A melhor amostra é sempre a primeira da manhã.',
      'Lavar a boca apenas com água antes de tossir. Cuidado para não cuspir apenas "saliva", é necessário forçar a tosse para trazer o muco (catarro) do pulmão.'
    ],
    interactions: [
      'Antibióticos já iniciados para tuberculose: Podem tornar a baciloscopia negativa muito rapidamente, dificultando o diagnóstico se o remédio foi tomado por conta própria.'
    ],
    curiosities: [
      'A tuberculose ainda é uma das doenças infecciosas que mais matam no mundo. O Bacilo de Koch foi descoberto em 1882.',
      'As bactérias BAAR têm uma armadura de cera incrivelmente resistente em sua parede celular, o que as protege do sistema imune e faz com que os antibióticos comuns não funcionem nelas.',
      'A coloração que revela o bacilo no microscópio exige a aplicação de fogo (aquecimento na chama) para derreter a armadura de cera e permitir que o corante vermelho entre na bactéria.'
    ]
  },
  {
    id: 'lavado-bronquico',
    name: 'Cultura de Lavado Bronco-Alveolar',
    category: 'Microbiologia',
    synonyms: ['LBA', 'Cultura de Líquido Pulmonar'],
    components: ['Cultura para Bactérias', 'Cultura para Fungos', 'Pesquisa de BAAR', 'Análise Citológica'],
    related: ['Hemograma', 'PCR', 'BAAR'],
    shortDescription: 'Cultura de um líquido injetado e sugado dos pulmões, para pneumonias graves.',
    purpose: 'É o padrão-ouro para o diagnóstico de infecções pulmonares graves ou pneumonias misteriosas em pacientes internados ou na UTI, onde o escarro simples não traz respostas.',
    referenceValues: [
      'Crescimento negativo ou quantitativo abaixo de 10.000 UFC/mL (dependendo da técnica de coleta).'
    ],
    methodology: 'Durante uma broncoscopia, o médico desce uma mangueira até o pulmão do paciente, esguicha um soro estéril lavando os alvéolos, e suga o líquido de volta. Esse líquido turvo é enviado ao laboratório para dezenas de culturas.',
    preparation: [
      'Exame invasivo feito em ambiente hospitalar. Requer jejum absoluto de 8 a 12 horas e sedação.'
    ],
    interactions: [
      'Antibioticoterapia prévia venosa: Assim como em qualquer cultura, reduz imensamente a chance de a bactéria crescer in vitro.'
    ],
    curiosities: [
      'O LBA é como "lavar o interior dos pulmões" para resgatar os criminosos (bactérias) que se esconderam no fundo dos brônquios.',
      'Esse exame é crucial para pacientes com HIV/AIDS, pois permite descobrir infecções oportunistas por fungos e parasitas pulmonares, como o *Pneumocystis jirovecii*, que exames comuns não acham.'
    ]
  },
  {
    id: 'vdrl',
    name: 'VDRL (Sífilis)',
    category: 'Sorologia',
    synonyms: ['Sorologia para Sífilis', 'RPR', 'Lues'],
    related: ['Hemograma', 'Sorologia para HIV'],
    shortDescription: 'Exame de sangue clássico e principal teste de triagem para o diagnóstico da Sífilis.',
    purpose: 'O VDRL (Venereal Disease Research Laboratory) rastreia a infecção ativa por sífilis (*Treponema pallidum*) e é usado para monitorar se o tratamento com penicilina está funcionando, observando a queda dos "títulos".',
    referenceValues: [
      'Não Reagente (Negativo)',
      'Se Reagente, o resultado sai em títulos (ex: 1:2, 1:8, 1:64). Quanto maior o número, mais reagente.'
    ],
    methodology: 'Método de Floculação. É um teste "Não Treponêmico", que detecta anticorpos contra lipídios liberados pelas células humanas danificadas pela bactéria. Hoje, frequentemente associado a testes confirmatórios (Treponêmicos) como FTA-ABS ou CLIA.',
    preparation: [
      'Jejum não é obrigatório.',
      'Bebidas alcoólicas devem ser evitadas na véspera.'
    ],
    interactions: [
      'Gravidez, Lúpus, Malária e Hanseníase: O VDRL é notório por gerar falsos-positivos nessas situações devido a reações imunes cruzadas do corpo.',
      'Tratamento recente: Após o uso de Benzetacil (Penicilina), os títulos do VDRL demoram meses para cair. O médico não usa o VDRL de 1 mês depois para dizer que "a doença voltou".'
    ],
    curiosities: [
      'O VDRL é um teste tão antigo que sua lógica foi desenvolvida na época da Primeira Guerra Mundial, e continua sendo barato e eficaz.',
      'A Sífilis é chamada de "A Grande Imitadora" porque suas lesões podem parecer com alergias, psoríase ou herpes, enganando muitos médicos até que o VDRL revele a verdade.',
      'Em estágios avançadíssimos de sífilis neurológica, o VDRL pode ser colhido do Líquor da espinha (LCR) e não do sangue.'
    ]
  },
  {
    id: 'hiv',
    name: 'Sorologia para HIV',
    category: 'Sorologia',
    synonyms: ['Anti-HIV 1 e 2', 'Anti HIV 1 e 2', 'Anticorpos Anti HIV-1 e Anti HIV-2', 'HIV 1/2 - Anticorpos', 'Teste de Quarta Geração HIV', 'Sorologia HIV'],
    related: ['VDRL', 'Hepatite B', 'Hepatite C'],
    shortDescription: 'Detecta a infecção pelo vírus da AIDS no sangue do paciente.',
    purpose: 'Identifica a presença de anticorpos contra o vírus da Imunodeficiência Humana (HIV) tipos 1 e 2, e, nos testes mais modernos, identifica também o próprio vírus (Antígeno P24) nas fases precoces da infecção.',
    referenceValues: [
      'Não Reagente (Negativo)',
      'Qualquer resultado "Reagente" exige uma segunda amostra e testes confirmatórios (como Western Blot ou Carga Viral).'
    ],
    methodology: 'A maioria dos laboratórios utiliza Ensaios Quimioluminescentes (ECLIA) de 4ª Geração, que procuram tanto Anticorpos IgG/IgM quanto a proteína viral P24. Existem também os Testes Rápidos Imunocromatográficos.',
    preparation: [
      'Não exige jejum.'
    ],
    interactions: [
      'Período de Janela Imunológica: Se o exame for feito cedo demais (antes de 15 a 30 dias após o risco), o vírus pode estar lá, mas o corpo não gerou anticorpos suficientes e o teste falha (falso-negativo).',
      'Vacinas recentes contra Gripe (raro): Já houve relatos de falsos-positivos cruzados dependendo da sensibilidade do teste em metodologias muito antigas.'
    ],
    curiosities: [
      'O Teste de 4ª Geração reduziu a Janela Imunológica de 3 meses (nos anos 90) para apenas 15 a 20 dias, permitindo diagnóstico muito mais cedo porque detecta o P24, que é a cápsula física do vírus.',
      'Laboratórios não podem, por lei e rigor científico, liberar um laudo definitivo de "Positivo para HIV" com apenas um teste simples. Uma rotina de testagem em cascata é obrigatória para evitar sustos infundados.',
      'Pessoas em tratamento com os antirretrovirais modernos tornam-se "Indetectáveis". Elas ainda dão positivo no Anti-HIV, mas a quantidade de vírus é tão irrisória que não transmitem a doença.'
    ]
  },
  {
    id: 'dengue-sorologia',
    name: 'Sorologia para Dengue',
    category: 'Sorologia',
    synonyms: ['Antígeno NS1', 'Dengue IgG e IgM', 'Teste Rápido Dengue'],
    components: ['Antígeno NS1', 'Anticorpos IgM', 'Anticorpos IgG'],
    related: ['Hemograma', 'TGO', 'TGP'],
    shortDescription: 'Painel de testes para diagnosticar a febre da Dengue na fase aguda ou tardia.',
    purpose: 'Dependendo do dia de febre do paciente, usa-se o NS1 (para achar o vírus nos primeiros 4 dias) ou o IgM e IgG (para achar a resposta imune após o 6º dia de doença).',
    referenceValues: [
      'Normal: Não Reagente para NS1, IgM e IgG.'
    ],
    methodology: 'Testes Rápidos Imunocromatográficos ou ELISA para detecção em soro.',
    preparation: [
      'Sem exigência de jejum.'
    ],
    interactions: [
      'Zika e Chikungunya: Sendo da mesma família de vírus (Flavivírus), a sorologia IgG e IgM para Dengue frequentemente dá reação cruzada (falso-positivo) se a pessoa teve Zika recentemente.'
    ],
    curiosities: [
      'Saber os dias da febre é mais importante que o exame em si: se você tem febre há 1 dia e pede IgM, dará negativo. Se tem febre há 10 dias e pede NS1, dará negativo.',
      'O "IgM" mostra a infecção atual ou recente (M de "Momento"), enquanto o "IgG" é a cicatriz imunológica, mostrando que você já teve dengue no passado (G de "Guardado").',
      'O Hemograma é o exame "irmão" mais importante na Dengue, não para achar o vírus, mas para observar as Plaquetas. Se elas despencarem, é sinal de risco de hemorragia.'
    ]
  },
  {
    id: 'epf',
    name: 'Exame Parasitológico de Fezes (EPF)',
    category: 'Parasitologia',
    synonyms: ['Exame de Fezes', 'EPF', 'Pesquisa de Ovos e Cistos'],
    related: ['Sangue Oculto', 'Hemograma'],
    shortDescription: 'Avalia a presença de vermes e parasitas intestinais nas fezes.',
    purpose: 'Utilizado para investigar queixas de diarreia crônica, dores abdominais e desnutrição. O biomédico pesquisa ao microscópio os cistos de protozoários (como Giardia) e os ovos de helmintos (como Lombriga).',
    referenceValues: [
      'Normal: Negativo para Cistos de Protozoários e Ovos de Helmintos.'
    ],
    methodology: 'Técnicas de concentração fecal como Hoffman-Pons-Janer (Sedimentação Espontânea) e Kato-Katz. O material é preparado e as lâminas lidas pacientemente em microscópio óptico.',
    preparation: [
      'Não é necessário jejum.',
      'A amostra não deve ser misturada com urina nem retirada do vaso sanitário.',
      'Cuidar com o uso de laxantes à base de óleo ou supositórios, que estragam a visualização no microscópio.'
    ],
    interactions: [
      'Anti-helmínticos recentes (ex: Albendazol, Annita): Vão limpar os parasitas das fezes, resultando em negativo.',
      'Contraste radiológico de Bário: Se o paciente fez raio-X com bário na última semana, o bário esconde tudo no microscópio.'
    ],
    curiosities: [
      'Por que os médicos pedem a coleta de 3 amostras em dias alternados? Porque os parasitas soltam os cistos e ovos em "ciclos". Num dia pode sair vazio, e dois dias depois sair cheio de vermes!',
      'Um dos vermes mais encontrados em crianças (*Enterobius*) raramente sai no potinho de fezes; ele põe ovos de madrugada na região perianal da criança. O melhor exame para ele é a técnica da Fita Adesiva colada no bumbum da criança de manhã (Método de Graham).',
      'Alguns ovos de vermes são extremamente complexos e bonitos visualmente no microscópio, assemelhando-se a grãos de café ou limões.'
    ]
  },
  {
    id: 'sangue-oculto',
    name: 'Pesquisa de Sangue Oculto nas Fezes',
    category: 'Parasitologia',
    synonyms: ['PSOF', 'Sangue nas Fezes'],
    related: ['Hemograma', 'EPF'],
    shortDescription: 'Procura rastros invisíveis de sangue nas fezes, essencial na prevenção do câncer de cólon.',
    purpose: 'Serve como um excelente e barato exame de triagem para pólipos intestinais, úlceras sangrantes e câncer colorretal. É frequentemente pedido para adultos acima de 50 anos ou pacientes com anemia sem causa aparente.',
    referenceValues: [
      'Normal: Negativo (Ausência de hemoglobina humana fecal)'
    ],
    methodology: 'O método moderno, que não requer dieta chata, é o Imunoquímico (FIT), que usa anticorpos para achar hemoglobina humana. O método antigo era o Químico (Guaiaco), que mudava de cor e exigia dieta prévia.',
    preparation: [
      'Se o método do laboratório for o Imunoquímico: não precisa de dieta!',
      'Avisar sobre sangramentos visíveis, hemorroidas ativas ou menstruação (isso invalida o exame, pois o sangue já não é "oculto").'
    ],
    interactions: [
      'No método antigo (Guaiaco): Comer carne vermelha, rabanete, nabo e Vitamina C antes do exame gerava muito falso-positivo e falso-negativo.',
      'Anti-inflamatórios e Aspirina: Podem causar pequenas irritações no estômago, liberando sangue oculto e positivando o teste.'
    ],
    curiosities: [
      'A popularização global desse exame barato salvou milhares de vidas ao detectar câncer colorretal em estágio perfeitamente curável.'
    ]
  },
  {
    id: 'testosterona-total',
    name: 'Testosterona Total',
    category: 'Hormônios',
    synonyms: ['Testosterona Sérica', 'Hormônio Masculino'],
    related: ['Testosterona Livre', 'SHBG', 'FSH', 'LH'],
    shortDescription: 'Mede o nível total do principal hormônio sexual masculino no sangue.',
    purpose: 'Avalia a função gonadal, puberdade precoce ou tardia, impotência, infertilidade, e investigar a síndrome dos ovários policísticos (SOP) e hirsutismo em mulheres.',
    referenceValues: [
      'Homens: 300 a 1000 ng/dL',
      'Mulheres: 15 a 70 ng/dL'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA). Espectrometria de massas (LC-MS/MS) é o padrão ouro, especialmente para níveis baixos em mulheres e crianças.',
    preparation: [
      'A coleta DEVE ser realizada obrigatoriamente pela manhã (preferencialmente até as 9h), pois a testosterona tem um pico matinal.',
      'Jejum não é obrigatório para a dosagem isolada.'
    ],
    interactions: [
      'Corticoides e Opióides: Reduzem os níveis de testosterona.',
      'Anticoncepcionais: Podem aumentar a proteína SHBG, alterando a fração de testosterona livre.'
    ],
    curiosities: [
      'Embora seja o "hormônio masculino", as mulheres também o produzem (nos ovários e nas glândulas adrenais) e ele é crucial para a libido feminina.',
      'Os níveis de testosterona caem naturalmente com a idade, um processo às vezes chamado de "Andropausa".'
    ]
  },
  {
    id: 'testosterona-livre',
    name: 'Testosterona Livre',
    category: 'Hormônios',
    synonyms: ['Testosterona Biodisponível', 'Fração Livre'],
    related: ['Testosterona Total', 'SHBG'],
    shortDescription: 'Mede a porção de testosterona que está circulando solta no sangue e pronta para ser usada pelo corpo.',
    purpose: 'Como a maior parte da testosterona está presa à proteína SHBG e não consegue entrar nas células, a Testosterona Livre é o exame que mostra a real quantidade de hormônio ativo e disponível para atuar nos músculos, cérebro e órgãos genitais.',
    referenceValues: [
      'Homens: 3,0 a 15,0 ng/dL (ou 30 a 150 pg/mL)',
      'Mulheres: 0,1 a 1,0 ng/dL (ou 1,0 a 10,0 pg/mL)'
    ],
    methodology: 'Frequentemente CALCULADA através de uma fórmula que utiliza a Testosterona Total e o SHBG. Métodos de dosagem direta existem, mas o cálculo ou o Equilíbrio de Diálise são os padrões-ouro.',
    preparation: [
      'Coleta recomendada pela manhã (entre 7h e 9h).',
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'Medicamentos para hipotireoidismo ou uso de anticoncepcionais alteram a SHBG, mudando o resultado da testosterona livre.'
    ],
    curiosities: [
      'Apenas cerca de 2% de toda a sua Testosterona é "Livre". O resto está amarrado viajando pelo sangue como num táxi (as proteínas carreadoras).',
      'Muitos homens com sintomas de baixa testosterona possuem a "Total" normal, mas a "Livre" extremamente baixa.'
    ]
  },
  {
    id: 'prolactina',
    name: 'Prolactina',
    category: 'Hormônios',
    synonyms: ['Hormônio do Leite', 'PRL'],
    related: ['TSH', 'FSH', 'LH'],
    shortDescription: 'Hormônio responsável por estimular a produção de leite pelas glândulas mamárias.',
    purpose: 'Investigar causas de infertilidade, ausência de menstruação (amenorreia), saída de leite das mamas fora da gravidez (galactorreia), impotência sexual nos homens e suspeita de tumores na hipófise.',
    referenceValues: [
      'Homens: 2,0 a 15,0 ng/mL',
      'Mulheres não grávidas: 3,0 a 25,0 ng/mL'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA). Em casos de níveis muito altos sem sintomas, pesquisa-se a "Macroprolactina" (uma versão inativa do hormônio).',
    preparation: [
      'Jejum não é obrigatório.',
      'Descansar de 15 a 30 minutos na sala de espera do laboratório antes da coleta.',
      'Evitar estímulo nas mamas e exercícios intensos na véspera.'
    ],
    interactions: [
      'Antidepressivos e Antipsicóticos: São campeões absolutos em causar picos gigantes de prolactina, causando saída de leite mesmo em homens.',
      'Remédios para enjoo (como Plasil/Metoclopramida) elevam muito a prolactina.'
    ],
    curiosities: [
      'A prolactina é um hormônio do estresse. Por isso, a ansiedade de estar no laboratório pode falsamente alterar o exame – daí a recomendação de "descansar" antes de furar o braço.',
      'Nas mulheres que estão amamentando, a sucção do bebê causa descargas diretas de prolactina que bloqueiam a ovulação, funcionando como um "anticoncepcional natural" nos primeiros meses.'
    ]
  },
  {
    id: 'cortisol',
    name: 'Cortisol',
    category: 'Hormônios',
    synonyms: ['Hormônio do Estresse', 'Cortisol Basal'],
    related: ['ACTH', 'Glicemia'],
    shortDescription: 'O hormônio do estresse crônico, vital para manter a pressão arterial e a glicose em jejum.',
    purpose: 'Diagnóstico da Síndrome de Cushing (excesso crônico de cortisol) e da Doença de Addison (falta crônica do hormônio), além de avaliar a resposta do corpo a estresses severos.',
    referenceValues: [
      'Manhã (8h): 5,0 a 25,0 µg/dL',
      'Tarde (16h): Cerca de metade do valor da manhã.'
    ],
    methodology: 'Quimioluminescência (CLIA). Pode ser medido no sangue, na urina de 24 horas ou na saliva (Cortisol Salivar é excelente para ver o ritmo do hormônio à noite).',
    preparation: [
      'A hora da coleta é essencial: médicos costumam pedir às 8h da manhã em ponto.',
      'Jejum de 4 a 8 horas.',
      'Evitar atividades estressantes na véspera.'
    ],
    interactions: [
      'Uso de Corticoides (pomadas, bombinhas de asma ou comprimidos): Podem atrofiar a glândula adrenal e zerar o seu cortisol endógeno (natural).',
      'Anticoncepcionais orais aumentam a proteína que carrega o cortisol no sangue, causando falsos níveis altos.'
    ],
    curiosities: [
      'O Cortisol tem um "relógio" próprio (Ciclo Circadiano): ele é mais alto logo que acordamos (para nos dar energia e subir a pressão) e cai no fim do dia (para podermos dormir).',
      'Ele não é "do mal". Sem o aumento do Cortisol pela manhã, você não teria energia nem para levantar da cama. O problema é quando ele se mantém alto o dia todo devido a preocupações ou má alimentação.'
    ]
  },
  {
    id: 'fsh',
    name: 'FSH (Hormônio Folículo-Estimulante)',
    category: 'Hormônios',
    synonyms: ['Folitropina', 'Hormônio Estimulador do Folículo'],
    related: ['LH', 'Estradiol', 'Testosterona Total'],
    shortDescription: 'Regula o desenvolvimento das células reprodutivas (óvulos e espermatozoides).',
    purpose: 'Usado para avaliar o estoque de óvulos (reserva ovariana), investigar menopausa, infertilidade masculina e feminina, e disfunções na glândula hipófise.',
    referenceValues: [
      'Mulheres: Varia imensamente conforme a fase do ciclo menstrual (Fase folicular, pico ovulatório ou lútea). Na menopausa, os valores explodem para mais de 25 mUI/mL.',
      'Homens: 1,5 a 12,4 mUI/mL'
    ],
    methodology: 'Imunoensaio por Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA).',
    preparation: [
      'O dia do ciclo menstrual da mulher é CRUCIAL. Geralmente é colhido no 3º dia da menstruação, a pedido médico.'
    ],
    interactions: [
      'Pílulas Anticoncepcionais: Mantêm o FSH artificialmente baixo e suprimido, impedindo que o corpo ovule.'
    ],
    curiosities: [
      'Quando o ovário de uma mulher envelhece e os óvulos acabam, o cérebro entra em "desespero" e produz quantidades colossais de FSH para tentar fazer o ovário trabalhar. É assim que o laboratório confirma a menopausa (FSH nas alturas!).',
      'No homem, o FSH desce até os testículos para estimular diretamente a fábrica de espermatozoides (Espermatogênese).'
    ]
  },
  {
    id: 'lh',
    name: 'LH (Hormônio Luteinizante)',
    category: 'Hormônios',
    synonyms: ['Lutropina'],
    related: ['FSH', 'Progesterona', 'Testosterona Total'],
    shortDescription: 'Hormônio responsável por disparar a ovulação na mulher e a produção de testosterona no homem.',
    purpose: 'Trabalha em conjunto com o FSH para controlar a fertilidade. Na mulher, o pico de LH é o que rompe o folículo e libera o óvulo. No homem, ele manda os testículos produzirem testosterona.',
    referenceValues: [
      'Varia conforme a fase do ciclo menstrual feminino.',
      'Pico ovulatório: > 14 mUI/mL'
    ],
    methodology: 'Quimioluminescência (CLIA).',
    preparation: [
      'Anotar o dia do ciclo menstrual. Pode ser requerido jejum de 4 horas.'
    ],
    interactions: [
      'Uso de Testosterona Injetável (anabolizantes): O cérebro do homem percebe a testosterona alta e desliga a fábrica, zerando os níveis de LH (e consequentemente atrofiando os testículos).'
    ],
    curiosities: [
      'Os testes de ovulação de farmácia (aqueles que a mulher faz xixi na fita para saber o dia fértil) procuram exatamente o pico de LH na urina.',
      'Na Síndrome dos Ovários Policísticos (SOP), a proporção entre LH e FSH frequentemente se inverte, com o LH ficando muito mais alto do que deveria no início do ciclo.'
    ]
  },
  {
    id: 'estradiol',
    name: 'Estradiol (E2)',
    category: 'Hormônios',
    synonyms: ['Estrogênio', '17-Beta Estradiol'],
    related: ['FSH', 'LH', 'Progesterona'],
    shortDescription: 'A forma mais potente do principal hormônio feminino, o Estrogênio.',
    purpose: 'Monitorar o funcionamento dos ovários, tratamentos de fertilização in vitro, confirmar a menopausa e avaliar ginecomastia (crescimento de mamas) em homens.',
    referenceValues: [
      'Varia drasticamente na mulher conforme o ciclo. Na menopausa, os valores caem para < 30 pg/mL.',
      'Homens: 10 a 40 pg/mL'
    ],
    methodology: 'Quimioluminescência (CLIA).',
    preparation: [
      'Jejum não é obrigatório.',
      'Saber a data da última menstruação.'
    ],
    interactions: [
      'Terapia de Reposição Hormonal (adesivos, géis ou pílulas) aumenta os níveis diretamente.',
      'Anticoncepcionais orais alteram totalmente a produção natural.'
    ],
    curiosities: [
      'Além das características sexuais femininas, o Estradiol é o escudo protetor da mulher contra o infarto e a osteoporose. Quando ele zera na menopausa, a mulher perde essa proteção mágica.',
      'Em homens obesos, a gordura da barriga possui uma enzima (aromatase) que converte a testosterona em estradiol. O resultado? O homem engorda, perde a libido e desenvolve mamas (ginecomastia).'
    ]
  },
  {
    id: 'progesterona',
    name: 'Progesterona',
    category: 'Hormônios',
    synonyms: ['Hormônio da Gravidez', 'P4'],
    related: ['Estradiol', 'Beta-hCG'],
    shortDescription: 'Hormônio focado em preparar e manter o útero para receber um bebê.',
    purpose: 'Confirmar se a mulher realmente ovulou naquele mês e investigar problemas em manter o início da gravidez (risco de aborto).',
    referenceValues: [
      'Fase folicular (antes de ovular): < 1,0 ng/mL',
      'Fase lútea (após ovular): > 5,0 ng/mL (indica ovulação confirmada)',
      'Gravidez: Valores aumentam drasticamente (> 40 ng/mL)'
    ],
    methodology: 'Quimioluminescência (CLIA).',
    preparation: [
      'Médicos pedem quase sempre para colher exatamente no 21º dia do ciclo menstrual (fase lútea) para comprovar a ovulação.'
    ],
    interactions: [
      'Uso de óvulos de progesterona vaginal (muito usados em fertilização in vitro) altera brutalmente o nível no sangue.'
    ],
    curiosities: [
      'A palavra vem do latim "Pro" (a favor) e "Gesta" (gestação). É a "Hormona pró-gestação".',
      'A queda brusca de progesterona no final do ciclo menstrual é o botão que liga a menstruação e também o gatilho clássico para a TPM (Tensão Pré-Menstrual).'
    ]
  },
  {
    id: 't4-livre',
    name: 'T4 Livre (Tiroxina Livre)',
    category: 'Hormônios',
    synonyms: ['Tiroxina Livre', 'Hormônio da Tireoide', 'FT4'],
    related: ['TSH', 'T3 Total'],
    shortDescription: 'A forma circulante e não ligada a proteínas do hormônio produzido pela tireoide.',
    purpose: 'Sempre testado em dupla com o TSH, serve para diagnosticar distúrbios da glândula tireoide (hipotireoidismo e hipertireoidismo). O T4 é a "gasolina" do metabolismo celular.',
    referenceValues: [
      'Adultos: 0,9 a 1,7 ng/dL'
    ],
    methodology: 'Imunoensaio Quimioluminescente (CLIA).',
    preparation: [
      'Jejum não é obrigatório.',
      'Se o paciente toma remédio de tireoide (Puran T4, Synthroid, Levoid), deve colher o sangue de manhã ANTES de tomar o remédio (ou seja, tome o comprimido só DEPOIS de tirar o sangue).'
    ],
    interactions: [
      'Amiodarona e Lítio: Alteram a secreção e conversão do hormônio.',
      'Biotina (Vitamina B7): Suplementos de biotina causam interferência no maquinário do laboratório, dando resultados falsos. Suspender 72 horas antes.'
    ],
    curiosities: [
      'O "4" no nome T4 significa que há exatamente 4 átomos de Iodo acoplados a ele. Sem iodo na dieta (no sal de cozinha, por exemplo), a tireoide não tem a matéria prima para montar o hormônio.',
      'Apesar de ser o principal hormônio produzido, o T4 precisa entrar nas células e perder um átomo de iodo para se transformar no "T3", que é quem realmente faz o trabalho nas células.'
    ]
  },
  {
    id: 'sodio',
    name: 'Sódio (Na+)',
    category: 'Íons e Eletrólitos',
    synonyms: ['Sódio Sérico', 'Sódio no Sangue', 'Na+'],
    related: ['Potássio', 'Ureia', 'Creatinina'],
    shortDescription: 'Mede o nível do eletrólito mais importante para o controle da água no corpo.',
    purpose: 'Vital para manter a pressão arterial, volume de sangue e o envio de impulsos nervosos no cérebro. Níveis baixos (hiponatremia) podem causar confusão mental, e altos (hipernatremia) indicam desidratação severa.',
    referenceValues: [
      'Normal: 135 a 145 mEq/L'
    ],
    methodology: 'Eletrodo Íon Seletivo (ISE) em analisadores automatizados.',
    preparation: [
      'Não exige jejum.'
    ],
    interactions: [
      'Diuréticos e inibidores da ECA: Perda acentuada de sódio na urina (causa muito comum em idosos internados).'
    ],
    curiosities: [
      'O corpo humano protege seu nível de sódio com uma precisão matemática absurda, controlando exatamente quanta água entra e quanta água sai.',
      'Beber quantidades colossais de água em pouco tempo dilui o sódio no sangue e o cérebro pode literalmente inchar de água (edema cerebral), uma condição que já matou atletas em maratonas.'
    ]
  },
  {
    id: 'potassio',
    name: 'Potássio (K+)',
    category: 'Íons e Eletrólitos',
    synonyms: ['Potássio Sérico', 'K+', 'Kalemia'],
    related: ['Sódio', 'Magnésio', 'Cálcio'],
    shortDescription: 'Mineral vital escondido dentro das células e responsável pelos batimentos do coração.',
    purpose: 'Avaliá-lo é uma questão de vida ou morte em pacientes na UTI ou renais. O Potássio controla as correntes elétricas que fazem o músculo do coração contrair e relaxar ritmicamente.',
    referenceValues: [
      'Normal: 3,5 a 5,1 mEq/L'
    ],
    methodology: 'Eletrodo Íon Seletivo (ISE).',
    preparation: [
      'Jejum não é necessário.',
      'A amostra NUNCA deve demorar a chegar ao laboratório.'
    ],
    interactions: [
      'Diuréticos como a Furosemida (Lasix): Causam perda severa de potássio na urina.',
      'Remédios de pressão da classe dos "Sartanas" (Losartana): Podem segurar o potássio, elevando seus níveis.'
    ],
    curiosities: [
      'Mais de 98% de todo o seu potássio vive ESCONDIDO dentro das células. O sangue em si tem muito pouco. Se as hemácias explodirem no tubo de coleta (Hemólise), elas vazam potássio e o exame dá um falso-alto gigantesco e assustador.',
      'Uma pequena flutuação no potássio do sangue pode causar arritmias fatais e paradas cardíacas, sendo o mineral mais perigoso de se manipular.'
    ]
  },
  {
    id: 'calcio',
    name: 'Cálcio (Total e Iônico)',
    category: 'Íons e Eletrólitos',
    synonyms: ['Cálcio Sérico', 'Ca++', 'Cálcio Livre'],
    related: ['Vitamina D', 'PTH (Paratormônio)', 'Fósforo', 'Albumina'],
    shortDescription: 'O mineral mais abundante do corpo, responsável pelos ossos e contração muscular.',
    purpose: 'Investigar fraqueza óssea, pedras nos rins, câncer, convulsões e o funcionamento das glândulas paratireoides.',
    referenceValues: [
      'Cálcio Total: 8,6 a 10,2 mg/dL',
      'Cálcio Iônico (Livre): 4,6 a 5,3 mg/dL'
    ],
    methodology: 'Colorimétrico (O-cresolftaleína ou Arsenazo) para o Total. Eletrodo Íon Seletivo (ISE) em gasômetros para o Iônico.',
    preparation: [
      'Jejum de 4 horas recomendado.'
    ],
    interactions: [
      'Tiazídicos (Diuréticos): Aumentam o cálcio no sangue porque impedem ele de sair na urina.',
      'Bisfosfonatos (remédios para osteoporose): Reduzem ativamente o cálcio do sangue, puxando-o para os ossos.'
    ],
    curiosities: [
      'O osso é o "banco" de cálcio do corpo. Se o sangue ficar pobre em cálcio, o corpo dissolve o próprio osso (osteoporose) e saca o mineral do "banco" só para garantir que os batimentos do coração não parem.',
      'O "Cálcio Iônico" é a fração livre e verdadeira que não está grudada em proteínas (Albumina) e é a única forma que as células realmente usam.'
    ]
  },
  {
    id: 'magnesio',
    name: 'Magnésio',
    category: 'Íons e Eletrólitos',
    synonyms: ['Magnésio Sérico', 'Magnesemia', 'Mg'],
    related: ['Cálcio', 'Potássio', 'Fósforo'],
    shortDescription: 'Mineral envolvido em mais de 300 reações enzimáticas do nosso corpo.',
    purpose: 'Usado para avaliar confusão mental, fraqueza severa, cãibras, arritmias cardíacas e em alcoólatras, que sofrem de deficiência crônica de magnésio.',
    referenceValues: [
      'Normal: 1,6 a 2,6 mg/dL'
    ],
    methodology: 'Método Colorimétrico Magon/Xilidil Blue.',
    preparation: [
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'Omeprazol (inibidores de bomba de prótons) tomado por anos pode causar falta de magnésio brutal.'
    ],
    curiosities: [
      'Sabe quando as pálpebras dos olhos ficam tremendo sozinhas, ou os músculos pulando? Muitas vezes é deficiência de Magnésio e Potássio no sangue.',
      'No laboratório, é impossível descobrir a sua real "reserva de magnésio" apenas tirando o sangue, porque mais de 99% do magnésio vive grudado dentro dos ossos e células.'
    ]
  },
  {
    id: 'bilirrubinas',
    name: 'Bilirrubinas (Total, Direta e Indireta)',
    category: 'Bioquímica Hepática',
    synonyms: ['Bilirrubina Total e Frações', 'Exame de Icterícia', 'Bilirrubinemia'],
    related: ['TGO', 'TGP', 'Fosfatase Alcalina', 'Gama GT'],
    shortDescription: 'Mede o pigmento amarelo resultante da reciclagem do sangue velho pelo fígado.',
    purpose: 'Diagnóstico de doenças do fígado (hepatites, cirrose), bloqueio dos ductos biliares (pedras na vesícula) ou destruição rápida dos glóbulos vermelhos (anemia hemolítica).',
    referenceValues: [
      'Bilirrubina Total: até 1,2 mg/dL',
      'Bilirrubina Direta (Conjugada): até 0,3 mg/dL',
      'Bilirrubina Indireta (Não Conjugada): até 0,9 mg/dL'
    ],
    methodology: 'Método Colorimétrico (Sims-Horn, Jendrassik-Grof ou DPD).',
    preparation: [
      'Jejum não é obrigatório para a dosagem simples.',
      'A amostra deve ser protegida da luz (o tubo é frequentemente embrulhado em alumínio).'
    ],
    interactions: [
      'Luz artificial e do Sol: A bilirrubina é DESTRUÍDA pela luz. Se o tubo ficar em cima da bancada no claro, o exame dará um falso-negativo imenso.'
    ],
    curiosities: [
      'A Bilirrubina é o pigmento amarelo que deixa os olhos e a pele amarelos (icterícia) em pessoas com problemas no fígado.',
      'Bebês recém-nascidos ficam amarelados porque seu fígado ainda é muito "lento" para processar a bilirrubina indireta. Eles vão para um banho de "luz azul" na UTI neonatal justamente porque a luz destrói a molécula de bilirrubina direto na pele!'
    ]
  },
  {
    id: 'fosfatase-alcalina',
    name: 'Fosfatase Alcalina (FA)',
    category: 'Bioquímica Hepática',
    synonyms: ['FA', 'ALP'],
    related: ['Gama GT', 'TGO', 'TGP', 'Cálcio', 'Vitamina D'],
    shortDescription: 'Enzima concentrada nos dutos do fígado/vesícula e também nos ossos.',
    purpose: 'A FA é crucial para identificar dois tipos de doenças independentes: problemas no canal da bile (como entupimento por pedras na vesícula) ou problemas ósseos (crescimento do osso, tumores, Doença de Paget).',
    referenceValues: [
      'Adultos: 40 a 129 U/L',
      'Crianças e adolescentes: Valores podem ser até 4 a 5x maiores sem indicar qualquer doença!'
    ],
    methodology: 'Método Cinético Colorimétrico (PNPP).',
    preparation: [
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'Anticoncepcionais Orais: Podem diminuir levemente a FA.',
      'Anticonvulsivantes (Fenitoína): Aumentam os níveis de FA.'
    ],
    curiosities: [
      'Muitos pais entram em pânico quando pegam o exame dos filhos e veem a FA "muito alta, estourando o limite". O susto é injustificado: as crianças têm muita FA nos ossos porque estão na fase do "estirão de crescimento". A enzima simplesmente vaza para o sangue durante a montagem do novo osso!'
    ]
  },
  {
    id: 'gama-gt',
    name: 'Gama GT (GGT)',
    category: 'Bioquímica Hepática',
    synonyms: ['Gama-Glutamil Transferase', 'GGT', 'Gama Glutamil Transpeptidase'],
    related: ['Fosfatase Alcalina', 'TGO', 'TGP', 'Bilirrubinas'],
    shortDescription: 'O melhor exame para detectar o uso crônico de álcool e gordura no fígado.',
    purpose: 'É o marcador mais sensível de todos para as vias biliares. A GGT é o exame primário pedido pelo médico do trabalho ou psiquiatra para suspeitar de uso contínuo de álcool ou dano hepatotóxico.',
    referenceValues: [
      'Homens: 10 a 71 U/L',
      'Mulheres: 6 a 42 U/L'
    ],
    methodology: 'Método Cinético Colorimétrico (IFCC).',
    preparation: [
      'Jejum não é obrigatório.',
      'PROIBIDO ingerir bebidas alcoólicas por no mínimo 72 horas (o ideal é 1 semana de abstinência se quiser níveis basais não alterados pelo fim de semana).'
    ],
    interactions: [
      'Álcool: O consumo regular de cerveja, vinho ou cachaça força o fígado a produzir mais GGT. É o famoso "exame que dedura o alcoólatra".',
      'Paracetamol e Fitoterápicos (chás para emagrecer): Elevam muito a GGT.'
    ],
    curiosities: [
      'Se o seu exame de Fosfatase Alcalina der alto e o médico não souber se o seu problema é no osso ou no fígado, ele pede a GGT. Se a GGT der normal, a culpa é do osso. Se a GGT der alta, a culpa é 100% do fígado.'
    ]
  },
  {
    id: 'ck',
    name: 'CK (Creatinoquinase Total)',
    category: 'Músculos e Coração',
    synonyms: ['CPK', 'Creatinofosfoquinase'],
    related: ['TGO', 'Creatinina', 'Troponina'],
    shortDescription: 'Enzima que reflete o grau de destruição dos músculos e fadiga muscular extrema.',
    purpose: 'Usada primariamente na medicina do esporte para ver desgaste muscular de atletas, e em hospitais para investigar infartos, doenças musculares genéticas (distrofia), ou trauma grave.',
    referenceValues: [
      'Homens: 39 a 308 U/L',
      'Mulheres: 26 a 192 U/L'
    ],
    methodology: 'Enzimático UV (IFCC / NAC Ativado).',
    preparation: [
      'Não realizar exercícios de força ou aeróbicos intensos (musculação, corrida, crossfit) nas 48h a 72h antes do exame, senão o resultado será astronômico.'
    ],
    interactions: [
      'Estatinas (remédio do colesterol): É famoso por causar "Rabdomiólise", ou seja, destruição e dores nos músculos, elevando muito a CK.',
      'Injeções intramusculares (ex: tomar uma injeção para dor nas costas um dia antes do exame) causará aumento na CK devido à agulha ter rasgado as células.'
    ],
    curiosities: [
      'É muito comum praticantes de Crossfit terem CK acima de 1.000 (o normal é até 200). Mas atenção: CK passando de 5.000 pode entupir o rim com proteínas do músculo rasgado, e a urina da pessoa sairá preta como Coca-Cola.'
    ]
  },
  {
    id: 'troponina',
    name: 'Troponina (I ou T) Ultrassensível',
    category: 'Coração (Cardiologia)',
    synonyms: ['Troponina I', 'Troponina T', 'Marcador de Infarto'],
    related: ['CK', 'CK-MB', 'Mioglobina'],
    shortDescription: 'O padrão-ouro absoluto mundial para dizer se o paciente está tendo um infarto do coração.',
    purpose: 'A Troponina é uma proteína que só existe DE VERDADE na engrenagem do músculo do coração. Se ela for detectada no sangue (que corre no braço), significa categoricamente que células do coração explodiram (infartaram e morreram).',
    referenceValues: [
      'Valores negativos dependem intimamente da marca da máquina (normalmente < 14 ng/L para mulheres e < 34 ng/L para homens).'
    ],
    methodology: 'Quimioluminescência ou Eletroquimioluminescência Ultrassensível.',
    preparation: [
      'Coletado em ambiente de urgência no Pronto Socorro. Nenhum preparo é necessário.'
    ],
    interactions: [
      'Biotina: Se você tomar cápsulas de biotina para queda de cabelo, o exame de Troponina dará um FALSO-NEGATIVO. Isso é gravíssimo, pois o médico mandará o paciente infartado para casa.'
    ],
    curiosities: [
      'A curva do Infarto: A Troponina começa a subir no sangue cerca de 3 horas após o coração começar a morrer de falta de oxigênio (dor no peito). Por isso o médico da UPA pede um exame na hora em que o paciente chega, e outro repetido 3 horas depois, para ver se a curva "subiu".'
    ]
  },
  {
    id: 'd-dimero',
    name: 'D-Dímero',
    category: 'Coagulação e Trombose',
    synonyms: ['Produtos de Degradação da Fibrina', 'Dímero-D'],
    related: ['Coagulograma', 'Fibrinogênio'],
    shortDescription: 'Sinal de alerta de que coágulos de sangue (trombos) estão sendo destruídos pelo corpo.',
    purpose: 'Exame crucial no Pronto Socorro para DESCARTAR problemas gravíssimos como Trombose Venosa Profunda (na perna) ou Tromboembolismo Pulmonar (coágulo no pulmão). Aumentou muito o seu uso na era da COVID-19 para prever tromboses generalizadas.',
    referenceValues: [
      'Normal/Negativo: < 500 ng/mL FEU'
    ],
    methodology: 'Imunoturbidimetria ou Quimioluminescência.',
    preparation: [
      'Nenhum jejum necessário, frequentemente colhido na urgência.'
    ],
    interactions: [
      'Falsos positivos fisiológicos: Idade muito avançada, gravidez do 3º trimestre ou pós-cirurgias recentes elevam o D-Dímero sem que seja uma trombose perigosa.'
    ],
    curiosities: [
      'O D-Dímero é excelente para exclusão. Se o médico acha que você tem uma trombose na perna e o D-Dímero dá NEGATIVO, ele pode dizer com quase 100% de certeza que você não tem trombose. Mas se der POSITIVO, não confirma, exige um ultrassom.'
    ]
  },
  {
    id: 'ferritina',
    name: 'Ferritina',
    category: 'Ferro e Anemia',
    synonyms: ['Estoque de Ferro', 'Ferritina Sérica'],
    related: ['Ferro Sérico', 'Hemograma', 'PCR', 'TGO'],
    shortDescription: 'O armazém principal de ferro do seu corpo.',
    purpose: 'É o melhor e mais precoce exame para investigar Anemia Ferropriva (falta de ferro crônica). E também é um forte Marcador Inflamatório agudo (sobe na Covid, gripe ou obesidade).',
    referenceValues: [
      'Homens: 30 a 400 ng/mL',
      'Mulheres: 15 a 150 ng/mL'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Imunoturbidimetria.',
    preparation: [
      'Jejum não é obrigatório.',
      'Avisar sobre o uso recente de suplementos de ferro via oral ou infusões na veia.'
    ],
    interactions: [
      'Inflamações crônicas e Obesidade: Causam elevação absurda e falsa da Ferritina. A pessoa pode estar anêmica, mas sua Ferritina mostra 1.000 porque a gordura corporal está inflamando o corpo.'
    ],
    curiosities: [
      'Enquanto o "Ferro Sérico" mede o dinheiro que você tem no bolso agora, a "Ferritina" mede o dinheiro que está guardado no banco. Quando você para de consumir carne, o corpo gasta o dinheiro do banco primeiro (cai a ferritina), antes da anemia aparecer no Hemograma.'
    ]
  },
  {
    id: 'ferro-serico',
    name: 'Ferro Sérico',
    category: 'Ferro e Anemia',
    synonyms: ['Ferremia', 'Ferro no Sangue', 'Fe'],
    related: ['Ferritina', 'Capacidade de Ligação do Ferro', 'Transferrina', 'Hemograma'],
    shortDescription: 'A quantidade de ferro circulando solta no seu sangue neste exato momento.',
    purpose: 'Auxilia na montagem do quebra-cabeça do metabolismo de ferro do paciente. Isoladamente tem baixo valor, pois o ferro do sangue varia hora a hora, dependendo do que o paciente almoçou.',
    referenceValues: [
      'Normal: 50 a 170 µg/dL'
    ],
    methodology: 'Método Colorimétrico Direto (Ferrozine).',
    preparation: [
      'Jejum obrigatório de 8 horas.',
      'Sempre colher pela MANHÃ (o ferro cai brutalmente durante a tarde/noite).'
    ],
    interactions: [
      'Pílulas anticoncepcionais costumam elevar artificialmente a taxa de ferro.',
      'Antitérmicos, antibióticos e quelações podem mascarar os resultados.'
    ],
    curiosities: [
      'O sangue cheira a metal e é vermelho exatamente por causa dos átomos de Ferro aprisionados dentro das hemácias (na molécula de hemoglobina). Esse ferro se liga quimicamente ao Oxigênio nos pulmões para transportá-lo como um trenzinho elétrico.'
    ]
  },
  {
    id: 'acido-folico',
    name: 'Ácido Fólico',
    category: 'Vitaminas',
    synonyms: ['Vitamina B9', 'Folato Sérico'],
    related: ['Vitamina B12', 'Hemograma'],
    shortDescription: 'Vitamina vital para o DNA celular, especialmente necessária na gravidez.',
    purpose: 'Junto com a Vitamina B12, é usado para diagnosticar Anemias Macrocíticas. Essencial na gravidez para evitar defeitos no tubo neural (espinha bífida) do bebê.',
    referenceValues: [
      'Desejável: Acima de 4,0 ng/mL'
    ],
    methodology: 'Imunoensaio Competitivo Quimioluminescente (CLIA).',
    preparation: [
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'Bebidas Alcoólicas: O álcool prejudica severamente a absorção do ácido fólico no intestino e aumenta sua eliminação na urina.',
      'Metotrexato (remédio para câncer/reumatismo): Inativa intencionalmente o folato no corpo.'
    ],
    curiosities: [
      'O nome "fólico" vem de folha. Essa vitamina é riquíssima em vegetais de folhas verde-escuras (espinafre, brócolis). O problema é que muito se perde quando os vegetais são cozidos e nós esquecemos de comê-los crus.',
      'No Brasil, há uma lei federal que obriga a indústria a adicionar Ácido Fólico nas farinhas de trigo e milho (nos pães e bolos), justamente para proteger as grávidas que desconheciam sua gravidez.'
    ]
  },
  {
    id: 'fan',
    name: 'Fator Antinuclear (FAN)',
    category: 'Autoimunidade / Reumatologia',
    synonyms: ['Pesquisa de Autoanticorpos', 'FAN HEP-2', 'Anticorpos Antinucleares'],
    related: ['Fator Reumatoide', 'Anti-DNA', 'Anti-Ro/SSA', 'PCR'],
    shortDescription: 'Exame de triagem super famoso para investigar doenças autoimunes.',
    purpose: 'Procura anticorpos do próprio paciente que estão, por erro biológico, atacando o núcleo das suas próprias células saudáveis. Essencial na suspeita de Lúpus (LES), Síndrome de Sjögren, Esclerose Sistêmica e outros reumatismos.',
    referenceValues: [
      'Não Reagente (Negativo)',
      'Se Reagente: Informa-se o Título (ex: 1:80, 1:320, 1:1280) e o Padrão do brilho (ex: Nuclear Homogêneo, Pontilhado Fino).'
    ],
    methodology: 'Imunofluorescência Indireta. O biomédico pinga o sangue do paciente sobre lâminas contendo células humanas de laboratório (células Hep-2), e joga um corante fluorescente. Depois, ele observa no microscópio escuro se os núcleos "acenderam e brilharam" (positivo).',
    preparation: [
      'Jejum não é estritamente obrigatório, mas evitar refeições muito pesadas/gordurosas na véspera ajuda a evitar soro lipêmico que atrapalha a lâmina.'
    ],
    interactions: [
      'Alguns medicamentos controlados (como a Hidralazina) podem causar um Lúpus induzido por drogas, tornando o exame altamente positivo sem que o paciente tenha a doença genética.'
    ],
    curiosities: [
      'Cerca de 10 a 15% da população mundial saudável terá um FAN reagente em títulos baixos (como 1:80) sem possuir NENHUMA doença autoimune. Só o exame isolado não fecha o diagnóstico de Lúpus!',
      'As células "Hep-2" usadas na lâmina vêm da biologia de um tumor de laringe de um paciente da década de 1950, que continua se multiplicando em laboratórios pelo mundo até hoje.'
    ]
  },
  {
    id: 'fator-reumatoide',
    name: 'Fator Reumatoide (FR)',
    category: 'Autoimunidade / Reumatologia',
    synonyms: ['Prova Reumática', 'FR'],
    components: ['Fator Reumatoide (IgM, IgG, IgA)'],
    related: ['FAN', 'Anti-CCP', 'PCR', 'Ácido Úrico'],
    shortDescription: 'Exame antigo e clássico para auxiliar no diagnóstico de Artrite Reumatoide.',
    purpose: 'Detectar um anticorpo que o corpo fabricou e que age contra outras de suas próprias imunoglobulinas, gerando severas inflamações e destruição e deformidade das articulações das mãos e pés.',
    referenceValues: [
      'Negativo/Normal: Geralmente inferior a 14 ou 20 UI/mL (depende da técnica).'
    ],
    methodology: 'Imunoturbidimetria, Nefelometria ou Aglutinação de Látex.',
    preparation: [
      'Jejum não é necessário em muitas metodologias modernas.'
    ],
    interactions: [
      'Qualquer infecção viral ou bacteriana arrastada (como Tuberculose, Sífilis ou Endocardite) pode elevar cronicamente o Fator Reumatoide.'
    ],
    curiosities: [
      'O "Anti-CCP" é hoje um exame muito superior e mais moderno que o Fator Reumatoide para Artrite. Ele é capaz de prever se o paciente terá artrite anos antes das dores começarem nas mãos.',
      'Dores nas articulações (Artrose) da velhice são pelo "desgaste" da cartilagem. A Artrite Reumatoide é um "fogo cruzado" autoimune: as juntas ficam quentes, vermelhas e deformam de uma vez. O FR ajuda a separar qual dos dois casos é.'
    ]
  },
  {
    id: 'psa',
    name: 'Antígeno Prostático Específico (PSA)',
    category: 'Marcadores Tumorais',
    synonyms: ['PSA Total e Livre', 'Exame da Próstata'],
    components: ['PSA Total', 'PSA Livre', 'Relação Livre/Total'],
    related: ['EAS', 'Testosterona Total'],
    shortDescription: 'Proteína exclusiva dos homens, usada para rastrear aumento benigno e Câncer de Próstata.',
    purpose: 'É o exame de rotina mais pedido pelo Urologista a partir dos 45/50 anos. Níveis altos indicam aumento da próstata (HPB), inflamação ou, na pior das hipóteses, câncer invasivo da glândula.',
    referenceValues: [
      'Total: Geralmente < 4,0 ng/mL (Aumenta com a idade, idosos de 70 anos podem ter até 6,5 como normal)',
      'Relação Livre/Total: Se a relação for MAIOR que 20% (> 0.20), é sinal tranquilizador (benigno). Relações BAIXAS (< 10%) acendem o alerta vermelho para câncer.'
    ],
    methodology: 'Quimioluminescência (CLIA).',
    preparation: [
      'O rigor é absurdo:',
      '1. Abstinência sexual/ejaculação de 2 a 3 dias antes.',
      '2. Não realizar andar a cavalo, bicicleta ou moto nos 2 dias antes.',
      '3. Aguardar 30 dias se tiver feito toque retal ou andado a cavalo extensamente.'
    ],
    interactions: [
      'Medicamentos para Próstata (como Finasterida ou Dutasterida): Cortam o valor do PSA exatamente pela METADE. O médico precisa multiplicar por 2 para saber a verdade.'
    ],
    curiosities: [
      'Qualquer massagem ou trauma mecânico (como o banco duro de uma bicicleta esportiva por muito tempo) espreme a próstata e faz a enzima vazar em altíssimas quantidades para o sangue, assustando pacientes que acham ser câncer de repende.',
      'O PSA por si só não bate o martelo para câncer, mas é o cão de guarda. Se ele sobe, é hora da Biópsia.'
    ]
  },
  {
    id: 'cea',
    name: 'Antígeno Carcinoembrionário (CEA)',
    category: 'Marcadores Tumorais',
    synonyms: ['CEA', 'Antígeno Câncer Coloração'],
    related: ['Sangue Oculto', 'CA 19-9'],
    shortDescription: 'Uma glicoproteína usada para monitorar pacientes com câncer, sobretudo de intestino e colorretal.',
    purpose: 'Geralmente não é usado para "descobrir" o câncer do zero em pessoas saudáveis (dá muito falso positivo). É usado para ver se o paciente que já operou o tumor ficou livre da doença, ou se a doença teve recidiva e se espalhou pelo corpo.',
    referenceValues: [
      'Não Fumantes: < 3,0 ng/mL',
      'Fumantes: Podem ter valores de até 5,0 ng/mL normalmente.'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA).',
    preparation: [
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'Cigarro: O tabagismo crônico inflama e afeta o pulmão e o estômago, dobrando a quantidade basal de CEA no sangue do fumante, mesmo sem nenhum câncer ali.'
    ],
    curiosities: [
      'Como o nome "embrionário" indica, é uma proteína que só deveria ser produzida pelo nosso corpo na época que estávamos na barriga da mãe (embrião). Adultos deveriam ter valores irrisórios no sangue. Quando volta a subir, é porque células mutantes desativaram esse silenciador genético.'
    ]
  },
  {
    id: 'ca125',
    name: 'CA 125',
    category: 'Marcadores Tumorais',
    synonyms: ['Antígeno de Câncer 125', 'Marcador Ovariano'],
    related: ['CEA', 'Estradiol'],
    shortDescription: 'Proteína frequentemente pedida por ginecologistas para avaliar cistos e tumores de ovário.',
    purpose: 'O CA 125 é o marcador tumoral mais conhecido para o Câncer de Ovário epitelial. Também é amplamente usado, em níveis mais brandos, para investigar e acompanhar casos severos de Endometriose.',
    referenceValues: [
      'Normal: Geralmente inferior a 35 U/mL'
    ],
    methodology: 'Quimioluminescência (CLIA).',
    preparation: [
      'Jejum não é obrigatório.',
      'Preferencialmente não realizar a coleta durante a menstruação (pode elevar o marcador artificialmente).'
    ],
    interactions: [
      'Não há medicamentos expressivos documentados, mas a gravidez e a menstruação causam falsos-positivos.'
    ],
    curiosities: [
      'Apesar de ser chamado de marcador de câncer, mais de 80% dos exames de CA 125 alterados que as mulheres fazem nas clínicas revelam-se Endometriose (inflamação do tecido do útero fora de lugar) e cistos benignos, tirando um enorme peso dos ombros da paciente.'
    ]
  },
  {
    id: 'anti-ccp',
    name: 'Anti-CCP',
    category: 'Autoimunidade / Reumatologia',
    synonyms: ['Peptídeo Citrulinado Cíclico', 'Anticorpos Anti-Peptídeo Cíclico Citrulinado', 'CCP'],
    related: ['Fator Reumatoide', 'FAN', 'PCR'],
    shortDescription: 'O exame mais moderno e preciso do mundo para diagnosticar Artrite Reumatoide.',
    purpose: 'É o padrão-ouro para o diagnóstico precoce da Artrite Reumatoide. Diferente do antigo "Fator Reumatoide", o Anti-CCP é incrivelmente específico: se der positivo, a chance do paciente ter a doença é de quase 95%.',
    referenceValues: [
      'Negativo: < 20 U/mL (Pode variar levemente conforme o kit do laboratório)'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Ensaio Imunoenzimático (ELISA).',
    preparation: [
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'O uso de imunossupressores ou corticoides em altas doses para tratar outras doenças pode reduzir os níveis do anticorpo.'
    ],
    curiosities: [
      'O Anti-CCP é uma verdadeira "máquina do tempo" médica: ele pode dar positivo no sangue de uma pessoa de 5 a 10 ANOS antes dela sentir a primeira dor nas articulações, permitindo que o reumatologista evite a doença antes dela deformar as mãos.'
    ]
  },
  {
    id: 'homocisteina',
    name: 'Homocisteína',
    category: 'Bioquímica Clínica',
    synonyms: ['Hcy', 'Homocisteína Sérica'],
    related: ['Vitamina B12', 'Ácido Fólico', 'Perfil Lipídico'],
    shortDescription: 'Um aminoácido tóxico que, se alto, indica altíssimo risco de infarto e trombose.',
    purpose: 'Avaliá-lo ajuda a prever o risco cardiovascular (infarto, AVC) independentemente do colesterol. Também é crucial para descobrir falhas no metabolismo das Vitaminas B12 e B9 (Ácido Fólico), ou mutações no gene MTHFR.',
    referenceValues: [
      'Desejável/Ótimo: < 10 µmol/L',
      'Normal/Aceitável: 5 a 15 µmol/L'
    ],
    methodology: 'Quimioluminescência (CLIA), Cromatografia Líquida de Alta Eficiência (HPLC) ou Enzimático.',
    preparation: [
      'Jejum obrigatório de 8 a 12 horas.',
      'Evitar comer carnes vermelhas em excesso na noite anterior.'
    ],
    interactions: [
      'Metotrexato e Fenitoína: Causam aumento perigoso da homocisteína no sangue.',
      'Fumar cigarro e beber muito café: Aumentam cronicamente os níveis desse aminoácido tóxico.'
    ],
    curiosities: [
      'A homocisteína age no corpo como se fosse "lixa grossa" passando por dentro das suas artérias: ela rasga o revestimento dos vasos sanguíneos, facilitando que o colesterol grude e cause um infarto.',
      'Muitas vezes, a "cura" para uma homocisteína perigosamente alta é surpreendentemente simples: apenas suplementar Vitaminas do Complexo B (especialmente B12 e Metilfolato) faz os níveis despencarem para a normalidade.'
    ]
  },
  {
    id: 'calprotectina',
    name: 'Calprotectina Fecal',
    category: 'Gastroenterologia',
    synonyms: ['Calprotectina nas Fezes', 'Marcador de Inflamação Intestinal'],
    related: ['Sangue Oculto', 'EPF', 'PCR'],
    shortDescription: 'Exame de fezes revolucionário que detecta inflamação severa nas paredes do intestino.',
    purpose: 'Diferencia a inofensiva "Síndrome do Intestino Irritável" (onde a calprotectina é normal) de doenças graves e destrutivas como a Doença de Crohn e a Retocolite Ulcerativa (onde a calprotectina explode de valor). Evita milhares de endoscopias e colonoscopias desnecessárias.',
    referenceValues: [
      'Normal (sem inflamação): < 50 µg/g de fezes',
      'Inflamação ativa (Crohn/Retocolite): > 200 µg/g (Muitas vezes passa de 1.000!)'
    ],
    methodology: 'Ensaio Imunoenzimático (ELISA) ou Imunocromatografia de Fluorescência.',
    preparation: [
      'Não é necessário jejum nem dieta especial.',
      'Coletar as fezes em frasco limpo, sem misturar com urina.'
    ],
    interactions: [
      'Anti-inflamatórios Não Esteroides (Ibuprofeno, Diclofenaco): O uso contínuo rasga a mucosa do intestino e pode dar um falso-positivo enorme para inflamação intestinal grave.'
    ],
    curiosities: [
      'A Calprotectina é uma proteína que fica guardada dentro dos seus glóbulos brancos (neutrófilos). Quando o intestino inflama, os glóbulos brancos correm para lá, morrem na parede do intestino e derramam toda a calprotectina nas suas fezes.',
      'Esse exame é a "Luz de Alerta do Painel do Carro" do gastroenterologista: se ele dá normal, o médico diz para você relaxar. Se ele dá alto, você vai direto para a colonoscopia com biópsia.'
    ]
  },
  {
    id: 'pth',
    name: 'PTH (Paratormônio Intacto)',
    category: 'Hormônios',
    synonyms: ['Hormônio da Paratireoide', 'PTHi'],
    related: ['Cálcio', 'Cálcio Iônico', 'Vitamina D'],
    shortDescription: 'Hormônio que comanda todo o cálcio do seu corpo, decidindo se ele fica no osso ou no sangue.',
    purpose: 'Diagnosticar hiperparatireoidismo, investigar causas de osteoporose precoce, pedras nos rins de repetição e para o acompanhamento rigoroso de pacientes com doença renal crônica em diálise.',
    referenceValues: [
      'Normal: 15 a 65 pg/mL (pode variar muito conforme a idade e se o paciente tem insuficiência renal)'
    ],
    methodology: 'Quimioluminescência (CLIA) ou Eletroquimioluminescência (ECLIA).',
    preparation: [
      'Jejum de 8 horas.',
      'Sempre coletar de manhã (pois o PTH tem ritmo próprio e sofre quedas à tarde).'
    ],
    interactions: [
      'Falta de Vitamina D: A interação mais clássica do mundo. Quando a Vitamina D despenca, o PTH percebe a falta de cálcio e aumenta desenfreadamente para roubar cálcio do seu osso para compensar (Hiperparatireoidismo Secundário).'
    ],
    curiosities: [
      'As paratireoides são quatro bolinhas do tamanho de uma ervilha que ficam grudadas atrás da sua tireoide no pescoço. Elas são os "Caixas Eletrônicos" de cálcio do corpo.',
      'Se o seu PTH estiver altíssimo e seu cálcio também, é sinal de que há um tumorzinho benigno (adenoma) em uma dessas ervilhas, que ficou louca e está dissolvendo o seu esqueleto. A cirurgia para retirar a "ervilha defeituosa" cura a doença no mesmo dia.'
    ]
  },
  {
    id: 'eletroforese',
    name: 'Eletroforese de Proteínas Séricas',
    category: 'Bioquímica Clínica',
    synonyms: ['Proteinograma', 'Eletroforese Capilar'],
    related: ['Imunoglobulinas', 'Cálcio', 'Hemograma'],
    shortDescription: 'Separa as proteínas do sangue por tamanho e carga elétrica, criando um "gráfico" vital para diagnósticos.',
    purpose: 'É o exame matador para o diagnóstico de Mieloma Múltiplo (um câncer na medula óssea). Também rastreia inflamações crônicas, cirrose hepática, desnutrição severa e perda de proteínas pelos rins.',
    referenceValues: [
      'O laudo entrega as frações (Albumina, Alfa-1, Alfa-2, Beta e Gama).',
      'O achado mais grave é a presença de um "Pico Monoclonal" na região Gama.'
    ],
    methodology: 'Eletrodo Capilar de Alta Resolução (Método mais moderno) ou Gel de Agarose.',
    preparation: [
      'Jejum não é obrigatório para laboratórios modernos que usam a técnica capilar.'
    ],
    interactions: [
      'Contraste radiológico endovenoso recente: Pode criar picos falsos no gráfico da eletroforese, enganando o médico.'
    ],
    curiosities: [
      'Esse não é um exame de "número", é um exame de "imagem". O aparelho usa um choque de alta voltagem para forçar as proteínas a apostarem uma corrida; as mais pesadas ficam para trás e as mais leves vão na frente, desenhando "montanhas" no computador.',
      'Se as células de defesa começarem a produzir um anticorpo defeituoso aos milhões (como no câncer Mieloma), aparecerá uma montanha gigantesca e fina (o temido Pico Monoclonal) na área das imunoglobulinas.'
    ]
  },
  {
    id: 'totg',
    name: 'Teste de Tolerância à Glicose (Curva Glicêmica)',
    category: 'Endocrinologia',
    synonyms: ['TOTG', 'Curva Glicêmica', 'Glicemia Pós-Prandial'],
    related: ['Glicemia', 'Insulina', 'Hemoglobina Glicada'],
    shortDescription: 'O teste do "xarope doce" para flagrar o diabetes que a glicemia de jejum não conseguiu ver.',
    purpose: 'É o exame definitivo para o diagnóstico de Diabetes Mellitus tipo 2 e Diabetes Gestacional. Ele força o corpo com uma bomba de açúcar para ver se o pâncreas ainda aguenta o tranco.',
    referenceValues: [
      '2 horas após tomar o xarope (75g):',
      'Normal: < 140 mg/dL',
      'Pré-diabetes: 140 a 199 mg/dL',
      'Diabetes: ≥ 200 mg/dL'
    ],
    methodology: 'Enzimático Colorimétrico Automatizado (feita em diversas coletas ao longo de horas).',
    preparation: [
      'Jejum obrigatório e estrito de 8 a 12 horas.',
      'O paciente bebe um xarope extremamente doce (75 gramas de glicose pura) e colhe sangue nos tempos 0, 60 e 120 minutos (ou conforme pedido).',
      'É OBRIGATÓRIO não sair do laboratório e ficar sentado sem se mover muito durante as 2 horas, pois o esforço muscular queima a glicose e estraga o exame.'
    ],
    interactions: [
      'Qualquer esforço físico durante o exame (como sair do laboratório para caminhar) anula o resultado, pois o músculo chupa a glicose da água sem precisar da insulina.',
      'Corticoides anulam totalmente o teste, jogando a glicose para níveis de diabético.'
    ],
    curiosities: [
      'É o exame mais temido pelas grávidas devido ao enjoo fortíssimo que o líquido doce causa em jejum. Muitos laboratórios agora oferecem a garrafinha gelada e com sabor de limão para tentar aliviar a náusea.',
      'Cerca de 20% das pessoas que têm glicemia de jejum perfeitamente normal na verdade já são diabéticas graves, e isso só é descoberto quando são submetidas a esse teste de resistência.'
    ]
  },
  {
    id: 'ige-especifico',
    name: 'IgE Específico (RAST) para Alergias',
    category: 'Imunologia / Alergias',
    synonyms: ['RAST', 'Pesquisa de IgE para Alimentos e Inalantes', 'Painel de Alergia'],
    related: ['IgE Total', 'Hemograma (Eosinófilos)'],
    shortDescription: 'Descobre no sangue a qual alimento, pelo de animal ou pólen você tem alergia.',
    purpose: 'Identifica o gatilho exato de alergias respiratórias (asma, rinite) e alergias alimentares graves (amendoim, leite, camarão). Substitui ou complementa o teste de picar as costas (Prick Test).',
    referenceValues: [
      'Geralmente, resultados < 0,35 kU/L são considerados negativos (ausência de alergia).',
      'Quanto maior a classe (vai de 0 a 6), mais violenta é a provável reação alérgica do paciente àquela substância.'
    ],
    methodology: 'Fluoroinmunoensaio (ImmunoCAP - o padrão-ouro de precisão) ou Quimioluminescência.',
    preparation: [
      'Jejum não é obrigatório.'
    ],
    interactions: [
      'A beleza do exame de IgE no sangue é que, ao contrário do teste de picar a pele nas costas, ele NÃO sofre interferência se o paciente estiver tomando antialérgicos (Polaramine, Loratadina). Pode colher tomando remédio!'
    ],
    curiosities: [
      'A molécula IgE é o cão de guarda "paranóico" do sistema imunológico. Em pessoas alérgicas, a IgE confunde uma inofensiva proteína de camarão com um parasita mortal, e explode as suas células para liberar histamina, causando o choque anafilático.',
      'Muitas pessoas com alergia a pelo de gato descobrem pelo exame detalhado que não têm alergia ao pelo, mas sim a uma proteína (Fel d 1) que o gato solta na saliva quando se lambe.'
    ]
  },
  {
    id: 'zinco-selenio',
    name: 'Oligoelementos (Zinco, Selênio, Cobre)',
    category: 'Nutrição e Toxicologia',
    synonyms: ['Minerais Raros', 'Zinco Sérico', 'Selênio'],
    related: ['Vitamina D', 'Vitamina B12', 'Magnésio'],
    shortDescription: 'Dosagem de metais e minerais nobres que comandam nossa imunidade e tireoide.',
    purpose: 'Exames muito solicitados na prática de medicina ortomolecular, pós-cirurgia bariátrica e medicina antienvelhecimento, pois pequenas deficiências travam a tireoide, o crescimento capilar e a imunidade.',
    referenceValues: [
      'Zinco: 70 a 120 µg/dL',
      'Selênio: 70 a 150 µg/L'
    ],
    methodology: 'Espectrometria de Massas com Plasma Acoplado Indutivamente (ICP-MS) ou Absorção Atômica.',
    preparation: [
      'Jejum de 8 horas.',
      'Uso de suplementos polivitamínicos deve ser interrompido 7 a 10 dias antes, para medir a reserva natural do corpo e não o remédio que você acabou de tomar.'
    ],
    interactions: [
      'Anticoncepcionais: Podem abaixar o Zinco e elevar absurdamente o Cobre, gerando um desequilíbrio tóxico famoso na medicina nutricional.'
    ],
    curiosities: [
      'Toda a sua tireoide não consegue funcionar sem o Selênio. Ele é o gatilho que transforma o T4 (inativo) no T3 (ativo). Pessoas com queda de cabelo crônica muitas vezes têm hipotireoidismo oculto por pura falta de Castanha-do-Pará (que é 100% selênio).',
      'O Zinco é colhido em tubos especiais sem nenhum contato de borracha ou metal na tampa (tubo azul escuro tracejado) para evitar contaminação que rouba o resultado do laboratório.'
    ]
  },
  {
    id: 'hla-b27',
    name: 'Pesquisa do HLA-B27',
    category: 'Genética / Reumatologia',
    synonyms: ['Tipagem HLA-B27', 'Marcador Genético de Espondilite'],
    related: ['FAN', 'Fator Reumatoide', 'PCR'],
    shortDescription: 'Teste genético que descobre se o paciente nasceu com tendência a ter problemas graves de coluna.',
    purpose: 'Diagnóstico da Espondilite Anquilosante, uma doença autoimune brutal onde o sistema imune calcifica e funde os ossos da coluna do jovem, deixando as costas travadas como bambu.',
    referenceValues: [
      'Negativo / Ausente (o que é bom, significa que você não herdou a mutação).'
    ],
    methodology: 'Reação em Cadeia da Polimerase (PCR) ou Citometria de Fluxo.',
    preparation: [
      'Jejum não é necessário, pois seu DNA não muda com a comida.'
    ],
    interactions: [
      'Não sofre interação com remédios. É o seu DNA puro.'
    ],
    curiosities: [
      'O HLA-B27 é um código de barra genético nas suas células de defesa. Se você nascer com o código B27, suas células vão, por engano, ver as cartilagens da sua coluna e bacia como se fossem bactérias, e atacarão com força total.',
      'Apesar de assustador, ter o exame POSITIVO não é garantia que a pessoa ficará doente. Mais de 8% da população carrega o gene e não desenvolve nada; ele precisa de um "gatilho" ambiental para despertar.'
    ]
  },
  {
    id: 'mthfr',
    name: 'Mutação do Gene MTHFR',
    category: 'Genética / Biologia Molecular',
    synonyms: ['Teste Genético MTHFR', 'Trombofilia Genética'],
    related: ['Homocisteína', 'Ácido Fólico', 'Vitamina B12'],
    shortDescription: 'O exame genético do momento para investigar abortos de repetição e risco de infarto jovem.',
    purpose: 'Procura mutações nas posições C677T e A1298C do gene. Essa enzima é a fábrica que transforma o ácido fólico comum na forma química que o corpo consegue usar (metilfolato).',
    referenceValues: [
      'O laudo informa se a pessoa não tem a mutação (Selvagem), se tem de um pai só (Heterozigoto) ou de ambos os pais (Homozigoto - o quadro mais grave).'
    ],
    methodology: 'Análise de DNA por Reação em Cadeia da Polimerase (PCR) em Tempo Real.',
    preparation: [
      'Não há jejum.'
    ],
    interactions: [
      'Novamente, sem interações por ser DNA.'
    ],
    curiosities: [
      'Se uma grávida tiver a mutação MTHFR grave e o médico mandar ela tomar a famosa "pílula de Ácido Fólico" de farmácia, o corpo dela não conseguirá transformar a pílula em vitamina. O bebê pode nascer com malformações. A saída? Ela deve tomar a vitamina já pronta e processada (chamada Metilfolato).',
      'Estudos genéticos mostram que até 40% da população tem algum grau de defeito nesse gene, sendo o motivo pelo qual muitas pessoas vivem cansadas, deprimidas e com homocisteína nas alturas.'
    ]
  }
];

export const examsData = [
  ...baseExamsData,
  ...expandedExamsData,
  ...expandedExamsData2,
  ...expandedExamsData3,
  ...requestedExamsData
];
