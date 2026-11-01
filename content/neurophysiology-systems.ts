import { lessonSchema } from '../src/contracts/learning';

export const neuroVisionLesson = lessonSchema.parse({
  id: 'neuro-vision',
  revision: 1,
  questionId: 'neuro-vision-q1',
  correctOptionId: 'phototransduction-hyperpolarization',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-ap2e-ch14-vision',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-1-sensory-perception',
      section: 'Chapter 14 · Visual Phototransduction and Retinal Processing',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Por que no escuro os fotorreceptores da retina despolarizam e liberam neurotransmissor sem parar, e a luz os silencia?',
      title: 'Sentidos especiais I: fototransdução e vias ópticas',
      description: 'Descubra a cascata bioquímica da rodopsina, o contraste funcional entre cones e bastonetes e o processamento retiniano até o córtex visual.',
      objective: 'Explicar o mecanismo biofísico da fototransdução retiniana e mapear as etapas da via óptica até o lobo occipital.',
      stages: [
        {
          id: 'dark-current-rhodopsin',
          title: 'A corrente de escuro e a fotoisomerização',
          paragraphs: [
            'No escuro, os fotorreceptores mantêm canais de Na+/Ca²⁺ abertos por altos níveis de GMP cíclico (cGMP), gerando a chamada "corrente de escuro", que mantém a célula despolarizada (~-40 mV) liberando glutamato continuamente.',
            'A chegada de um fóton atinge a rodopsina, fotoisomerizando o 11-cis-retinal em todo-trans-retinal. Isso ativa a proteína G transducina, cuja subunidade alfa estimula a enzima fosfodiesterase (PDE6).',
          ],
          takeaway: 'No escuro os fotorreceptores estão despolarizados; a luz ativa a fosfodiesterase via transducina.',
          diagram: 'neuron',
        },
        {
          id: 'hyperpolarization-event',
          title: 'Degradação de cGMP e hiperpolarização com a luz',
          paragraphs: [
            'A fosfodiesterase ativada quebra rapidamente o cGMP citoplasmático em 5\'-GMP. Sem cGMP ligado, os canais de cátions se fecham abruptamente.',
            'O efluxo contínuo de potássio somado ao bloqueio da entrada de sódio faz com que o fotorreceptor se hiperpolarize (atingindo cerca de -70 mV), cessando a liberação tônica de glutamato na sinapse com células bipolares.',
          ],
          takeaway: 'A absorção de luz fecha canais de sódio, provocando hiperpolarização celular e redução de glutamato.',
          diagram: 'membrane',
        },
        {
          id: 'rods-cones-optic-pathway',
          title: 'Bastonetes versus cones e a via visual',
          paragraphs: [
            'Os bastonetes possuem alta sensibilidade luminosa e baixa resolução temporal e espacial, sendo especializados na visão monocromática noturna (escotópica). Os cones operam sob alta luminosidade (visão fotópica), concentram-se na fóvea central e expressam três opsinas para discriminação de cores (azul, verde e vermelho).',
            'Os axônios das células ganglionares formam o nervo óptico; as fibras nasais decussam no quiasma óptico, enquanto as temporais seguem ipsilateralmente. As radiações ópticas projetam-se do corpo geniculado lateral do tálamo até o córtex estriado primário (V1) no lobo occipital.',
          ],
          takeaway: 'Cones conferem acuidade e cor na fóvea; o quiasma óptico cruza fibras nasais rumo ao tálamo e córtex V1.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento eletrofisiológico ocorre diretamente no fotorreceptor retiniano quando a rodopsina absorve um fóton de luz?',
        options: [
          {
            id: 'phototransduction-hyperpolarization',
            label: 'Fechamento de canais de cátions regulados por cGMP e hiperpolarização da membrana celular',
            explanation: 'Correto: a fosfodiesterase degrada cGMP, fechando canais de Na+/Ca²⁺ e causando hiperpolarização com redução da liberação de glutamato.',
          },
          {
            id: 'photoreceptor-depolarization-na',
            label: 'Abertura imediata de canais de sódio dependentes de voltagem gerando despolarização em espícula',
            explanation: 'Incorreto: a luz fecha canais de sódio e hiperpolariza o fotorreceptor, em vez de despolarizá-lo.',
          },
          {
            id: 'glutamate-massive-surge',
            label: 'Surto maciço de liberação vesicular de glutamato na fenda sináptica retiniana',
            explanation: 'Incorreto: a hiperpolarização reduz a liberação sináptica de glutamato nos terminais do fotorreceptor.',
          },
          {
            id: 'transducin-camp-inversion',
            label: 'Conversão de transducina em receptor adrenérgico ativador de adenilil ciclase e AMPc',
            explanation: 'Incorreto: a transducina ativa a fosfodiesterase de cGMP, sem envolver AMPc ou sinalização adrenérgica.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'Why do retinal photoreceptors depolarize and continuously dump neurotransmitter in pitch darkness, only for light to silence them?',
      title: 'Special senses I: phototransduction and visual pathways',
      description: 'Discover the rhodopsin biochemical cascade, the functional contrast between rods and cones, and retinal projection pathways.',
      objective: 'Explain the biophysical cascade of retinal phototransduction and trace visual signals from retina to the occipital cortex.',
      stages: [
        {
          id: 'dark-current-rhodopsin',
          title: 'The dark current and photoisomerization',
          paragraphs: [
            'In complete darkness, high cytoplasmic levels of cyclic GMP (cGMP) keep non-selective cation channels open, sustaining the steady inward "dark current" that maintains photoreceptors relatively depolarized (~-40 mV) with ongoing glutamate release.',
            'When a photon strikes rhodopsin, it photoisomerizes 11-cis-retinal into all-trans-retinal. This activates the specialized heterotrimeric G protein transducin, whose alpha subunit stimulates cyclic GMP phosphodiesterase 6 (PDE6).',
          ],
          takeaway: 'Photoreceptors are depolarized in the dark; light engages transducin to activate phosphodiesterase.',
          diagram: 'neuron',
        },
        {
          id: 'hyperpolarization-event',
          title: 'cGMP breakdown and light-induced hyperpolarization',
          paragraphs: [
            'Activated PDE6 rapidly hydrolyzes cGMP into 5\'-GMP, reducing its cytosolic concentration. Deprived of cGMP, apical cyclic nucleotide-gated channels snap shut.',
            'Unchecked potassium efflux now polarizes the inner segment toward the K+ equilibrium potential, driving membrane voltage down to ~-70 mV (hyperpolarization) and halting tonic glutamate exocytosis onto bipolar interneurons.',
          ],
          takeaway: 'Photon capture closes cation channels, triggering hyperpolarization and turning down glutamate release.',
          diagram: 'membrane',
        },
        {
          id: 'rods-cones-optic-pathway',
          title: 'Rods versus cones and visual projection',
          paragraphs: [
            'Rods possess high light sensitivity with low spatial resolution, mediating scotopic monochromatic night vision. Cones operate in bright illumination (photopic), pack densely in the central fovea, and express three opsin variants for trichromatic color vision.',
            'Retinal ganglion cell axons assemble the optic nerve; nasal hemiretinal fibers decussate at the optic chiasm, while temporal fibers remain uncrossed. Optic radiations convey signals from the thalamic lateral geniculate nucleus to the primary visual cortex (V1) in the calcarine sulcus.',
          ],
          takeaway: 'Cones supply color and visual acuity in the fovea; nasal fibers decussate at the chiasm en route to V1.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which electrophysiological event occurs directly in a retinal photoreceptor following photon absorption by rhodopsin?',
        options: [
          {
            id: 'phototransduction-hyperpolarization',
            label: 'Closure of cGMP-gated cation channels and membrane hyperpolarization',
            explanation: 'Correct: activated phosphodiesterase breaks down cGMP, causing cation channels to close, which hyperpolarizes the photoreceptor and blunts glutamate release.',
          },
          {
            id: 'photoreceptor-depolarization-na',
            label: 'Immediate opening of voltage-gated sodium channels generating a spike depolarization',
            explanation: 'Incorrect: light closes cation channels and hyperpolarizes the photoreceptor rather than depolarizing it.',
          },
          {
            id: 'glutamate-massive-surge',
            label: 'Massive exocytic surge of vesicular glutamate into the outer plexiform layer',
            explanation: 'Incorrect: hyperpolarization shuts off voltage-dependent calcium channels, suppressing glutamate release.',
          },
          {
            id: 'transducin-camp-inversion',
            label: 'Conversion of transducin into an adrenergic receptor activating adenylyl cyclase and cAMP',
            explanation: 'Incorrect: transducin stimulates cGMP phosphodiesterase; it does not couple to cAMP or adrenergic pathways.',
          },
        ],
      },
    },
  },
});

export const neuroHearingVestibularLesson = lessonSchema.parse({
  id: 'neuro-hearing-vestibular',
  revision: 1,
  questionId: 'neuro-hearing-vestibular-q1',
  correctOptionId: 'hearing-order-correct',
  correctOrderIds: ['tympanic-ossicles', 'fluid-basilar-wave', 'stereocilia-shear-tip-link', 'hair-cell-depolarization'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-ap2e-ch14-hearing',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-1-sensory-perception',
      section: 'Chapter 14 · Auditory and Vestibular Sensory Transduction',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Como a orelha interna consegue detectar frequências sonoras distintas e manter seu equilíbrio corporal no escuro?',
      title: 'Sentidos especiais II: audição e sistema vestibular',
      description: 'Entenda a mecano-transdução no órgão de Corti pelas células ciliadas, o papel da endolinfa rica em K+ e o sistema vestibular.',
      objective: 'Ordenar as etapas da mecano-transdução coclear no órgão de Corti e compreender o funcionamento dos canais semicirculares e órgãos otolíticos.',
      stages: [
        {
          id: 'sound-impedance-tympanic',
          title: 'Casamento de impedância e membrana basilar',
          paragraphs: [
            'A orelha média atua como um amplificador mecânico (casamento de impedância acústica entre o ar e a perilinfa aquosa da cóclea) através da membrana timpânica e da alavanca dos ossículos (martelo, bigorna e estribo).',
            'O pistão da base do estribo na janela oval propaga ondas de pressão pela perilinfa da rampa vestibular, gerando deflexões tonotópicas na membrana basilar: frequências altas vibram a base rígida e estreita, enquanto frequências baixas vibram o ápice flexível e largo (helicotrema).',
          ],
          takeaway: 'Os ossículos casam impedâncias; a membrana basilar possui mapa tonotópico da base ao ápice.',
          diagram: 'sounds',
        },
        {
          id: 'organ-of-corti-tip-links',
          title: 'Tip-links e influxo atípico de potássio',
          paragraphs: [
            'No órgão de Corti, as células ciliadas repousam sobre a membrana basilar com seus estereocílios mergulhados na endolinfa (secretada pela estria vascular e singularmente rica em K+ com potencial positivo de +80 mV).',
            'O cisalhamento mecânico contra a membrana tectorial estica os filamentos proteicos de união de ponta (tip-links), abrindo canais mecanossensíveis MET. Devido ao gradiente eletroquímico favorável, íons K+ entram na célula ciliada, gerando rápida despolarização.',
          ],
          takeaway: 'O influxo de K+ da endolinfa através dos tip-links despolariza as células ciliadas cocleares.',
          diagram: 'membrane',
        },
        {
          id: 'vestibular-semicircular-otoliths',
          title: 'Sistema vestibular: canais semicirculares e otólitos',
          paragraphs: [
            'O labirinto vestibular compreende três canais semicirculares ortogonais que detectam aceleração angular da cabeça através do arrasto da endolinfa sobre a cúpula gelatinosa e os cílios das células ciliadas ampolares.',
            'O utrículo e o sáculo detectam aceleração linear e a gravidade: seus otólitos (cristais pesados de carbonato de cálcio) sobre a membrana otolítica tracionam mecanicamente os estereocílios durante inclinações da cabeça, mantendo o tônus postural e o reflexo vestíbulo-ocular.',
          ],
          takeaway: 'Canais semicirculares detectam rotação; utrículo e sáculo com otólitos monitoram gravidade e aceleração linear.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Ordene a sequência mecanoelétrica que converte uma onda sonora aérea em potenciais de ação no nervo auditivo:',
        items: [
          {
            id: 'tympanic-ossicles',
            label: 'Vibração da membrana timpânica transmitida e amplificada pela cadeia ossicular',
            explanation: 'A onda acústica no ar é convertida em força mecânica no estribo contra a janela oval.',
          },
          {
            id: 'fluid-basilar-wave',
            label: 'Propagação de ondas de pressão na perilinfa coclear e oscilação da membrana basilar',
            explanation: 'O deslocamento da perilinfa gera deformação seletiva por frequência na membrana basilar.',
          },
          {
            id: 'stereocilia-shear-tip-link',
            label: 'Cisalhamento dos estereocílios contra a membrana tectorial e tração dos tip-links',
            explanation: 'A inclinação mecânica estica as pontes moleculares abrindo canais de transdução MET.',
          },
          {
            id: 'hair-cell-depolarization',
            label: 'Influxo de K+ da endolinfa, despolarização celular e liberação de neurotransmissor nas fibras do NC VIII',
            explanation: 'A entrada de potássio abre canais de cálcio e dispara potenciais no nervo vestibulococlear.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'How does the inner ear discriminate subtle musical tones while simultaneously preserving postural equilibrium in the dark?',
      title: 'Special senses II: audition and vestibular physiology',
      description: 'Understand hair cell mechanotransduction in the organ of Corti, the role of K+-rich endolymph, and vestibular spatial orientation.',
      objective: 'Sequence cochlear mechanotransduction in the organ of Corti and explain vestibular semicircular and otolith organ dynamics.',
      stages: [
        {
          id: 'sound-impedance-tympanic',
          title: 'Impedance matching and basilar membrane tonotopy',
          paragraphs: [
            'The middle ear functions as an acoustic transformer, matching low-impedance airborne sound waves to high-impedance cochlear perilymph through surface area convergence (tympanic membrane to oval window) and ossicular lever mechanics.',
            'Piston-like thrusts of the stapes footplate launch hydraulic traveling waves through the scala vestibuli, displacing the basilar membrane in a tonotopic arrangement: high pitches resonate at the stiff, narrow base, whereas low pitches travel to the compliant, wide apex (helicotrema).',
          ],
          takeaway: 'Middle ear ossicles match acoustic impedance; the basilar membrane encodes a tonotopic frequency map.',
          diagram: 'sounds',
        },
        {
          id: 'organ-of-corti-tip-links',
          title: 'Tip-links and non-canonical potassium influx',
          paragraphs: [
            'Inside the organ of Corti, sensory hair cells sit atop the basilar membrane with their stereociliary bundles bathed in endolymph (secreted by the stria vascularis, featuring ~150 mM K+ and a +80 mV endocochlear potential).',
            'Shearing displacement against the overlying tectorial membrane tensions proteinaceous tip-links, which directly open mechanosensitive MET cation channels. Driven by a powerful electrochemical gradient, K+ rushes into the hair cell to elicit rapid depolarization.',
          ],
          takeaway: 'Endolymphatic K+ influx through tensioned tip-links depolarizes cochlear hair cells.',
          diagram: 'membrane',
        },
        {
          id: 'vestibular-semicircular-otoliths',
          title: 'Vestibular labyrinth: semicircular canals and otolith organs',
          paragraphs: [
            'The vestibular apparatus comprises three orthogonal semicircular canals that sense rotational head velocity through inertial endolymph drag across the gelatinous ampullary cupula and embedded hair cells.',
            'The utricle and saccule sense linear acceleration and gravity: dense calcium carbonate otoconia resting atop the otolithic membrane exert gravitational shear on underlying stereocilia, commanding postural reflexes and the vestibulo-ocular reflex.',
          ],
          takeaway: 'Semicircular canals detect rotation; otolithic organs (utricle/saccule) monitor gravity and linear acceleration.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Order the physiological sequence converting airborne acoustic sound into auditory nerve action potentials:',
        items: [
          {
            id: 'tympanic-ossicles',
            label: 'Tympanic membrane vibration transmitted and amplified by the middle ear ossicular chain',
            explanation: 'Acoustic air pressure is converted into amplified mechanical displacement at the oval window.',
          },
          {
            id: 'fluid-basilar-wave',
            label: 'Hydraulic pressure waves in perilymph producing tonotopic deflection of the basilar membrane',
            explanation: 'Perilymph displacement drives frequency-specific mechanical resonance along the basilar partition.',
          },
          {
            id: 'stereocilia-shear-tip-link',
            label: 'Shearing deflection of stereocilia against the tectorial membrane stretching molecular tip-links',
            explanation: 'Mechanical deflection tenses cadherin tip-links to mechanically pull open MET channels.',
          },
          {
            id: 'hair-cell-depolarization',
            label: 'Potassium influx from endolymph, hair cell depolarization, and transmitter release onto cranial nerve VIII',
            explanation: 'Potassium-driven depolarization opens voltage-gated calcium channels to release glutamate onto spiral ganglion afferents.',
          },
        ],
      },
    },
  },
});

export const neuroMotorHierarchyLesson = lessonSchema.parse({
  id: 'neuro-motor-hierarchy',
  revision: 1,
  questionId: 'neuro-motor-hierarchy-q1',
  correctOptionId: 'basal-ganglia-direct-pathway',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-ap2e-ch14-motor',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-3-motor-pathways',
      section: 'Chapter 14 · Cortical Motor Control, Basal Nuclei, and Cerebellum',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Como o cérebro decide iniciar um movimento suave e suprimir espasmos indesejados ao mesmo tempo?',
      title: 'Controle motor superior: córtex, núcleos da base e cerebelo',
      description: 'Explore a hierarquia motora descendente, as vias direta e indireta dos núcleos da base e a coordenação cerebelar em tempo real.',
      objective: 'Distinguir as alças motoras cortico-estriatais (vias direta e indireta dos núcleos da base) e a correção de erros pelo cerebelo.',
      stages: [
        {
          id: 'corticospinal-pyramidal-tract',
          title: 'Córtex motor e trato corticoespinhal',
          paragraphs: [
            'O córtex motor primário (área 4 de Brodmann no giro pré-central) contém o mapa somatotópico do homúnculo motor. O planejamento motor complexo é previamente orquestrado pela área motora suplementar e pelo córtex pré-motor.',
            'O trato corticoespinhal lateral descende através da cápsula interna e cruza 85% a 90% de suas fibras na decussação das pirâmides no bulbo caudal, projetando-se aos motoneurônios do corno ventral para controlar movimentos distais voluntários refinados.',
          ],
          takeaway: 'O trato corticoespinhal lateral decussa no bulbo para comandar a musculatura apendicular fina contralateral.',
          diagram: 'brain',
        },
        {
          id: 'basal-ganglia-circuitry',
          title: 'Núcleos da base: vias direta e indireta',
          paragraphs: [
            'Os núcleos da base (estriado, globo pálido, substância negra e núcleo subtalâmico) formam alças de retroalimentação com o córtex para selecionar e iniciar padrões motores adequados.',
            'A via direta facilita o movimento: o estriado inibe o globo pálido interno (GPi)/substância negra reticulada (SNr), desinibindo o tálamo motor. A via indireta freia o movimento: envolve o globo pálido externo (GPe) e o núcleo subtalâmico (STN) para amplificar a inibição sobre o tálamo. A dopamina da substância negra compacta (SNc) excita a via direta (receptores D1) e inibe a indireta (receptores D2), promovendo movimento.',
          ],
          takeaway: 'A via direta (D1) desinibe o tálamo facilitando o movimento; a via indireta (D2) inibe o tálamo bloqueando ações indesejadas.',
          diagram: 'neuron',
        },
        {
          id: 'cerebellum-comparator',
          title: 'O cerebelo como comparador e corretor de erros',
          paragraphs: [
            'O cerebelo coordena a temporização fina, a métrica e o equilíbrio. Ele não inicia o movimento, mas funciona como um refinador de erros em circuito fechado.',
            'Recebe o plano motor pretendido a partir do córtex (via núcleos pontinos e fibras musgosas) e o estado cinestésico real da periferia (via tratos espinocerebelares e fibras trepadeiras da oliva inferior). As células de Purkinje processam a discrepância e ajustam o tônus motor em tempo real.',
          ],
          takeaway: 'O cerebelo compara o comando pretendido com a execução real para corrigir erros de precisão motora.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual efeito a ativação da via direta dos núcleos da base exerce sobre o córtex cerebral motor?',
        options: [
          {
            id: 'basal-ganglia-direct-pathway',
            label: 'Desinibição dos núcleos ventrolaterais do tálamo, facilitando o disparo de comandos motores para o córtex',
            explanation: 'Correto: a via direta inibe o GPi/SNr, o que cessa a inibição tônica GABAérgica sobre o tálamo, permitindo que o tálamo excite o córtex.',
          },
          {
            id: 'direct-subthalamic-excitation',
            label: 'Estimulação glutamatérgica direta do núcleo subtalâmico para travar a marcha motora',
            explanation: 'Incorreto: a estimulação do núcleo subtalâmico é a chave da via indireta inibitória, não da via direta.',
          },
          {
            id: 'purkinje-cortical-inhibition',
            label: 'Descarga inibitória direta de células de Purkinje sobre os motoneurônios da medula espinal',
            explanation: 'Incorreto: células de Purkinje situam-se no córtex cerebelar e projetam-se aos núcleos cerebelares profundos, não na alça estriatal.',
          },
          {
            id: 'd2-receptor-suppression',
            label: 'Bloqueio estriatal de receptores dopaminérgicos D1 promovendo rigidez plástica imediata',
            explanation: 'Incorreto: a via direta depende da ativação de receptores dopaminérgicos excitatórios D1, cuja perda causa o parkinsonismo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'How does the central nervous system trigger a graceful athletic move while simultaneously suppressing unwanted tremors and twitches?',
      title: 'Higher motor control: motor cortex, basal ganglia, and cerebellum',
      description: 'Explore the descending motor hierarchy, direct and indirect basal ganglia loops, and cerebellar real-time error correction.',
      objective: 'Distinguish cortico-striatal motor loops (direct vs indirect pathways) and explain cerebellar feedforward and feedback error tuning.',
      stages: [
        {
          id: 'corticospinal-pyramidal-tract',
          title: 'Motor cortex and the corticospinal highway',
          paragraphs: [
            'The primary motor cortex (Brodmann area 4 in the precentral gyrus) houses the topographical somatotopic homunculus. Complex kinetic plans are formulated by upstream supplemental motor and premotor cortices.',
            'The lateral corticospinal tract descends through the internal capsule and decussates 85% to 90% of its axons at the medullary pyramidal decussation, targeting ventral horn alpha motor neurons to control skilled contralateral distal extremity movements.',
          ],
          takeaway: 'The lateral corticospinal tract decussates in the medulla to direct fine contralateral manual dexterity.',
          diagram: 'brain',
        },
        {
          id: 'basal-ganglia-circuitry',
          title: 'Basal ganglia: the direct and indirect dual-throttle',
          paragraphs: [
            'The basal ganglia (striatum, globus pallidus, substantia nigra, subthalamic nucleus) form subcortical loops that select and initiate intended motor programs while suppressing competing motor patterns.',
            'The direct pathway facilitates action: striatal medium spiny neurons inhibit the internal globus pallidus (GPi) and substantia nigra reticulata (SNr), disinhibiting the motor thalamus. The indirect pathway passes through the globus pallidus externus (GPe) and subthalamic nucleus (STN) to boost GPi/SNr output, braking the thalamus. Dopamine from the substantia nigra pars compacta (SNc) promotes movement by exciting direct D1 and inhibiting indirect D2 pathways.',
          ],
          takeaway: 'The direct pathway (D1) disinhibits the thalamus to ignite movement; the indirect pathway (D2) clamps unwanted motor programs.',
          diagram: 'neuron',
        },
        {
          id: 'cerebellum-comparator',
          title: 'The cerebellum as an online predictive comparator',
          paragraphs: [
            'The cerebellum coordinates kinetic precision, balance, and fine temporal intervals. It does not initiate voluntary contractions, but functions as a closed-loop comparator.',
            'It receives the intended cortical motor efference copy (via pontine nuclei and mossy fibers) alongside real-time peripheral sensory feedback (via spinocerebellar tracts and inferior olivary climbing fibers). Purkinje cells compute execution errors to recalibrate motor tone dynamically.',
          ],
          takeaway: 'The cerebellum continuously computes disparities between intended motor plans and actual physical movement.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What physiological influence does activation of the basal ganglia direct pathway exert on the motor cerebral cortex?',
        options: [
          {
            id: 'basal-ganglia-direct-pathway',
            label: 'Disinhibition of motor thalamic nuclei, facilitating excitatory drive back to the motor cortex',
            explanation: 'Correct: direct pathway activation inhibits the GPi/SNr, releasing the thalamus from tonic GABAergic inhibition and driving cortical motor output.',
          },
          {
            id: 'direct-subthalamic-excitation',
            label: 'Direct glutamatergic excitation of the subthalamic nucleus to clamp voluntary locomotion',
            explanation: 'Incorrect: subthalamic excitation is the defining mechanism of the indirect inhibitory loop.',
          },
          {
            id: 'purkinje-cortical-inhibition',
            label: 'Direct monosynaptic Purkinje cell inhibition extending into spinal motor pools',
            explanation: 'Incorrect: cerebellar Purkinje neurons reside in the cerebellar cortex and synapse on deep cerebellar nuclei, not spinal cord motoneurons.',
          },
          {
            id: 'd2-receptor-suppression',
            label: 'Selective blockade of striatal D1 receptors producing immediate hypokinetic rigidity',
            explanation: 'Incorrect: the direct pathway is driven by D1 receptor activation; losing this drive characterizes Parkinsonian hypokinesia.',
          },
        ],
      },
    },
  },
});

export const neuroPainAnalgesiaLesson = lessonSchema.parse({
  id: 'neuro-pain-analgesia',
  revision: 1,
  questionId: 'neuro-pain-analgesia-q1',
  correctOptionId: 'substantia-gelatinosa-interneurons',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-ap2e-ch14-pain',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-2-central-processing',
      section: 'Chapter 14 · Nociception, Pain Pathways, and Descending Analgesia',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Por que esfregar vigorosamente a canela após bater na mesa alivia imediatamente a sensação da dor aguda?',
      title: 'Neurofisiologia da dor, teoria do portão e analgesia endógena',
      description: 'Diferencie fibras A-delta e C, analise a modulação espinal pela teoria das comportas de Melzack e Wall e as vias analgésicas descendentes.',
      objective: 'Explicar a teoria do portão da dor no corno posterior da medula e identificar o circuito analgésico opioide descendente da substância cinzenta periaquedutal.',
      stages: [
        {
          id: 'nociceptors-a-delta-c',
          title: 'Nociceptores: fibras A-delta rápidas versus fibras C lentas',
          paragraphs: [
            'A nocicepção é captada por terminações nervosas livres providas de canais como TRPV1 (ativados por calor nocivo e prótons). A dor aguda e bem localizada ("primeira dor") é conduzida por fibras mielinizadas A-delta de velocidade intermediária (5 a 30 m/s).',
            'Já a dor tardia, difusa, em queimação ou latejante ("segunda dor") trafega por fibras amielínicas C lentas (0,5 a 2 m/s). Ambas fazem sua primeira sinapse nas lâminas superficiais de Rexed (lâminas I e II ou substância gelatinosa) do corno dorsal da medula.',
          ],
          takeaway: 'Fibras A-delta mielinizadas mediam dor rápida em pontada; fibras C amielínicas mediam dor tardia em queimação.',
          diagram: 'neuron',
        },
        {
          id: 'gate-control-theory',
          title: 'A teoria do portão de Melzack e Wall',
          paragraphs: [
            'A teoria do portão propõe que a transmissão nociceptiva das fibras C para os neurônios de projeção do trato espinotalâmico pode ser atenuada no corno posterior.',
            'O estímulo de mecanorreceptores táteis de grosso calibre (fibras mielinizadas A-beta, acionadas ao esfregar a pele) ativa interneurônios inibitórios locais na substância gelatinosa. Esses interneurônios liberam GABA e encefalina, promovendo inibição pré-sináptica e fechando o "portão" da dor.',
          ],
          takeaway: 'Fibras táteis A-beta ativam interneurônios inibitórios no corno dorsal, bloqueando o tráfego da dor de fibras C.',
          diagram: 'membrane',
        },
        {
          id: 'descending-analgesia-pathway',
          title: 'O sistema analgésico opioide descendente',
          paragraphs: [
            'O encéfalo dispõe de um potente circuito eferente analgésico intrínseco. A estimulação da substância cinzenta periaquedutal (PAG) no mesencéfalo projeta axônios excitatórios para o núcleo magno da rafe e para o locus coeruleus.',
            'Esses núcleos enviam projeções descendentes que liberam serotonina e noradrenalina no corno posterior da medula, recrutando interneurônios encefalinérgicos locais que expressam receptores opioides mu, bloqueando a liberação de substância P e glutamato das fibras nociceptivas primárias.',
          ],
          takeaway: 'A substância cinzenta periaquedutal ativa vias serotoninérgicas e noradrenérgicas que silenciam a dor na medula.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a sentença sobre os interneurônios modulares do corno posterior da medula espinal na teoria do portão:',
        blank: 'O estímulo tátil de fibras A-beta fecha o portão da dor ativando interneurônios inibitórios na ______ do corno dorsal.',
        options: [
          {
            id: 'substantia-gelatinosa-interneurons',
            label: 'substância gelatinosa (lâmina II de Rexed)',
            explanation: 'Correto: a substância gelatinosa abriga os circuitos de interneurônios inibitórios que modulam a aferência dolorosa pré e pós-sinapticamente.',
          },
          {
            id: 'anterior-horn-motoneurons',
            label: 'raiz anterior de motoneurônios alfa',
            explanation: 'Incorreto: o corno anterior é puramente motor eferente, sem participação no filtro sensorial das comportas.',
          },
          {
            id: 'dorsal-column-gracile',
            label: 'cápsula do núcleo grácil medular',
            explanation: 'Incorreto: o núcleo grácil localiza-se no bulbo, ao passo que o portão da dor opera segmentarmente na medula espinal.',
          },
          {
            id: 'lateral-horn-sympathetic',
            label: 'coluna intermédio-lateral simpática',
            explanation: 'Incorreto: a coluna intermédio-lateral comanda eferências autonômicas pré-ganglionares, não a teoria do portão.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'Why does vigorously rubbing your shin immediately dull the sharp agony of banging it against a coffee table?',
      title: 'Pain neurophysiology, gate control theory, and endogenous analgesia',
      description: 'Differentiate fast A-delta from slow C fibers, unpack Melzack and Wall’s gate control theory, and trace descending opioid analgesia.',
      objective: 'Explain the gate control mechanism in the dorsal horn and trace descending analgesia from the periaqueductal gray.',
      stages: [
        {
          id: 'nociceptors-a-delta-c',
          title: 'Nociceptors: fast A-delta versus slow C fibers',
          paragraphs: [
            'Nociceptive transducers are free nerve endings equipped with ion channels such as TRPV1 (activated by noxious heat, protons, and capsaicin). Sharp, well-localized pain ("first pain") travels along lightly myelinated A-delta fibers at 5 to 30 m/s.',
            'Dull, persistent, burning pain ("second pain") is conveyed along slow unmyelinated C fibers at 0.5 to 2 m/s. Both primary afferents terminate in superficial Rexed laminae (laminae I and II or substantia gelatinosa) of the spinal cord dorsal horn.',
          ],
          takeaway: 'Myelinated A-delta fibers transmit fast prickling pain; unmyelinated C fibers carry slow throbbing pain.',
          diagram: 'neuron',
        },
        {
          id: 'gate-control-theory',
          title: 'Melzack and Wall’s gate control theory',
          paragraphs: [
            'The gate control model posits that nociceptive transmission from C fibers to ascending spinothalamic projection neurons can be gated directly in the dorsal horn.',
            'Concurrently stimulating large-diameter myelinated tactile mechanoreceptive fibers (A-beta fibers, as in rubbing the skin) recruits local GABAergic and enkephalinergic interneurons in the substantia gelatinosa. These interneurons presynaptically inhibit incoming C fiber terminals, closing the sensory gate.',
          ],
          takeaway: 'Tactile A-beta fibers stimulate inhibitory dorsal horn interneurons to close the transmission gate against pain.',
          diagram: 'membrane',
        },
        {
          id: 'descending-analgesia-pathway',
          title: 'The descending opioid-serotonergic analgesic pathway',
          paragraphs: [
            'The central nervous system commands a potent top-down endogenous analgesic circuit. Activation of the midbrain periaqueductal gray (PAG) projects excitatory efferents into the rostral ventromedial medulla (nucleus raphe magnus) and locus coeruleus.',
            'These nuclei send descending projections that liberate serotonin and norepinephrine into the spinal dorsal horn, activating enkephalin-containing interneurons equipped with mu-opioid receptors to block substance P and glutamate release from primary nociceptors.',
          ],
          takeaway: 'Periaqueductal gray stimulation drives descending serotonin/norepinephrine fibers that suppress spinal pain inputs.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence identifying the spinal dorsal horn region where inhibitory interneurons gate nociceptive signals:',
        blank: 'A-beta tactile inputs close the pain gate by stimulating inhibitory interneurons residing in the ______ of the spinal dorsal horn.',
        options: [
          {
            id: 'substantia-gelatinosa-interneurons',
            label: 'substantia gelatinosa (Rexed lamina II)',
            explanation: 'Correct: the substantia gelatinosa houses the interneuronal network that modulates and gates ascending nociceptive inputs.',
          },
          {
            id: 'anterior-horn-motoneurons',
            label: 'ventral horn alpha motoneuron pool',
            explanation: 'Incorrect: the ventral horn supplies somatic motor innervation and plays no part in sensory gating.',
          },
          {
            id: 'dorsal-column-gracile',
            label: 'medullary gracile nuclear capsule',
            explanation: 'Incorrect: the gracile nucleus sits in the caudal medulla, whereas segmental pain gating occurs in the spinal dorsal horn.',
          },
          {
            id: 'lateral-horn-sympathetic',
            label: 'intermediolateral autonomic column',
            explanation: 'Incorrect: the intermediolateral horn contains preganglionic autonomic motor soma, not pain-filtering interneurons.',
          },
        ],
      },
    },
  },
});

export const neuroSleepMemoryLesson = lessonSchema.parse({
  id: 'neuro-sleep-memory',
  revision: 1,
  questionId: 'neuro-sleep-memory-q1',
  correctOptionId: 'nmda-ltp-calcium-ca-mkii',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-ap2e-ch13-sleep-memory',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13 · Sleep Stages, Brain Waves, and Synaptic Plasticity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Como as sinapses do hipocampo consolidam uma memória molecular durante o sono profundo que dura a vida inteira?',
      title: 'Ciclo sono-vigília, ondas do EEG e plasticidade sináptica (LTP)',
      description: 'Explore as fases do sono NREM e REM, os padrões eletroencefalográficos e os mecanismos moleculares da potenciação de longa duração (LTP).',
      objective: 'Correlacionar os estágios do sono aos seus ritmos eletroencefalográficos e descrever os receptores NMDA/AMPA na consolidação da memória.',
      stages: [
        {
          id: 'sleep-stages-eeg-waves',
          title: 'Estágios do sono NREM e ritmos no EEG',
          paragraphs: [
            'O sono divide-se em sono de ondas lentas (NREM, estágios N1 a N3) e sono REM (movimentos oculares rápidos). O estágio N1 exibe ondas teta (4-7 Hz); o estágio N2 é marcado por fusos de sono (sleep spindles, 12-14 Hz) e complexos K.',
            'O estágio N3 (sono profundo ou de ondas lentas) é dominado por ondas delta sincronizadas de alta voltagem e baixa frequência (<4 Hz), momento crucial para liberação de GH, recuperação física e depuração glinfática cerebral.',
          ],
          takeaway: 'N2 apresenta fusos de sono e complexos K; N3 é o sono profundo dominado por ondas delta lentas.',
          diagram: 'phases',
        },
        {
          id: 'rem-sleep-paralysis',
          title: 'Sono REM e atonia motora',
          paragraphs: [
            'O sono REM (sono paradoxal) caracteriza-se por traçado eletroencefalográfico dessincronizado de alta frequência e baixa voltagem semelhante ao estado de vigília ativa (ondas beta e dente de serra).',
            'Durante o REM ocorrem sonhos vívidos, ereções penianas reflexas e atonia muscular periférica pronunciada mediada por interneurônios glicinérgicos bulbares sobre os motoneurônios espinais, impedindo a encenação corporal dos sonhos.',
          ],
          takeaway: 'O sono REM exibe EEG dessincronizado ativo acompanhado de atonia muscular esquelética protetora.',
          diagram: 'brain',
        },
        {
          id: 'ltp-hippocampus-memory',
          title: 'Potenciação de longa duração (LTP) no hipocampo',
          paragraphs: [
            'A base celular do aprendizado e consolidação da memória declarativa reside na potenciação de longa duração (LTP) nas sinapses das células piramidais hipocampais (como a via colateral de Schaffer para CA1).',
            'A despolarização repetida mediada por receptores AMPA ejeta o íon magnésio (Mg²⁺) que bloqueia o poro dos receptores NMDA. Com a liberação do canal NMDA, há influxo maciço de Ca²⁺ que ativa a CaMKII, promovendo inserção de novos receptores AMPA na membrana pós-sináptica e fortalecendo duradouramente a sinapse.',
          ],
          takeaway: 'A ejeção de Mg²⁺ do receptor NMDA permite o influxo de Ca²⁺ e ancoragem de receptores AMPA na LTP.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento molecular é o gatilho decisivo para a indução da potenciação de longa duração (LTP) pós-sináptica no hipocampo?',
        options: [
          {
            id: 'nmda-ltp-calcium-ca-mkii',
            label: 'Ejeção de Mg²⁺ voltagem-dependente dos receptores NMDA com influxo de Ca²⁺ e ativação de CaMKII',
            explanation: 'Correto: a despolarização remove o bloqueio de magnésio dos canais NMDA, permitindo a entrada de cálcio que recruta novos receptores AMPA.',
          },
          {
            id: 'gaba-hyperpolarization-silence',
            label: 'Abertura sustentada de canais de cloreto GABA-A hiperpolarizando a terminação dendrítica',
            explanation: 'Incorreto: a hiperpolarização inibe a indução de LTP ao reforçar o bloqueio de magnésio nos canais NMDA.',
          },
          {
            id: 'ampk-receptor-endocytosis',
            label: 'Endocitose imediata de receptores AMPA induzida por ausência de glutamato pré-sináptico',
            explanation: 'Incorreto: a internalização de receptores AMPA caracteriza a depressão de longa duração (LTD), e não a potenciação (LTP).',
          },
          {
            id: 'glycine-pump-shutdown',
            label: 'Inativação da síntese de óxido nítrico e colapso de vesículas sinápticas retrógradas',
            explanation: 'Incorreto: o óxido nítrico funciona como mensageiro retrógrado que facilita a liberação pré-sináptica na LTP.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'How do hippocampal synapses consolidate a fragile daily impression into a lifelong molecular memory during deep sleep?',
      title: 'Sleep-wake cycles, EEG waveforms, and synaptic plasticity (LTP)',
      description: 'Explore NREM and REM sleep architectures, electroencephalographic signatures, and the molecular mechanics of long-term potentiation.',
      objective: 'Correlate sleep stages with characteristic EEG rhythms and explain NMDA/AMPA-dependent mechanisms underlying memory consolidation.',
      stages: [
        {
          id: 'sleep-stages-eeg-waves',
          title: 'NREM sleep architecture and electroencephalographic waves',
          paragraphs: [
            'Sleep is partitioned into non-rapid eye movement (NREM, stages N1 through N3) and rapid eye movement (REM) sleep. Stage N1 displays low-amplitude theta rhythms (4-7 Hz); stage N2 is distinguished by episodic sleep spindles (12-14 Hz burst oscillations) and high-voltage biphasic K-complexes.',
            'Stage N3 (slow-wave deep sleep) is dominated by synchronized delta waves (<4 Hz), during which growth hormone surges, metabolic recovery peaks, and the brain glymphatic system flushes interstitial neurotoxic waste.',
          ],
          takeaway: 'N2 features sleep spindles and K-complexes; N3 is slow-wave sleep characterized by synchronized delta waves.',
          diagram: 'phases',
        },
        {
          id: 'rem-sleep-paralysis',
          title: 'REM sleep and motor atonia',
          paragraphs: [
            'REM sleep (paradoxical sleep) presents a desynchronized, low-voltage, high-frequency EEG tracing closely resembling active wakefulness, punctuated by sawtooth waves and bursts of rapid ocular saccades.',
            'During REM, vivid dream mentation occurs alongside profound skeletal muscle flaccidity (atonia) orchestrated by pontine glycinergic and GABAergic reticulospinal inhibition of somatic lower motor neurons, preventing physical dream enactment.',
          ],
          takeaway: 'REM sleep exhibits waking-like desynchronized EEG paired with active protective lower motor neuron atonia.',
          diagram: 'brain',
        },
        {
          id: 'ltp-hippocampus-memory',
          title: 'Long-term potentiation (LTP) in the hippocampus',
          paragraphs: [
            'The synaptic paradigm for associative memory consolidation centers on long-term potentiation (LTP) within hippocampal circuits (such as the Schaffer collateral projection onto CA1 pyramidal cells).',
            'Repetitive high-frequency AMPA-mediated depolarization expels the extracellular magnesium ion (Mg²⁺) plugging the NMDA receptor pore. Uncaged NMDA channels permit calcium (Ca²⁺) influx, triggering calcium/calmodulin-dependent kinase II (CaMKII) to anchor additional AMPA receptors into the postsynaptic density.',
          ],
          takeaway: 'Voltage-dependent Mg²⁺ expulsion from NMDA channels permits Ca²⁺ influx and AMPA receptor insertion during LTP.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which molecular event represents the decisive trigger for inducing postsynaptic long-term potentiation (LTP) in the hippocampus?',
        options: [
          {
            id: 'nmda-ltp-calcium-ca-mkii',
            label: 'Voltage-dependent expulsion of Mg²⁺ from NMDA receptors with Ca²⁺ influx and CaMKII activation',
            explanation: 'Correct: strong depolarization displaces the magnesium block from NMDA channels, admitting calcium that activates CaMKII and recruits additional AMPA receptors.',
          },
          {
            id: 'gaba-hyperpolarization-silence',
            label: 'Sustained opening of ionotropic GABA-A chloride channels hyperpolarizing dendritic spines',
            explanation: 'Incorrect: hyperpolarization reinforces the Mg²⁺ block within NMDA receptors, preventing LTP induction.',
          },
          {
            id: 'ampk-receptor-endocytosis',
            label: 'Immediate endocytosis of AMPA receptors driven by acute cessation of presynaptic glutamate',
            explanation: 'Incorrect: AMPA receptor internalization is the hallmark of long-term depression (LTD), the antithesis of LTP.',
          },
          {
            id: 'glycine-pump-shutdown',
            label: 'Inactivation of nitric oxide synthase resulting in retrograde collapse of presynaptic active zones',
            explanation: 'Incorrect: retrograde nitric oxide signaling facilitates presynaptic neurotransmitter release during LTP.',
          },
        ],
      },
    },
  },
});
