import { lessonSchema } from '../src/contracts/learning';

export const neuroanatomyMeningesCsfLesson = lessonSchema.parse({
  id: 'neuroanatomy-meninges-csf',
  revision: 1,
  questionId: 'neuroanatomy-meninges-subarachnoid',
  correctOptionId: 'subarachnoid-space',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-meninges-csf',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-3-circulation-and-the-central-nervous-system',
      section: 'Chapter 13.3 · Circulation and the Central Nervous System: Meninges, ventricles, and cerebrospinal fluid flow',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Como um cérebro de 1,4 kg consegue flutuar dentro do crânio sem esmagar seus próprios vasos sanguíneos sob o efeito da gravidade?',
      title: 'Meninges e líquor: proteção encefálica e dinâmica liquórica',
      description: 'Conheça as três túnicas meníngeas (dura-máter, aracnoide e pia-máter), o espaço subaracnóideo e a circulação do líquido cefalorraquidiano.',
      objective: 'Identificar as três camadas meníngeas, localizar o espaço subaracnóideo e descrever o circuito de produção e reabsorção do LCR.',
      stages: [
        {
          id: 'meningeal-layers',
          title: 'As três camadas meníngeas: dura, aracnoide e pia-máter',
          paragraphs: [
            'O encéfalo e a medula espinal são revestidos por três membranas protetoras concêntricas chamadas meninges.',
            'A dura-máter é a mais externa e espessa (paquimeninge), composta por tecido conjuntivo fibroso denso. A camada intermediária é a aracnoide-máter, delgada e avascular, dotada de trabéculas colágenas semelhantes a teias. A mais interna é a pia-máter, delgadíssima membrana vascular colada intimamente ao relevo dos giros e sulcos corticais.',
          ],
          takeaway: 'Dura-máter (externa e espessa), aracnoide (intermediária) e pia-máter (íntima ao tecido nervoso) protegem o SNC.',
          diagram: 'brain',
        },
        {
          id: 'subarachnoid-space',
          title: 'O espaço subaracnóideo e suas relações clínicas',
          paragraphs: [
            'O espaço subaracnóideo situa-se entre a aracnoide e a pia-máter, preenchido por líquido cefalorraquidiano (LCR) circulante e atravessado pelas principais artérias e veias cerebrais.',
            'A ruptura de aneurismas saculares congênitos no polígono de Willis extravasa sangue diretamente para esse compartimento, provocando a clássica hemorragia subaracnóidea com cefaleia súbita de forte intensidade.',
          ],
          takeaway: 'O líquor e os grandes vasos arteriais da base do crânio transitam pelo espaço subaracnóideo.',
          diagram: 'brain',
        },
        {
          id: 'csf-circulation',
          title: 'Produção, circulação e reabsorção do LCR',
          paragraphs: [
            'O líquido cefalorraquidiano é produzido continuamente (~500 mL/dia) pelas células ependimárias modificadas dos plexos coroides situados nos ventrículos laterais, terceiro e quarto ventrículos.',
            'O LCR flui dos ventrículos para o espaço subaracnóideo através das aberturas mediana (Magendie) e laterais (Luschka) do IV ventrículo. Circula em torno do encéfalo e medula, sendo finalmente reabsorvido de volta ao sangue venoso pelas granulações aracnóideas nos seios da dura-máter (principalmente no seio sagital superior).',
          ],
          takeaway: 'O LCR nasce nos plexos coroides ventriculares, banha o espaço subaracnóideo e é reabsorvido nas granulações aracnóideas.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em qual compartimento anatômico circula continuamente o líquido cefalorraquidiano (LCR) banhando o encéfalo e onde trafegam os ramos arteriais do polígono de Willis?',
        options: [
          {
            id: 'subarachnoid-space',
            label: 'Espaço subaracnóideo (entre a aracnoide e a pia-máter)',
            explanation: 'Correto: o espaço subaracnóideo abriga o LCR circulante, os vasos cerebrais e as trabéculas aracnóideas, servindo de amortecedor hidráulico do SNC.',
          },
          {
            id: 'epidural-space',
            label: 'Espaço peridural intracraniano (entre o osso do crânio e a dura-máter)',
            explanation: 'Incorreto: no crânio, o espaço peridural é apenas virtual; um hematoma extradural decorre de laceração da artéria meníngea média.',
          },
          {
            id: 'subdural-space',
            label: 'Espaço subdural (entre a dura-máter e a aracnoide-máter)',
            explanation: 'Incorreto: o espaço subdural é virtual e preenchido apenas por filme fino de fluido, sendo local de hematomas por rotura de veias-ponte.',
          },
          {
            id: 'central-canal-only',
            label: 'Exclusivamente no canal central ependimário da medula espinal',
            explanation: 'Incorreto: o canal central é vestigial no adulto; a circulação maciça do LCR dá-se pelos ventrículos e espaço subaracnóideo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'How can a 1.4-kilogram human brain float effortlessly within the rigid cranium without crushing its delicate basal blood vessels?',
      title: 'Meninges and CSF: Encephalic Protection and Fluid Dynamics',
      description: 'Master the three meningeal envelopes (dura mater, arachnoid, and pia mater), the subarachnoid space, and the cerebrospinal fluid loop.',
      objective: 'Identify the three meningeal coats, localize the subarachnoid space, and trace the life cycle of CSF production and reabsorption.',
      stages: [
        {
          id: 'meningeal-layers',
          title: 'The three meningeal coverings: Dura, arachnoid, and pia mater',
          paragraphs: [
            'The brain and spinal cord are enveloped by three protective connective tissue coverings called the cranial and spinal meninges.',
            'The outermost dura mater (pachymeninx) is dense, tough fibrous collagen. The intermediate arachnoid mater is a thin, avascular membrane bearing cobweb-like trabeculae extending inwards. The innermost pia mater is a delicate, vascularized sheath intimately adherent to the cerebral gyri and sulci.',
          ],
          takeaway: 'Dura mater (outermost and tough), arachnoid (middle web-like), and pia mater (innermost delicate) envelop the CNS.',
          diagram: 'brain',
        },
        {
          id: 'subarachnoid-space',
          title: 'The subarachnoid space and clinical correlations',
          paragraphs: [
            'The subarachnoid space lies between the arachnoid mater and the pia mater, filled with flowing cerebrospinal fluid (CSF) and traversed by major cerebral blood vessels.',
            'Rupture of congenital saccular (berry) aneurysms at circle of Willis branching points bleeds directly into this space, causing severe sudden subarachnoid hemorrhage typically heralded by a thunderclap headache.',
          ],
          takeaway: 'CSF and major intracranial basal arteries travel through the subarachnoid space.',
          diagram: 'brain',
        },
        {
          id: 'csf-circulation',
          title: 'CSF formation, ventricular circulation, and reabsorption',
          paragraphs: [
            'Cerebrospinal fluid is synthesized continuously (~500 mL/day) by specialized ependymal cells of the choroid plexuses within lateral, third, and fourth ventricles.',
            'CSF flows through the ventricular conduits into the subarachnoid space via the median aperture (Magendie) and lateral apertures (Luschka) of the fourth ventricle. After bathing the neural neuraxis, CSF drains through arachnoid granulations into dural venous sinuses (principally the superior sagittal sinus).',
          ],
          takeaway: 'CSF is produced in choroid plexuses, circulates within the subarachnoid space, and returns to venous blood via arachnoid granulations.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In which anatomical compartment does cerebrospinal fluid (CSF) continuously circulate to cushion the central nervous system, and where do the arterial branches of the circle of Willis travel?',
        options: [
          {
            id: 'subarachnoid-space',
            label: 'Subarachnoid space (between arachnoid mater and pia mater)',
            explanation: 'Correct: the subarachnoid space contains circulating CSF, delicate trabecular cords, and cerebral blood vessels, acting as a buoyant hydraulic shock absorber.',
          },
          {
            id: 'epidural-space',
            label: 'Cranial epidural space (between cranial vault bones and periosteal dura)',
            explanation: 'Incorrect: the cranial epidural space is a potential space only; tearing of the middle meningeal artery produces an acute epidural hematoma.',
          },
          {
            id: 'subdural-space',
            label: 'Subdural space (between dural inner layer and arachnoid membrane)',
            explanation: 'Incorrect: the subdural space is a potential cleavable plane where shearing of bridging veins creates a subdural hematoma.',
          },
          {
            id: 'central-canal-only',
            label: 'Confined strictly within the tiny ependymal central canal of the spinal cord',
            explanation: 'Incorrect: the spinal central canal carries negligible fluid in adults; bulk CSF circulation takes place across the ventricles and subarachnoid cisterns.',
          },
        ],
      },
    },
  },
});

export const neuroanatomySpinalCordLesson = lessonSchema.parse({
  id: 'neuroanatomy-spinal-cord',
  revision: 1,
  questionId: 'neuroanatomy-spinal-roots',
  correctOptionId: 'sensory-dorsal-root-ganglion',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-spinal-cord',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',
      section: 'Chapter 13.2 · The Central Nervous System: Spinal cord gray matter, white matter tracts, and spinal nerve roots',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Como a medula espinal separa perfeitamente os sinais sensitivos que sobem do corpo dos comandos motores que descem para os músculos?',
      title: 'Medula espinal: substância cinzenta, raízes nervosas e cauda equina',
      description: 'Estude a anatomia seccional da medula: H medular cinzento, a segregação funcional das raízes dorsais e ventrais e o cone medular.',
      objective: 'Diferenciar a função sensitiva da raiz dorsal da função motora da raiz ventral e identificar os níveis do cone medular e cauda equina.',
      stages: [
        {
          id: 'grey-white-matter',
          title: 'Organização seccional: H cinzento e substância branca',
          paragraphs: [
            'Em secção transversal, a medula espinal apresenta uma área central de substância cinzenta em formato de borboleta ou H, circundada por tratos ascendentes e descendentes de substância branca.',
            'O corno dorsal (posterior) da substância cinzenta recebe axônios aferentes sensitivos, o corno lateral (em segmentos T1-L2) contém corpos pré-ganglionares simpáticos, e o corno ventral (anterior) abriga os grandes corpos de neurônios motores inferiores responsáveis pela contração muscular.',
          ],
          takeaway: 'O corno dorsal processa aferências sensitivas; o corno ventral contém motoneurônios eferentes.',
          diagram: 'neuron',
        },
        {
          id: 'spinal-roots-law',
          title: 'Lei de Bell-Magendie: raízes dorsais vs raízes ventrais',
          paragraphs: [
            'Cada segmento medular emite dois pares de radículas que convergem para formar raízes nervosas anterior e posterior.',
            'A raiz dorsal é exclusivamente sensitiva: seus axônios conduzem tato, propriocepção, dor e temperatura da periferia, e seus corpos celulares residem fora do SNC, no gânglio da raiz dorsal. A raiz ventral é exclusivamente motora: conduz potenciais eferentes que partem dos motoneurônios do corno ventral em direção aos músculos.',
          ],
          takeaway: 'Raiz dorsal é sensitiva e possui gânglio espinal; raiz ventral é motora e eferente.',
          diagram: 'neuron',
        },
        {
          id: 'conus-cauda-equina',
          title: 'Cone medular, cauda equina e punção lombar',
          paragraphs: [
            'No adulto, a medula espinal não percorre toda a coluna vertebral; ela afila e termina no cone medular na altura das vértebras L1 ou L2.',
            'Abaixo de L2, o saco dural contém apenas raízes nervosas alongadas descendentes que lembram uma cauda de cavalo (cauda equina). Por esse motivo, punções lombares diagnósticas e anestesias raquidianas são realizadas nos interespaços vertebrais L3-L4 ou L4-L5, onde se colhe LCR sem risco de lesar a medula espinal.',
          ],
          takeaway: 'A medula termina em L1-L2 no cone medular; raízes lombares e sacrais formam a cauda equina no saco dural inferior.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a função privativa da raiz dorsal (posterior) de um nervo espinal e qual estrutura anatômica aloja os corpos celulares de seus neurônios aferentes de primeira ordem?',
        options: [
          {
            id: 'sensory-dorsal-root-ganglion',
            label: 'Função sensitiva (aferente), com corpos celulares localizados no gânglio da raiz dorsal',
            explanation: 'Correto: pela lei de Bell-Magendie, a raiz dorsal conduz informações sensitivas e seus neurônios pseudounipolares têm seus corpos alojados no gânglio espinal da raiz dorsal.',
          },
          {
            id: 'motor-anterior-horn',
            label: 'Função motora voluntária, com corpos neuronais situados no corno anterior da medula',
            explanation: 'Incorreto: a função motora eferente é exercida pela raiz ventral anterior, cujos corpos estão no corno ventral cinzento.',
          },
          {
            id: 'sympathetic-chain-ganglion',
            label: 'Inervação autonômica simpática pura, com somas na cadeia paravertebral',
            explanation: 'Incorreto: as fibras eferentes simpáticas pré-ganglionares saem pela raiz ventral antes de se conectarem à cadeia paravertebral.',
          },
          {
            id: 'parasympathetic-lateral-horn',
            label: 'Reflexos inibitórios motores, com corpos residindo no fascículo cuneiforme',
            explanation: 'Incorreto: o fascículo cuneiforme é uma via de substância branca condutora de propriocepção e tato fino, não abrigando corpos de neurônios motores.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'How does the spinal cord flawlessly segregate incoming sensory signals from descending motor commands to the muscles?',
      title: 'Spinal Cord: Gray Matter, Nerve Roots, and the Cauda Equina',
      description: 'Study sectional spinal anatomy: the central gray butterfly, functional segregation of dorsal and ventral roots, and the conus medullaris.',
      objective: 'Distinguish sensory dorsal roots from motor ventral roots and identify the spinal levels of the conus medullaris and cauda equina.',
      stages: [
        {
          id: 'grey-white-matter',
          title: 'Cross-sectional architecture: Gray H and white columns',
          paragraphs: [
            'In cross section, the spinal cord exhibits a butterfly-shaped central core of neuronal gray matter wrapped in ascending and descending myelinated white matter tracts.',
            'The posterior (dorsal) gray horn receives sensory afferent terminals; the lateral horn (at T1–L2) houses sympathetic preganglionic neurons; and the anterior (ventral) horn contains somatic alpha motor neuron cell bodies providing motor supply to skeletal muscle.',
          ],
          takeaway: 'Dorsal horns process incoming sensory data; ventral horns contain lower motor neurons driving muscular contraction.',
          diagram: 'neuron',
        },
        {
          id: 'spinal-roots-law',
          title: 'The Bell-Magendie Law: Dorsal vs ventral roots',
          paragraphs: [
            'Each spinal cord segment gives origin to series of rootlets that coalesce into separate dorsal and ventral nerve roots.',
            'Under the Bell-Magendie law, dorsal roots are strictly sensory: their fibers convey touch, proprioception, pain, and temperature, with cell bodies located in the dorsal root ganglion. Ventral roots are strictly motor: they transmit efferent action potentials from ventral horn motor neurons out to target muscles.',
          ],
          takeaway: 'Dorsal roots are sensory and possess a spinal ganglion; ventral roots are motor and efferent.',
          diagram: 'neuron',
        },
        {
          id: 'conus-cauda-equina',
          title: 'Conus medullaris, cauda equina, and lumbar puncture',
          paragraphs: [
            'In adult humans, the spinal cord terminates well above the end of the vertebral canal, tapering into the conical conus medullaris at the L1–L2 vertebral level.',
            'Below this terminus, the thecal sac contains an elongated bundle of lumbar and sacral roots known as the cauda equina (horse’s tail). Consequently, diagnostic lumbar punctures are performed at L3–L4 or L4–L5 interspaces, harvesting CSF without jeopardizing the spinal cord.',
          ],
          takeaway: 'The spinal cord ends at L1–L2 in the conus medullaris; lumbar and sacral nerve roots form the cauda equina within the inferior dural sac.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the exclusive functional role of the dorsal (posterior) root of a spinal nerve, and which anatomical structure houses the cell bodies of its primary afferent neurons?',
        options: [
          {
            id: 'sensory-dorsal-root-ganglion',
            label: 'Sensory (afferent) function, with pseudounipolar cell bodies housed within the dorsal root ganglion',
            explanation: 'Correct: under the Bell-Magendie law, the dorsal root conveys sensory afferents whose primary sensory neuron cell bodies reside in the dorsal root ganglion outside the spinal cord.',
          },
          {
            id: 'motor-anterior-horn',
            label: 'Voluntary motor execution, with cell bodies situated in the anterior gray horn of the cord',
            explanation: 'Incorrect: motor efferents travel through the ventral anterior root, whose cell bodies reside within the anterior horn.',
          },
          {
            id: 'sympathetic-chain-ganglion',
            label: 'Pure visceral sympathetic tone, with somas stationed in the paravertebral sympathetic chain',
            explanation: 'Incorrect: preganglionic sympathetic fibers exit through the ventral root before traversing white rami communicantes to sympathetic ganglia.',
          },
          {
            id: 'parasympathetic-lateral-horn',
            label: 'Inhibitory motor reflexes, with somas packed inside the ascending cuneate fasciculus',
            explanation: 'Incorrect: the cuneate fasciculus is an ascending white matter sensory column conveying dorsal column proprioception, not motor neuron somas.',
          },
        ],
      },
    },
  },
});

export const neuroanatomyCranialNervesLesson = lessonSchema.parse({
  id: 'neuroanatomy-cranial-nerves',
  revision: 1,
  questionId: 'neuroanatomy-cranial-vagus',
  correctOptionId: 'vagus-nerve-x',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-cranial-nerves',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-4-the-peripheral-nervous-system',
      section: 'Chapter 13.4 · The Peripheral Nervous System: Cranial nerves classification, pathways, and functional modalities',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Qual nervo craniano se estende muito além da cabeça e pescoço para controlar o ritmo dos batimentos cardíacos e a digestão?',
      title: 'Nervos cranianos: classificação funcional, trigêmeo, facial e vago',
      description: 'Domine a anatomia dos 12 pares de nervos cranianos, diferenciando nervos sensitivos, motores e mistos, com foco nos nervos V, VII e X.',
      objective: 'Classificar os 12 pares cranianos por modalidade funcional e identificar o nervo vago como o principal eferente parassimpático visceral.',
      stages: [
        {
          id: 'cranial-nerves-overview',
          title: 'Visão geral e modalidades dos 12 pares cranianos',
          paragraphs: [
            'Os 12 pares de nervos cranianos emergem do encéfalo e tronco encefálico (exceto o XI que recebe raiz espinal), inervando estruturas da cabeça, pescoço e vísceras.',
            'São classificados em puramente sensitivos (I - Olfatório, II - Óptico, VIII - Vestibulococlear), puramente motores (III - Oculomotor, IV - Troclear, VI - Abducente, XI - Acessório, XII - Hipoglosso) e mistos com fibras motoras e sensitivas (V - Trigêmeo, VII - Facial, IX - Glossofaríngeo, X - Vago).',
          ],
          takeaway: 'I, II e VIII são puramente sensitivos; III, IV, VI, XI e XII são motores; V, VII, IX e X são nervos mistos.',
          diagram: 'brain',
        },
        {
          id: 'trigeminal-facial',
          title: 'Nervo trigêmeo (V) vs nervo facial (VII)',
          paragraphs: [
            'O nervo trigêmeo (V) é o grande nervo sensitivo da face através de seus três ramos (oftálmico V1, maxilar V2 e mandibular V3), além de fornecer inervação motora para os músculos da mastigação (masseter, temporal, pterigoideos).',
            'O nervo facial (VII) inerva todos os músculos da expressão facial (mímica), fornece sensibilidade gustativa aos dois terços anteriores da língua e conduz eferências parassimpáticas para as glândulas lacrimais e salivares submandibulares/sublinguais.',
          ],
          takeaway: 'Trigêmeo (V) é a sensibilidade facial e mastigação; facial (VII) comanda a mímica facial, gustação anterior e lacrimejamento.',
          diagram: 'brain',
        },
        {
          id: 'vagus-parasympathetic',
          title: 'Nervo vago (X): o grande maestro parassimpático',
          paragraphs: [
            'O nervo vago (X) é o nervo craniano de distribuição mais ampla do corpo, descendo pelo pescoço na bainha carotídea até as cavidades torácica e abdominal.',
            'Ele fornece a principal inervação parassimpática (craniossacral) para o coração (reduzindo a frequência cardíaca nos nós SA e AV), vias aéreas brônquicas (broncoconstrição) e todo o trato gastrointestinal até o terço distal do cólon transverso (estimulando peristaltismo e secreção digestiva).',
          ],
          takeaway: 'O nervo vago (X) fornece o tônus parassimpático visceral para coração, pulmões e trato gastrointestinal proximal.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual nervo craniano fornece a inervação parassimpática pré-ganglionar predominante para o coração, pulmões e tubo gastrointestinal até a altura do cólon transverso?',
        options: [
          {
            id: 'vagus-nerve-x',
            label: 'Nervo vago (X par craniano)',
            explanation: 'Correto: o nervo vago é o principal nervo do sistema nervoso parassimpático, fornecendo cerca de 75-80% de toda a eferência parassimpática craniossacral para vísceras toracoabdominais.',
          },
          {
            id: 'trigeminal-nerve-v',
            label: 'Nervo trigêmeo (V par craniano)',
            explanation: 'Incorreto: o trigêmeo conduz a sensibilidade somática facial e inerva os músculos mastigatórios, sem eferência parassimpática torácica ou abdominal.',
          },
          {
            id: 'facial-nerve-vii',
            label: 'Nervo facial (VII par craniano)',
            explanation: 'Incorreto: o facial comanda a musculatura da mímica e glândulas lacrimais/salivares da cabeça, sem alcançar o coração ou intestinos.',
          },
          {
            id: 'glossopharyngeal-nerve-ix',
            label: 'Nervo glossofaríngeo (IX par craniano)',
            explanation: 'Incorreto: o glossofaríngeo inerva a glândula parótida, o seio carotídeo e o terço posterior da língua, sem inervar órgãos torácicos ou intestinais.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'Which cranial nerve wanders far beyond the confines of the head and neck to govern resting heart rate and gastrointestinal motility?',
      title: 'Cranial Nerves: Functional Classification, Trigeminal, Facial, and Vagus',
      description: 'Master the 12 pairs of cranial nerves, categorizing sensory, motor, and mixed nerves, focusing on nerves V, VII, and X.',
      objective: 'Classify the 12 cranial nerves by functional modality and recognize the vagus nerve as the primary visceral parasympathetic conduit.',
      stages: [
        {
          id: 'cranial-nerves-overview',
          title: 'Overview and modalities of the 12 cranial nerves',
          paragraphs: [
            'The twelve pairs of cranial nerves arise from the forebrain and brainstem (with cranial rootlet contribution to CN XI), supplying structures across the head, neck, and viscera.',
            'They are functionally categorized as purely sensory (CN I - Olfactory, CN II - Optic, CN VIII - Vestibulocochlear), purely motor (CN III - Oculomotor, CN IV - Trochlear, CN VI - Abducens, CN XI - Accessory, CN XII - Hypoglossal), and mixed motor-sensory nerves (CN V - Trigeminal, CN VII - Facial, CN IX - Glossopharyngeal, CN X - Vagus).',
          ],
          takeaway: 'I, II, and VIII are purely sensory; III, IV, VI, XI, and XII are motor; V, VII, IX, and X are mixed.',
          diagram: 'brain',
        },
        {
          id: 'trigeminal-facial',
          title: 'Trigeminal nerve (V) vs facial nerve (VII)',
          paragraphs: [
            'The trigeminal nerve (CN V) provides somatic sensory coverage to the entire face through three divisions (ophthalmic V1, maxillary V2, and mandibular V3) and supplies motor fibers to muscles of mastication (masseter, temporalis, pterygoids).',
            'The facial nerve (CN VII) commands all muscles of facial expression, carries gustatory taste from the anterior two-thirds of the tongue, and delivers parasympathetic innervation to the lacrimal, submandibular, and sublingual glands.',
          ],
          takeaway: 'Trigeminal (V) governs facial sensation and chewing; facial (VII) controls facial mimicry, taste, and lacrimation.',
          diagram: 'brain',
        },
        {
          id: 'vagus-parasympathetic',
          title: 'Vagus nerve (X): The wandering parasympathetic master',
          paragraphs: [
            'The vagus nerve (CN X) has the most extensive anatomical distribution of any cranial nerve, descending through the carotid sheath into thoracic and abdominal viscera.',
            'It delivers the vast bulk of craniosacral parasympathetic output to the heart (slowing nodal pacemaker discharge), pulmonary bronchioles (inducing bronchoconstriction), and the GI tract down to the distal transverse colon (enhancing peristalsis and exocrine secretions).',
          ],
          takeaway: 'The vagus nerve (CN X) provides baseline visceral parasympathetic drive to the heart, lungs, and gut.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which cranial nerve supplies the predominant preganglionic parasympathetic innervation to the heart, respiratory airways, and digestive tract down to the transverse colon?',
        options: [
          {
            id: 'vagus-nerve-x',
            label: 'Vagus nerve (Cranial Nerve X)',
            explanation: 'Correct: the vagus nerve is the primary conduit of the parasympathetic autonomic nervous system, contributing ~75-80% of all parasympathetic craniosacral outflow to thoracic and abdominal organs.',
          },
          {
            id: 'trigeminal-nerve-v',
            label: 'Trigeminal nerve (Cranial Nerve V)',
            explanation: 'Incorrect: CN V mediates somatic sensory perception from the face and innervates muscles of mastication, lacking visceral autonomic outflow.',
          },
          {
            id: 'facial-nerve-vii',
            label: 'Facial nerve (Cranial Nerve VII)',
            explanation: 'Incorrect: CN VII controls muscles of facial expression and cranial exocrine glands, without projecting parasympathetic fibers to thoracic or gastrointestinal viscera.',
          },
          {
            id: 'glossopharyngeal-nerve-ix',
            label: 'Glossopharyngeal nerve (Cranial Nerve IX)',
            explanation: 'Incorrect: CN IX innervates the parotid gland and carotid sinus, lacking innervation to cardiac and abdominal digestive structures.',
          },
        ],
      },
    },
  },
});

export const neuroanatomyVascularLesson = lessonSchema.parse({
  id: 'neuroanatomy-vascular',
  revision: 1,
  questionId: 'neuroanatomy-vascular-willis',
  correctOptionId: 'face-and-upper-limb',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-ap2e-brain-circulation',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-3-circulation-and-the-central-nervous-system',
      section: 'Chapter 13.3 · Circulation and the Central Nervous System: Blood supply, Circle of Willis, and blood-brain barrier',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Por que um acidente vascular cerebral pode paralisar o rosto e o braço de um paciente sem afetar a força da perna do mesmo lado?',
      title: 'Vascularização encefálica: polígono de Willis e territórios corticais',
      description: 'Explore a circulação arterial do encéfalo: carótidas internas, sistema vertebrobasilar, polígono de Willis e a barreira hematoencefálica.',
      objective: 'Identificar a estrutura do polígono de Willis, mapear os territórios das artérias cerebrais anterior, média e posterior e explicar a barreira hematoencefálica.',
      stages: [
        {
          id: 'willis-circle',
          title: 'Polígono de Willis: anastomose arterial de segurança',
          paragraphs: [
            'A vascularização encefálica é suprida por dois sistemas arteriais: a circulação anterior (artérias carótidas internas) e a circulação posterior (artérias vertebrais, que se fundem na artéria basilar).',
            'Na fossa interpeduncular na base do cérebro, essas correntes se anastomosam formando o polígono de Willis, interligado pela artéria comunicante anterior e duas artérias comunicantes posteriores, garantindo fluxo colateral de segurança caso ocorra estenose focal de uma das grandes artérias.',
          ],
          takeaway: 'O polígono de Willis conecta os sistemas carotídeo e vertebrobasilar, provendo colaterais de salvaguarda.',
          diagram: 'brain',
        },
        {
          id: 'cerebral-artery-territories',
          title: 'Territórios das artérias cerebrais anterior, média e posterior',
          paragraphs: [
            'A artéria cerebral anterior (ACA) irriga a face medial dos hemisférios cerebrais, correspondendo no homúnculo motor e sensitivo à perna e ao pé contralaterais.',
            'A artéria cerebral média (ACM), ramo mais calibroso da carótida interna, irriga a maior parte da face lateral convexa dos hemisférios (córtex motor/sensitivo da face e membro superior, além das áreas de linguagem de Broca e Wernicke). A artéria cerebral posterior (ACP) irriga o lobo occipital e a face inferior do lobo temporal.',
          ],
          takeaway: 'ACM irriga a face lateral (face, braço e linguagem); ACA irriga face medial (perna/pé); ACP irriga lobo occipital (visão).',
          diagram: 'brain',
        },
        {
          id: 'blood-brain-barrier',
          title: 'A barreira hematoencefálica (BHE)',
          paragraphs: [
            'O tecido neural é protegido de toxinas e flutuações eletrolíticas séricas pela barreira hematoencefálica (BHE).',
            'Sua arquitetura é formada por células endoteliais capilares contínuas e não fenestradas seladas por junções oclusivas complexas (tight junctions), revestidas por uma lâmina basal espessa e envolvidas pelos pés vasculares dos astrócitos (astrócitos podócitos).',
          ],
          takeaway: 'A BHE sela o parênquima cerebral por meio de junções oclusivas endoteliais e pés vasculares de astrócitos.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o quadro clínico clássico decorrente de um acidente vascular cerebral isquêmico agudo por oclusão do tronco da artéria cerebral média (ACM) esquerda no território hemisférico dominante?',
        options: [
          {
            id: 'face-and-upper-limb',
            label: 'Déficit motor e sensitivo predominando na face e membro superior direito, frequentemente acompanhado de afasia global',
            explanation: 'Correto: a artéria cerebral média irriga a face lateral do hemisfério cerebral (córtex motor e sensitivo de face e braço) e as áreas corticais de linguagem (Broca e Wernicke) no hemisfério esquerdo dominante.',
          },
          {
            id: 'lower-limb-only',
            label: 'Fraqueza e perda de sensibilidade isoladas estritamente no membro inferior contralateral',
            explanation: 'Incorreto: o acometimento isolado da perna e pé contralateral é característico da oclusão da artéria cerebral anterior (ACA).',
          },
          {
            id: 'isolated-homonymous-hemianopia',
            label: 'Hemianopsia homônima contralateral isolada com preservação motora total',
            explanation: 'Incorreto: cegueira de hemicampos visuais homônimos isolada é o sinal cardeal da oclusão da artéria cerebral posterior (ACP), que irriga o córtex visual occipital.',
          },
          {
            id: 'pure-bilateral-paraplegia',
            label: 'Paraplegia bilateral dos membros inferiores por infarto do cone medular',
            explanation: 'Incorreto: paraplegia bilateral aguda decorre de isquemia da medula espinal (artéria espinal anterior), não de lesões hemisféricas supratentoriais da ACM.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'Why does an acute ischemic stroke frequently paralyze a patient’s face and arm while leaving strength in the leg on that same side remarkably preserved?',
      title: 'Cerebral Vasculature: Circle of Willis and Cortical Territories',
      description: 'Explore brain arterial circulation: internal carotids, the vertebrobasilar tree, circle of Willis collaterals, and the blood-brain barrier.',
      objective: 'Outline the architecture of the circle of Willis, map anterior, middle, and posterior cerebral artery territories, and explain the blood-brain barrier.',
      stages: [
        {
          id: 'willis-circle',
          title: 'The Circle of Willis: An arterial anastomotic safeguard',
          paragraphs: [
            'Cerebral perfusion is supplied by two major inflows: anterior circulation through the paired internal carotid arteries and posterior circulation via vertebral arteries merging into the basilar artery.',
            'At the base of the brain around the interpeduncular fossa, these systems anastomose into the arterial circle of Willis, bridged by the anterior communicating artery and two posterior communicating arteries to preserve collateral perfusion across vascular beds.',
          ],
          takeaway: 'The circle of Willis anastomoses carotid and vertebrobasilar systems, providing protective collateral redundancy.',
          diagram: 'brain',
        },
        {
          id: 'cerebral-artery-territories',
          title: 'Territories of the anterior, middle, and posterior cerebral arteries',
          paragraphs: [
            'The anterior cerebral artery (ACA) supplies the medial surface of the frontal and parietal lobes, corresponding to the contralateral lower extremity along the motor and sensory homunculus.',
            'The middle cerebral artery (MCA), the direct and largest continuation of the internal carotid, supplies the extensive lateral convexity (motor/sensory cortices for face and upper limb, alongside Broca’s and Wernicke’s language areas). The posterior cerebral artery (PCA) supplies the occipital lobe and inferior temporal lobe.',
          ],
          takeaway: 'MCA supplies the lateral hemisphere (face, arm, language); ACA irrigates the medial cortex (leg/foot); PCA feeds occipital visual cortex.',
          diagram: 'brain',
        },
        {
          id: 'blood-brain-barrier',
          title: 'The Blood-Brain Barrier (BBB)',
          paragraphs: [
            'Neural parenchyma is shielded from systemic circulating neurotoxins and fluctuations in blood chemistry by the blood-brain barrier (BBB).',
            'The BBB is built from continuous, non-fenestrated brain capillary endothelial cells sealed by complex continuous tight junctions (zonulae occludentes), backed by a thick basement membrane and invested by astrocyte end-feet (perivascular astrocytic footplates).',
          ],
          takeaway: 'The BBB seals brain capillaries via endothelial tight junctions and astrocytic end-feet.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What classic clinical syndrome arises following acute thromboembolic occlusion of the main trunk of the left middle cerebral artery (MCA) in a right-handed, left-hemisphere dominant individual?',
        options: [
          {
            id: 'face-and-upper-limb',
            label: 'Contralateral (right-sided) motor and sensory deficits predominating in face and upper extremity, accompanied by aphasia',
            explanation: 'Correct: the left middle cerebral artery irrigates the lateral cortex controlling the contralateral face and arm, as well as dominant cortical language centers (Broca and Wernicke).',
          },
          {
            id: 'lower-limb-only',
            label: 'Isolated motor and sensory deficits strictly confined to the contralateral lower limb',
            explanation: 'Incorrect: isolated contralateral leg and foot deficits stem from anterior cerebral artery (ACA) medial hemispheric territory infarcts.',
          },
          {
            id: 'isolated-homonymous-hemianopia',
            label: 'Isolated contralateral homonymous hemianopia with total preservation of sensorimotor strength',
            explanation: 'Incorrect: isolated homonymous hemianopia is the signature finding of posterior cerebral artery (PCA) ischemia affecting occipital calcarine visual cortex.',
          },
          {
            id: 'pure-bilateral-paraplegia',
            label: 'Symmetric bilateral paraplegia of both lower extremities due to conus medullaris ischemia',
            explanation: 'Incorrect: bilateral paraplegia results from anterior spinal artery ischemia at spinal levels, rather than supratentorial hemispheric MCA strokes.',
          },
        ],
      },
    },
  },
});
