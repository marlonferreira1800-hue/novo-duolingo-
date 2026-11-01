import { lessonSchema } from '../src/contracts/learning';

export const histologyCirculatoryLesson = lessonSchema.parse({
  id: 'histology-circulatory',
  revision: 1,
  questionId: 'histology-circulatory-q1',
  correctOptionId: 'elastic-tunica-media',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch20-vessel-histology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-1-structure-and-function-of-blood-vessels',
      section: 'Chapter 20 · Histology of Blood Vessels',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Histologia',
      hook: 'Como as artérias de grande calibre suportam as ondas pulsáteis do coração sem se romperem ao longo de bilhões de batimentos?',
      title: 'Histologia vascular: artérias elásticas, musculares e capilares',
      description: 'Explore as túnicas íntima, média e adventícia e correlacione as especializações microscópicas com a hemodinâmica.',
      objective: 'Diferenciar artérias elásticas de artérias musculares e reconhecer os três tipos histológicos de capilares.',
      stages: [
        {
          id: 'vessel-tunics',
          title: 'As três camadas concêntricas dos vasos',
          paragraphs: [
            'Artérias e veias compartilham a mesma organização histológica básica em três túnicas: íntima (endotélio com lâmina basal e lâmina elástica interna), média (células musculares lisas e fibras elásticas) e adventícia (tecido conjuntivo com vasa vasorum e nervos).',
            'O endotélio vascular é uma monocamada de células pavimentosas contínuas com glicocálice carregado negativamente, que secreta substâncias vasoativas e inibe a agregação plaquetária.',
          ],
          takeaway: 'Vasos sanguíneos organizam-se em túnicas íntima, média e adventícia com funções mecânicas e regulatórias.',
          diagram: 'tissue',
        },
        {
          id: 'elastic-muscular',
          title: 'Artérias elásticas versus artérias musculares',
          paragraphs: [
            'As artérias condutoras (elásticas, como a aorta) possuem túnica média espessa repleta de 40 a 70 lâminas fenestradas concêntricas de elastina, permitindo o efeito Windkessel que amortece o pulso sistólico.',
            'As artérias distribuidoras (musculares) possuem túnica média predominantemente formada por camadas circulares de músculo liso sob controle autonômico e lâminas elásticas interna e externa bem delimitadas.',
          ],
          takeaway: 'Artérias elásticas amortecem a pulsação sistólica por elastina, enquanto musculares regulam o diâmetro por músculo liso.',
          diagram: 'pressure',
        },
        {
          id: 'capillary-types',
          title: 'Tipos de capilares: contínuos, fenestrados e sinusoides',
          paragraphs: [
            'Os capilares consistem em endotélio e lâmina basal, classificados em três subtipos: contínuos (com junções oclusivas estreitas, comuns no SNC, pele e músculos), fenestrados (com poros endoteliais filtrantes, nos rins e intestino) e sinusoides (descontínuos, com grandes fendas intercelulares e lâmina basal ausente ou incompleta, no fígado, baço e medula óssea).',
            'Pericitos abraçam a lâmina basal capilar, auxiliando na estabilização vascular, contratilidade microvascular e reparo angiogênico.',
          ],
          takeaway: 'Capilares contínuos têm barreira estreita, fenestrados filtram por poros e sinusoides permitem trânsito celular amplo.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual especialização histológica da túnica média confere à aorta a capacidade de amortecer a onda de pulso sistólica (efeito Windkessel)?',
        options: [
          {
            id: 'elastic-tunica-media',
            label: 'Múltiplas lâminas fenestradas concêntricas de elastina na túnica média',
            explanation: 'Correto: a abundância de fibras elásticas permite a expansão elástica sistólica e o recuo elástico diastólico contínuo.',
          },
          {
            id: 'thick-adventitial-collagen',
            label: 'Camada adventícia exclusivamente composta por tecido adiposo unilocular',
            explanation: 'Incorreto: a adventícia abriga fibroblastos e vasa vasorum, não sendo a responsável pelo efeito elástico pulsátil.',
          },
          {
            id: 'pure-skeletal-muscle',
            label: 'Feixes de músculo estriado esquelético sob controle voluntário',
            explanation: 'Incorreto: os vasos sanguíneos não possuem músculo estriado esquelético em suas paredes.',
          },
          {
            id: 'monolayer-discontinuous-pores',
            label: 'Endotélio fenestrado descontínuo desprovido de lâmina basal',
            explanation: 'Incorreto: a aorta possui endotélio contínuo e lâmina basal intacta para conter as altas pressões sistêmicas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How do large conducting arteries absorb explosive systolic thrust without bursting across billions of lifetime cardiac cycles?',
      title: 'Vascular histology: elastic and muscular arteries and capillaries',
      description: 'Explore the tunica intima, media, and adventitia and link microstructural features directly to vascular hemodynamics.',
      objective: 'Distinguish elastic from muscular arteries and classify continuous, fenestrated, and discontinuous capillaries.',
      stages: [
        {
          id: 'vessel-tunics',
          title: 'The three concentric structural tunics',
          paragraphs: [
            'Arterial and venous vessels share a tripartite histologic architecture: tunica intima (endothelium, basal lamina, and internal elastic lamina), tunica media (vascular smooth muscle and elastic sheets), and tunica adventitia (collagenous connective tissue housing vasa vasorum and autonomic nerves).',
            'The vascular endothelium forms a smooth, non-thrombogenic squamous monolayer that synthesizes prostacyclin, nitric oxide, and endothelin to modulate local vascular tone.',
          ],
          takeaway: 'Blood vessels are built from intima, media, and adventitia, providing barrier, contractile, and supportive functions.',
          diagram: 'tissue',
        },
        {
          id: 'elastic-muscular',
          title: 'Elastic conducting versus muscular distributing arteries',
          paragraphs: [
            'Elastic conducting arteries (such as the aorta) feature a thick tunica media filled with 40 to 70 concentric fenestrated elastic lamellae, which stretch during systole and recoil in diastole (Windkessel effect).',
            'Muscular distributing arteries possess a predominantly smooth muscle media under sympathetic control, flanked by prominent internal and external elastic laminae.',
          ],
          takeaway: 'Elastic arteries smooth systolic pulsatility with elastin; muscular arteries govern flow resistance with smooth muscle.',
          diagram: 'pressure',
        },
        {
          id: 'capillary-types',
          title: 'Capillary classifications: continuous, fenestrated, and sinusoidal',
          paragraphs: [
            'Capillaries consist solely of an endothelial monolayer surrounded by a basement membrane, categorised into three functional types: continuous (tight junctions, abundant in the CNS and muscle), fenestrated (porous diaphragms for filtration in renal glomeruli and intestine), and sinusoidal/discontinuous (gapped endothelia with incomplete basement membranes in liver and bone marrow).',
            'Perivascular pericytes wrap around capillary basal laminae to modulate microvascular stability, contractility, and post-injury angiogenesis.',
          ],
          takeaway: 'Continuous capillaries form tight barriers, fenestrated enable rapid filtration, and sinusoids permit cellular transit.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which microstructural specialization within the tunica media allows large conducting arteries like the aorta to sustain the Windkessel effect?',
        options: [
          {
            id: 'elastic-tunica-media',
            label: 'Concentric fenestrated sheets of elastin within a prominent tunica media',
            explanation: 'Correct: abundant elastic lamellae allow systemic conducting vessels to expand in systole and recoil elastically in diastole.',
          },
          {
            id: 'thick-adventitial-collagen',
            label: 'An adventitial layer composed entirely of unilocular adipose tissue',
            explanation: 'Incorrect: adventitial connective tissue provides anchoring and houses vasa vasorum, but does not provide dynamic elastic recoil.',
          },
          {
            id: 'pure-skeletal-muscle',
            label: 'Fascicles of voluntary skeletal muscle fibers lining the media',
            explanation: 'Incorrect: blood vessels do not contain skeletal muscle tissue.',
          },
          {
            id: 'monolayer-discontinuous-pores',
            label: 'Discontinuous sinusoidal endothelia lacking a basal membrane',
            explanation: 'Incorrect: the aorta features a continuous, tightly sealed endothelial monolayer to withstand systemic pressure.',
          },
        ],
      },
    },
  },
});

export const histologyLymphoidLesson = lessonSchema.parse({
  id: 'histology-lymphoid',
  revision: 1,
  questionId: 'histology-lymphoid-q1',
  correctOptionId: 'hassall-corpuscle-thymus',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch21-lymphoid-histology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-1-anatomy-of-the-lymphatic-and-immune-systems',
      section: 'Chapter 21 · Histology of Lymphoid Organs',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Histologia',
      hook: 'Como os órgãos linfoides filtram linfa e sangue, diferenciando antígenos invasores de células do próprio corpo?',
      title: 'Histologia dos órgãos linfoides: timo, linfonodo, baço e MALT',
      description: 'Estude o estroma reticular e a arquitetura cortical e medular dos órgãos linfoides primários e secundários.',
      objective: 'Identificar a estrutura histológica do timo (corpúsculos de Hassall), linfonodo, baço (polpas branca e vermelha) e MALT.',
      stages: [
        {
          id: 'thymus-maturation',
          title: 'Timo: córtex denso e corpúsculos tímicos medulares',
          paragraphs: [
            'O timo é um órgão linfoide primário bilobulado envolvido por cápsula de tecido conjuntivo com septos que formam lóbulos incompletos. Diferente dos demais órgãos linfoides, seu estroma é epitelial (células reticulares epiteliais) e desprovido de fibras reticulares ou nódulos linfoides.',
            'O córtex externo é denso em timócitos imaturos undergoing seleção positiva. Na medula clara ocorrem a seleção negativa e a presença patognomônica de corpúsculos tímicos de Hassall (anéis concêntricos de células epiteliais queratinizadas).',
          ],
          takeaway: 'O timo possui estroma epitelial, córtex denso de timócitos e corpúsculos de Hassall na medula.',
          diagram: 'immune',
        },
        {
          id: 'lymph-node-filter',
          title: 'Linfonodo: córtex, paracórtex e cordões medulares',
          paragraphs: [
            'Os linfonodos filtram a linfa que chega pelos vasos linfáticos aferentes na face convexa e sai pelo vaso eferente no hilo. Dividem-se em córtex externo (nódulos linfoides com centros germinativos ricos em linfócitos B), paracórtex (região timo-dependente rica em linfócitos T e vênulas de endotélio alto) e medula.',
            'A linfa passa pelos seios subcapsulares, corticais e medulares margeados por macrófagos que fagocitam antígenos particulados antes de a linfa retornar ao sistema venoso.',
          ],
          takeaway: 'Linfonodos filtram linfa: córtex contém células B em nódulos e o paracórtex abriga células T com HEVs.',
          diagram: 'tissue',
        },
        {
          id: 'spleen-malt',
          title: 'Baço e MALT: filtros hemáticos e de mucosas',
          paragraphs: [
            'O baço é o maior órgão linfoide secundário e filtra o sangue. A polpa branca é formada pela bainha linfoide periarteriolar (PALS, rica em células T) e nódulos esplênicos com células B. A polpa vermelha é formada por sinusoides esplênicos e cordões de Billroth, que destroem hemácias senescentes por hemocaterese.',
            'O tecido linfoide associado a mucosas (MALT, como placas de Peyer ileais e tonsilas) possui células M especializadas no epitélio para transportar antígenos luminais diretamente aos folículos subepiteliais.',
          ],
          takeaway: 'O baço filtra sangue com polpa branca imune e polpa vermelha fagocítica; o MALT protege as mucosas.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual estrutura histológica exclusiva formada por células reticulares epiteliais queratinizadas dispostas concentricamente é encontrada na medula do timo?',
        options: [
          {
            id: 'hassall-corpuscle-thymus',
            label: 'Corpúsculos tímicos de Hassall',
            explanation: 'Correto: os corpúsculos de Hassall são formações concêntricas eosinofílicas patognomônicas da medula tímica.',
          },
          {
            id: 'germinal-center-follicle',
            label: 'Centro germinativo com manto de células B virgens',
            explanation: 'Incorreto: o timo é desprovido de nódulos ou centros germinativos com células B na normalidade.',
          },
          {
            id: 'billroth-cords-spleen',
            label: 'Cordões celulares esplênicos de Billroth',
            explanation: 'Incorreto: os cordões de Billroth situam-se na polpa vermelha do baço para hemocaterese de eritrócitos.',
          },
          {
            id: 'high-endothelial-venule',
            label: 'Seios linfáticos subcapsulares anastomosados',
            explanation: 'Incorreto: seios subcapsulares localizam-se na periferia de linfonodos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How do lymphoid organs continuously filter lymph and systemic blood, discriminating foreign pathogens from self antigens?',
      title: 'Lymphoid organs histology: thymus, lymph node, spleen, and MALT',
      description: 'Master the reticular stroma, cellular zoning, and distinct filtration mechanisms of primary and secondary lymphoid organs.',
      objective: 'Identify histologic landmarks of the thymus (Hassall corpuscles), lymph node, spleen (white/red pulp), and MALT.',
      stages: [
        {
          id: 'thymus-maturation',
          title: 'Thymus: dense cortex and medullary Hassall corpuscles',
          paragraphs: [
            'The thymus is a primary bilobed lymphoid organ partitioned into incomplete lobules by connective tissue septa. Unlike other lymphoid tissues, its framework is non-reticular, built from epithelioreticular cells without true collagenous reticulin fibers or germinal centers.',
            'The dark cortex is packed with immature thymocytes undergoing positive selection. The pale medulla coordinates negative selection and uniquely features eosinophilic, concentrically laminated Hassall corpuscles (thymic epithelial aggregates).',
          ],
          takeaway: 'The thymus has an epithelioreticular stroma, dense cortical T thymocytes, and medullary Hassall corpuscles.',
          diagram: 'immune',
        },
        {
          id: 'lymph-node-filter',
          title: 'Lymph node: cortex, paracortex, and medullary cords',
          paragraphs: [
            'Lymph nodes are encapsulated bean-shaped filters receiving afferent lymphatics across their convex border. They are compartmentalized into a superficial cortex (B-cell lymphoid follicles with active germinal centers), a paracortex (T-cell domain with high endothelial venules, HEVs), and a medulla.',
            'Lymph traverses subcapsular, trabecular, and medullary sinuses lined by branched macrophages that phagocytose antigens prior to efferent lymphatic exit at the hilum.',
          ],
          takeaway: 'Lymph nodes filter lymph through B-cell cortical follicles, T-cell paracortex, and macrophage-lined sinuses.',
          diagram: 'tissue',
        },
        {
          id: 'spleen-malt',
          title: 'Spleen and MALT: hematic and mucosal immune surveillance',
          paragraphs: [
            'The spleen is the largest secondary lymphoid organ, monitoring blood directly. White pulp features periarteriolar lymphoid sheaths (PALS, T-cells) and splenic nodules (B-cells), whereas red pulp features splenic sinuses and cords of Billroth that destroy senescent erythrocytes by hemocatheresis.',
            'Mucosa-associated lymphoid tissue (MALT, including ileal Peyer patches and pharyngeal tonsils) samples luminal antigens through overlying epithelial microfold (M) cells delivering directly to dendritic cells.',
          ],
          takeaway: 'The spleen samples circulating blood through white and red pulp, while MALT samples mucosal antigens via M cells.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which unique histological structure consisting of concentric, keratinized epithelioreticular cell whorls resides within the thymic medulla?',
        options: [
          {
            id: 'hassall-corpuscle-thymus',
            label: 'Hassall (thymic) corpuscles',
            explanation: 'Correct: Hassall corpuscles are pathognomonic concentrically arranged, eosinophilic epithelial structures in the thymic medulla.',
          },
          {
            id: 'germinal-center-follicle',
            label: 'Germinal centers with dark mantle zones',
            explanation: 'Incorrect: normal thymus does not feature B-cell lymphoid follicles or germinal centers.',
          },
          {
            id: 'billroth-cords-spleen',
            label: 'Splenic cords of Billroth',
            explanation: 'Incorrect: cords of Billroth reside within splenic red pulp, filtering damaged erythrocytes.',
          },
          {
            id: 'high-endothelial-venule',
            label: 'Subcapsular lymphatic sinuses',
            explanation: 'Incorrect: subcapsular sinuses are initial lymph conduits found beneath the capsule of lymph nodes.',
          },
        ],
      },
    },
  },
});

export const histologyRespiratoryDigestiveLesson = lessonSchema.parse({
  id: 'histology-respiratory-digestive',
  revision: 1,
  questionId: 'histology-respiratory-digestive-q1',
  correctOptionId: 'type1-type2-pneumocyte',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-ch23-histology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-2-the-lungs',
      section: 'Chapter 22 & 23 · Respiratory and Digestive Epithelia',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Histologia',
      hook: 'Como as membranas mucosas se especializam para maximizar a difusão gasosa ultrafina em um órgão e absorver nutrientes massivamente em outro?',
      title: 'Histologia respiratória e digestória: alvéolos, enterócitos e lóbulo hepático',
      description: 'Analise a barreira hematoaérea, as vilosidades intestinais e a citoarquitetura dos sinusoides do lóbulo hepático clássico.',
      objective: 'Distinguir pneumócitos tipo I e II, reconhecer enterócitos com borda em escova e descrever o lóbulo hepático clássico.',
      stages: [
        {
          id: 'alveolar-barrier',
          title: 'Epitélio respiratório e a barreira hematoaérea alveolar',
          paragraphs: [
            'As vias aéreas condutoras são revestidas por epitélio pseudoestratificado colunar ciliado com células caliciformes. Nos alvéolos respiratórios, o epitélio torna-se simples pavimentoso altamente especializado.',
            'Os pneumócitos tipo I cobrem 95% da superfície alveolar com citoplasma extremamente adelgaçado para difusão de O₂ e CO₂. Os pneumócitos tipo II são células cúbicas que sintetizam corpos lamelares ricos em surfactante e atuam como células-tronco reparadoras.',
          ],
          takeaway: 'Pneumócitos tipo I formam a barreira hematoaérea ultrafina e pneumócitos tipo II secretam surfactante.',
          diagram: 'lung',
        },
        {
          id: 'intestinal-villi',
          title: 'Vilosidades e enterócitos com borda em escova',
          paragraphs: [
            'A mucosa do intestino delgado maximiza sua área de absorção através de pregas circulares, vilosidades digitiformes e microvilosidades na membrana apical dos enterócitos (borda em escova com glicocálice enzimático).',
            'Entre as vilosidades abrem-se as criptas de Lieberkühn, que abrigam células enteroendócrinas, células caliciformes secretoras de muco e células de Paneth na base, que secretam lisozima e alfa-defensinas antimicrobianas.',
          ],
          takeaway: 'Enterócitos absorvem nutrientes com microvilosidades apicais, e células de Paneth nas criptas secretam defensinas.',
          diagram: 'intestine',
        },
        {
          id: 'hepatic-lobule',
          title: 'Lóbulo hepático clássico e espaço de Disse',
          paragraphs: [
            'O lóbulo hepático clássico tem formato hexagonal centrado na veia centrolobular, com tríades portais nos vértices (ramo da artéria hepática, ramo da veia porta e ducto biliar interlobular).',
            'Placas de hepatócitos são ladeadas por sinusoides revestidos por células endoteliais fenestradas e macrófagos residentes (células de Kupffer). O espaço perisinusoidal de Disse abriga as células estreladas de Ito, que armazenam vitamina A e secretam colágeno na cirrose.',
          ],
          takeaway: 'O lóbulo hepático drena sangue portal e arterial aos sinusoides em direção à veia centrolobular.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual célula alveolar é responsável por secretar o surfactante pulmonar a partir de corpos lamelares e proliferar para reparar o epitélio lesado?',
        options: [
          {
            id: 'type1-type2-pneumocyte',
            label: 'Pneumócito tipo II (célula alveolar grande)',
            explanation: 'Correto: pneumócitos tipo II sintetizam surfactante e funcionam como progenitores epiteliais pós-lesão alveolar.',
          },
          {
            id: 'type1-flattened-pneumocyte',
            label: 'Pneumócito tipo I adelgaçado',
            explanation: 'Incorreto: pneumócitos tipo I são células terminais finas e especializadas na difusão física de gases, sem produzir surfactante.',
          },
          {
            id: 'goblet-mucus-cell',
            label: 'Célula caliciforme ciliada',
            explanation: 'Incorreto: células caliciformes secretam muco nas vias condutoras e não estão presentes nos alvéolos normais.',
          },
          {
            id: 'paneth-cell-base',
            label: 'Célula de Paneth rica em grânulos',
            explanation: 'Incorreto: células de Paneth localizam-se na base das criptas intestinais, secretando peptídeos antibacterianos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How do epithelial sheets adapt to support instantaneous gas diffusion in the lung versus massive active absorption in the gut?',
      title: 'Respiratory and digestive histology: alveoli, enterocytes, and hepatic lobule',
      description: 'Analyze the alveolar blood-air barrier, intestinal brush-border villi, and microarchitecture of hepatic sinusoid plates.',
      objective: 'Distinguish type I and II pneumocytes, recognize enterocyte brush borders, and describe classic hepatic lobule organization.',
      stages: [
        {
          id: 'alveolar-barrier',
          title: 'Respiratory epithelium and the alveolar blood-air barrier',
          paragraphs: [
            'Conducting airways are lined by pseudostratified ciliated columnar epithelium with goblet cells. In gas-exchanging alveoli, the lining thins into an ultra-attenuated simple squamous barrier.',
            'Type I pneumocytes cover 95% of alveolar surface area with attenuated cytoplasmic sheets optimized for passive O₂/CO₂ diffusion. Type II pneumocytes are cuboidal cells harboring surfactant-rich lamellar bodies that also divide to regenerate damaged alveolar lining.',
          ],
          takeaway: 'Type I pneumocytes form the thin gas diffusion barrier; type II pneumocytes synthesize surfactant and regenerate alveoli.',
          diagram: 'lung',
        },
        {
          id: 'intestinal-villi',
          title: 'Intestinal villi and brush-border enterocytes',
          paragraphs: [
            'Small intestinal mucosa expands its surface area via plicae circulares, finger-like villi, and dense apical enterocyte microvilli termed the brush border, studded with digestive disaccharidases and peptidases.',
            'Between adjacent villi sit crypts of Lieberkühn, harboring goblet cells, enteroendocrine cells, stem cells, and basal Paneth cells that secrete antimicrobial lysozyme and alpha-defensins into the gut lumen.',
          ],
          takeaway: 'Enterocytes absorb nutrients across apical microvilli; basal crypt Paneth cells defend mucosal immunity.',
          diagram: 'intestine',
        },
        {
          id: 'hepatic-lobule',
          title: 'Classic hepatic lobule and the perisinusoidal space of Disse',
          paragraphs: [
            'The classic liver lobule is a hexagonal prism centered on a central venule, bounded by portal triads at its peripheral angles (hepatic artery branch, portal venule, and bile interlobular duct).',
            'Hepatocyte plates are flanked by fenestrated sinusoids lined by resident Kupffer macrophages. The subendothelial space of Disse houses hepatic stellate (Ito) cells, which store vitamin A and synthesize scar collagen during cirrhosis.',
          ],
          takeaway: 'The hepatic lobule channels portal and arterial blood via sinusoids toward the central vein past hepatocytes.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which alveolar epithelial cell synthesizes pulmonary surfactant from lamellar bodies and acts as a stem progenitor during tissue repair?',
        options: [
          {
            id: 'type1-type2-pneumocyte',
            label: 'Type II pneumocyte (great alveolar cell)',
            explanation: 'Correct: type II alveolar cells synthesize surfactant and divide to replace damaged type I pneumocytes.',
          },
          {
            id: 'type1-flattened-pneumocyte',
            label: 'Attenuated type I pneumocyte',
            explanation: 'Incorrect: type I pneumocytes are squamous cells dedicated to gas exchange without secretory surfactant organelles.',
          },
          {
            id: 'goblet-mucus-cell',
            label: 'Ciliated mucosal goblet cell',
            explanation: 'Incorrect: goblet cells produce airway mucus in conducting segments but are absent in healthy alveoli.',
          },
          {
            id: 'paneth-cell-base',
            label: 'Granular Paneth cell',
            explanation: 'Incorrect: Paneth cells are specialized antimicrobial epithelial cells located at the bottom of intestinal crypts.',
          },
        ],
      },
    },
  },
});

export const histologyUrinaryEndocrineLesson = lessonSchema.parse({
  id: 'histology-urinary-endocrine',
  revision: 1,
  questionId: 'histology-urinary-endocrine-q1',
  correctOptionId: 'podocyte-filtration',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch25-ch17-histology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-1-physical-characteristics-of-urine',
      section: 'Chapter 25 & 17 · Renal and Endocrine Histology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Histologia',
      hook: 'Como os podócitos formam um filtro seletivo de sangue no rim, e como a tireoide armazena seus hormônios extracelularmente?',
      title: 'Histologia urinária e endócrina: corpúsculo renal, urotélio, tireoide e adrenal',
      description: 'Explore a barreira de filtração glomerular com podócitos, o epitélio de transição e os folículos tireoidianos.',
      objective: 'Identificar as camadas da barreira de filtração renal e contrastar as zonas corticais da glândula adrenal.',
      stages: [
        {
          id: 'renal-corpuscle',
          title: 'Corpúsculo renal e barreira de filtração glomerular',
          paragraphs: [
            'O corpúsculo de Malpighi consiste no tufo capilar glomerular envolvido pela cápsula de Bowman (com folheto parietal simples pavimentoso e folheto visceral formado por podócitos).',
            'A barreira de filtração é composta por três elementos: endotélio capilar fenestrado, membrana basal glomerular espessa (com heparansulfato carregado negativamente) e fendas de filtração entre os pedicelos dos podócitos fechadas por diafragmas de nefrina.',
          ],
          takeaway: 'A barreira de filtração renal possui endotélio fenestrado, lâmina basal com carga negativa e fendas com podócitos.',
          diagram: 'kidney',
        },
        {
          id: 'urothelium-transitional',
          title: 'Urotélio: barreira impermeável distensível',
          paragraphs: [
            'O trato urinário excretor (cálices, pelve renal, ureteres e bexiga) é revestido por urotélio (epitélio de transição pseudoestratificado/estratificado especializado).',
            'Sua camada luminal exibe células em guarda-chuva volumosas com placas uroplaquinas rígidas apicais conectadas por pontes dobráveis, permitindo estiramento acentuado sem permitir que a urina hipertônica lese os tecidos subjacentes.',
          ],
          takeaway: 'O urotélio protege contra a toxicidade da urina e acomoda variações de volume por células em guarda-chuva.',
          diagram: 'tissue',
        },
        {
          id: 'thyroid-adrenal',
          title: 'Folículos tireoidianos e zonas da adrenal',
          paragraphs: [
            'A glândula tireoide é única ao armazenar precursores hormonais extracelularmente em folículos esféricos preenchidos por coloide eosinofílico rico em tireoglobulina, ladeados por células foliculares simples cúbicas e células parafoliculares C produtoras de calcitonina.',
            'A glândula adrenal possui córtex de origem mesodérmica dividido em três zonas concêntricas: glomerulosa (aldosterona), fasciculada (cortisol) e reticular (androgênios), cobrindo a medula cromafim secretora de catecolaminas.',
          ],
          takeaway: 'A tireoide armazena coloide em folículos e o córtex adrenal sintetiza mineralocorticoides, glicocorticoides e androgênios.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: na barreira de filtração glomerular, as células epiteliais do folheto visceral da cápsula de Bowman que emitem pedicelos interdigitados formando fendas de filtração são os ______.',
        blank: 'A célula epitelial com pedicelos da barreira renal é o ______.',
        options: [
          {
            id: 'podocyte-filtration',
            label: 'Podócitos',
            explanation: 'Correto: podócitos revestem a face externa dos capilares glomerulares e emitem pedicelos com diafragmas de nefrina.',
          },
          {
            id: 'mesangial-cell',
            label: 'Células mesangiais intraglomerulares',
            explanation: 'Incorreto: células mesangiais fornecem sustentação mecânica e fagocitose, não formando fendas epiteliais.',
          },
          {
            id: 'macula-densa-cell',
            label: 'Células da mácula densa',
            explanation: 'Incorreto: a mácula densa situa-se no túbulo contorcido distal para monitorar a concentração de cloreto de sódio.',
          },
          {
            id: 'chromaffin-cell',
            label: 'Células cromafins',
            explanation: 'Incorreto: células cromafins situam-se na medula adrenal sintetizando adrenalina e noradrenalina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How do visceral podocytes engineer an ultrafiltration sieve in the kidney while the thyroid uniquely caches hormones extracellularly?',
      title: 'Urinary and endocrine histology: renal corpuscle, urothelium, thyroid, and adrenal',
      description: 'Explore the tripartite glomerular filtration barrier, specialized transitional urothelium, and endocrine glandular zoning.',
      objective: 'Identify renal filtration barrier layers, umbrella cells of urothelium, and steroidogenic adrenal cortical zones.',
      stages: [
        {
          id: 'renal-corpuscle',
          title: 'Renal corpuscle and the glomerular filtration barrier',
          paragraphs: [
            'The renal corpuscle comprises the vascular glomerular capillary tuft surrounded by Bowman’s capsule (simple squamous parietal layer and visceral layer formed by interdigitating podocytes).',
            'Filtration occurs through three physical tiers: fenestrated capillary endothelia, a thick fused glomerular basement membrane (rich in negatively charged heparan sulfate), and filtration slit diaphragms spanned by nephrin between podocyte pedicels.',
          ],
          takeaway: 'Glomerular filtration relies on fenestrated endothelia, a polyanionic basement membrane, and podocyte slit diaphragms.',
          diagram: 'kidney',
        },
        {
          id: 'urothelium-transitional',
          title: 'Urothelium: distensible impermeable barrier',
          paragraphs: [
            'The excretory urinary tract (renal calyces, pelvis, ureters, and bladder) is lined by urothelium (transitional epithelium), engineered to withstand osmotic extremes without fluid absorption.',
            'Its superficial layer displays large umbrella cells reinforced by rigid apical uroplakin plaques hinged by foldable membranes, unfolding smoothly during bladder distension to shield deep layers from hypertonic urine.',
          ],
          takeaway: 'Urothelium protects underlying tissues against hypertonic urine via umbrella cells studded with uroplakin plaques.',
          diagram: 'tissue',
        },
        {
          id: 'thyroid-adrenal',
          title: 'Thyroid follicles and concentric adrenal cortical zones',
          paragraphs: [
            'The thyroid gland uniquely stores prohormones extracellularly within spherical follicles filled with eosinophilic thyroglobulin colloid, bounded by simple cuboidal follicular cells and calcitonin-secreting parafollicular C cells.',
            'The adrenal gland features an outer mesodermal cortex divided into three functional zones: zona glomerulosa (mineralocorticoids), zona fasciculata (glucocorticoids), and zona reticularis (androgens), surrounding the neuroendocrine chromaffin medulla.',
          ],
          takeaway: 'The thyroid stores colloid extracellularly; the adrenal cortex produces mineralo-, gluco-, and sex steroids in distinct zones.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: in the renal glomerular filtration barrier, the visceral epithelial cells of Bowman’s capsule that wrap interdigitating pedicels around capillaries are the ______.',
        blank: 'The pedicel-bearing epithelial filtration cell is the ______.',
        options: [
          {
            id: 'podocyte-filtration',
            label: 'Podocytes',
            explanation: 'Correct: podocytes form the visceral layer of Bowman’s capsule, creating filtration slit diaphragms.',
          },
          {
            id: 'mesangial-cell',
            label: 'Intraglomerular mesangial cells',
            explanation: 'Incorrect: mesangial cells provide mechanical scaffold support and matrix phagocytosis rather than filtration slits.',
          },
          {
            id: 'macula-densa-cell',
            label: 'Macula densa cells',
            explanation: 'Incorrect: the macula densa consists of specialized tubular cells in the thick ascending limb sensing tubular sodium chloride.',
          },
          {
            id: 'chromaffin-cell',
            label: 'Chromaffin cells',
            explanation: 'Incorrect: chromaffin cells reside within the adrenal medulla, producing catecholamines.',
          },
        ],
      },
    },
  },
});

export const histologySkinReproductiveLesson = lessonSchema.parse({
  id: 'histology-skin-reproductive',
  revision: 1,
  questionId: 'histology-skin-reproductive-q1',
  correctOptionId: 'sertoli-blood-testis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-ap2e-ch5-ch27-histology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/5-1-layers-of-the-skin',
      section: 'Chapter 5 & 27 · Integumentary and Reproductive Histology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Histologia',
      hook: 'Como as barreiras teciduais na pele protegem contra desidratação e no testículo impedem que o sistema imune ataque os espermatozoides?',
      title: 'Histologia da pele e sistema reprodutor: epiderme, derme, ovário e testículo',
      description: 'Estude as camadas epidérmicas queratinizadas e as especializações celulares da gametogênese ovariana e testicular.',
      objective: 'Identificar os estratos da epiderme e as funções das células de Sertoli e de Leydig no parênquima testicular.',
      stages: [
        {
          id: 'epidermis-strata',
          title: 'Estratos da epiderme e células não queratinocíticas',
          paragraphs: [
            'A epiderme é um epitélio estratificado pavimentoso queratinizado dividido em cinco estratos: basal (mitótico, ligado à lâmina basal), espinhoso (rico em desmossomos intercelulares), granuloso (com grânulos de querato-hialina), lúcido (exclusivo da pele espessa) e córneo (escamas anucleadas ricas em queratina e lipídios).',
            'Entre os queratinócitos residem melanócitos (que transferem melanina por secreção citócrina), células de Langerhans (células apresentadoras de antígenos dendríticas) e células táteis de Merkel mecanorreceptoras.',
          ],
          takeaway: 'A epiderme queratinizada forma barreira mecânica e hidrofóbica com queratinócitos, melanócitos e células de Langerhans.',
          diagram: 'tissue',
        },
        {
          id: 'ovarian-follicles',
          title: 'Folículos ovarianos e corpo lúteo',
          paragraphs: [
            'O córtex ovariano abriga folículos em diferentes estágios: primordiais (oócito envolto por monocamada de células foliculares pavimentosas), primários (células cúbicas da granulosa), secundários/antrais (com cavidade folicular com licor) e maduro de Graaf.',
            'Após a ovulação, as células da granulosa e da teca interna remanescentes se transformam em células luteínicas do corpo lúteo, secretando progesterona e estrogênio sob estímulo do LH.',
          ],
          takeaway: 'O ovário matura folículos com células da granulosa e da teca, formando o corpo lúteo produtor de progesterona.',
          diagram: 'embryo',
        },
        {
          id: 'testis-spermatogenesis',
          title: 'Túbulos seminíferos, células de Sertoli e de Leydig',
          paragraphs: [
            'O testículo é preenchido por túbulos seminíferos enovelados ladeados por células de Leydig intersticiais, que sintetizam testosterona sob estímulo do hormônio luteinizante (LH).',
            'As células de sustentação de Sertoli abraçam as células da linhagem espermatogênica em diferenciação, formam a barreira hematotesticular por junções oclusivas basolaterais estreitas (protegendo espermatócitos do ataque autoimune) e secretam proteína ligadora de androgênios (ABP).',
          ],
          takeaway: 'Células de Sertoli formam a barreira hematotesticular e nutrem espermatozoides; células de Leydig produzem testosterona.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual célula testicular estabelece a barreira hematotesticular através de junções oclusivas basolaterais para proteger gametas haploides contra autoanticorpos?',
        options: [
          {
            id: 'sertoli-blood-testis',
            label: 'Célula de Sertoli (célula sustentacular)',
            explanation: 'Correto: as células de Sertoli unem-se por junções de oclusão estreitas, criando compartimentos basal e adluminal protegidos.',
          },
          {
            id: 'leydig-interstitial',
            label: 'Célula intersticial de Leydig',
            explanation: 'Incorreto: as células de Leydig situam-se no estroma intersticial entre os túbulos, sintetizando testosterona.',
          },
          {
            id: 'primary-spermatocyte',
            label: 'Espermatócito primário em prófase meiótica',
            explanation: 'Incorreto: espermatócitos são células germinativas que realizam meiose, sem formar junções de barreira epitelial.',
          },
          {
            id: 'myoid-peritubular-cell',
            label: 'Célula mioide peritubular',
            explanation: 'Incorreto: células mioides envolvem externamente o túbulo seminífero para peristaltismo de expulsão espermática.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'How do specialized epithelial barriers defend the skin from desiccation while shielding maturing sperm from autoimmune destruction?',
      title: 'Skin and reproductive histology: epidermis, dermis, ovary, and testis',
      description: 'Master stratified epidermal keratinization alongside cellular adaptations of ovarian and testicular gametogenesis.',
      objective: 'Identify epidermal layers and contrast the supportive roles of Sertoli versus Leydig cells in the testis.',
      stages: [
        {
          id: 'epidermis-strata',
          title: 'Epidermal strata and immigrant non-keratinocytes',
          paragraphs: [
            'The epidermis is a keratinized stratified squamous epithelium organized into five ascending strata: basale (mitotically active stem layer), spinosum (prominent desmosomes), granulosum (keratohyalin granules), lucidum (thick skin only), and corneum (anucleate lipid-coated keratin squames).',
            'Scattered among keratinocytes are neural crest-derived melanocytes (transferring melanin via cytocrine secretion), dendritic antigen-presenting Langerhans cells, and tactile Merkel mechanoreceptors.',
          ],
          takeaway: 'Keratinized epidermis forms a water-impermeable mechanical barrier with melanocytes, Langerhans, and Merkel cells.',
          diagram: 'tissue',
        },
        {
          id: 'ovarian-follicles',
          title: 'Ovarian folliculogenesis and corpus luteum',
          paragraphs: [
            'The ovarian cortex houses progressive follicle cohorts: primordial (oocyte bounded by simple squamous follicle cells), primary (cuboidal granulosa layer), secondary/antral (follicular antrum filled with liquor folliculi), and mature Graafian follicles.',
            'Following ovulation under an LH surge, collapsed granulosa and theca interna cells undergo luteinization to form the temporary corpus luteum, secreting abundant progesterone and estrogens.',
          ],
          takeaway: 'Ovarian follicles mature through granulosa and theca proliferation, forming the progesterone-secreting corpus luteum.',
          diagram: 'embryo',
        },
        {
          id: 'testis-spermatogenesis',
          title: 'Seminiferous tubules, Sertoli, and Leydig cells',
          paragraphs: [
            'The testicular parenchyma is packed with convoluted seminiferous tubules surrounded by interstitial cells of Leydig, which synthesize testosterone under pituitary LH stimulation.',
            'Tall columnar Sertoli nurse cells envelope maturing spermatogenic lineages, creating the essential blood-testis barrier through basolateral tight junctions (zonulae occludentes) to insulate postmeiotic neo-antigens from autoimmune recognition.',
          ],
          takeaway: 'Sertoli cells establish the blood-testis barrier and nurse gametes, whereas Leydig cells produce testosterone.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which testicular cell establishes the blood-testis barrier via tight junctions to protect haploid germ cells from circulating autoantibodies?',
        options: [
          {
            id: 'sertoli-blood-testis',
            label: 'Sertoli (sustentacular) cell',
            explanation: 'Correct: Sertoli cell basolateral tight junctions separate basal and adluminal compartments, preventing immune attack against sperm antigens.',
          },
          {
            id: 'leydig-interstitial',
            label: 'Interstitial Leydig cell',
            explanation: 'Incorrect: Leydig cells reside outside seminiferous tubules within connective stroma, producing steroid testosterone.',
          },
          {
            id: 'primary-spermatocyte',
            label: 'Meiotic primary spermatocyte',
            explanation: 'Incorrect: spermatocytes are differentiating germ cells protected behind the blood-testis barrier.',
          },
          {
            id: 'myoid-peritubular-cell',
            label: 'Peritubular myoid contractile cell',
            explanation: 'Incorrect: myoid cells encircle the tubule periphery to generate gentle peristaltic contractions that transport immotile sperm.',
          },
        ],
      },
    },
  },
});
