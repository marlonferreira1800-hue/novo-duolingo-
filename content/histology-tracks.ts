import { lessonSchema } from '../src/contracts/learning';

export const histologyConnectiveLesson = lessonSchema.parse({
  id: 'histology-connective',
  revision: 1,
  questionId: 'histology-connective-matrix',
  correctOptionId: 'fibroblast',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch4-connective',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-3-connective-tissue-supports-and-protects',
      section: 'Chapter 4 · Connective Tissue Supports and Protects',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Histologia',
      hook: 'Qual tecido preenche os espaços, sustenta órgãos e une as estruturas do corpo humano?',
      title: 'Tecido conjuntivo: matriz, fibras e fibroblastos',
      description: 'Compreenda a organização da matriz extracelular, as fibras colágenas e o papel central dos fibroblastos.',
      objective: 'Identificar os componentes da matriz extracelular e reconhecer o fibroblasto como a célula sintetizadora primária.',
      stages: [
        {
          id: 'ecm',
          title: 'A matriz extracelular abundante',
          paragraphs: [
            'Diferente do epitélio, o tecido conjuntivo é caracterizado por células amplamente espaçadas, imersas em uma matriz extracelular (MEC) rica e abundante.',
            'A MEC é composta por substância fundamental amorfa — rica em proteoglicanos, glicosaminoglicanos e glicoproteínas estruturais — e por um fluido intersticial hidratado.',
          ],
          takeaway: 'O tecido conjuntivo possui células dispersas imersas em matriz extracelular abundante.',
          diagram: 'tissue',
        },
        {
          id: 'fibers',
          title: 'Fibras colágenas, elásticas e reticulares',
          paragraphs: [
            'As fibras proteicas da MEC conferem resistência e elasticidade aos tecidos. As fibras de colágeno tipo I resistem a forças de tração mecânica intensa.',
            'As fibras elásticas permitem a distensibilidade e o retorno elástico de órgãos como artérias e pulmões, enquanto as fibras reticulares (colágeno tipo III) sustentam órgãos hematopoéticos.',
          ],
          takeaway: 'Fibras colágenas garantem resistência à tração e fibras elásticas permitem deformação reversível.',
          diagram: 'tissue',
        },
        {
          id: 'cells',
          title: 'Fibroblastos: os arquitetos da matriz',
          paragraphs: [
            'O fibroblasto é a célula residente mais numerosa do conjuntivo frouxo e denso, responsável pela síntese de colágeno, elastina e proteoglicanos.',
            'Quando menos ativo metabolicamente, é denominado fibrócito, podendo se reativar durante processos de cicatrização e regeneração tecidual.',
          ],
          takeaway: 'Fibroblastos sintetizam colágeno e os componentes essenciais da matriz extracelular.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a principal célula responsável pela síntese e manutenção da matriz extracelular no tecido conjuntivo?',
        options: [
          {
            id: 'fibroblast',
            label: 'Fibroblasto',
            explanation: 'Correto: o fibroblasto é a célula fundamental que sintetiza procolágeno, elastina e proteoglicanos da MEC.',
          },
          {
            id: 'chondrocyte',
            label: 'Condrócito',
            explanation: 'Incorreto: o condrócito mantém a matriz cartilaginosa, sendo restrito ao tecido cartilaginoso.',
          },
          {
            id: 'osteoclast',
            label: 'Osteoclasto',
            explanation: 'Incorreto: o osteoclasto é especializado na reabsorção da matriz óssea mineralizada.',
          },
          {
            id: 'erythrocyte',
            label: 'Eritrócito',
            explanation: 'Incorreto: o eritrócito é uma célula anucleada do sangue responsável pelo transporte de oxigênio.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'Which tissue fills spaces, supports organs, and binds structures throughout the human body?',
      title: 'Connective tissue: matrix, fibers, and fibroblasts',
      description: 'Understand the organization of the extracellular matrix, collagen fibers, and the central role of fibroblasts.',
      objective: 'Identify extracellular matrix components and recognize the fibroblast as the primary synthesizing cell.',
      stages: [
        {
          id: 'ecm',
          title: 'Abundant extracellular matrix',
          paragraphs: [
            'Unlike epithelium, connective tissue is characterized by widely spaced cells surrounded by an abundant extracellular matrix (ECM).',
            'The ECM consists of ground substance—rich in proteoglycans, glycosaminoglycans, and structural glycoproteins—and hydrated interstitial fluid.',
          ],
          takeaway: 'Connective tissue features dispersed cells embedded in abundant extracellular matrix.',
          diagram: 'tissue',
        },
        {
          id: 'fibers',
          title: 'Collagen, elastic, and reticular fibers',
          paragraphs: [
            'Protein fibers in the ECM provide tensile strength and elasticity. Type I collagen fibers resist strong mechanical pulling forces.',
            'Elastic fibers enable stretch and elastic recoil in arteries and lungs, while reticular fibers (type III collagen) support hematopoietic organs.',
          ],
          takeaway: 'Collagen fibers provide tensile resistance and elastic fibers allow reversible deformation.',
          diagram: 'tissue',
        },
        {
          id: 'cells',
          title: 'Fibroblasts: matrix architects',
          paragraphs: [
            'The fibroblast is the most abundant resident cell in loose and dense connective tissue, synthesizing collagen, elastin, and proteoglycans.',
            'In its quiescent metabolic state, it is called a fibrocyte, which can reactivate during wound healing and tissue repair.',
          ],
          takeaway: 'Fibroblasts synthesize collagen and key components of the extracellular matrix.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which is the primary cell responsible for synthesizing and maintaining the extracellular matrix in connective tissue?',
        options: [
          {
            id: 'fibroblast',
            label: 'Fibroblast',
            explanation: 'Correct: fibroblasts are the primary cells that produce procollagen, elastin, and ECM proteoglycans.',
          },
          {
            id: 'chondrocyte',
            label: 'Chondrocyte',
            explanation: 'Incorrect: chondrocytes maintain cartilage matrix and are restricted to cartilaginous tissue.',
          },
          {
            id: 'osteoclast',
            label: 'Osteoclast',
            explanation: 'Incorrect: osteoclasts specialize in the resorption of mineralized bone matrix.',
          },
          {
            id: 'erythrocyte',
            label: 'Erythrocyte',
            explanation: 'Incorrect: erythrocytes are anucleate blood cells dedicated to gas transport.',
          },
        ],
      },
    },
  },
});

export const histologyCartilageBoneLesson = lessonSchema.parse({
  id: 'histology-cartilage-bone',
  revision: 1,
  questionId: 'histology-cartilage-bone-cells',
  correctOptionId: 'osteoclast',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch6-bone',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure',
      section: 'Chapter 6 · Bone Structure',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Histologia',
      hook: 'Como o osso se mantém resistente e em constante renovação enquanto a cartilagem resiste ao atrito?',
      title: 'Cartilagem e tecido ósseo: condrócitos e células ósseas',
      description: 'Diferencie a matriz avascular da cartilagem do dinamismo mineralizado do osso e conheça a linhagem celular óssea.',
      objective: 'Distinguir condrócitos, osteoblastos, osteócitos e osteoclastos de acordo com suas funções na formação e remodelação.',
      stages: [
        {
          id: 'cartilage',
          title: 'Cartilagem: suporte flexível e avascular',
          paragraphs: [
            'A cartilagem é um tecido conjuntivo sem vasos sanguíneos nem inervação própria. Os condrócitos residem em pequenas lacunas cercados por colágeno tipo II e sulfato de condroitina.',
            'A nutrição ocorre por difusão a partir do pericôndrio ou do líquido sinovial, o que limita sua capacidade regenerativa após lesões.',
          ],
          takeaway: 'A cartilagem é avascular, com condrócitos alojados em lacunas e nutrição dependente de difusão.',
          diagram: 'bone',
        },
        {
          id: 'bone-matrix',
          title: 'Tecido ósseo: matriz orgânica e mineral',
          paragraphs: [
            'O osso é um tecido conjuntivo especializado e vascularizado. Sua matriz possui fração orgânica (osteoide, rica em colágeno tipo I) e fração inorgânica de cristais de hidroxiapatita de cálcio e fosfato.',
            'Essa composição híbrida confere rigidez para suportar compressão e flexibilidade para resistir a torções e fraturas.',
          ],
          takeaway: 'O osso combina colágeno tipo I com cristais minerais de hidroxiapatita para força e elasticidade.',
          diagram: 'bone',
        },
        {
          id: 'bone-cells',
          title: 'Osteoblastos, osteócitos e osteoclastos',
          paragraphs: [
            'Osteoblastos sintetizam o osteoide e promovem sua mineralização. Ao ficarem presos na matriz mineralizada, diferenciam-se em osteócitos, que monitoram estresse mecânico.',
            'Osteoclastos são células multinucleadas derivadas da linhagem monocítica-macrofágica que secretam ácidos e enzimas lisossômicas para reabsorver o osso.',
          ],
          takeaway: 'Osteoblastos formam osso, osteócitos mantêm a matriz e osteoclastos reabsorvem o tecido.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual célula óssea multinucleada é responsável pela reabsorção e degradação da matriz mineralizada durante a remodelação?',
        options: [
          {
            id: 'osteoclast',
            label: 'Osteoclasto',
            explanation: 'Correto: osteoclastos derivam de macrófagos, desmineralizam a matriz ácida e degradam colágeno por catepsina K.',
          },
          {
            id: 'osteoblast',
            label: 'Osteoblasto',
            explanation: 'Incorreto: osteoblastos sintetizam a matriz orgânica osteoide e regulam a deposição mineral.',
          },
          {
            id: 'osteocyte',
            label: 'Osteócito',
            explanation: 'Incorreto: osteócitos são células maduras em lacunas com canalículos que atuam como mecanossensores.',
          },
          {
            id: 'chondroblast',
            label: 'Condroblasto',
            explanation: 'Incorreto: condroblastos originam a matriz cartilaginosa prévia à formação de condrócitos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How does bone stay strong and constantly remodeled while cartilage resists compressive joint friction?',
      title: 'Cartilage and bone tissue: chondrocytes and bone cells',
      description: 'Contrast avascular cartilage with dynamic mineralized bone and master bone cell lineage and function.',
      objective: 'Distinguish chondrocytes, osteoblasts, osteocytes, and osteoclasts according to their formation and remodeling roles.',
      stages: [
        {
          id: 'cartilage',
          title: 'Cartilage: flexible and avascular support',
          paragraphs: [
            'Cartilage is an avascular and aneural specialized connective tissue. Chondrocytes reside in lacunae embedded in type II collagen and chondroitin sulfate.',
            'Nutrients diffuse slowly from the perichondrium or synovial fluid, explaining its very limited regenerative capacity.',
          ],
          takeaway: 'Cartilage is avascular with chondrocytes in lacunae and nutrient delivery driven by diffusion.',
          diagram: 'bone',
        },
        {
          id: 'bone-matrix',
          title: 'Bone matrix: organic osteoid and minerals',
          paragraphs: [
            'Bone is highly vascularized connective tissue. Its matrix consists of an organic component (osteoid, mainly type I collagen) and an inorganic mineral fraction of calcium hydroxyapatite crystals.',
            'This composite architecture gives bone compressive rigidity along with tensile resistance against fractures.',
          ],
          takeaway: 'Bone combines type I collagen with hydroxyapatite crystals for combined rigidity and tensile resilience.',
          diagram: 'bone',
        },
        {
          id: 'bone-cells',
          title: 'Osteoblasts, osteocytes, and osteoclasts',
          paragraphs: [
            'Osteoblasts synthesize osteoid and drive mineralization. Once entrapped within mineralized matrix, they differentiate into osteocytes that sense mechanical strain.',
            'Osteoclasts are large, multinucleated cells from the monocyte-macrophage lineage that secrete acid and enzymes to resorb bone.',
          ],
          takeaway: 'Osteoblasts build bone, osteocytes sense strain, and osteoclasts resorb mineralized matrix.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which multinucleated bone cell is responsible for resorbing and degrading mineralized matrix during remodeling?',
        options: [
          {
            id: 'osteoclast',
            label: 'Osteoclast',
            explanation: 'Correct: osteoclasts derive from macrophage precursors and secrete acid and cathepsin K to resorb bone.',
          },
          {
            id: 'osteoblast',
            label: 'Osteoblast',
            explanation: 'Incorrect: osteoblasts synthesize osteoid organic matrix and promote mineralization.',
          },
          {
            id: 'osteocyte',
            label: 'Osteocyte',
            explanation: 'Incorrect: osteocytes are mature quiescent cells residing in lacunae acting as mechanical sensors.',
          },
          {
            id: 'chondroblast',
            label: 'Chondroblast',
            explanation: 'Incorrect: chondroblasts generate cartilaginous extracellular matrix prior to mature chondrocytes.',
          },
        ],
      },
    },
  },
});

export const histologyMuscleTypesLesson = lessonSchema.parse({
  id: 'histology-muscle-types',
  revision: 1,
  questionId: 'histology-muscle-intercalated',
  correctOptionId: 'cardiac',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch4-muscle',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-muscle-tissue-and-motion',
      section: 'Chapter 4 · Muscle Tissue and Motion',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Histologia',
      hook: 'Como as células musculares se organizam para gerar contrações voluntárias potentes ou batimentos contínuos involuntários?',
      title: 'Histologia muscular: esquelético, cardíaco e liso',
      description: 'Compare as características microscópicas dos três tipos de tecido muscular com ênfase nas especializações de membrana.',
      objective: 'Distinguir músculo estriado esquelético, estriado cardíaco e liso por suas estriações, núcleos e discos intercalares.',
      stages: [
        {
          id: 'skeletal',
          title: 'Músculo estriado esquelético: fibras multinucleadas',
          paragraphs: [
            'O músculo esquelético é formado por fibras cilíndricas muito longas originadas da fusão de mioblastos embrionários, resultando em múltiplos núcleos periféricos.',
            'O arranjo regular de sarcômeros com filamentos de actina e miosina produz estriações transversais visíveis à microscopia óptica.',
          ],
          takeaway: 'O músculo esquelético possui fibras cilíndricas longas, estriações transversais e núcleos periféricos.',
          diagram: 'sarcomere',
        },
        {
          id: 'cardiac',
          title: 'Músculo cardíaco: discos intercalares e sincício funcional',
          paragraphs: [
            'O miocárdio apresenta fibras ramificadas com um ou dois núcleos centrais. Suas células conectam-se ponto a ponto por meio de discos intercalares.',
            'Os discos contêm desmossomos para coesão mecânica e junções comunicantes (gap junctions) que propagam potenciais elétricos rapidamente, permitindo contração coordenada.',
          ],
          takeaway: 'Discos intercalares unem cardiomiócitos mecanicamente e eletricamente em um sincício funcional.',
          diagram: 'sarcomere',
        },
        {
          id: 'smooth',
          title: 'Músculo liso: contração lenta e involuntária',
          paragraphs: [
            'Presente na parede de vasos sanguíneos, tubo digestivo e vias aéreas, o músculo liso é composto por células fusiformes com núcleo único central.',
            'Ele não apresenta sarcômeros alinhados nem estriações visíveis; a contração ocorre pela ancoragem de filamentos contráteis em corpos densos.',
          ],
          takeaway: 'O músculo liso tem células fusiformes mononucleadas, sem estriações e sob controle autônomo.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'A presença de discos intercalares com junções comunicantes e desmossomos é uma especialização exclusiva de qual tecido muscular?',
        options: [
          {
            id: 'cardiac',
            label: 'Músculo estriado cardíaco',
            explanation: 'Correto: discos intercalares são junções término-terminais características do miocárdio para sincício eletromecânico.',
          },
          {
            id: 'skeletal',
            label: 'Músculo estriado esquelético',
            explanation: 'Incorreto: fibras esqueléticas são sincícios multinucleados sem discos intercalares.',
          },
          {
            id: 'smooth',
            label: 'Músculo liso',
            explanation: 'Incorreto: o músculo liso tem junções comunicantes esparsas, mas carece de discos intercalares e estriações.',
          },
          {
            id: 'dense-connective',
            label: 'Tecido conjuntivo denso',
            explanation: 'Incorreto: o conjuntivo denso é rico em fibras colágenas e fibroblastos, sem função contrátil primária.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How do muscle cells organize to generate powerful voluntary movement versus continuous involuntary heartbeats?',
      title: 'Muscle histology: skeletal, cardiac, and smooth',
      description: 'Compare microscopic features of all three muscle types emphasizing structural striations and junctional specializations.',
      objective: 'Distinguish skeletal, cardiac, and smooth muscle by their striations, nuclear locations, and intercalated discs.',
      stages: [
        {
          id: 'skeletal',
          title: 'Skeletal muscle: multinucleated fibers',
          paragraphs: [
            'Skeletal muscle fibers are long cylindrical cells formed by embryonic myoblast fusion, leaving multiple nuclei pushed against the peripheral sarcolemma.',
            'Regular repeating sarcomere arrays of actin and myosin filaments produce clear transverse striations under light microscopy.',
          ],
          takeaway: 'Skeletal muscle has long cylindrical fibers, cross striations, and peripheral nuclei.',
          diagram: 'sarcomere',
        },
        {
          id: 'cardiac',
          title: 'Cardiac muscle: intercalated discs and functional syncytium',
          paragraphs: [
            'Cardiac myocytes are branched cells with one or two central nuclei connected end-to-end through specialized intercalated discs.',
            'These discs house desmosomes for mechanical adhesion and gap junctions that spread action potentials rapidly across the syncytium.',
          ],
          takeaway: 'Intercalated discs link cardiomyocytes mechanically and electrically into a functional syncytium.',
          diagram: 'sarcomere',
        },
        {
          id: 'smooth',
          title: 'Smooth muscle: involuntary sustained contraction',
          paragraphs: [
            'Found in blood vessel walls, the gastrointestinal tract, and airways, smooth muscle cells are spindle-shaped (fusiform) with a single central nucleus.',
            'They lack ordered sarcomeres and visible striations; myofilaments anchor to dense bodies to contract under autonomic control.',
          ],
          takeaway: 'Smooth muscle has non-striated, spindle-shaped cells with single central nuclei under autonomic control.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'The presence of intercalated discs containing gap junctions and desmosomes is an exclusive feature of which muscle tissue?',
        options: [
          {
            id: 'cardiac',
            label: 'Cardiac striated muscle',
            explanation: 'Correct: intercalated discs are end-to-end junctional complexes unique to cardiac muscle for electromechanical syncytium.',
          },
          {
            id: 'skeletal',
            label: 'Skeletal striated muscle',
            explanation: 'Incorrect: skeletal muscle fibers are multinucleated syncytia lacking intercalated discs.',
          },
          {
            id: 'smooth',
            label: 'Smooth muscle',
            explanation: 'Incorrect: smooth muscle cells contain gap junctions but lack intercalated discs and sarcomeric striations.',
          },
          {
            id: 'dense-connective',
            label: 'Dense connective tissue',
            explanation: 'Incorrect: dense connective tissue consists of collagen bundles and fibroblasts rather than contractile muscle.',
          },
        ],
      },
    },
  },
});

export const histologyNervousGliaLesson = lessonSchema.parse({
  id: 'histology-nervous-glia',
  revision: 1,
  questionId: 'histology-nervous-myelin',
  correctOptionId: 'oligodendrocyte',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch12-nervous',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue',
      section: 'Chapter 12 · Nervous Tissue',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Histologia',
      hook: 'Para cada neurônio que conduz sinais elétricos, quantas células gliais trabalham no suporte, nutrição e isolamento?',
      title: 'Tecido nervoso e neuróglia: neurônios e suporte glial',
      description: 'Explore a estrutura do neurônio e as funções das células da glia no sistema nervoso central e periférico.',
      objective: 'Identificar a estrutura neuronal e distinguir as funções de astrócitos, oligodendrócitos, micróglia e células de Schwann.',
      stages: [
        {
          id: 'neurons',
          title: 'Neurônios: corpo celular, dendritos e axônio',
          paragraphs: [
            'Os neurônios são as células eletricamente excitáveis do sistema nervoso. Possuem corpo celular (soma) rico em corpúsculos de Nissl (retículo endoplasmático rugoso), dendritos receptores e um axônio condutor.',
            'O axônio conduz o potencial de ação até as terminações sinápticas, onde neurotransmissores químicos são liberados para a fenda sináptica.',
          ],
          takeaway: 'Dendritos recebem impulsos aferentes e o axônio propaga o potencial de ação em direção à sinapse.',
          diagram: 'neuron',
        },
        {
          id: 'central-glia',
          title: 'Neuróglia do SNC: astrócitos e oligodendrócitos',
          paragraphs: [
            'No encéfalo e medula, os astrócitos emitem pés vasculares que mantêm a barreira hematoencefálica e regulam o microambiente iônico extracelular.',
            'Os oligodendrócitos projetam prolongamentos que envolvem múltiplos axônios centrais, formando a bainha de mielina lipídica que acelera a condução por condução saltatória.',
          ],
          takeaway: 'No SNC, astrócitos sustentam a barreira e oligodendrócitos produzem a bainha de mielina.',
          diagram: 'neuron',
        },
        {
          id: 'peripheral-glia',
          title: 'Neuróglia do SNP: células de Schwann',
          paragraphs: [
            'No sistema nervoso periférico, as células de Schwann mielinizam um único segmento de axônio periférico por enrolamento concêntrico de sua membrana.',
            'A micróglia no SNC atua como fagócito residente, enquanto as células de Schwann no SNP desempenham papel crucial na regeneração axonal após traumas.',
          ],
          takeaway: 'Células de Schwann mielinizam axônios no SNP e auxiliam na regeneração nervosa periférica.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual célula da glia é responsável por formar a bainha de mielina em múltiplos axônios dentro do Sistema Nervoso Central (SNC)?',
        options: [
          {
            id: 'oligodendrocyte',
            label: 'Oligodendrócito',
            explanation: 'Correto: oligodendrócitos emitem prolongamentos para mielinizar múltiplos axônios simultaneamente no SNC.',
          },
          {
            id: 'schwann-cell',
            label: 'Célula de Schwann',
            explanation: 'Incorreto: as células de Schwann formam mielina exclusivamente no Sistema Nervoso Periférico (SNP).',
          },
          {
            id: 'astrocyte',
            label: 'Astrócito',
            explanation: 'Incorreto: astrócitos formam pés vasculares na barreira hematoencefálica e equilibram o potássio extracelular.',
          },
          {
            id: 'microglia',
            label: 'Micróglia',
            explanation: 'Incorreto: a micróglia representa os macrófagos residentes do parênquima cerebral.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'For every neuron firing electrical impulses, how do glial cells support, insulate, and defend the nervous system?',
      title: 'Nervous tissue and neuroglia: neurons and glial support',
      description: 'Explore neuronal anatomy and contrast glial cell functions in the central versus peripheral nervous systems.',
      objective: 'Identify neuronal compartments and differentiate functions of astrocytes, oligodendrocytes, microglia, and Schwann cells.',
      stages: [
        {
          id: 'neurons',
          title: 'Neurons: soma, dendrites, and axon',
          paragraphs: [
            'Neurons are electrically excitable cells consisting of a soma (cell body) with Nissl bodies (rough endoplasmic reticulum), branching dendrites, and a single conducting axon.',
            'The axon conveys action potentials to terminal boutons, where synaptic vesicles exocytose neurotransmitters across the synaptic cleft.',
          ],
          takeaway: 'Dendrites receive incoming signals and the axon conveys action potentials to the synapse.',
          diagram: 'neuron',
        },
        {
          id: 'central-glia',
          title: 'CNS neuroglia: astrocytes and oligodendrocytes',
          paragraphs: [
            'In the brain and spinal cord, astrocytes extend perivascular end-feet to maintain the blood-brain barrier and regulate extracellular ion concentrations.',
            'Oligodendrocytes extend multiple processes that wrap several central axons, creating the lipid-rich myelin sheath that enables fast saltatory conduction.',
          ],
          takeaway: 'In the CNS, astrocytes maintain the barrier and oligodendrocytes synthesize the myelin sheath.',
          diagram: 'neuron',
        },
        {
          id: 'peripheral-glia',
          title: 'PNS neuroglia: Schwann cells',
          paragraphs: [
            'In the peripheral nervous system, Schwann cells wrap individually around single axonal internodes to form the peripheral myelin sheath.',
            'Microglia function as resident CNS phagocytes, whereas Schwann cells guide and promote axonal regeneration following peripheral nerve injuries.',
          ],
          takeaway: 'Schwann cells myelinate PNS axons and provide a cellular pathway for peripheral nerve regeneration.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which neuroglial cell is responsible for synthesizing the myelin sheath around multiple axons in the Central Nervous System (CNS)?',
        options: [
          {
            id: 'oligodendrocyte',
            label: 'Oligodendrocyte',
            explanation: 'Correct: oligodendrocytes extend processes to myelinate multiple axon segments in the CNS.',
          },
          {
            id: 'schwann-cell',
            label: 'Schwann cell',
            explanation: 'Incorrect: Schwann cells myelinate axons exclusively in the Peripheral Nervous System (PNS).',
          },
          {
            id: 'astrocyte',
            label: 'Astrocyte',
            explanation: 'Incorrect: astrocytes regulate synaptic ions and blood-brain barrier perivascular end-feet.',
          },
          {
            id: 'microglia',
            label: 'Microglia',
            explanation: 'Incorrect: microglia act as resident immune phagocytes in the central nervous system.',
          },
        ],
      },
    },
  },
});
