import { lessonSchema } from '../src/contracts/learning';

export const muscleNmjLesson = lessonSchema.parse({
  id: 'muscle-nmj',
  revision: 1,
  questionId: 'muscle-nmj-acetylcholine',
  correctOptionId: 'ach-nicotinic-depolarization',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch10-nmj',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-2',
      section: 'Chapter 10 · Muscle Tissue: Skeletal Muscle and Neuromuscular Junction',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Como um impulso elétrico neuronal de milissegundos desencadeia a liberação de cálcio e a contração mecânica do músculo?',
      title: 'Junção neuromuscular e acoplamento excitação-contração',
      description: 'Acompanhe a liberação de acetilcolina, a propagação pelos túbulos T e a liberação de cálcio pelo receptor de rianodina.',
      objective: 'Descrever os passos da transmissão sináptica na placa motora e o papel dos túbulos T, rianodina e SERCA no ciclo do cálcio.',
      stages: [
        {
          id: 'nmj-acetylcholine-release',
          title: 'Transmissão colinérgica na placa motora',
          paragraphs: [
            'O potencial de ação neuronal atinge o botão pré-sináptico e abre canais de Ca2+ voltagem-dependentes, promovendo exocitose de acetilcolina (ACh) na fenda sináptica.',
            'A ACh liga-se a receptores colinérgicos nicotínicos (canais catiônicos) na placa motora terminal, gerando influxo maciço de Na+ que despolariza o sarcolema (potencial de placa motora).',
          ],
          takeaway: 'Acetilcolina ativa receptores nicotínicos, gerando o potencial de ação muscular no sarcolema.',
          diagram: 'sarcomere',
        },
        {
          id: 'ttubule-ryanodine-activation',
          title: 'Túbulos T e receptores de rianodina (RyR1)',
          paragraphs: [
            'O potencial de ação propaga-se pelas invaginações profundas da membrana chamadas túbulos transversos (túbulos T), alcançando as cisternas terminais do retículo sarcoplasmático.',
            'A despolarização do túbulo T ativa sensores de voltagem (receptores de di-hidropiridina / DHPR), que abrem mecanicamente os canais de liberação de cálcio (receptores de rianodina / RyR1) no retículo sarcoplasmático.',
          ],
          takeaway: 'Despolarização dos túbulos T acopla DHPR à rianodina (RyR1), liberando cálcio no sarcoplasma.',
          diagram: 'sarcomere',
        },
        {
          id: 'serca-calcium-reuptake',
          title: 'Ciclagem dos filamentos e relaxamento por SERCA',
          paragraphs: [
            'O cálcio liberado liga-se à troponina C, deslocando a tropomiosina e permitindo que as pontes cruzadas de miosina tracionem a actina com consumo de ATP.',
            'Para cessar a contração e induzir relaxamento, a bomba de Ca2+-ATPase do retículo sarcoplasmático (SERCA) recapta ativamente os íons cálcio de volta às cisternas contra o gradiente de concentração.',
          ],
          takeaway: 'Bomba SERCA transporta ativamente o cálcio de volta ao retículo sarcoplasmático para permitir o relaxamento.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento inicial é desencadeado pela ligação da acetilcolina aos seus receptores nicotínicos na membrana da fibra muscular esquelética?',
        options: [
          {
            id: 'ach-nicotinic-depolarization',
            label: 'Abertura de canais catiônicos com influxo de Na+, deflagrando despolarização do sarcolema',
            explanation: 'Correto: receptores nicotínicos são canais iônicos ativados por ligante. Sua abertura permite influxo líquido de sódio despolarizando o sarcolema até o limiar.',
          },
          {
            id: 'norepinephrine-muscarinic-contraction',
            label: 'Inibição completa da acetilcolinesterase na lâmina basal pós-sináptica',
            explanation: 'Incorreto: a acetilcolinesterase degrada a ACh rapidamente para encerrar o estímulo; ela não é inibida fisiologicamente pela ligação ao receptor.',
          },
          {
            id: 'serca-releases-calcium',
            label: 'Inversão da bomba SERCA expelindo todo o cálcio sarcoplasmático para fora da célula',
            explanation: 'Incorreto: a bomba SERCA bombeia cálcio de volta para dentro do lúmen do retículo sarcoplasmático para propiciar o relaxamento, não para fora da célula.',
          },
          {
            id: 'ryanodine-hydrolyzes-atp',
            label: 'Fechamento mecânico irreversível dos canais de rianodina com retenção permanente de cálcio',
            explanation: 'Incorreto: os receptores de rianodina abrem-se após estimulação pelo DHPR, liberando cálcio estocado no citosol para iniciar a contração.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'How does a millisecond electrical nerve impulse trigger massive calcium release and forceful mechanical muscle contraction?',
      title: 'Neuromuscular junction and excitation-contraction coupling',
      description: 'Follow acetylcholine release, T-tubule action potential propagation, and calcium release through ryanodine channels.',
      objective: 'Describe the steps of motor end-plate synaptic transmission and the roles of T-tubules, ryanodine receptors, and SERCA in calcium cycling.',
      stages: [
        {
          id: 'nmj-acetylcholine-release',
          title: 'Cholinergic transmission at the motor end-plate',
          paragraphs: [
            'The nerve action potential invades the axon terminal, opening voltage-gated Ca2+ channels and causing exocytosis of acetylcholine (ACh) into the synaptic cleft.',
            'ACh binds nicotinic acetylcholine receptor-channels on the muscle end-plate, triggering substantial Na+ influx that depolarizes the sarcolemma (end-plate potential).',
          ],
          takeaway: 'Acetylcholine binds nicotinic receptors, initiating a propagating muscle action potential.',
          diagram: 'sarcomere',
        },
        {
          id: 'ttubule-ryanodine-activation',
          title: 'T-tubules and ryanodine receptors (RyR1)',
          paragraphs: [
            'The muscle action potential travels down transverse tubules (T-tubules), carrying the electrical signal deep into the interior of the muscle fiber.',
            'T-tubule depolarization activates voltage-sensing dihydropyridine receptors (DHPR), which mechanically pull open ryanodine receptor (RyR1) calcium channels in the adjacent sarcoplasmic reticulum terminal cisternae.',
          ],
          takeaway: 'T-tubule depolarization couples DHPR sensors to ryanodine (RyR1) channels, flooding the sarcoplasm with Ca2+.',
          diagram: 'sarcomere',
        },
        {
          id: 'serca-calcium-reuptake',
          title: 'Cross-bridge cycling and relaxation via SERCA',
          paragraphs: [
            'Cytosolic calcium binds troponin C, shifting tropomyosin away from actin binding sites so energized myosin heads pull actin filaments using ATP.',
            'To terminate contraction and allow muscle relaxation, the sarcoplasmic/endoplasmic reticulum Ca2+-ATPase (SERCA) actively pumps calcium back into the sarcoplasmic reticulum against its concentration gradient.',
          ],
          takeaway: 'SERCA pumps actively reclaim calcium into the sarcoplasmic reticulum to allow relaxation.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which primary event is directly triggered when acetylcholine binds to nicotinic receptors at the skeletal muscle motor end-plate?',
        options: [
          {
            id: 'ach-nicotinic-depolarization',
            label: 'Opening of ligand-gated cation channels with Na+ influx, depolarizing the sarcolemma',
            explanation: 'Correct: nicotinic receptors are ligand-gated ion channels whose opening permits rapid Na+ entry, producing the end-plate potential that fires an action potential.',
          },
          {
            id: 'norepinephrine-muscarinic-contraction',
            label: 'Total permanent inhibition of acetylcholinesterase within the synaptic cleft',
            explanation: 'Incorrect: acetylcholinesterase rapidly hydrolyzes acetylcholine to terminate the signal; it is not physiologically inhibited by receptor binding.',
          },
          {
            id: 'serca-releases-calcium',
            label: 'Reversal of SERCA pumps pumping all sarcoplasmic calcium into the extracellular fluid',
            explanation: 'Incorrect: SERCA pumps calcium from the myoplasm back into the sarcoplasmic reticulum lumen to induce muscle relaxation.',
          },
          {
            id: 'ryanodine-hydrolyzes-atp',
            label: 'Irreversible mechanical closure of ryanodine channels locking calcium inside cisternae',
            explanation: 'Incorrect: ryanodine receptors open in response to DHPR activation, discharging calcium into the cytoplasm to start contraction.',
          },
        ],
      },
    },
  },
});

export const muscleFiberTypesLesson = lessonSchema.parse({
  id: 'muscle-fiber-types',
  revision: 1,
  questionId: 'muscle-fiber-oxidative',
  correctOptionId: 'type-i-oxidative-myoglobin',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch10-fiber-types',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-5',
      section: 'Chapter 10 · Muscle Tissue: Types of Muscle Fibers',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Por que os músculos posturais do dorso conseguem ficar contraídos o dia todo sem fadigar, enquanto as pernas de um velocista entram em colapso após 100 metros?',
      title: 'Tipos de fibras musculares e bioenergética',
      description: 'Compare fibras tipo I (lentas oxidativas) e fibras tipo II (rápidas glicolíticas) e analise os sistemas energéticos de ATP.',
      objective: 'Diferenciar fibras musculares tipo I e tipo II quanto à velocidade de contração, conteúdo de mioglobina, densidade mitocondrial e via energética predominante.',
      stages: [
        {
          id: 'type-i-slow-twitch',
          title: 'Fibras tipo I: contração lenta e aeróbica',
          paragraphs: [
            'As fibras musculares esqueléticas do tipo I (vermelhas ou de contração lenta) possuem rica densidade de mitocôndrias, densa rede de capilares e altas concentrações de mioglobina transportadora de oxigênio.',
            'Elas utilizam predominantemente a fosforilação oxidativa de ácidos graxos e glicose para gerar ATP de forma contínua, conferindo extraordinária resistência à fadiga em músculos posturais.',
          ],
          takeaway: 'Fibras tipo I = lentas, ricas em mioglobina e mitocôndrias, resistentes à fadiga (oxidativas).',
          diagram: 'sarcomere',
        },
        {
          id: 'type-ii-fast-glycolytic',
          title: 'Fibras tipo II: contração rápida e anaeróbica',
          paragraphs: [
            'As fibras do tipo II (especialmente IIb/IIx, brancas ou de contração rápida) possuem miosina com atividade ATPase veloz e retículo sarcoplasmático volumoso para liberação rápida de cálcio.',
            'Possuem menor conteúdo de mioglobina e mitocôndrias, dependendo fundamentalmente da glicólise anaeróbica a partir de estoques de glicogênio. Geram grande força explosiva, mas fadigam rapidamente pelo acúmulo de subprodutos ácidos.',
          ],
          takeaway: 'Fibras tipo II = rápidas, glicolíticas, alta velocidade de contração e rápida fadiga.',
          diagram: 'sarcomere',
        },
        {
          id: 'phosphocreatine-bioenergetics',
          title: 'Bioenergética: sistema fosfocreatina e vias metabólicas',
          paragraphs: [
            'O ATP intracelular livre dura apenas 1 a 2 segundos de contração máxima. O sistema da fosfocreatina (creatina-fosfato) atua como reservatório imediato, doando seu fosfato ao ADP via creatina quinase (CK) para regenerar ATP nos primeiros 5 a 10 segundos.',
            'Após esse período imediato, a glicólise anaeróbica assume a produção rápida e, a seguir, a fosforilação oxidativa aeróbica sustenta exercícios prolongados.',
          ],
          takeaway: 'Fosfocreatina regenera ATP imediatamente (5–10s) antes da ativação plena das vias glicolítica e oxidativa.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais características bioquímicas e funcionais definem as fibras musculares esqueléticas do tipo I (lentas)?',
        options: [
          {
            id: 'type-i-oxidative-myoglobin',
            label: 'Alta densidade mitocondrial, abundante mioglobina, metabolismo aeróbico e alta resistência à fadiga',
            explanation: 'Correto: as fibras tipo I são vermelhas devido à abundante mioglobina e capilares, gerando ATP eficientemente por fosforilação oxidativa para sustentação postural prolongada.',
          },
          {
            id: 'type-ii-aerobic-endurance',
            label: 'Baixo teor de citocromos, rápida ATPase da miosina e fadiga muscular em menos de um minuto',
            explanation: 'Incorreto: contração veloz e fadiga rápida em menos de um minuto caracterizam fibras glicolíticas rápidas do tipo II.',
          },
          {
            id: 'phosphocreatine-glycolytic-storage',
            label: 'Ausência total de vascularização capilar com sustentação energética exclusiva por corpos cetônicos',
            explanation: 'Incorreto: todos os tecidos musculares recebem perfusão capilar; fibras tipo I têm justamente a maior densidade capilar tecidual.',
          },
          {
            id: 'type-i-rapid-atpase-fatigue',
            label: 'Capacidade glicolítica extrema com dependência única do sistema de lactato plasmático',
            explanation: 'Incorreto: a dependência de glicólise anaeróbica e produção de lactato é típica das fibras tipo IIb/IIx em alta intensidade.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'Why can postural back muscles maintain tension all day without tiring, while a sprinter’s quadriceps fatigue in seconds?',
      title: 'Muscle fiber types and bioenergetics',
      description: 'Compare type I (slow oxidative) and type II (fast glycolytic) muscle fibers and examine cellular ATP energy systems.',
      objective: 'Distinguish type I and type II skeletal muscle fibers regarding contraction velocity, myoglobin content, mitochondrial density, and primary metabolic pathway.',
      stages: [
        {
          id: 'type-i-slow-twitch',
          title: 'Type I fibers: slow-twitch and oxidative',
          paragraphs: [
            'Type I skeletal muscle fibers (red or slow-twitch) possess abundant mitochondria, a dense surrounding capillary bed, and high levels of oxygen-binding myoglobin.',
            'They rely primarily on aerobic oxidative phosphorylation of fatty acids and glucose to continuously supply ATP, imparting extraordinary fatigue resistance ideal for postural endurance.',
          ],
          takeaway: 'Type I = slow-twitch, rich in myoglobin and mitochondria, highly fatigue-resistant (oxidative).',
          diagram: 'sarcomere',
        },
        {
          id: 'type-ii-fast-glycolytic',
          title: 'Type II fibers: fast-twitch and glycolytic',
          paragraphs: [
            'Type II fibers (particularly IIb/IIx, white or fast-twitch) express myosin isoforms with high ATPase activity and an extensive sarcoplasmic reticulum for rapid Ca2+ release.',
            'Having fewer mitochondria and less myoglobin, they depend primarily on anaerobic glycolysis from stored glycogen, producing explosive short bursts of power with rapid fatigue.',
          ],
          takeaway: 'Type II = fast-twitch, glycolytic, rapid shortening velocity, rapid fatigue.',
          diagram: 'sarcomere',
        },
        {
          id: 'phosphocreatine-bioenergetics',
          title: 'Bioenergetics: phosphocreatine and metabolic pacing',
          paragraphs: [
            'Pre-existing free cellular ATP lasts for only 1 to 2 seconds of maximal contraction. The phosphocreatine (creatine phosphate) buffer donates its high-energy phosphate to ADP via creatine kinase (CK) to replenish ATP during the initial 5 to 10 seconds.',
            'Following this immediate buffering phase, anaerobic glycolysis accelerates, and subsequently mitochondrial oxidative phosphorylation sustains protracted exercise.',
          ],
          takeaway: 'Phosphocreatine buffers ATP instantly (5–10s) before glycolysis and aerobic respiration ramp up.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which biochemical and physiological hallmarks characterize type I (slow-twitch) skeletal muscle fibers?',
        options: [
          {
            id: 'type-i-oxidative-myoglobin',
            label: 'High mitochondrial density, abundant myoglobin, aerobic metabolism, and high fatigue resistance',
            explanation: 'Correct: type I fibers appear red because of rich myoglobin and capillary networks, synthesizing ATP through oxidative phosphorylation for long postural contractions.',
          },
          {
            id: 'type-ii-aerobic-endurance',
            label: 'Low cytochrome levels, fast myosin ATPase, and rapid fatigue within seconds of activity',
            explanation: 'Incorrect: fast shortening velocity and early onset of fatigue describe type II fast-twitch glycolytic fibers.',
          },
          {
            id: 'phosphocreatine-glycolytic-storage',
            label: 'Complete absence of capillary beds with exclusive metabolic fueling by circulating ketone bodies',
            explanation: 'Incorrect: skeletal muscle is richly vascularized; type I fibers have the highest microvascular capillary density.',
          },
          {
            id: 'type-i-rapid-atpase-fatigue',
            label: 'Predominantly anaerobic glycolytic capacity with absolute dependence on high-output lactate production',
            explanation: 'Incorrect: anaerobic glycolytic reliance and extensive lactate accumulation are hallmarks of type IIb/IIx fibers.',
          },
        ],
      },
    },
  },
});

export const muscleCardiacLesson = lessonSchema.parse({
  id: 'muscle-cardiac',
  revision: 1,
  questionId: 'muscle-cardiac-syncytium',
  correctOptionId: 'gap-junctions-functional-syncytium',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch19-cardiac-muscle',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-2',
      section: 'Chapter 19 · The Cardiovascular System: Heart - Cardiac Muscle and Electrical Activity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Como bilhões de células cardíacas conseguem contrair exatamente juntas a cada batimento sem se desorganizarem em tetania?',
      title: 'Fisiologia do músculo cardíaco: sincício e liberação de cálcio',
      description: 'Analise os discos intercalares, o potencial de ação com fase de platô e o mecanismo de liberação de cálcio induzida por cálcio (CICR).',
      objective: 'Explicar como as junções comunicantes criam um sincício funcional, a importância do período refratário longo e o papel do CICR na contratilidade cardíaca.',
      stages: [
        {
          id: 'intercalated-discs-syncytium',
          title: 'Discos intercalares e sincício funcional',
          paragraphs: [
            'Os cardiomiócitos são células estriadas ramificadas unidas topo a topo por discos intercalares especializados.',
            'Nos discos intercalares, os desmossomos ancoram fisicamente as células contra as forças mecânicas da sístole, enquanto as junções comunicantes (gap junctions) permitem passagem livre de íons, propagando o potencial de ação instantaneamente como um sincício funcional.',
          ],
          takeaway: 'Junções comunicantes propagam a corrente elétrica diretamente entre cardiomiócitos vizinhos.',
          diagram: 'sarcomere',
        },
        {
          id: 'action-potential-plateau',
          title: 'Potencial de ação com fase de platô e refratariedade',
          paragraphs: [
            'O potencial de ação dos cardiomiócitos ventriculares exibe uma fase de platô prolongada (fase 2) de 200 a 300 ms sustentada pela abertura de canais lentos de Ca2+ do tipo L.',
            'Esse longo influxo mantém a célula despolarizada e estende o período refratário absoluto, impedindo a ocorrência de contrações tetânicas sustentadas e garantindo tempo para o enchimento ventricular diastólico.',
          ],
          takeaway: 'Platô por influxo de Ca2+ gera período refratário longo, prevenindo a tetania no coração.',
          diagram: 'sarcomere',
        },
        {
          id: 'calcium-induced-calcium-release',
          title: 'Liberação de cálcio induzida por cálcio (CICR)',
          paragraphs: [
            'Durante a fase de platô, o Ca2+ que entra pelos canais tipo L atua como gatilho químico, ligando-se aos receptores de rianodina cardíacos (RyR2) no retículo sarcoplasmático.',
            'Essa ativação dispara a liberação maciça de Ca2+ estocado (processo denominado liberação de cálcio induzida por cálcio - CICR), que fornece a maior parte do cálcio para a sístole mecânica.',
          ],
          takeaway: 'CICR: pequeno influxo de cálcio extracelular via canais tipo L dispara grande liberação intracelular de cálcio pelo RyR2.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual estrutura dos discos intercalares permite que o miocárdio atue eletricamente como um sincício funcional coordenado?',
        options: [
          {
            id: 'gap-junctions-functional-syncytium',
            label: 'Junções comunicantes (gap junctions), que possibilitam o fluxo iônico direto entre cardiomiócitos adjacentes',
            explanation: 'Correto: junções comunicantes compostas por conexinas formam canais iônicos de baixa resistência elétrica unindo os citoplasmas, permitindo a despolarização sincrônica do miocárdio.',
          },
          {
            id: 'cardiac-tetanic-summation',
            label: 'Placas motoras colinérgicas distribuídas individualmente em cada cardiomiócito ventricular',
            explanation: 'Incorreto: o músculo cardíaco não possui junções neuromusculares individuais para cada célula; o sinal propaga-se de célula a célula pelas junções gap.',
          },
          {
            id: 'l-type-efflux-repolarization',
            label: 'Bainha de mielina contínua isolando eletricamente cada fibra miocárdica atrial',
            explanation: 'Incorreto: a mielinização é exclusiva de axônios do sistema nervoso, não existindo sobre fibras musculares cardíacas.',
          },
          {
            id: 'isolated-cells-independent',
            label: 'Fáscias aderentes impermeáveis a íons que forçam sinapses químicas em cada sarcômero',
            explanation: 'Incorreto: as fáscias de adesão e desmossomos garantem coesão mecânica, enquanto o acoplamento elétrico é realizado pelas junções comunicantes permeáveis a íons.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'How can billions of individual cardiac muscle cells contract in coordinated synchrony with every single heartbeat without seizing into tetany?',
      title: 'Cardiac muscle physiology: syncytium and calcium release',
      description: 'Explore intercalated discs, the plateau phase action potential, and calcium-induced calcium release (CICR).',
      objective: 'Explain how gap junctions create a functional syncytium, the protective value of a prolonged refractory period, and the role of CICR in cardiac contractility.',
      stages: [
        {
          id: 'intercalated-discs-syncytium',
          title: 'Intercalated discs and the functional syncytium',
          paragraphs: [
            'Cardiomyocytes are branched striated cells anchored end-to-end at specialized junctional complexes termed intercalated discs.',
            'Within the discs, desmosomes mechanically bond adjacent cells against systolic shear forces, while gap junctions allow rapid passage of depolarizing ions from cell to cell, transforming the myocardium into a functional syncytium.',
          ],
          takeaway: 'Gap junctions permit direct ionic transfer between adjacent cardiomyocytes, coordinating electrical activation.',
          diagram: 'sarcomere',
        },
        {
          id: 'action-potential-plateau',
          title: 'Action potential plateau and the refractory period',
          paragraphs: [
            'Ventricular cardiomyocyte action potentials feature a prolonged plateau phase (phase 2) lasting 200–300 ms, sustained by inward Ca2+ current through L-type channels.',
            'This prolonged depolarization creates a long absolute refractory period, preventing tetanic summation of contractions and ensuring vital time for ventricular diastolic filling.',
          ],
          takeaway: 'Plateau Ca2+ influx extends the refractory period, protecting the heart from fatal tetanic spasm.',
          diagram: 'sarcomere',
        },
        {
          id: 'calcium-induced-calcium-release',
          title: 'Calcium-induced calcium release (CICR)',
          paragraphs: [
            'During the plateau phase, the trigger calcium entering via sarcolemmal L-type channels binds directly to cardiac ryanodine receptors (RyR2) in the sarcoplasmic reticulum.',
            'This binding triggers a massive efflux of stored intracellular calcium (calcium-induced calcium release, or CICR), supplying the bulk of Ca2+ required for systolic cross-bridge force generation.',
          ],
          takeaway: 'CICR: trigger calcium entering via L-type channels stimulates massive intracellular Ca2+ release via RyR2.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which specialized structure within intercalated discs allows the myocardium to operate electrically as a coordinated functional syncytium?',
        options: [
          {
            id: 'gap-junctions-functional-syncytium',
            label: 'Gap junctions, allowing direct bidirectional ionic currents between adjacent cardiomyocytes',
            explanation: 'Correct: connexin gap junctions form low-resistance aqueous channels between adjacent myocyte interiors, allowing electrotonic action potential propagation across the chambers.',
          },
          {
            id: 'cardiac-tetanic-summation',
            label: 'Discrete somatic neuromuscular end-plates synapsing individually onto every ventricular cell',
            explanation: 'Incorrect: cardiomyocytes are not stimulated by individual somatic motor end-plates; excitation spreads from cell to cell through gap junctions.',
          },
          {
            id: 'l-type-efflux-repolarization',
            label: 'Continuous myelin sheaths insulating individual atrial and ventricular myofilaments',
            explanation: 'Incorrect: myelin sheaths belong to nerve axons and are not present on cardiomyocyte sarcolemma.',
          },
          {
            id: 'isolated-cells-independent',
            label: 'Impermeable fasciae adherentes that force chemical neurotransmitter release across each sarcomere',
            explanation: 'Incorrect: fascia adherens junctions provide tensile mechanical attachment, while gap junctions conduct the ionic electrical current.',
          },
        ],
      },
    },
  },
});

export const muscleSmoothLesson = lessonSchema.parse({
  id: 'muscle-smooth',
  revision: 1,
  questionId: 'muscle-smooth-calmodulin',
  correctOptionId: 'calmodulin-mlck-activation',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch10-smooth-muscle',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-8',
      section: 'Chapter 10 · Muscle Tissue: Smooth Muscle',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Como as artérias e as vísceras conseguem manter contração firme durante horas com consumo mínimo de ATP sem terem estrias?',
      title: 'Fisiologia do músculo liso: regulação por calmodulina e MLCK',
      description: 'Explore a estrutura não estriada do músculo liso, a ausência de troponina, a ativação da MLCK e o estado de trava (latch-state).',
      objective: 'Explicar a regulação da contração do músculo liso pelo complexo Ca2+-calmodulina e fosforilação da miosina via MLCK, contrastando com o músculo estriado.',
      stages: [
        {
          id: 'smooth-muscle-architecture',
          title: 'Organização não estriada e ausência de troponina',
          paragraphs: [
            'O músculo liso é composto por células fusiformes uninucleadas destituídas de sarcômeros alinhados ou estriações transversais visíveis.',
            'Os filamentos de actina e miosina dispõem-se diagonalmente ancorados a corpos densos (equivalentes às linhas Z). Fundamentalmente, o músculo liso não possui troponina, utilizando um mecanismo regulatório distinto para a interação actina-miosina.',
          ],
          takeaway: 'Músculo liso não tem sarcômeros estriados nem troponina; filamentos ancoram em corpos densos.',
          diagram: 'sarcomere',
        },
        {
          id: 'calcium-calmodulin-mlck',
          title: 'Complexo Ca2+-calmodulina e fosforilação da miosina',
          paragraphs: [
            'Quando a concentração citoplasmática de cálcio se eleva (por influxo extracelular ou liberação pelo retículo), quatro íons Ca2+ ligam-se à proteína regulatória calmodulina.',
            'O complexo Ca2+-calmodulina ativa a enzima quinase da cadeia leve da miosina (MLCK). A MLCK ativada fosforila a cadeia leve da miosina, permitindo que a cabeça da miosina se ligue à actina e inicie os ciclos de contração.',
          ],
          takeaway: 'Ca2+ + calmodulina ativam a MLCK → fosforilação da miosina inicia a contração.',
          diagram: 'sarcomere',
        },
        {
          id: 'latch-state-and-tone',
          title: 'Relaxamento por MLCP e estado de trava (latch-state)',
          paragraphs: [
            'O relaxamento ocorre quando o cálcio citosólico é removido e a fosfatase da cadeia leve da miosina (MLCP) desfosforila a miosina.',
            'No entanto, cabeças de miosina desfosforiladas ainda podem permanecer ancoradas à actina por longos períodos (estado de trava ou latch-state), mantendo tônus vascular e visceral sustentado com gasto insignificante de ATP.',
          ],
          takeaway: 'Estado de trava (latch) mantém contração tônica prolongada com baixíssimo consumo energético.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Como os íons cálcio iniciam a contração celular no músculo liso na ausência completa de troponina?',
        options: [
          {
            id: 'calmodulin-mlck-activation',
            label: 'O Ca2+ liga-se à calmodulina ativando a MLCK, que fosforila a cadeia leve da miosina',
            explanation: 'Correto: sem troponina, o cálcio interage com a calmodulina intracelular para formar o complexo que ativa a enzima MLCK, cuja fosforilação da miosina deflagra a interação com a actina.',
          },
          {
            id: 'troponin-c-calcium-binding',
            label: 'O Ca2+ liga-se à troponina C deslocando mecanicamente os filamentos de tropomiosina',
            explanation: 'Incorreto: o músculo liso não possui o complexo de troponina; esse mecanismo é exclusivo do músculo estriado esquelético e cardíaco.',
          },
          {
            id: 'sarcomere-striated-shortening',
            label: 'O influxo de Ca2+ encurta diretamente as linhas Z dos sarcômeros estriados subjacentes',
            explanation: 'Incorreto: o músculo liso não possui sarcômeros estriados nem linhas Z clássicas; os filamentos ancoram-se em corpos densos.',
          },
          {
            id: 'rapid-fatigue-high-atp',
            label: 'A hidrólise anaeróbica maciça de fosfocreatina consome ATP antes da abertura de canais iônicos',
            explanation: 'Incorreto: o músculo liso consome pouquíssimo ATP em comparação ao músculo esquelético, sustentando tônus sem fadiga.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'How can visceral organs and blood vessel walls maintain steady contractile tone for hours using negligible ATP without sarcomere striations?',
      title: 'Smooth muscle physiology: regulation by calmodulin and MLCK',
      description: 'Explore smooth muscle non-striated architecture, the lack of troponin, MLCK activation, and the energy-sparing latch-state.',
      objective: 'Explain the regulation of smooth muscle contraction by the Ca2+-calmodulin complex and myosin phosphorylation via MLCK in contrast to striated muscle.',
      stages: [
        {
          id: 'smooth-muscle-architecture',
          title: 'Non-striated architecture and absence of troponin',
          paragraphs: [
            'Smooth muscle consists of spindle-shaped mononucleated cells that lack repeating sarcomeric banding or visible microscopic striations.',
            'Actin and myosin filaments crisscross the cytoplasm in a diagonal lattice tethered to dense bodies (functionally analogous to Z-discs). Crucially, smooth muscle completely lacks troponin, relying on a distinct enzymatic cascade to permit cross-bridge interaction.',
          ],
          takeaway: 'Smooth muscle lacks striated sarcomeres and troponin; contractile filaments anchor into dense bodies.',
          diagram: 'sarcomere',
        },
        {
          id: 'calcium-calmodulin-mlck',
          title: 'Ca2+-calmodulin complex and myosin phosphorylation',
          paragraphs: [
            'When cytosolic calcium rises (through extracellular influx or sarcoplasmic release), four Ca2+ ions bind to the regulatory protein calmodulin.',
            'The Ca2+-calmodulin complex binds and activates myosin light-chain kinase (MLCK). Active MLCK phosphorylates the regulatory light chain of myosin, energizing the myosin head to bind actin and begin cross-bridge cycling.',
          ],
          takeaway: 'Ca2+ + calmodulin activate MLCK → myosin light chain phosphorylation initiates contraction.',
          diagram: 'sarcomere',
        },
        {
          id: 'latch-state-and-tone',
          title: 'Dephosphorylation by MLCP and the latch-state',
          paragraphs: [
            'Relaxation ensues when cytoplasmic calcium falls and myosin light-chain phosphatase (MLCP) dephosphorylates myosin.',
            'However, dephosphorylated myosin heads can remain tethered to actin with very slow detachment kinetics (the latch-state), sustaining high isometric vascular and visceral tone with minimal ATP consumption.',
          ],
          takeaway: 'The latch-state maintains sustained isometric tension with exceptionally low ATP expenditure.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'How do calcium ions trigger contractile activation in smooth muscle cells despite the complete absence of troponin?',
        options: [
          {
            id: 'calmodulin-mlck-activation',
            label: 'Ca2+ binds calmodulin to activate MLCK, which phosphorylates the regulatory myosin light chain',
            explanation: 'Correct: lacking troponin, smooth muscle uses calmodulin as its Ca2+ sensor to activate myosin light-chain kinase (MLCK), which phosphorylates myosin to initiate actin interaction.',
          },
          {
            id: 'troponin-c-calcium-binding',
            label: 'Ca2+ binds troponin C to displace steric tropomyosin blocks across striated sarcomeres',
            explanation: 'Incorrect: smooth muscle lacks troponin; this steric mechanism operates exclusively in striated skeletal and cardiac muscle.',
          },
          {
            id: 'sarcomere-striated-shortening',
            label: 'Ca2+ influx drives immediate linear shortening of microscopic Z-discs within sarcomeric bands',
            explanation: 'Incorrect: smooth muscle cells do not contain sarcomeres or Z-discs; actin filaments insert into dense bodies.',
          },
          {
            id: 'rapid-fatigue-high-atp',
            label: 'Massive phosphocreatine breakdown depletes ATP pools prior to opening voltage-gated channels',
            explanation: 'Incorrect: smooth muscle consumes very small quantities of ATP compared to skeletal muscle, maintaining tone without fatigue.',
          },
        ],
      },
    },
  },
});
