import { lessonSchema } from '../src/contracts/learning';

export const anatomyHeadNeckLesson = lessonSchema.parse({
  id: 'anatomy-head-neck',
  revision: 1,
  questionId: 'anatomy-head-neck-q1',
  correctOptionId: 'carotid-triangle-contents',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch7-ch11-headneck',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull',
      section: 'Chapter 7 & 11 · Head, Neck, and Cranial Anatomy',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Anatomia',
      hook: 'Como as artérias e nervos vitais atravessam os estreitos forames da base do crânio para inervar a face e o pescoço?',
      title: 'Anatomia da cabeça e pescoço: crânio, fossas cranianas, trígonos cervicais e laringe',
      description: 'Explore as fossas cranianas, os forames dos pares cranianos, a fáscia cervical e a cartilagem laríngea.',
      objective: 'Identificar as estruturas das fossas cranianas anterior, média e posterior e os limites do trígono carotídeo.',
      stages: [
        {
          id: 'cranial-fossae',
          title: 'As três fossas cranianas e forames de passagem',
          paragraphs: [
            'A base interna do crânio divide-se em três fossas em degraus: a fossa craniana anterior (que apoia os lobos frontais e abriga a lâmina cribriforme do etmoide para os filamentos do nervo olfatório, NC I).',
            'A fossa média aloja a sela túrcica (com a hipófise) e forames chave como o canal óptico (NC II e artéria oftálmica), fissura orbital superior (NC III, IV, V1, VI) e forame oval (NC V3). A fossa posterior abriga o cerebelo e tronco encefálico, com o forame jugular (NC IX, X, XI) e o forame magno.',
          ],
          takeaway: 'As fossas cranianas alojam o encéfalo e transmitem nervos e vasos através de forames especializados.',
          diagram: 'bone',
        },
        {
          id: 'cervical-triangles',
          title: 'Trígonos do pescoço: anterior, posterior e carotídeo',
          paragraphs: [
            'O músculo esternocleidomastóideo (inervado pelo nervo acessório, NC XI) divide o pescoço em trígonos anterior e posterior.',
            'Dentro do trígono anterior destaca-se o trígono carotídeo (delimitado pelo ventre superior do omo-hióideo, ventre posterior do digástrico e margem anterior do ECM), que contém a bainha carotídea com a artéria carótida comum, veia jugular interna e nervo vago.',
          ],
          takeaway: 'O trígono carotídeo abriga a bainha carotídea com a artéria carótida comum, veia jugular interna e nervo vago.',
          diagram: 'brain',
        },
        {
          id: 'larynx-airway',
          title: 'Esqueleto da laringe e fonação',
          paragraphs: [
            'A laringe é o órgão da fonação e proteção da via aérea, sustentada por três cartilagens ímpares (tireoide, cricoide e epiglote) e três pares menores (aritenoides, corniculadas e cuneiformes).',
            'As pregas vocais verdadeiras estendem-se da cartilagem tireoide até as aritenoides móveis. Todos os músculos intrínsecos da laringe são inervados pelo nervo laríngeo recorrente (ramo do vago), exceto o músculo cricotireóideo, inervado pelo nervo laríngeo superior externo.',
          ],
          takeaway: 'A cartilagem aritenóide modula as pregas vocais e o nervo laríngeo recorrente inerva a maioria dos músculos laríngeos.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais estruturas neurovasculares vitais estão contidas dentro da bainha carotídea no interior do trígono carotídeo do pescoço?',
        options: [
          {
            id: 'carotid-triangle-contents',
            label: 'Artéria carótida comum/interna, veia jugular interna e nervo vago (NC X)',
            explanation: 'Correto: a bainha carotídea envolve a artéria carótida medialmente, a veia jugular interna lateralmente e o nervo vago posteriormente.',
          },
          {
            id: 'subclavian-plexus-bundle',
            label: 'Artéria subclávia, veia subclávia e troncos do plexo braquial',
            explanation: 'Incorreto: esses elementos situam-se no trígono posterior e fossa supraclavicular, não no trígono carotídeo.',
          },
          {
            id: 'facial-nerve-parotid',
            label: 'Nervo facial (NC VII) e ducto parotídeo de Stenon',
            explanation: 'Incorreto: o nervo facial atravessa a glândula parótida na face, superiormente ao trígono carotídeo.',
          },
          {
            id: 'phrenic-nerve-scalenus',
            label: 'Nervo frênico e músculo escaleno anterior isolados',
            explanation: 'Incorreto: o nervo frênico desce sobre a fáscia do escaleno anterior profundamente no pescoço posterior.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'How do vital arteries, veins, and cranial nerves traverse dense bony skulls and narrow neck triangles to sustain life?',
      title: 'Head and neck anatomy: skull, cranial fossae, cervical triangles, and larynx',
      description: 'Explore the stepped cranial fossae, cranial nerve foramina, fascial neck triangles, and laryngeal cartilages.',
      objective: 'Map the anterior, middle, and posterior cranial fossae and delineate the vital boundaries and contents of the carotid triangle.',
      stages: [
        {
          id: 'cranial-fossae',
          title: 'The three stepped cranial fossae and neural exits',
          paragraphs: [
            'The internal base of the skull descends in three stepped tiers: the anterior cranial fossa (cradling frontal lobes and featuring the cribriform plate for CN I olfaction).',
            'The middle cranial fossa centers on the sella turcica (housing the pituitary) flanked by the optic canal (CN II, ophthalmic artery), superior orbital fissure (CN III, IV, V1, VI), and foramen ovale (CN V3). The posterior fossa supports the cerebellum and brainstem, featuring the jugular foramen (CN IX, X, XI) and foramen magnum.',
          ],
          takeaway: 'Stepped cranial fossae cradle brain regions and channel cranial nerves through dedicated bony apertures.',
          diagram: 'bone',
        },
        {
          id: 'cervical-triangles',
          title: 'Cervical triangles and the carotid sheath',
          paragraphs: [
            'The sternocleidomastoid muscle (innervated by accessory nerve CN XI) divides the anterolateral neck into anterior and posterior triangles.',
            'Within the anterior triangle lies the clinically critical carotid triangle (bounded by superior omohyoid, posterior digastric, and anterior SCM), enveloping the fibrous carotid sheath enclosing the common/internal carotid artery, internal jugular vein, and vagus nerve (CN X).',
          ],
          takeaway: 'The carotid triangle houses the carotid sheath containing the common carotid artery, internal jugular vein, and vagus nerve.',
          diagram: 'brain',
        },
        {
          id: 'larynx-airway',
          title: 'Laryngeal framework and vocal fold mechanics',
          paragraphs: [
            'The larynx guards the lower respiratory tract and produces phonation, framed by three unpaired cartilages (thyroid, cricoid, and epiglottis) and paired arytenoid, corniculate, and cuneiform cartilages.',
            'True vocal folds span from the thyroid angle back to mobile pyramidal arytenoids. All intrinsic laryngeal muscles are innervated by the recurrent laryngeal nerve (vagus branch), with the sole exception of the cricothyroid muscle innervated by the external superior laryngeal nerve.',
          ],
          takeaway: 'Arytenoid cartilages position vocal cords; the recurrent laryngeal nerve innervates nearly all intrinsic laryngeal muscles.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which vital neurovascular structures are enclosed within the fibrous carotid sheath in the carotid triangle of the neck?',
        options: [
          {
            id: 'carotid-triangle-contents',
            label: 'Common/internal carotid artery, internal jugular vein, and vagus nerve (CN X)',
            explanation: 'Correct: the carotid sheath carries the carotid artery medially, the internal jugular vein laterally, and the vagus nerve posteriorly.',
          },
          {
            id: 'subclavian-plexus-bundle',
            label: 'Subclavian vessels and brachial plexus trunks',
            explanation: 'Incorrect: the subclavian vessels and brachial plexus emerge in the posterior triangle and supraclavicular fossa.',
          },
          {
            id: 'facial-nerve-parotid',
            label: 'Facial nerve (CN VII) and Stensen’s parotid duct',
            explanation: 'Incorrect: the facial nerve branches through the substance of the parotid gland on the lateral face.',
          },
          {
            id: 'phrenic-nerve-scalenus',
            label: 'Phrenic nerve running across the anterior scalene',
            explanation: 'Incorrect: the phrenic nerve descends deep behind prevertebral fascia on the surface of the anterior scalene muscle.',
          },
        ],
      },
    },
  },
});

export const anatomyBackSpineLesson = lessonSchema.parse({
  id: 'anatomy-back-spine',
  revision: 1,
  questionId: 'anatomy-back-spine-q1',
  correctOptionId: 'nucleus-pulposus-herniation',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch7-spine',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column',
      section: 'Chapter 7 · The Vertebral Column and Ligamentous Mechanics',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Anatomia',
      hook: 'Como trinta e três vértebras articuladas conseguem suportar centenas de quilos de carga enquanto protegem a delicada medula espinal?',
      title: 'Anatomia do dorso e coluna vertebral: vértebras, discos intervertebrais e curvaturas',
      description: 'Estude as vértebras cervicais, torácicas e lombares, os ligamentos da coluna e a anatomia da hérnia de disco.',
      objective: 'Reconhecer as características regionais das vértebras, a estrutura dos discos intervertebrais e os ligamentos longitudinais.',
      stages: [
        {
          id: 'vertebral-characteristics',
          title: 'Segmentos vertebrais e diferenciações anatômicas',
          paragraphs: [
            'A coluna vertebral possui 7 vértebras cervicais (com forames transversários para as artérias vertebrais), 12 torácicas (com fóveas costais para costelas e processos espinhosos inclinados) e 5 lombares (com corpos maciços e processos espinhosos quadrangulares robustos).',
            'O atlas (C1) carece de corpo e processo espinhoso, articulando-se com os côndilos occipitais. O áxis (C2) possui o dente (processo odontoide) que funciona como pivô para a rotação da cabeça.',
          ],
          takeaway: 'Forames transversários definem vértebras cervicais, fóveas costais definem torácicas e corpos maciços definem lombares.',
          diagram: 'bone',
        },
        {
          id: 'intervertebral-discs',
          title: 'Discos intervertebrais e ligamentos longitudinais',
          paragraphs: [
            'Cada sínfise intervertebral é formada por um anel fibroso externo (camadas concêntricas de fibrocartilagem) e um núcleo pulposo interno gelatinoso e hidrofílico derivado da notocorda embrionária.',
            'O ligamento longitudinal anterior é largo e espesso, impedindo a hiperextensão da coluna. O ligamento longitudinal posterior é mais estreito, deixando a face posterolateral do disco relativamente desprotegida.',
          ],
          takeaway: 'O disco intervertebral combina anel fibroso e núcleo pulposo, estabilizados por ligamentos longitudinais.',
          diagram: 'pressure',
        },
        {
          id: 'spinal-cord-radiculopathy',
          title: 'Canal vertebral e hérnia discal posterolateral',
          paragraphs: [
            'O canal vertebral abriga a medula espinal revestida por dura-máter, aracnoide e pia-máter, terminando no cone medular ao nível de L1-L2 no adulto, continuando caudalmente como cauda equina.',
            'A ruptura do anel fibroso permite a extrusão posterolateral do núcleo pulposo (hérnia de disco), comprimindo a raiz nervosa no forame intervertebral ou a cauda equina no canal central, gerando lombociatalgia.',
          ],
          takeaway: 'Hérnias discais ocorrem posterolateralmente devido à fragilidade do ligamento posterior, comprimindo raízes nervosas.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual estrutura gelatinosa interna do disco intervertebral, derivada da notocorda embrionária, sofre extrusão através de fissuras no anel fibroso na hérnia de disco?',
        options: [
          {
            id: 'nucleus-pulposus-herniation',
            label: 'Núcleo pulposo',
            explanation: 'Correto: o núcleo pulposo gelatinoso é o componente central do disco que se projeta na hérnia de disco posterolateral.',
          },
          {
            id: 'ligamentum-flavum-elastic',
            label: 'Ligamento amarelo elástico',
            explanation: 'Incorreto: o ligamento amarelo une lâminas vertebrais adjacentes e não faz parte do disco intervertebral.',
          },
          {
            id: 'posterior-arch-atlas',
            label: 'Arco posterior do atlas',
            explanation: 'Incorreto: o arco posterior é uma estrutura óssea de C1, sem relação com conteúdo herniado discal.',
          },
          {
            id: 'cauda-equina-filum',
            label: 'Filo terminal da dura-máter',
            explanation: 'Incorreto: o filo terminal é um filamento conjuntivo fibroso que ancora a medula ao cóccix.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'How do thirty-three articulated vertebrae support hundreds of kilograms of axial force while shielding the fragile spinal cord?',
      title: 'Back and spine anatomy: vertebrae, intervertebral discs, and curvatures',
      description: 'Master regional vertebral osteology, spinal ligaments, and the clinical mechanics of posterolateral disc herniations.',
      objective: 'Distinguish cervical, thoracic, and lumbar vertebrae and explain intervertebral disc architecture and ligament support.',
      stages: [
        {
          id: 'vertebral-characteristics',
          title: 'Regional vertebral osteology and transitional landmarks',
          paragraphs: [
            'The spinal column spans 7 cervical vertebrae (uniquely bearing transverse foramina for ascending vertebral arteries), 12 thoracic vertebrae (bearing costal facets for ribs), and 5 lumbar vertebrae (massive cylindrical bodies and hatchet-shaped spinous processes).',
            'Atlas (C1) lacks a vertebral body and spinous process, rocking beneath occipital condyles. Axis (C2) presents the dens (odontoid process) serving as a vertical pivot axis for head rotation.',
          ],
          takeaway: 'Transverse foramina identify cervical vertebrae; costal facets indicate thoracic; massive bodies signify lumbar.',
          diagram: 'bone',
        },
        {
          id: 'intervertebral-discs',
          title: 'Intervertebral disc architecture and longitudinal ligaments',
          paragraphs: [
            'Each fibrocartilaginous intervertebral disc joins adjacent vertebral bodies, consisting of a tough concentric anulus fibrosus surrounding a gelatinous, water-rich nucleus pulposus derived from the embryonic notochord.',
            'The broad anterior longitudinal ligament resists spinal hyperextension, whereas the narrower posterior longitudinal ligament leaves the posterolateral disc borders poorly supported against compressive loads.',
          ],
          takeaway: 'Discs combine outer fibrocartilage rings with a shock-absorbing central nucleus pulposus bounded by ligaments.',
          diagram: 'pressure',
        },
        {
          id: 'spinal-cord-radiculopathy',
          title: 'Spinal canal contents and posterolateral disc herniation',
          paragraphs: [
            'The vertebral canal protects the thecal sac and spinal cord, which tapers at the conus medullaris at the L1-L2 vertebral interspace in adults, continuing caudally as the lumbosacral cauda equina.',
            'Rupture of anulus fibrosus lamellae permits posterolateral extrusion of the nucleus pulposus, impinging on exiting spinal nerve roots within the intervertebral foramen to cause radiculopathy (sciatica).',
          ],
          takeaway: 'Weakness of the posterior longitudinal ligament facilitates posterolateral disc herniation and nerve root compression.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which inner gelatinous core of the intervertebral disc, derived from the embryonic notochord, extrudes during a posterolateral herniation to compress nerve roots?',
        options: [
          {
            id: 'nucleus-pulposus-herniation',
            label: 'Nucleus pulposus',
            explanation: 'Correct: the hydrated nucleus pulposus is the shock-absorbing core that extrudes through torn anulus fibers in a herniation.',
          },
          {
            id: 'ligamentum-flavum-elastic',
            label: 'Elastic ligamentum flavum',
            explanation: 'Incorrect: ligamenta flava connect adjacent vertebral laminae along the posterior wall of the spinal canal.',
          },
          {
            id: 'posterior-arch-atlas',
            label: 'Posterior arch of the atlas',
            explanation: 'Incorrect: the posterior arch is a bony feature of the C1 vertebra.',
          },
          {
            id: 'cauda-equina-filum',
            label: 'Filum terminale of the pia mater',
            explanation: 'Incorrect: the filum terminale anchors the caudal tip of the spinal cord to the coccyx.',
          },
        ],
      },
    },
  },
});

export const anatomyUpperLimbLesson = lessonSchema.parse({
  id: 'anatomy-upper-limb',
  revision: 1,
  questionId: 'anatomy-upper-limb-q1',
  correctOptionId: 'median-nerve-carpal-tunnel',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch11-upperlimb',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-5-appendicular-muscles-of-the-pectoral-girdle-and-upper-limbs',
      section: 'Chapter 11 · Upper Limb Anatomy, Rotator Cuff, and Brachial Plexus',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Anatomia',
      hook: 'Por que uma queda com a mão espalmada pode causar dor no punho e dormência nos três primeiros dedos da mão?',
      title: 'Anatomia do membro superior: plexo braquial, manguito rotador e túnel do carpo',
      description: 'Domine as raízes e ramos do plexo braquial, os quatro músculos do manguito rotador e as estruturas do túnel do carpo.',
      objective: 'Identificar a formação do plexo braquial (C5-T1), os músculos do manguito rotador (SITS) e as estruturas do túnel do carpo.',
      stages: [
        {
          id: 'brachial-plexus',
          title: 'O plexo braquial: de C5 a T1 até os nervos terminais',
          paragraphs: [
            'O plexo braquial origina-se dos ramos ventrais de C5 a T1, organizando-se sequencialmente em 5 raízes, 3 troncos (superior, médio, inferior), 6 divisões (três anteriores e três posteriores) e 3 fascículos (lateral, medial, posterior).',
            'Os ramos terminais principais inervam todo o membro superior: nervo musculocutâneo (flexores do braço), nervo axilar (deltoide e redondo menor), nervo radial (extensores do braço e antebraço), nervo mediano e nervo ulnar.',
          ],
          takeaway: 'O plexo braquial (C5-T1) organiza-se em raízes, troncos, divisões e fascículos para emitir os nervos terminais motores e sensitivos.',
          diagram: 'neuron',
        },
        {
          id: 'rotator-cuff',
          title: 'O manguito rotador: mnemônico SITS',
          paragraphs: [
            'A articulação glenoumeral possui grande mobilidade e pouca estabilidade óssea, dependendo ativamente do manguito rotador formado por quatro músculos cujos tendões se fundem à cápsula articular.',
            'O supraespinal inicia a abdução do braço (0 a 15°); o infraespinal e o redondo menor realizam rotação lateral; o subescapular realiza rotação medial. O tendão do supraespinal é o mais suscetível a impacto subacromial e tendinopatia.',
          ],
          takeaway: 'O manguito rotador (supraespinal, infraespinal, redondo menor e subescapular) centraliza a cabeça umeral na cavidade glenoide.',
          diagram: 'sarcomere',
        },
        {
          id: 'carpal-tunnel-compartment',
          title: 'O túnel do carpo e a síndrome compressiva',
          paragraphs: [
            'O túnel do carpo é uma passagem osteofibrosa no punho delimitada profundamente pelos ossos do carpo e superficialmente pelo retináculo dos flexores (ligamento transverso do carpo).',
            'Ele dá passagem a dez estruturas: nove tendões flexores (4 do flexor profundo, 4 do flexor superficial e 1 do flexor longo do polegar) e um único nervo — o nervo mediano. Sua compressão crônica causa a síndrome do túnel do carpo com parestesias nos dedos indicador, médio e polegar.',
          ],
          takeaway: 'O túnel do carpo contém nove tendões flexores e o nervo mediano sob o retináculo dos flexores.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual nervo periférico é comprimido no interior do túnel do carpo sob o retináculo dos flexores, gerando parestesia nos três primeiros quirodáctilos?',
        options: [
          {
            id: 'median-nerve-carpal-tunnel',
            label: 'Nervo mediano',
            explanation: 'Correto: o nervo mediano é a única estrutura nervosa que transita dentro do túnel do carpo acompanhando os 9 tendões.',
          },
          {
            id: 'ulnar-nerve-guyon',
            label: 'Nervo ulnar (no canal de Guyon)',
            explanation: 'Incorreto: o nervo ulnar passa superficialmente ao retináculo dos flexores através do canal ulnar (de Guyon).',
          },
          {
            id: 'radial-nerve-deep',
            label: 'Ramo profundo do nervo radial',
            explanation: 'Incorreto: o nervo radial inerva o compartimento extensor posterior e não passa pelo túnel do carpo anterior.',
          },
          {
            id: 'musculocutaneous-nerve',
            label: 'Nervo musculocutâneo anterior',
            explanation: 'Incorreto: o nervo musculocutâneo termina no antebraço como nervo cutâneo lateral do antebraço.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'Why does a fall on an outstretched hand often produce numbness and tingling across the lateral three and a half fingers?',
      title: 'Upper limb anatomy: brachial plexus, rotator cuff, and carpal tunnel',
      description: 'Master brachial plexus roots and terminal branches, rotator cuff musculotendinous cuffing, and carpal tunnel anatomy.',
      objective: 'Map the brachial plexus (C5-T1), recall rotator cuff muscles (SITS), and identify the contents of the carpal tunnel.',
      stages: [
        {
          id: 'brachial-plexus',
          title: 'The brachial plexus: from spinal roots C5-T1 to terminal nerves',
          paragraphs: [
            'The brachial plexus emerges from the ventral primary rami of C5 to T1, hierarchically organized into 5 roots, 3 trunks (superior, middle, inferior), 6 divisions (anterior and posterior), and 3 cords (lateral, medial, posterior).',
            'Terminal branches supply the entirety of upper limb motor and sensory territories: musculocutaneous (anterior arm flexors), axillary (deltoid and teres minor), radial (posterior arm and forearm extensors), median, and ulnar nerves.',
          ],
          takeaway: 'The brachial plexus (C5-T1) organizes through roots, trunks, divisions, and cords to emit terminal peripheral nerves.',
          diagram: 'neuron',
        },
        {
          id: 'rotator-cuff',
          title: 'The rotator cuff: the SITS dynamic stabilizers',
          paragraphs: [
            'The shallow glenohumeral joint trades bony stability for maximum range of motion, relying actively on the musculotendinous rotator cuff formed by four muscles blending into the fibrous joint capsule.',
            'Supraspinatus initiates arm abduction (0–15°); infraspinatus and teres minor provide external lateral rotation; subscapularis drives internal medial rotation. The supraspinatus tendon is most vulnerable to subacromial impingement and rupture.',
          ],
          takeaway: 'The rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis) actively stabilizes the humeral head.',
          diagram: 'sarcomere',
        },
        {
          id: 'carpal-tunnel-compartment',
          title: 'The carpal tunnel osteofibrous canal and compression',
          paragraphs: [
            'The carpal tunnel is a tight fibro-osseous compartment bounded deeply by the carpal bones and roofed anteriorly by the thick transverse carpal ligament (flexor retinaculum).',
            'Ten distinct structures traverse the tunnel: nine synovial-sheathed flexor tendons (4 flexor digitorum profundus, 4 flexor digitorum superficialis, 1 flexor pollicis longus) and a single neural structure—the median nerve. Increased pressure triggers carpal tunnel syndrome with palmar thumb, index, and middle finger paresthesias.',
          ],
          takeaway: 'The carpal tunnel transmits nine long flexor tendons and the solitary median nerve beneath the flexor retinaculum.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which single peripheral nerve traverses the fibro-osseous carpal tunnel beneath the flexor retinaculum alongside nine long flexor tendons?',
        options: [
          {
            id: 'median-nerve-carpal-tunnel',
            label: 'Median nerve',
            explanation: 'Correct: the median nerve is the sole nerve traversing the carpal tunnel, making it uniquely vulnerable to entrapment.',
          },
          {
            id: 'ulnar-nerve-guyon',
            label: 'Ulnar nerve in Guyon’s canal',
            explanation: 'Incorrect: the ulnar nerve passes superficial to the flexor retinaculum inside Guyon’s canal.',
          },
          {
            id: 'radial-nerve-deep',
            label: 'Deep motor branch of the radial nerve',
            explanation: 'Incorrect: the radial nerve innervates posterior extensor compartments and does not enter the carpal tunnel.',
          },
          {
            id: 'musculocutaneous-nerve',
            label: 'Musculocutaneous nerve',
            explanation: 'Incorrect: the musculocutaneous nerve terminates as the lateral cutaneous nerve of the forearm well above the carpal tunnel.',
          },
        ],
      },
    },
  },
});

export const anatomyLowerLimbLesson = lessonSchema.parse({
  id: 'anatomy-lower-limb',
  revision: 1,
  questionId: 'anatomy-lower-limb-q1',
  correctOptionId: 'femoral-triangle-navel',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch11-lowerlimb',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-5-appendicular-muscles-of-the-pectoral-girdle-and-upper-limbs',
      section: 'Chapter 11 · Lower Limb Anatomy, Femoral Triangle, and Knee Ligaments',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Anatomia',
      hook: 'Como os ligamentos do joelho e os grandes vasos da coxa se organizam para suportar a marcha e permitir acesso vascular de emergência?',
      title: 'Anatomia do membro inferior: plexo lombossacral, trígono femoral e articulação do joelho',
      description: 'Estude o trígono femoral de Scarpa, o trajeto do nervo ciático e os ligamentos cruzados e meniscos do joelho.',
      objective: 'Identificar os limites e conteúdo do trígono femoral e as funções dos ligamentos cruzados anterior e posterior.',
      stages: [
        {
          id: 'femoral-triangle-limits',
          title: 'O trígono femoral (de Scarpa) e a regra NAVEL',
          paragraphs: [
            'O trígono femoral localiza-se na raiz anterior da coxa, delimitado superiormente pelo ligamento inguinal, lateralmente pelo músculo sartório e medialmente pela margem medial do músculo adutor longo.',
            'De lateral para medial, as estruturas neurovasculares organizam-se pelo mnemônico NAVEL: Nervo femoral, Artéria femoral, Veia femoral, Espaço vazio (canal femoral) e Linfonodos inguinais profundos (nó de Cloquet). A veia femoral é o local de escolha para punções venosas centrais na virilha.',
          ],
          takeaway: 'O trígono femoral contém as estruturas na ordem látero-medial: Nervo, Artéria, Veia femoral e Linfáticos (NAVEL).',
          diagram: 'pressure',
        },
        {
          id: 'lumbosacral-sciatic',
          title: 'Plexo lombossacral e o trajeto do nervo ciático',
          paragraphs: [
            'O plexo lombossacral (L4 a S3) dá origem ao nervo ciático (isquiático), o maior nervo do corpo humano. Ele deixa a pelve através do forame isquiático maior abaixo do músculo piriforme.',
            'Descendo pela região posterior da coxa, o nervo ciático inerva os músculos isquiotibiais e bifurca-se no ápice da fossa poplítea em nervo tibial (que inerva os flexores plantares da perna) e nervo fibular comum (que contorna a cabeça da fíbula e inerva os dorsiflexores e eversores).',
          ],
          takeaway: 'O nervo ciático sai sob o piriforme e divide-se em nervos tibial e fibular comum na fossa poplítea.',
          diagram: 'neuron',
        },
        {
          id: 'knee-joint-ligaments',
          title: 'Articulação do joelho: ligamentos cruzados e meniscos',
          paragraphs: [
            'O joelho é uma articulação sinovial em dobradiça modificada. O ligamento cruzado anterior (LCA) impede a translação anterior excessiva da tíbia em relação ao fêmur, enquanto o ligamento cruzado posterior (LCP, mais robusto) impede o deslocamento posterior da tíbia.',
            'Os meniscos medial e lateral de fibrocartilagem absorvem impactos axiais. O menisco medial é fixado ao ligamento colateral medial (LCM), tornando-o muito vulnerável a lesões em torção combinadas (tríade infeliz de O’Donoghue).',
          ],
          takeaway: 'O LCA impede gaveta anterior e o LCP impede gaveta posterior; meniscos amortecem impactos tibiofemorais.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: no trígono femoral de Scarpa, a ordem das principais estruturas vasculares e nervosas dispostas de lateral para medial abaixo do ligamento inguinal é: Nervo femoral, Artéria femoral e ______ femoral.',
        blank: 'A estrutura venosa que fica medial à artéria é a ______.',
        options: [
          {
            id: 'femoral-triangle-navel',
            label: 'Veia femoral',
            explanation: 'Correto: a organização látero-medial no trígono femoral segue a regra NAVEL: Nervo, Artéria, Veia e Linfáticos.',
          },
          {
            id: 'saphenous-nerve-bundle',
            label: 'Nervo safeno isolado',
            explanation: 'Incorreto: o nervo safeno é um ramo sensitivo do nervo femoral e não ocupa a posição medial à artéria.',
          },
          {
            id: 'obturator-artery',
            label: 'Artéria obturatória acessória',
            explanation: 'Incorreto: os vasos obturatórios passam pelo forame obturado no compartimento medial da coxa.',
          },
          {
            id: 'sciatic-trunk',
            label: 'Tronco do nervo ciático',
            explanation: 'Incorreto: o nervo ciático localiza-se na região posterior glútea e da coxa, sem passar pelo trígono femoral anterior.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'How do knee joint ligaments and groin vascular bundles arrange themselves to withstand walking and provide emergency vascular access?',
      title: 'Lower limb anatomy: lumbosacral plexus, femoral triangle, and knee joint',
      description: 'Explore Scarpa’s femoral triangle, the course of the sciatic nerve, and crucial stabilizing knee ligaments and menisci.',
      objective: 'Identify boundaries and contents of the femoral triangle (NAVEL) and explain anterior/posterior cruciate ligament mechanics.',
      stages: [
        {
          id: 'femoral-triangle-limits',
          title: 'The femoral triangle (of Scarpa) and the NAVEL orientation',
          paragraphs: [
            'The femoral triangle indents the anterior upper thigh, bounded superiorly by the inguinal ligament, laterally by the sartorius muscle, and medially by the medial margin of adductor longus.',
            'From lateral to medial, neurovascular structures arrange according to the NAVEL mnemonic: Femoral Nerve, Femoral Artery, Femoral Vein, Empty space (femoral canal), and Lymphatics (deep inguinal node of Cloquet). The femoral vein is the preferred site for emergency femoral venous catheterization.',
          ],
          takeaway: 'The femoral triangle arranges structures from lateral to medial as Nerve, Artery, Vein, and Lymphatics (NAVEL).',
          diagram: 'pressure',
        },
        {
          id: 'lumbosacral-sciatic',
          title: 'The lumbosacral plexus and the sciatic nerve course',
          paragraphs: [
            'The lumbosacral plexus (L4 to S3) converges into the sciatic nerve, the thickest nerve in the human body, which exits the pelvis through the greater sciatic foramen inferior to the piriformis muscle.',
            'Descending through the posterior thigh, the sciatic nerve innervates hamstring muscles before bifurcating at the popliteal fossa apex into the tibial nerve (supplying calf plantarflexors) and the common fibular nerve (winding around the fibular neck to supply dorsiflexors).',
          ],
          takeaway: 'The sciatic nerve exits beneath piriformis and bifurcates into tibial and common fibular nerves in the popliteal fossa.',
          diagram: 'neuron',
        },
        {
          id: 'knee-joint-ligaments',
          title: 'The knee joint: cruciate ligaments and fibrocartilaginous menisci',
          paragraphs: [
            'The knee is a modified hinge synovial joint. The anterior cruciate ligament (ACL) restrains anterior tibial translation relative to the femur, whereas the sturdier posterior cruciate ligament (PCL) prevents posterior tibial displacement.',
            'Medial and lateral fibrocartilaginous menisci cushion axial shock. The C-shaped medial meniscus is anchored firmly to the medial collateral ligament (MCL), explaining its vulnerability during twisting athletic trauma (O’Donoghue’s unhappy triad).',
          ],
          takeaway: 'The ACL restrains anterior tibial translation and the PCL limits posterior displacement; menisci absorb axial stress.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: within Scarpa’s femoral triangle, the arrangement of primary neurovascular structures from lateral to medial below the inguinal ligament is: Femoral Nerve, Femoral Artery, and Femoral ______.',
        blank: 'The venous structure situated immediately medial to the femoral artery is the Femoral ______.',
        options: [
          {
            id: 'femoral-triangle-navel',
            label: 'Vein',
            explanation: 'Correct: the lateral-to-medial anatomy inside the femoral triangle follows NAVEL: Nerve, Artery, Vein, Empty canal, Lymphatics.',
          },
          {
            id: 'saphenous-nerve-bundle',
            label: 'Saphenous nerve',
            explanation: 'Incorrect: the saphenous nerve is a cutaneous sensory branch of the femoral nerve, not the primary medial vascular trunk.',
          },
          {
            id: 'obturator-artery',
            label: 'Obturator artery',
            explanation: 'Incorrect: the obturator vessels exit through the obturator foramen into the medial thigh compartment.',
          },
          {
            id: 'sciatic-trunk',
            label: 'Sciatic nerve trunk',
            explanation: 'Incorrect: the sciatic nerve runs in the posterior gluteal and thigh regions, completely outside the femoral triangle.',
          },
        ],
      },
    },
  },
});

export const anatomyUrogenitalLesson = lessonSchema.parse({
  id: 'anatomy-urogenital',
  revision: 1,
  questionId: 'anatomy-urogenital-q1',
  correctOptionId: 'ureter-water-under-the-bridge',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch25-ch27-urogenital',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-1-physical-characteristics-of-urine',
      section: 'Chapter 25 & 27 · Retroperitoneal, Urinary, and Genital Anatomy',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Anatomia',
      hook: 'Por que o trajeto do ureter na pelve feminina é cirurgicamente perigoso durante procedimentos ginecológicos como a histerectomia?',
      title: 'Anatomia do retroperitônio, sistema urinário e sistemas genitais masculino e feminino',
      description: 'Compreenda as relações anatômicas dos rins, trajeto dos ureteres e a anatomia dos tratos genitais masculino e feminino.',
      objective: 'Identificar a posição retroperitoneal dos rins, os três pontos de constrição ureteral e as relações anatômicas pélvicas.',
      stages: [
        {
          id: 'kidney-retroperitoneum',
          title: 'Rins e retroperitônio: fáscia renal e vascularização',
          paragraphs: [
            'Os rins situam-se no espaço retroperitoneal entre as vértebras T12 e L3, envolvidos pela cápsula adiposa perirrenal e pela fáscia renal (de Gerota). O rim direito é ligeiramente mais baixo devido ao lobo hepático direito.',
            'No hilo renal, a veia renal situa-se anteriormente, a artéria renal em posição média e a pelve renal posteriormente. A veia renal esquerda é mais longa que a direita, cruzando a aorta sob a artéria mesentérica superior (pinçamento aortomesentérico).',
          ],
          takeaway: 'Os rins são retroperitoneais protegidos pela fáscia de Gerota; no hilo a veia é anterior e a pelve é posterior.',
          diagram: 'kidney',
        },
        {
          id: 'ureter-constrictions',
          title: 'Trajeto do ureter e os três pontos de constrição',
          paragraphs: [
            'Os ureteres descem retroperitonealmente sobre o músculo psoas maior para conduzir a urina até a bexiga. Apresentam três estreitamentos anatômicos onde cálculos renais costumam se impactar: a junção pieloureteral (JPU), o cruzamento dos vasos ilíacos e a junção ureterovesical (JUV).',
            'Na pelve feminina, o ureter cruza inferiormente à artéria uterina ("água sob a ponte"), relação cirúrgica clássica onde o ureter corre risco de ligadura inadvertida durante histerectomias.',
          ],
          takeaway: 'O ureter possui 3 constrições anatômicas e cruza sob a artéria uterina na pelve feminina ("água sob a ponte").',
          diagram: 'embryo',
        },
        {
          id: 'genital-anatomy',
          title: 'Aparelhos reprodutores masculino e feminino',
          paragraphs: [
            'No homem, o ducto deferente ascende pelo funículo espermático através do canal inguinal, une-se ao ducto da vesícula seminal para formar o ducto ejaculatório, que atravessa a próstata até a uretra prostática.',
            'Na mulher, o útero situa-se em anteversoflexão normal sobre a bexiga urinária, ladeado pelos ligamentos largos e redondos, com as tubas uterinas abrindo-se no peritônio adjacente aos ovários.',
          ],
          takeaway: 'O ducto deferente cruza a próstata via ducto ejaculatório e o útero repousa em anteversão sobre a bexiga urinária.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual relação anatômica crítica na pelve feminina coloca o ureter em risco cirúrgico de ligadura inadvertida durante uma histerectomia?',
        options: [
          {
            id: 'ureter-water-under-the-bridge',
            label: 'O ureter passa imediatamente inferior à artéria uterina na base do ligamento largo ("água sob a ponte")',
            explanation: 'Correto: a artéria uterina cruza superiormente ao ureter cerca de 1 a 2 cm lateralmente ao colo uterino.',
          },
          {
            id: 'ureter-behind-sciatic',
            label: 'O ureter perfura o forame isquiático maior junto ao nervo ciático',
            explanation: 'Incorreto: o ureter permanece anterior no espaço retroperitoneal pélvico e não cruza a fossa isquiática.',
          },
          {
            id: 'ureter-inside-ovarian-stroma',
            label: 'O ureter penetra no parênquima ovariano antes de alcançar a bexiga',
            explanation: 'Incorreto: o ureter passa posteriormente ao ovário na parede lateral da pelve sem perfurar o ovário.',
          },
          {
            id: 'ureter-fused-sacral-promontory',
            label: 'O ureter funde-se permanentemente ao promontório sacral ósseo',
            explanation: 'Incorreto: o ureter cruza a linha terminal e vasos ilíacos com mobilidade dentro da bainha retroperitoneal.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'Why does the pelvic course of the ureter pose a major surgical risk for accidental ligation during gynecologic hysterectomy?',
      title: 'Retroperitoneum, urinary system, and male and female genital anatomy',
      description: 'Master renal retroperitoneal topology, ureteral anatomical constrictions, and pelvic reproductive structural relationships.',
      objective: 'Describe retroperitoneal renal relationships, locate the three ureteral narrowings, and trace pelvic reproductive tracts.',
      stages: [
        {
          id: 'kidney-retroperitoneum',
          title: 'Renal retroperitoneal topography and hilar neurovasculature',
          paragraphs: [
            'The kidneys occupy the retroperitoneum against the posterior abdominal wall from T12 to L3, buffered by perinephric fat and encapsulated by renal (Gerota’s) fascia. The right kidney lies slightly lower due to liver bulk.',
            'At the renal hilum, the renal vein lies anteriorly, the renal artery intermediate, and the renal pelvis posteriorly. The longer left renal vein crosses anterior to the abdominal aorta immediately below the take-off of the superior mesenteric artery (nutcracker zone).',
          ],
          takeaway: 'Kidneys lie retroperitoneally bounded by Gerota’s fascia; at the hilum, vein is anterior, artery middle, and pelvis posterior.',
          diagram: 'kidney',
        },
        {
          id: 'ureter-constrictions',
          title: 'Ureteral trajectory and the three clinical constrictions',
          paragraphs: [
            'Ureters descend retroperitoneally across the anterior psoas major belly toward the bladder base. They exhibit three natural anatomical narrowings where nephrolithiasis stones lodge: the ureteropelvic junction (UPJ), the pelvic brim iliac vessel crossing, and the ureterovesical junction (UVJ).',
            'In the female pelvis, the ureter passes directly beneath the uterine artery within the base of the broad ligament ("water under the bridge"), representing a classic surgical danger zone during hysterectomy.',
          ],
          takeaway: 'The ureter features 3 anatomical constrictions and passes beneath the uterine artery ("water under the bridge").',
          diagram: 'embryo',
        },
        {
          id: 'genital-anatomy',
          title: 'Male and female internal genital tracts',
          paragraphs: [
            'In males, the ductus deferens ascends within the spermatic cord through the inguinal canal, unites with the seminal vesicle duct to form the ejaculatory duct, and discharges into the prostatic urethra.',
            'In females, the muscular uterus resides in anteverted-anteflexed orientation resting upon the superior bladder dome, supported by broad, round, and uterosacral ligaments, with uterine tubes opening near the ovaries into the peritoneal cavity.',
          ],
          takeaway: 'The ductus deferens traverses the prostate via ejaculatory ducts; the anteverted uterus rests atop the urinary bladder.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which critical anatomic relationship in the female pelvis places the ureter at surgical risk of accidental ligation during hysterectomy?',
        options: [
          {
            id: 'ureter-water-under-the-bridge',
            label: 'The ureter runs immediately beneath the uterine artery in the cardinal ligament base ("water under the bridge")',
            explanation: 'Correct: the uterine artery crosses superior to the ureter approximately 1 to 2 cm lateral to the cervix.',
          },
          {
            id: 'ureter-behind-sciatic',
            label: 'The ureter traverses the greater sciatic foramen in direct contact with the sciatic nerve',
            explanation: 'Incorrect: the ureter remains within the anterior pelvic retroperitoneum, far anterior to the sciatic notch.',
          },
          {
            id: 'ureter-inside-ovarian-stroma',
            label: 'The ureter pierces the vascular stroma of the ovary prior to entering the bladder',
            explanation: 'Incorrect: the ureter passes posterior to the ovary along the lateral pelvic wall without penetrating ovarian parenchyma.',
          },
          {
            id: 'ureter-fused-sacral-promontory',
            label: 'The ureter fuses into the periosteum of the sacral promontory',
            explanation: 'Incorrect: the ureter crosses the pelvic brim over the iliac vessels without adhering to the sacral promontory.',
          },
        ],
      },
    },
  },
});
