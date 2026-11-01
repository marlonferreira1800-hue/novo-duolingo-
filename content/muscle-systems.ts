import { lessonSchema } from '../src/contracts/learning';

export const muscleLengthTensionLesson = lessonSchema.parse({
  id: 'muscle-length-tension',
  revision: 1,
  questionId: 'muscle-length-tension-q1',
  correctOptionId: 'optimal-crossbridge-overlap',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-muscle-mechanics',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-3-muscle-fiber-contraction-and-relaxation',
      section: 'Chapter 10.3 · Muscle Fiber Contraction: Sliding filament model and length-tension relationship',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Por que temos muito menos força para levantar um peso pesado quando o cotovelo está totalmente flexionado ou totalmente esticado?',
      title: 'Mecânica muscular: relação comprimento-tensão e força-velocidade',
      description: 'Entenda como a sobreposição entre filamentos de actina e miosina determina a força isométrica e conheça a curva de Hill.',
      objective: 'Explicar a curva comprimento-tensão sarcomérica e descrever a relação hiperbólica inversa entre força e velocidade de encurtamento.',
      stages: [
        {
          id: 'sarcomere-overlap',
          title: 'Sobreposição sarcomérica ideal (2,0 a 2,2 µm)',
          paragraphs: [
            'A força isométrica gerada por uma fibra muscular esquelética depende diretamente do comprimento inicial de seus sarcômeros antes da ativação. No comprimento ótimo de repouso (entre 2,0 e 2,2 micrômetros), ocorre a máxima sobreposição funcional entre as cabeças de miosina e os sítios de ligação da actina.',
            'Quando o sarcômero é estirado além de 3,6 µm, os filamentos finos e grossos não se sobrepõem mais, reduzindo a formação de pontes cruzadas a zero. Por outro lado, em comprimentos encurtados (< 1,6 µm), os filamentos de actina colidem no centro da zona H e os filamentos grossos chocam-se com as linhas Z, gerando resistência mecânica interna.',
          ],
          takeaway: 'O comprimento sarcomérico ideal (2,0-2,2 µm) maximiza o número de pontes cruzadas formadas e a tensão ativa gerada.',
          diagram: 'sarcomere',
        },
        {
          id: 'active-passive-tension',
          title: 'Tensão ativa versus tensão passiva',
          paragraphs: [
            'A tensão total medida em um músculo é a soma da tensão ativa desenvolvida pelas pontes cruzadas e da tensão passiva gerada pela resistência elástica das proteínas estruturais.',
            'A titina, a maior proteína do corpo humano, ancora os filamentos grossos de miosina às linhas Z e atua como uma mola molecular. Quando o músculo é estirado além do seu comprimento de repouso, a titina e o colágeno do perimísio e epimísio geram tensão elástica passiva progressiva para resistir à ruptura tecidual.',
          ],
          takeaway: 'Tensão ativa provém das pontes cruzadas de actina-miosina; tensão passiva decorre do estiramento elástico da titina e tecido conjuntivo.',
          diagram: 'equation',
        },
        {
          id: 'force-velocity-curve',
          title: 'A curva força-velocidade de Hill',
          paragraphs: [
            'A relação força-velocidade para contrações concêntricas descreve uma curva hiperbólica inversa: quanto mais rápida for a velocidade de encurtamento muscular, menor será a carga máxima que o músculo consegue deslocar.',
            'Esse comportamento biofísico ocorre porque a velocidade de ciclagem das pontes cruzadas é limitada pela taxa de hidrólise do ATP e desprendimento da miosina. Já em contrações excêntricas (alongamento sob tensão), o músculo suporta forças até 40% superiores à força isométrica máxima com menor custo energético.',
          ],
          takeaway: 'Na contração concêntrica, maior velocidade implica menor força; contrações excêntricas produzem as maiores forças musculares.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'No platô da curva comprimento-tensão ativa do sarcômero (entre 2,0 e 2,2 µm), qual mecanismo molecular é responsável pela produção máxima de força contrátil?',
        options: [
          {
            id: 'optimal-crossbridge-overlap',
            label: 'Sobreposição espacial ótima entre pontes cruzadas de miosina e sítios de actina',
            explanation: 'Correto: nessa faixa de comprimento sarcomérico, o número de pontes cruzadas ativas formadas simultaneamente é maximizado, gerando o pico de tensão ativa.',
          },
          {
            id: 'excessive-actin-collision',
            label: 'Colisão e deformação mecânica dos filamentos finos contra as linhas Z vizinhas',
            explanation: 'Incorreto: a colisão dos filamentos ocorre em comprimentos excessivamente curtos (< 1,6 µm) e reduz a força mecânica gerada.',
          },
          {
            id: 'complete-titin-rupture',
            label: 'Ruptura das molas moleculares de titina para liberar energia potencial armazenada',
            explanation: 'Incorreto: a titina fornece suporte elástico contínuo e não sofre ruptura para a contração isométrica normal.',
          },
          {
            id: 'zero-myosin-attachment',
            label: 'Dissociação completa de todas as cabeças de miosina com relaxamento passivo',
            explanation: 'Incorreto: a dissociação total levaria a zero produção de tensão contrátil ativa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'Why can our arm generate far less lifting force when the elbow joint is either hyperflexed or fully hyperextended?',
      title: 'Muscle Mechanics: Length-Tension and Force-Velocity Relationships',
      description: 'Understand how sarcomeric actin-myosin overlap dictates active isometric force and analyze the hyperbolic Hill curve.',
      objective: 'Explain the sarcomeric length-tension curve and describe the inverse relationship between force and shortening velocity.',
      stages: [
        {
          id: 'sarcomere-overlap',
          title: 'Optimal sarcomere overlap (2.0 to 2.2 µm)',
          paragraphs: [
            'The active isometric tension produced by a skeletal muscle fiber depends directly on the initial resting length of its sarcomeres prior to depolarization. At the optimal resting length (2.0 to 2.2 micrometers), spatial overlap between myosin crossbridges and actin filament binding sites reaches its physiological maximum.',
            'If a sarcomere is stretched beyond 3.6 µm, thin and thick filaments cease to overlap, reducing active crossbridge formation to zero. Conversely, at excessively shortened lengths (< 1.6 µm), opposing actin filaments collide at the central H-zone and thick filaments crumple against Z-discs, impeding force generation.',
          ],
          takeaway: 'Optimal sarcomere length (2.0-2.2 µm) maximizes the density of active crossbridges and peak isometric force.',
          diagram: 'sarcomere',
        },
        {
          id: 'active-passive-tension',
          title: 'Active versus passive muscle tension',
          paragraphs: [
            'The total force recorded during whole-muscle tension testing equals the sum of active tension from cycling crossbridges plus passive tension from non-contractile parallel elastic elements.',
            'Titin, the largest known protein in the human proteome, anchors thick myosin filaments to the Z-disc and acts as a bidirectional molecular spring. When a muscle fiber is stretched beyond resting dimensions, titin and connective tissue matrices generate exponential passive tension to preserve structural integrity.',
          ],
          takeaway: 'Active tension is powered by actin-myosin crossbridges; passive tension reflects elastic stretch in titin and extracellular matrix.',
          diagram: 'equation',
        },
        {
          id: 'force-velocity-curve',
          title: 'Hill’s force-velocity relationship',
          paragraphs: [
            'The force-velocity relationship during concentric contractions describes a downward hyperbolic curve: the faster a muscle shortens, the lower the external load it can overcome.',
            'This biophysical constraint stems from the finite kinetics of crossbridge detachment and ATP hydrolysis turnover. During eccentric contractions (lengthening under load), muscles can resist forces up to 40% above maximum isometric tension with superior metabolic efficiency.',
          ],
          takeaway: 'During concentric contractions, higher shortening velocity yields lower force; eccentric actions produce peak mechanical resistance.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'At the plateau of the active sarcomeric length-tension curve (between 2.0 and 2.2 µm), which molecular mechanism accounts for maximal contractile force generation?',
        options: [
          {
            id: 'optimal-crossbridge-overlap',
            label: 'Optimal spatial overlap between myosin heads and actin filament binding sites',
            explanation: 'Correct: at this optimal length range, the number of simultaneous force-generating actin-myosin crossbridges reaches its peak.',
          },
          {
            id: 'excessive-actin-collision',
            label: 'Mechanical collision and crumpling of thin filaments across opposing Z-discs',
            explanation: 'Incorrect: filament collision occurs at overly shortened lengths (< 1.6 µm) and severely degrades contractile force.',
          },
          {
            id: 'complete-titin-rupture',
            label: 'Complete rupture of titin molecular springs to discharge stored elastic energy',
            explanation: 'Incorrect: titin provides elastic integrity and does not rupture during physiological isometric tension generation.',
          },
          {
            id: 'zero-myosin-attachment',
            label: 'Total detachment of all myosin heads yielding passive mechanical compliance',
            explanation: 'Incorrect: complete detachment produces muscle relaxation with zero active force production.',
          },
        ],
      },
    },
  },
});

export const muscleMotorUnitsLesson = lessonSchema.parse({
  id: 'muscle-motor-units',
  revision: 1,
  questionId: 'muscle-motor-units-q1',
  correctOptionId: 'small-type1-units',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-motor-units',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-4-nervous-system-control-of-muscle-tension',
      section: 'Chapter 10.4 · Nervous System Control: Motor units, recruitment, and wave summation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Como nosso cérebro consegue usar o mesmo bíceps para segurar uma caneta frágil ou levantar um haltere de 20 quilos com total precisão?',
      title: 'Unidades motoras: princípio de Henneman e somação temporal',
      description: 'Explore a organização da unidade motora, a graduação da força por recrutamento espacial ordenado e a somação de abalos até o tétano.',
      objective: 'Descrever o princípio do tamanho de Henneman para recrutamento de unidades motoras e diferenciar somação temporal de tetania fundida.',
      stages: [
        {
          id: 'motor-unit-organization',
          title: 'A unidade motora e a razão de inervação',
          paragraphs: [
            'Uma unidade motora é definida como um único motoneurônio alfa e todas as fibras musculares esqueléticas que ele inerva exclusivamente. Todas as fibras de uma mesma unidade motora compartilham o mesmo perfil bioquímico e fenotípico.',
            'A razão de inervação varia conforme a função motora: músculos oculares extrínsecos e intrínsecos da mão possuem apenas 5 a 10 fibras por neurônio para permitir controle motor micrométrico fino, enquanto o músculo gastrocnêmio possui até 2.000 fibras por unidade para gerar potência grosseira.',
          ],
          takeaway: 'Unidade motora = motoneurônio alfa + suas fibras musculares. Pequena razão confere precisão; grande razão confere potência.',
          diagram: 'neuron',
        },
        {
          id: 'henneman-size-principle',
          title: 'O princípio do tamanho de Henneman',
          paragraphs: [
            'O sistema nervoso central gradua a força muscular recrutando unidades motoras em uma ordem estrita e reprodutível baseada no tamanho do soma neuronal: unidades motoras pequenas são sempre ativadas antes das grandes.',
            'Motoneurônios pequenos possuem menor área de membrana e maior resistência elétrica de entrada (Lei de Ohm: V = I × R), atingindo o limiar de disparo com correntes sinápticas menores. Assim, as fibras tipo I (lentas, oxidativas e resistentes à fadiga) são ativadas primeiro, seguidas pelas tipo IIa e, em cargas máximas, pelas tipo IIx (rápidas e fatigáveis).',
          ],
          takeaway: 'O princípio de Henneman dita o recrutamento ordenado das menores unidades (tipo I) para as maiores (tipo II) conforme a demanda cresce.',
          diagram: 'phases',
        },
        {
          id: 'wave-summation-tetanus',
          title: 'Somação de ondas e contração tetânica',
          paragraphs: [
            'Se um segundo potencial de ação atinge a fibra antes que o cálcio liberado pelo estímulo anterior tenha sido recapturado pelas bombas SERCA para o retículo sarcoplasmático, os dois abalos mecânicos se somam (somação temporal).',
            'Em frequências elevadas de estimulação (30 a 50 Hz ou mais), o cálcio intracelular permanece cronicamente elevado, mantendo as pontes cruzadas permanentemente ativas. A tensão atinge um platô contínuo sem oscilações de relaxamento conhecido como tétano completo ou fundido, que produz de 3 a 5 vezes a força de um abalo isolado.',
          ],
          takeaway: 'A alta frequência de disparo sustenta cálcio elevado no citosol, gerando tetania fundida com força 3 a 5 vezes maior que o abalo.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a sentença sobre a graduação de força segundo o princípio do tamanho de Henneman:',
        blank: 'Em contrações com aumento gradual de carga, o SNC recruta primeiro as unidades motoras __________, progredindo para as maiores conforme a demanda se eleva.',
        options: [
          {
            id: 'small-type1-units',
            label: 'pequenas (fibras tipo I oxidativas)',
            explanation: 'Correto: neurônios menores com fibras oxidativas lentas de alta resistência à fadiga disparam primeiro devido à sua maior resistência de entrada.',
          },
          {
            id: 'large-fast-units',
            label: 'gigantes (fibras tipo IIx glicolíticas)',
            explanation: 'Incorreto: as unidades tipo IIx exigem alta corrente excitatória e são as últimas a serem ativadas, em esforços máximos.',
          },
          {
            id: 'sensory-spindle-units',
            label: 'sensitivas aferentes do fuso muscular',
            explanation: 'Incorreto: fusos musculares são receptores proprioceptivos aferentes, e não unidades motoras eferentes que realizam trabalho contrátil.',
          },
          {
            id: 'random-unmyelinated-units',
            label: 'amielínicas selecionadas aleatoriamente',
            explanation: 'Incorreto: o recrutamento é altamente ordenado e não aleatório; motoneurônios alfa são calibrosos e mielinizados.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'How can the central nervous system use the identical biceps brachii to hold a raw egg without cracking it or curl a 50-pound dumbbell?',
      title: 'Motor Units: Henneman’s Size Principle and Wave Summation',
      description: 'Explore motor unit physiology, orderly spatial recruitment according to soma dimensions, and temporal summation leading to tetanus.',
      objective: 'Describe Henneman’s size principle for motor unit activation and differentiate wave summation from fused tetanus.',
      stages: [
        {
          id: 'motor-unit-organization',
          title: 'Motor unit architecture and innervation ratio',
          paragraphs: [
            'A motor unit is anatomically defined as a single somatic alpha motor neuron and all the skeletal muscle fibers it exclusively innervates. All muscle fibers within a single motor unit exhibit identical phenotypic and metabolic profiles.',
            'The innervation ratio reflects functional specializations: extraocular muscles and intrinsic hand muscles possess only 5 to 10 fibers per motor unit to deliver exquisite micrometric control, whereas the gastrocnemius muscle contains up to 2,000 fibers per unit to generate gross ballistic propulsion.',
          ],
          takeaway: 'Motor unit = alpha motor neuron + its muscle fibers. Low ratios deliver precision; high ratios provide forceful propulsion.',
          diagram: 'neuron',
        },
        {
          id: 'henneman-size-principle',
          title: 'Henneman’s size principle of recruitment',
          paragraphs: [
            'The central nervous system modulates voluntary contractile force by recruiting motor units in an invariant, orderly sequence dictated by neuronal soma size: small units fire first, followed progressively by larger units.',
            'Small motor neurons have smaller cell surface areas and higher input resistance (Ohm’s law: V = I × R), reaching threshold voltage at lower synaptic currents. Thus, Type I slow-oxidative fatigue-resistant fibers activate first, followed by Type IIa and ultimately high-threshold Type IIx fast-glycolytic units.',
          ],
          takeaway: 'Henneman’s principle dictates orderly recruitment from small, fatigue-resistant Type I units to large Type II units as demands rise.',
          diagram: 'phases',
        },
        {
          id: 'wave-summation-tetanus',
          title: 'Wave summation and tetanic contractions',
          paragraphs: [
            'If a second motor action potential reaches the neuromuscular junction before intracellular Ca2+ released by the previous twitch is cleared by SERCA pumps, mechanical twitches superimpose (wave summation).',
            'At high firing frequencies (30 to 50 Hz or greater), free cytosolic Ca2+ remains saturated above baseline, maintaining continuous crossbridge cycling. Contractile tension fuses into a smooth, sustained plateau devoid of relaxation dips termed complete (fused) tetanus, generating 3 to 5 times the tension of an isolated twitch.',
          ],
          takeaway: 'High action potential frequency keeps cytosolic Ca2+ saturated, creating fused tetanus with 3 to 5 times single twitch force.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence describing force modulation according to Henneman’s size principle:',
        blank: 'During progressively ramped voluntary contractions, the central nervous system first recruits __________ motor units, engaging larger units as mechanical force demands escalate.',
        options: [
          {
            id: 'small-type1-units',
            label: 'small (Type I oxidative slow-twitch)',
            explanation: 'Correct: smaller motor neurons with fatigue-resistant oxidative fibers reach action potential threshold first due to higher electrical input resistance.',
          },
          {
            id: 'large-fast-units',
            label: 'giant (Type IIx glycolytic fast-twitch)',
            explanation: 'Incorrect: large Type IIx units require substantial synaptic input current and are recruited last during near-maximal exertions.',
          },
          {
            id: 'sensory-spindle-units',
            label: 'sensory afferent muscle spindle',
            explanation: 'Incorrect: muscle spindles are sensory proprioceptive afferents, not efferent contractile motor units.',
          },
          {
            id: 'random-unmyelinated-units',
            label: 'unmyelinated units chosen at random',
            explanation: 'Incorrect: motor unit recruitment is deterministic and strictly organized; alpha motor axons are heavily myelinated.',
          },
        ],
      },
    },
  },
});

export const muscleBioenergeticsLesson = lessonSchema.parse({
  id: 'muscle-bioenergetics',
  revision: 1,
  questionId: 'muscle-bioenergetics-q1',
  correctOptionId: 'phosphocreatine-resynthesis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-muscle-metabolism',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-5-types-of-muscle-fibers',
      section: 'Chapter 10.5 · Muscle Fiber Types: Aerobic vs anaerobic pathways, ATP production, and fatigue',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'De onde vem a energia química imediata que permite a um velocista arrancar do bloco de partida antes mesmo de o fluxo sanguíneo muscular aumentar?',
      title: 'Bioenergética muscular: fosfocreatina, glicólise e oxidação',
      description: 'Analise os três sistemas bioenergéticos que ressintetizam ATP nas fibras musculares: sistema fosfagênio, glicolítico e oxidativo.',
      objective: 'Identificar a contribuição temporal e a capacidade energética dos sistemas fosfocreatina, glicolítico anaeróbio e fosforilação oxidativa.',
      stages: [
        {
          id: 'phosphagen-system',
          title: 'Sistema dos fosfagênios: ATP e fosfocreatina',
          paragraphs: [
            'O pool intracelular de ATP livre no citoplasma muscular é diminuto (cerca de 4 a 5 mmol/kg de músculo), suficiente para sustentar apenas 1 a 2 segundos de contração máxima.',
            'O sistema de fosfocreatina (PCr) atua como um reservatório imediato de energia de alta voltagem. Catalisada pela creatina quinase (CK), a fosfocreatina transfere seu grupo fosfato diretamente para o ADP, ressintetizando ATP em uma única etapa sem consumir oxigênio para sustentar esforços explosivos nos primeiros 6 a 10 segundos.',
          ],
          takeaway: 'O sistema ATP-PCr é anaeróbio alático e fornece energia explosiva imediata para os primeiros 10 segundos de esforço.',
          diagram: 'mitochondria',
        },
        {
          id: 'anaerobic-glycolysis',
          title: 'Glicólise anaeróbia rápida',
          paragraphs: [
            'Para esforços intensos que ultrapassam 10 segundos e duram até 1 a 2 minutos, a glicólise anaeróbia torna-se a principal fonte de regeneração de ATP.',
            'As fibras degradam glicogênio muscular em glicose-6-fosfato e subsequentemente em piruvato. Em taxas glicolíticas elevadas que superam a capacidade mitocondrial, a lactato desidrogenase converte o piruvato em lactato, regenerando NAD+ para manter o fluxo glicolítico à custa de acidose metabólica.',
          ],
          takeaway: 'A glicólise anaeróbia gera ATP rapidamente sem O2, sustentando esforços de 30 a 90 segundos com produção de lactato.',
          diagram: 'phases',
        },
        {
          id: 'oxidative-phosphorylation',
          title: 'Fosforilação oxidativa mitocondrial',
          paragraphs: [
            'Em exercícios contínuos que ultrapassam 2 minutos, o sistema mitocondrial oxidativo assume a quase totalidade do suprimento energético.',
            'Utilizando carboidratos (via ciclo de Krebs) e ácidos graxos livres (via beta-oxidação), as mitocôndrias produzem mais de 30 a 32 moléculas de ATP por molécula de glicose e centenas de ATPs por triglicerídeo na cadeia respiratória, garantindo capacidade energética virtualmente inesgotável para atividades de resistência aeróbia.',
          ],
          takeaway: 'A fosforilação oxidativa tem a maior capacidade de produção de ATP, abastecendo exercícios prolongados de endurance.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Durante os primeiros 5 a 8 segundos de uma corrida de velocidade máxima de 100 metros rasos, qual via metabólica celular é a principal responsável pela regeneração quase instantânea do ATP muscular?',
        options: [
          {
            id: 'phosphocreatine-resynthesis',
            label: 'Transferência de fosfato de alta energia da fosfocreatina para o ADP via creatina quinase',
            explanation: 'Correto: a reação da creatina quinase é a via mais rápida do metabolismo muscular, regenerando ATP imediatamente nos primeiros segundos de esforço máximo.',
          },
          {
            id: 'mitochondrial-beta-oxidation',
            label: 'Beta-oxidação mitocondrial de ácidos graxos de cadeia longa',
            explanation: 'Incorreto: a beta-oxidação é um processo mitocondrial aeróbio lento, predominante em repouso e esforços de longa duração.',
          },
          {
            id: 'hepatic-gluconeogenesis',
            label: 'Gliconeogênese hepática acelerada com liberação de glicose na circulação',
            explanation: 'Incorreto: a gliconeogênese requer minutos a horas para síntese de glicose no fígado e não abastece o arranque inicial.',
          },
          {
            id: 'ketone-body-proteolysis',
            label: 'Proteólise miofibrilar com oxidação de corpos cetônicos no sarcoplasma',
            explanation: 'Incorreto: o tecido muscular preserva suas proteínas estruturais e não oxida corpos cetônicos para impulsos contráteis explosivos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'Where does the immediate chemical energy come from that launches a sprinter out of the starting blocks long before blood flow can increase?',
      title: 'Muscle Bioenergetics: Phosphocreatine, Glycolysis, and Oxidation',
      description: 'Analyze the three bioenergetic pathways resynthesizing ATP in working muscle: phosphagen, glycolytic, and oxidative systems.',
      objective: 'Identify the operational timelines and energetic yields of the phosphocreatine, fast glycolytic, and mitochondrial oxidative systems.',
      stages: [
        {
          id: 'phosphagen-system',
          title: 'The phosphagen system: ATP and phosphocreatine',
          paragraphs: [
            'The intracellular pool of free ATP within skeletal muscle cytoplasm is remarkably modest (approximately 4 to 5 mmol/kg wet tissue), sufficient to power only 1 to 2 seconds of maximal crossbridge cycling.',
            'The phosphocreatine (PCr) system acts as an immediate high-energy buffer. Catalyzed by creatine kinase (CK), PCr transfers its high-energy phosphate directly onto ADP, regenerating ATP in a single enzymatic step without oxygen to sustain all-out explosive bursts for the initial 6 to 10 seconds.',
          ],
          takeaway: 'The alactic ATP-PCr pathway delivers maximal power instantly to fuel the first 10 seconds of high-intensity exertion.',
          diagram: 'mitochondria',
        },
        {
          id: 'anaerobic-glycolysis',
          title: 'Fast anaerobic glycolysis',
          paragraphs: [
            'For high-intensity efforts extending past 10 seconds up to roughly 2 minutes, fast anaerobic glycolysis becomes the predominant bioenergetic contributor.',
            'Muscle glycogen is enzymatically cleaved into glucose-6-phosphate and shunted through glycolysis to pyruvate. When flux rates exceed mitochondrial transport capacity, lactate dehydrogenase converts pyruvate to lactate, recycling cytosolic NAD+ to preserve glycolytic ATP generation.',
          ],
          takeaway: 'Anaerobic glycolysis rapidly yields ATP without O2, sustaining intense work for 30 to 90 seconds while accumulating lactate.',
          diagram: 'phases',
        },
        {
          id: 'oxidative-phosphorylation',
          title: 'Mitochondrial oxidative phosphorylation',
          paragraphs: [
            'During continuous physical activity lasting beyond two minutes, mitochondrial aerobic metabolism contributes the overwhelming majority of ATP production.',
            'By combusting carbohydrates (via the Krebs cycle) and free fatty acids (via beta-oxidation), mitochondria generate over 30 to 32 ATP molecules per glucose and hundreds per triglyceride across the electron transport chain, providing steady, long-lasting energy for aerobic endurance.',
          ],
          takeaway: 'Oxidative phosphorylation possesses the highest total ATP capacity, fueling prolonged endurance exercise indefinitely.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'During the first 5 to 8 seconds of an all-out 100-meter sprint, which cellular bioenergetic pathway is primarily responsible for instantaneous muscle ATP regeneration?',
        options: [
          {
            id: 'phosphocreatine-resynthesis',
            label: 'Direct high-energy phosphate transfer from phosphocreatine to ADP via creatine kinase',
            explanation: 'Correct: the creatine kinase reaction represents the fastest kinetic pathway for ATP replenishment, sustaining peak power in initial seconds.',
          },
          {
            id: 'mitochondrial-beta-oxidation',
            label: 'Mitochondrial beta-oxidation of circulating long-chain fatty acids',
            explanation: 'Incorrect: beta-oxidation is a slow aerobic pathway designed for prolonged low-to-moderate intensity activities.',
          },
          {
            id: 'hepatic-gluconeogenesis',
            label: 'De novo hepatic gluconeogenesis exporting glucose into systemic circulation',
            explanation: 'Incorrect: liver gluconeogenesis operates on a timeline of tens of minutes to hours, far too slow for immediate burst power.',
          },
          {
            id: 'ketone-body-proteolysis',
            label: 'Myofibrillar proteolysis coupled with sarcoplasmic ketone body oxidation',
            explanation: 'Incorrect: structural muscle proteins are spared during sprints, and ketone oxidation requires prolonged fasting states.',
          },
        ],
      },
    },
  },
});

export const muscleFatigueLesson = lessonSchema.parse({
  id: 'muscle-fatigue',
  revision: 1,
  questionId: 'muscle-fatigue-q1',
  correctOptionId: 'inorganic-phosphate-pi',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-fatigue',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-3-muscle-fiber-contraction-and-relaxation',
      section: 'Chapter 10.3 · Muscle Contraction: Cellular mechanisms of muscle fatigue and recovery',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Por que o músculo para de responder com força total no final de uma série pesada, mesmo quando o cérebro envia o comando máximo para continuar?',
      title: 'Fadiga muscular: mecanismos centrais e periféricos',
      description: 'Diferencie a fadiga no córtex e na medula (central) da fadiga dentro da fibra muscular (periférica, acúmulo de Pi e íons H+).',
      objective: 'Distinguir fadiga central de periférica e identificar o acúmulo de fosfato inorgânico e perturbações de cálcio como causas de falha periférica.',
      stages: [
        {
          id: 'peripheral-fatigue',
          title: 'Fadiga periférica: o papel do fosfato inorgânico (Pi)',
          paragraphs: [
            'A fadiga periférica é caracterizada pela redução da capacidade intrínseca do músculo esquelético de gerar força mecânica em resposta a um estímulo neural inalterado.',
            'Durante a rápida quebra de ATP e fosfocreatina, as concentrações citoplasmáticas de fosfato inorgânico (Pi) aumentam de 3-5 mM para mais de 30-40 mM. Esse excesso de Pi precipita com íons cálcio dentro do retículo sarcoplasmático (formando fosfato de cálcio insolúvel) e atua diretamente sobre os miofilamentos, reduzindo a afinidade da troponina C pelo Ca2+ e inibindo a transição das pontes cruzadas para o estado de força.',
          ],
          takeaway: 'O acúmulo de fosfato inorgânico (Pi) inibe a liberação de Ca2+ do retículo e reduz diretamente a força das pontes cruzadas.',
          diagram: 'sarcomere',
        },
        {
          id: 'central-fatigue',
          title: 'Fadiga central: redução do drive neural eferente',
          paragraphs: [
            'A fadiga central tem origem no sistema nervoso central (córtex motor, gânglios da base e tronco encefálico) e manifesta-se como uma diminuição progressiva no recrutamento e na frequência de disparo dos motoneurônios alfa.',
            'Ela é mediada por alterações nos neurotransmissores encefálicos (aumento relativo da serotonina em relação à dopamina) e por feedback inibitório vindo de fibras aferentes metabólicas musculares do grupo III e IV, que detectam produtos metabólicos e reduzem reflexamente o comando motor central para proteger o tecido contra danos.',
          ],
          takeaway: 'A fadiga central decorre da diminuição do drive motor cortical voluntário mediada por serotonina e aferências inibitórias III e IV.',
          diagram: 'brain',
        },
        {
          id: 'epoc-recovery',
          title: 'Recuperação pós-exercício e o conceito de EPOC',
          paragraphs: [
            'Após a interrupção do exercício, o consumo de oxigênio permanece elevado acima dos níveis de repouso por minutos a horas, um fenômeno denominado Consumo Excessivo de Oxigênio Pós-Exercício (EPOC).',
            'Nessa fase de recuperação, o ATP gerado aerobicamente pelas mitocôndrias é utilizado para ressintetizar os estoques de fosfocreatina muscular, restabelecer os gradientes iônicos de Na+/K+ e Ca2+ pelas bombas ativas e reesterificar o glicogênio no ciclo de Cori hepático.',
          ],
          takeaway: 'O EPOC reflete o oxigênio consumido para restaurar estoques de fosfocreatina, depurar metabólitos e restabelecer equilíbrios iônicos.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em nível molecular dentro da fibra muscular durante exercício de alta intensidade, qual metabólito acumulado precipita no retículo sarcoplasmático e reduz diretamente a sensibilidade da troponina ao cálcio, constituindo a causa primária da fadiga periférica?',
        options: [
          {
            id: 'inorganic-phosphate-pi',
            label: 'Fosfato inorgânico (Pi) decorrente da quebra acelerada de ATP e fosfocreatina',
            explanation: 'Correto: o acúmulo citoplasmático maciço de Pi forma fosfato de cálcio no retículo e atua diretamente nos filamentos finos reduzindo a força gerada pelas pontes cruzadas.',
          },
          {
            id: 'lactate-dehydrogenase-atp',
            label: 'Depleção completa de lactato com acúmulo excessivo de enzimas glicolíticas',
            explanation: 'Incorreto: o lactato se acumula e atua como tampão metabólico e combustível para outros tecidos, não sendo o causador primário da falha mecânica.',
          },
          {
            id: 'calcium-depleted-titin',
            label: 'Desnaturação irreversível da miosina por perda de filamentos de titina',
            explanation: 'Incorreto: a titina e as proteínas contráteis não sofrem desnaturação em exercícios fisiológicos agudos.',
          },
          {
            id: 'glycogen-synthase-complex',
            label: 'Bloqueio das junções neuromusculares por acúmulo de glicogênio sintetase',
            explanation: 'Incorreto: a glicogênio sintetase é uma enzima intracelular e sua inativação não bloqueia a transmissão sináptica neuromuscular.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'Why does a muscle lose its ability to generate force near the end of a heavy set, even when your brain commands it with maximum willpower?',
      title: 'Muscle Fatigue: Central and Peripheral Mechanisms',
      description: 'Differentiate neural failure in motor cortex and spinal cord (central fatigue) from biochemical impairment inside the fiber (peripheral fatigue).',
      objective: 'Distinguish central from peripheral fatigue and pinpoint inorganic phosphate accumulation and calcium disruption as primary peripheral triggers.',
      stages: [
        {
          id: 'peripheral-fatigue',
          title: 'Peripheral fatigue: The critical role of inorganic phosphate (Pi)',
          paragraphs: [
            'Peripheral fatigue denotes an intrinsic decline in the mechanical force-generating capacity of skeletal muscle fibers despite preserved electrical activation from motor neurons.',
            'During rapid breakdown of ATP and phosphocreatine, cytosolic concentrations of inorganic phosphate (Pi) surge from resting levels of 3–5 mM to over 30–40 mM. Elevated Pi enters the sarcoplasmic reticulum and precipitates with Ca2+ (forming insoluble calcium phosphate), while simultaneously blunting troponin C calcium sensitivity and inhibiting the power stroke of crossbridges.',
          ],
          takeaway: 'Accumulation of inorganic phosphate (Pi) reduces sarcoplasmic Ca2+ release and directly impairs crossbridge force development.',
          diagram: 'sarcomere',
        },
        {
          id: 'central-fatigue',
          title: 'Central fatigue: Decreased voluntary neural drive',
          paragraphs: [
            'Central fatigue originates proximal to the neuromuscular junction (involving motor cortex, basal ganglia, and spinal interneurons), manifesting as a progressive drop in voluntary motor unit recruitment and firing frequencies.',
            'It is orchestrated by neuromodulatory transmitter shifts (elevated brain serotonin relative to dopamine) and by reflex inhibitory feedback from Group III and IV metabosensitive muscle afferents that protect skeletal muscles from catastrophic structural collapse.',
          ],
          takeaway: 'Central fatigue involves reduced voluntary motor cortex output mediated by central neurotransmitters and protective III/IV muscle afferents.',
          diagram: 'brain',
        },
        {
          id: 'epoc-recovery',
          title: 'Post-exercise recovery and excess post-exercise oxygen consumption (EPOC)',
          paragraphs: [
            'Following exercise cessation, whole-body oxygen uptake remains elevated above baseline for minutes to hours, an adaptive metabolic state designated Excess Post-Exercise Oxygen Consumption (EPOC).',
            'During this restoration window, aerobically generated ATP is redirected toward replenishing intramyocellular phosphocreatine reserves, fueling active Na+/K+ and Ca2+ ionic pumps to re-establish resting gradients, and metabolizing lactate through hepatic Cori cycling.',
          ],
          takeaway: 'EPOC provides the oxygen necessary to resynthesize phosphocreatine, rebalance transmembrane ion gradients, and clear metabolites.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'At the cellular level within skeletal muscle fibers during intense contractions, which accumulated metabolic byproduct precipitates with calcium inside the sarcoplasmic reticulum and blunts troponin sensitivity, serving as the chief cause of peripheral fatigue?',
        options: [
          {
            id: 'inorganic-phosphate-pi',
            label: 'Inorganic phosphate (Pi) derived from rapid hydrolysis of ATP and phosphocreatine',
            explanation: 'Correct: massive cytosolic accumulation of free Pi forms calcium phosphate precipitates in the SR and directly hinders the power stroke of actin-myosin crossbridges.',
          },
          {
            id: 'lactate-dehydrogenase-atp',
            label: 'Total depletion of lactate coupled with excessive accumulation of glycolytic enzymes',
            explanation: 'Incorrect: lactate accumulates as a metabolic buffer and energetic substrate, rather than being the direct poison of myofibrillar crossbridges.',
          },
          {
            id: 'calcium-depleted-titin',
            label: 'Irreversible denaturation of myosin heads due to breakdown of titin springs',
            explanation: 'Incorrect: contractile proteins do not undergo thermal denaturation during standard physiological bouts of acute exercise.',
          },
          {
            id: 'glycogen-synthase-complex',
            label: 'Synaptic blockade of neuromuscular junctions by glycogen synthase precipitation',
            explanation: 'Incorrect: glycogen synthase is an intracellular enzyme whose activity does not impair neuromuscular acetylcholine transmission.',
          },
        ],
      },
    },
  },
});

export const muscleAdaptationLesson = lessonSchema.parse({
  id: 'muscle-adaptation',
  revision: 1,
  questionId: 'muscle-adaptation-q1',
  correctOptionId: 'mtor-complex-1',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-ap2e-adaptation',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-6-exercise-and-muscle-performance',
      section: 'Chapter 10.6 · Exercise and Muscle Performance: Hypertrophy, atrophy, and muscular plasticity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Como o levantamento sistemático de peso sinaliza para os núcleos das fibras musculares dobrarem a produção de actina e miosina?',
      title: 'Plasticidade muscular: hipertrofia, remodelamento e sarcopenia',
      description: 'Explore a mecanotransdução via mTOR, a transição fenotípica de fibras, os mecanismos de atrofia por desuso e a sarcopenia no envelhecimento.',
      objective: 'Identificar a via de sinalização Akt-mTOR na hipertrofia muscular e contrastar atrofia por ubiquitina-proteassomo com sarcopenia.',
      stages: [
        {
          id: 'hypertrophy-mtor',
          title: 'Hipertrofia por sobrecarga mecânica e via mTORC1',
          paragraphs: [
            'A hipertrofia do músculo esquelético adulto ocorre predominantemente pelo aumento no volume individual das fibras existentes (adicionando sarcômeros em paralelo), e não por hiperplasia (multiplicação celular).',
            'A tensão mecânica estimula receptores costaméricos e integrinas na membrana celular, deflagrando mecanotransdução que ativa a quinase mTORC1 (alvo mecanístico da rapamicina em mamíferos). O mTORC1 fosforila p70S6K e inibe 4E-BP1, acelerando a tradução de RNA mensageiro e a síntese de novas proteínas contráteis.',
          ],
          takeaway: 'A tensão mecânica ativa a via intracelular mTORC1, promovendo a síntese de sarcômeros em paralelo e hipertrofia miofibrilar.',
          diagram: 'dna',
        },
        {
          id: 'fiber-shift',
          title: 'Remodelamento fenotípico de fibras musculares',
          paragraphs: [
            'As fibras musculares esqueléticas exibem extraordinária plasticidade fenotípica em resposta ao padrão de uso. O treinamento de força crônico induz transição das fibras glicolíticas rápidas fatigáveis tipo IIx para fibras mais eficientes e resistentes tipo IIa.',
            'Por outro lado, o treinamento de resistência aeróbia contínua eleva a expressão de PGC-1alfa, estimulando biogênese mitocondrial maciça, maior densidade capilar ao redor das fibras e maior capacidade oxidativa celular sem aumento expressivo da área de secção transversa.',
          ],
          takeaway: 'Fibras sofrem transição contínua entre subtipos; treino de força converte IIx em IIa, enquanto treino aeróbio ativa PGC-1alfa e biogênese mitocondrial.',
          diagram: 'phases',
        },
        {
          id: 'atrophy-sarcopenia',
          title: 'Atrofia por desuso e sarcopenia no envelhecimento',
          paragraphs: [
            'O desuso, a imobilização por gesso ou a denervação ativam a via ubiquitina-proteassomo, mediada pelas ligases E3 específicas do músculo (MuRF1 e Atrogina-1), que marcam as proteínas contráteis para degradação proteolítica rápida.',
            'A sarcopenia é a perda involuntária de massa e função muscular associada ao envelhecimento. Ela é marcada por denervação crônica com perda seletiva de motoneurônios alfa rápidos, atrofia desproporcional das fibras tipo II, infiltração gordurosa intramuscular e redução na proliferação de células-satélite.',
          ],
          takeaway: 'A atrofia por desuso é mediada pelo sistema ubiquitina-proteassomo; a sarcopenia senil atinge preferencialmente fibras rápidas tipo II.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual complexo enzimático intracelular atua como o principal regulador mestre da síntese proteica miofibrilar e da hipertrofia muscular em resposta à sobrecarga mecânica e aminoácidos essenciais?',
        options: [
          {
            id: 'mtor-complex-1',
            label: 'mTORC1 (alvo mecanístico da rapamicina complexo 1)',
            explanation: 'Correto: a via Akt-mTORC1 é o nó central de integração da mecanotransdução que ativa a tradução ribossômica e a síntese proteica miofibrilar.',
          },
          {
            id: 'ubiquitin-ligase-atrogin',
            label: 'Atrogina-1 / MAFbx ligase de ubiquitina',
            explanation: 'Incorreto: a Atrogina-1 media a degradação proteolítica de proteínas contráteis durante a atrofia muscular, e não a hipertrofia.',
          },
          {
            id: 'myostatin-receptor-actr',
            label: 'Receptor de miostatina ActRIIB',
            explanation: 'Incorreto: a miostatina é um regulador negativo potente que inibe a proliferação celular e a síntese proteica no músculo esquelético.',
          },
          {
            id: 'caspase-3-cleavage',
            label: 'Caspase-3 ativadora de clivagem apoptótica',
            explanation: 'Incorreto: caspases medeiam apoptose e morte celular programada, não hipertrofia miofibrilar funcional.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'How does heavy resistance exercise signal skeletal muscle cell nuclei to double the synthesis of actin and myosin filaments?',
      title: 'Muscle Plasticity: Hypertrophy, Remodeling, and Sarcopenia',
      description: 'Explore mechanical mechanotransduction via mTOR, phenotypic fiber shifting, ubiquitin-proteasome atrophy, and age-related sarcopenia.',
      objective: 'Identify the Akt-mTORC1 signaling pathway in muscular hypertrophy and contrast ubiquitin-mediated atrophy with senile sarcopenia.',
      stages: [
        {
          id: 'hypertrophy-mtor',
          title: 'Mechanical overload hypertrophy and mTORC1 signaling',
          paragraphs: [
            'Adult skeletal muscle hypertrophy proceeds primarily via expansion of individual fiber cross-sectional area through the addition of sarcomeres in parallel, rather than through de novo hyperplasia (cell division).',
            'Mechanical stretch engages costameric complexes and focal adhesion integrins, initiating mechanotransduction that strongly activates mechanistic target of rapamycin complex 1 (mTORC1). Active mTORC1 phosphorylates p70S6K and inhibits 4E-BP1, accelerating mRNA translation initiation and myofibrillar protein synthesis.',
          ],
          takeaway: 'Mechanical tension activates mTORC1 signaling to drive parallel sarcomere addition and myofibrillar hypertrophy.',
          diagram: 'dna',
        },
        {
          id: 'fiber-shift',
          title: 'Phenotypic remodeling of skeletal muscle fibers',
          paragraphs: [
            'Skeletal muscle fibers demonstrate dynamic phenotypic plasticity dictated by recurrent chronic contractile demands. Prolonged resistance training prompts a phenotypic shift from fatigable fast Type IIx fibers to more fatigue-resistant Type IIa fibers.',
            'Conversely, endurance training activates transcription factor coactivator PGC-1alpha, orchestrating mitochondrial biogenesis, expanding microvascular capillary bed density, and elevating enzymatic oxidative capacity without substantial myofibrillar hypertrophy.',
          ],
          takeaway: 'Fibers dynamically remodel; resistance exercise shifts IIx to IIa, while endurance training activates PGC-1alpha for mitochondrial expansion.',
          diagram: 'phases',
        },
        {
          id: 'atrophy-sarcopenia',
          title: 'Disuse atrophy and age-associated sarcopenia',
          paragraphs: [
            'Limb immobilization, spaceflight microgravity, or denervation triggers rapid muscular catabolism via the ubiquitin-proteasome pathway, directed by muscle-specific E3 ligases (MuRF1 and Atrogin-1/MAFbx) that target sarcomeric proteins for proteasomal degradation.',
            'Sarcopenia is the involuntary, progressive loss of muscle mass, quality, and power accompanying biological aging. It is characterized by motor unit loss, preferential denervation and atrophy of fast Type II fibers, intramyocellular lipid infiltration, and exhausted satellite cell regenerative capacity.',
          ],
          takeaway: 'Disuse atrophy is executed by the ubiquitin-proteasome system; sarcopenia selectively degrades fast Type II motor units in older adults.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which intracellular kinase complex functions as the master biochemical hub driving myofibrillar protein translation and muscle hypertrophy in response to mechanical tension and essential amino acids?',
        options: [
          {
            id: 'mtor-complex-1',
            label: 'mTORC1 (mechanistic target of rapamycin complex 1)',
            explanation: 'Correct: the Akt-mTORC1 pathway integrates mechanical load and nutrient signals to promote ribosomal translation of contractile sarcomeric proteins.',
          },
          {
            id: 'ubiquitin-ligase-atrogin',
            label: 'Atrogin-1 / MAFbx E3 ubiquitin ligase',
            explanation: 'Incorrect: Atrogin-1 orchestrates ubiquitination and catabolic degradation of muscle proteins during periods of disuse atrophy.',
          },
          {
            id: 'myostatin-receptor-actr',
            label: 'Myostatin ActRIIB transmembrane receptor',
            explanation: 'Incorrect: myostatin acts as a potent negative regulator that inhibits muscle cell growth and blocks hypertrophy.',
          },
          {
            id: 'caspase-3-cleavage',
            label: 'Caspase-3 executioner protease complex',
            explanation: 'Incorrect: caspase-3 executes apoptotic cell death cascades and cellular autodigestion rather than adaptive muscular growth.',
          },
        ],
      },
    },
  },
});
