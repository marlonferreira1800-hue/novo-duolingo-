import { lessonSchema } from '../src/contracts/learning';

export const immunologyInnateReceptorsLesson = lessonSchema.parse({
  id: 'immunology-innate-receptors',
  revision: 1,
  questionId: 'immunology-innate-receptors-q1',
  correctOptionId: 'nlrp3-caspase1-il1beta',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch15-sensors',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/15-2',
      section: 'Chapter 15 · Innate Nonspecific Host Defenses: Pattern Recognition Receptors and Innate Cellular Defenses',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Imunologia',
      hook: 'Como fagócitos e células NK reconhecem um invasor bacteriano ou celular neoplásico em questão de minutos sem nunca tê-lo visto antes?',
      title: 'Sensores da imunidade inata: receptores Toll-like, inflamassoma e células NK',
      description: 'Explore os PRRs de superfície e endossomais (TLRs), o complexo intracelular do inflamassoma NLRP3 e o reconhecimento por células NK.',
      objective: 'Diferenciar os receptores Toll-like pela localização e ligantes, explicar a ativação da caspase-1 pelo inflamassoma NLRP3 e a vigilância imune mediada por células NK.',
      stages: [
        {
          id: 'toll-like-receptors',
          title: 'Receptores de reconhecimento de padrões (TLRs)',
          paragraphs: [
            'A imunidade inata depende de receptores de reconhecimento de padrões (PRRs) expressos em células mieloides e epiteliais, que detectam padrões moleculares associados a patógenos (PAMPs) e a danos teciduais (DAMPs).',
            'Os receptores Toll-like (TLRs) dividem-se em extracelulares na membrana plasmática (TLR4 reconhece LPS bacteriano; TLR2 reconhece peptideoglicano) e endossomais intracelulares (TLR3 detecta dsRNA viral; TLR7/8 detecta ssRNA; TLR9 detecta CpG não metilado). Quase todos sinalizam via adaptador MyD88 para translocar o fator NF-κB para o núcleo, induzindo citocinas pró-inflamatórias.',
          ],
          takeaway: 'TLRs da membrana reconhecem componentes bacterianos; TLRs endossomais detectam ácidos nucleicos virais via NF-κB.',
          diagram: 'membrane',
        },
        {
          id: 'nlrp3-inflammasome',
          title: 'O complexo do inflamassoma NLRP3 e caspase-1',
          paragraphs: [
            'O inflamassoma NLRP3 é um complexo multiproteico citosólico ativado por sinais de perigo intracelular como efluxo de K+, cristais de urato, espécies reativas de oxigênio (ROS) ou toxinas formadoras de poros.',
            'Uma vez montado, o NLRP3 oligomeriza-se com a proteína adaptadora ASC e recruta a pró-caspase-1, ativando-a enzimaticamente em caspase-1 funcional. A caspase-1 cliva proteoliticamente as citocinas pró-IL-1β e pró-IL-18 em suas formas ativas maduras e induz morte celular piroptótica via gasdermina D.',
          ],
          takeaway: 'O inflamassoma NLRP3 ativa a caspase-1, que cliva pró-IL-1β e pró-IL-18 gerando inflamação aguda vigorosa.',
          diagram: 'inflammation',
        },
        {
          id: 'nk-cells-surveillance',
          title: 'Vigilância imune e citotoxicidade por células NK',
          paragraphs: [
            'Linfócitos Natural Killer (NK) realizam a vigilância citotóxica inata contra células infectadas por vírus intracelulares e células malignas sem exigir apresentação antigênica prévia.',
            'Elas integram sinais de receptores ativadores e inibitórios (como KIRs). Células saudáveis expressam abundantes moléculas de MHC classe I, que ligam-se aos receptores inibitórios e desligam a lise; células tumorais que perdem o MHC I (hipótese do "missing-self") são desinibidas e mortas por exocitose de perfurinas e granzimas.',
          ],
          takeaway: 'Células NK matam células que perdem MHC classe I ("missing-self") por liberação de perfurina e granzima.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o papel catalítico central executado pela enzima caspase-1 após a oligomerização e ativação do complexo do inflamassoma NLRP3?',
        options: [
          {
            id: 'nlrp3-caspase1-il1beta',
            label: 'Clivagem proteolítica de pró-IL-1β e pró-IL-18 em suas citocinas ativas e indução de piroptose',
            explanation: 'Correto: a caspase-1 ativada pelo inflamassoma cliva proteoliticamente os precursores inativos de IL-1β e IL-18 em citocinas ativas maduras e cliva a gasdermina D provocando piroptose.',
          },
          {
            id: 'tlr4-myd88-phosphorylation',
            label: 'Fosforilação direta da cadeia leve da miosina vascular gerando vasoconstrição reflexa',
            explanation: 'Incorreto: a fosforilação de miosina é função da MLCK na contração muscular lisa, sem relação com a caspase-1 inflamatória.',
          },
          {
            id: 'c1q-classical-convertase',
            label: 'Montagem primária da C3 convertase da via clássica sobre imunocomplexos teciduais',
            explanation: 'Incorreto: a C3 convertase é formada por proteínas do complemento (C4b2a), não por caspases intracelulares do inflamassoma.',
          },
          {
            id: 'rag1-somatorecombination',
            label: 'Recombinação somática de genes imunoglobulínicos no núcleo de células dendríticas',
            explanation: 'Incorreto: a recombinação V(D)J é realizada pelas recombinases RAG1/RAG2 no núcleo de linfócitos B e T em diferenciação.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How can phagocytes and NK cells identify an invading bacterial species or malignant tumor cell within minutes without prior adaptive priming?',
      title: 'Innate immunity sensors: Toll-like receptors, inflammasome, and NK cells',
      description: 'Explore plasma membrane and endosomal PRRs (TLRs), the cytosolic NLRP3 inflammasome, and natural killer cell missing-self mechanics.',
      objective: 'Distinguish TLR subfamilies by localization, detail caspase-1 activation by the NLRP3 inflammasome, and describe NK missing-self recognition.',
      stages: [
        {
          id: 'toll-like-receptors',
          title: 'Pattern recognition receptors and Toll-like receptor families',
          paragraphs: [
            'Innate immunity relies on germline-encoded pattern recognition receptors (PRRs) displayed by myeloid and epithelial cells to recognize pathogen-associated (PAMPs) and danger-associated molecular patterns (DAMPs).',
            'Toll-like receptors (TLRs) operate at the cell surface (TLR4 senses Gram-negative LPS; TLR2 recognizes bacterial peptidoglycan) or in endosomes (TLR3 recognizes viral dsRNA; TLR7/8 senses ssRNA; TLR9 detects unmethylated CpG DNA). Downstream signaling cascades through MyD88 to mobilize NF-κB, igniting inflammatory cytokine transcription.',
          ],
          takeaway: 'Cell-surface TLRs recognize bacterial coats; endosomal TLRs detect microbial nucleic acids to activate NF-κB.',
          diagram: 'membrane',
        },
        {
          id: 'nlrp3-inflammasome',
          title: 'The NLRP3 inflammasome complex and caspase-1 activation',
          paragraphs: [
            'The NLRP3 inflammasome is a macromolecular cytosolic surveillance sensor activated by cellular stress triggers including intracellular potassium efflux, crystalline urate aggregates, reactive oxygen species, and bacterial pore-forming toxins.',
            'Once assembled, NLRP3 oligomerizes with the adaptor protein ASC to recruit pro-caspase-1, inducing its autocatalytic cleavage into active caspase-1. Active caspase-1 enzymatically processes pro-IL-1β and pro-IL-18 into potent bioactive cytokines while cleaving gasdermin D to drive pyroptotic lytic cell death.',
          ],
          takeaway: 'The assembled NLRP3 inflammasome activates caspase-1, processing pro-IL-1β and pro-IL-18 to trigger pyroptosis.',
          diagram: 'inflammation',
        },
        {
          id: 'nk-cells-surveillance',
          title: 'Natural killer cell surveillance and missing-self cytotoxicity',
          paragraphs: [
            'Natural killer (NK) lymphocytes execute rapid innate cytotoxic surveillance against intracellular viral pathogens and transforming malignant clones without requiring prior antigen presentation.',
            'Their effector actions integrate signals between activating receptors and inhibitory receptors (such as KIRs). Normal host cells express abundant MHC class I, which engages inhibitory receptors to shut down lysis; transformed or viral-infected cells downregulating surface MHC I ("missing-self") trigger lethal perforin and granzyme degranulation.',
          ],
          takeaway: 'NK cells eradicate targets downregulating MHC class I ("missing-self") via perforin- and granzyme-mediated apoptosis.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which primary catalytic action is carried out by active caspase-1 following oligomerization of the cytosolic NLRP3 inflammasome?',
        options: [
          {
            id: 'nlrp3-caspase1-il1beta',
            label: 'Proteolytic processing of pro-IL-1β and pro-IL-18 into active cytokines and gasdermin D-mediated pyroptosis',
            explanation: 'Correct: caspase-1 cleaved within the activated inflammasome converts inactive pro-IL-1β and pro-IL-18 into mature pro-inflammatory cytokines and cleaves gasdermin D to initiate pyroptosis.',
          },
          {
            id: 'tlr4-myd88-phosphorylation',
            label: 'Direct phosphorylation of vascular myosin light chains promoting generalized arterial spasm',
            explanation: 'Incorrect: myosin phosphorylation is mediated by MLCK during smooth muscle contraction, not by inflammatory caspase-1.',
          },
          {
            id: 'c1q-classical-convertase',
            label: 'Assembly of the classical pathway C3 convertase complex across endothelial surfaces',
            explanation: 'Incorrect: C3 convertase is assembled by complement proteins (C4b2a), not by cytosolic inflammasome proteases.',
          },
          {
            id: 'rag1-somatorecombination',
            label: 'Somatic recombination of immunoglobulin heavy chains in dendritic cell nuclei',
            explanation: 'Incorrect: V(D)J recombination is executed by RAG1/RAG2 during lymphocyte ontogeny in primary lymphoid organs.',
          },
        ],
      },
    },
  },
});

export const immunologyToleranceLesson = lessonSchema.parse({
  id: 'immunology-tolerance',
  revision: 1,
  questionId: 'immunology-tolerance-q1',
  correctOptionId: 'aire-thymus-negative-selection',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch16-tolerance',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/16-1',
      section: 'Chapter 16 · Adaptive Immunity: T-Cell Development and Immunological Tolerance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Imunologia',
      hook: 'Como nosso sistema imune aprende no timo a não atacar o próprio coração, pâncreas e tireoide antes mesmo de sair para o sangue?',
      title: 'Ontogenia linfocitária e mecanismos de tolerância imunológica',
      description: 'Estude a recombinação somática V(D)J, a seleção tímica positiva e negativa, o gene AIRE e a tolerância periférica.',
      objective: 'Descrever a geração de diversidade antigênica por RAG1/RAG2, a seleção tímica e o papel do fator AIRE e das células Treg na prevenção de autoimunidade.',
      stages: [
        {
          id: 'vessel-lymphocyte-vdj',
          title: 'Recombinação somática V(D)J e diversidade juncional',
          paragraphs: [
            'A imensa diversidade do repertório de receptores TCR e BCR é gerada nas células progenitoras linfoides por recombinação somática aleatória de segmentos gênicos Variáveis (V), de Diversidade (D) e de Junção (J).',
            'O processo é orquestrado pelas enzimas recombinases RAG1 e RAG2, associadas à enzima desoxinucleotidil transferase terminal (TdT), que adiciona nucleotídeos N aleatórios nas junções, criando uma diversidade teórica superior a 10¹¹ clones.',
          ],
          takeaway: 'RAG1/RAG2 e TdT realizam recombinação somática V(D)J para criar o repertório diverso de receptores T e B.',
          diagram: 'dna',
        },
        {
          id: 'central-tolerance-thymus',
          title: 'Tolerância central no timo: seleções e o fator AIRE',
          paragraphs: [
            'No córtex tímico, timócitos imaturos sofrem seleção positiva: apenas células capazes de reconhecer moléculas próprias de MHC com afinidade moderada sobrevivem (restrição por MHC).',
            'Na medula tímica, ocorre a seleção negativa: células epiteliais medulares tímicas (mTECs) usam o fator de transcrição AIRE (Autoimmune Regulator) para expressar ectopicamente antígenos teciduais de todo o organismo (insulina, tireoglobulina). Timócitos que reconhecem esses autoantígenos com alta avidez sofrem apoptose clonal.',
          ],
          takeaway: 'O fator AIRE expressa autoantígenos periféricos no timo; timócitos autorreativos são eliminados por seleção negativa.',
          diagram: 'tissue',
        },
        {
          id: 'peripheral-tolerance-anergy',
          title: 'Tolerância periférica: anergia, deleção e células Treg',
          paragraphs: [
            'Linfócitos autorreativos que escapam da seleção central são controlados na periferia por três mecanismos principais: anergia funcional, deleção clonal e supressão ativa.',
            'A anergia ocorre quando o TCR reconhece o antígeno sem o coestímulo da molécula B7 (CD80/CD86) ligada ao receptor CD28. Além disso, linfócitos T reguladores CD4+CD25+FoxP3+ suprimem clones autorreativos liberando citocinas inibitórias (IL-10 e TGF-β) e sequestrando B7 via CTLA-4.',
          ],
          takeaway: 'Tolerância periférica mantém a autotolerância por anergia (ausência de coestímulo) e supressão ativa por Tregs FoxP3+.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a descrição do mecanismo central responsável pela eliminação de clones autorreativos na medula do timo:',
        blank: 'O fator de transcrição ______ promove a expressão de antígenos periféricos no epitélio tímico, permitindo a eliminação de linfócitos T autorreativos por ______ negativa.',
        options: [
          {
            id: 'aire-thymus-negative-selection',
            label: 'AIRE / seleção',
            explanation: 'Correto: mutações no gene AIRE (Autoimmune Regulator) impedem a expressão ectópica de autoantígenos tímicos, falhando na seleção negativa e causando poliendocrinopatia autoimune tipo 1 (APECED).',
          },
          {
            id: 'foxp3-thymus-positive-selection',
            label: 'FoxP3 / seleção',
            explanation: 'Incorreto: FoxP3 é o fator de transcrição característico de células T reguladoras (Tregs); a expressão de antígenos teciduais nas mTECs depende de AIRE.',
          },
          {
            id: 'rag1-thymus-somatic-selection',
            label: 'RAG1 / amplificação',
            explanation: 'Incorreto: RAG1 atua na recombinação somática de segmentos de DNA dos receptores, não na transcrição de antígenos periféricos para seleção negativa.',
          },
          {
            id: 'gata3-thymus-clonal-selection',
            label: 'GATA3 / deleção',
            explanation: 'Incorreto: GATA3 é o fator de diferenciação da linhagem Th2, não o regulador central de tolerância tímica.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How does our immune system learn inside the fetal thymus to spare our own heart, pancreas, and thyroid before naive T cells enter circulation?',
      title: 'Lymphocyte ontogeny and immunological tolerance mechanisms',
      description: 'Study V(D)J somatic recombination, positive and negative thymic selection, AIRE expression, and peripheral tolerance checkpoints.',
      objective: 'Describe diversity generation via RAG1/RAG2, outline thymic selection checkpoints, and explain AIRE and FoxP3+ Treg tolerance maintenance.',
      stages: [
        {
          id: 'vessel-lymphocyte-vdj',
          title: 'V(D)J somatic recombination and junctional diversity',
          paragraphs: [
            'The immense diversity of human TCR and BCR repertoires is assembled within immature lymphoid progenitors through somatic recombination of Variable (V), Diversity (D), and Joining (J) gene segments.',
            'This enzymatic rearrangement is driven by lymphoid-specific recombinases RAG1 and RAG2, assisted by terminal deoxynucleotidyl transferase (TdT), which incorporates random non-templated N-nucleotides at coding junctions to exceed 10¹¹ theoretical clones.',
          ],
          takeaway: 'RAG1/RAG2 and TdT coordinate V(D)J recombination to produce antigen receptor diversity.',
          diagram: 'dna',
        },
        {
          id: 'central-tolerance-thymus',
          title: 'Thymic central tolerance: selection and the AIRE regulator',
          paragraphs: [
            'Within the thymic cortex, immature double-positive thymocytes undergo positive selection: only clones binding self-MHC complexes with intermediate affinity receive survival signals (establishing MHC restriction).',
            'Within the thymic medulla, negative selection weeds out autoreactive cells: medullary thymic epithelial cells (mTECs) deploy the AIRE (Autoimmune Regulator) transcription factor to express tissue-restricted antigens (insulin, thyroglobulin). Clones binding self-peptides with high avidity are deleted via apoptotic clonal deletion.',
          ],
          takeaway: 'The AIRE factor drives ectopic self-antigen expression in mTECs; high-affinity autoreactive thymocytes undergo negative selection.',
          diagram: 'tissue',
        },
        {
          id: 'peripheral-tolerance-anergy',
          title: 'Peripheral tolerance: anergy, deletion, and FoxP3+ Tregs',
          paragraphs: [
            'Autoreactive T lymphocytes that escape central negative selection are restrained in peripheral tissues by functional anergy, clonal deletion, and active suppression.',
            'Anergy ensues when the TCR binds its cognate peptide-MHC without essential costimulatory signals provided by antigen-presenting cell B7 (CD80/CD86) binding to CD28. Concurrently, natural CD4+CD25+FoxP3+ regulatory T cells (Tregs) suppress autoreactivity by secreting IL-10 and TGF-β and stripping B7 using CTLA-4.',
          ],
          takeaway: 'Peripheral tolerance restrains escaped autoreactive clones through anergy (lack of costimulation) and FoxP3+ Treg suppression.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the statement describing central tolerance enforcement within the thymic medulla:',
        blank: 'The transcription factor ______ promotes ectopic peripheral self-antigen display on medullary thymic epithelium, eliminating autoreactive T cells by ______ selection.',
        options: [
          {
            id: 'aire-thymus-negative-selection',
            label: 'AIRE / negative',
            explanation: 'Correct: autoimmune regulator (AIRE) drives ectopic peripheral antigen transcription in thymic medullary epithelial cells; failure of AIRE causes autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy (APECED).',
          },
          {
            id: 'foxp3-thymus-positive-selection',
            label: 'FoxP3 / positive',
            explanation: 'Incorrect: FoxP3 specifies the immunosuppressive regulatory T cell lineage; it is not the transcriptional regulator of ectopic medullary antigens.',
          },
          {
            id: 'rag1-thymus-somatic-selection',
            label: 'RAG1 / somatic',
            explanation: 'Incorrect: RAG1 cleaves recombination signal sequences during V(D)J assembly, not during thymic antigen presentation.',
          },
          {
            id: 'gata3-thymus-clonal-selection',
            label: 'GATA3 / clonal',
            explanation: 'Incorrect: GATA3 drives Th2 CD4+ lymphocyte lineage differentiation, not central thymic negative selection.',
          },
        ],
      },
    },
  },
});

export const immunologyTcellSubsetsLesson = lessonSchema.parse({
  id: 'immunology-tcell-subsets',
  revision: 1,
  questionId: 'immunology-tcell-subsets-q1',
  correctOptionId: 'th1-tbet-ifngamma-macrophages',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch16-tcellsubsets',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/16-4',
      section: 'Chapter 16 · Adaptive Immunity: Specialized T-Cell Subsets and Cytokine Networks',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Imunologia',
      hook: 'Como um mesmo linfócito T virgem decide se vai se transformar em um combatente contra bactérias intracelulares, vermes ou fungos?',
      title: 'Subpopulações de linfócitos T CD4+: Th1, Th2, Th17, Tfh e Treg',
      description: 'Analise os fatores de transcrição mestres, perfis de citocinas efetoras e funções especializadas das linhagens auxiliares T.',
      objective: 'Identificar os fatores de transcrição (T-bet, GATA-3, RORγt, Bcl-6, FoxP3) e citocinas características de cada perfil efetor CD4+.',
      stages: [
        {
          id: 'th1-vs-th2',
          title: 'Eixo Th1 vs Th2: microrganismos intracelulares vs parasitas',
          paragraphs: [
            'Linfócitos T CD4+ virgens (Th0) diferenciam-se dependendo do microambiente de citocinas criado pela imunidade inata durante o estímulo inicial.',
            'A presença de IL-12 e IFN-γ induz o fator de transcrição mestre T-bet, gerando o perfil Th1 (secretor de IFN-γ e IL-2), fundamental para ativar macrófagos contra patógenos intracelulares (como Mycobacterium). Por outro lado, a IL-4 induz o fator GATA-3, gerando o perfil Th2 (secretor de IL-4, IL-5 e IL-13), que recruta eosinófilos e estimula a troca de classe para IgE contra helmintos e em alergias.',
          ],
          takeaway: 'Th1 (T-bet, IFN-γ) combate patógenos intracelulares; Th2 (GATA-3, IL-4/5/13) atua contra helmintos e em processos alérgicos.',
          diagram: 'immune',
        },
        {
          id: 'th17-and-tfh',
          title: 'Linhagens Th17 e T foliculares auxiliares (Tfh)',
          paragraphs: [
            'A combinação de TGF-β, IL-6 e IL-23 polariza linfócitos T auxiliares para o perfil Th17, orquestrado pelo fator de transcrição RORγt. Células Th17 produzem IL-17 e IL-22, promovendo recrutamento neutrofílico maciço e reforçando barreiras epiteliais contra fungos (Candida) e bactérias extracelulares.',
            'As células T foliculares auxiliares (Tfh), dependentes do fator Bcl-6 e produtoras de IL-21, migram para os centros germinativos dos linfonodos, fornecendo sinais indispensáveis para sobrevivência, maturação de afinidade e troca de isotipo em linfócitos B.',
          ],
          takeaway: 'Th17 (RORγt, IL-17) recruta neutrófilos contra fungos; Tfh (Bcl-6, IL-21) guia a maturação de linfócitos B em centros germinativos.',
          diagram: 'inflammation',
        },
        {
          id: 'treg-suppression',
          title: 'Linfócitos T reguladores (Treg) e imunossupressão',
          paragraphs: [
            'Linfócitos T reguladores são gerados no timo (tTreg) ou induzidos na periferia por TGF-β (pTreg), expressando constitutivamente a cadeia alfa do receptor de IL-2 (CD25) e o fator de transcrição nuclear FoxP3.',
            'As células Treg impedem autoimunidade e encerram respostas imunes exuberantes mediante o consumo competitivo de IL-2, expressão de CTLA-4 (que inibe ligantes B7 em APCs) e secreção de citocinas anti-inflamatórias potentes (IL-10 e TGF-β). Mutações no gene FOXP3 causam a síndrome IPEX.',
          ],
          takeaway: 'Tregs FoxP3+ mantêm a homeostase imune consumindo IL-2 e secretando IL-10 e TGF-β.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual subpopulação de linfócitos T auxiliares é definida pelo fator de transcrição T-bet e produz interferon-gama (IFN-γ) para a ativação macrofágica contra patógenos intracelulares?',
        options: [
          {
            id: 'th1-tbet-ifngamma-macrophages',
            label: 'Linfócitos Th1 (T-bet+), essenciais na imunidade mediada por células contra patógenos intracelulares',
            explanation: 'Correto: Th1 é induzido por IL-12/IFN-γ ativando T-bet; sua produção de IFN-γ estimula a fagocitose, formação de fagolisossomos e síntese de óxido nítrico por macrófagos.',
          },
          {
            id: 'th2-gata3-il4-helminths',
            label: 'Linfócitos Th2 (GATA-3+), primariamente envolvidos na desgranulação neutrofílica alveolar',
            explanation: 'Incorreto: células Th2 expressam GATA-3 e produzem IL-4, IL-5 e IL-13 para combate a helmintos e ativação de eosinófilos e mastócitos.',
          },
          {
            id: 'th17-rorc-il17-neutrophils',
            label: 'Linfócitos Th17 (RORγt+), mediadores de tolerância clonal estromal tímica',
            explanation: 'Incorreto: células Th17 recrutam neutrófilos para barreiras mucosas contra infecções fúngicas e bacterianas extracelulares.',
          },
          {
            id: 'tfh-bcl6-il21-germinal',
            label: 'Linfócitos T foliculares (Bcl-6+), produtores diretos de grandes quantidades de histamina vasoativa',
            explanation: 'Incorreto: células Tfh localizam-se em centros germinativos auxiliando linfócitos B na síntese de anticorpos de alta afinidade.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How can a single naive CD4+ helper T cell choose whether to transform into a fighter against intracellular mycobacteria, parasitic worms, or invasive fungi?',
      title: 'CD4+ helper T cell subsets: Th1, Th2, Th17, Tfh, and Treg profiles',
      description: 'Analyze master transcription factors, hallmark effector cytokines, and functional roles across CD4+ helper lineages.',
      objective: 'Identify master transcription factors (T-bet, GATA-3, RORγt, Bcl-6, FoxP3) and signature cytokine cascades across CD4+ subsets.',
      stages: [
        {
          id: 'th1-vs-th2',
          title: 'Th1 vs Th2 polarization: intracellular microbes vs helminths',
          paragraphs: [
            'Naive CD4+ T cells (Th0) polarize into specialized effector lineages directed by cytokine signals received during initial antigen presentation by dendritic cells.',
            'IL-12 and IFN-γ signaling upregulates master regulator T-bet, generating the Th1 profile (secreting IFN-γ and IL-2) vital for macrophage activation against intracellular pathogens such as Mycobacterium tuberculosis. Conversely, IL-4 induces GATA-3, establishing Th2 cells (secreting IL-4, IL-5, and IL-13) that activate eosinophils, mast cells, and IgE class-switching against helminth parasites.',
          ],
          takeaway: 'Th1 (T-bet, IFN-γ) clears intracellular pathogens; Th2 (GATA-3, IL-4/5/13) clears helminths and mediates atopic allergy.',
          diagram: 'immune',
        },
        {
          id: 'th17-and-tfh',
          title: 'Th17 and follicular helper (Tfh) specialized lineages',
          paragraphs: [
            'Synergistic stimulation by TGF-β, IL-6, and IL-23 commands Th17 differentiation governed by RORγt. Th17 effectors release IL-17 and IL-22, orchestrating vigorous neutrophil mobilization and epithelial antimicrobial peptide synthesis against extracellular bacteria and fungal pathogens (Candida albicans).',
            'T follicular helper (Tfh) cells express Bcl-6 and secrete IL-21, homing to B-cell follicles within secondary lymphoid organs to deliver cognate survival and selection signals essential for germinal center somatic hypermutation and affinity maturation.',
          ],
          takeaway: 'Th17 (RORγt, IL-17) drives neutrophil mucosal defense; Tfh (Bcl-6, IL-21) directs germinal center B-cell affinity maturation.',
          diagram: 'inflammation',
        },
        {
          id: 'treg-suppression',
          title: 'Regulatory T cells (Tregs) and peripheral immunosuppression',
          paragraphs: [
            'Regulatory T cells develop in the thymus (tTreg) or differentiate in the periphery under TGF-β (pTreg), characteristically displaying high-affinity IL-2 receptor alpha (CD25) and nuclear transcription factor FoxP3.',
            'Tregs extinguish runaway inflammation and maintain self-tolerance through competitive IL-2 cytokine consumption, CTLA-4-mediated trans-endocytosis of APC costimulatory ligands (CD80/CD86), and secretion of anti-inflammatory cytokines IL-10 and TGF-β. Inactivating mutations in FOXP3 produce the multiorgan fatal IPEX syndrome.',
          ],
          takeaway: 'FoxP3+ Tregs extinguish immune responses and prevent autoimmunity via IL-2 consumption, CTLA-4, IL-10, and TGF-β.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which CD4+ helper T cell subset is governed by master transcription factor T-bet and secretes interferon-gamma (IFN-γ) to activate macrophages against intracellular pathogens?',
        options: [
          {
            id: 'th1-tbet-ifngamma-macrophages',
            label: 'Th1 lymphocytes (T-bet+), orchestrating cell-mediated immunity against intracellular microbes',
            explanation: 'Correct: Th1 cells require IL-12/IFN-γ to drive T-bet expression; secreted IFN-γ powerfully activates macrophage phagolysosomal maturation and inducible nitric oxide synthase.',
          },
          {
            id: 'th2-gata3-il4-helminths',
            label: 'Th2 lymphocytes (GATA-3+), serving as primary drivers of acute neutrophil alveolitis',
            explanation: 'Incorrect: Th2 cells express GATA-3 and release IL-4, IL-5, and IL-13 to clear helminthic infestations and recruit eosinophils.',
          },
          {
            id: 'th17-rorc-il17-neutrophils',
            label: 'Th17 lymphocytes (RORγt+), operating as central stromal mediators of thymic tolerance',
            explanation: 'Incorrect: Th17 cells mobilize neutrophils to epithelial barriers to defend against fungal and extracellular bacterial challenges.',
          },
          {
            id: 'tfh-bcl6-il21-germinal',
            label: 'T follicular helper cells (Bcl-6+), operating as direct secretors of systemic vasoactive histamine',
            explanation: 'Incorrect: Tfh cells localize to lymphoid germinal centers to support B-cell affinity maturation and memory conversion.',
          },
        ],
      },
    },
  },
});

export const immunologyVaccinesMucosaLesson = lessonSchema.parse({
  id: 'immunology-vaccines-mucosa',
  revision: 1,
  questionId: 'immunology-vaccines-mucosa-q1',
  correctOptionId: 'hyperacute-rejection-preformed-antibodies',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch18-vaccines',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/18-2',
      section: 'Chapter 18 · Practical Applications of Immunology: Vaccines and Transplant Immunology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Imunologia',
      hook: 'Como um rim transplantado pode sofrer trombose e necrose hemorrágica em minutos antes mesmo do cirurgião fechar a pele?',
      title: 'Imunidade de mucosas, plataformas de vacinas e rejeição de enxertos',
      description: 'Explore o transporte da IgA secretora no MALT, os mecanismos imunológicos das vacinas e a rejeição hiperaguda, aguda e crônica.',
      objective: 'Explicar a síntese e transporte de IgA secretora, diferenciar plataformas vacinais e correlacionar os mecanismos imunológicos das rejeições de transplantes.',
      stages: [
        {
          id: 'mucosal-iga-malt',
          title: 'Sistema imune de mucosas (MALT) e IgA secretora dimérica',
          paragraphs: [
            'O tecido linfoide associado a mucosas (MALT, incluindo placas de Peyer intestinais) protege mais de 400 m² de superfícies epiteliais. Células M especializadas capturam antígenos luminais e os entregam a células dendríticas subepiteliais.',
            'Plasmócitos locais sintetizam IgA dimérica ligada por uma cadeia J. Essa molécula liga-se ao receptor de imunoglobulina polimérica (pIgR) na face basolateral dos enterócitos, sofre transcitose e é clivada no lúmen, retendo o componente secretor que a protege de proteases digestivas.',
          ],
          takeaway: 'A IgA dimérica com componente secretor resiste a proteases e neutraliza patógenos no lúmen mucosal.',
          diagram: 'intestine',
        },
        {
          id: 'vaccine-platforms-adjuvants',
          title: 'Plataformas vacinais e geração de memória imune',
          paragraphs: [
            'As vacinas mimetizam a infecção primária sem gerar patologia grave, induzindo anticorpos neutralizantes e células T e B de memória duradouras.',
            'Vacinas vivas atenuadas (sarampo, febre amarela) simulam a replicação intracelular induzindo fortes respostas celulares T CD8+ e humorais; vacinas inativadas ou de subunidades frequentemente exigem adjuvantes (como sais de alumínio) para ativar PRRs da imunidade inata e potencializar a coestimulação necessária para uma resposta imune protetora.',
          ],
          takeaway: 'Vacinas vivas atenuadas induzem forte imunidade celular T CD8+ e humoral; adjuvantes ativam PRRs em vacinas de subunidades.',
          diagram: 'immune',
        },
        {
          id: 'transplant-rejection',
          title: 'Imunologia dos transplantes: hiperaguda, aguda e crônica',
          paragraphs: [
            'A rejeição hiperaguda ocorre em minutos a horas, causada por anticorpos pré-formados no receptor (devido a transfusões prévias, gestações ou transplantes anteriores) contra antígenos HLA ou ABO endoteliais do doador, ativando complemento e trombose intravascular maciça.',
            'A rejeição celular aguda ocorre semanas após o enxerto, mediada por linfócitos T alorreativos que atacam o parênquima do enxerto. A rejeição crônica progride ao longo de meses a anos com proliferação fibrointimal vascular e fibrose tecidual irreversível.',
          ],
          takeaway: 'Rejeição hiperaguda = anticorpos pré-formados e trombose imediata; aguda = linfócitos T; crônica = fibrose vascular.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo imunológico caracteriza a rejeição hiperaguda de um aloenxerto renal ocorrendo minutos após o desclampeamento vascular?',
        options: [
          {
            id: 'hyperacute-rejection-preformed-antibodies',
            label: 'Ligação de anticorpos pré-formados anti-doador ao endotélio do enxerto, ativação do complemento e trombose microvascular maciça',
            explanation: 'Correto: a rejeição hiperaguda decorre de anticorpos pré-existentes contra antígenos ABO ou HLA endoteliais, ativando a cascata clássica do complemento com necrose hemorrágica imediata do enxerto.',
          },
          {
            id: 'acute-tcell-tubulitis',
            label: 'Infiltração intersticial tardia por linfócitos T CD8+ gerando tubulite renal após seis meses',
            explanation: 'Incorreto: tubulite linfocitária mediada por células T caracteriza a rejeição celular aguda, que ocorre dias a semanas após o transplante.',
          },
          {
            id: 'chronic-graft-fibrosis',
            label: 'Endarterite obliterante fibrointimal progressiva mediada por citocinas ao longo de anos',
            explanation: 'Incorreto: proliferação fibrointimal obliterativa e esclerose parenquimatosa lenta caracterizam a rejeição crônica do enxerto.',
          },
          {
            id: 'gvhd-donor-tcells',
            label: 'Ataque de linfócitos T imunocompetentes do doador contra o epitélio intestinal do receptor',
            explanation: 'Incorreto: a doença do enxerto contra o hospedeiro (GVHD) ocorre tipicamente em transplantes de medula óssea, não em transplantes de rim isolados.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How can a freshly transplanted renal allograft turn cyanotic, thrombosed, and necrotic within minutes before surgical skin closure?',
      title: 'Mucosal immunity, vaccine modalities, and allograft rejection',
      description: 'Explore secretory IgA biology in MALT, modern vaccine mechanisms, and hyperacute, acute, and chronic graft rejections.',
      objective: 'Explain dimeric secretory IgA transcytosis, differentiate vaccine platforms, and contrast hyperacute, acute, and chronic transplant rejection.',
      stages: [
        {
          id: 'mucosal-iga-malt',
          title: 'Mucosal lymphoid system (MALT) and dimeric secretory IgA',
          paragraphs: [
            'Mucosa-associated lymphoid tissue (MALT, prominently gut Peyer patches) defends massive external surfaces. Specialized microfold (M) cells sample luminal antigens via pinocytosis to deliver intact pathogens directly to subepithelial dendritic cells.',
            'Lamina propria plasma cells synthesize dimeric IgA linked covalently by a joining (J) chain. This binds polymeric immunoglobulin receptors (pIgR) on the basolateral surface of enterocytes, undergoing vesicular transcytosis; apical cleavage releases the secretory component, shielding IgA from intestinal proteolysis.',
          ],
          takeaway: 'Dimeric IgA carrying the protective secretory component resists digestion to neutralize luminal pathogens.',
          diagram: 'intestine',
        },
        {
          id: 'vaccine-platforms-adjuvants',
          title: 'Vaccine platforms and immunological memory induction',
          paragraphs: [
            'Vaccines emulate primary infectious exposure without precipitating disease, driving long-lived memory B and T cells and high-affinity neutralizing antibodies.',
            'Live-attenuated vaccines (measles, yellow fever) replicate intracellularly to stimulate robust cytotoxic CD8+ T-cell and humoral responses; subunit or recombinant vaccines often require adjuvants (such as aluminum salts) to trigger innate PRRs and provide essential costimulatory signals.',
          ],
          takeaway: 'Live-attenuated vaccines yield durable CD8+ and humoral memory; subunit platforms require innate adjuvant PRR stimulation.',
          diagram: 'immune',
        },
        {
          id: 'transplant-rejection',
          title: 'Allograft rejection immunology: hyperacute, acute, and chronic',
          paragraphs: [
            'Hyperacute rejection strikes within minutes to hours, triggered by recipient preformed antidonor antibodies (from multiparity, previous transfusions, or earlier grafts) targeting donor ABO or HLA endothelial antigens, unleashing complement and catastrophic microvascular thrombosis.',
            'Acute cellular rejection develops weeks post-engraftment, spearheaded by recipient alloreactive T lymphocytes infiltrating graft parenchyma. Chronic rejection smolders over months to years via smooth muscle proliferation, intimal fibroelastosis, and organ sclerosis.',
          ],
          takeaway: 'Hyperacute = preformed antibodies and rapid thrombosis; acute = T-cell parenchymal attack; chronic = vascular fibrointimal sclerosis.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which immunological mechanism drives hyperacute renal allograft rejection occurring within minutes of intraoperative vascular reperfusion?',
        options: [
          {
            id: 'hyperacute-rejection-preformed-antibodies',
            label: 'Binding of preformed antidonor antibodies to graft endothelium triggering complement-mediated microvascular thrombosis',
            explanation: 'Correct: hyperacute rejection is mediated by pre-existing circulating antibodies against donor HLA or ABO antigens, initiating classical complement activation, diffuse capillary thrombosis, and immediate ischemic necrosis.',
          },
          {
            id: 'acute-tcell-tubulitis',
            label: 'Late-onset interstitial infiltration of CD8+ cytotoxic T cells producing renal tubulitis at six months',
            explanation: 'Incorrect: T-cell mediated tubulitis and endarteritis describe acute cellular allograft rejection occurring weeks after transplantation.',
          },
          {
            id: 'chronic-graft-fibrosis',
            label: 'Progressive cytokine-driven fibrointimal obliterative vasculopathy maturing over multiple years',
            explanation: 'Incorrect: slow fibrointimal vascular remodeling and interstitial fibrosis represent chronic allograft nephropathy.',
          },
          {
            id: 'gvhd-donor-tcells',
            label: 'Attack by immunocompetent donor T lymphocytes against recipient gut and skin epithelium',
            explanation: 'Incorrect: graft-versus-host disease (GVHD) occurs primarily following allogeneic hematopoietic stem cell transplantation.',
          },
        ],
      },
    },
  },
});

export const immunologyAutoimmunityDeficiencyLesson = lessonSchema.parse({
  id: 'immunology-autoimmunity-deficiency',
  revision: 1,
  questionId: 'immunology-autoimmunity-deficiency-q1',
  correctOptionId: 'bruton-btk-agammaglobulinemia',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch19-deficiency',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/19-3',
      section: 'Chapter 19 · Diseases of the Immune System: Autoimmune Diseases and Immunodeficiencies',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Imunologia',
      hook: 'Como uma única mutação em uma tirosina quinase pode deixar uma criança sem nenhum anticorpo ou plasmócito no corpo inteiro?',
      title: 'Autoimunidade e imunodeficiências congênitas e adquiridas',
      description: 'Analise a quebra de tolerância autoimune, as imunodeficiências primárias (SCID, Bruton, DiGeorge) e o ciclo patológico do HIV.',
      objective: 'Distinguir a fisiopatologia da quebra de autotolerância, identificar os defeitos celulares nas imunodeficiências primárias e detalhar o tropismo do HIV por células CD4+.',
      stages: [
        {
          id: 'autoimmune-pathogenesis',
          title: 'Patogênese da autoimunidade e alelos HLA',
          paragraphs: [
            'As doenças autoimunes decorrem da perda sustentada dos mecanismos de tolerância central e periférica, permitindo a ativação e proliferação de clones autorreativos de linfócitos T e B.',
            'Fatores genéticos exercem papel predisponente relevante, destacando-se associações com alelos específicos do complexo MHC/HLA humano: HLA-B27 associa-se fortemente a espondiloartropatias soronegativas (espondilite anquilosante), enquanto HLA-DR4 associa-se à artrite reumatoide.',
          ],
          takeaway: 'Doenças autoimunes combinam perda de autotolerância com predisposição por alelos HLA (ex.: HLA-B27, HLA-DR4).',
          diagram: 'immune',
        },
        {
          id: 'primary-immunodeficiencies',
          title: 'Imunodeficiências congênitas primárias: SCID, Bruton e DiGeorge',
          paragraphs: [
            'A imunodeficiência combinada grave (SCID) resulta de mutações na cadeia gama comum (IL-2Rγ ligada ao X) ou na enzima adenosina desaminase (ADA), levando a ausência de linfócitos T e disfunção de linfócitos B.',
            'A agamaglobulinemia ligada ao X de Bruton decorre de mutação no gene BTK (tirosina quinase de Bruton), que bloqueia o desenvolvimento de pró-B em pré-B na medula óssea, resultando em ausência total de linfócitos B maduros e plasmócitos circulantes com infecções bacterianas sinopulmonares de repetição após o desmame.',
          ],
          takeaway: 'Agamaglobulinemia de Bruton (mutação no gene BTK) impede a maturação de linfócitos B, zerando todas as imunoglobulinas.',
          diagram: 'dna',
        },
        {
          id: 'hiv-acquired-immunodeficiency',
          title: 'Imunodeficiência adquirida (HIV/AIDS): fisiopatologia',
          paragraphs: [
            'O vírus da imunodeficiência humana (HIV) liga sua glicoproteína de envelope gp120 à molécula CD4 em linfócitos T auxiliares, macrófagos e células dendríticas, interagindo com os correceptores CCR5 (tropismo macrofágico inicial) ou CXCR4 (linfotropismo tardio).',
            'A integração viral no genoma do hospedeiro causa infecção crônica produtiva, exaustão clonal e depleção profunda e progressiva de linfócitos T CD4+. Quando a contagem cai abaixo de 200 células/mm³, estabelece-se a síndrome da imunodeficiência adquirida (AIDS) com infecções oportunistas graves.',
          ],
          takeaway: 'O HIV infecta células CD4+ via correceptores CCR5/CXCR4, levando à depleção profunda e infecções oportunistas.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual defeito genético e celular primário define a agamaglobulinemia ligada ao X de Bruton em pacientes pediátricos masculinos?',
        options: [
          {
            id: 'bruton-btk-agammaglobulinemia',
            label: 'Mutação na tirosina quinase de Bruton (BTK), impedindo a maturação de linfócitos B e zerando imunoglobulinas',
            explanation: 'Correto: a mutação no gene BTK no cromossomo X bloqueia o sinal de transdução do pré-BCR, interrompendo a transição de pró-B para pré-B na medula óssea, resultando em ausência de linfócitos B CD19+/CD20+ maduros.',
          },
          {
            id: 'scid-ada-deficiency',
            label: 'Agenesia da terceira e quarta bolsas faríngeas causando aplasia tímica e tetania neonatal',
            explanation: 'Incorreto: aplasia tímica e de paratireoides por anomalia de bolsas faríngeas definem a síndrome de DiGeorge (deleção 22q11.2).',
          },
          {
            id: 'digeorge-pharyngeal-aplasia',
            label: 'Deficiência congênita isolada de C1 inibidor esterase com angioedema episódico',
            explanation: 'Incorreto: a deficiência de C1 inibidor causa angioedema hereditário por excesso de bradicinina, não agamaglobulinemia de Bruton.',
          },
          {
            id: 'cgv-nadph-oxidase-defect',
            label: 'Defeito na enzima NADPH oxidase fagocítica gerando granulomas cutâneos crônicos',
            explanation: 'Incorreto: a disfunção da NADPH oxidase fagocítica causa a doença granulomatosa crônica (DGC), que afeta o burst oxidativo de neutrófilos, não a maturação linfocitária B.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'How can a single mutation in an intracellular tyrosine kinase leave a young boy without a single mature B cell or antibody molecule in his entire body?',
      title: 'Autoimmunity, primary immunodeficiencies, and acquired immunodeficiency',
      description: 'Analyze loss of self-tolerance, primary immunodeficiency disorders (SCID, Bruton, DiGeorge), and HIV cellular pathogenesis.',
      objective: 'Distinguish autoimmune pathophysiologic drivers, identify cell-arrest defects in primary immunodeficiencies, and detail HIV coreceptor tropism.',
      stages: [
        {
          id: 'autoimmune-pathogenesis',
          title: 'Autoimmune pathogenesis and HLA risk associations',
          paragraphs: [
            'Autoimmune diseases erupt following persistent failure of central and peripheral tolerance checkpoints, enabling clonal expansion of pathogenic autoreactive T and B lymphocytes.',
            'Underlying genetic susceptibility strongly maps to human leukocyte antigen (HLA) major histocompatibility loci: HLA-B27 confers an overwhelming relative risk for ankylosing spondylitis, whereas HLA-DR4 enriches risk for rheumatoid arthritis.',
          ],
          takeaway: 'Autoimmunity merges tolerance breakdown with predisposing HLA genotypes (e.g., HLA-B27, HLA-DR4).',
          diagram: 'immune',
        },
        {
          id: 'primary-immunodeficiencies',
          title: 'Primary immunodeficiency syndromes: SCID, Bruton, and DiGeorge',
          paragraphs: [
            'Severe combined immunodeficiency (SCID) arises from mutations in the shared cytokine common gamma chain (IL-2Rγ, X-linked) or adenosine deaminase (ADA), devastating T-cell survival and secondary B-cell function.',
            'X-linked Bruton agammaglobulinemia stems from mutations in Bruton tyrosine kinase (BTK), which halts pro-B to pre-B cell transition in bone marrow. Patients present around 6 months with undetectable peripheral CD19+/CD20+ B cells, markedly depleted all immunoglobulin classes, and recurrent encapsulated sinopulmonary infections.',
          ],
          takeaway: 'Bruton agammaglobulinemia (BTK mutation) blocks B-cell ontogeny, yielding absent mature B cells and total agammaglobulinemia.',
          diagram: 'dna',
        },
        {
          id: 'hiv-acquired-immunodeficiency',
          title: 'Acquired immunodeficiency (HIV/AIDS) cellular pathogenesis',
          paragraphs: [
            'Human immunodeficiency virus (HIV) targets host cells by docking viral envelope glycoprotein gp120 onto CD4 receptors, utilizing obligate coreceptors CCR5 (macrophage-tropic R5 strains in early transmission) or CXCR4 (T-cell-tropic X4 strains in late progression).',
            'Genomic proviral integration establishes chronic productive infection and progressive cytopathic killing of CD4+ T helper cells. When counts plummet below 200 cells/mm³, clinical AIDS manifests with opportunistic infections.',
          ],
          takeaway: 'HIV binds CD4 via CCR5 or CXCR4 coreceptors, culminating in CD4+ depletion and clinical AIDS.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which genetic mutation and developmental cellular arrest defines X-linked Bruton agammaglobulinemia in pediatric male patients?',
        options: [
          {
            id: 'bruton-btk-agammaglobulinemia',
            label: 'Mutation in Bruton tyrosine kinase (BTK), arresting B-cell differentiation at the pro-B stage and extinguishing circulating antibodies',
            explanation: 'Correct: BTK mutations on the X chromosome block pre-B-cell receptor signaling, preventing pro-B to pre-B progression in the marrow, leading to total absence of mature B cells and circulating immunoglobulins.',
          },
          {
            id: 'scid-ada-deficiency',
            label: 'Agenesis of the third and fourth pharyngeal pouches producing thymic hypoplasia and neonatal hypocalcemia',
            explanation: 'Incorrect: pharyngeal pouch failure causes DiGeorge syndrome (22q11.2 deletion), characterized by thymic and parathyroid hypoplasia.',
          },
          {
            id: 'digeorge-pharyngeal-aplasia',
            label: 'Congenital C1 esterase inhibitor deficiency generating uninhibited bradykinin-mediated mucosal edema',
            explanation: 'Incorrect: C1 esterase inhibitor deficiency produces hereditary angioedema through bradykinin hyperproduction, not humoral immunodeficiency.',
          },
          {
            id: 'cgv-nadph-oxidase-defect',
            label: 'Phagocyte NADPH oxidase deficiency abolishing superoxide radical generation during respiratory bursts',
            explanation: 'Incorrect: NADPH oxidase subunit defects cause chronic granulomatous disease (CGD), which impairs neutrophil bactericidal killing without altering immunoglobulin levels.',
          },
        ],
      },
    },
  },
});
