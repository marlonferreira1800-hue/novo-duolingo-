import { lessonSchema } from '../src/contracts/learning';

export const microbiologyGramStainLesson = lessonSchema.parse({
  id: 'microbiology-gram-stain',
  revision: 1,
  questionId: 'microbiology-gram-lps',
  correctOptionId: 'gram-negative-lps-outer-membrane',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch3-cell-wall',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/3-3',
      section: 'Chapter 3 · Unique Characteristics of Prokaryotic Cells: Cell Walls',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Microbiologia',
      hook: 'Por que algumas bactérias ficam roxas e outras cor-de-rosa sob o microscópio após o mesmo procedimento de coloração?',
      title: 'Parede celular bacteriana e coloração de Gram',
      description: 'Entenda a estrutura da parede celular de bactérias Gram-positivas e Gram-negativas e o papel do LPS.',
      objective: 'Diferenciar a espessa camada de peptideoglicano das Gram-positivas da membrana externa com lipopolissacarídeo (LPS) das Gram-negativas.',
      stages: [
        {
          id: 'gram-positive-peptidoglycan',
          title: 'Bactérias Gram-positivas: peptideoglicano espesso',
          paragraphs: [
            'Bactérias Gram-positivas possuem uma parede celular espessa composta por múltiplas camadas densas de peptideoglicano (mureína), associada a ácidos teicoicos e lipoteicoicos.',
            'Essa rede espessa e entrecruzada retém fortemente o complexo cristal violeta-iodo mesmo após a lavagem com álcool-acetona, corando-as de roxo.',
          ],
          takeaway: 'Gram-positivas = parede espessa de peptideoglicano com ácidos teicoicos, retêm cristal violeta (roxas).',
          diagram: 'microbe',
        },
        {
          id: 'gram-negative-lps',
          title: 'Bactérias Gram-negativas: membrana externa e LPS',
          paragraphs: [
            'Bactérias Gram-negativas possuem uma camada fina de peptideoglicano no espaço periplasmático, recoberta por uma bicamada assimétrica: a membrana externa.',
            'A lâmina externa dessa membrana é rica em lipopolissacarídeo (LPS), composto por antígeno O, polissacarídeo central e lípido A, potente endotoxina que deflagra choque séptico.',
          ],
          takeaway: 'Gram-negativas = camada fina de peptideoglicano + membrana externa rica em LPS (endotoxina).',
          diagram: 'microbe',
        },
        {
          id: 'staining-mechanism',
          title: 'Mecanismo diferencial da coloração de Gram',
          paragraphs: [
            'O solvente descolorante (álcool-acetona) dissolve os lipídios da membrana externa das Gram-negativas, permitindo a eluição do cristal violeta.',
            'As bactérias Gram-negativas descoradas assumem então o corante de contraste (safranina ou fucsina), tornando-se visíveis em tom rosa ou vermelho.',
          ],
          takeaway: 'Gram-positivas permanecem roxas; Gram-negativas descoram e adquirem cor rósea pelo contracorante.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual componente estrutural é característico do envoltório celular das bactérias Gram-negativas e atua como uma potente endotoxina indutora de choque?',
        options: [
          {
            id: 'gram-negative-lps-outer-membrane',
            label: 'Lipopolissacarídeo (LPS) contendo lípido A na membrana externa',
            explanation: 'Correto: a membrana externa das bactérias Gram-negativas contém LPS, cujo componente lípido A desencadeia febre, vasodilatação intensa e choque endotóxico.',
          },
          {
            id: 'gram-positive-lps-capsule',
            label: 'Ácido lipoteicoico ancorado na membrana citoplasmática Gram-positiva',
            explanation: 'Incorreto: ácidos lipoteicoicos estão presentes em Gram-positivas, mas não constituem o lipopolissacarídeo (LPS) clássico com endotoxina.',
          },
          {
            id: 'gram-negative-thick-peptidoglycan',
            label: 'Camada de peptideoglicano multiextensa com retenção de cristal violeta',
            explanation: 'Incorreto: a camada espessa de peptideoglicano que retém o cristal violeta é privativa das bactérias Gram-positivas.',
          },
          {
            id: 'gram-positive-periplasmic-lps',
            label: 'Colesterol esterificado associado à cadeia de transporte de elétrons',
            explanation: 'Incorreto: bactérias não contêm colesterol em suas paredes celulares normais; o LPS é um glicolipídio exclusivo de procariontes Gram-negativos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'Why do some bacterial species appear deep purple and others light pink under the light microscope following the same stain?',
      title: 'Bacterial cell wall and Gram stain',
      description: 'Examine cell wall architecture in Gram-positive and Gram-negative bacteria and the role of endotoxic LPS.',
      objective: 'Distinguish the thick peptidoglycan meshwork of Gram-positive bacteria from the lipid-rich outer membrane carrying LPS in Gram-negative bacteria.',
      stages: [
        {
          id: 'gram-positive-peptidoglycan',
          title: 'Gram-positive bacteria: thick peptidoglycan layer',
          paragraphs: [
            'Gram-positive bacteria have a robust cell wall formed by multiple densely cross-linked layers of peptidoglycan (murein) embedded with teichoic and lipoteichoic acids.',
            'This rigid lattice traps the crystal violet-iodine mordant complex even during decolorization with ethanol-acetone, staining cells deep purple.',
          ],
          takeaway: 'Gram-positive = thick peptidoglycan with teichoic acids, retains crystal violet (purple).',
          diagram: 'microbe',
        },
        {
          id: 'gram-negative-lps',
          title: 'Gram-negative bacteria: outer membrane and LPS',
          paragraphs: [
            'Gram-negative bacteria feature a slender peptidoglycan layer nestled within the periplasmic space, encased by an asymmetric outer lipid membrane.',
            'The outer leaflet is studded with lipopolysaccharide (LPS), composed of O-antigen, core polysaccharide, and lipid A, a potent endotoxin driving septic shock.',
          ],
          takeaway: 'Gram-negative = thin peptidoglycan + outer membrane rich in LPS (lipid A endotoxin).',
          diagram: 'microbe',
        },
        {
          id: 'staining-mechanism',
          title: 'Differential mechanism of the Gram stain',
          paragraphs: [
            'The ethanol-acetone decolorizer dissolves lipids from the outer membrane of Gram-negative cells and leaches out the crystal violet dye.',
            'The now-decolorized Gram-negative cells pick up the secondary counterstain (safranin or basic fuchsin), rendering them visible in pink or light red.',
          ],
          takeaway: 'Gram-positive retain primary purple stain; Gram-negative decolorize and take up pink counterstain.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which architectural component is unique to the cell envelope of Gram-negative bacteria and functions as a potent endotoxin driving vascular shock?',
        options: [
          {
            id: 'gram-negative-lps-outer-membrane',
            label: 'Lipopolysaccharide (LPS) featuring lipid A in the outer membrane leaflet',
            explanation: 'Correct: the Gram-negative outer membrane contains LPS, whose lipid A moiety triggers fever, profound vasodilation, and endotoxic shock.',
          },
          {
            id: 'gram-positive-lps-capsule',
            label: 'Lipoteichoic acid anchored into the single Gram-positive cytoplasmic membrane',
            explanation: 'Incorrect: lipoteichoic acids are found in Gram-positive envelopes, not representing classic Gram-negative lipopolysaccharide.',
          },
          {
            id: 'gram-negative-thick-peptidoglycan',
            label: 'Multi-layered peptidoglycan lattice retaining crystal violet upon ethanol wash',
            explanation: 'Incorrect: the multi-layered peptidoglycan wall that retains crystal violet is characteristic of Gram-positive organisms.',
          },
          {
            id: 'gram-positive-periplasmic-lps',
            label: 'Esterified cholesterol associated with the bacterial electron transport chain',
            explanation: 'Incorrect: typical bacteria do not contain membrane cholesterol; LPS is a glycolipid unique to Gram-negative prokaryotes.',
          },
        ],
      },
    },
  },
});

export const microbiologyBacterialGeneticsLesson = lessonSchema.parse({
  id: 'microbiology-bacterial-genetics',
  revision: 1,
  questionId: 'microbiology-genetics-conjugation',
  correctOptionId: 'conjugation-pilus-transfer',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch12-transfer',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/12-2',
      section: 'Chapter 12 · Mechanisms of Microbial Genetics: How Asexual Prokaryotes Achieve Genetic Diversity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como uma única bactéria resistente em um hospital consegue transferir essa defesa para espécies completamente diferentes?',
      title: 'Genética bacteriana e resistência a antibióticos',
      description: 'Compreenda a transferência horizontal de genes (transformação, transdução e conjugação) e a disseminação de plasmídeos de resistência.',
      objective: 'Diferenciar os três modos de transferência genética horizontal e explicar a conjugação por plasmídeos na disseminação da resistência.',
      stages: [
        {
          id: 'transformation-transduction',
          title: 'Transformação e transdução bacteriana',
          paragraphs: [
            'Bactérias geram diversidade genética por transferência horizontal. Na transformação, a bactéria capta DNA nu livre do ambiente aquoso circundante.',
            'Na transdução, um bacteriófago (vírus bacteriano) empacota acidentalmente fragmentos do DNA do hospedeiro anterior e os injeta em uma nova bactéria receptora.',
          ],
          takeaway: 'Transformação capta DNA livre do meio; transdução utiliza um bacteriófago como vetor viral.',
          diagram: 'microbe',
        },
        {
          id: 'bacterial-conjugation',
          title: 'Conjugação: transferência direta por plasmídeo',
          paragraphs: [
            'A conjugação é o mecanismo mais eficiente de disseminação de genes de resistência. Ela exige contato físico direto entre duas bactérias através de um pilus sexual conjugativo.',
            'Uma fita do plasmídeo (fator F ou plasmídeo R) é transferida da célula doadora (F+) para a receptora (F-), que a seguir replica a fita complementar.',
          ],
          takeaway: 'Conjugação = contato direto célula a célula via pilus sexual com replicação em círculo rolante.',
          diagram: 'microbe',
        },
        {
          id: 'resistance-plasmids',
          title: 'Mecanismos de resistência a antibióticos',
          paragraphs: [
            'Plasmídeos R carregam múltiplos genes de resistência que codificam enzimas inativadoras (como beta-lactamases), bombas de efluxo ativas ou alterações do sítio-alvo ribossômico.',
            'O uso indiscriminado de antibióticos cria pressão seletiva, selecionando cepas carreadoras de plasmídeos recombinantes multidroga-resistentes.',
          ],
          takeaway: 'Plasmídeos R propagam bombas de efluxo e enzimas inativadoras entre diferentes linhagens.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo de transferência horizontal exige contato físico célula a célula através de um pilus e é o principal disseminador de plasmídeos de resistência?',
        options: [
          {
            id: 'conjugation-pilus-transfer',
            label: 'Conjugação bacteriana mediada por pilus sexual e transferência plasmidial',
            explanation: 'Correto: a conjugação depende da aproximação física entre doador e receptor via pilus sexual (codificado pelo plasmídeo), transferindo DNA circular de fita simples.',
          },
          {
            id: 'transformation-bacteriophage',
            label: 'Transformação mediada por capsídeos protéicos de fagos líticos',
            explanation: 'Incorreto: o uso de bacteriófagos caracteriza a transdução; transformação refere-se à captação direta de DNA livre dissolvido no meio.',
          },
          {
            id: 'transduction-naked-dna',
            label: 'Transdução direta de DNA livre lisado sem qualquer vetor carreador',
            explanation: 'Incorreto: a captação de DNA livre sem vetor é a transformação; a transdução requer obrigatoriamente um vetor viral (bacteriófago).',
          },
          {
            id: 'conjugation-spore-formation',
            label: 'Formação de endósporos protetores com permuta meiótica de cromátides',
            explanation: 'Incorreto: bactérias são seres assexuados que não realizam meiose; a esporulação é uma resposta de dormência protetora contra dessecação.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can a single resistant bacterium in a hospital ward transfer its defense genes to entirely different species?',
      title: 'Bacterial genetics and antibiotic resistance',
      description: 'Understand horizontal gene transfer (transformation, transduction, conjugation) and the dissemination of resistance plasmids.',
      objective: 'Distinguish the three horizontal gene transfer mechanisms and explain plasmid-mediated conjugation in antibiotic resistance propagation.',
      stages: [
        {
          id: 'transformation-transduction',
          title: 'Bacterial transformation and transduction',
          paragraphs: [
            'Bacteria acquire rapid genomic variation via horizontal transfer. In transformation, a competent bacterium takes up naked extracellular DNA from its environment.',
            'In transduction, a bacteriophage inadvertently packages bacterial chromosomal or plasmid fragments and injects them into a recipient cell.',
          ],
          takeaway: 'Transformation takes up naked DNA; transduction utilizes a bacteriophage viral vehicle.',
          diagram: 'microbe',
        },
        {
          id: 'bacterial-conjugation',
          title: 'Conjugation: direct plasmid transfer',
          paragraphs: [
            'Conjugation is the primary driver of rapid multidrug resistance spread. It requires direct cell-to-cell contact between bacteria mediated by a hollow sex pilus.',
            'A single strand of the circular plasmid (F-factor or R-plasmid) is transferred from the donor (F+) to the recipient (F-), which replicates the complementary strand.',
          ],
          takeaway: 'Conjugation = direct physical contact via sex pilus with rolling-circle plasmid transfer.',
          diagram: 'microbe',
        },
        {
          id: 'resistance-plasmids',
          title: 'Mechanisms of antimicrobial resistance',
          paragraphs: [
            'R-plasmids encode protective mechanisms including drug-degrading enzymes (e.g., beta-lactamases), active membrane efflux pumps, and mutated ribosomal targets.',
            'Antibiotic overexposure exerts strong positive selective pressure, enriching populations harboring multidrug-resistant conjugative plasmids.',
          ],
          takeaway: 'R-plasmids spread efflux pumps and degrading enzymes across bacterial populations.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which horizontal gene transfer mechanism requires direct cell-to-cell contact through a conjugative pilus and drives the rapid spread of resistance plasmids?',
        options: [
          {
            id: 'conjugation-pilus-transfer',
            label: 'Bacterial conjugation mediated by a sex pilus and plasmid strand transfer',
            explanation: 'Correct: conjugation relies on a physical conjugative bridge (sex pilus) connecting donor and recipient cells to transfer single-stranded plasmid DNA.',
          },
          {
            id: 'transformation-bacteriophage',
            label: 'Bacterial transformation mediated by lytic bacteriophage capsids',
            explanation: 'Incorrect: transfer via bacteriophages is termed transduction; transformation is the uptake of naked DNA from the ambient solution.',
          },
          {
            id: 'transduction-naked-dna',
            label: 'Transduction consisting of naked environmental DNA uptake without a carrier',
            explanation: 'Incorrect: naked DNA uptake without a vector is transformation; transduction strictly requires a bacteriophage vehicle.',
          },
          {
            id: 'conjugation-spore-formation',
            label: 'Endospore germination accompanied by meiotic chromatid exchange',
            explanation: 'Incorrect: bacteria divide asexually without meiosis; endospores are dormant dehydrated survival structures against environmental stress.',
          },
        ],
      },
    },
  },
});

export const microbiologyViralReplicationLesson = lessonSchema.parse({
  id: 'microbiology-viral-replication',
  revision: 1,
  questionId: 'microbiology-viral-retrovirus',
  correctOptionId: 'reverse-transcriptase-synthesis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch6-viral-cycle',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/6-2',
      section: 'Chapter 6 · Acellular Pathogens: The Viral Life Cycle',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como um retrovírus como o HIV consegue reverter o sentido do dogma central e integrar seu código ao nosso DNA?',
      title: 'Replicação viral e biologia dos retrovírus',
      description: 'Examine o ciclo de infecção viral, as diferenças entre vírus de DNA e RNA e a transcriptase reversa.',
      objective: 'Identificar as etapas da replicação viral e explicar o papel da transcriptase reversa na conversão de RNA genômico viral em cDNA proviral.',
      stages: [
        {
          id: 'viral-life-cycle-stages',
          title: 'Etapas essenciais do ciclo viral',
          paragraphs: [
            'Como parasitas intracelulares obrigatórios, os vírus dependem da maquinaria celular do hospedeiro para sua replicação.',
            'O ciclo viral compreende: adsorção (ligação específica aos receptores de membrana), penetração celular, desnudamento do capsídeo, síntese de proteínas e genoma, montagem das partículas e liberação (por brotamento ou lise).',
          ],
          takeaway: 'Ciclo viral = adsorção → penetração → desnudamento → biossíntese → montagem → liberação.',
          diagram: 'microbe',
        },
        {
          id: 'dna-vs-rna-replication',
          title: 'Estratégias de replicação: DNA vs RNA',
          paragraphs: [
            'A maioria dos vírus de DNA replica seu genoma no núcleo celular utilizando ou mimetizando a DNA polimerase do hospedeiro.',
            'Vírus de RNA geralmente replicam seu genoma no citoplasma utilizando sua própria RNA polimerase dependente de RNA (RdRP), uma enzima sem revisão de leitura propensa a gerar altas taxas de mutação.',
          ],
          takeaway: 'Vírus de RNA requerem RNA polimerase dependente de RNA, acumulando altas taxas mutacionais.',
          diagram: 'microbe',
        },
        {
          id: 'retroviruses-reverse-transcriptase',
          title: 'Retrovírus e a transcriptase reversa',
          paragraphs: [
            'Os retrovírus (como o HIV) possuem genoma de RNA fita simples em sentido positivo, mas transportam no vírion a enzima transcriptase reversa (uma DNA polimerase dependente de RNA).',
            'Essa enzima converte o RNA viral em DNA complementar de fita dupla (cDNA), que é transportado ao núcleo e inserido no cromossomo humano pela enzima integrase, formando um provírus perpétuo.',
          ],
          takeaway: 'Transcriptase reversa converte RNA viral em cDNA proviral, integrando-se ao genoma celular.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual função enzimática exclusiva é desempenhada pela transcriptase reversa durante o ciclo replicativo dos retrovírus?',
        options: [
          {
            id: 'reverse-transcriptase-synthesis',
            label: 'Síntese de uma fita de DNA complementar a partir do molde de RNA genômico viral',
            explanation: 'Correto: a transcriptase reversa sintetiza DNA fita dupla (cDNA) guiada pelo RNA viral, subvertendo o sentido clássico transcricional antes da integração proviral.',
          },
          {
            id: 'direct-dna-translation',
            label: 'Tradução ribossômica direta de filamentos de DNA viral sem intermediário de mRNA',
            explanation: 'Incorreto: a tradução ribossômica opera estritamente a partir de moléculas de RNA mensageiro, nunca decodificando diretamente filamentos de DNA.',
          },
          {
            id: 'retrovirus-binary-fission',
            label: 'Divisão autônoma da partícula viral por fissão binária dentro do endossomo',
            explanation: 'Incorreto: vírus são partículas acelulares sem metabolismo próprio que não se multiplicam por fissão binária.',
          },
          {
            id: 'rna-polymerase-reverses-host',
            label: 'Clivagem proteolítica de poliproteínas estruturais da membrana celular infectada',
            explanation: 'Incorreto: a clivagem de poliproteínas no vírion é mediada pela protease viral, não pela transcriptase reversa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can a retrovirus like HIV reverse the flow of the central dogma and permanently weave its code into our genome?',
      title: 'Viral replication and retrovirus biology',
      description: 'Explore viral infection dynamics, differences between DNA and RNA viral genomes, and reverse transcription.',
      objective: 'Outline the steps of the viral replication cycle and describe reverse transcriptase converting viral genomic RNA into proviral cDNA.',
      stages: [
        {
          id: 'viral-life-cycle-stages',
          title: 'Core stages of the viral life cycle',
          paragraphs: [
            'As obligate intracellular parasites, viruses rely completely on host biochemical machinery to replicate their structural and genomic components.',
            'The standard replicative cycle involves: adsorption (specific receptor binding), penetration, capsid uncoating, macromolecular biosynthesis, assembly of new virions, and release (via budding or lysis).',
          ],
          takeaway: 'Viral life cycle = adsorption → entry → uncoating → biosynthesis → assembly → release.',
          diagram: 'microbe',
        },
        {
          id: 'dna-vs-rna-replication',
          title: 'Replication strategies: DNA vs RNA viruses',
          paragraphs: [
            'Most DNA viruses deliver their genome into the host nucleus, using host or viral DNA polymerases to direct transcription and genome duplication.',
            'RNA viruses typically replicate in the host cytoplasm utilizing their own RNA-dependent RNA polymerase (RdRP), an enzyme lacking proofreading that causes high mutation rates.',
          ],
          takeaway: 'RNA viruses depend on RNA-dependent RNA polymerase, yielding heightened evolutionary mutation rates.',
          diagram: 'microbe',
        },
        {
          id: 'retroviruses-reverse-transcriptase',
          title: 'Retroviruses and reverse transcriptase',
          paragraphs: [
            'Retroviruses (such as HIV) package single-stranded positive-sense RNA accompanied by a packaged viral enzyme: reverse transcriptase (RNA-dependent DNA polymerase).',
            'This enzyme converts viral RNA into double-stranded complementary DNA (cDNA), which is transported into the nucleus and inserted into host chromosomes by integrase, creating a permanent provirus.',
          ],
          takeaway: 'Reverse transcriptase generates proviral cDNA from RNA, which integrates permanently into host chromosomes.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which unique catalytic activity is carried out by viral reverse transcriptase during retroviral replication?',
        options: [
          {
            id: 'reverse-transcriptase-synthesis',
            label: 'Synthesizing complementary double-stranded DNA using the viral genomic RNA template',
            explanation: 'Correct: reverse transcriptase is an RNA-dependent DNA polymerase that converts viral single-stranded RNA into proviral cDNA prior to host integration.',
          },
          {
            id: 'direct-dna-translation',
            label: 'Directly translating viral DNA helices into viral coat capsomers on host ribosomes',
            explanation: 'Incorrect: ribosomes decode single-stranded messenger RNA; they cannot translate DNA directly.',
          },
          {
            id: 'retrovirus-binary-fission',
            label: 'Autonomous binary division of intact virions inside endosomal compartments',
            explanation: 'Incorrect: viruses are acellular macromolecular packages and never undergo autonomous binary fission.',
          },
          {
            id: 'rna-polymerase-reverses-host',
            label: 'Proteolytic processing of gag-pol precursor polyproteins during virion maturation',
            explanation: 'Incorrect: polyprotein processing is performed by viral protease, not reverse transcriptase.',
          },
        ],
      },
    },
  },
});

export const microbiologyFungiLesson = lessonSchema.parse({
  id: 'microbiology-fungi',
  revision: 1,
  questionId: 'microbiology-fungi-ergosterol',
  correctOptionId: 'ergosterol-antifungal-target',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch5-fungi',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-3',
      section: 'Chapter 5 · The Eukaryotes of Microbiology: Fungi',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como os medicamentos antifúngicos conseguem eliminar os fungos no corpo sem destruir nossas próprias células eucarióticas?',
      title: 'Micologia médica: biologia fúngica e ergosterol',
      description: 'Estude as características eucarióticas dos fungos, leveduras vs hifas, parede de quitina e o papel do ergosterol como alvo terapêutico.',
      objective: 'Identificar os componentes estruturais exclusivos dos fungos (quitina e ergosterol) e classificar micoses superficiais e sistêmicas.',
      stages: [
        {
          id: 'fungal-structure-ergosterol',
          title: 'Organização celular: parede de quitina e ergosterol',
          paragraphs: [
            'Fungos são organismos eucarióticos heterotróficos dotados de núcleo verdadeiro, mitocôndrias e organelas membranosas complexas.',
            'Diferenciam-se das células humanas por duas estruturas essenciais: uma parede celular externa rígida composta por quitina e glucanos, e a presença de ergosterol (em vez de colesterol) na sua membrana plasmática.',
          ],
          takeaway: 'Fungos possuem parede celular de quitina e ergosterol na membrana plasmática celular.',
          diagram: 'microbe',
        },
        {
          id: 'yeast-and-hyphae-forms',
          title: 'Morfologia: leveduras unicelulares e hifas filamentosas',
          paragraphs: [
            'Fungos microscópicos podem existir como leveduras ovóides unicelulares (que se reproduzem por brotamento) ou como fungos filamentosos (bolores) formados por hifas ramificadas que compõem o micélio.',
            'Muitos patógenos fúngicos humanos graves são dimórficos: crescem como bolores filamentosos no ambiente natural (25°C) e transformam-se em leveduras patogênicas nos tecidos humanos (37°C).',
          ],
          takeaway: 'Fungos dimórficos: filamentosos no ambiente (25°C) e leveduras invasivas no hospedeiro (37°C).',
          diagram: 'microbe',
        },
        {
          id: 'superficial-systemic-mycoses',
          title: 'Micoses e o mecanismo de ação dos antifúngicos',
          paragraphs: [
            'As infecções fúngicas variam de micoses superficiais na queratina (como dermatofitoses) a micoses profundas sistêmicas oportunistas (candidíase invasiva, aspergilose e criptococose em imunossuprimidos).',
            'Medicamentos antifúngicos exploram o ergosterol para garantir toxicidade seletiva: os azóis inibem sua síntese enzimática, enquanto os polienos (anfotericina B) ligam-se ao ergosterol abrindo poros na membrana.',
          ],
          takeaway: 'Azóis e polienos têm como alvo o ergosterol da membrana fúngica para conferir toxicidade seletiva.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual componente lipídico da membrana plasmática dos fungos é o principal alvo da seletividade farmacológica de antifúngicos como azóis e anfotericina B?',
        options: [
          {
            id: 'ergosterol-antifungal-target',
            label: 'Ergosterol, que substitui funcionalmente o colesterol nas membranas fúngicas',
            explanation: 'Correto: fungos usam ergosterol na sua bicamada lipídica em vez de colesterol. Inibir sua síntese (azóis) ou perfurá-lo (anfotericina B) mata o fungo poupando o colesterol das células humanas.',
          },
          {
            id: 'peptidoglycan-fungal-wall',
            label: 'Peptideoglicano mureico, clivado por penicilinas e cefalosporinas de amplo espectro',
            explanation: 'Incorreto: peptideoglicano é componente exclusivo de paredes celulares bacterianas; paredes fúngicas contêm quitina e glucanos.',
          },
          {
            id: 'prokaryotic-fungal-ribosome',
            label: 'Ribossomo procarioto 70S citoplasmático, inibido por aminoglicosídeos',
            explanation: 'Incorreto: fungos são organismos eucariotos e possuem ribossomos 80S típicos, não sendo sensíveis a antibióticos antibacterianos.',
          },
          {
            id: 'chitin-membrane-sterol',
            label: 'Capsídeo proteico icosaédrico montado no espaço periplasmático',
            explanation: 'Incorreto: capsídeos proteicos são características estruturais de vírus; fungos são microrganismos celulares eucariotos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can antifungal therapies selectively eradicate fungal invaders without poisoning human eukaryotic cells?',
      title: 'Medical mycology: fungal biology and ergosterol',
      description: 'Study eukaryotic fungal organization, yeasts vs hyphae, the chitin cell wall, and ergosterol as an antifungal target.',
      objective: 'Identify exclusive fungal structural hallmarks (chitin and ergosterol) and classify superficial versus systemic mycoses.',
      stages: [
        {
          id: 'fungal-structure-ergosterol',
          title: 'Cellular organization: chitin wall and ergosterol',
          paragraphs: [
            'Fungi are eukaryotic heterotrophic organisms possessing true nuclei, mitochondria, and membrane-bound intracellular organelles.',
            'They differ fundamentally from human cells in two structures: an exterior rigid cell wall built of chitin and beta-glucans, and the inclusion of ergosterol (rather than cholesterol) in their plasma membrane.',
          ],
          takeaway: 'Fungi possess a chitinous cell wall and synthesize membrane ergosterol.',
          diagram: 'microbe',
        },
        {
          id: 'yeast-and-hyphae-forms',
          title: 'Morphology: single-celled yeasts and filamentous hyphae',
          paragraphs: [
            'Microscopic fungi grow as single-celled oval yeasts (reproducing by budding) or as multicellular filamentous molds formed by branching tubular hyphae that make up a mycelium.',
            'Many major human systemic pathogens are thermally dimorphic: they exist as molds in ambient soil (25°C) and convert to invasive parasitic yeasts inside warm host tissues (37°C).',
          ],
          takeaway: 'Dimorphic fungi: environmental hyphae (25°C) and invasive yeasts in host tissues (37°C).',
          diagram: 'microbe',
        },
        {
          id: 'superficial-systemic-mycoses',
          title: 'Mycoses and antifungal therapeutic mechanisms',
          paragraphs: [
            'Fungal diseases range from superficial keratin infections (dermatophytoses) to opportunistic deep invasive infections (candidiasis, aspergillosis, and cryptococcosis in immunocompromised hosts).',
            'Antifungal agents exploit fungal ergosterol to ensure selective toxicity: azoles inhibit its biosynthetic pathway, whereas polyenes (amphotericin B) bind directly to ergosterol forming lethal membrane pores.',
          ],
          takeaway: 'Azoles and polyenes selectively target fungal membrane ergosterol.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which lipid constituent in the fungal plasma membrane serves as the primary target for selective antifungal drugs such as azoles and amphotericin B?',
        options: [
          {
            id: 'ergosterol-antifungal-target',
            label: 'Ergosterol, which fulfills the membrane-stabilizing role of cholesterol in fungi',
            explanation: 'Correct: fungi incorporate ergosterol into their membranes instead of cholesterol. Inhibiting its synthesis (azoles) or binding it directly (amphotericin B) selectively disrupts fungal viability.',
          },
          {
            id: 'peptidoglycan-fungal-wall',
            label: 'Murein peptidoglycan, cleaved by beta-lactam penicillins and cephalosporins',
            explanation: 'Incorrect: peptidoglycan is exclusive to bacterial cell walls; fungal walls are formed by chitin and beta-glucan polymers.',
          },
          {
            id: 'prokaryotic-fungal-ribosome',
            label: 'Cytoplasmic 70S prokaryotic ribosomes inhibited by aminoglycosides',
            explanation: 'Incorrect: fungi are eukaryotic organisms possessing 80S ribosomes; they are unaffected by antibacterial ribosome inhibitors.',
          },
          {
            id: 'chitin-membrane-sterol',
            label: 'Icosahedral protein capsid assembled within the periplasmic zone',
            explanation: 'Incorrect: protein capsids are viral features; fungi are multicellular or unicellular eukaryotic cells.',
          },
        ],
      },
    },
  },
});
