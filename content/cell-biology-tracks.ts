import { lessonSchema } from '../src/contracts/learning';

export const cellOrganellesLesson = lessonSchema.parse({
  id: 'cell-organelles',
  revision: 1,
  questionId: 'cell-organelles-secretion',
  correctOptionId: 'golgi-apparatus',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-organelles',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-2-the-cytoplasm-and-cellular-organelles',
      section: 'Chapter 3 · The Cytoplasm and Cellular Organelles',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como as proteínas sintetizadas no interior da célula chegam com precisão cirúrgica ao seu destino de exportação ou degradação?',
      title: 'Organelas e tráfego vesicular: retículo, Golgi e lisossomos',
      description: 'Acompanhe a via secretora celular desde a tradução no retículo rugoso até o endereçamento vesicular pelo aparelho de Golgi.',
      objective: 'Descrever a rota secretora e identificar os papéis do retículo endoplasmático, complexo de Golgi e lisossomos.',
      stages: [
        {
          id: 'endoplasmic-reticulum',
          title: 'Retículo endoplasmático rugoso e liso',
          paragraphs: [
            'O retículo endoplasmático rugoso (RER) possui ribossomos aderidos à sua membrana citosólica e é especializado na síntese e dobramento inicial de proteínas transmembrana e de exportação.',
            'O retículo endoplasmático liso (REL) não possui ribossomos, sendo o principal responsável pela síntese de lipídios e fosfolipídios, detoxificação hepática por citocromo P450 e armazenamento de cálcio intracelular.',
          ],
          takeaway: 'O RER sintetiza proteínas secretoras e o REL sintetiza lipídios e armazena cálcio intracelular.',
          diagram: 'membrane',
        },
        {
          id: 'golgi-sorting',
          title: 'Complexo de Golgi: modificação e empacotamento',
          paragraphs: [
            'Proteínas do RER viajam em vesículas revestidas por COP II até a face cis do complexo de Golgi. Ao atravessarem as cisternas mediais e trans, sofrem glicosilação terminal, sulfatação e fosforilação.',
            'Na rede trans-Golgi, as proteínas modificadas são triadas e empacotadas em vesículas com sinais de endereçamento específicos para a membrana plasmática, grânulos secretores ou lisossomos.',
          ],
          takeaway: 'O aparelho de Golgi modifica, empacota e direciona proteínas para secreção ou para organelas.',
          diagram: 'membrane',
        },
        {
          id: 'lysosomes-peroxisomes',
          title: 'Lisossomos e autofagia',
          paragraphs: [
            'Vesículas contendo hidrolases ácidas com marcador manose-6-fosfato fundem-se com endossomos tardios para formar lisossomos com pH interno ácido (em torno de 4,5 a 5,0), mantido por bombas de H⁺-ATPase.',
            'Os lisossomos degradam partículas endocitadas e organelas danificadas (autofagia), reciclando aminoácidos e nucleotídeos para a célula sem extravasar proteases nocivas.',
          ],
          takeaway: 'Lisossomos degradam macromoléculas em ambiente ácido e reciclam componentes celulares via autofagia.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual organela membranosa recebe proteínas recém-sintetizadas do RER para realizar glicosilação terminal, triagem e empacotamento vesicular?',
        options: [
          {
            id: 'golgi-apparatus',
            label: 'Complexo de Golgi',
            explanation: 'Correto: o aparelho de Golgi recebe proteínas do RER em sua face cis, processa glicanos e as despacha na rede trans.',
          },
          {
            id: 'smooth-er',
            label: 'Retículo endoplasmático liso',
            explanation: 'Incorreto: o REL sintetiza lipídios e esteroides e metaboliza fármacos, não atuando no empacotamento secretor.',
          },
          {
            id: 'ribosome',
            label: 'Ribossomo citosólico livre',
            explanation: 'Incorreto: ribossomos livres sintetizam proteínas que permanecem no citosol, núcleo ou mitocôndrias.',
          },
          {
            id: 'nucleolus',
            label: 'Nucléolo',
            explanation: 'Incorreto: o nucléolo é a estrutura nuclear responsável pela síntese de RNA ribossômico e montagem de subunidades de ribossomos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How do proteins synthesized deep inside the cell navigate with surgical precision toward their destination outside the membrane?',
      title: 'Organelles and vesicular traffic: ER, Golgi, and lysosomes',
      description: 'Trace the secretory pathway from translational translocation in the rough ER to vesicular sorting in the Golgi apparatus.',
      objective: 'Describe the secretory route and identify specialized tasks of the endoplasmic reticulum, Golgi complex, and lysosomes.',
      stages: [
        {
          id: 'endoplasmic-reticulum',
          title: 'Rough and smooth endoplasmic reticulum',
          paragraphs: [
            'The rough endoplasmic reticulum (RER) is studded with cytosolic ribosomes, specializing in co-translational insertion, folding, and initial glycosylation of secretory and transmembrane proteins.',
            'The smooth endoplasmic reticulum (SER) lacks ribosomes, catalyzing lipid and steroid synthesis, cytochrome P450-mediated drug detoxification, and intracellular calcium sequestration.',
          ],
          takeaway: 'RER folds secretory and membrane proteins; SER synthesizes lipids and sequesters intracellular calcium.',
          diagram: 'membrane',
        },
        {
          id: 'golgi-sorting',
          title: 'Golgi apparatus: post-translational processing and sorting',
          paragraphs: [
            'Proteins leave the RER in COPII-coated transport vesicles to enter the cis-Golgi network. Moving toward the trans face, they undergo terminal glycosylation, sulfation, and proteolysis.',
            'At the trans-Golgi network, matured cargo is sorted into destination-specific vesicles targeted for exocytosis, regulated secretory granules, or lysosomal delivery.',
          ],
          takeaway: 'The Golgi apparatus modifies, sorts, and packages macromolecules for targeted secretion or lysosomes.',
          diagram: 'membrane',
        },
        {
          id: 'lysosomes-peroxisomes',
          title: 'Lysosomes and autophagy',
          paragraphs: [
            'Vesicles carrying acid hydrolases tagged with mannose-6-phosphate fuse with late endosomes to generate lysosomes, which maintain an acidic lumen (pH 4.5–5.0) via vacuolar H⁺-ATPases.',
            'Lysosomes digest endocytosed pathogens and worn-out organelles (autophagy), salvaging raw building blocks without leaking destructive proteases into the cytosol.',
          ],
          takeaway: 'Lysosomes digest macromolecules within an acidic lumen and recycle cellular debris via autophagy.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which membranous organelle receives newly synthesized proteins from the RER to execute terminal glycosylation, sorting, and packaging?',
        options: [
          {
            id: 'golgi-apparatus',
            label: 'Golgi apparatus',
            explanation: 'Correct: the Golgi network processes oligosaccharides on cisternal transit and sorts cargo for secretion or lysosomes.',
          },
          {
            id: 'smooth-er',
            label: 'Smooth endoplasmic reticulum',
            explanation: 'Incorrect: the SER synthesizes lipids and steroids and metabolizes xenobiotics rather than packaging secretory proteins.',
          },
          {
            id: 'ribosome',
            label: 'Free cytosolic ribosome',
            explanation: 'Incorrect: free ribosomes synthesize proteins destined for the nucleus, mitochondria, or cytosol.',
          },
          {
            id: 'nucleolus',
            label: 'Nucleolus',
            explanation: 'Incorrect: the nucleolus is a dense subnuclear compartment dedicated to ribosomal RNA transcription and subunit assembly.',
          },
        ],
      },
    },
  },
});

export const cellCycleMitosisLesson = lessonSchema.parse({
  id: 'cell-cycle-mitosis',
  revision: 1,
  questionId: 'cell-cycle-s-phase',
  correctOptionId: 's-phase-dna',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-cycle',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-5-cell-growth-and-division',
      section: 'Chapter 3 · Cell Growth and Division',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como uma célula garante a duplicação perfeita de bilhões de pares de bases de DNA antes de se dividir em duas?',
      title: 'Ciclo celular e mitose: interfase, ciclinas e pontos de checagem',
      description: 'Compreenda a progressão das fases G1, S, G2 e M, e os mecanismos de controle garantidos por ciclinas e CDKs.',
      objective: 'Identificar os eventos moleculares da interfase e reconhecer os pontos de checagem que preservam a integridade genômica.',
      stages: [
        {
          id: 'interphase',
          title: 'Interfase: preparação, síntese de DNA e crescimento',
          paragraphs: [
            'A maior parte da vida celular decorre na interfase, subdividida em G1 (crescimento e síntese proteica), S (replicação semiconservativa completa do DNA nuclear) e G2 (preparação final para divisão).',
            'Durante a fase S, cada cromossomo é duplicado exatamente uma vez, gerando duas cromátides-irmãs idênticas unidas pelo centrômero.',
          ],
          takeaway: 'A fase S da interfase é dedicada à replicação precisa de todo o genoma celular.',
          diagram: 'dna',
        },
        {
          id: 'mitosis-phases',
          title: 'Mitose: segregação equitativa de cromátides',
          paragraphs: [
            'A fase M inclui a mitose — prófase (condensação cromossômica), metáfase (alinhamento na placa equatorial), anáfase (separação das cromátides-irmãs) e telófase (descondensação e reconstituição nuclear).',
            'A citocinese finaliza o processo através de um anel contrátil de actina e miosina que estrangula o citoplasma, gerando duas células filhas geneticamente idênticas.',
          ],
          takeaway: 'A mitose divide o material genético equitativamente, seguida pela citocinese contrátil.',
          diagram: 'dna',
        },
        {
          id: 'checkpoints-cyclins',
          title: 'Pontos de checagem: guardiões do genoma',
          paragraphs: [
            'A progressão pelo ciclo é orquestrada por quinases dependentes de ciclina (CDKs), ativadas transitoriamente por ciclinas regulatórias específicas.',
            'Três pontos de checagem principais (G1/S, G2/M e do fuso na metáfase) monitoram danos ao DNA por vias dependentes de p53 e p21, interrompendo o ciclo para reparo ou disparando apoptose se o dano for irreparável.',
          ],
          takeaway: 'Pontos de checagem coordenados por ciclinas, CDKs e p53 barram a divisão de células com DNA lesado.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento molecular crucial ocorre especificamente durante a fase S (Síntese) da interfase no ciclo celular?',
        options: [
          {
            id: 's-phase-dna',
            label: 'Replicação semiconservativa do DNA cromossômico e duplicação do centrossomo',
            explanation: 'Correto: na fase S a DNA polimerase duplica todo o genoma gerando pares de cromátides-irmãs unidas.',
          },
          {
            id: 'g1-protein-growth',
            label: 'Segregação física de cromátides-irmãs para polos opostos pelo fuso',
            explanation: 'Incorreto: a separação e migração de cromátides-irmãs ocorre durante a anáfase da mitose.',
          },
          {
            id: 'm-chromatid-separation',
            label: 'Despolimerização do envelope nuclear e condensação inicial de cromatina',
            explanation: 'Incorreto: a fragmentação do envelope nuclear e condensação cromossômica iniciam na prófase/prometáfase.',
          },
          {
            id: 'g2-spindle-assembly',
            label: 'Clivagem citoplasmática final mediada pelo anel contrátil de actina',
            explanation: 'Incorreto: o estrangulamento citoplasmático final corresponde à citocinese ao término da telófase.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How does a proliferating cell ensure faithful duplication of billions of DNA base pairs before dividing into two?',
      title: 'Cell cycle and mitosis: interphase, cyclins, and checkpoints',
      description: 'Master cell cycle progression through G1, S, G2, and M phases, guided by cyclin-dependent kinases and checkpoints.',
      objective: 'Identify key molecular events across interphase and understand surveillance checkpoints maintaining genome fidelity.',
      stages: [
        {
          id: 'interphase',
          title: 'Interphase: growth, DNA synthesis, and preparation',
          paragraphs: [
            'Cells spend the majority of their lifespan in interphase, subdivided into G1 (cell growth and active transcription), S (semiconservative DNA replication), and G2 (protein synthesis preparing for division).',
            'During the S phase, each chromosome is replicated exactly once, producing two identical sister chromatids tethered tightly by cohesin complexes at the centromere.',
          ],
          takeaway: 'The S phase of interphase is exclusively dedicated to replicating the complete chromosomal genome.',
          diagram: 'dna',
        },
        {
          id: 'mitosis-phases',
          title: 'Mitosis: equitable chromatid segregation',
          paragraphs: [
            'The M phase comprises mitosis—prophase (chromatin condensation), metaphase (equatorial alignment), anaphase (sister chromatid separation), and telophase (nuclear reassembly).',
            'Cytokinesis concludes cell division as an actomyosin contractile ring pinches the cytoplasm, yielding two genetically identical daughter cells.',
          ],
          takeaway: 'Mitosis accurately partitions duplicated chromosomes followed by actomyosin cytokinesis.',
          diagram: 'dna',
        },
        {
          id: 'checkpoints-cyclins',
          title: 'Surveillance checkpoints and cyclin-CDK engines',
          paragraphs: [
            'Transitions between cycle phases are powered by cyclin-dependent kinases (CDKs) bound to periodically synthesized regulatory cyclins.',
            'Three primary checkpoints (G1/S, G2/M, and the spindle-assembly checkpoint) halt cycle progression via p53 and p21 upon detecting DNA lesions, permitting repair or triggering apoptosis.',
          ],
          takeaway: 'Surveillance checkpoints governed by cyclins, CDKs, and p53 halt division upon detecting genomic damage.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which critical molecular event occurs specifically during the S (Synthesis) phase of interphase?',
        options: [
          {
            id: 's-phase-dna',
            label: 'Semiconservative chromosomal DNA replication and centrosome duplication',
            explanation: 'Correct: during S phase, DNA polymerases replicate the entire nuclear genome into paired sister chromatids.',
          },
          {
            id: 'g1-protein-growth',
            label: 'Physical segregation of sister chromatids to opposite poles by the mitotic spindle',
            explanation: 'Incorrect: physical separation and migration of sister chromatids occurs during mitotic anaphase.',
          },
          {
            id: 'm-chromatid-separation',
            label: 'Nuclear envelope breakdown and initiation of chromatin condensation',
            explanation: 'Incorrect: nuclear envelope breakdown and initial chromosome condensation occur during prophase/prometaphase.',
          },
          {
            id: 'g2-spindle-assembly',
            label: 'Final cytoplasmic furrowing driven by the actomyosin contractile ring',
            explanation: 'Incorrect: cytoplasmic furrowing constitutes cytokinesis following telophase.',
          },
        ],
      },
    },
  },
});

export const cellSignalingLesson = lessonSchema.parse({
  id: 'cell-signaling',
  revision: 1,
  questionId: 'cell-signaling-gpcr',
  correctOptionId: 'camp-second-messenger',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-signaling',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-1-the-cell-membrane',
      section: 'Chapter 3 · Receptors and Membrane Signaling',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como um hormônio circulando em concentrações nanomolares consegue alterar o comportamento de uma célula-alvo em segundos?',
      title: 'Sinalização celular: receptores GPCR e segundos mensageiros',
      description: 'Explore a cascata dos receptores acoplados à proteína G e a geração de segundos mensageiros como AMPc, IP₃ e Ca²⁺.',
      objective: 'Explicar a transdução de sinal mediada por receptores de sete hélices transmembrana e vias efetoras intracelulares.',
      stages: [
        {
          id: 'receptors-ligands',
          title: 'Primeiros mensageiros e tipos de receptores',
          paragraphs: [
            'Hormônios hidrofílicos, neurotransmissores e quimiocinas não cruzam livremente a bicamada lipídica. Eles atuam como primeiros mensageiros ligando-se a receptores na membrana plasmática.',
            'Os receptores acoplados à proteína G (GPCRs) formam a maior superfamília, caracterizada por 7 domínios transmembrana em alfa-hélice conectados a proteínas G triméricas (subunidades alfa, beta e gama).',
          ],
          takeaway: 'GPCRs possuem 7 domínios transmembrana e transmitem sinais extracelulares para proteínas G triméricas.',
          diagram: 'membrane',
        },
        {
          id: 'gpcr-cascade',
          title: 'Troca de nucleotídeo e ativação da proteína G',
          paragraphs: [
            'A ligação do ligante induz mudança conformacional no GPCR, que atua como fator de troca de nucleotídeo de guanina (GEF), fazendo a subunidade alfa liberar GDP e ligar GTP.',
            'A subunidade alfa-GTP dissocia-se do dímero beta-gama para modular enzimas efetoras da membrana, como a adenilato ciclase ou a fosfolipase C (PLC).',
          ],
          takeaway: 'O receptor ligado promove a troca de GDP por GTP na subunidade alfa, ativando enzimas efetoras.',
          diagram: 'membrane',
        },
        {
          id: 'second-messengers',
          title: 'Segundos mensageiros: AMPc, IP₃, DAG e Ca²⁺',
          paragraphs: [
            'A proteína Gs estimula a adenilato ciclase a converter ATP em AMP cíclico (AMPc), que ativa a proteína quinase A (PKA). A proteína Gi inibe essa via.',
            'A proteína Gq ativa a fosfolipase C-beta, que cliva PIP₂ em inositol trisfosfato (IP₃) e diacilglicerol (DAG). O IP₃ abre canais de cálcio no retículo endoplasmático, elevando o Ca²⁺ citosólico.',
          ],
          takeaway: 'Gs eleva AMPc e ativa PKA; Gq gera IP₃ e DAG, mobilizando cálcio intracelular e ativando PKC.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual cascata molecular é disparada quando um ligante ativa um receptor acoplado à proteína G do tipo Gs?',
        options: [
          {
            id: 'camp-second-messenger',
            label: 'Estimulação da adenilato ciclase, aumento dos níveis citosólicos de AMPc e ativação da PKA',
            explanation: 'Correto: a subunidade alfa-s ativa a adenilato ciclase para sintetizar AMPc, ativando a quinase PKA.',
          },
          {
            id: 'direct-dna-cleavage',
            label: 'Translocação direta do receptor para o núcleo para clivar o DNA genômico',
            explanation: 'Incorreto: GPCRs são receptores de superfície transmembrana e não clivam ácidos nucleicos.',
          },
          {
            id: 'extracellular-proteolysis',
            label: 'Ativação de metaloproteinases na matriz extracelular para degradar colágeno',
            explanation: 'Incorreto: a sinalização Gs é intracelular catalisando a conversão de ATP em AMPc.',
          },
          {
            id: 'voltage-gated-repolarization',
            label: 'Fechamento imediato de todos os canais iônicos com repolarização estática',
            explanation: 'Incorreto: a ativação de Gs regula enzimas via fosforilação proteica mediada por PKA.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How does a circulating hormone present at nanomolar concentrations alter target cell function within seconds?',
      title: 'Cell signaling: GPCRs and intracellular second messengers',
      description: 'Explore the G protein-coupled receptor cascade and the rapid mobilization of second messengers like cAMP, IP₃, and Ca²⁺.',
      objective: 'Explain transmembrane signal transduction mediated by GPCRs and downstream intracellular enzymatic cascades.',
      stages: [
        {
          id: 'receptors-ligands',
          title: 'First messengers and transmembrane receptors',
          paragraphs: [
            'Hydrophilic hormones, neurotransmitters, and chemokines cannot freely traverse the hydrophobic lipid bilayer, acting as primary extracellular messengers.',
            'G protein-coupled receptors (GPCRs) constitute the largest receptor superfamily, defined by seven alpha-helical transmembrane passes coupled to heterotrimeric G proteins (alpha, beta, gamma subunits).',
          ],
          takeaway: 'GPCRs possess 7 transmembrane helices that transmit extracellular ligand binding to heterotrimeric G proteins.',
          diagram: 'membrane',
        },
        {
          id: 'gpcr-cascade',
          title: 'Guanine nucleotide exchange and subunit activation',
          paragraphs: [
            'Ligand engagement triggers an allosteric shift that causes the receptor to act as a guanine nucleotide exchange factor (GEF), exchanging GDP for GTP on the G-alpha subunit.',
            'G-alpha-GTP dissociates from the beta-gamma dimer to modulate membrane-bound effector enzymes, including adenylyl cyclase and phospholipase C (PLC).',
          ],
          takeaway: 'Receptor activation drives GDP-to-GTP exchange on G-alpha, freeing it to modulate effector enzymes.',
          diagram: 'membrane',
        },
        {
          id: 'second-messengers',
          title: 'Second messengers: cAMP, IP₃, DAG, and Ca²⁺',
          paragraphs: [
            'Gs stimulates adenylyl cyclase to convert ATP into cyclic AMP (cAMP), which activates protein kinase A (PKA). In contrast, Gi inhibits adenylyl cyclase.',
            'Gq activates phospholipase C-beta, hydrolyzing PIP₂ into inositol trisphosphate (IP₃) and diacylglycerol (DAG). IP₃ releases stored calcium from the ER, elevating cytosolic Ca²⁺.',
          ],
          takeaway: 'Gs elevates cAMP and activates PKA; Gq produces IP₃ and DAG, elevating cytosolic calcium.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which downstream molecular cascade is triggered when a ligand activates a Gs-coupled receptor?',
        options: [
          {
            id: 'camp-second-messenger',
            label: 'Stimulation of adenylyl cyclase, elevated cytosolic cAMP, and protein kinase A (PKA) activation',
            explanation: 'Correct: G-alpha-s stimulates adenylyl cyclase to synthesize second messenger cAMP, activating PKA.',
          },
          {
            id: 'direct-dna-cleavage',
            label: 'Direct migration of the transmembrane receptor into the nucleus to cleave genomic DNA',
            explanation: 'Incorrect: GPCRs remain embedded in the plasma membrane and transduce signals via enzymatic cascades.',
          },
          {
            id: 'extracellular-proteolysis',
            label: 'Activation of matrix metalloproteinases in the interstitial space to digest collagen fibers',
            explanation: 'Incorrect: Gs signaling functions intracellularly through cyclic AMP generation rather than extracellular proteolysis.',
          },
          {
            id: 'voltage-gated-repolarization',
            label: 'Immediate non-specific blockade of all ion channels causing static cellular repolarization',
            explanation: 'Incorrect: Gs-mediated cAMP signaling regulates cellular targets through reversible phosphorylation.',
          },
        ],
      },
    },
  },
});

export const cellApoptosisLesson = lessonSchema.parse({
  id: 'cell-apoptosis',
  revision: 1,
  questionId: 'cell-apoptosis-caspases',
  correctOptionId: 'caspase-activation',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-apoptosis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-5-cell-growth-and-division',
      section: 'Chapter 3 · Programmed Cell Death and Apoptosis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como o organismo elimina células defeituosas ou redundantes de forma limpa, sem provocar inflamação nos tecidos vizinhos?',
      title: 'Apoptose versus necrose: caspases e morte celular programada',
      description: 'Diferencie os mecanismos moleculares da apoptose não inflamatória do colapso lítico desordenado da necrose.',
      objective: 'Comparar apoptose e necrose e identificar a cascata de caspases iniciadoras e executoras na morte programada.',
      stages: [
        {
          id: 'programmed-death',
          title: 'Apoptose: morte celular programada e silenciosa',
          paragraphs: [
            'A apoptose é um processo ordenado de suicídio celular essencial para a embriogênese, renovação tecidual e eliminação de células pré-cancerosas ou infectadas.',
            'A célula encolhe, sua cromatina condensa-se na periferia nuclear (picnose) e sua membrana plasmática sofre brotamento (blebbing), mantendo a integridade osmótica.',
          ],
          takeaway: 'A apoptose é uma morte celular controlada com encolhimento e integridade de membrana preservada.',
          diagram: 'mitochondria',
        },
        {
          id: 'intrinsic-extrinsic',
          title: 'Vias intrínseca (mitocondrial) e extrínseca',
          paragraphs: [
            'A via intrínseca é disparada por dano celular interno que altera o equilíbrio das proteínas da família Bcl-2. Proteínas pró-apoptóticas (Bax/Bak) abrem poros na membrana mitocondrial, liberando citocromo c.',
            'O citocromo c liga-se a Apaf-1 para formar o apoptossomo, que cliva a procaspase-9. A via extrínseca é iniciada por receptores de morte (como Fas/CD95 e TNF-R1), ativando a caspase-8.',
          ],
          takeaway: 'A via intrínseca depende da liberação de citocromo c mitocondrial e ativação da caspase-9.',
          diagram: 'mitochondria',
        },
        {
          id: 'caspases-clearance',
          title: 'Caspases executoras e fagocitose sem inflamação',
          paragraphs: [
            'As caspases iniciadoras (8 e 9) ativam as caspases executoras (3, 6 e 7), que clivam substratos vitais do citoesqueleto e ativam endonucleases que fragmentam o DNA em oligonucleossomos.',
            'A fosfatidilserina migra para a face externa da membrana (sinal "coma-me"), atraindo macrófagos para fagocitar os corpos apoptóticos sem extravasamento citoplasmático e sem inflamação.',
          ],
          takeaway: 'Caspases executoras clivam alvos celulares e macrófagos englobam corpos apoptóticos sem inflamação.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual característica distingue fundamentalmente a apoptose programada da necrose tecidual acidental?',
        options: [
          {
            id: 'caspase-activation',
            label: 'Ativação ordenada de caspases com fragmentação em corpos apoptóticos sem resposta inflamatória',
            explanation: 'Correto: a apoptose preserva membranas em corpos apoptóticos fagocitados silenciosamente, sem causar lise inflamatória.',
          },
          {
            id: 'cell-rupture-inflammation',
            label: 'Ruptura da membrana plasmática com extravasamento citosólico e intensa reação inflamatória',
            explanation: 'Incorreto: o rompimento celular desordenado com lise de membranas e inflamação é a marca registrada da necrose.',
          },
          {
            id: 'loss-of-plasma-membrane',
            label: 'Edema osmótico inicial descontrolado com lise precoce dos lisossomos',
            explanation: 'Incorreto: o edema descontrolado e a perda precoce de integridade da membrana caracterizam a necrose.',
          },
          {
            id: 'random-dna-smear',
            label: 'Fragmentação caótica e aleatória do DNA nuclear em padrão difuso',
            explanation: 'Incorreto: a degradação aleatória do DNA (padrão em borrão) ocorre na necrose; a apoptose gera padrão internucleossômico regular.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How does the human body silently eliminate damaged or redundant cells without provoking destructive tissue inflammation?',
      title: 'Apoptosis versus necrosis: caspases and programmed cell death',
      description: 'Contrast non-inflammatory programmed apoptosis with the catastrophic, lytic collapse of accidental necrosis.',
      objective: 'Compare apoptosis and necrosis and identify initiator and executioner caspase cascades in cell demise.',
      stages: [
        {
          id: 'programmed-death',
          title: 'Apoptosis: silent programmed cell suicide',
          paragraphs: [
            'Apoptosis is an energy-dependent, coordinated suicide program critical for embryonic morphogenesis, immune selection, and clearance of pre-malignant cells.',
            'The apoptotic cell shrinks, chromatin aggregates at the nuclear envelope (pyknosis), and the plasma membrane undergoes surface blebbing while preserving permeability barriers.',
          ],
          takeaway: 'Apoptosis is an orderly, non-inflammatory process characterized by cell shrinkage and intact membranes.',
          diagram: 'mitochondria',
        },
        {
          id: 'intrinsic-extrinsic',
          title: 'Intrinsic (mitochondrial) and extrinsic pathways',
          paragraphs: [
            'The intrinsic pathway responds to internal stress governed by Bcl-2 family proteins. Pro-apoptotic Bax/Bak form outer mitochondrial pores, releasing cytochrome c into the cytosol.',
            'Cytochrome c associates with Apaf-1 to assemble the apoptosome, activating initiator caspase-9. The extrinsic pathway triggers via surface death receptors (Fas/TNF-R1), engaging caspase-8.',
          ],
          takeaway: 'The intrinsic pathway triggers mitochondrial cytochrome c release and caspase-9 activation.',
          diagram: 'mitochondria',
        },
        {
          id: 'caspases-clearance',
          title: 'Executioner caspases and silent macrophage clearance',
          paragraphs: [
            'Initiator caspases cleave executioner caspases (caspase-3, 6, and 7), which digest key cytoskeletal scaffolds and activate endonucleases that cleave DNA into ordered internucleosomal ladders.',
            'Phosphatidylserine flips to the outer membrane leaflet as an "eat-me" signal, recruiting macrophages that swiftly engulf apoptotic bodies without spilling contents or evoking inflammation.',
          ],
          takeaway: 'Executioner caspases cleave cell proteins and macrophages clear apoptotic bodies without inflammation.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which hallmark feature fundamentally distinguishes programmed apoptosis from accidental tissue necrosis?',
        options: [
          {
            id: 'caspase-activation',
            label: 'Orderly caspase activation and apoptotic body formation cleared without inciting inflammation',
            explanation: 'Correct: apoptosis compartmentalizes cellular debris within membrane-bound apoptotic bodies cleared silently by phagocytes.',
          },
          {
            id: 'cell-rupture-inflammation',
            label: 'Catastrophic plasma membrane rupture releasing cytosolic enzymes and driving severe inflammation',
            explanation: 'Incorrect: uncontrolled cell membrane lysis with massive leak of intracellular antigens characterizes necrosis.',
          },
          {
            id: 'loss-of-plasma-membrane',
            label: 'Unchecked osmotic swelling with early lysosomal rupture and cellular ballooning',
            explanation: 'Incorrect: early osmotic swelling (oncosis) and lysosomal rupture are diagnostic features of necrotic death.',
          },
          {
            id: 'random-dna-smear',
            label: 'Chaotic, non-specific nuclear DNA disintegration appearing as a continuous smear on gel electrophoresis',
            explanation: 'Incorrect: random DNA degradation into a smear occurs in necrosis; apoptosis produces discrete internucleosomal fragments.',
          },
        ],
      },
    },
  },
});
