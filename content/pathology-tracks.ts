import { lessonSchema } from '../src/contracts/learning';

export const pathologyCellAdaptationLesson = lessonSchema.parse({
  id: 'pathology-cell-adaptation',
  revision: 1,
  questionId: 'pathology-adaptation-metaplasia',
  correctOptionId: 'metaplasia-phenotype-switch',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch4-tissues',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-1-types-of-tissues',
      section: 'Chapter 4 · Tissue Cellular Responses and Adaptation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Como as células sobrevivem a sobrecargas mecânicas e agressões crônicas sem entrar em necrose?',
      title: 'Adaptações celulares ao estresse: hipertrofia, hiperplasia, atrofia e metaplasia',
      description: 'Entenda os mecanismos fisiopatológicos das quatro respostas adaptativas fundamentais das células frente a alterações de demanda ou estresse crônico.',
      objective: 'Diferenciar os mecanismos e exemplos clínicos de hipertrofia, hiperplasia, atrofia e metaplasia.',
      stages: [
        {
          id: 'hypertrophy-vs-hyperplasia',
          title: 'Hipertrofia versus hiperplasia',
          paragraphs: [
            'A hipertrofia consiste no aumento do tamanho das células e de suas proteínas estruturais em resposta à sobrecarga mecânica ou estímulos de fatores de crescimento (ex.: miocárdio na hipertensão arterial ou músculo esquelético na musculação).',
            'A hiperplasia consiste no aumento do número de células em resposta a estímulos hormonais ou compensatórios (ex.: hiperplasia endometrial por estrogênio ou regeneração hepática parcial), ocorrendo somente em tecidos com capacidade proliferativa.',
          ],
          takeaway: 'Hipertrofia aumenta o tamanho das células; hiperplasia aumenta a quantidade de células.',
          diagram: 'tissue',
        },
        {
          id: 'atrophy-mechanisms',
          title: 'Atrofia: redução de volume e organelas',
          paragraphs: [
            'A atrofia é a redução do tamanho e do número de organelas celulares provocada por desuso, desnervação, isquemia crônica, desnutrição ou perda de estímulo endócrino.',
            'Ocorre degradação proteica acelerada pela via ubiquitina-proteassomo, frequentemente acompanhada de autofagia, na qual a célula consome seus próprios componentes para sobreviver à escassez de recursos.',
          ],
          takeaway: 'A atrofia resulta da degradação proteica via proteassomo e autofagia perante a menor demanda ou aporte.',
          diagram: 'tissue',
        },
        {
          id: 'metaplasia-reprogramming',
          title: 'Metaplasia: reprogramação fenotípica adaptativa',
          paragraphs: [
            'A metaplasia é uma alteração reversível na qual um tipo celular diferenciado (epitelial ou mesenquimal) é substituído por outro tipo mais resistente à agressão crônica.',
            'Exemplos clássicos incluem a substituição do epitélio respiratório cilíndrico ciliado por epitélio pavimentoso estratificado em tabagistas, e o esôfago de Barrett (substituição por epitélio colunar com células caliciformes por refluxo ácido crônico).',
          ],
          takeaway: 'A metaplasia é a troca reversível de um tipo celular diferenciado por outro mais resistente à agressão crônica.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual processo adaptativo celular é definido como a substituição reversível de um tipo celular adulto por outro mais apto a suportar um estresse crônico persistente?',
        options: [
          {
            id: 'metaplasia-phenotype-switch',
            label: 'Metaplasia, decorrente da reprogramação de células-tronco teciduais para resistir ao microambiente hostil',
            explanation: 'Correto: a metaplasia envolve a diferenciação reprogramada de células-tronco adultas para uma linhagem que tolera melhor a agressão contínua (ex.: epitélio escamoso no brônquio de tabagistas).',
          },
          {
            id: 'dysplasia-irreversible',
            label: 'Displasia acentuada com desarranjo arquitetural irreversível e atipias nucleares neoplásicas',
            explanation: 'Incorreto: a displasia é uma proliferação clonal desordenada com perda de maturação e potencial pré-maligno, não uma simples adaptação fisiológica reversível.',
          },
          {
            id: 'hypertrophy-protein-synthesis',
            label: 'Hipertrofia concêntrica associada a síntese amplificada de miofilamentos contráteis',
            explanation: 'Incorreto: a hipertrofia aumenta as dimensões celulares sem alterar a linhagem do tipo celular.',
          },
          {
            id: 'aplasia-embryonic',
            label: 'Aplasia tecidual por falha completa do desenvolvimento embriogênico do órgão',
            explanation: 'Incorreto: a aplasia é uma malformação congênita da formação do órgão, não uma resposta celular adaptativa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'How do tissues survive sustained mechanical strain or chronic acid exposure without succumbing to necrosis?',
      title: 'Cellular adaptations to stress: hypertrophy, hyperplasia, atrophy, and metaplasia',
      description: 'Understand the pathophysiology of four fundamental adaptive responses of cells faced with altered workloads or chronic stressors.',
      objective: 'Differentiate the mechanisms and clinical prototypes of hypertrophy, hyperplasia, atrophy, and metaplasia.',
      stages: [
        {
          id: 'hypertrophy-vs-hyperplasia',
          title: 'Hypertrophy versus hyperplasia',
          paragraphs: [
            'Hypertrophy represents an increase in the size of cells and functional organelles in response to mechanical stretch or growth factors (e.g., myocardial hypertrophy in hypertension or skeletal muscle during weightlifting).',
            'Hyperplasia represents an increase in cell number driven by hormonal or compensatory stimulation (e.g., endometrial hyperplasia under estrogen or compensatory liver regeneration), occurring exclusively in tissues capable of division.',
          ],
          takeaway: 'Hypertrophy expands cell size; hyperplasia expands cell count.',
          diagram: 'tissue',
        },
        {
          id: 'atrophy-mechanisms',
          title: 'Atrophy: loss of volume and organelle mass',
          paragraphs: [
            'Atrophy is the shrinkage in cell size and mass caused by disuse, denervation, reduced perfusion, nutrient starvation, or lost endocrine trophic drive.',
            'It proceeds via accelerated protein catabolism through the ubiquitin-proteasome pathway, coupled with autophagy as the starving cell metabolizes internal components to survive.',
          ],
          takeaway: 'Atrophy stems from ubiquitin-proteasome proteolysis and autophagy under reduced demand or nutrient deprivation.',
          diagram: 'tissue',
        },
        {
          id: 'metaplasia-reprogramming',
          title: 'Metaplasia: adaptive phenotypic reprogramming',
          paragraphs: [
            'Metaplasia is a reversible transition in which one adult differentiated cell phenotype (epithelial or mesenchymal) is replaced by another better suited to withstand chronic stress.',
            'Hallmark examples include bronchorespiratory columnar epithelium shifting to stratified squamous epithelium in smokers, and Barrett esophagus (squamous changing to columnar with goblet cells) caused by gastric reflux.',
          ],
          takeaway: 'Metaplasia is the reversible change of one differentiated cell type to another better adapted to chronic injury.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which cellular adaptive process is defined as the reversible replacement of one adult differentiated cell type by another better equipped to tolerate chronic injury?',
        options: [
          {
            id: 'metaplasia-phenotype-switch',
            label: 'Metaplasia, driven by stem cell reprogramming to survive an unfavorable microenvironment',
            explanation: 'Correct: metaplasia involves the redirected differentiation of tissue stem cells into a lineage more resistant to persistent noxious insult (e.g., squamous metaplasia in smoker airways).',
          },
          {
            id: 'dysplasia-irreversible',
            label: 'Severe dysplasia featuring irreversible architectural disruption and premalignant nuclear atypia',
            explanation: 'Incorrect: dysplasia denotes disordered cell growth and maturation with loss of polarity, representing a neoplastic precursor rather than a purely benign adaptive change.',
          },
          {
            id: 'hypertrophy-protein-synthesis',
            label: 'Concentric hypertrophy fueled by amplified myofilament synthesis and organelle accretion',
            explanation: 'Incorrect: hypertrophy enlarges existing cell volumes without altering the differentiated cell lineage.',
          },
          {
            id: 'aplasia-embryonic',
            label: 'Tissue aplasia resulting from developmental failure of organogenesis during embryonic gestation',
            explanation: 'Incorrect: aplasia represents an embryonic developmental defect, not a post-natal cellular adaptation to stress.',
          },
        ],
      },
    },
  },
});

export const pathologyNecrosisLesson = lessonSchema.parse({
  id: 'pathology-necrosis',
  revision: 1,
  questionId: 'pathology-necrosis-coagulative',
  correctOptionId: 'coagulative-ischemia-architecture',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch4-necrosis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-tissue-injury-and-aging',
      section: 'Chapter 4 · Tissue Injury and Necrosis Patterns',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Por que o coração infartado preserva o formato de suas células por dias, enquanto o cérebro infartado vira líquido viscoso?',
      title: 'Lesão celular irreversível e padrões de necrose',
      description: 'Explore os diferentes padrões morfológicos de necrose tecidual: coagulativa, liquefativa, caseosa e gordurosa.',
      objective: 'Correlacionar os padrões morfológicos de necrose (coagulativa, liquefativa e caseosa) com suas causas etiológicas características.',
      stages: [
        {
          id: 'coagulative-necrosis-pattern',
          title: 'Necrose de coagulação: preservação arquitetural temporária',
          paragraphs: [
            'A necrose de coagulação é o padrão clássico da isquemia em todos os órgãos sólidos (coração, rim, baço), com exceção notável do sistema nervoso central.',
            'A isquemia grave induz acidose que desnatura tanto as proteínas estruturais quanto as enzimas catalíticas intracelulares, impedindo a lise celular imediata e criando contornos de "células-fantasma" desprovidas de núcleo.',
          ],
          takeaway: 'A necrose coagulativa decorre de isquemia em órgãos sólidos, preservando temporariamente o contorno tecidual básico.',
          diagram: 'inflammation',
        },
        {
          id: 'liquefactive-necrosis-pattern',
          title: 'Necrose de liquefação: digestão enzimática rápida',
          paragraphs: [
            'A necrose de liquefação é marcada pela digestão enzimática completa e veloz das células mortas, transformando o tecido lesado em uma massa líquida pastosa.',
            'É o padrão característico dos infartos isquêmicos do encéfalo (rico em lipídios e com alta atividade de enzimas hidrolíticas microgliais) e de infecções bacterianas ou fúngicas piogênicas agudas com formação de pus (abscessos).',
          ],
          takeaway: 'A necrose liquefativa transforma o tecido em líquido viscoso, típica de infartos cerebrais e abscessos bacterianos.',
          diagram: 'inflammation',
        },
        {
          id: 'caseous-fat-necrosis-pattern',
          title: 'Necrose caseosa e gordurosa',
          paragraphs: [
            'A necrose caseosa é o aspecto característico da tuberculose e algumas micoses profundas: macroscopicamente assemelha-se a "queijo branco friável", consistindo em detritos granulares acelulares circundados por um granuloma com células gigantes.',
            'A necrose gordurosa (enzimática) ocorre na pancreatite aguda, na qual lipases ativadas liberadas no peritônio quebram triglicerídeos em ácidos graxos livres que se combinam com cálcio, formando depósitos opacos de saponificação (sabões de cálcio).',
          ],
          takeaway: 'Necrose caseosa é típica da tuberculose (granuloma); necrose gordurosa decorre da liberação de lipases pancreáticas.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual padrão morfológico de necrose é caracterizado pela preservação transitória do arcabouço estrutural do tecido ("células-fantasma") após infarto isquêmico em órgãos sólidos?',
        options: [
          {
            id: 'coagulative-ischemia-architecture',
            label: 'Necrose coagulativa, decorrente da desnaturação simultânea de proteínas estruturais e enzimas líticas pela acidose tecidual',
            explanation: 'Correto: a necrose coagulativa conserva a arquitetura básica por vários dias porque as próprias enzimas hidrolíticas foram desnaturadas pela isquemia aguda.',
          },
          {
            id: 'liquefactive-cns',
            label: 'Necrose liquefativa, na qual neutrófilos e macrófagos digerem o tecido formando líquido purulento imediato',
            explanation: 'Incorreto: a necrose liquefativa liquefaz o tecido rapidamente, destruindo qualquer arquitetura estrutural residual.',
          },
          {
            id: 'caseous-granuloma',
            label: 'Necrose caseosa, definida pela destruição de lipídeos adiposos e saponificação calcárea focal',
            explanation: 'Incorreto: a saponificação de gordura caracteriza a esteatonecrose (necrose gordurosa), enquanto a necrose caseosa forma restos acelulares friáveis na tuberculose.',
          },
          {
            id: 'fibrinoid-vessels',
            label: 'Necrose fibrinoide, originada pelo depósito de complexos antígeno-anticorpo em paredes de vasos',
            explanation: 'Incorreto: a necrose fibrinoide é típica de vasculites imunomediadas e hipertensão maligna em paredes vasculares.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'Why does an infarcted heart retain its microscopic cellular outlines for days, while an ischemic brain rapidly turns to soup?',
      title: 'Irreversible cell injury and morphologic necrosis patterns',
      description: 'Explore the major morphological patterns of tissue necrosis: coagulative, liquefactive, caseous, and fat necrosis.',
      objective: 'Correlate morphological patterns of necrosis (coagulative, liquefactive, and caseous) with their characteristic clinical etiologies.',
      stages: [
        {
          id: 'coagulative-necrosis-pattern',
          title: 'Coagulative necrosis: temporary architectural preservation',
          paragraphs: [
            'Coagulative necrosis is the default signature of ischemic infarction across all solid parenchymal organs (heart, kidney, spleen), with the singular exception of the brain.',
            'Severe ischemia induces profound acidosis that denatures both structural proteins and intracellular autolytic enzymes, freezing cellular outlines into anuclear "ghost cells" for days.',
          ],
          takeaway: 'Coagulative necrosis follows solid-organ ischemia, preserving tissue architecture temporarily.',
          diagram: 'inflammation',
        },
        {
          id: 'liquefactive-necrosis-pattern',
          title: 'Liquefactive necrosis: rapid enzymatic dissolution',
          paragraphs: [
            'Liquefactive necrosis is characterized by rapid, complete hydrolytic digestion of dead cells, transforming the tissue into a viscous, fluid-filled cystic cavity.',
            'It is the definitive pattern of hypoxic-ischemic stroke in the lipid-dense central nervous system and of acute pyogenic bacterial or fungal infections producing pus-filled abscesses.',
          ],
          takeaway: 'Liquefactive necrosis turns tissue into viscous liquid, typical of cerebral infarcts and bacterial abscesses.',
          diagram: 'inflammation',
        },
        {
          id: 'caseous-fat-necrosis-pattern',
          title: 'Caseous and enzymatic fat necrosis',
          paragraphs: [
            'Caseous necrosis is the hallmark of tuberculous granulomas: gross examination reveals friable, cheese-like debris consisting of structureless, eosinophilic amorphous remnants surrounded by histiocytes.',
            'Fat (enzymatic) necrosis arises during acute pancreatitis: escaped activated pancreatic lipases split retroperitoneal triglycerides into free fatty acids that bind calcium to form chalky saponification plaques.',
          ],
          takeaway: 'Caseous necrosis is distinctive for tuberculosis; fat necrosis stems from activated pancreatic lipase saponification.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which morphologic necrosis pattern is distinguished by transient preservation of microscopic tissue architecture ("ghost cells") following solid-organ ischemic infarction?',
        options: [
          {
            id: 'coagulative-ischemia-architecture',
            label: 'Coagulative necrosis, produced by the simultaneous denaturation of structural proteins and catalytic enzymes under ischemic acidosis',
            explanation: 'Correct: in coagulative necrosis, autolytic enzymes are inactivated alongside structural proteins, preserving ghost-like cellular outlines for several days.',
          },
          {
            id: 'liquefactive-cns',
            label: 'Liquefactive necrosis, wherein neutrophils and microglial hydrolases rapidly melt the tissue into a viscous soup',
            explanation: 'Incorrect: liquefactive necrosis digests dead tissue rapidly, obliterating any architectural outline.',
          },
          {
            id: 'caseous-granuloma',
            label: 'Caseous necrosis, characterized by focal lipid cleavage and gross chalky calcium soap formation',
            explanation: 'Incorrect: calcium soap formation identifies enzymatic fat necrosis, while caseous necrosis forms friable tuberculous cheesy debris.',
          },
          {
            id: 'fibrinoid-vessels',
            label: 'Fibrinoid necrosis, driven by immune complex deposition leaking bright pink fibrin within small arterial walls',
            explanation: 'Incorrect: fibrinoid necrosis is an immune-mediated or malignant hypertensive lesion confined to vessel walls.',
          },
        ],
      },
    },
  },
});

export const pathologyHemodynamicsLesson = lessonSchema.parse({
  id: 'pathology-hemodynamics',
  revision: 1,
  questionId: 'pathology-hemodynamics-virchow',
  correctOptionId: 'virchow-triad-elements',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch20-hemodynamics',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-capillary-exchange',
      section: 'Chapter 20 · Capillary Dynamics and Hemodynamic Disturbances',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Quais forças desequilibram a microcirculação para gerar inchaço, coágulos em veias profundas ou colapso circulatório fatal?',
      title: 'Distúrbios hemodinâmicos: edema, trombose, embolia e choque',
      description: 'Explore a fisiopatologia do edema pelas forças de Starling, a clássica tríade de Virchow na gênese da trombose, tromboembolismo e choque.',
      objective: 'Identificar as forças que geram edema, os três pilares da Tríade de Virchow na trombose e as consequências sistêmicas da embolia e choque.',
      stages: [
        {
          id: 'edema-starling-forces',
          title: 'As forças de Starling e a gênese do edema',
          paragraphs: [
            'O acúmulo patológico de líquido no interstício decorre do desequilíbrio das forças de Starling nos capilares sanguíneos.',
            'As causas fundamentais incluem o aumento da pressão hidrostática intravascular (como na insuficiência cardíaca congestiva), a queda da pressão oncótica plasmática por hipoalbuminemia (cirrose ou síndrome nefrótica), a obstrução linfática ou o aumento da permeabilidade endotelial inflamatória.',
          ],
          takeaway: 'O edema surge por elevação da pressão hidrostática, redução oncótica plasmática ou drenagem linfática deficiente.',
          diagram: 'inflammation',
        },
        {
          id: 'virchow-triad-thrombosis',
          title: 'A Tríade de Virchow e a trombose',
          paragraphs: [
            'A trombose consiste na formação de uma massa hemostática sólida no interior de vasos intactos, predisposta por três fatores clássicos (Tríade de Virchow).',
            'Os três pilares são: 1) lesão endotelial (fator mais determinante), 2) alteração do fluxo sanguíneo (estase venosa por imobilização ou turbulência em aneurismas) e 3) hipercoagulabilidade do sangue (fatores genéticos como Fator V de Leiden ou estados adquiridos como câncer e anticoncepcionais).',
          ],
          takeaway: 'A Tríade de Virchow compreende lesão endotelial, estase/turbulência e hipercoagulabilidade.',
          diagram: 'inflammation',
        },
        {
          id: 'embolism-and-shock',
          title: 'Embolia e estados de choque',
          paragraphs: [
            'Um êmbolo é uma massa intravascular sólida, líquida ou gasosa transportada pelo sangue até ocluir um vaso distante — como trombos de veias profundas das pernas que causam tromboembolismo pulmonar (TEP).',
            'O choque representa a falência circulatória aguda com hipoperfusão tecidual e hipóxia celular sistêmica, classificado em hipovolêmico (perda sanguínea ou hídrica), cardiogênico (falência de bomba), distributivo/séptico (vasodilatação periférica extrema) e obstrutivo.',
          ],
          takeaway: 'A embolia oclui leitos vasculares à distância; o choque resulta em hipoperfusão celular generalizada.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais são os três componentes patogênicos clássicos da Tríade de Virchow que precipitam a trombose intravascular?',
        options: [
          {
            id: 'virchow-triad-elements',
            label: 'Lesão endotelial, alteração do fluxo sanguíneo (estase ou turbulência) e hipercoagulabilidade sanguínea',
            explanation: 'Correto: a clássica tríade descrita por Rudolf Virchow engloba a integridade vascular (endotélio), a dinâmica reológica (fluxo/estase) e o equilíbrio hemostático (coagulabilidade).',
          },
          {
            id: 'vasodilation-leukopenia-fever',
            label: 'Vasodilatação esplâncnica, leucopenia acentuada e febre persistente mediada por citocinas',
            explanation: 'Incorreto: esses são sinais sistêmicos de quadros sépticos ou inflamatórios, não componentes da tríade trombogênica.',
          },
          {
            id: 'hypercalcemia-uremia-stasis',
            label: 'Hipercalcemia grave, azotemia osmótica e proliferação intimal fibroblástica',
            explanation: 'Incorreto: distúrbios eletrolíticos e uremia não definem os pilares da tríade de Virchow.',
          },
          {
            id: 'thrombocytopenia-acidosis-edema',
            label: 'Plaquetopenia periférica, acidose metabólica grave e transudação alveolar',
            explanation: 'Incorreto: a trombocitopenia na verdade predispõe ao sangramento, não à formação de trombos intravascular.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'What pathophysiologic breakdowns disrupt microvessels to produce swelling, deep vein clots, or catastrophic circulatory collapse?',
      title: 'Hemodynamic disorders: edema, thrombosis, embolism, and shock',
      description: 'Explore the Starling forces governing interstitial edema, Virchow’s triad in thrombogenesis, thromboembolism, and shock.',
      objective: 'Identify the forces driving edema, Virchow’s triad in intravascular thrombosis, and systemic sequelae of embolism and shock.',
      stages: [
        {
          id: 'edema-starling-forces',
          title: 'Starling forces and edema generation',
          paragraphs: [
            'Pathological accumulation of fluid in tissue interstitium results from imbalances across capillary walls dictated by Starling forces.',
            'Primary drivers include elevated capillary hydrostatic pressure (e.g., congestive heart failure), diminished plasma oncotic pressure from hypoalbuminemia (cirrhosis or nephrotic syndrome), lymphatic blockage, or inflammatory endothelial leak.',
          ],
          takeaway: 'Edema is driven by increased hydrostatic pressure, diminished oncotic suction, or impaired lymphatic return.',
          diagram: 'inflammation',
        },
        {
          id: 'virchow-triad-thrombosis',
          title: 'Virchow’s triad and thrombosis',
          paragraphs: [
            'Thrombosis represents inappropriate formation of an intravascular solid blood clot within uninjured vessels, governed by Virchow’s triad.',
            'The three pillars are: 1) endothelial injury (the single most potent trigger), 2) abnormal blood flow (stasis from bed rest or turbulence at bifurcations), and 3) hypercoagulability (inherited mutations like Factor V Leiden or acquired states like malignancy and oral contraceptives).',
          ],
          takeaway: 'Virchow’s triad encompasses endothelial injury, stasis/turbulence, and systemic hypercoagulability.',
          diagram: 'inflammation',
        },
        {
          id: 'embolism-and-shock',
          title: 'Embolism and systemic shock states',
          paragraphs: [
            'An embolus is a detached intravascular solid, liquid, or gaseous mass carried by the circulation to lodge in and obstruct a distant vessel — such as deep leg vein thrombi causing pulmonary thromboembolism.',
            'Shock represents acute global circulatory failure leading to systemic tissue hypoperfusion and cellular hypoxia, categorized into hypovolemic (fluid/blood loss), cardiogenic (pump failure), distributive/septic (widespread vasodilation), and obstructive shock.',
          ],
          takeaway: 'Emboli lodge distally; shock is systemic circulatory collapse causing profound cellular hypoxia.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which three pathogenic components comprise Virchow’s classic triad predisposing to intravascular thrombus formation?',
        options: [
          {
            id: 'virchow-triad-elements',
            label: 'Endothelial injury, alterations in blood flow (stasis or turbulence), and blood hypercoagulability',
            explanation: 'Correct: Rudolf Virchow’s classic triad encompasses endothelial integrity, fluid hemodynamics (stasis/turbulence), and the coagulation balance.',
          },
          {
            id: 'vasodilation-leukopenia-fever',
            label: 'Splanchnic vasodilation, profound leukopenia, and pyrogen-mediated core fever',
            explanation: 'Incorrect: these reflect septic or systemic inflammatory responses rather than the thrombogenic triad.',
          },
          {
            id: 'hypercalcemia-uremia-stasis',
            label: 'Severe hypercalcemia, osmotic azotemia, and intimal fibroblastic proliferation',
            explanation: 'Incorrect: electrolyte disturbances and uremia are metabolic complications, not the components of Virchow’s triad.',
          },
          {
            id: 'thrombocytopenia-acidosis-edema',
            label: 'Peripheral thrombocytopenia, systemic lactic acidosis, and alveolar transudation',
            explanation: 'Incorrect: thrombocytopenia promotes hemorrhagic diathesis rather than intravascular thrombosis.',
          },
        ],
      },
    },
  },
});
