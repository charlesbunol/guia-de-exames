const collectionSources = {
  fleuryGeneral: 'Guia Fleury de exames',
  fleuryHemostasis: 'Manual Fleury de hemostasia',
};

const sourceUrls = {
  fleuryGeneral: 'https://www.fleury.com.br/medico/exames/',
  fleuryHemostasis: 'https://www.fleury.com.br/medico/manuais-diagnosticos/testes-de-hemostasia/coleta-testes',
};

const materialProfiles = {
  serum: {
    material: 'Sangue venoso para obtenção de soro',
    container: 'Tubo seco com gel separador/ativador de coágulo (tampa amarela ou vermelha, conforme rotina da unidade).',
    fleuryNote: 'No Guia Fleury, grande parte das dosagens hormonais, sorologias, marcadores tumorais, vitaminas e bioquímica clínica é descrita como material em soro.',
    alternatives: [
      'Em alguns cadastros do Fleury, o mesmo analito também aparece como plasma ou sangue. Nesses casos, usar somente o tubo aceito no cadastro específico do exame.',
      'Para imunoensaios e hormônios, manter o tubo de soro como referência quando o cadastro Fleury estiver como “soro”.'
    ],
    handling: [
      'Aguardar coagulação, centrifugar e separar o soro conforme rotina do laboratório.',
      'Evitar hemólise, lipemia intensa e coleta traumática, pois podem interferir em diversas dosagens.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  edta: {
    material: 'Sangue total anticoagulado',
    container: 'Tubo com EDTA (tampa roxa/lilás).',
    fleuryNote: 'Indicado para exames que precisam preservar células sanguíneas ou DNA em sangue total.',
    handling: [
      'Homogeneizar suavemente por inversões logo após a coleta.',
      'Não agitar o tubo para evitar hemólise e alterações celulares.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  citrate: {
    material: 'Plasma citratado',
    container: 'Tubo com citrato de sódio 3,2% (tampa azul-clara).',
    fleuryNote: 'O manual de hemostasia do Fleury orienta tubo siliconizado/plástico com citrato 3,2% e proporção sangue/anticoagulante de 9:1.',
    handling: [
      'Preencher até a marca indicada; volume incorreto altera testes de coagulação.',
      'Evitar garroteamento prolongado e coleta traumática.',
      'Homogeneizar por cerca de 5 inversões, sem agitar.'
    ],
    sourceLabel: collectionSources.fleuryHemostasis,
    sourceUrl: sourceUrls.fleuryHemostasis,
  },
  fluoride: {
    material: 'Plasma fluoretado',
    container: 'Tubo com fluoreto/oxalato ou fluoreto/EDTA (tampa cinza).',
    fleuryNote: 'O Guia Fleury lista glicose como “plasma (fluoreto)”, material usado para reduzir consumo de glicose pelas células após a coleta.',
    alternatives: [
      'O Fleury também possui cadastro de “Glicose, soro”; nesse cenário, pode ser coletada em tubo seco com gel separador/ativador de coágulo.',
      'Alguns cadastros de glicose pós-prandial aparecem como plasma, sem explicitar fluoreto; seguir exatamente o material do pedido/cadastro da unidade.'
    ],
    handling: [
      'Homogeneizar suavemente e centrifugar conforme rotina.',
      'Usado quando a estabilidade da glicose é crítica.'
    ],
    sourceLabel: 'Guia Fleury: glicose, plasma fluoreto',
    sourceUrl: 'https://www.fleury.com.br/exames/glicose-plasma-fluoreto',
  },
  urine: {
    material: 'Urina de jato médio',
    container: 'Frasco estéril apropriado para urina.',
    fleuryNote: 'O Fleury descreve urina tipo I e cultura como amostras de jato médio, com frasco adequado retirado na unidade quando a coleta é externa.',
    alternatives: [
      'Quando houver pedidos adicionais, pode ser necessário frasco estéril ou frasco com conservante específico.',
      'Para cultura, priorizar frasco estéril e técnica de assepsia, mesmo que o exame de urina tipo I também tenha sido solicitado.'
    ],
    handling: [
      'Preferir primeira urina da manhã ou permanecer pelo menos 2 horas sem urinar.',
      'Quando houver cultura junto, seguir as orientações mais rigorosas da cultura.',
      'Entregar rapidamente ou manter refrigerado conforme orientação da unidade.'
    ],
    sourceLabel: 'Guia Fleury: urina jato médio',
    sourceUrl: 'https://www.fleury.com.br/exames/urina-exame-de-urina-jato-medio',
  },
  urineCulture: {
    material: 'Urina de jato médio para cultura',
    container: 'Frasco estéril para urocultura.',
    fleuryNote: 'O Fleury lista cultura de urina como “urina jato médio” e recomenda atenção à assepsia e ao tempo de entrega.',
    handling: [
      'Realizar higiene/assepsia antes da coleta.',
      'Coletar o jato médio, sem tocar a parte interna do frasco.',
      'Informar uso atual ou recente de antimicrobianos.'
    ],
    sourceLabel: 'Guia Fleury: cultura de urina jato médio',
    sourceUrl: 'https://www.fleury.com.br/exames/cultura-urina-jato-medio',
  },
  feces: {
    material: 'Fezes',
    container: 'Frasco coletor de fezes fornecido ou indicado pelo laboratório.',
    fleuryNote: 'O Fleury orienta retirar frascos adequados e folha de instruções para exames parasitológicos de fezes.',
    alternatives: [
      'Dependendo da pesquisa, o Fleury pode orientar frasco sem conservante, frasco com conservante ou amostras seriadas.',
      'Quando o pedido incluir pesquisa específica em fezes, seguir o kit e o prazo indicados pela unidade.'
    ],
    handling: [
      'Não contaminar a amostra com urina ou água do vaso sanitário.',
      'Alguns exames podem exigir amostras em dias diferentes ou conservantes específicos.',
      'Entregar dentro do prazo indicado para o exame.'
    ],
    sourceLabel: 'Guia Fleury: parasitológico de fezes',
    sourceUrl: 'https://www.fleury.com.br/exames/parasitologico-fezes',
  },
  fecesFresh: {
    material: 'Fezes recentes',
    container: 'Frasco coletor sem conservante, salvo orientação específica.',
    fleuryNote: 'Para algumas pesquisas em fezes, o Fleury exige amostra recente em frasco sem conservante e entrega rápida.',
    handling: [
      'Evitar contaminação com urina.',
      'Manter sob refrigeração quando indicado.',
      'Seguir o prazo específico do exame solicitado.'
    ],
    sourceLabel: 'Guia Fleury: pesquisa em fezes',
    sourceUrl: 'https://www.fleury.com.br/exames/microsporidia-pesquisa-fezes',
  },
  swab: {
    material: 'Secreção local',
    container: 'Swab estéril com meio de transporte apropriado.',
    fleuryNote: 'Culturas de secreções dependem do sítio coletado e do meio de transporte definido pela rotina microbiológica.',
    handling: [
      'Coletar antes de antimicrobianos sempre que possível.',
      'Identificar corretamente o local anatômico da coleta.',
      'Enviar rapidamente ao laboratório.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  sputum: {
    material: 'Escarro',
    container: 'Frasco estéril de boca larga e tampa rosqueável.',
    fleuryNote: 'Pesquisas microbiológicas em escarro dependem de amostra respiratória adequada, evitando saliva.',
    handling: [
      'Preferir amostra matinal após higiene oral.',
      'Coletar material vindo de tosse profunda, não apenas saliva.',
      'Enviar ao laboratório o quanto antes.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  bronchoalveolar: {
    material: 'Lavado broncoalveolar ou brônquico',
    container: 'Frasco estéril apropriado, coletado durante procedimento médico.',
    fleuryNote: 'Amostras respiratórias profundas são coletadas em procedimento e encaminhadas para microbiologia/citologia conforme solicitação.',
    handling: [
      'Coleta realizada por equipe médica habilitada.',
      'Manter identificação do sítio e encaminhar rapidamente.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  traceElements: {
    material: 'Sangue venoso para soro/plasma livre de contaminação por metais',
    container: 'Tubo específico para elementos-traço, geralmente metal-free (tampa azul-escura), conforme orientação da unidade.',
    fleuryNote: 'Oligoelementos exigem cuidado extra para evitar contaminação por metais do material de coleta.',
    alternatives: [
      'Não substituir por tubo comum sem confirmação da unidade, pois tampas e aditivos podem contaminar a amostra.',
      'Alguns elementos-traço podem ter exigência própria de soro, plasma, sangue total ou urina.'
    ],
    handling: [
      'Usar somente material indicado pelo laboratório.',
      'Evitar contato com tampas, agulhas ou recipientes inadequados para elementos-traço.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  heavyMetal: {
    material: 'Sangue total ou urina, conforme metal e tipo de exposição investigada',
    container: 'Tubo/frasco metal-free específico para toxicologia de metais.',
    fleuryNote: 'Exames de metais exigem material livre de contaminação e podem variar entre sangue, urina isolada ou urina de 24 horas conforme o cadastro.',
    alternatives: [
      'Sangue costuma ser mais útil para exposição recente de alguns metais.',
      'Urina pode ser indicada para monitorização biológica ou eliminação, conforme o metal.'
    ],
    handling: [
      'Usar somente material fornecido ou aprovado pela unidade.',
      'Informar exposição ocupacional, ambiental e uso de quelantes.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  vitaminProtected: {
    material: 'Soro ou plasma protegido da luz, conforme metodologia',
    container: 'Tubo seco com gel ou tubo com anticoagulante aceito pelo método; proteger da luz quando indicado.',
    fleuryNote: 'Vitaminas fotossensíveis e lipossolúveis podem exigir proteção contra luz e transporte especial.',
    alternatives: [
      'Alguns métodos aceitam soro; outros usam plasma EDTA ou heparinizado.',
      'Seguir o cadastro específico da vitamina, pois estabilidade e matriz variam muito.'
    ],
    handling: [
      'Informar suplementação recente.',
      'Proteger da luz e refrigerar/congelar quando orientado.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  vitaminC: {
    material: 'Plasma ou soro estabilizado para ácido ascórbico',
    container: 'Tubo definido pela unidade, com processamento rápido e proteção contra oxidação.',
    fleuryNote: 'Vitamina C é instável; a estabilidade da amostra depende de processamento rápido, frio e proteção contra oxidação.',
    alternatives: [
      'Não substituir o recipiente sem confirmação da unidade.',
      'Amostras mal processadas podem reduzir falsamente o resultado.'
    ],
    handling: [
      'Processar rapidamente.',
      'Manter refrigerado/protegido conforme orientação.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  acth: {
    material: 'Plasma EDTA refrigerado',
    container: 'Tubo com EDTA, preferencialmente mantido resfriado e processado rapidamente.',
    fleuryNote: 'ACTH é um hormônio instável; a fase pré-analítica exige EDTA, frio e separação rápida do plasma conforme rotina.',
    alternatives: [
      'Não usar soro quando o cadastro solicitar plasma EDTA.',
      'A unidade pode orientar coleta em tubo previamente resfriado.'
    ],
    handling: [
      'Coletar no horário solicitado, geralmente pela manhã.',
      'Centrifugar e congelar/refrigerar conforme protocolo.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  lactate: {
    material: 'Plasma para lactato ou sangue total em gasometria, conforme método',
    container: 'Tubo com fluoreto/antiglicolítico ou seringa heparinizada quando dosado junto à gasometria.',
    fleuryNote: 'Lactato é sensível a atraso e glicólise; o material deve ser processado rapidamente conforme método.',
    alternatives: [
      'Pode ser analisado em amostra de gasometria quando solicitado no analisador de gases.',
      'Para bioquímica, usar tubo/metodologia que reduza consumo celular da glicose.'
    ],
    handling: [
      'Evitar garroteamento prolongado.',
      'Enviar imediatamente ao laboratório.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  bloodGasArterial: {
    material: 'Sangue arterial total',
    container: 'Seringa heparinizada própria para gasometria.',
    fleuryNote: 'Gasometria exige amostra sem bolhas, bem homogeneizada e analisada rapidamente.',
    alternatives: [
      'Não substituir por tubo comum.',
      'A seringa deve ser apropriada para gases sanguíneos e eletrólitos quando medidos junto.'
    ],
    handling: [
      'Remover bolhas de ar.',
      'Homogeneizar suavemente e encaminhar imediatamente.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  bloodGasVenous: {
    material: 'Sangue venoso total',
    container: 'Seringa heparinizada própria para gasometria venosa.',
    fleuryNote: 'Gasometria venosa também exige amostra sem bolhas e análise rápida; não deve ser confundida com amostra sérica.',
    alternatives: [
      'Pode ser coletada de acesso venoso conforme protocolo clínico.',
      'Não usar tubo seco com gel para gasometria.'
    ],
    handling: [
      'Evitar bolhas de ar.',
      'Enviar rapidamente para análise.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  oxalate: {
    material: 'Urina, geralmente urina de 24 horas',
    container: 'Frasco de urina de 24 horas com conservante quando indicado pela unidade.',
    fleuryNote: 'Oxalato urinário costuma exigir coleta cronometrada e frasco adequado para preservar a amostra.',
    alternatives: [
      'Alguns protocolos aceitam urina isolada com correção por creatinina.',
      'Seguir exatamente o frasco e conservante entregues pela unidade.'
    ],
    handling: [
      'Registrar corretamente início e fim da coleta de 24 horas.',
      'Manter conservação conforme instrução do laboratório.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  ionizedCalcium: {
    material: 'Sangue total ou plasma heparinizado para cálcio iônico',
    container: 'Seringa/tubo heparinizado, idealmente sem exposição ao ar.',
    fleuryNote: 'Cálcio iônico é sensível a pH e contato com ar; a rotina de coleta deve seguir instrução específica da unidade.',
    handling: [
      'Evitar garroteamento prolongado.',
      'Não abrir o recipiente antes da análise.',
      'Transportar rapidamente conforme orientação do laboratório.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  natriureticPeptides: {
    material: 'Sangue venoso para BNP/NT-proBNP',
    container: 'BNP: geralmente plasma em EDTA. NT-proBNP: soro ou plasma EDTA, conforme metodologia do laboratório.',
    fleuryNote: 'Como BNP e Pró-BNP podem usar materiais diferentes conforme o ensaio, a rotina da unidade e o pedido devem ser conferidos no cadastro atualizado.',
    alternatives: [
      'BNP costuma exigir EDTA.',
      'NT-proBNP pode ser aceito em soro ou plasma EDTA, conforme o método em uso.'
    ],
    handling: [
      'Evitar esforço físico intenso antes da coleta quando orientado.',
      'Processar e transportar conforme estabilidade definida pelo método utilizado.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  homocysteine: {
    material: 'Plasma, preferencialmente separado rapidamente das células',
    container: 'Tubo com EDTA ou heparina, conforme rotina da unidade.',
    fleuryNote: 'Homocisteína é sensível ao tempo de contato com células; a etapa pré-analítica pesa mais que a cor do tubo isoladamente.',
    alternatives: [
      'Pode ser realizada em plasma EDTA ou heparinizado quando a rotina do laboratório permite.',
      'Evitar soro quando o cadastro solicitar plasma separado rapidamente.'
    ],
    handling: [
      'Centrifugar e separar o plasma rapidamente.',
      'Manter resfriado quando indicado pela unidade.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  potassium: {
    material: 'Soro, preferencialmente',
    container: 'Tubo seco com gel separador/ativador de coágulo. Plasma heparinizado pode ser aceito quando previsto pela rotina.',
    fleuryNote: 'O Fleury descreve potássio em soro e cita plasma apenas quando coletado com heparina; amostras com EDTA, citrato ou fluoreto não são adequadas para potássio.',
    alternatives: [
      'Plasma heparinizado é alternativa possível.',
      'Não usar EDTA, citrato ou fluoreto para dosagem de potássio.'
    ],
    handling: [
      'Evitar hemólise, pois ela eleva falsamente o potássio.',
      'Evitar garroteamento prolongado e contração repetida da mão durante a coleta.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  serumOrPlasma: {
    material: 'Soro ou plasma, conforme cadastro do exame',
    container: 'Tubo seco com gel separador/ativador de coágulo ou tubo com anticoagulante aceito pela metodologia.',
    fleuryNote: 'Alguns exames bioquímicos no Fleury aparecem com cadastros relacionados em soro e plasma; a escolha deve seguir a metodologia ativa da unidade.',
    alternatives: [
      'Quando o cadastro permitir plasma, usar o anticoagulante especificado pelo laboratório, geralmente heparina para bioquímica.',
      'Quando o cadastro mencionar apenas soro, manter tubo seco com gel como padrão.'
    ],
    handling: [
      'Separar soro/plasma após centrifugação conforme rotina.',
      'Evitar hemólise e atraso no processamento quando o analito for instável.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  homaPanel: {
    material: 'Glicose e insulina de jejum',
    container: 'Glicose: tubo com fluoreto/oxalato ou rotina aceita pela unidade. Insulina: geralmente soro em tubo seco com gel separador.',
    fleuryNote: 'O índice HOMA é calculado a partir de glicose e insulina; por isso pode envolver materiais diferentes para cada componente.',
    alternatives: [
      'Alguns laboratórios dosam glicose em soro quando o cadastro local permite.',
      'Seguir o pedido e o cadastro da unidade para glicose e insulina coletadas no mesmo horário.'
    ],
    handling: [
      'Garantir jejum e coleta simultânea dos componentes.',
      'Processar glicose sem atraso para evitar consumo celular.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
  ppdIgra: {
    material: 'PPD: não usa tubo de coleta. IGRA: sangue total em tubos próprios do ensaio.',
    container: 'PPD é aplicação intradérmica; IGRA usa kit/tubos específicos fornecidos pelo laboratório.',
    fleuryNote: 'Como o cadastro agrupa PPD e IGRA, o material depende do teste solicitado no pedido médico.',
    handling: [
      'PPD exige aplicação e leitura no prazo definido.',
      'IGRA exige coleta e incubação/processamento conforme kit do laboratório.'
    ],
    sourceLabel: collectionSources.fleuryGeneral,
    sourceUrl: sourceUrls.fleuryGeneral,
  },
};

const profileByExamId = {
  hemograma: materialProfiles.edta,
  plaquetas: materialProfiles.edta,
  leucograma: materialProfiles.edta,
  eritrograma: materialProfiles.edta,
  'falcizacao-hemacias': materialProfiles.edta,
  hba1c: materialProfiles.edta,
  vsh: materialProfiles.edta,
  'magnesio-eritrocitario': materialProfiles.edta,
  glicemia: materialProfiles.fluoride,
  totg: materialProfiles.fluoride,
  bnp: materialProfiles.natriureticPeptides,
  acth: materialProfiles.acth,
  ctx: materialProfiles.serum,
  'celulas-le': materialProfiles.serum,
  coagulograma: materialProfiles.citrate,
  'd-dimero': materialProfiles.citrate,
  'proteina-c-s': materialProfiles.citrate,
  antitrombina: materialProfiles.citrate,
  'antitrombina-iii': materialProfiles.citrate,
  'anticoagulante-lupico': materialProfiles.citrate,
  'antigeno-von-willebrand': materialProfiles.citrate,
  'fator-viii': materialProfiles.citrate,
  'fator-ix': materialProfiles.citrate,
  'eas-urina': materialProfiles.urine,
  urocultura: materialProfiles.urineCulture,
  'porfirinas-urina': materialProfiles.urine,
  'coproporfirina-iii-urina': materialProfiles.urine,
  proteinuria: materialProfiles.urine,
  microalbuminuria: materialProfiles.urine,
  epf: materialProfiles.feces,
  'sangue-oculto': materialProfiles.fecesFresh,
  calprotectina: materialProfiles.fecesFresh,
  'cultura-orofaringe': materialProfiles.swab,
  'cultura-vaginal': materialProfiles.swab,
  'painel-viral-respiratorio': materialProfiles.swab,
  'hpv-pcr-genotipagem': materialProfiles.swab,
  'painel-ist-pcr': materialProfiles.swab,
  'koh-malassezia-leveduras': materialProfiles.swab,
  'citologia-conteudo-folicular': materialProfiles.swab,
  'cultura-fungos-dermatofitos': materialProfiles.swab,
  'cultura-bacteriana-aerobia-anaerobia': materialProfiles.swab,
  'pesquisa-demodex': materialProfiles.swab,
  baar: materialProfiles.sputum,
  'lavado-bronquico': materialProfiles.bronchoalveolar,
  'zinco-selenio': materialProfiles.traceElements,
  mercurio: materialProfiles.heavyMetal,
  cadmio: materialProfiles.heavyMetal,
  estanho: materialProfiles.heavyMetal,
  oxalato: materialProfiles.oxalate,
  lactato: materialProfiles.lactate,
  'gasometria-arterial': materialProfiles.bloodGasArterial,
  'gasometria-venosa': materialProfiles.bloodGasVenous,
  ionograma: materialProfiles.serumOrPlasma,
  'homa-ir-beta': materialProfiles.homaPanel,
  'ldh-dhl': materialProfiles.serumOrPlasma,
  fosforo: materialProfiles.serumOrPlasma,
  'anti-tpo': materialProfiles.serum,
  'anti-tireoglobulina': materialProfiles.serum,
  'porfirinas-plasma': materialProfiles.serum,
  'htlv-anticorpos': materialProfiles.serum,
  'hepatite-e-sorologia': materialProfiles.serum,
  'hsv-sorologia': materialProfiles.serum,
  'anti-mog-cba': materialProfiles.serum,
  shbg: materialProfiles.serum,
  dihidrotestosterona: materialProfiles.serum,
  sdhea: materialProfiles.serum,
  serotonina: materialProfiles.serumOrPlasma,
  'hcv-rna': materialProfiles.serumOrPlasma,
  'bk-virus-pcr': materialProfiles.serumOrPlasma,
  ca153: materialProfiles.serum,
  ca199: materialProfiles.serum,
  fibrinogenio: materialProfiles.citrate,
  'complemento-c3-c4': materialProfiles.serum,
  'vitamina-a': materialProfiles.vitaminProtected,
  'vitamina-b1': materialProfiles.edta,
  'vitamina-b2': materialProfiles.vitaminProtected,
  'vitamina-b3': materialProfiles.vitaminProtected,
  'vitamina-b4': materialProfiles.vitaminProtected,
  'vitamina-b5': materialProfiles.vitaminProtected,
  'vitamina-b6': materialProfiles.vitaminProtected,
  'vitamina-b7': materialProfiles.vitaminProtected,
  'vitamina-b8': materialProfiles.vitaminProtected,
  'vitamina-c': materialProfiles.vitaminC,
  'vitamina-e': materialProfiles.vitaminProtected,
  'vitamina-k': materialProfiles.vitaminProtected,
  calcio: materialProfiles.ionizedCalcium,
  'calcio-ionico': materialProfiles.ionizedCalcium,
  sodio: materialProfiles.serumOrPlasma,
  cloro: materialProfiles.serumOrPlasma,
  bicarbonato: materialProfiles.serumOrPlasma,
  creatinina: materialProfiles.serumOrPlasma,
  ureia: materialProfiles.serumOrPlasma,
  'acido-urico': materialProfiles.serumOrPlasma,
  albumina: materialProfiles.serumOrPlasma,
  'proteinas-totais': materialProfiles.serumOrPlasma,
  ferritina: materialProfiles.serumOrPlasma,
  'ferro-serico': materialProfiles.serumOrPlasma,
  potassio: materialProfiles.potassium,
  homocisteina: materialProfiles.homocysteine,
  anticardiolipina: materialProfiles.serum,
  'hla-b27': materialProfiles.edta,
  mthfr: materialProfiles.edta,
  'fator-v-leiden': materialProfiles.edta,
  'protrombina-mutante': materialProfiles.edta,
  'dpyd-dpd-polimorfismos': materialProfiles.edta,
  mantoux: materialProfiles.ppdIgra,
};

const serumCategoryHints = [
  'hormônios',
  'imunologia',
  'sorologia',
  'infecciosas',
  'bioquímica',
  'função',
  'vitaminas',
  'marcadores',
  'cardiologia',
  'ferro',
  'autoimunidade',
  'coração',
  'músculos',
  'toxicologia',
  'endocrinologia',
  'alergias',
];

export const getCollectionInfo = (exam) => {
  if (profileByExamId[exam.id]) {
    return profileByExamId[exam.id];
  }

  const category = exam.category.toLowerCase();

  if (category.includes('coagulação') || category.includes('trombose')) {
    return materialProfiles.citrate;
  }

  if (category.includes('genética')) {
    return materialProfiles.edta;
  }

  if (category.includes('parasitologia') || category.includes('gastroenterologia')) {
    return materialProfiles.feces;
  }

  if (category.includes('urinálise')) {
    return materialProfiles.urine;
  }

  if (serumCategoryHints.some((hint) => category.includes(hint))) {
    return materialProfiles.serum;
  }

  return {
    ...materialProfiles.serum,
    fleuryNote: 'Material sugerido por família de exame; confirmar sempre no pedido médico e no cadastro atualizado da unidade Fleury.',
  };
};
