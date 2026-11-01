import { lessonSchema } from '../src/contracts/learning';

export const neuroanatomyBrainstemLesson = lessonSchema.parse({
  id: 'neuroanatomy-brainstem',
  revision: 1,
  questionId: 'neuroanatomy-brainstem-q1',
  correctOptionId: 'caudal-medulla-pyramids',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-brainstem-neuro',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13.2 · The Central Nervous System: Brainstem divisions, medulla, pons, and midbrain',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Como uma lesão minúscula de apenas um centímetro no tronco encefálico pode desligar a consciência de uma pessoa ou parar sua respiração instantaneamente?',
      title: 'Tronco encefálico: bulbo, ponte, mesencéfalo e substância reticular',
      description: 'Explore a neuroanatomia do tronco encefálico: centros vitais do bulbo, os pedúnculos e a formação reticular ativadora ascendente.',
      objective: 'Identificar a anatomia seccional do bulbo, ponte e mesencéfalo e explicar a função do SARA na manutenção da vigília.',
      stages: [
        {
          id: 'medulla-oblongata',
          title: 'Bulbo (medula oblonga): pirâmides, olivas e centros vitais',
          paragraphs: [
            'O bulbo conecta a medula espinal à ponte. Em sua face anterior destacam-se duas elevações longitudinais: as pirâmides bulbares, formadas pelos axônios descendentes do trato corticoespinhal.',
            'Na porção caudal do bulbo, cerca de 85% a 90% dessas fibras motoras cruzam a linha média na decussação das pirâmides, o que explica por que uma lesão no hemisfério cerebral esquerdo provoca paresia ou paralisia na metade direita do corpo. Lateralmente às pirâmides situam-se as olivas bulbares, e no interior da substância cinzenta residem os centros reflexos vitais autônomos que controlam o automatismo cardiorrespiratório e a pressão arterial.',
          ],
          takeaway: 'No bulbo ocorre a decussação motora das pirâmides e nele residem os centros autônomos vitais da respiração e ritmo cardíaco.',
          diagram: 'brain',
        },
        {
          id: 'pons-midbrain',
          title: 'Ponte e mesencéfalo',
          paragraphs: [
            'A ponte caracteriza-se por volumosas fibras transversais pontocerebelares que formam os pedúnculos cerebelares médios, conectando o córtex ao cerebelo, e pela emergência na sua face anterolateral do nervo trigêmeo (V par craniano).',
            'O mesencéfalo localiza-se acima da ponte, atravessado pelo aqueduto cerebral de Sylvius. Em seu teto posterior situam-se os colículos superiores (reflexos de orientação visual) e colículos inferiores (processamento auditivo). Em sua base anterior assentam-se os pedúnculos cerebrais e a substância negra, cujos neurônios dopaminérgicos projetam-se para o estriado para regular o movimento voluntário.',
          ],
          takeaway: 'A ponte conecta o córtex ao cerebelo; o mesencéfalo abriga os colículos visuais e auditivos e a substância negra dopaminérgica.',
          diagram: 'phases',
        },
        {
          id: 'reticular-formation',
          title: 'Formação reticular e o sistema SARA',
          paragraphs: [
            'A formação reticular é uma rede difusa e intricada de núcleos e feixes axonais que preenche o centro de todo o tronco encefálico, desde o bulbo até o diencéfalo.',
            'Sua porção rostral constitui o Sistema Ativador Reticular Ascendente (SARA), que recebe colaterais de praticamente todas as vias sensitivas e projeta axônios excitatórios para os núcleos inespecíficos do tálamo e difusamente para todo o córtex cerebral. A atividade do SARA é absolutamente essencial para a manutenção do estado de vigília, alerta e consciência: lesões bilaterais do tegmento do tronco encefálico comprometendo o SARA resultam em coma imediato irreversível.',
          ],
          takeaway: 'O SARA no tronco encefálico ativa o córtex difusamente; sua integridade é obrigatória para manter a consciência e a vigília.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em qual nível anatômico do tronco encefálico ocorre o cruzamento da maior parte das fibras do trato corticoespinhal para o lado oposto (decussação motora), explicando a paralisia contralateral observada em acidentes vasculares cerebrais?',
        options: [
          {
            id: 'caudal-medulla-pyramids',
            label: 'Porção caudal do bulbo (decussação das pirâmides bulbares)',
            explanation: 'Correto: a decussação das pirâmides na transição bulbomedular é o sítio onde 85-90% das fibras corticoespinhais cruzam para formar o trato corticoespinhal lateral.',
          },
          {
            id: 'rostral-midbrain-tectum',
            label: 'Teto do mesencéfalo na altura dos colículos superiores',
            explanation: 'Incorreto: o teto mesencefálico contém os colículos visuais e auditivos, não a decussação piramidal motora.',
          },
          {
            id: 'pontine-tegmentum-core',
            label: 'Tegmento pontino ao nível do núcleo motor do trigêmeo',
            explanation: 'Incorreto: a ponte conduz os tratos motores longitudinalmente na base pontina, mas as fibras só cruzam no bulbo.',
          },
          {
            id: 'inferior-olivary-nucleus',
            label: 'Complexo nuclear olivar inferior do cerebelo vestibular',
            explanation: 'Incorreto: as olivas bulbares projetam fibras trepadeiras para o cerebelo, não sendo a via da decussação corticoespinhal motora.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'How can a discrete structural lesion measuring barely one centimeter in the brainstem instantaneously extinguish human consciousness or halt breathing?',
      title: 'Brainstem: Medulla, Pons, Midbrain, and the Reticular Formation',
      description: 'Explore brainstem neuroanatomy: vital medullary reflex centers, peduncular architecture, and the ascending reticular activating system.',
      objective: 'Identify sectional cross-anatomy of medulla, pons, and midbrain and explain the role of ARAS in sustaining wakefulness.',
      stages: [
        {
          id: 'medulla-oblongata',
          title: 'Medulla oblongata: Pyramids, olives, and vital centers',
          paragraphs: [
            'The medulla oblongata links the spinal cord to the overlying pons. On its anterior ventral surface, two prominent columns emerge: the medullary pyramids, composed of descending motor fibers from the corticospinal tract.',
            'At the caudal border of the medulla, approximately 85% to 90% of these corticospinal axons cross the midline at the decussation of the pyramids, providing the anatomical foundation for contralateral cortical motor control of somatic musculature. Laterally sit the inferior olivary eminences, and embedded deep within medullary reticular gray matter are autonomous reflex networks coordinating cardiovascular and respiratory rhythms.',
          ],
          takeaway: 'The caudal medulla hosts the pyramidal decussation and houses autonomic centers governing respiration and cardiac pacing.',
          diagram: 'brain',
        },
        {
          id: 'pons-midbrain',
          title: 'Pons and midbrain anatomy',
          paragraphs: [
            'The pons is dominated by massive transverse pontocerebellar fibers that assemble into the middle cerebellar peduncles, bridging cortical motor signals to the cerebellum, and marks the anterolateral exit of the trigeminal nerve (cranial nerve V).',
            'The midbrain (mesencephalon) lies rostral to the pons, traversed by the cerebral aqueduct of Sylvius. Dorsally, its tectum houses superior colliculi (visual orienting reflexes) and inferior colliculi (auditory processing). Ventrally sit the cerebral peduncles (crura cerebri) and the substantia nigra, whose dopaminergic neurons project to the dorsal striatum to modulate voluntary movement.',
          ],
          takeaway: 'The pons relays corticopontocerebellar pathways; the midbrain contains visual/auditory colliculi and the dopaminergic substantia nigra.',
          diagram: 'phases',
        },
        {
          id: 'reticular-formation',
          title: 'Reticular formation and the ARAS arousal network',
          paragraphs: [
            'The reticular formation is an intricate, diffuse core of polysynaptic neuronal clusters and intertwining axons occupying the central core of the brainstem from lower medulla through midbrain.',
            'Its rostral component comprises the Ascending Reticular Activating System (ARAS), which samples collateral inputs from ascending sensory modalities and projects excitatory monoaminergic and cholinergic fibers to intralaminar thalamic nuclei and diffusely across the neocortex. ARAS tonic firing is indispensable for conscious arousal and vigilance: bilateral tegmental brainstem damage silencing ARAS plunges the patient into unarousable coma.',
          ],
          takeaway: 'The brainstem ARAS projects widespread neocortical activation; its functional integrity is mandatory to sustain wakefulness and conscious awareness.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'At which anatomical level of the brainstem does the decussation of the majority of corticospinal motor fibers occur, providing the structural basis for contralateral hemiplegia following hemispheric stroke?',
        options: [
          {
            id: 'caudal-medulla-pyramids',
            label: 'Caudal medulla oblongata (pyramidal decussation)',
            explanation: 'Correct: at the spinomedullary junction, 85-90% of descending corticospinal fibers cross the midline to form the lateral corticospinal tract.',
          },
          {
            id: 'rostral-midbrain-tectum',
            label: 'Rostral midbrain tectum at the level of the superior colliculi',
            explanation: 'Incorrect: the midbrain tectum houses visual and auditory colliculi, far rostral to the motor decussation.',
          },
          {
            id: 'pontine-tegmentum-core',
            label: 'Pontine tegmentum at the level of the trigeminal motor nucleus',
            explanation: 'Incorrect: descending motor tracts traverse the basilar pons longitudinally without crossing the midline until medullary levels.',
          },
          {
            id: 'inferior-olivary-nucleus',
            label: 'Inferior olivary nuclear complex of the vestibular cerebellum',
            explanation: 'Incorrect: olivary nuclei project climbing fibers to the contralateral cerebellar cortex, not mediating somatic corticospinal decussation.',
          },
        ],
      },
    },
  },
});

export const neuroanatomyCerebellumLesson = lessonSchema.parse({
  id: 'neuroanatomy-cerebellum',
  revision: 1,
  questionId: 'neuroanatomy-cerebellum-q1',
  correctOptionId: 'gaba-inhibitory',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-cerebellum-neuro',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13.2 · The Central Nervous System: Cerebellar anatomy, cortical layers, Purkinje cells, and motor coordination',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Como o cerebelo consegue calcular e corrigir em tempo real os erros dos nossos movimentos sem que tenhamos consciência de nenhum desses cálculos?',
      title: 'Cerebelo: divisões funcionais, córtex e núcleos profundos',
      description: 'Estude o vestibulocerebelo, espinocerebelo e cerebrocerebelo, o circuito sináptico das células de Purkinje e a síndrome cerebelar.',
      objective: 'Classificar as três zonas funcionais do cerebelo e descrever o circuito celular com a inibição GABAérgica de Purkinje.',
      stages: [
        {
          id: 'cerebellar-divisions',
          title: 'Divisões anatomofuncionais do cerebelo',
          paragraphs: [
            'O cerebelo divide-se filogeneticamente e funcionalmente em três subsistemas especializados que operam em paralelo para refinar a motricidade.',
            'O vestibulocerebelo (arquicerebelo, correspondendo ao lobo floculonodular) conecta-se aos núcleos vestibulares para regular o equilíbrio corporal e a estabilização do olhar (reflexo vestíbulo-ocular). O espinocerebelo (paleocerebelo, formado pelo vérmis e zona paravermeana intermediária) recebe aferências proprioceptivas espinais para ajustar o tônus muscular e coordenar a marcha e postura axial. O cerebrocerebelo (neocerebelo, composto pelos hemisférios laterais) comunica-se extensamente com o córtex cerebral pré-motor para planejar e sincronizar movimentos voluntários finos e complexos.',
          ],
          takeaway: 'Vestibulocerebelo controla equilíbrio; espinocerebelo ajusta postura e marcha; cerebrocerebelo planeja movimentos finos.',
          diagram: 'brain',
        },
        {
          id: 'cerebellar-cortex-circuit',
          title: 'Citoarquitetura em camadas e o circuito de Purkinje',
          paragraphs: [
            'O córtex cerebelar apresenta uma organização geométrica uniforme e repetitiva estruturada em três camadas: a camada molecular externa, a camada intermediária de células de Purkinje e a camada granular interna.',
            'As fibras musgosas ativam os grânulos cerebelares, cujos axônios ascendem e bifurcam-se em fibras paralelas que excitam milhares de espinhos dendríticos das células de Purkinje. As fibras trepadeiras (oriundas exclusivamente da oliva inferior) formam sinapses excitatórias monossinápticas poderosas. Todas as aferências convergem para as células de Purkinje, que constituem a única via eferente de saída do córtex cerebelar: seus axônios são estritamente inibitórios e liberam GABA sobre os neurônios dos núcleos cerebelares profundos.',
          ],
          takeaway: 'As células de Purkinje são a única saída do córtex cerebelar e inibem os núcleos profundos liberando GABA.',
          diagram: 'neuron',
        },
        {
          id: 'deep-nuclei-peduncles',
          title: 'Núcleos profundos e a síndrome cerebelar ipsilateral',
          paragraphs: [
            'Os sinais processados pelo cerebelo deixam o órgão através de quatro pares de núcleos profundos embutidos na substância branca central: denteado (o maior), interpósitos (emboliforme e globoso) e fastigial.',
            'Como as vias cerebelares cruzam a linha média duas vezes antes de alcançarem os efetores periféricos (duplo cruzamento), as lesões hemisféricas cerebelares provocam déficits estritamente ipsilaterais (no mesmo lado da lesão). A síndrome cerebelar clássica é caracterizada por ataxia de marcha, dismetria (erro na mira do teste índex-nariz), tremor de intenção cinético e disdiadococinesia (incapacidade de realizar movimentos rápidos alternados).',
          ],
          takeaway: 'Lesões cerebelares manifestam-se no mesmo lado do corpo (ipsilateral) com ataxia, dismetria e tremor de intenção.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a sentença sobre a neurotransmissão do córtex cerebelar:',
        blank: 'As células de Purkinje representam a única via eferente do córtex cerebelar, exercendo ação estritamente inibitória através da liberação do neurotransmissor __________ sobre os núcleos profundos.',
        options: [
          {
            id: 'gaba-inhibitory',
            label: 'GABA (ácido gama-aminobutírico)',
            explanation: 'Correto: os axônios das células de Purkinje são puramente inibitórios GABAérgicos e regulam a taxa de disparo dos núcleos profundos.',
          },
          {
            id: 'glutamate-excitatory',
            label: 'glutamato monossódico excitatório',
            explanation: 'Incorreto: o glutamato é o transmissor excitatório das células granulares e das fibras trepadeiras, mas não das células de Purkinje.',
          },
          {
            id: 'acetylcholine-nicotinic',
            label: 'acetilcolina nicotínica central',
            explanation: 'Incorreto: a acetilcolina é utilizada na placa motora e em circuitos autonômicos, não como eferência de Purkinje.',
          },
          {
            id: 'dopamine-modulatory',
            label: 'dopamina estriatal nigral',
            explanation: 'Incorreto: a dopamina é sintetizada na substância negra e área tegmentar ventral, não no córtex cerebelar.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'How can the cerebellum calculate and continuously correct ongoing movement trajectory errors in real time without us ever feeling a single calculation?',
      title: 'Cerebellum: Functional Divisions, Cortex, and Deep Nuclei',
      description: 'Study the vestibulocerebellum, spinocerebellum, and cerebrocerebellum, Purkinje inhibitory circuits, and the ipsilateral cerebellar syndrome.',
      objective: 'Classify the three functional cerebellar zones and describe cellular circuitry governed by GABAergic Purkinje inhibition.',
      stages: [
        {
          id: 'cerebellar-divisions',
          title: 'Anatomofunctional subdivisions of the cerebellum',
          paragraphs: [
            'The cerebellum is partitioned phylogenetically and functionally into three modular subdivisions that operate synchronously to sculpt smooth motor output.',
            'The vestibulocerebellum (archicerebellum, corresponding to the flocculonodular lobe) reciprocal links with vestibular nuclei to coordinate whole-body equilibrium and vestibulo-ocular reflexes. The spinocerebellum (paleocerebellum, composed of vermis and intermediate paravermal cortex) integrates spinal somatosensory afferents to calibrate ongoing tone, posture, and gait. The cerebrocerebellum (neocerebellum, forming the extensive lateral hemispheres) links with the contralateral motor neocortex to program and initiate fine, skilled volitional movements.',
          ],
          takeaway: 'Vestibulocerebellum controls balance; spinocerebellum coordinates posture and gait; cerebrocerebellum plans dexterous motor skills.',
          diagram: 'brain',
        },
        {
          id: 'cerebellar-cortex-circuit',
          title: 'Trilaminar cortical architecture and Purkinje inhibition',
          paragraphs: [
            'The cerebellar cortex boasts an invariant, geometrically arranged microcircuit organized into three distinct layers: the outer molecular layer, the intermediate Purkinje cell monolayer, and the inner granule cell layer.',
            'Mossy fibers excite billions of granule cells whose ascending axons bifurcate into parallel fibers traversing the molecular layer to excite Purkinje dendrites. Climbing fibers from the inferior olive wrap directly around Purkinje trees to deliver all-or-nothing complex spikes. Remarkably, Purkinje cells provide the sole efferent conduit out of the cerebellar cortex: their descending axons are uniformly GABAergic, delivering inhibitory modulation onto deep cerebellar nuclei.',
          ],
          takeaway: 'Purkinje cells form the exclusive output of the cerebellar cortex, exerting potent GABAergic inhibition upon deep cerebellar nuclei.',
          diagram: 'neuron',
        },
        {
          id: 'deep-nuclei-peduncles',
          title: 'Deep cerebellar nuclei and ipsilateral cerebellar deficits',
          paragraphs: [
            'Processed signals exit the cerebellum via four paired deep nuclei embedded in central white matter: dentate (largest, lateral), interpositus (emboliform and globose), and fastigial (medial).',
            'Because cerebellar outflow pathways cross the neuraxis twice before reaching peripheral lower motor neurons (double-decussation), unilateral hemispheric cerebellar lesions produce symptoms strictly on the ipsilateral side of the body. The classic cerebellar syndrome presents with kinetic intention tremor, gait ataxia, dysmetria (past-pointing on finger-to-nose testing), and dysdiadochokinesia (inability to execute rapid alternating movements).',
          ],
          takeaway: 'Cerebellar lesions manifest on the same side of the body (ipsilaterally) with intention tremor, dysmetria, and ataxia.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence describing cerebellar cortical efferent neurotransmission:',
        blank: 'Purkinje cells represent the sole efferent projection pathway from the cerebellar cortex, exerting strictly inhibitory modulation via the neurotransmitter __________ upon deep cerebellar nuclei.',
        options: [
          {
            id: 'gaba-inhibitory',
            label: 'GABA (gamma-aminobutyric acid)',
            explanation: 'Correct: Purkinje cell axons are uniformly GABAergic, acting as inhibitory regulators of tonic deep cerebellar nuclear firing.',
          },
          {
            id: 'glutamate-excitatory',
            label: 'excitatory glutamate',
            explanation: 'Incorrect: glutamate is utilized by excitatory granule cells and climbing fibers, not by inhibitory Purkinje output neurons.',
          },
          {
            id: 'acetylcholine-nicotinic',
            label: 'central nicotinic acetylcholine',
            explanation: 'Incorrect: acetylcholine operates at the neuromuscular junction and basal forebrain, not as the primary Purkinje transmitter.',
          },
          {
            id: 'dopamine-modulatory',
            label: 'nigrostriatal dopamine',
            explanation: 'Incorrect: dopamine is synthesized in the substantia nigra pars compacta, not by cerebellar Purkinje neurons.',
          },
        ],
      },
    },
  },
});

export const neuroanatomyDiencephalonLesson = lessonSchema.parse({
  id: 'neuroanatomy-diencephalon',
  revision: 1,
  questionId: 'neuroanatomy-diencephalon-q1',
  correctOptionId: 'olfactory-sensation',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-diencephalon-neuro',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13.2 · The Central Nervous System: Diencephalon, thalamic relay nuclei, hypothalamus, and epithalamus',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Qual sentido primário consegue driblar o tálamo — a grande central telefônica do cérebro — e atingir a memória emocional antes de qualquer filtro consciente?',
      title: 'Diencéfalo: tálamo, hipotálamo, epitálamo e subtálamo',
      description: 'Conheça os grandes núcleos de retransmissão do tálamo, o controle homeostático hipotalâmico, a glândula pineal e o núcleo subtalâmico.',
      objective: 'Identificar os núcleos talâmicos específicos (VPL, VPM, CGL, CGM) e explicar a integração neuroendócrina do hipotálamo.',
      stages: [
        {
          id: 'thalamic-nuclei',
          title: 'O tálamo como portal sensitivo e cognitivo',
          paragraphs: [
            'O tálamo é uma volumosa massa par de substância cinzenta ovalada que flanqueia o terceiro ventrículo, atuando como a estação obrigatória de retransmissão e processamento de quase todas as informações que sobem para o córtex cerebral.',
            'Seus núcleos específicos possuem conexões anatômicas rigorosas: o núcleo ventral posterolateral (VPL) recebe a sensibilidade somática do corpo (dor, temperatura, propriocepção); o núcleo ventral posteromedial (VPM) recebe a sensibilidade da face (trigêmeo) e gustação; o corpo geniculado lateral (CGL) processa a visão vinda do trato óptico; e o corpo geniculado medial (CGM) retransmite a audição. A única exceção notável a essa regra do tálamo é o olfato, cujos tratos atingem diretamente o córtex olfatório e o sistema límbico sem sinapse talâmica prévia obrigatória.',
          ],
          takeaway: 'O tálamo retransmite quase todos os sentidos para o córtex (VPL corpo, VPM face, CGL visão, CGM audição); a exceção é o olfato.',
          diagram: 'brain',
        },
        {
          id: 'hypothalamus-homeostasis',
          title: 'Hipotálamo: centro da homeostase e neuroendócrino',
          paragraphs: [
            'Situado abaixo do sulco hipotalâmico e formando o assoalho do terceiro ventrículo, o hipotálamo pesa menos de 4 gramas, mas comanda a homeostase de todo o organismo.',
            'Ele integra os sistemas nervoso autônomo e endócrino através de diversos núcleos: os núcleos supraóptico e paraventricular sintetizam ocitocina e vasopressina (ADH), transportadas pelo trato hipotálamo-hipofisário até a neuro-hipófise. O hipotálamo anterior regula a dissipação térmica contra calor e estimula o parassimpático; o hipotálamo posterior conserva calor e ativa o simpático; e núcleos como o arqueado e ventromedial governam a fome, saciedade e os eixos hormonais adenohipofisários.',
          ],
          takeaway: 'O hipotálamo governa a homeostase corporal, a temperatura, o apetite, o sistema autônomo e a secreção de hormônios hipofisários.',
          diagram: 'endocrine',
        },
        {
          id: 'epithalamus-subthalamus',
          title: 'Epitálamo e núcleo subtalâmico de Luys',
          paragraphs: [
            'O epitálamo situa-se posteriormente e contém a glândula pineal (epífise), que sintetiza e secreta melatonina na ausência de luz (sob controle do núcleo supraquiasmático hipotalâmico), regulando os ciclos de sono-vigília e ritmos circadianos.',
            'O subtálamo localiza-se na transição entre o mesencéfalo e o tálamo, contendo o núcleo subtalâmico (de Luys). O núcleo subtalâmico é um nó excitatório glutamatérgico fundamental na via indireta dos núcleos da base: lesões isquêmicas ou hemorrágicas agudas no núcleo subtalâmico desinibem o tálamo motor e deflagram hemibalismo (movimentos involuntários violentos, amplos e espasmódicos nos membros contralaterais).',
          ],
          takeaway: 'A pineal (epitálamo) secreta melatonina e sincroniza o sono; a lesão do núcleo subtalâmico causa hemibalismo contralateral.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual modalidade sensorial humana constitui a clássica exceção biológica que alcança diretamente o córtex cerebral primitivo e o sistema límbico sem realizar sinapse obrigatória prévia nos núcleos do tálamo?',
        options: [
          {
            id: 'olfactory-sensation',
            label: 'Olfato (aferências do trato olfatório)',
            explanation: 'Correto: as fibras do trato olfatório projetam-se diretamente para o córtex piriforme e amígdala sem realizar sinapse prévia obrigatória de retransmissão no tálamo.',
          },
          {
            id: 'visual-retinal-pathway',
            label: 'Visão (projeções retinianas do nervo óptico)',
            explanation: 'Incorreto: as fibras visuais realizam sinapse obrigatória no corpo geniculado lateral (CGL) do tálamo antes de atingirem o córtex occipital.',
          },
          {
            id: 'auditory-cochlear-signals',
            label: 'Audição (vias auditivas do lemnisco lateral)',
            explanation: 'Incorreto: a via auditiva realiza sinapse obrigatória no corpo geniculado medial (CGM) do tálamo antes do córtex auditivo primário.',
          },
          {
            id: 'spinothalamic-pain-touch',
            label: 'Dor e temperatura (trato espinotalâmico lateral)',
            explanation: 'Incorreto: como o próprio nome diz, o trato espinotalâmico faz sinapse no núcleo ventral posterolateral (VPL) do tálamo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'Which primary sensory modality can bypass the thalamus — the brain’s grand central relay hub — to directly access emotional memory networks?',
      title: 'Diencephalon: Thalamus, Hypothalamus, Epithalamus, and Subthalamus',
      description: 'Explore thalamic relay nuclei, hypothalamic homeostatic and neuroendocrine command, the pineal gland, and the subthalamic nucleus.',
      objective: 'Identify specific thalamic relay nuclei (VPL, VPM, LGN, MGN) and detail hypothalamic neuroendocrine and autonomic integration.',
      stages: [
        {
          id: 'thalamic-nuclei',
          title: 'The thalamus: Central sensory gatekeeper and relay nexus',
          paragraphs: [
            'The thalamus is a large paired ovoid gray matter mass flanking the third ventricle, serving as the obligatory relay station and dynamic processing gateway for nearly all ascending neural signals bound for the cerebral neocortex.',
            'Its specific nuclei exhibit point-to-point topographical connections: the ventral posterolateral (VPL) nucleus relays somatosensory modalities from the torso and limbs (pain, temperature, vibration, proprioception); the ventral posteromedial (VPM) nucleus relays trigeminal facial sensation and gustatory taste; the lateral geniculate body (LGN) processes retinal visual inputs; and the medial geniculate body (MGN) relays tonotopic auditory streams. The sole notable exception is olfaction, which projects directly from the olfactory bulb to primitive piriform cortex without mandatory thalamic gating.',
          ],
          takeaway: 'The thalamus relays nearly all senses to the cortex (VPL body, VPM face/taste, LGN vision, MGN hearing); olfaction bypasses it.',
          diagram: 'brain',
        },
        {
          id: 'hypothalamus-homeostasis',
          title: 'Hypothalamus: Master autonomic and neuroendocrine command',
          paragraphs: [
            'Positioned ventral to the hypothalamic sulcus and forming the floor of the third ventricle, the hypothalamus weighs under 4 grams yet governs whole-body vegetative homeostasis.',
            'It harmonizes the autonomic nervous system and endocrine cascade through dedicated nuclei: supraoptic and paraventricular nuclei synthesize oxytocin and arginine vasopressin (ADH), transported via axoplasmic flow down the infundibulum to the posterior neurohypophysis. The anterior preoptic hypothalamus directs heat dissipation; the posterior hypothalamus orchestrates heat conservation; and the arcuate and ventromedial nuclei regulate appetite, satiety, and anterior pituitary tropins.',
          ],
          takeaway: 'The hypothalamus controls homeostatic balance: thermoregulation, satiety, autonomic tone, and pituitary endocrine axes.',
          diagram: 'endocrine',
        },
        {
          id: 'epithalamus-subthalamus',
          title: 'Epithalamus and the subthalamic nucleus of Luys',
          paragraphs: [
            'The epithalamus sits dorsally, comprising the pineal gland which converts serotonin into melatonin in the absence of light (governed by retinal input to the hypothalamic suprachiasmatic nucleus), synchronizing circadian rhythms and sleep-wake architecture.',
            'The subthalamus bridges midbrain and thalamus, centered around the biconvex subthalamic nucleus (of Luys). This nucleus supplies essential glutamatergic excitatory drive to the internal globus pallidus within the indirect basal ganglia pathway: acute focal ischemic strokes in the subthalamic nucleus disinhibit the motor thalamus, triggering dramatic, violent, flinging flailing movements termed hemiballismus.',
          ],
          takeaway: 'The pineal gland synchronizes sleep via melatonin; subthalamic nucleus destruction unleashes contralateral violent hemiballismus.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which human primary sensory modality represents the classic biological exception that directly accesses the cerebral cortex and limbic networks without prior obligate synaptic relay within the thalamus?',
        options: [
          {
            id: 'olfactory-sensation',
            label: 'Olfactory sensation (olfactory tract projections)',
            explanation: 'Correct: primary olfactory tract projections reach the piriform cortex, entorhinal area, and amygdala directly without prior thalamic relay synapses.',
          },
          {
            id: 'visual-retinal-pathway',
            label: 'Visual pathway (retinal projections through the optic tract)',
            explanation: 'Incorrect: retinal visual inputs obligatorily synapse in the lateral geniculate nucleus (LGN) of the thalamus before reaching the primary visual cortex.',
          },
          {
            id: 'auditory-cochlear-signals',
            label: 'Auditory inputs (cochlear projections via lateral lemniscus)',
            explanation: 'Incorrect: auditory streams synapse obligatorily in the medial geniculate nucleus (MGN) of the thalamus.',
          },
          {
            id: 'spinothalamic-pain-touch',
            label: 'Pain and temperature (lateral spinothalamic ascending tract)',
            explanation: 'Incorrect: spinothalamic tract fibers synapse within the ventral posterolateral (VPL) nucleus of the thalamus before cortical arrival.',
          },
        ],
      },
    },
  },
});

export const neuroanatomyBasalGangliaLesson = lessonSchema.parse({
  id: 'neuroanatomy-basal-ganglia',
  revision: 1,
  questionId: 'neuroanatomy-basal-ganglia-q1',
  correctOptionId: 'thalamic-disinhibition-movement',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-basal-ganglia',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13.2 · The Central Nervous System: Basal ganglia circuitry, direct and indirect motor loops, and movement disorders',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Como nosso cérebro seleciona exatamente o movimento que desejamos fazer enquanto bloqueia ativamente milhares de outros movimentos involuntários ao mesmo tempo?',
      title: 'Núcleos da base: vias direta e indireta e distúrbios do movimento',
      description: 'Domine a anatomia dos gânglios da base: corpo estriado, substância negra, vias motora direta (D1) e indireta (D2) e patologias associadas.',
      objective: 'Distinguir as vias direta e indireta dos núcleos da base e correlacionar sua disfunção com a doença de Parkinson e a coreia de Huntington.',
      stages: [
        {
          id: 'basal-ganglia-nuclei',
          title: 'Topografia e componentes dos núcleos da base',
          paragraphs: [
            'Os núcleos da base são massas subcorticais de substância cinzenta profundamente inseridas no telencéfalo e mesencéfalo que operam em circuito com o córtex motor para modular a amplitude, velocidade e fluidez dos movimentos voluntários.',
            'Seus componentes fundamentais são o corpo estriado (núcleo caudado e putâmen), o globo pálido (dividido em segmento interno GPi e externo GPe), o núcleo subtalâmico no diencéfalo e a substância negra no mesencéfalo (composta pela pars compacta dopaminérgica e pars reticulata). Separando o núcleo caudado e o tálamo do núcleo lentiforme (putâmen + globo pálido) passa a cápsula interna, corredor essencial de feixes motores descendentes.',
          ],
          takeaway: 'Os núcleos da base (estriado, globo pálido, substância negra e subtálamo) modulam a execução do movimento em conjunto com o córtex.',
          diagram: 'brain',
        },
        {
          id: 'direct-indirect-pathways',
          title: 'O balanço funcional: via direta (D1) vs via indireta (D2)',
          paragraphs: [
            'A seleção motora depende do equilíbrio dinâmico entre duas vias antagônicas que projetam do estriado para os núcleos de saída (GPi e substância negra pars reticulata).',
            'A via direta facilita o movimento: a dopamina liberada pela substância negra ativa receptores D1 excitatórios no estriado, inibindo o GPi por GABA e desinibindo o tálamo ventrolateral, que então estimula o córtex motor. A via indireta suprime movimentos indesejados: a dopamina inibe neurônios com receptores D2 no estriado, impedindo a ativação do núcleo subtalâmico e mantendo o GPi ativo para frear o tálamo motor. A dopamina endógena, portanto, atua globalmente promovendo o movimento ao excitar a via direta e desligar a indireta.',
          ],
          takeaway: 'A via direta (D1) facilita o movimento desinibindo o tálamo; a via indireta (D2) freia o movimento indesejado.',
          diagram: 'neuron',
        },
        {
          id: 'parkinson-huntington',
          title: 'Patologia dos circuitos: Parkinson versus Huntington',
          paragraphs: [
            'Na doença de Parkinson, a morte progressiva dos neurônios dopaminérgicos da substância negra pars compacta elimina o tônus dopaminérgico estriatal, hipoativando a via direta e hiperativando a via indireta de freio. O resultado é o parkinsonismo clássico: bradicinesia grave, acinesia, rigidez muscular plástica em roda denteada, instabilidade postural e tremor de repouso ("contar moedas").',
            'Na doença de Huntington, ocorre a degeneração genética autossômica dominante dos neurônios estriatais espinhosos GABAérgicos que compõem a via indireta. A perda do freio motor indireto desinibe cronicamente o tálamo, deflagrando hipercinesia com movimentos coreicos involuntários, rápidos, irregulares e dançantes.',
          ],
          takeaway: 'Parkinson é hipocinético por perda de dopamina na substância negra; Huntington é hipercinético por perda da via indireta no estriado.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Na fisiologia dos núcleos da base, qual é a consequência motora final da ativação da via motora direta a partir do estriado via receptores dopaminérgicos D1?',
        options: [
          {
            id: 'thalamic-disinhibition-movement',
            label: 'Desinibição do tálamo motor com facilitação da execução do movimento voluntário',
            explanation: 'Correto: a via direta inibe o complexo GPi/SNr por GABA, o que desinibe os núcleos motores do tálamo e impulsiona o córtex a executar o movimento.',
          },
          {
            id: 'subthalamic-hyperactivity-chorea',
            label: 'Hiperativação direta do núcleo subtalâmico com parada motora imediata',
            explanation: 'Incorreto: o núcleo subtalâmico é um intermediário fundamental da via indireta, não da via direta.',
          },
          {
            id: 'striatal-cholinergic-hypertonia',
            label: 'Bloqueio total do fluxo cortical com rigidez plástica descendente',
            explanation: 'Incorreto: a rigidez plástica decorre da perda de dopamina com predomínio patológico da via indireta, e não da ativação da via direta.',
          },
          {
            id: 'corticospinal-lower-spasticity',
            label: 'Hiperreflexia espástica por lesão de motoneurônios superiores corticais',
            explanation: 'Incorreto: espasticidade decorre de lesões corticais ou piramidais, enquanto os núcleos da base regulam rigidez extrapiramidal e fluidez.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'How does our brain effortlessly select the exact movement we want to execute while actively suppressing thousands of unintended movements at once?',
      title: 'Basal Ganglia: Direct and Indirect Pathways and Movement Disorders',
      description: 'Master basal ganglia circuitry: striatum, substantia nigra, direct (D1) and indirect (D2) motor loops, Parkinsonism, and Huntington chorea.',
      objective: 'Distinguish direct and indirect basal ganglia loops and correlate their imbalance with Parkinson disease and Huntington chorea.',
      stages: [
        {
          id: 'basal-ganglia-nuclei',
          title: 'Topography and components of the basal ganglia',
          paragraphs: [
            'The basal ganglia are subcortical gray matter masses deeply embedded in the telencephalon and mesencephalon that operate in closed parallel feedback loops with the motor cortex to modulate movement amplitude, velocity, and initiation.',
            'Core constituents include the corpus striatum (caudate nucleus and putamen), the globus pallidus (internal GPi and external GPe segments), the diencephalic subthalamic nucleus, and the mesencephalic substantia nigra (comprising the dopamine-synthesizing pars compacta and the GABAergic pars reticulata). Separating the caudate and thalamus from the lentiform nucleus is the internal capsule, the dense corridor for descending corticospinal motor axons.',
          ],
          takeaway: 'The basal ganglia (striatum, pallidum, substantia nigra, and subthalamic nucleus) modulate voluntary motor planning alongside the cortex.',
          diagram: 'brain',
        },
        {
          id: 'direct-indirect-pathways',
          title: 'The functional balance: Direct (D1) vs indirect (D2) loops',
          paragraphs: [
            'Motor selection depends on a dynamic equilibrium between two opposing pathways projecting from striatal medium spiny neurons to output stations (GPi and substantia nigra pars reticulata).',
            'The direct pathway facilitates movement: nigral dopamine binds excitatory D1 receptors on striatal neurons, which release GABA to inhibit the GPi/SNr complex. This relieves tonic pallidal inhibition on the motor thalamus (thalamic disinhibition), allowing it to excite neocortical motor programs. The indirect pathway suppresses competing motor patterns: dopamine binds inhibitory D2 receptors, dampening an inhibitory loop involving the GPe and subthalamic nucleus. Thus, physiological dopamine promotes movement by simultaneously turning up the direct pathway and silencing the indirect brake.',
          ],
          takeaway: 'The direct pathway (D1) promotes movement via thalamic disinhibition; the indirect pathway (D2) suppresses competing actions.',
          diagram: 'neuron',
        },
        {
          id: 'parkinson-huntington',
          title: 'Circuit pathophysiology: Parkinson versus Huntington disease',
          paragraphs: [
            'In Parkinson disease, progressive neurodegeneration of dopaminergic neurons in the substantia nigra pars compacta starves the striatum of dopamine, leading to underactivation of the direct pathway and unchecked hyperactivity of the indirect braking loop. This produces a classic hypokinetic syndrome: severe bradykinesia, lead-pipe or cogwheel rigidity, pill-rolling resting tremor, and postural instability.',
            'In Huntington disease, autosomal dominant expansion repeats cause selective early degeneration of striatal GABAergic medium spiny neurons of the indirect pathway. Disabling the indirect brake unleashes unconstrained thalamocortical drive, triggering chorea: rapid, involuntary, dancing, non-stereotyped hyperkinetic movements.',
          ],
          takeaway: 'Parkinson disease is hypokinetic from nigral dopamine loss; Huntington disease is hyperkinetic from indirect striatal pathway degeneration.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In basal ganglia functional neuroanatomy, what is the net downstream motor consequence of activating the striatal direct pathway via dopamine D1 receptors?',
        options: [
          {
            id: 'thalamic-disinhibition-movement',
            label: 'Disinhibition of the motor thalamus, promoting voluntary motor program execution',
            explanation: 'Correct: direct pathway activation inhibits the internal globus pallidus (GPi), releasing the ventral thalamus from tonic inhibition to excite motor cortex.',
          },
          {
            id: 'subthalamic-hyperactivity-chorea',
            label: 'Direct hyperactivity of the subthalamic nucleus triggering immediate motor arrest',
            explanation: 'Incorrect: the subthalamic nucleus is an excitatory relay component within the indirect pathway, not the direct pathway.',
          },
          {
            id: 'striatal-cholinergic-hypertonia',
            label: 'Total blockade of thalamocortical outflow leading to rigid hypokinesia',
            explanation: 'Incorrect: hypokinesia occurs when the direct pathway fails or the indirect pathway is excessively active, as in Parkinsonism.',
          },
          {
            id: 'corticospinal-lower-spasticity',
            label: 'Upper motor neuron hyperreflexic spasticity with clonus',
            explanation: 'Incorrect: spasticity is a sign of pyramidal corticospinal tract lesions, distinct from extrapyramidal basal ganglia movement disorders.',
          },
        ],
      },
    },
  },
});

export const neuroanatomyCortexLimbicLesson = lessonSchema.parse({
  id: 'neuroanatomy-cortex-limbic',
  revision: 1,
  questionId: 'neuroanatomy-cortex-limbic-q1',
  correctOptionId: 'anterograde-amnesia',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-cortex-limbic',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13.2 · The Central Nervous System: Cerebral cortex, Brodmann areas, and the limbic system',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Como um paciente cirúrgico que teve os dois lados do hipocampo removidos podia conversar perfeitamente, mas se esquecia do médico toda vez que ele saía da sala?',
      title: 'Córtex cerebral e sistema límbico: áreas de Brodmann e circuito de Papez',
      description: 'Explore a citoarquitetura cortical de Brodmann, a lateralização hemisférica e o circuito límbico de Papez na memória e emoção.',
      objective: 'Identificar as principais áreas funcionais de Brodmann (4, 3/1/2, 44/45, 22) e descrever o circuito de Papez na consolidação mnemônica.',
      stages: [
        {
          id: 'brodmann-areas',
          title: 'Áreas de Brodmann e especialização funcional cortical',
          paragraphs: [
            'O córtex cerebral humano subdivide-se funcionalmente em áreas citoarquitetônicas descritas por Korbinian Brodmann.',
            'O córtex motor primário situa-se no giro pré-central do lobo frontal (Área 4 de Brodmann), ordenado somatotopicamente no homúnculo motor de Penfield. O córtex somatossensorial primário ocupa o giro pós-central do lobo parietal (Áreas 3, 1 e 2). No hemisfério cerebral dominante (geralmente o esquerdo), localizam-se os centros de linguagem: a Área de Broca (áreas 44 e 45 no giro frontal inferior), responsável pela programação motora da fala e articulação verbal, e a Área de Wernicke (área 22 no giro temporal superior), responsável pela compreensão léxica e decodificação auditiva da linguagem.',
          ],
          takeaway: 'Área 4 comanda o movimento voluntário; 3, 1, 2 processam a sensibilidade; Broca (44/45) articula a fala e Wernicke (22) compreende a linguagem.',
          diagram: 'brain',
        },
        {
          id: 'limbic-hippocampus-amygdala',
          title: 'Sistema límbico: hipocampo e amígdala',
          paragraphs: [
            'O sistema límbico forma um anel de estruturas ao redor do corpo caloso e tronco encefálico, integrando motivação, afeto, respostas viscerais e memória.',
            'O hipocampo, localizado na face medial do lobo temporal, é a estrutura mestra da consolidação da memória declarativa explícita (fatos e episódios): ele converte memórias de curto prazo em memórias duradouras armazenadas no neocórtex. A amígdala (complexo amigdaloide), situada anteriormente ao hipocampo, é o centro de processamento do medo, vigilância social e condicionamento aversivo, ativando o hipotálamo simpático diante de ameaças emocionais.',
          ],
          takeaway: 'O hipocampo consolida novas memórias declarativas; a amígdala processa o medo e orquestra reações emocionais e autonômicas.',
          diagram: 'phases',
        },
        {
          id: 'papez-circuit',
          title: 'O circuito de Papez e a consolidação da memória',
          paragraphs: [
            'Proposto originalmente por James Papez como o substrato anatômico das emoções, este clássico anel neural interconecta o lobo temporal ao diencéfalo e córtex cingulado.',
            'O circuito inicia-se no hipocampo; seus axônios formam a fímbria e convergem no fórnix, que se projeta até os corpos mamilares do hipotálamo. Dos corpos mamilares, o trato mamilotalâmico atinge os núcleos anteriores do tálamo, que projetam para o giro do cíngulo. O giro do cíngulo conecta-se ao giro para-hipocampal e córtex entorrinal, fechando o circuito de volta ao hipocampo. Lesões bilaterais nesse circuito (como no caso do paciente H.M. ou na encefalopatia de Wernicke-Korsakoff por deficiência de tiamina) causam amnésia anterógrada densa irreversível.',
          ],
          takeaway: 'O circuito de Papez (hipocampo-fórnix-mamilares-tálamo-cíngulo-hipocampo) é vital para a consolidação de memórias explícitas.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'A destruição bilateral dos hipocampos e estruturas mediais do lobo temporal (como na encefalite por herpes simples ou ablação cirúrgica experimental) resulta na incapacidade de consolidar novos fatos ou acontecimentos na memória de longo prazo, síndrome designada como:',
        options: [
          {
            id: 'anterograde-amnesia',
            label: 'Amnésia anterógrada densa (incapacidade de formar novas memórias explícitas)',
            explanation: 'Correto: o hipocampo é indispensável para consolidar a memória declarativa recente em longo prazo; sua perda impede a formação de memórias após o evento lesivo.',
          },
          {
            id: 'sensory-receptive-aphasia',
            label: 'Afasia de recepção de Wernicke com perda da compreensão da fala',
            explanation: 'Incorreto: a afasia de Wernicke decorre de lesão na porção posterior do giro temporal superior dominante (área 22), não do hipocampo.',
          },
          {
            id: 'pure-visual-prosopagnosia',
            label: 'Prosopagnosia pura com incapacidade de reconhecer faces familiares',
            explanation: 'Incorreto: a prosopagnosia é causada por lesão no giro fusiforme occipitotemporal, sem relação primária com a formação global de memórias.',
          },
          {
            id: 'contralateral-hemineglect',
            label: 'Heminegligência visuoespacial contralateral grave',
            explanation: 'Incorreto: a heminegligência decorre de lesões no lobo parietal posterior não dominante (direito).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'How could a neurosurgical patient whose medial temporal lobes were bilaterally resected speak fluently yet forget his doctor each time he stepped out of the room?',
      title: 'Cerebral Cortex and Limbic System: Brodmann Areas and the Papez Circuit',
      description: 'Explore cytoarchitectonic Brodmann mapping, functional hemispheric lateralization, and the Papez limbic circuit in declarative memory consolidation.',
      objective: 'Identify key functional Brodmann areas (4, 3/1/2, 44/45, 22) and trace the Papez circuit in long-term memory encoding.',
      stages: [
        {
          id: 'brodmann-areas',
          title: 'Brodmann cytoarchitecture and functional cortical specialization',
          paragraphs: [
            'The human cerebral cortex is functionally demarcated into cytoarchitectonic fields categorized historically by Korbinian Brodmann.',
            'The primary motor cortex occupies the precentral gyrus of the frontal lobe (Brodmann Area 4), somatotopically arranged as Penfield’s motor homunculus. The primary somatosensory cortex spans the postcentral gyrus of the parietal lobe (Brodmann Areas 3, 1, and 2). Within the categorical dominant hemisphere (typically the left), dedicated language modules preside: Broca’s area (Brodmann 44 and 45 within the inferior frontal gyrus) commands speech motor programming and articulation, while Wernicke’s area (Brodmann 22 within the posterior superior temporal gyrus) governs language comprehension and lexical decoding.',
          ],
          takeaway: 'Area 4 executes voluntary motor output; Areas 3, 1, 2 process sensation; Broca (44/45) articulates speech; Wernicke (22) decodes language.',
          diagram: 'brain',
        },
        {
          id: 'limbic-hippocampus-amygdala',
          title: 'The limbic system: Hippocampus and amygdala',
          paragraphs: [
            'The limbic system forms an anatomical ring of interconnected archicortical and subcortical structures girdling the corpus callosum and upper brainstem, integrating drive, affect, visceral responses, and memory.',
            'The hippocampus, situated along the medial temporal lobe, is the master engine for declarative (explicit) episodic memory consolidation: it processes short-term traces into enduring neocortical storage. The amygdaloid complex, resting immediately anterior to the hippocampal head, is the principal hub for fear conditioning, emotional valence appraisal, and triggering sympathetic stress axes via downstream hypothalamic projections.',
          ],
          takeaway: 'The hippocampus consolidates explicit declarative memories; the amygdala orchestrates fear conditioning and autonomic emotional drives.',
          diagram: 'phases',
        },
        {
          id: 'papez-circuit',
          title: 'The Papez circuit and memory consolidation',
          paragraphs: [
            'Postulated by James Papez as the anatomical framework for emotional experience, this prominent closed loop links the temporal lobe with the diencephalon and cingulate cortex.',
            'The circuit originates in the subiculum/hippocampus; outgoing axons form the fimbria and arch into the fornix, terminating within the hypothalamic mammillary bodies. From there, the mammillothalamic tract reaches the anterior thalamic nucleus, which projects through the internal capsule to the cingulate gyrus. Cingulate fibers travel via the cingulum to the parahippocampal gyrus and entorhinal cortex, closing the loop back into the hippocampus. Bilateral interruption of this loop (as in the classic case of patient H.M. or thiamine deficiency in Wernicke-Korsakoff syndrome) results in profound, irreversible anterograde amnesia.',
          ],
          takeaway: 'The Papez circuit (hippocampus-fornix-mammillary bodies-thalamus-cingulate-hippocampus) is required to form new long-term declarative memories.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Bilateral surgical resection or ischemic necrosis of the medial temporal lobes and hippocampi (as documented in patient H.M.) results in the complete inability to consolidate new declarative episodic memories, a clinical condition termed:',
        options: [
          {
            id: 'anterograde-amnesia',
            label: 'Dense anterograde amnesia (inability to encode new long-term explicit memories)',
            explanation: 'Correct: the hippocampus is essential for consolidating short-term memory traces into long-term neocortical storage; its bilateral loss permanently abolishes new declarative memory acquisition.',
          },
          {
            id: 'sensory-receptive-aphasia',
            label: 'Wernicke’s receptive aphasia with loss of auditory speech comprehension',
            explanation: 'Incorrect: Wernicke’s aphasia results from lesions in the posterior superior temporal gyrus (Brodmann area 22), not the medial temporal hippocampus.',
          },
          {
            id: 'pure-visual-prosopagnosia',
            label: 'Pure visual prosopagnosia marked by the inability to recognize familiar human faces',
            explanation: 'Incorrect: prosopagnosia stems from damage to the fusiform face area within the ventral occipitotemporal cortex.',
          },
          {
            id: 'contralateral-hemineglect',
            label: 'Contralateral visuospatial neglect syndrome',
            explanation: 'Incorrect: hemineglect results from damage to the non-dominant posterior parietal association cortex.',
          },
        ],
      },
    },
  },
});
