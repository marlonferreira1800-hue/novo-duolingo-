import { lessonSchema } from '../src/contracts/learning';

export const geneticsStructuralChromosomesLesson = lessonSchema.parse({
  id: 'genetics-structural-chromosomes',
  revision: 1,
  questionId: 'genetics-structural-chromosomes-q1',
  correctOptionId: 'robertsonian-acrocentric-fusion',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch13-chromosomes',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/13-3',
      section: 'Chapter 13 · Meiosis and Sexual Reproduction: Errors in Chromosome Number and Structure',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Genética',
      hook: 'Como uma pessoa com 45 cromossomos pode ser saudável, mas ter alto risco de ter filhos com síndrome de Down?',
      title: 'Rearranjos cromossômicos estruturais: translocações e microdeleções',
      description: 'Diferencie translocações Robertsonianas de recíprocas balanceadas e examine as síndromes de microdeleção.',
      objective: 'Identificar os cromossomos acrocêntricos envolvidos em translocações Robertsonianas, o risco meiótico de gametas desbalanceados e as bases das microdeleções.',
      stages: [
        {
          id: 'robertsonian-translocations',
          title: 'Translocações Robertsonianas entre acrocêntricos',
          paragraphs: [
            'As translocações Robertsonianas ocorrem exclusivamente entre os cinco pares de cromossomos acrocêntricos humanos: 13, 14, 15, 21 e 22.',
            'Ocorre quebra nos centrômeros com fusão dos braços longos (q) em um cromossomo metacêntrico único e perda dos braços curtos (p) satélites. O carreador balanceado possui 45 cromossomos e fenótipo normal, mas pode produzir gametas desbalanceados que geram trissomia do 21 ou 13.',
          ],
          takeaway: 'Robertsonianas fundem braços longos de cromossomos acrocêntricos (13, 14, 15, 21, 22), gerando cariótipo com 45 cromossomos.',
          diagram: 'dna',
        },
        {
          id: 'reciprocal-translocations',
          title: 'Translocações recíprocas e segregação meiótica',
          paragraphs: [
            'Nas translocações recíprocas, ocorre quebra em dois cromossomos não homólogos quaisquer com troca mútua de segmentos entre eles sem perda líquida de DNA.',
            'Na meiose I, os cromossomos translocados formam uma estrutura tetravalente cruciforme. Apenas a segregação alternada produz gametas viáveis balanceados, enquanto a segregação adjacente resulta em duplicacões e deleções letais.',
          ],
          takeaway: 'Translocações recíprocas formam tetravalentes na meiose e produzem abortamentos de repetição por segregação adjacente.',
          diagram: 'phases',
        },
        {
          id: 'microdeletions-syndromes',
          title: 'Síndromes de microdeleção submicroscópica',
          paragraphs: [
            'Microdeleções são perdas de pequenos segmentos cromossômicos (menores que 5 Mb) invisíveis no cariótipo convencional por banda G, exigindo hibridização in situ fluorescente (FISH) ou CGH-array para diagnóstico.',
            'Exemplos clássicos incluem a síndrome de DiGeorge (deleção 22q11.2 com anomalias conotruncais, hipoplasia tímica e hipocalcemia) e a síndrome de Williams (deleção 7q11.23 afetando o gene da elastina).',
          ],
          takeaway: 'Microdeleções (como 22q11.2) envolvem perda submicroscópica de genes contíguos detectáveis por FISH/CGH.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais cromossomos humanos participam exclusivamente da formação de translocações Robertsonianas balanceadas e não balanceadas?',
        options: [
          {
            id: 'robertsonian-acrocentric-fusion',
            label: 'Cromossomos acrocêntricos com satélites: 13, 14, 15, 21 e 22',
            explanation: 'Correto: translocações Robertsonianas ocorrem unicamente por fusão cêntrica entre os cromossomos acrocêntricos humanos (13, 14, 15, 21 e 22), cujos braços curtos contêm apenas genes de rRNA redundantes.',
          },
          {
            id: 'metacentric-large-fusion',
            label: 'Grandes cromossomos metacêntricos: 1, 2, 3 e cromossomo X',
            explanation: 'Incorreto: cromossomos metacêntricos como 1 e 3 possuem centrômero central e braços genômicos essenciais, não sofrendo fusão Robertsoniana clássica.',
          },
          {
            id: 'submetacentric-pairs-fusion',
            label: 'Pares submetacêntricos intermediários: 4, 5, 6 e 12',
            explanation: 'Incorreto: translocações envolvendo cromossomos submetacêntricos geram translocações recíprocas, não fusões Robertsonianas.',
          },
          {
            id: 'gonosomal-sex-fusion',
            label: 'Cromossomos sexuais heterólogos X e Y exclusivamente',
            explanation: 'Incorreto: rearranjos sexuais entre X e Y envolvem regiões pseudoautossômicas (PAR), não a fusão de cromossomos acrocêntricos autossômicos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How can an asymptomatic adult carry only 45 chromosomes yet face a substantial risk of having children with Down syndrome?',
      title: 'Structural chromosomal rearrangements: translocations and microdeletions',
      description: 'Differentiate Robertsonian from balanced reciprocal translocations and examine contiguous gene microdeletion syndromes.',
      objective: 'Identify acrocentric chromosomes involved in Robertsonian translocations, predict meiotic segregation risks, and recognize microdeletions.',
      stages: [
        {
          id: 'robertsonian-translocations',
          title: 'Robertsonian translocations among acrocentric chromosomes',
          paragraphs: [
            'Robertsonian translocations occur exclusively among the five human acrocentric chromosome pairs: 13, 14, 15, 21, and 22.',
            'Centromeric breakage is followed by fusion of long arms (q) into a single functional chromosome alongside loss of the satellite short arms (p). Balanced carriers have 45 chromosomes and normal health, but risk producing unbalanced gametes causing trisomy 21 or 13.',
          ],
          takeaway: 'Robertsonian translocations fuse long arms of acrocentric chromosomes (13, 14, 15, 21, 22), creating 45-chromosome carrier karyotypes.',
          diagram: 'dna',
        },
        {
          id: 'reciprocal-translocations',
          title: 'Reciprocal translocations and meiotic segregation quadrivalents',
          paragraphs: [
            'Reciprocal translocations involve breaks across two non-homologous chromosomes with two-way exchange of chromatin fragments without net gain or loss of genetic material.',
            'During meiosis I, translocated chromosomes pair as a cruciform quadrivalent. Only alternate segregation yields viable balanced gametes, whereas adjacent segregation patterns cause segmental aneusomies leading to recurrent spontaneous abortions.',
          ],
          takeaway: 'Reciprocal translocations assemble meiotic quadrivalents; adjacent segregation produces lethal unbalanced duplications/deletions.',
          diagram: 'phases',
        },
        {
          id: 'microdeletions-syndromes',
          title: 'Submicroscopic microdeletion syndromes',
          paragraphs: [
            'Microdeletions are small chromosomal losses (typically <5 Mb) undetectable on routine G-banded metaphase karyotypes, necessitating fluorescence in situ hybridization (FISH) or chromosomal microarray (CMA).',
            'Prototypic examples include DiGeorge syndrome (22q11.2 deletion causing conotruncal cardiac defects, thymic hypoplasia, and hypocalcemia) and Williams syndrome (7q11.23 deletion including the elastin gene).',
          ],
          takeaway: 'Microdeletions (such as 22q11.2) cause contiguous gene disorders identified via FISH and microarray.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which specific human chromosomes participate exclusively in the formation of Robertsonian translocations?',
        options: [
          {
            id: 'robertsonian-acrocentric-fusion',
            label: 'Acrocentric chromosomes with satellite short arms: 13, 14, 15, 21, and 22',
            explanation: 'Correct: Robertsonian translocations are restricted to acrocentric chromosomes (13, 14, 15, 21, and 22), whose p-arms carry non-essential tandem repeats of ribosomal RNA.',
          },
          {
            id: 'metacentric-large-fusion',
            label: 'Large metacentric autosomes: 1, 2, 3, and the X chromosome',
            explanation: 'Incorrect: metacentric chromosomes possess central centromeres with vital genes on both arms and do not undergo Robertsonian fusion.',
          },
          {
            id: 'submetacentric-pairs-fusion',
            label: 'Intermediate submetacentric autosomes: 4, 5, 6, and 12',
            explanation: 'Incorrect: rearrangements involving submetacentric pairs give rise to reciprocal translocations rather than centric fusion Robertsonian variants.',
          },
          {
            id: 'gonosomal-sex-fusion',
            label: 'Heterologous sex chromosomes X and Y exclusively',
            explanation: 'Incorrect: X-Y rearrangements involve recombination across pseudoautosomal regions (PAR), not acrocentric centromeric fusion.',
          },
        ],
      },
    },
  },
});

export const geneticsNonclassicalLesson = lessonSchema.parse({
  id: 'genetics-nonclassical',
  revision: 1,
  questionId: 'genetics-nonclassical-q1',
  correctOptionId: 'imprinting-prader-willi-angelman',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch13-nonclassical',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/13-2',
      section: 'Chapter 13 · Chromosomal Basis of Inherited Disorders: Non-Mendelian Inheritance Patterns',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Genética',
      hook: 'Como a mesma microdeleção no cromossomo 15 pode causar obesidade grave se herdada do pai ou riso descontrolado se herdada da mãe?',
      title: 'Herança não clássica: imprinting, trinucleotídeos e DNA mitocondrial',
      description: 'Analise o imprinting genômico parental, a antecipação por repetições de trinucleotídeos e a transmissão mitocondrial.',
      objective: 'Diferenciar as manifestações de imprinting genômico em 15q11-q13 (Prader-Willi vs Angelman), a dinâmica de expansão de trinucleotídeos e a herança materna mitocondrial com heteroplasmia.',
      stages: [
        {
          id: 'genomic-imprinting',
          title: 'Imprinting genômico: a marca parental',
          paragraphs: [
            'O imprinting genômico é um processo epigenético no qual certos genes são expressos em conformidade com a sua origem parental materna ou paterna devido a marcas de metilação diferenciais.',
            'Na região 15q11-q13, a deleção do alelo paterno ativo gera a síndrome de Prader-Willi (hiperfagia, obesidade infantil, hipotonia). Já a perda do alelo materno ativo (gene UBE3A) na mesma região causa a síndrome de Angelman (ataxia, riso inadequado e deficiência intelectual severa).',
          ],
          takeaway: 'Deleção paterna em 15q11 gera Prader-Willi; deleção materna do gene UBE3A gera Angelman.',
          diagram: 'dna',
        },
        {
          id: 'trinucleotide-expansions',
          title: 'Expansão de trinucleotídeos e antecipação genética',
          paragraphs: [
            'Doenças por expansão de microssatélites resultam do aumento instável de trincas repetidas de nucleotídeos durante a replicação do DNA ou gametogênese.',
            'Esse mecanismo explica a antecipação genética (sintomas surgem mais precocemente e com maior gravidade nas gerações sucessivas), vista na doença de Huntington (repetição CAG que codifica poliglutamina) e na síndrome do X frágil (repetição CGG no gene FMR1).',
          ],
          takeaway: 'Expansões de trinucleotídeos causam antecipação genética com sintomas progressivamente mais precoces nas gerações.',
          diagram: 'brain',
        },
        {
          id: 'mitochondrial-inheritance',
          title: 'Herança mitocondrial materna e heteroplasmia',
          paragraphs: [
            'O DNA mitocondrial humano (mtDNA) codifica 13 polipeptídeos da cadeia respiratória e é transmitido exclusivamente pela mãe a todos os seus filhos através do oócito.',
            'A heteroplasmia refere-se à coexistência de moléculas mutadas e normais de mtDNA na mesma célula; a gravidade clínica em órgãos de alta demanda energética (cérebro, coração, músculo) depende de a fração mutada ultrapassar o limiar fenotípico tecidual.',
          ],
          takeaway: 'O mtDNA é transmitido exclusivamente pela mãe; a gravidade depende do grau de heteroplasmia tecidual.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a correlação entre a origem parental da alteração epigenética e a síndrome clínica associada:',
        blank: 'A perda da expressão gênica ativa no cromossomo 15q11-q13 herdada do pai resulta na síndrome de ______, enquanto a perda do alelo materno ativo gera a síndrome de ______.',
        options: [
          {
            id: 'imprinting-prader-willi-angelman',
            label: 'Prader-Willi / Angelman',
            explanation: 'Correto: a síndrome de Prader-Willi ocorre por perda dos genes expressos paternalmente em 15q11-q13, enquanto Angelman ocorre por perda da expressão materna de UBE3A na mesma região.',
          },
          {
            id: 'imprinting-angelman-prader-willi',
            label: 'Angelman / Prader-Willi',
            explanation: 'Incorreto: a correlação está invertida; a síndrome de Angelman decorre da perda do alelo materno, não do paterno.',
          },
          {
            id: 'imprinting-fragile-huntington',
            label: 'X frágil / Huntington',
            explanation: 'Incorreto: X frágil e Huntington são doenças por expansão instável de trinucleotídeos, não síndromes clássicas de imprinting por microdeleção 15q11.',
          },
          {
            id: 'imprinting-kearns-leber',
            label: 'Kearns-Sayre / neuropatia de Leber',
            explanation: 'Incorreto: Kearns-Sayre e a neuropatia óptica hereditária de Leber são doenças de herança materna causadas por mutações no DNA mitocondrial.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How can the exact same microdeletion on chromosome 15 cause morbid childhood hyperphagia if inherited from the father, or unprovoked laughter if inherited from the mother?',
      title: 'Non-classical inheritance: imprinting, trinucleotides, and mitochondrial DNA',
      description: 'Analyze parental genomic imprinting, anticipation via trinucleotide repeat expansions, and mitochondrial maternal inheritance.',
      objective: 'Contrast 15q11-q13 imprinting syndromes (Prader-Willi vs Angelman), explain repeat expansion anticipation, and describe mitochondrial heteroplasmy.',
      stages: [
        {
          id: 'genomic-imprinting',
          title: 'Genomic imprinting: epigenetic parent-of-origin marks',
          paragraphs: [
            'Genomic imprinting is an epigenetic phenomenon in which gene expression depends strictly on parental origin as a result of differential gametic DNA methylation.',
            'Within chromosome 15q11-q13, paternal deletion of the normally active paternal alleles produces Prader-Willi syndrome (hyperphagia, neonatal hypotonia, obesity). Conversely, maternal loss of the active UBE3A allele causes Angelman syndrome (severe ataxia, paroxysmal laughter, severe cognitive impairment).',
          ],
          takeaway: 'Paternal 15q11 deletion causes Prader-Willi; maternal UBE3A loss produces Angelman syndrome.',
          diagram: 'dna',
        },
        {
          id: 'trinucleotide-expansions',
          title: 'Trinucleotide repeat expansion and genetic anticipation',
          paragraphs: [
            'Repeat expansion disorders stem from dynamic unstable elongation of simple triplet repeats during DNA replication or gametogenesis.',
            'This mechanism drives genetic anticipation (increasing severity and earlier age of onset across successive generations), demonstrated in Huntington disease (CAG polyglutamine tract) and Fragile X syndrome (CGG expansion at the FMR1 locus).',
          ],
          takeaway: 'Dynamic trinucleotide expansions underlie genetic anticipation, causing earlier and more severe disease across generations.',
          diagram: 'brain',
        },
        {
          id: 'mitochondrial-inheritance',
          title: 'Maternal mitochondrial inheritance and heteroplasmy',
          paragraphs: [
            'Human mitochondrial DNA (mtDNA) encodes 13 oxidative phosphorylation subunits and is transmitted strictly through the maternal ooplasm to all offspring.',
            'Heteroplasmy describes the variable coexistence of mutated and wild-type mtDNA molecules within a single cell; clinical severity in high-metabolic tissues (brain, retina, myocardium, skeletal muscle) depends on whether the mutational load surpasses a biochemical threshold.',
          ],
          takeaway: 'mtDNA is exclusively maternally inherited; clinical disease manifests once heteroplasmy surpasses the tissue threshold.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the statement correlating parental origin of chromosomal deletion with clinical phenotype:',
        blank: 'Loss of active gene expression at chromosome 15q11-q13 inherited from the father produces ______ syndrome, while loss of active maternal alleles causes ______ syndrome.',
        options: [
          {
            id: 'imprinting-prader-willi-angelman',
            label: 'Prader-Willi / Angelman',
            explanation: 'Correct: Prader-Willi syndrome results from paternal deletion of 15q11-q13, whereas Angelman syndrome results from maternal deletion of the UBE3A gene in that same region.',
          },
          {
            id: 'imprinting-angelman-prader-willi',
            label: 'Angelman / Prader-Willi',
            explanation: 'Incorrect: the assignment is inverted; Angelman syndrome is caused by maternal allele disruption, not paternal.',
          },
          {
            id: 'imprinting-fragile-huntington',
            label: 'Fragile X / Huntington',
            explanation: 'Incorrect: Fragile X and Huntington are trinucleotide repeat expansion disorders, not chromosomal 15q11 imprinting syndromes.',
          },
          {
            id: 'imprinting-kearns-leber',
            label: 'Kearns-Sayre / Leber optic neuropathy',
            explanation: 'Incorrect: Kearns-Sayre and Leber hereditary optic neuropathy are primary mitochondrial disorders transmitted maternally.',
          },
        ],
      },
    },
  },
});

export const geneticsPopulationMultifactorialLesson = lessonSchema.parse({
  id: 'genetics-population-multifactorial',
  revision: 1,
  questionId: 'genetics-population-multifactorial-q1',
  correctOptionId: 'carrier-frequency-calculation-2pq',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch19-hardy-weinberg',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/19-1',
      section: 'Chapter 19 · The Evolution of Populations: Population Genetics and Hardy-Weinberg',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Genética',
      hook: 'Se uma doença recessiva grave atinge 1 em cada 10.000 pessoas, quantas pessoas na população carregam a mutação sem saber?',
      title: 'Genética de populações e herança multifatorial',
      description: 'Aplique a equação de Hardy-Weinberg e estude o modelo do limiar de suscetibilidade em doenças poligênicas.',
      objective: 'Calcular frequências alélicas e genotípicas pelo modelo de Hardy-Weinberg (p² + 2pq + q² = 1) e explicar o modelo de limiar de Carter na herança multifatorial.',
      stages: [
        {
          id: 'hardy-weinberg-equilibrium',
          title: 'Equilíbrio de Hardy-Weinberg e premissas populacionais',
          paragraphs: [
            'A lei de Hardy-Weinberg estabelece que em uma população panmítica ideal (cruzamentos aleatórios), sem mutação nova, sem seleção natural, sem migração e infinitamente grande, as frequências alélicas e genotípicas permanecem constantes ao longo das gerações.',
            'A equação é expressa por p + q = 1 para as frequências alélicas, e p² + 2pq + q² = 1 para as frequências genotípicas de homozigotos normais (p²), portadores heterozigotos (2pq) e homozigotos afetados (q²).',
          ],
          takeaway: 'Hardy-Weinberg relaciona frequências alélicas (p + q = 1) e genotípicas (p² + 2pq + q² = 1) em populações em equilíbrio.',
          diagram: 'equation',
        },
        {
          id: 'carrier-frequency-calculation',
          title: 'Cálculo de portadores em doenças autossômicas recessivas',
          paragraphs: [
            'Na clínica genética, a incidência da doença corresponde a q² (indivíduos afetados aa). Calculando a raiz quadrada de q², encontra-se a frequência do alelo mutado (q).',
            'Como p ≈ 1 para alelos raros, a frequência de heterozigotos portadores assintomáticos (2pq) pode ser aproximada simplesmente por 2q. Para uma prevalência de fibrose cística de 1/2.500 (q² = 0,0004), q = 0,02 e a frequência de portadores é 2q = 0,04 (1 em 25 indivíduos).',
          ],
          takeaway: 'A frequência de carreadores heterozigotos assintomáticos de doenças recessivas raras é estimada por 2q.',
          diagram: 'calculation',
        },
        {
          id: 'multifactorial-threshold',
          title: 'Herança multifatorial e modelo do limiar de Carter',
          paragraphs: [
            'A maioria das doenças crônicas do adulto (diabetes, hipertensão, cardiopatia isquêmica) e malformações congênitas comuns (fenda labiopalatina) segue herança multifatorial: resultado da interação de múltiplos genes de pequeno efeito com fatores ambientais.',
            'O modelo do limiar de suscetibilidade (efeito de Carter) estabelece uma distribuição normal contínua de risco; a doença se manifesta apenas quando a carga de risco ultrapassa um limiar crítico, elevando o risco de recorrência em parentes de primeiro grau.',
          ],
          takeaway: 'Doenças multifatoriais decorrem da interação poligênica e ambiental ultrapassando um limiar biológico de risco.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Se uma doença autossômica recessiva tem prevalência populacional de 1 em 10.000 recém-nascidos (q² = 1/10.000), qual é a frequência aproximada de indivíduos heterozigotos portadores saudáveis (2pq)?',
        options: [
          {
            id: 'carrier-frequency-calculation-2pq',
            label: 'Aproximadamente 1 em 50 (cerca de 2%)',
            explanation: 'Correto: q² = 1/10.000 → q = 1/100 = 0,01. Com p ≈ 1, a frequência de carreadores 2pq ≈ 2 × 1 × 0,01 = 0,02 (ou seja, 1 em cada 50 indivíduos).',
          },
          {
            id: 'carrier-frequency-calculation-1-100',
            label: 'Aproximadamente 1 em 100 (cerca de 1%)',
            explanation: 'Incorreto: 1 em 100 (q = 0,01) é a frequência do alelo mutante recessivo individual, não a frequência dos heterozigotos portadores (2pq).',
          },
          {
            id: 'carrier-frequency-calculation-1-500',
            label: 'Aproximadamente 1 em 500 (cerca de 0,2%)',
            explanation: 'Incorreto: cálculo subestimado por ausência de multiplicação do fator heterozigoto 2pq da expansão binomial de Hardy-Weinberg.',
          },
          {
            id: 'carrier-frequency-calculation-1-5000',
            label: 'Aproximadamente 1 em 5.000 (cerca de 0,02%)',
            explanation: 'Incorreto: a frequência de carreadores assintomáticos é muito maior do que a incidência de indivíduos afetados pela doença.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'If a severe recessive genetic disorder affects 1 in 10,000 newborns, how many healthy individuals in the population quietly carry the mutated allele?',
      title: 'Population genetics and multifactorial inheritance',
      description: 'Apply the Hardy-Weinberg law and explore Carter’s polygenic threshold susceptibility model in common complex disease.',
      objective: 'Calculate allele and genotype frequencies using Hardy-Weinberg (p² + 2pq + q² = 1) and explain threshold models in multifactorial disease.',
      stages: [
        {
          id: 'hardy-weinberg-equilibrium',
          title: 'Hardy-Weinberg equilibrium and population assumptions',
          paragraphs: [
            'The Hardy-Weinberg principle states that within an infinitely large, randomly mating panmictic population lacking de novo mutations, natural selection, and gene migration, allele frequencies remain invariant across generations.',
            'Allelic frequencies are defined by p + q = 1, while genotypic frequencies are represented by p² + 2pq + q² = 1, corresponding to homozygous dominant (p²), heterozygous carriers (2pq), and homozygous affected (q²) individuals.',
          ],
          takeaway: 'Hardy-Weinberg balances allele (p + q = 1) and genotype frequencies (p² + 2pq + q² = 1) in stable populations.',
          diagram: 'equation',
        },
        {
          id: 'carrier-frequency-calculation',
          title: 'Carrier frequency calculation in autosomal recessive disease',
          paragraphs: [
            'In clinical medical genetics, the observed disease incidence represents q² (affected homozygous recessive patients). Taking the square root of q² yields the mutant allele frequency (q).',
            'Because p ≈ 1 for rare alleles, asymptomatic heterozygous carrier frequency (2pq) simplifies to 2q. For cystic fibrosis incidence of 1 in 2,500 (q² = 0.0004), q = 0.02 and carrier frequency is 2q = 0.04 (1 in 25 individuals).',
          ],
          takeaway: 'Heterozygous carrier frequency for rare recessive disorders is readily approximated by 2q.',
          diagram: 'calculation',
        },
        {
          id: 'multifactorial-threshold',
          title: 'Multifactorial inheritance and the Carter threshold model',
          paragraphs: [
            'Most adult chronic diseases (type 2 diabetes, essential hypertension, coronary artery disease) and common congenital anomalies (cleft lip/palate) follow complex multifactorial inheritance driven by multiple additive loci and environmental exposures.',
            'The liability threshold model (Carter effect) maps a continuous Gaussian distribution of genetic and environmental vulnerability; pathology manifests only when aggregate liability surpasses a critical threshold, elevating recurrence risk in close relatives.',
          ],
          takeaway: 'Multifactorial diseases manifest when polygenic liability combined with environmental triggers breaches a developmental threshold.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'If an autosomal recessive disease has a population birth prevalence of 1 in 10,000 (q² = 1/10,000), what is the estimated carrier frequency (2pq) among healthy individuals?',
        options: [
          {
            id: 'carrier-frequency-calculation-2pq',
            label: 'Approximately 1 in 50 (around 2%)',
            explanation: 'Correct: q² = 1/10,000 → q = 1/100 = 0.01. Assuming p ≈ 1, the carrier frequency is 2pq ≈ 2 × 1 × 0.01 = 0.02 (1 in 50 individuals).',
          },
          {
            id: 'carrier-frequency-calculation-1-100',
            label: 'Approximately 1 in 100 (around 1%)',
            explanation: 'Incorrect: 1 in 100 (q = 0.01) represents the mutant allele frequency, not the diploid carrier genotype frequency (2pq).',
          },
          {
            id: 'carrier-frequency-calculation-1-500',
            label: 'Approximately 1 in 500 (around 0.2%)',
            explanation: 'Incorrect: this underestimates carrier burden due to omitting the twofold heterozygous multiplier in the binomial expansion.',
          },
          {
            id: 'carrier-frequency-calculation-1-5000',
            label: 'Approximately 1 in 5,000 (around 0.02%)',
            explanation: 'Incorrect: asymptomatic carriers are exponentially more prevalent in the population than individuals expressing the rare homozygous disease.',
          },
        ],
      },
    },
  },
});

export const geneticsEpigeneticsLesson = lessonSchema.parse({
  id: 'genetics-epigenetics',
  revision: 1,
  questionId: 'genetics-epigenetics-q1',
  correctOptionId: 'cpg-methylation-dnmt-silencing',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch16-epigenetics',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/16-2',
      section: 'Chapter 16 · Gene Expression: Epigenetic Control of Gene Expression',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Genética',
      hook: 'Como células com o mesmo genoma se tornam neurônios ou linfócitos e retêm essa identidade por décadas?',
      title: 'Epigenética médica: metilação de DNA e remodelagem de histonas',
      description: 'Estude o silenciamento gênico por metilação em ilhas CpG, o código das histonas e suas alterações no câncer.',
      objective: 'Explicar os efeitos transcricionais da metilação do DNA por DNA metiltransferases (DNMTs), a acetilação/desacetilação de histonas e a hipometilação global em neoplasias.',
      stages: [
        {
          id: 'cpg-methylation',
          title: 'Metilação de ilhas CpG por DNA metiltransferases',
          paragraphs: [
            'A metilação do DNA consiste na adição covalente de um grupo metil à posição 5 da citosina em dinucleotídeos CpG, catalisada por DNA metiltransferases (DNMT1 de manutenção; DNMT3A/3B de novo).',
            'Ilhas CpG localizadas em promotores gênicos normalmente encontram-se desmetiladas em genes ativos. Sua hipermetilação recruta proteínas de ligação a metil-CpG (MBPs) que compactam a cromatina e silenciam permanentemente a transcrição.',
          ],
          takeaway: 'Hipermetilação de ilhas CpG em promotores compacta a cromatina e promove silenciamento transcricional.',
          diagram: 'dna',
        },
        {
          id: 'histone-modifications',
          title: 'Modificações pós-traducionais de histonas e código da cromatina',
          paragraphs: [
            'As caudas N-terminais das histonas nucleossômicas (H2A, H2B, H3, H4) sofrem modificações covalentes reversíveis como acetilação, metilação, fosforilação e ubiquitinação.',
            'A acetilação de resíduos de lisina pelas histona acetiltransferases (HATs) neutraliza cargas positivas, afrouxando a interação com o DNA carregado negativamente (eucromatina aberta, transcrição ativa). As histona desacetilases (HDACs) removem os grupos acetil, condensando a heterocromatina inativa.',
          ],
          takeaway: 'HATs acetilam histonas abrindo a eucromatina; HDACs desacetilam condensando a heterocromatina repressiva.',
          diagram: 'membrane',
        },
        {
          id: 'chromatin-remodeling-cancer',
          title: 'Epigenética no câncer: hipermetilação de genes supressores',
          paragraphs: [
            'Células neoplásicas apresentam profundas desregulações no epigenoma: hipometilação genômica global (gerando instabilidade cromossômica e ativação de oncogenes) associada a hipermetilação focal de ilhas CpG em promotores de genes supressores de tumor.',
            'O silenciamento epigenético de genes supressores como p16INK4a (ciclo celular), BRCA1 (reparo de DNA) e MLH1 (reparo de emparelhamento) mimetiza mutações genéticas deletérias de perda de função.',
          ],
          takeaway: 'O câncer exibe hipermetilação focal de genes supressores de tumor e hipometilação genômica global.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual alteração epigenética típica em promotores de genes supressores de tumor resulta em silenciamento transcricional duradouro em células tumorais?',
        options: [
          {
            id: 'cpg-methylation-dnmt-silencing',
            label: 'Hipermetilação de citosinas em ilhas CpG associada a recrutamento de desacetilases de histonas',
            explanation: 'Correto: a hipermetilação de citosinas nas ilhas CpG dos promotores catalisada por DNMTs impede a ligação de fatores basais de transcrição e recruta HDACs, condensando a cromatina em estado repressivo.',
          },
          {
            id: 'histone-hyperacetylation-hat',
            label: 'Hiperacetilação maciça mediada por HATs que impede o desenovelamento do DNA',
            explanation: 'Incorreto: a acetilação de histonas por HATs neutraliza cargas positivas e abre a cromatina (eucromatina), favorecendo a transcrição gênica ativa.',
          },
          {
            id: 'global-promoter-demethylation',
            label: 'Perda generalizada de todos os nucleossomos com ativação constitutiva de telomerases',
            explanation: 'Incorreto: o silenciamento de genes supressores decorre da condensação hipermetilada da cromatina promotora, não da perda física de nucleossomos.',
          },
          {
            id: 'ubiquitin-ribosomal-cleavage',
            label: 'Clivagem ubiquitina-dependente de ribossomos citoplasmáticos maduros',
            explanation: 'Incorreto: a regulação epigenética atua a montante na estrutura cromatínica nuclear e transcricional, não na degradação de ribossomos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How can cells carrying identical genomes differentiate into neurons or lymphocytes and maintain that precise operational identity for a century?',
      title: 'Medical epigenetics: DNA methylation and histone remodeling',
      description: 'Study transcriptional silencing via promoter CpG island methylation, histone modifications, and epigenetic cancer lesions.',
      objective: 'Explain the transcriptional consequences of DNA methylation by DNMTs, the opposing roles of HATs and HDACs, and epigenetic deregulation in cancer.',
      stages: [
        {
          id: 'cpg-methylation',
          title: 'CpG island methylation by DNA methyltransferases',
          paragraphs: [
            'DNA methylation involves covalent transfer of a methyl group to the 5-carbon position of cytosine in CpG dinucleotides, driven by maintenance (DNMT1) and de novo (DNMT3A/3B) methyltransferases.',
            'CpG islands embedded within gene promoters are typically unmethylated in transcriptionally active states. Dense promoter hypermethylation recruits methyl-CpG-binding domain proteins (MBPs), inducing chromatin condensation and stable transcriptional silencing.',
          ],
          takeaway: 'CpG island hypermethylation in promoters drives chromatin compaction and durable gene silencing.',
          diagram: 'dna',
        },
        {
          id: 'histone-modifications',
          title: 'Post-translational histone code and chromatin dynamics',
          paragraphs: [
            'Basic N-terminal tails of core nucleosomal histones (H2A, H2B, H3, H4) undergo reversible covalent modifications including acetylation, methylation, and phosphorylation.',
            'Lysine acetylation by histone acetyltransferases (HATs) neutralizes positive basic charges, weakening interactions with negatively charged DNA phosphate backbones to yield open euchromatin. Histone deacetylases (HDACs) remove acetyl marks, condensing silent heterochromatin.',
          ],
          takeaway: 'HATs acetylate histones to open active euchromatin; HDACs deacetylate histones to compact repressive heterochromatin.',
          diagram: 'membrane',
        },
        {
          id: 'chromatin-remodeling-cancer',
          title: 'Cancer epigenomics: tumor suppressor hypermethylation',
          paragraphs: [
            'Neoplastic cells display marked genome-wide epigenetic instability: global genomic hypomethylation (triggering transposable element activation and aneuploidy) paired with focal promoter CpG hypermethylation.',
            'Focal epigenetic silencing of key tumor suppressor genes such as p16INK4a (CDK inhibitor), BRCA1 (homologous recombination repair), and MLH1 (mismatch repair) functionally mimics loss-of-function genetic mutations.',
          ],
          takeaway: 'Malignancy combines global genomic hypomethylation with focal promoter hypermethylation of tumor suppressors.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which characteristic epigenetic alteration within tumor suppressor gene promoters drives durable transcriptional silencing in neoplastic cells?',
        options: [
          {
            id: 'cpg-methylation-dnmt-silencing',
            label: 'Cytosine hypermethylation within promoter CpG islands coupled with histone deacetylase recruitment',
            explanation: 'Correct: hypermethylation of CpG promoter dinucleotides by DNMTs prevents transcription factor binding and recruits HDACs, enforcing dense, transcriptionally silent heterochromatin.',
          },
          {
            id: 'histone-hyperacetylation-hat',
            label: 'Massive histone hyperacetylation mediated by HATs preventing DNA helix unwinding',
            explanation: 'Incorrect: histone acetylation by HATs neutralizes positive charges and creates open, transcriptionally accessible euchromatin.',
          },
          {
            id: 'global-promoter-demethylation',
            label: 'Complete loss of nucleosomal cores causing constitutive telomerase hyperactivation',
            explanation: 'Incorrect: tumor suppressor inactivation occurs via promoter chromatin condensation, not nucleosomal dissolution.',
          },
          {
            id: 'ubiquitin-ribosomal-cleavage',
            label: 'Ubiquitin-dependent proteolytic cleavage of mature cytoplasmic ribosomes',
            explanation: 'Incorrect: epigenetic machinery acts at the nuclear chromatin level to regulate transcription, not on cytoplasmic ribosomal degradation.',
          },
        ],
      },
    },
  },
});

export const geneticsMolecularDiagnosticsLesson = lessonSchema.parse({
  id: 'genetics-molecular-diagnostics',
  revision: 1,
  questionId: 'genetics-molecular-diagnostics-q1',
  correctOptionId: 'lynch-syndrome-mmr-microsatellite',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch15-diagnostics',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/15-3',
      section: 'Chapter 15 · Genes and Proteins: Biotechnology and Molecular Diagnostics in Cancer Genetics',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Genética',
      hook: 'Como uma amostra de sangue de 5 mL permite identificar a predisposição para múltiplos tumores antes do aparecimento do primeiro nódulo?',
      title: 'Diagnóstico molecular e oncogenética: PCR, NGS e síndromes hereditárias',
      description: 'Explore técnicas de biologia molecular (PCR, NGS, FISH) e as síndromes de câncer hereditário (Lynch, BRCA e Li-Fraumeni).',
      objective: 'Comparar PCR, sequenciamento de nova geração (NGS) e FISH no diagnóstico molecular e identificar as bases moleculares da síndrome de Lynch (MMR) e BRCA1/2.',
      stages: [
        {
          id: 'pcr-and-ngs',
          title: 'PCR, sequenciamento de nova geração (NGS) e oncogenética',
          paragraphs: [
            'A reação em cadeia da polimerase (PCR) amplifica regiões específicas do DNA em ciclos térmicos (desnaturação, anelamento e extensão). O sequenciamento de nova geração (NGS) permite a leitura massiva paralela de painéis inteiros de genes.',
            'O NGS revolucionou a oncogenética ao rastrear mutações germinativas em múltiplos genes de predisposição tumoral simultaneamente com alta cobertura e sensibilidade para variantes de nucleotídeo único (SNVs) e inserções/deleções pequenas.',
          ],
          takeaway: 'NGS permite sequenciamento massivo em paralelo de múltiplos genes tumorais simultaneamente.',
          diagram: 'dna',
        },
        {
          id: 'fish-and-cgh',
          title: 'Citogenética molecular: FISH e CGH-array',
          paragraphs: [
            'A hibridização in situ por fluorescência (FISH) utiliza sondas de DNA fluorescentes específicas para detectar translocações cromossômicas recorrentes em tecidos ou sangue (ex.: fusão BCR-ABL na leucemia mieloide crônica ou amplificação de HER2 no câncer de mama).',
            'O microarray genômico (CGH-array) compara o DNA tumoral ou do paciente com um DNA controle para detectar variações de número de cópias (CNVs) em resolução submicroscópica em todo o genoma.',
          ],
          takeaway: 'FISH visualiza rearranjos específicos no microscópio; CGH-array quantifica perdas e ganhos genômicos.',
          diagram: 'phases',
        },
        {
          id: 'hereditary-cancer-syndromes',
          title: 'Síndromes de câncer hereditário: Lynch, BRCA e Li-Fraumeni',
          paragraphs: [
            'Mutações germinativas em genes de reparo de DNA conferem suscetibilidade hereditária ao câncer com herança autossômica dominante.',
            'A síndrome de Lynch (câncer colorretal hereditário sem polipose) é causada por mutações nos genes de reparo de incompatibilidade de bases (MMR: MLH1, MSH2, MSH6, PMS2), manifestando instabilidade de microssatélites (MSI-H). As mutações em BRCA1/2 prejudicam o reparo por recombinação homóloga de quebras de fita dupla de DNA, predispondo a câncer de mama e ovário.',
          ],
          takeaway: 'Síndrome de Lynch decorre de defeito no reparo de incompatibilidade (MMR) com instabilidade de microssatélites.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo molecular de reparo do DNA encontra-se deficiente na síndrome de Lynch, predispondo ao desenvolvimento precoce de câncer colorretal e endometrial?',
        options: [
          {
            id: 'lynch-syndrome-mmr-microsatellite',
            label: 'Reparo de incompatibilidade de bases (mismatch repair - MMR), gerando instabilidade de microssatélites',
            explanation: 'Correto: mutações germinativas em genes do sistema MMR (como MSH2 e MLH1) impedem a correção de erros de emparelhamento da DNA polimerase, acumulando mutações em microssatélites (MSI-H).',
          },
          {
            id: 'homologous-recombination-brca',
            label: 'Reparo por excisão de nucleotídeos (NER) acoplado a dímeros de timina induzidos por radiação gama',
            explanation: 'Incorreto: defeitos no reparo por excisão de nucleotídeos (NER) causam o xeroderma pigmentoso, associado a hipersensibilidade extrema a raios UV e câncer de pele.',
          },
          {
            id: 'non-homologous-end-joining-ku',
            label: 'Junção de extremidades não homólogas (NHEJ) mediada pelas proteínas Ku70/Ku80 nos telômeros',
            explanation: 'Incorreto: deficiências em NHEJ acarretam imunodeficiências combinadas graves por falha na recombinação V(D)J e hipersensibilidade à radiação ionizante.',
          },
          {
            id: 'base-excision-repair-ogg1',
            label: 'Excisão de bases oxidativas (BER) com acúmulo mitocondrial exclusivo de 8-oxo-guanina',
            explanation: 'Incorreto: BER repara lesões oxidativas individuais pontuais; a síndrome de Lynch decorre estritamente da perda do mismatch repair (MMR) nuclear.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How can a simple 5-mL blood draw detect elevated hereditary cancer susceptibility long before the very first neoplastic nodule appears?',
      title: 'Molecular diagnostics and oncogenetics: PCR, NGS, and hereditary syndromes',
      description: 'Explore molecular techniques (PCR, NGS, FISH) and canonical hereditary cancer syndromes (Lynch, BRCA, and Li-Fraumeni).',
      objective: 'Contrast PCR, next-generation sequencing (NGS), and FISH in diagnostic oncology, and explain DNA mismatch repair defects in Lynch syndrome.',
      stages: [
        {
          id: 'pcr-and-ngs',
          title: 'PCR, next-generation sequencing (NGS), and oncogenomics',
          paragraphs: [
            'Polymerase chain reaction (PCR) amplifies targeted genomic loci through repetitive thermal cycling (denaturation, primer annealing, and enzymatic extension). Next-generation sequencing (NGS) allows massively parallel high-throughput reading of multi-gene panels.',
            'NGS has transformed clinical oncogenetics by screening germline and somatic mutations across dozens of hereditary cancer susceptibility genes simultaneously with high sensitivity for single-nucleotide variants (SNVs) and small insertions/deletions.',
          ],
          takeaway: 'NGS performs massively parallel sequencing across entire multi-gene oncology panels simultaneously.',
          diagram: 'dna',
        },
        {
          id: 'fish-and-cgh',
          title: 'Molecular cytogenetics: FISH and chromosomal microarrays',
          paragraphs: [
            'Fluorescence in situ hybridization (FISH) deploys targeted fluorophore-labeled DNA probes to detect recurrent chromosomal translocations directly in clinical tissue or blood (e.g., BCR-ABL1 in CML or HER2 gene amplification in breast cancer).',
            'Chromosomal microarray (array-CGH) compares patient genomic DNA against reference controls to quantify submicroscopic copy number variations (CNVs) across the entire human genome at kilobase resolution.',
          ],
          takeaway: 'FISH identifies specific translocations under microscopy; array-CGH profiles submicroscopic genomic copy gains and losses.',
          diagram: 'phases',
        },
        {
          id: 'hereditary-cancer-syndromes',
          title: 'Hereditary cancer syndromes: Lynch, BRCA, and Li-Fraumeni',
          paragraphs: [
            'Germline mutations in core DNA repair machinery confer elevated inherited cancer susceptibility with typical autosomal dominant transmission.',
            'Lynch syndrome (hereditary non-polyposis colorectal cancer) is caused by germline mutations in mismatch repair (MMR) genes (MLH1, MSH2, MSH6, PMS2), manifesting prominent microsatellite instability (MSI-H). Pathogenic BRCA1/2 variants abolish homologous recombination repair of double-strand DNA breaks, predisposing to breast and ovarian cancer.',
          ],
          takeaway: 'Lynch syndrome arises from defective mismatch repair (MMR) producing high microsatellite instability.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which cellular DNA repair pathway is functionally abolished in Lynch syndrome, driving marked microsatellite instability and early-onset colorectal cancer?',
        options: [
          {
            id: 'lynch-syndrome-mmr-microsatellite',
            label: 'DNA mismatch repair (MMR), producing high-frequency microsatellite instability (MSI-H)',
            explanation: 'Correct: germline defects in MMR genes (MLH1, MSH2, MSH6, PMS2) prevent editing of DNA polymerase replication slippage errors, generating genome-wide microsatellite length variations.',
          },
          {
            id: 'homologous-recombination-brca',
            label: 'Nucleotide excision repair (NER) targeting UV-induced cyclobutane pyrimidine dimers',
            explanation: 'Incorrect: deficient nucleotide excision repair causes xeroderma pigmentosum, characterized by severe cutaneous sensitivity and UV-induced neoplasms.',
          },
          {
            id: 'non-homologous-end-joining-ku',
            label: 'Non-homologous end joining (NHEJ) guided by Ku70/Ku80 dimers across telomeric repeats',
            explanation: 'Incorrect: defective non-homologous end joining causes severe combined immunodeficiency due to failed V(D)J recombination.',
          },
          {
            id: 'base-excision-repair-ogg1',
            label: 'Oxidative base excision repair (BER) causing isolated mitochondrial 8-oxoguanine accumulation',
            explanation: 'Incorrect: BER corrects small chemical alterations of single bases; Lynch syndrome is strictly a nuclear mismatch repair defect.',
          },
        ],
      },
    },
  },
});
