import { lessonSchema } from '../src/contracts/learning';

export const neuroSynapseLesson = lessonSchema.parse({
  id: 'neuro-synapse',
  revision: 1,
  questionId: 'neuro-synapse-calcium',
  correctOptionId: 'calcium-influx-exocytosis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch12-synapse',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons',
      section: 'Chapter 12 · Communication Between Neurons',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Como um sinal puramente elétrico se transforma em mensageiro químico em uma fração de milissegundo?',
      title: 'Transmissão sináptica e potenciais pós-sinápticos',
      description: 'Entenda como o influxo de cálcio pré-sináptico comanda a exocitose de neurotransmissores e a formação de PEPS e PIPS.',
      objective: 'Descrever o papel do cálcio na exocitose de neurotransmissores e diferenciar potenciais pós-sinápticos excitatórios e inibitórios.',
      stages: [
        {
          id: 'action-potential-calcium-entry',
          title: 'A chegada do potencial e o influxo de cálcio',
          paragraphs: [
            'Quando o potencial de ação alcança o terminal axônico pré-sináptico, a despolarização da membrana abre canais de Ca²⁺ dependentes de voltagem.',
            'O influxo rápido de íons cálcio a favor de seu enorme gradiente eletroquímico eleva bruscamente a concentração citoplasmática local de Ca²⁺.',
          ],
          takeaway: 'A despolarização do terminal pré-sináptico abre canais de Ca²⁺ dependentes de voltagem.',
          diagram: 'neuron',
        },
        {
          id: 'snare-fusion-exocytosis',
          title: 'Proteínas SNARE e liberação quântica',
          paragraphs: [
            'O cálcio liga-se à sinaptotagmina, ativando o complexo proteico SNARE (sinaptobrevina, sintaxina e SNAP-25).',
            'Isso força a fusão das vesículas sinápticas com a membrana plasmática, liberando neurotransmissores por exocitose na fenda sináptica de forma quântica.',
          ],
          takeaway: 'O complexo SNARE ativado pelo cálcio promove a fusão vesicular e a exocitose do neurotransmissor.',
          diagram: 'neuron',
        },
        {
          id: 'epsp-ipsp-generation',
          title: 'PEPS versus PIPS na membrana pós-sináptica',
          paragraphs: [
            'Neurotransmissores excitatórios (como glutamato) abrem canais de cátions (Na+ e Ca²⁺), gerando potenciais excitatórios pós-sinápticos (PEPS) despolarizantes.',
            'Neurotransmissores inibitórios (como GABA e glicina) abrem canais de Cl- ou K+, gerando potenciais inibitórios pós-sinápticos (PIPS) hiperpolarizantes que afastam o neurônio do limiar de disparo.',
          ],
          takeaway: 'PEPS aproximam a membrana do limiar (despolarização), enquanto PIPS a afastam do limiar (hiperpolarização).',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento no terminal pré-sináptico desencadeia diretamente a exocitose das vesículas contendo neurotransmissores?',
        options: [
          {
            id: 'calcium-influx-exocytosis',
            label: 'Influxo de íons Ca²⁺ através de canais dependentes de voltagem abertos pela despolarização',
            explanation: 'Correto: a entrada de cálcio no terminal axonal ativa a maquinaria SNARE/sinaptotagmina que induz a fusão vesicular e exocitose.',
          },
          {
            id: 'potassium-influx',
            label: 'Influxo maciço de potássio que hiperpolariza a terminação pré-sináptica',
            explanation: 'Incorreto: o efluxo de potássio repolariza o neurônio, mas não dispara a liberação de neurotransmissores.',
          },
          {
            id: 'sodium-efflux',
            label: 'Efluxo ativo de sódio pela bomba eletrogênica Na+/K+-ATPase',
            explanation: 'Incorreto: a bomba Na+/K+ consome ATP para manter gradientes basais de longo prazo, não para disparar exocitose vesicular aguda.',
          },
          {
            id: 'chloride-exocytosis',
            label: 'Entrada passiva de cloreto que neutraliza o conteúdo ácido intravesicular',
            explanation: 'Incorreto: a entrada de cloreto medeia efeitos inibitórios pós-sinápticos, sem relação com a fusão vesicular pré-sináptica.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'How does a purely electrical spike convert into a chemical messenger in a fraction of a millisecond?',
      title: 'Synaptic transmission and postsynaptic potentials',
      description: 'Understand how presynaptic calcium influx triggers neurotransmitter exocytosis and the generation of EPSPs and IPSPs.',
      objective: 'Describe the role of calcium in neurotransmitter exocytosis and differentiate excitatory and inhibitory postsynaptic potentials.',
      stages: [
        {
          id: 'action-potential-calcium-entry',
          title: 'Action potential arrival and calcium influx',
          paragraphs: [
            'When an action potential invades the presynaptic axon terminal, membrane depolarization triggers the opening of voltage-gated Ca²⁺ channels.',
            'The rapid influx of calcium down its steep electrochemical gradient abruptly drives up local cytoplasmic Ca²⁺ concentrations.',
          ],
          takeaway: 'Depolarization of the presynaptic terminal opens voltage-gated Ca²⁺ channels.',
          diagram: 'neuron',
        },
        {
          id: 'snare-fusion-exocytosis',
          title: 'SNARE proteins and quantal release',
          paragraphs: [
            'Calcium binds to synaptotagmin, triggering conformational changes in the SNARE core complex (synaptobrevin, syntaxin, and SNAP-25).',
            'This mechanical pull forces synaptic vesicles to fuse with the presynaptic plasma membrane, releasing neurotransmitters by exocytosis into the synaptic cleft.',
          ],
          takeaway: 'The calcium-activated SNARE complex mediates vesicle fusion and neurotransmitter exocytosis.',
          diagram: 'neuron',
        },
        {
          id: 'epsp-ipsp-generation',
          title: 'EPSPs versus IPSPs in the postsynaptic membrane',
          paragraphs: [
            'Excitatory transmitters (e.g., glutamate) open cation channels (Na+ and Ca²⁺), yielding depolarizing excitatory postsynaptic potentials (EPSPs).',
            'Inhibitory transmitters (e.g., GABA and glycine) open Cl- or K+ channels, producing hyperpolarizing inhibitory postsynaptic potentials (IPSPs) that steer the membrane away from threshold.',
          ],
          takeaway: 'EPSPs shift membrane potential toward threshold (depolarization), while IPSPs drive it away (hyperpolarization).',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which event in the presynaptic terminal directly triggers the exocytosis of neurotransmitter-containing vesicles?',
        options: [
          {
            id: 'calcium-influx-exocytosis',
            label: 'Influx of Ca²⁺ ions through voltage-gated channels opened by terminal depolarization',
            explanation: 'Correct: calcium entry into the axon terminal binds synaptotagmin and activates SNARE machinery to drive vesicle fusion and exocytosis.',
          },
          {
            id: 'potassium-influx',
            label: 'Massive potassium influx that hyperpolarizes the presynaptic terminal',
            explanation: 'Incorrect: potassium efflux repolarizes the membrane; potassium influx does not trigger neurotransmitter release.',
          },
          {
            id: 'sodium-efflux',
            label: 'Active sodium efflux through the electrogenic Na+/K+-ATPase pump',
            explanation: 'Incorrect: the Na+/K+ pump restores steady-state ion gradients, but does not drive acute synaptic vesicle fusion.',
          },
          {
            id: 'chloride-exocytosis',
            label: 'Passive chloride influx that neutralizes intravesicular acidic stores',
            explanation: 'Incorrect: chloride influx mediates postsynaptic inhibition (IPSPs), not presynaptic vesicle exocytosis.',
          },
        ],
      },
    },
  },
});

export const neuroSomatosensoryLesson = lessonSchema.parse({
  id: 'neuro-somatosensory',
  revision: 1,
  questionId: 'neuro-somatosensory-tracts',
  correctOptionId: 'dorsal-column-vs-spinothalamic',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch14-somatosensory',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-2-central-processing',
      section: 'Chapter 14 · Sensory Perception and Ascending Pathways',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Como o cérebro sabe exatamente onde uma agulha espetou ou qual a posição exata do seu dedão no escuro?',
      title: 'Vias somatossensoriais: lemnisco medial e trato espinotalâmico',
      description: 'Compare as vias da coluna dorsal-lemnisco medial (tato discriminativo e propriocepção) e do trato espinotalâmico (dor e temperatura).',
      objective: 'Distinguir a anatomia, o local de decussação e as modalidades sensoriais das principais vias somatossensoriais ascendentes.',
      stages: [
        {
          id: 'somatosensory-modalities',
          title: 'Modalidades táteis e proprioceptivas',
          paragraphs: [
            'A sensibilidade somática corporal é dividida em modalidades epicríticas (tato fino discriminativo, vibração e propriocepção consciente) e protopáticas (dor, temperatura e tato grosseiro).',
            'Cada modalidade é captada por receptores específicos e conduzida por fibras nervosas aferentes de calibres e velocidades de condução distintos.',
          ],
          takeaway: 'Diferentes sensações corporais trafegam por vias ascendentes paralelas com propriedades fisiológicas próprias.',
          diagram: 'brain',
        },
        {
          id: 'dorsal-column-system',
          title: 'Coluna dorsal-lemnisco medial: tato fino e propriocepção',
          paragraphs: [
            'As fibras do sistema coluna dorsal entram na medula espinal e ascendem ipsilateralmente pelos fascículos grácil (membros inferiores) e cuneiforme (membros superiores).',
            'Elas fazem sinapse nos núcleos grácil e cuneiforme no bulbo caudal, onde os neurônios de 2ª ordem cruzam a linha média (decussação sensorial) e formam o lemnisco medial até o tálamo (VPL).',
          ],
          takeaway: 'A via coluna dorsal-lemnisco medial conduz tato fino e propriocepção consciente, decussando apenas no bulbo.',
          diagram: 'brain',
        },
        {
          id: 'spinothalamic-system',
          title: 'Trato espinotalâmico: dor e temperatura',
          paragraphs: [
            'As informações de dor e temperatura são conduzidas por fibras A-delta e C que fazem sinapse logo no corno dorsal da medula espinal.',
            'Os neurônios de 2ª ordem cruzam imediatamente a linha média pela comissura branca anterior na medula (1 a 2 segmentos acima) e ascendem no funículo ântero-lateral como trato espinotalâmico até o tálamo.',
          ],
          takeaway: 'O trato espinotalâmico cruza na própria medula espinal para levar dor e temperatura ao córtex contralateral.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a principal distinção anatômica e funcional entre o sistema coluna dorsal-lemnisco medial e o trato espinotalâmico?',
        options: [
          {
            id: 'dorsal-column-vs-spinothalamic',
            label: 'A coluna dorsal conduz propriocepção e tato fino cruzando no bulbo; o trato espinotalâmico conduz dor e temperatura cruzando na medula',
            explanation: 'Correto: a coluna dorsal ascende ipsilateralmente na medula e decussa no bulbo, enquanto o trato espinotalâmico cruza quase imediatamente no nível medular.',
          },
          {
            id: 'spinothalamic-fine-touch',
            label: 'O trato espinotalâmico conduz tato discriminativo e propriocepção e cruza apenas no diencéfalo',
            explanation: 'Incorreto: o tato discriminativo e propriocepção consciente pertencem à coluna dorsal-lemnisco medial, não ao espinotalâmico.',
          },
          {
            id: 'corticospinal-proprioception',
            label: 'A coluna dorsal é uma via motora eferente pura, ao passo que o trato espinotalâmico é um reflexo autonômico',
            explanation: 'Incorreto: ambas são vias sensoriais aferentes ascendentes somatossensoriais, não eferentes motoras.',
          },
          {
            id: 'ipsilateral-thalamus',
            label: 'Ambas as vias permanecem totalmente ipsilaterais desde a periferia até o córtex somatossensorial primário',
            explanation: 'Incorreto: todas as vias somatossensoriais conscientes decussam para alcançar o hemisfério cerebral contralateral (uma no bulbo, a outra na medula).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'How does the brain know whether an object in your pocket is a key or a coin, even with your eyes closed?',
      title: 'Somatosensory pathways: dorsal columns and spinothalamic tract',
      description: 'Compare the dorsal column-medial lemniscal pathway (fine touch and proprioception) with the spinothalamic tract (pain and temperature).',
      objective: 'Differentiate the anatomy, decussation levels, and sensory modalities of major ascending somatosensory pathways.',
      stages: [
        {
          id: 'somatosensory-modalities',
          title: 'Tactile and proprioceptive modalities',
          paragraphs: [
            'Somatic sensation is broadly divided into epicritic modalities (discriminative fine touch, vibration, and conscious proprioception) and protopathic modalities (pain, temperature, and crude touch).',
            'Each modality is sensed by specialized peripheral receptors and transmitted through afferent fibers with distinct calibers and conduction velocities.',
          ],
          takeaway: 'Different somatic sensations travel along parallel ascending spinal pathways with specialized physiology.',
          diagram: 'brain',
        },
        {
          id: 'dorsal-column-system',
          title: 'Dorsal column-medial lemniscal system: fine touch and proprioception',
          paragraphs: [
            'Afferent fibers in the dorsal column system enter the spinal cord and ascend ipsilaterally in the gracile fasciculus (lower body) and cuneate fasciculus (upper body).',
            'They synapse in the gracile and cuneate nuclei of the caudal medulla, where second-order neurons cross the midline (sensory decussation) and ascend as the medial lemniscus to the thalamus (VPL).',
          ],
          takeaway: 'The dorsal column-medial lemniscal pathway carries fine touch and conscious proprioception, decussating in the medulla.',
          diagram: 'brain',
        },
        {
          id: 'spinothalamic-system',
          title: 'Spinothalamic tract: pain and temperature',
          paragraphs: [
            'Pain and temperature signals are picked up by A-delta and C fibers that synapse directly in the dorsal horn of the spinal cord.',
            'Second-order neurons cross the midline through the anterior white commissure within 1-2 spinal segments and ascend in the anterolateral column to the thalamus.',
          ],
          takeaway: 'The spinothalamic tract crosses within the spinal cord to deliver pain and temperature to the contralateral cortex.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the principal anatomical and functional difference between the dorsal column-medial lemniscal system and the spinothalamic tract?',
        options: [
          {
            id: 'dorsal-column-vs-spinothalamic',
            label: 'The dorsal column carries proprioception and fine touch decussating in the medulla; the spinothalamic tract carries pain and temperature decussating in the spinal cord',
            explanation: 'Correct: dorsal columns ascend ipsilaterally in the cord and cross in the medulla, whereas spinothalamic fibers cross near their spinal entry level.',
          },
          {
            id: 'spinothalamic-fine-touch',
            label: 'The spinothalamic tract carries discriminative touch and proprioception and crosses exclusively in the diencephalon',
            explanation: 'Incorrect: fine touch and conscious proprioception travel via the dorsal column-medial lemniscal system, not the spinothalamic tract.',
          },
          {
            id: 'corticospinal-proprioception',
            label: 'The dorsal column is a pure efferent motor highway, whereas the spinothalamic tract represents an autonomic reflex',
            explanation: 'Incorrect: both pathways are ascending sensory somatic systems, not descending motor or autonomic circuits.',
          },
          {
            id: 'ipsilateral-thalamus',
            label: 'Both pathways ascend strictly ipsilaterally from the body surface up to the primary somatosensory cortex',
            explanation: 'Incorrect: both somatosensory pathways decussate to project to the contralateral cerebral cortex (one at the medulla, the other in the spinal cord).',
          },
        ],
      },
    },
  },
});

export const neuroMotorReflexLesson = lessonSchema.parse({
  id: 'neuro-motor-reflex',
  revision: 1,
  questionId: 'neuro-motor-stretch-reflex',
  correctOptionId: 'muscle-spindle-ia-monosynaptic',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch13-reflexes',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-5-the-spinal-cord',
      section: 'Chapter 13 · Reflexes and Motor Processing',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Por que sua perna chuta para frente imediatamente ao ser percutida com o martelo de reflexos no joelho?',
      title: 'Controle motor e arco reflexo miotático',
      description: 'Entenda o fuso muscular, o reflexo miotático monossináptico e as diferenças clínicas entre lesão do neurônio motor superior e inferior.',
      objective: 'Descrever os elementos do arco reflexo patelar e distinguir manifestações clínicas de síndromes do neurônio motor superior e inferior.',
      stages: [
        {
          id: 'muscle-spindle-sensor',
          title: 'O fuso muscular detecta o estiramento',
          paragraphs: [
            'O fuso neuromuscular é um mecanorreceptor disposto em paralelo com as fibras musculares extrafusais, sensível ao comprimento e à taxa de variação de estiramento do músculo.',
            'Ao percutir o tendão patelar, as fibras intrafusais são bruscamente estiradas, despolarizando terminações anuloespirais de fibras aferentes Ia de condução rápida.',
          ],
          takeaway: 'O fuso muscular monitora o comprimento e estiramento muscular, disparando pelas fibras Ia.',
          diagram: 'neuron',
        },
        {
          id: 'monosynaptic-arc-patellar',
          title: 'O circuito monossináptico do reflexo patelar',
          paragraphs: [
            'A fibra Ia entra na medula espinal pela raiz dorsal e faz sinapse excitatória direta (monossináptica) com os neurônios motores alfa do corno anterior.',
            'Os motoneurônios alfa disparam potenciais de ação pelas raízes ventrais, provocando a contração rápida e protetora do músculo quadríceps (extensão da perna).',
          ],
          takeaway: 'O reflexo de estiramento miotático é monossináptico: a aferente Ia sinapta diretamente com o motoneurônio alfa.',
          diagram: 'neuron',
        },
        {
          id: 'upper-vs-lower-motoneuron',
          title: 'Neurônio motor superior versus inferior',
          paragraphs: [
            'O neurônio motor superior (córtex motor/trato corticoespinhal) exerce controle tônico inibitório sobre os circuitos medulares reflexos.',
            'Sua lesão causa síndrome do neurônio motor superior (hiperreflexia, espasticidade e sinal de Babinski). Já a lesão do neurônio motor inferior (corno anterior ou raiz) gera hipotonia, atrofia pronunciada, fasciculações e arreflexia.',
          ],
          takeaway: 'Lesão do neurônio motor superior gera hiperreflexia e espasticidade; lesão do inferior gera fraqueza flácida e arreflexia.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo celular explica a resposta contrátil imediata observada no teste do reflexo miotático patelar?',
        options: [
          {
            id: 'muscle-spindle-ia-monosynaptic',
            label: 'O estiramento do fuso neuromuscular ativa fibras aferentes Ia, que fazem sinapse monossináptica direta com motoneurônios alfa',
            explanation: 'Correto: a estimulação súbita do fuso gera impulsos em fibras Ia que excitam diretamente o neurônio motor alfa espinal, gerando contração imediata.',
          },
          {
            id: 'golgi-tendon-polysynaptic',
            label: 'O órgão tendinoso de Golgi ativa fibras Ib para excitar simultaneamente o músculo antagonista e inibir o agonista',
            explanation: 'Incorreto: o órgão tendinoso de Golgi monitora tensão muscular (reflexo miotático inverso) e atua por interneurônios inibitórios polissinápticos.',
          },
          {
            id: 'cerebellar-cortex-relay',
            label: 'O sinal tátil ascende até o córtex cerebelar antes de comandar a contração por via rubroespinal',
            explanation: 'Incorreto: o reflexo miotático profundo é um circuito puramente espinal que não requer retransmissão cortical ou cerebelar prévia.',
          },
          {
            id: 'nociceptive-c-fibers',
            label: 'Fibras amielínicas tipo C mediam um arco reflexo polissináptico nociceptivo de retirada por dor aguda',
            explanation: 'Incorreto: o reflexo flexor de retirada por dor envolve fibras nociceptivas polissinápticas, diferente do reflexo de estiramento monossináptico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'Why does your lower leg kick forward instantly when the patellar tendon is tapped with a reflex hammer?',
      title: 'Motor control and the stretch reflex arc',
      description: 'Understand the muscle spindle, the monosynaptic stretch reflex, and clinical differences between upper and lower motor neuron lesions.',
      objective: 'Describe the components of the patellar reflex arc and differentiate clinical hallmarks of upper versus lower motor neuron lesions.',
      stages: [
        {
          id: 'muscle-spindle-sensor',
          title: 'The muscle spindle detects stretch',
          paragraphs: [
            'The neuromuscular spindle is a stretch receptor positioned in parallel with extrafusal muscle fibers, responding to changes in length and velocity of stretch.',
            'Tapping the patellar tendon rapidly stretches intrafusal fibers, depolarizing annulospiral endings of fast-conducting primary Ia afferents.',
          ],
          takeaway: 'Muscle spindles monitor muscle length and rate of stretch, firing via Ia sensory afferents.',
          diagram: 'neuron',
        },
        {
          id: 'monosynaptic-arc-patellar',
          title: 'The monosynaptic patellar reflex circuit',
          paragraphs: [
            'The Ia afferent fiber traverses the dorsal root into the spinal cord, forming a direct excitatory (monosynaptic) synapse with alpha motor neurons in the anterior horn.',
            'Activated alpha motor neurons fire action potentials out the ventral horn to elicit rapid contraction of the quadriceps muscle, producing leg extension.',
          ],
          takeaway: 'The myotatic stretch reflex is monosynaptic: Ia afferents synapse directly onto alpha motor neurons.',
          diagram: 'neuron',
        },
        {
          id: 'upper-vs-lower-motoneuron',
          title: 'Upper versus lower motor neurons',
          paragraphs: [
            'Upper motor neurons (corticospinal tract) deliver tonic descending modulation and inhibition to spinal reflex circuits.',
            'Lesions of upper motor neurons produce spasticity, hyperreflexia, and Babinski sign. Lower motor neuron lesions (anterior horn cells or roots) yield flaccid paralysis, marked muscle atrophy, fasciculations, and hyporeflexia.',
          ],
          takeaway: 'Upper motor neuron damage causes hyperreflexia and spasticity; lower motor neuron damage produces flaccid weakness and arreflexia.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which mechanism explains the immediate muscle contraction elicited during the patellar stretch reflex test?',
        options: [
          {
            id: 'muscle-spindle-ia-monosynaptic',
            label: 'Muscle spindle stretch excites primary Ia afferents that make direct monosynaptic connections with spinal alpha motor neurons',
            explanation: 'Correct: rapid stretch of intrafusal fibers activates Ia afferents that directly synapse on alpha motor neurons, eliciting reflex contraction.',
          },
          {
            id: 'golgi-tendon-polysynaptic',
            label: 'Golgi tendon organs activate Ib fibers to co-excite antagonist muscles while inhibiting the agonist quadriceps',
            explanation: 'Incorrect: Golgi tendon organs respond to muscle tension (inverse myotatic reflex) and act through polysynaptic inhibitory interneurons.',
          },
          {
            id: 'cerebellar-cortex-relay',
            label: 'Sensory feedback ascends to cerebellar cortex before commanding contraction via the rubrospinal tract',
            explanation: 'Incorrect: deep tendon reflexes are rapid spinal segmental loops that operate without mandatory supraspinal relay.',
          },
          {
            id: 'nociceptive-c-fibers',
            label: 'Unmyelinated C fibers trigger a polysynaptic nociceptive withdrawal reflex initiated by tissue strain',
            explanation: 'Incorrect: nociceptive withdrawal is a protective flexor reflex with multiple interneurons, distinct from the monosynaptic stretch reflex.',
          },
        ],
      },
    },
  },
});

export const neuroAutonomicLesson = lessonSchema.parse({
  id: 'neuro-autonomic',
  revision: 1,
  questionId: 'neuro-autonomic-receptors',
  correctOptionId: 'sympathetic-norepinephrine-parasympathetic-ach',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch15-ans',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/15-1-divisions-of-the-autonomic-nervous-system',
      section: 'Chapter 15 · Divisions of the Autonomic Nervous System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Como o organismo alterna instantaneamente entre o estado de alerta de fuga e a digestão relaxada?',
      title: 'Sistema nervoso autônomo: simpático versus parassimpático',
      description: 'Descubra a organização anatômica e os neurotransmissores das divisões simpática e parassimpática do sistema autônomo.',
      objective: 'Comparar a anatomia dos circuitos autônomos e os neurotransmissores liberados pelos neurônios simpáticos e parassimpáticos.',
      stages: [
        {
          id: 'two-neuron-architecture',
          title: 'Arquitetura de dois neurônios em série',
          paragraphs: [
            'O sistema nervoso autônomo periférico é estruturado em uma cadeia de dois neurônios: o pré-ganglionar (cujo corpo fica no SNC) e o pós-ganglionar (cujo corpo fica nos gânglios autônomos periféricos).',
            'Em ambas as divisões (simpática e parassimpática), os neurônios pré-ganglionares utilizam acetilcolina (ACh) agindo sobre receptores colinérgicos nicotínicos no gânglio.',
          ],
          takeaway: 'Todos os neurônios pré-ganglionares autônomos liberam acetilcolina em receptores nicotínicos.',
          diagram: 'neuron',
        },
        {
          id: 'sympathetic-noradrenaline',
          title: 'Divisão simpática: luta ou fuga e noradrenalina',
          paragraphs: [
            'Com origem toracolombar (T1 a L2), a divisão simpática prepara o corpo para emergências e gasto energético.',
            'Seus neurônios pós-ganglionares liberam predominantemente noradrenalina em receptores adrenérgicos (alfa-1, alfa-2, beta-1, beta-2), aumentando frequência cardíaca, broncodilatação e glicogenólise.',
          ],
          takeaway: 'A maioria dos neurônios pós-ganglionares simpáticos utiliza noradrenalina sobre receptores adrenérgicos.',
          diagram: 'neuron',
        },
        {
          id: 'parasympathetic-acetylcholine',
          title: 'Divisão parassimpática: repouso, digestão e acetilcolina',
          paragraphs: [
            'Com origem craniossacral (nervos cranianos III, VII, IX e X, e raízes sacrais S2-S4), a divisão parassimpática restaura e preserva a energia do organismo.',
            'Seus gânglios situam-se próximos ou no interior dos órgãos-alvo, e os neurônios pós-ganglionares liberam acetilcolina em receptores muscarínicos (M1 a M5), desacelerando o coração e promovendo a motilidade digestiva.',
          ],
          takeaway: 'Os neurônios pós-ganglionares parassimpáticos liberam acetilcolina sobre receptores muscarínicos.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais são os principais neurotransmissores liberados pelos neurônios pós-ganglionares das divisões simpática e parassimpática nos seus órgãos efetores?',
        options: [
          {
            id: 'sympathetic-norepinephrine-parasympathetic-ach',
            label: 'Noradrenalina na maioria dos efetores simpáticos e acetilcolina nos efetores parassimpáticos',
            explanation: 'Correto: neurônios pós-ganglionares simpáticos liberam noradrenalina (com exceção das glândulas sudoríparas que usam ACh), e os parassimpáticos liberam acetilcolina.',
          },
          {
            id: 'ach-both-pathways',
            label: 'Acetilcolina exclusiva em todos os órgãos-alvo de ambas as divisões',
            explanation: 'Incorreto: a acetilcolina é ubíqua nos gânglios autônomos e no parassimpático terminal, mas o simpático periférico usa noradrenalina na maioria dos tecidos.',
          },
          {
            id: 'dopamine-gaba-balance',
            label: 'Dopamina nos efetores simpáticos e ácido gama-aminobutírico (GABA) no parassimpático',
            explanation: 'Incorreto: dopamina e GABA desempenham papéis centrais no encéfalo, não sendo os principais mediadores periféricos autônomos.',
          },
          {
            id: 'serotonin-histamine',
            label: 'Serotonina nas vísceras torácicas e histamina nos vasos arteriais periféricos',
            explanation: 'Incorreto: serotonina e histamina são mediadores locais/inflamatórios e do trato entérico, não neurotransmissores das sinapses autônomas pós-ganglionares clássicas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'How does the body switch seamlessly from flight-or-fight defense to restful visceral digestion?',
      title: 'Autonomic nervous system: sympathetic versus parasympathetic',
      description: 'Discover the anatomical architecture and primary neurotransmitters of the sympathetic and parasympathetic autonomic divisions.',
      objective: 'Compare the wiring of autonomic circuits and the neurotransmitters released by sympathetic and parasympathetic postganglionic neurons.',
      stages: [
        {
          id: 'two-neuron-architecture',
          title: 'The two-neuron peripheral circuit',
          paragraphs: [
            'The peripheral autonomic nervous system is organized in a series of two neurons: the preganglionic neuron (soma in the CNS) and the postganglionic neuron (soma in peripheral autonomic ganglia).',
            'In both sympathetic and parasympathetic pathways, preganglionic neurons release acetylcholine (ACh) onto nicotinic cholinergic receptors in ganglia.',
          ],
          takeaway: 'All autonomic preganglionic neurons release acetylcholine onto nicotinic receptors.',
          diagram: 'neuron',
        },
        {
          id: 'sympathetic-noradrenaline',
          title: 'Sympathetic division: fight-or-flight and norepinephrine',
          paragraphs: [
            'Originating from the thoracolumbar spinal cord (T1 to L2), the sympathetic division mobilizes energy during exertion, exercise, or acute emergency.',
            'Most sympathetic postganglionic terminals release norepinephrine onto adrenergic receptors (alpha-1, alpha-2, beta-1, beta-2), increasing cardiac output, dilating airways, and mobilizing glucose.',
          ],
          takeaway: 'Most sympathetic postganglionic neurons secrete norepinephrine acting on adrenergic receptors.',
          diagram: 'neuron',
        },
        {
          id: 'parasympathetic-acetylcholine',
          title: 'Parasympathetic division: rest-and-digest and acetylcholine',
          paragraphs: [
            'Originating from the craniosacral outflow (cranial nerves III, VII, IX, X and sacral segments S2-S4), the parasympathetic division conserves energy and promotes visceral recovery.',
            'Ganglia lie adjacent to or embedded within target organs, and postganglionic neurons release acetylcholine onto muscarinic receptors (M1 to M5), slowing heart rate and stimulating peristalsis.',
          ],
          takeaway: 'Parasympathetic postganglionic fibers release acetylcholine onto muscarinic receptors.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which primary neurotransmitters are released by sympathetic and parasympathetic postganglionic neurons at their visceral target tissues?',
        options: [
          {
            id: 'sympathetic-norepinephrine-parasympathetic-ach',
            label: 'Norepinephrine across most sympathetic targets and acetylcholine across parasympathetic targets',
            explanation: 'Correct: postganglionic sympathetic fibers primarily release norepinephrine (except for sweat glands), while postganglionic parasympathetic fibers release acetylcholine.',
          },
          {
            id: 'ach-both-pathways',
            label: 'Acetylcholine exclusively across all target tissues of both autonomic divisions',
            explanation: 'Incorrect: while ACh is universally used at all autonomic ganglia, target organs of the sympathetic system primarily receive norepinephrine.',
          },
          {
            id: 'dopamine-gaba-balance',
            label: 'Dopamine across sympathetic effectors and gamma-aminobutyric acid (GABA) across parasympathetic targets',
            explanation: 'Incorrect: dopamine and GABA act predominantly inside the central nervous system rather than at autonomic neuroeffector junctions.',
          },
          {
            id: 'serotonin-histamine',
            label: 'Serotonin in thoracic viscera and histamine in peripheral arterial resistance beds',
            explanation: 'Incorrect: serotonin and histamine are paracrine or inflammatory mediators rather than classical postganglionic autonomic neurotransmitters.',
          },
        ],
      },
    },
  },
});
