import { lessonSchema } from '../src/contracts/learning';

export const anatomyJointsLesson = lessonSchema.parse({
  id: 'anatomy-joints',
  revision: 1,
  questionId: 'anatomy-joints-synovial',
  correctOptionId: 'synovial-fluid',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch9-joints',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/9-4-synovial-joints',
      section: 'Chapter 9 · Synovial Joints and Articular Cartilage',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Anatomia',
      hook: 'Como as superfícies ósseas deslizam livremente sem atrito e sem desgaste durante décadas de movimentação?',
      title: 'Articulações sinoviais: cápsula articular e cartilagem hialina',
      description: 'Explore a anatomia funcional das diartroses, a cartilagem articular e a produção de líquido sinovial.',
      objective: 'Identificar a cápsula articular, membrana sinovial, líquido sinovial e cartilagem articular hialina.',
      stages: [
        {
          id: 'joint-capsule',
          title: 'A cápsula articular fibrosa e a membrana sinovial',
          paragraphs: [
            'As articulações sinoviais (diartroses) são as mais móveis do corpo. São envolvidas por uma cápsula articular composta por uma camada fibrosa externa e uma membrana sinovial interna.',
            'A camada fibrosa é contínua com o periósteo e reforçada por ligamentos que limitam amplitudes excessivas de movimento, prevenindo luxações articulares.',
          ],
          takeaway: 'A cápsula articular possui camada fibrosa externa estabilizadora e membrana sinovial interna.',
          diagram: 'bone',
        },
        {
          id: 'cartilage-fluid',
          title: 'Cartilagem hialina e o líquido sinovial',
          paragraphs: [
            'As superfícies ósseas em contato são revestidas por cartilagem articular hialina lisa e elástica, desprovida de pericôndrio, vasos sanguíneos e nervos.',
            'A membrana sinovial ultrafiltra plasma e secreta ácido hialurônico e lubricina, formando o líquido sinovial viscoso que lubrifica as faces e nutre os condrócitos por difusão.',
          ],
          takeaway: 'O líquido sinovial lubrifica superfícies e nutre a cartilagem articular hialina avascular.',
          diagram: 'bone',
        },
        {
          id: 'joint-mobility',
          title: 'Classificação funcional e elementos de estabilização',
          paragraphs: [
            'Conforme o formato das superfícies, as sinoviais classificam-se em planas, gínglimos (dobradiça), trocóideas (pivô), condilares, selares e esferóideas (como o ombro e quadril).',
            'Estruturas adicionais como meniscos fibrocartilagíneos, lábios articulares e bolsas sinoviais (bursas) aumentam a congruência articular e amortecem impactos.',
          ],
          takeaway: 'Meniscos, lábios e bolsas aumentam o encaixe e amortecimento nas articulações sinoviais.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual componente da articulação sinovial é produzido pela membrana sinovial para lubrificar as superfícies e nutrir a cartilagem articular?',
        options: [
          {
            id: 'synovial-fluid',
            label: 'Líquido sinovial rico em ácido hialurônico',
            explanation: 'Correto: o líquido sinovial reduz o atrito articular a quase zero e difunde oxigênio e glicose para os condrócitos.',
          },
          {
            id: 'calcified-fusion',
            label: 'Placa óssea epifisária mineralizada contínua',
            explanation: 'Incorreto: a placa epifisária localiza-se na metáfase óssea para crescimento longitudinal e não produz lubrificação articular.',
          },
          {
            id: 'fibrous-suture',
            label: 'Ligamento sutural fibroso imobilizador',
            explanation: 'Incorreto: suturas são sinartroses fibrosas imóveis típicas dos ossos cranianos.',
          },
          {
            id: 'tendon-sheath-origin',
            label: 'Bainha perióstica calcificada rígida',
            explanation: 'Incorreto: o periósteo reveste a diáfise óssea externa e interrompe-se na superfície articular cartilaginosa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'How do articulating bone surfaces glide effortlessly without friction or destructive wear across decades of movement?',
      title: 'Synovial joints: articular capsule and hyaline cartilage',
      description: 'Explore the functional anatomy of diarthroses, articular cartilage mechanics, and synovial fluid production.',
      objective: 'Identify the fibrous capsule, synovial membrane, lubricating synovial fluid, and avascular hyaline cartilage.',
      stages: [
        {
          id: 'joint-capsule',
          title: 'Fibrous capsule and synovial membrane',
          paragraphs: [
            'Synovial joints (diarthroses) provide the greatest degree of mobility in the human body. They are encapsulated by an outer fibrous layer and an inner synovial membrane.',
            'The outer fibrous layer continues into periosteal collagen and is fortified by intrinsic and extrinsic ligaments to restrain excessive displacement.',
          ],
          takeaway: 'The joint capsule features a tough outer fibrous sleeve and an inner secretory synovial lining.',
          diagram: 'bone',
        },
        {
          id: 'cartilage-fluid',
          title: 'Hyaline cartilage and synovial fluid',
          paragraphs: [
            'Articulating bone ends are capped by glassy, smooth hyaline articular cartilage that lacks perichondrium, blood vessels, and pain fibers.',
            'Synoviocytes filter capillaries and secrete hyaluronic acid and lubricin, producing slippery synovial fluid that lubricates surfaces and nourishes chondrocytes.',
          ],
          takeaway: 'Synovial fluid reduces friction and delivers nutrients to avascular hyaline articular cartilage.',
          diagram: 'bone',
        },
        {
          id: 'joint-mobility',
          title: 'Functional classification and auxiliary stabilization',
          paragraphs: [
            'Morphological geometry categorizes synovial joints into plane, hinge (ginglymus), pivot (trochoid), condyloid, saddle, and ball-and-socket varieties.',
            'Accessory structures including fibrocartilaginous menisci, articular labra, and bursae enhance articular congruency and dissipate joint stress.',
          ],
          takeaway: 'Menisci, labra, and bursae improve articular fit and absorb load across moving joints.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which component of a synovial joint is secreted by the synovial membrane to lubricate articular surfaces and nourish cartilage?',
        options: [
          {
            id: 'synovial-fluid',
            label: 'Synovial fluid rich in hyaluronic acid',
            explanation: 'Correct: synovial fluid minimizes articular friction and diffuses vital nutrients into avascular chondrocytes.',
          },
          {
            id: 'calcified-fusion',
            label: 'Mineralized epiphyseal growth plate fusion',
            explanation: 'Incorrect: epiphyseal plates mediate longitudinal bone lengthening and do not lubricate articulating joints.',
          },
          {
            id: 'fibrous-suture',
            label: 'Fibrous immobilizing suture ligament',
            explanation: 'Incorrect: sutures are immovable synarthroses characteristic of the cranial vault.',
          },
          {
            id: 'tendon-sheath-origin',
            label: 'Rigid calcified periosteal sleeve',
            explanation: 'Incorrect: periosteum lines outer bone shafts but terminates at the articular cartilage margins.',
          },
        ],
      },
    },
  },
});

export const anatomyAbdomenLesson = lessonSchema.parse({
  id: 'anatomy-abdomen',
  revision: 1,
  questionId: 'anatomy-abdomen-portal',
  correctOptionId: 'portal-vein',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch23-abdomen',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system',
      section: 'Chapter 23 · The Peritoneal Cavity and Abdominal Organs',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Anatomia',
      hook: 'Por que o sangue drenado do estômago e intestinos passa obrigatoriamente pelo fígado antes de retornar ao coração?',
      title: 'Abdome e peritônio: órgãos cavitários e sistema porta hepático',
      description: 'Diferencie a disposição intraperitoneal da retroperitoneal e estude o trajeto venoso do sistema porta ao fígado.',
      objective: 'Distinguir órgãos intraperitoneais e retroperitoneais e identificar a formação da veia porta hepática.',
      stages: [
        {
          id: 'peritoneum-spaces',
          title: 'Peritônio parietal, visceral e mesentérios',
          paragraphs: [
            'O peritônio é uma extensa membrana serosa contínua. O peritônio parietal forra a parede abdominal interna, e o peritônio visceral envolve as vísceras móveis.',
            'Mesentérios e omentos são dobras peritoneais duplas que sustentam as alças intestinais e o estômago, veiculando vasos sanguíneos, linfáticos e nervos autônomos.',
          ],
          takeaway: 'O peritônio forma reflexões (mesentérios e omentos) que sustentam vísceras e conduzem seus vasos.',
          diagram: 'intestine',
        },
        {
          id: 'retroperitoneal-organs',
          title: 'Órgãos intraperitoneais versus retroperitoneais',
          paragraphs: [
            'Órgãos intraperitoneais são quase inteiramente revestidos por peritônio visceral e mantêm mobilidade dentro da cavidade (como estômago, jejuno, íleo e baço).',
            'Órgãos retroperitoneais situam-se posteriormente ao peritônio parietal posterior, sendo fixos na parede dorsal do abdome (como rins, ureteres, aorta, cava e a maior parte do duodeno e pâncreas).',
          ],
          takeaway: 'Órgãos intraperitoneais são móveis; estruturas retroperitoneais ficam fixadas atrás da lâmina parietal.',
          diagram: 'intestine',
        },
        {
          id: 'portal-system',
          title: 'O sistema porta hepático',
          paragraphs: [
            'Diferente da drenagem sistêmica direta, o sangue venoso de todo o trato gastrointestinal abdominal e do baço converge para o sistema porta antes de alcançar a circulação geral.',
            'A veia porta hepática é formada pela confluência da veia mesentérica superior com a veia esplênica (que recebe a veia mesentérica inferior), conduzindo nutrientes absorvidos e toxinas para processamento nos sinusoides hepáticos.',
          ],
          takeaway: 'A veia porta hepática une a mesentérica superior e a esplênica para levar o sangue gastrointestinal ao fígado.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual grande vaso venoso é formado pela confluência da veia mesentérica superior com a veia esplênica para drenar sangue do tubo digestivo ao fígado?',
        options: [
          {
            id: 'portal-vein',
            label: 'Veia porta hepática',
            explanation: 'Correto: a veia porta é formada atrás do colo do pâncreas pela união da mesentérica superior e esplênica.',
          },
          {
            id: 'inferior-vena-cava',
            label: 'Veia cava inferior',
            explanation: 'Incorreto: a veia cava inferior drena os membros inferiores e recebe as veias hepáticas saindo do fígado.',
          },
          {
            id: 'hepatic-artery',
            label: 'Artéria hepática própria',
            explanation: 'Incorreto: a artéria hepática fornece sangue oxigenado derivado do tronco celíaco, e não drenagem venosa.',
          },
          {
            id: 'renal-vein',
            label: 'Veia renal esquerda',
            explanation: 'Incorreto: a veia renal esquerda drena o rim e a gônada esquerda diretamente para a veia cava inferior.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'Why must venous blood draining from the stomach and intestines pass through the liver before returning to the heart?',
      title: 'Abdomen and peritoneum: visceral spaces and the hepatic portal system',
      description: 'Differentiate intraperitoneal from retroperitoneal organs and master the venous architecture of the portal system.',
      objective: 'Distinguish intraperitoneal and retroperitoneal structures and trace the formation of the hepatic portal vein.',
      stages: [
        {
          id: 'peritoneum-spaces',
          title: 'Parietal peritoneum, visceral peritoneum, and mesenteries',
          paragraphs: [
            'The peritoneum is a continuous, extensive serous membrane. Parietal peritoneum lines the abdominopelvic wall, while visceral peritoneum wraps mobile digestive organs.',
            'Mesenteries and omenta are double-layered peritoneal folds that suspend gut loops and provide conduits for neurovascular bundles and lymphatics.',
          ],
          takeaway: 'Double peritoneal folds (mesenteries and omenta) suspend viscera and conduct their neurovascular supply.',
          diagram: 'intestine',
        },
        {
          id: 'retroperitoneal-organs',
          title: 'Intraperitoneal versus retroperitoneal organs',
          paragraphs: [
            'Intraperitoneal organs are enveloped almost completely by visceral peritoneum and possess mobility (e.g., stomach, jejunum, ileum, and spleen).',
            'Retroperitoneal organs reside posterior to the parietal peritoneum against the dorsal abdominal wall (e.g., kidneys, ureters, abdominal aorta, IVC, and most of the duodenum and pancreas).',
          ],
          takeaway: 'Intraperitoneal organs remain suspended; retroperitoneal structures are anchored behind the parietal sheet.',
          diagram: 'intestine',
        },
        {
          id: 'portal-system',
          title: 'The hepatic portal venous system',
          paragraphs: [
            'Unlike systemic venous return, blood draining the abdominal alimentary canal and spleen travels through a specialized portal venous network before reaching the heart.',
            'The hepatic portal vein is formed by the confluence of the superior mesenteric vein and the splenic vein (which receives the inferior mesenteric vein), carrying absorbed nutrients directly to liver sinusoids.',
          ],
          takeaway: 'The hepatic portal vein forms from the superior mesenteric and splenic veins, routing gut blood to the liver.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which major venous trunk is formed by the union of the superior mesenteric vein and the splenic vein to convey gastrointestinal blood to the liver?',
        options: [
          {
            id: 'portal-vein',
            label: 'Hepatic portal vein',
            explanation: 'Correct: the hepatic portal vein is formed posterior to the pancreatic neck by the junction of the SMV and splenic vein.',
          },
          {
            id: 'inferior-vena-cava',
            label: 'Inferior vena cava',
            explanation: 'Incorrect: the IVC collects systemic venous drainage from the lower body and receives post-sinusoidal hepatic veins.',
          },
          {
            id: 'hepatic-artery',
            label: 'Proper hepatic artery',
            explanation: 'Incorrect: the hepatic artery is an arterial branch of the celiac trunk delivering oxygenated blood, not portal drainage.',
          },
          {
            id: 'renal-vein',
            label: 'Left renal vein',
            explanation: 'Incorrect: the left renal vein drains renal and left gonadal blood directly into the inferior vena cava.',
          },
        ],
      },
    },
  },
});

export const anatomyPelvisLesson = lessonSchema.parse({
  id: 'anatomy-pelvis',
  revision: 1,
  questionId: 'anatomy-pelvis-floor',
  correctOptionId: 'levator-ani',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-ap2e-ch11-pelvis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax',
      section: 'Chapter 11 · Muscles of the Pelvic Floor and Perineum',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Anatomia',
      hook: 'Qual estrutura muscular impede que a bexiga, o útero e o reto desabem pelo canal pélvico sob o peso da gravidade?',
      title: 'Pelve e períneo: anel ósseo, assoalho pélvico e vísceras',
      description: 'Conheça o diafragma da pelve, o músculo levantador do ânus e a sustentação das vísceras pélvicas.',
      objective: 'Identificar a anatomia do assoalho pélvico e o papel do músculo levantador do ânus na continência e sustentação.',
      stages: [
        {
          id: 'pelvic-girdle',
          title: 'O anel pélvico ósseo e ligamentos',
          paragraphs: [
            'O cíngulo do membro inferior é formado pelos ossos do quadril (ílio, ísquio e pube) articulados anteriormente na sínfise púbica e posteriormente com o sacro nas articulações sacroilíacas.',
            'Os ligamentos sacrotuberal e sacroespinal transformam as incisuras isquiáticas maior e menor em forames, estabilizando o sacro contra a inclinação do peso corporal superior.',
          ],
          takeaway: 'O anel pélvico articula sacro e ossos do quadril, formando uma bacia rígida de sustentação.',
          diagram: 'bone',
        },
        {
          id: 'pelvic-diaphragm',
          title: 'Diafragma da pelve: o músculo levantador do ânus',
          paragraphs: [
            'O assoalho pélvico é fechado pelo diafragma da pelve, composto primariamente pelo músculo levantador do ânus (subdividido em puborretal, pubococcígeo e iliococcígeo) e pelo músculo coccígeo.',
            'O músculo puborretal forma uma alça em "U" ao redor da junção anorretal, mantendo a angulação anorretal necessária para a continência fecal de repouso.',
          ],
          takeaway: 'O levantador do ânus forma o assoalho muscular que sustenta vísceras e garante continência fecal e urinária.',
          diagram: 'bone',
        },
        {
          id: 'pelvic-viscera',
          title: 'Vísceras pélvicas e períneo',
          paragraphs: [
            'A cavidade pélvica abriga as porções terminais dos sistemas urinário (bexiga e uretra), digestivo (reto e canal anal) e reprodutor (útero, tubas e vagina ou próstata e ductos deferentes).',
            'Inferiormente ao diafragma da pelve situa-se o períneo, dividido em trígono urogenital anterior (com membrana do períneo) e trígono anal posterior.',
          ],
          takeaway: 'O períneo fica abaixo do diafragma pélvico e divide-se em trígono urogenital e anal.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o principal músculo do diafragma da pelve responsável por sustentar as vísceras abdominopélvicas e assegurar a continência esfincteriana?',
        options: [
          {
            id: 'levator-ani',
            label: 'Músculo levantador do ânus',
            explanation: 'Correto: o levantador do ânus forma a principal cúpula muscular do diafragma da pelve e suspende órgãos pélvicos.',
          },
          {
            id: 'gluteus-maximus',
            label: 'Músculo glúteo máximo',
            explanation: 'Incorreto: o glúteo máximo é o principal extensor e rotador lateral da articulação do quadril.',
          },
          {
            id: 'psoas-major',
            label: 'Músculo psoas maior',
            explanation: 'Incorreto: o psoas maior origina-se na coluna lombar e atua como forte flexor da coxa no quadril.',
          },
          {
            id: 'rectus-abdominis',
            label: 'Músculo reto do abdome',
            explanation: 'Incorreto: o reto do abdome integra a parede abdominal anterior para flexionar o tronco.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'What dynamic muscular hammock prevents the bladder, rectum, and uterus from prolapsing through the pelvic canal under downward intra-abdominal pressure?',
      title: 'Pelvis and perineum: bony girdle, pelvic floor, and viscera',
      description: 'Explore the functional anatomy of the pelvic diaphragm, the levator ani muscle, and pelvic organ support.',
      objective: 'Identify pelvic floor anatomy and recognize the levator ani muscle in pelvic viscera support and continence.',
      stages: [
        {
          id: 'pelvic-girdle',
          title: 'The bony pelvic girdle and sacroiliac ligaments',
          paragraphs: [
            'The pelvic girdle comprises the paired hip bones (ilium, ischium, and pubis) uniting anteriorly at the pubic symphysis and posteriorly with the sacrum at sacroiliac joints.',
            'The sacrotuberous and sacrospinous ligaments convert greater and lesser sciatic notches into foramina, anchoring the sacrum against rotational tilting forces.',
          ],
          takeaway: 'The pelvic girdle unites the sacrum and hip bones into a robust protective ring.',
          diagram: 'bone',
        },
        {
          id: 'pelvic-diaphragm',
          title: 'The pelvic diaphragm: the levator ani muscle',
          paragraphs: [
            'The pelvic floor is closed dynamically by the pelvic diaphragm, principally constituted by the levator ani (puborectalis, pubococcygeus, and iliococcygeus parts) and the coccygeus muscle.',
            'The puborectalis forms a muscular sling around the anorectal junction, maintaining the anorectal angle essential for passive fecal continence.',
          ],
          takeaway: 'The levator ani muscle forms the muscular hammock that supports pelvic organs and ensures continence.',
          diagram: 'bone',
        },
        {
          id: 'pelvic-viscera',
          title: 'Pelvic viscera and the perineum',
          paragraphs: [
            'The true pelvic basin protects the terminal urinary tract (urinary bladder and urethra), digestive tract (rectum and anal canal), and internal genital organs.',
            'Inferior to the pelvic diaphragm lies the diamond-shaped perineum, subdivided by an imaginary ischial line into an anterior urogenital triangle and a posterior anal triangle.',
          ],
          takeaway: 'The perineum lies beneath the pelvic diaphragm and divides into urogenital and anal triangles.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which primary muscle of the pelvic diaphragm forms the muscular hammock supporting abdominopelvic viscera and maintaining continence?',
        options: [
          {
            id: 'levator-ani',
            label: 'Levator ani muscle',
            explanation: 'Correct: the levator ani forms the main muscular floor supporting pelvic viscera and securing sphincter continence.',
          },
          {
            id: 'gluteus-maximus',
            label: 'Gluteus maximus muscle',
            explanation: 'Incorrect: the gluteus maximus is a superficial extensor and lateral rotator of the hip joint.',
          },
          {
            id: 'psoas-major',
            label: 'Psoas major muscle',
            explanation: 'Incorrect: the psoas major originates along the lumbar spine and acts as a primary hip flexor.',
          },
          {
            id: 'rectus-abdominis',
            label: 'Rectus abdominis muscle',
            explanation: 'Incorrect: the rectus abdominis belongs to the anterior abdominal wall to flex the lumbar spine.',
          },
        ],
      },
    },
  },
});
