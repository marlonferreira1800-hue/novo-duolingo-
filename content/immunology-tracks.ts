import { lessonSchema } from '../src/contracts/learning';

export const immunologyMhcTcellsLesson = lessonSchema.parse({
  id: 'immunology-mhc-tcells',
  revision: 1,
  questionId: 'immunology-mhc-classes',
  correctOptionId: 'mhc-i-cd8-mhc-ii-cd4',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch16-mhc',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/16-2',
      section: 'Chapter 16 · Adaptive Immunity: Major Histocompatibility Complexes and Antigen-Presenting Cells',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Imunologia',
      hook: 'Como o sistema imune descobre se um vírus está escondido dentro de uma célula ou circulando no líquido tecidual?',
      title: 'Apresentação de antígenos: MHC classe I e MHC classe II',
      description: 'Diferencie a via de apresentação endógena do MHC I para T CD8+ da via exógena do MHC II para T CD4+.',
      objective: 'Comparar a expressão tecidual, a origem antigênica e a especificidade de linfócitos T para MHC classe I e MHC classe II.',
      stages: [
        {
          id: 'antigen-presentation-intro',
          title: 'Reconhecimento restrito pelo MHC',
          paragraphs: [
            'Linfócitos T não conseguem reconhecer antígenos solúveis na sua forma nativa. Eles necessitam de moléculas do Complexo Principal de Histocompatibilidade (MHC) que exibam fragmentos peptídicos na membrana celular.',
            'Essa restrição por MHC assegura que as células T interajam apenas com células que exibem alertas antigênicos específicos.',
          ],
          takeaway: 'Células T só reconhecem peptídeos processados e ancorados a moléculas de MHC.',
          diagram: 'immune',
        },
        {
          id: 'mhc-class-i-pathway',
          title: 'MHC classe I e linfócitos T CD8+ citotóxicos',
          paragraphs: [
            'O MHC classe I está expresso em todas as células nucleadas do corpo e apresenta antígenos endógenos (como proteínas virais ou tumorais sintetizadas no citoplasma).',
            'O peptídeo é apresentado aos linfócitos T citotóxicos CD8+, que induzem apoptose direta na célula infectada via granzimas e perfurinas.',
          ],
          takeaway: 'MHC I = células nucleadas + antígenos endógenos citoplasmáticos → ativa T CD8+ citotóxico.',
          diagram: 'immune',
        },
        {
          id: 'mhc-class-ii-pathway',
          title: 'MHC classe II e linfócitos T CD4+ auxiliares',
          paragraphs: [
            'O MHC classe II é expresso exclusivamente por células apresentadoras de antígeno profissionais (APCs: células dendríticas, macrófagos e linfócitos B).',
            'Ele apresenta fragmentos exógenos digeridos em endossomos para linfócitos T CD4+ auxiliares (helper), que coordenam a resposta imune secretando citocinas.',
          ],
          takeaway: 'MHC II = APCs profissionais + antígenos exógenos endocitados → ativa T CD4+ auxiliar.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o padrão correto de emparelhamento entre as classes de MHC, suas vias de processamento e os subtipos de linfócitos T ativados?',
        options: [
          {
            id: 'mhc-i-cd8-mhc-ii-cd4',
            label: 'MHC I apresenta antígenos endógenos para T CD8+; MHC II apresenta antígenos exógenos para T CD4+',
            explanation: 'Correto: a regra de 8 confirma isso: MHC I × CD8 = 8; MHC II × CD4 = 8. MHC I reflete peptídeos intracelulares e MHC II reflete peptídeos fagocitados/endocitados.',
          },
          {
            id: 'mhc-i-cd4-mhc-ii-cd8',
            label: 'MHC I apresenta antígenos exógenos para T CD4+; MHC II apresenta antígenos endógenos para T CD8+',
            explanation: 'Incorreto: o emparelhamento está invertido; o MHC I interage especificamente com o correceptor CD8, não com CD4.',
          },
          {
            id: 'mhc-both-b-cells',
            label: 'Ambas as classes estimulam diretamente imunoglobulinas de superfície sem auxílio de receptores TCR',
            explanation: 'Incorreto: moléculas de MHC interagem com receptores de células T (TCR), enquanto os linfócitos B reconhecem antígenos nativos pelo BCR.',
          },
          {
            id: 'mhc-nk-recognition',
            label: 'MHC I e II atuam apenas ativando citotoxicidade de neutrófilos e eosinófilos circulantes',
            explanation: 'Incorreto: a função clássica do MHC é apresentar peptídeos para ativação antigênica de linfócitos T adaptativos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How does the immune system tell whether a virus is hiding inside a host cell or circulating freely in tissues?',
      title: 'Antigen presentation: MHC class I and MHC class II',
      description: 'Differentiate the endogenous pathway of MHC I presenting to CD8+ T cells from the exogenous pathway of MHC II presenting to CD4+ T cells.',
      objective: 'Compare tissue distribution, antigen origin, and T-cell coreceptor specificity between MHC class I and MHC class II.',
      stages: [
        {
          id: 'antigen-presentation-intro',
          title: 'MHC-restricted antigen recognition',
          paragraphs: [
            'T cells cannot recognize free, native soluble antigens. They require major histocompatibility complex (MHC) molecules to display peptide fragments on cell membranes.',
            'This MHC restriction guarantees that T lymphocytes interact only with host cells exhibiting specific molecular cues.',
          ],
          takeaway: 'T cells recognize processed peptides bound to membrane MHC molecules.',
          diagram: 'immune',
        },
        {
          id: 'mhc-class-i-pathway',
          title: 'MHC class I and cytotoxic CD8+ T cells',
          paragraphs: [
            'MHC class I is expressed on all nucleated cells and presents endogenous antigens (such as viral or mutated tumor proteins synthesized in the cytosol).',
            'The peptide is presented to cytotoxic CD8+ T lymphocytes, which trigger target cell apoptosis via perforins and granzymes.',
          ],
          takeaway: 'MHC I = nucleated cells + endogenous cytosolic peptides → activates cytotoxic CD8+ T cells.',
          diagram: 'immune',
        },
        {
          id: 'mhc-class-ii-pathway',
          title: 'MHC class II and helper CD4+ T cells',
          paragraphs: [
            'MHC class II is expressed exclusively on professional antigen-presenting cells (APCs: dendritic cells, macrophages, and B cells).',
            'It displays exogenous antigens degraded inside endosomes to helper CD4+ T cells, which coordinate adaptive immune responses via cytokine secretion.',
          ],
          takeaway: 'MHC II = professional APCs + endocytosed exogenous peptides → activates helper CD4+ T cells.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the correct pairing between MHC classes, antigen processing pathways, and target T-lymphocyte subsets?',
        options: [
          {
            id: 'mhc-i-cd8-mhc-ii-cd4',
            label: 'MHC I displays endogenous antigens to CD8+ T cells; MHC II displays exogenous antigens to CD4+ T cells',
            explanation: 'Correct: the rule of eight applies: MHC I × CD8 = 8; MHC II × CD4 = 8. MHC I surveys intracellular peptides and MHC II surveys endocytosed peptides.',
          },
          {
            id: 'mhc-i-cd4-mhc-ii-cd8',
            label: 'MHC I displays exogenous antigens to CD4+ T cells; MHC II displays endogenous antigens to CD8+ T cells',
            explanation: 'Incorrect: pairings are inverted; MHC class I interacts with the CD8 coreceptor, while MHC class II interacts with CD4.',
          },
          {
            id: 'mhc-both-b-cells',
            label: 'Both MHC classes directly bind surface immunoglobulins without involving T-cell receptors',
            explanation: 'Incorrect: MHC molecules interact with T-cell receptors (TCRs); B cells recognize native conformations via surface BCRs.',
          },
          {
            id: 'mhc-nk-recognition',
            label: 'MHC I and II act solely to stimulate cytotoxic degranulation of circulating neutrophils and eosinophils',
            explanation: 'Incorrect: the central role of MHC is peptide presentation to adaptive CD4+ and CD8+ T lymphocytes.',
          },
        ],
      },
    },
  },
});

export const immunologyAntibodiesLesson = lessonSchema.parse({
  id: 'immunology-antibodies',
  revision: 1,
  questionId: 'immunology-antibodies-classes',
  correctOptionId: 'igg-transplacental-memory',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch16-antibodies',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/16-3',
      section: 'Chapter 16 · Adaptive Immunity: Antibodies and Humoral Immunity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Imunologia',
      hook: 'Por que o teste sorológico para uma infecção recente procura IgM, enquanto a imunidade duradoura é marcada pelo IgG?',
      title: 'Imunoglobulinas: classes de anticorpos e funções efetoras',
      description: 'Conheça as cinco classes de anticorpos (IgM, IgG, IgA, IgE, IgD) e suas funções biológicas essenciais.',
      objective: 'Diferenciar os papéis de IgM na fase aguda, IgG na memória e proteção fetal, IgA em mucosas e IgE em respostas alérgicas e antiparasitárias.',
      stages: [
        {
          id: 'igm-acute-response',
          title: 'IgM: a primeira linha de anticorpos',
          paragraphs: [
            'A IgM é a primeira imunoglobulina secretada pelos plasmócitos durante a resposta imune primária a um novo antígeno.',
            'Ela circula principalmente como um pentâmero ligado por uma cadeia J, conferindo dez sítios de ligação com alta avidez para aglutinação e ativação do complemento.',
          ],
          takeaway: 'IgM = pentâmero de alta avidez, marcador clássico de infecção aguda recente.',
          diagram: 'immune',
        },
        {
          id: 'igg-memory-placenta',
          title: 'IgG: memória duradoura e passagem transplacentária',
          paragraphs: [
            'A IgG é o anticorpo monomérico mais abundante no soro e na linfa, predominando na resposta imune secundária.',
            'É a única classe de imunoglobulina capaz de atravessar ativamente a barreira placentária, conferindo imunidade passiva natural ao recém-nascido.',
          ],
          takeaway: 'IgG = imunoglobulina sérica predominante, memória a longo prazo e proteção fetal transplacentária.',
          diagram: 'immune',
        },
        {
          id: 'iga-and-ige-roles',
          title: 'IgA nas mucosas e IgE na alergia',
          paragraphs: [
            'A IgA é secretada na forma dimérica na saliva, lágrimas, leite materno e muco gastrointestinal e respiratório, neutralizando patógenos antes da invasão tecidual.',
            'A IgE liga-se com alta afinidade a mastócitos e basófilos; ao cruzar com antígenos, desencadeia degranulação na alergia e na defesa contra helmintos.',
          ],
          takeaway: 'IgA protege superfícies mucosas; IgE medeia alergia e defesa contra parasitas.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual classe de imunoglobulina é a mais abundante no soro humano durante a fase tardia da resposta imune e a única a atravessar a barreira placentária?',
        options: [
          {
            id: 'igg-transplacental-memory',
            label: 'IgG, responsável pela memória imunológica humoral e proteção passiva ao feto',
            explanation: 'Correto: a IgG predomina no soro, tem meia-vida longa, fixa complemento com eficiência e cruza a placenta por receptores FcRn.',
          },
          {
            id: 'igm-mucosal-dimer',
            label: 'IgM, sintetizada como dímero secretor estável em superfícies epiteliais externas',
            explanation: 'Incorreto: o dímero secretor mucosal característico é a IgA; a IgM sérica circula como pentâmero.',
          },
          {
            id: 'ige-opsonin-phagocytosis',
            label: 'IgE, a principal opsonina plasmática neutrofílica em infecções bacterianas',
            explanation: 'Incorreto: a principal opsonina sérica com receptores em neutrófilos é a IgG; a IgE atua em hipersensibilidade tipo I e helmintos.',
          },
          {
            id: 'iga-mast-cell-degranulation',
            label: 'IgA, responsável pela ligação a mastócitos e desencadeamento de choque anafilático',
            explanation: 'Incorreto: a imunoglobulina ligada a receptores Fc de alta afinidade em mastócitos causadora de anafilaxia é a IgE.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'Why does serologic testing for recent infection look for IgM, while long-term protection is marked by IgG?',
      title: 'Immunoglobulins: antibody classes and effector functions',
      description: 'Explore the five antibody classes (IgM, IgG, IgA, IgE, IgD) and their vital biological roles.',
      objective: 'Distinguish the functions of IgM in acute responses, IgG in memory and transplacental transfer, IgA in mucosal surfaces, and IgE in allergic/parasitic responses.',
      stages: [
        {
          id: 'igm-acute-response',
          title: 'IgM: the initial antibody barrier',
          paragraphs: [
            'IgM is the first immunoglobulin secreted by plasma cells during the primary immune challenge against novel antigens.',
            'It circulates largely as a pentamer held by a J chain, providing ten antigen-binding sites with high avidity for agglutination and complement fixation.',
          ],
          takeaway: 'IgM = high-avidity pentamer, hallmark serologic marker of acute infection.',
          diagram: 'immune',
        },
        {
          id: 'igg-memory-placenta',
          title: 'IgG: durable memory and transplacental transfer',
          paragraphs: [
            'IgG is the most abundant monomeric antibody in serum and interstitial spaces, dominating secondary immune responses.',
            'It is the only antibody class capable of actively crossing the placental barrier via FcRn receptors, imparting passive immunity to the newborn.',
          ],
          takeaway: 'IgG = dominant serum isotype, provides durable memory and fetal transplacental protection.',
          diagram: 'immune',
        },
        {
          id: 'iga-and-ige-roles',
          title: 'IgA at mucosal surfaces and IgE in allergy',
          paragraphs: [
            'IgA is secreted as a dimer into saliva, tears, breast milk, and gastrointestinal and respiratory mucus, neutralizing microbes before tissue invasion.',
            'IgE binds high-affinity Fc receptors on mast cells and basophils; antigen cross-linking induces immediate degranulation against parasites and in allergy.',
          ],
          takeaway: 'IgA protects mucosal barriers; IgE drives allergic degranulation and anti-helminth defense.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which immunoglobulin class is the most abundant in human serum during secondary immune responses and the only one that crosses the placental barrier?',
        options: [
          {
            id: 'igg-transplacental-memory',
            label: 'IgG, providing durable humoral immune memory and transplacental protection to the fetus',
            explanation: 'Correct: IgG predominates in serum, possesses a long half-life, fixes complement, and crosses the placenta via FcRn receptors.',
          },
          {
            id: 'igm-mucosal-dimer',
            label: 'IgM, synthesized as a stable secretory dimer on external epithelial surfaces',
            explanation: 'Incorrect: secretory dimeric immunoglobulin on mucosal surfaces is IgA; serum IgM circulates as a pentamer.',
          },
          {
            id: 'ige-opsonin-phagocytosis',
            label: 'IgE, the chief circulating neutrophil opsonin in acute bacterial infections',
            explanation: 'Incorrect: IgG is the key opsonizing immunoglobulin for neutrophils; IgE is involved in type I allergy and parasitic defenses.',
          },
          {
            id: 'iga-mast-cell-degranulation',
            label: 'IgA, which coats mast cells and triggers systemic anaphylactic degranulation',
            explanation: 'Incorrect: the antibody that binds high-affinity receptors on mast cells and causes anaphylaxis is IgE.',
          },
        ],
      },
    },
  },
});

export const immunologyComplementLesson = lessonSchema.parse({
  id: 'immunology-complement',
  revision: 1,
  questionId: 'immunology-complement-mac',
  correctOptionId: 'mac-pore-lysis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch15-complement',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/15-4',
      section: 'Chapter 15 · Innate Nonspecific Host Defenses: Chemical Defenses and the Complement System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Imunologia',
      hook: 'Como uma cascata de proteínas solúveis no sangue consegue perfurar e destruir bactérias em segundos?',
      title: 'Sistema complemento: ativação, opsonização e lise',
      description: 'Entenda as vias de ativação do complemento, o papel central de C3b na opsonização e a montagem do MAC.',
      objective: 'Esquematizar as vias clássica, alternativa e da lectina, e explicar o mecanismo citolítico do complexo de ataque à membrana (MAC).',
      stages: [
        {
          id: 'activation-pathways',
          title: 'Três vias de ativação em cascata',
          paragraphs: [
            'O sistema complemento é composto por mais de 30 proteínas séricas inativas ativadas em cascata proteolítica.',
            'A via clássica é disparada por anticorpos (complexos antígeno-anticorpo); a via da lectina reconhece manose por MBL; e a via alternativa é ativada espontaneamente na superfície de microrganismos.',
          ],
          takeaway: 'Três vias (clássica, lectina e alternativa) convergem para a clivagem do fator C3.',
          diagram: 'immune',
        },
        {
          id: 'c3-cleavage-opsonization',
          title: 'Clivagem de C3 e opsonização por C3b',
          paragraphs: [
            'A C3 convertase cliva C3 em C3a e C3b. O fragmento C3a atua como anafilatoxina promovendo inflamação e atração leucocitária.',
            'O fragmento C3b ancora-se covalentemente na superfície do patógeno, funcionando como potente opsonina que estimula a fagocitose por macrófagos e neutrófilos.',
          ],
          takeaway: 'C3b recobre o patógeno (opsonização), multiplicando a eficácia da fagocitose.',
          diagram: 'immune',
        },
        {
          id: 'mac-formation-lysis',
          title: 'Complexo de ataque à membrana (MAC)',
          paragraphs: [
            'A jusante, a C5 convertase cliva C5 gerando C5b, que recruta os fatores C6, C7, C8 e múltiplas moléculas de C9.',
            'O complexo C5b-9 polimeriza-se formando um poro transmembrana cilíndrico na parede bacteriana, permitindo influxo descontrolado de água e íons que culmina em lise osmótica.',
          ],
          takeaway: 'MAC (C5b-9) perfura a membrana lipídica celular, causando morte por choque osmótico.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o papel biológico desempenhado pelo complexo de ataque à membrana (MAC, C5b-9) na defesa antimicrobiana?',
        options: [
          {
            id: 'mac-pore-lysis',
            label: 'Formação de poros transmembrana na bicamada lipídica que provocam lise osmótica do patógeno',
            explanation: 'Correto: a polimerização de monômeros de C9 pelo complexo C5b-8 perfura a membrana da célula-alvo, dissipando gradientes e causando influxo osmótico lítico.',
          },
          {
            id: 'c3b-histamine-release',
            label: 'Inibição direta da agregação plaquetária e bloqueio da produção de óxido nítrico',
            explanation: 'Incorreto: o MAC é uma estrutura lítica mecânica transmembrana, não um inibidor enzimático endotelial.',
          },
          {
            id: 'c5a-pore-assembly',
            label: 'Apresentação direta de peptídeos bacterianos solúveis ao receptor TCR de linfócitos T',
            explanation: 'Incorreto: apresentação de peptídeos é função de moléculas de MHC classe I e II, não de componentes do complemento.',
          },
          {
            id: 'classical-lectin-identical',
            label: 'Síntese de novas imunoglobulinas IgM por plasmócitos no centro germinativo',
            explanation: 'Incorreto: o sistema complemento consiste em proteínas plasmáticas efetoras sintetizadas principalmente no fígado.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How can a cascade of soluble blood proteins punch holes through bacteria and destroy them within seconds?',
      title: 'Complement system: activation, opsonization, and lysis',
      description: 'Understand the complement activation pathways, the pivotal opsonizing role of C3b, and MAC assembly.',
      objective: 'Outline the classical, alternative, and lectin pathways, and explain the cytolytic mechanism of the membrane attack complex (MAC).',
      stages: [
        {
          id: 'activation-pathways',
          title: 'Three proteolytic cascade pathways',
          paragraphs: [
            'The complement system consists of over 30 inactive circulating plasma proteins activated through sequential enzymatic cleavage cascades.',
            'The classical pathway is triggered by immune complexes; the lectin pathway recognizes mannose residues via MBL; and the alternative pathway is spontaneously triggered on microbial surfaces.',
          ],
          takeaway: 'Three distinct pathways (classical, lectin, alternative) converge to cleave central component C3.',
          diagram: 'immune',
        },
        {
          id: 'c3-cleavage-opsonization',
          title: 'C3 cleavage and opsonization by C3b',
          paragraphs: [
            'C3 convertase cleaves C3 into C3a and C3b. The C3a peptide acts as an anaphylatoxin promoting local vasodilation and leukocyte chemotaxis.',
            'C3b binds covalently to the microbial surface, functioning as a powerful opsonin recognized by phagocytic receptors on macrophages and neutrophils.',
          ],
          takeaway: 'C3b coats the target surface (opsonization), dramatically enhancing phagocytic clearance.',
          diagram: 'immune',
        },
        {
          id: 'mac-formation-lysis',
          title: 'Membrane attack complex (MAC)',
          paragraphs: [
            'Downstream, C5 convertase cleaves C5 into C5b, which successively recruits C6, C7, C8, and multiple molecules of C9.',
            'The assembled C5b-9 complex inserts into the pathogen lipid membrane as a hollow cylindrical pore, causing rapid water influx and osmotic cell lysis.',
          ],
          takeaway: 'MAC (C5b-9) inserts pores into the lipid membrane, producing lethal osmotic lysis.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the primary biological mechanism of the membrane attack complex (MAC, C5b-9) during antimicrobial defense?',
        options: [
          {
            id: 'mac-pore-lysis',
            label: 'Forming transmembrane cylindrical pores in the target lipid bilayer causing osmotic cell lysis',
            explanation: 'Correct: polymerization of C9 monomers into the membrane by C5b-8 forms a pore, collapsing ionic gradients and driving lethal osmotic influx.',
          },
          {
            id: 'c3b-histamine-release',
            label: 'Directly inhibiting platelet aggregation and preventing nitric oxide synthesis in endothelial cells',
            explanation: 'Incorrect: the MAC is a physical transmembrane pore complex, not an endothelial enzyme inhibitor.',
          },
          {
            id: 'c5a-pore-assembly',
            label: 'Presenting soluble microbial antigens directly to the T-cell receptor of cytotoxic lymphocytes',
            explanation: 'Incorrect: peptide presentation is mediated exclusively by host MHC molecules, not complement factors.',
          },
          {
            id: 'classical-lectin-identical',
            label: 'Synthesizing novel IgM immunoglobulins inside germinal centers of secondary lymphoid organs',
            explanation: 'Incorrect: complement factors are soluble plasma proteins primarily produced by hepatocytes, not B lymphocytes.',
          },
        ],
      },
    },
  },
});

export const immunologyHypersensitivityLesson = lessonSchema.parse({
  id: 'immunology-hypersensitivity',
  revision: 1,
  questionId: 'immunology-hypersensitivity-types',
  correctOptionId: 'type-i-ige-anaphylaxis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch19-hypersensitivity',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/19-1',
      section: 'Chapter 19 · Diseases of the Immune System: Hypersensitivities',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Imunologia',
      hook: 'Por que uma picada de abelha pode provocar colapso respiratório em minutos enquanto o teste da tuberculina leva dias?',
      title: 'Reações de hipersensibilidade: tipos I a IV',
      description: 'Classifique as quatro formas de hipersensibilidade de Gell e Coombs de acordo com seus mediadores imunes.',
      objective: 'Diferenciar os mecanismos imunopatológicos da anafilaxia mediada por IgE (tipo I) da imunidade celular tardia por células T (tipo IV).',
      stages: [
        {
          id: 'type-i-anaphylaxis',
          title: 'Tipo I: imediata e mediada por IgE',
          paragraphs: [
            'A hipersensibilidade tipo I ocorre minutos após a reexposição a um alérgeno que se liga a moléculas de IgE pré-fixadas na superfície de mastócitos e basófilos.',
            'A reticulação da IgE induz degranulação rápida com liberação de histamina, leucotrienos e prostaglandinas, provocando broncoespasmo, vasodilatação e anafilaxia.',
          ],
          takeaway: 'Tipo I = alérgeno + IgE em mastócitos → degranulação rápida de histamina em minutos.',
          diagram: 'immune',
        },
        {
          id: 'types-ii-and-iii',
          title: 'Tipos II e III: mediados por anticorpos',
          paragraphs: [
            'O tipo II (citotóxico) envolve anticorpos IgG ou IgM direcionados contra antígenos presentes na superfície de células ou tecidos específicos (ex.: hemólise transfusional).',
            'O tipo III envolve a formação de imunocomplexos antígeno-anticorpo solúveis que se depositam em leitos vasculares e tecidos, ativando complemento e neutrófilos (ex.: lúpus, vasculite).',
          ],
          takeaway: 'Tipo II = anticorpo contra antígeno tecidual; Tipo III = imunocomplexos circulantes depositados.',
          diagram: 'immune',
        },
        {
          id: 'type-iv-cellular',
          title: 'Tipo IV: tardia e mediada por células T',
          paragraphs: [
            'A hipersensibilidade tipo IV não envolve anticorpos, sendo mediada por linfócitos T sensibilizados (CD4+ Th1 e CD8+ citotóxicos) e ativação macrofágica.',
            'A resposta requer de 24 a 72 horas para se manifestar clinicamente, como observado na dermatite de contato por níquel e no teste tuberculínico (PPD).',
          ],
          takeaway: 'Tipo IV = imune celular por linfócitos T, sem anticorpos, com manifestação clínica tardia (48–72h).',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual tipo de reação de hipersensibilidade é caracterizado pela ligação de alérgenos a anticorpos IgE fixados em mastócitos, deflagrando liberação imediata de histamina?',
        options: [
          {
            id: 'type-i-ige-anaphylaxis',
            label: 'Hipersensibilidade do tipo I (imediata mediada por IgE e mastócitos)',
            explanation: 'Correto: a reação tipo I envolve sensibilização prévia, ligação de IgE aos mastócitos via receptor Fc-épsilon-RI e degranulação imediata com histamina.',
          },
          {
            id: 'type-iv-circulating-immune-complexes',
            label: 'Hipersensibilidade do tipo IV (mediada por deposição de imunocomplexos circulantes)',
            explanation: 'Incorreto: imunocomplexos circulantes caracterizam a hipersensibilidade tipo III; o tipo IV é estritamente mediado por células T.',
          },
          {
            id: 'type-ii-delayed-t-cells',
            label: 'Hipersensibilidade do tipo II (mediada por clones de linfócitos T citotóxicos tardios)',
            explanation: 'Incorreto: reações mediadas por linfócitos T correspondem ao tipo IV; o tipo II envolve anticorpos citotóxicos IgG/IgM contra células-alvo.',
          },
          {
            id: 'type-iii-ige-eosinophils',
            label: 'Hipersensibilidade do tipo III (mediada por IgE e grânulos citotóxicos de macrófagos)',
            explanation: 'Incorreto: a IgE atua no tipo I; o tipo III decorre de complexos antígeno-anticorpo (IgG/IgM) que precipitam no endotélio vascular.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'Why can a bee sting cause life-threatening airway collapse in minutes, while a tuberculin skin test takes days to appear?',
      title: 'Hypersensitivity reactions: types I through IV',
      description: 'Categorize the four classical Gell and Coombs hypersensitivities based on immune mediators and timing.',
      objective: 'Distinguish the immunopathologic mechanisms of IgE-mediated immediate anaphylaxis (type I) from delayed cell-mediated immunity (type IV).',
      stages: [
        {
          id: 'type-i-anaphylaxis',
          title: 'Type I: immediate and IgE-mediated',
          paragraphs: [
            'Type I hypersensitivity occurs within minutes of re-exposure to an allergen that binds to specific IgE pre-anchored on mast cells and basophils.',
            'Cross-linking of surface IgE drives rapid degranulation, releasing preformed histamine, leukotrienes, and prostaglandins that cause bronchospasm and anaphylaxis.',
          ],
          takeaway: 'Type I = allergen + IgE on mast cells → rapid histamine release within minutes.',
          diagram: 'immune',
        },
        {
          id: 'types-ii-and-iii',
          title: 'Types II and III: antibody-mediated tissue damage',
          paragraphs: [
            'Type II (cytotoxic) involves IgG or IgM antibodies targeted directly against cellular or tissue-fixed antigens (e.g., hemolytic transfusion reactions).',
            'Type III involves soluble circulating antigen-antibody immune complexes that precipitate in vascular beds, activating complement and recruiting neutrophils (e.g., lupus nephritis, vasculitis).',
          ],
          takeaway: 'Type II = antibodies against fixed cell antigens; Type III = deposition of circulating immune complexes.',
          diagram: 'immune',
        },
        {
          id: 'type-iv-cellular',
          title: 'Type IV: delayed and cell-mediated',
          paragraphs: [
            'Type IV hypersensitivity is entirely antibody-independent, mediated by sensitized CD4+ Th1 cells, CD8+ cytotoxic T cells, and activated macrophages.',
            'The inflammatory response requires 24 to 72 hours to reach clinical expression, as demonstrated by contact dermatitis and the tuberculin skin test (PPD).',
          ],
          takeaway: 'Type IV = T-cell mediated cellular immunity without antibodies, clinically delayed (48–72h).',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which hypersensitivity reaction is characterized by allergen cross-linking of IgE antibodies bound to mast cells, triggering immediate histamine release?',
        options: [
          {
            id: 'type-i-ige-anaphylaxis',
            label: 'Type I hypersensitivity (immediate, IgE- and mast-cell mediated)',
            explanation: 'Correct: type I reactions involve prior sensitization, IgE binding to high-affinity Fc-epsilon-RI receptors on mast cells, and rapid histamine degranulation upon re-exposure.',
          },
          {
            id: 'type-iv-circulating-immune-complexes',
            label: 'Type IV hypersensitivity (driven by deposition of soluble circulating immune complexes)',
            explanation: 'Incorrect: circulating immune complex deposition defines type III hypersensitivity; type IV is strictly T-cell mediated.',
          },
          {
            id: 'type-ii-delayed-t-cells',
            label: 'Type II hypersensitivity (driven by delayed cytotoxic T-lymphocyte clones)',
            explanation: 'Incorrect: T-cell mediated reactions belong to type IV; type II involves cytotoxic IgG or IgM antibodies directed against surface antigens.',
          },
          {
            id: 'type-iii-ige-eosinophils',
            label: 'Type III hypersensitivity (driven by IgE and cytotoxic macrophage granules)',
            explanation: 'Incorrect: IgE mediates type I; type III involves soluble antigen-antibody (IgG/IgM) aggregates precipitating in microvasculature.',
          },
        ],
      },
    },
  },
});
