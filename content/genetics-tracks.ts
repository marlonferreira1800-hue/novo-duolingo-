import { lessonSchema } from '../src/contracts/learning';

export const geneticsCentralDogmaLesson = lessonSchema.parse({
  id: 'genetics-central-dogma',
  revision: 1,
  questionId: 'genetics-central-dogma-mrna',
  correctOptionId: 'mrna-transcription',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch15',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/15-1',
      section: 'Chapter 15 · Genes and Proteins',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Genética',
      hook: 'Como a sequência gravada no DNA se transforma em enzimas funcionais na célula?',
      title: 'Dogma central da biologia molecular: DNA a proteínas',
      description: 'Compreenda as três etapas do fluxo da informação genética: replicação, transcrição e tradução.',
      objective: 'Descrever o fluxo unidirecional da informação genética e diferenciar replicação, transcrição em mRNA e tradução ribossômica.',
      stages: [
        {
          id: 'replication',
          title: 'Replicação semiconservativa do DNA',
          paragraphs: [
            'Antes da divisão celular, a DNA polimerase duplica o genoma de forma semiconservativa. Cada fita original serve de molde para uma nova fita complementar.',
            'A fidelidade da replicação garante que as duas células-filhas recebam cópias idênticas do material genético.',
          ],
          takeaway: 'Replicação = duplicação do genoma com fidelidade semiconservativa.',
          diagram: 'dna',
        },
        {
          id: 'transcription',
          title: 'Transcrição: do DNA ao RNA mensageiro',
          paragraphs: [
            'No núcleo, a RNA polimerase lê uma fita molde de DNA e sintetiza uma molécula de RNA mensageiro (mRNA) complementar.',
            'O pré-mRNA sofre processamento (splicing, capeamento 5\' e cauda poli-A) antes de ser exportado para o citoplasma.',
          ],
          takeaway: 'Transcrição = cópia de um segmento gênico em mRNA transportável.',
          diagram: 'dna',
        },
        {
          id: 'translation',
          title: 'Tradução ribossômica em polipeptídeos',
          paragraphs: [
            'Nos ribossomos citoplasmáticos, o mRNA é lido em trincas de nucleotídeos chamadas códons.',
            'Moléculas de tRNA trazem os aminoácidos correspondentes aos anticódons, montando a cadeia polipeptídica funcional.',
          ],
          takeaway: 'Tradução = decodificação de códons do mRNA em sequência de aminoácidos.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual etapa do dogma central sintetiza diretamente a fita de RNA mensageiro a partir da fita molde de DNA?',
        options: [
          {
            id: 'mrna-transcription',
            label: 'Transcrição catalisada pela RNA polimerase',
            explanation: 'Correto: a RNA polimerase lê a fita molde de DNA no núcleo e produz a molécula de mRNA complementar.',
          },
          {
            id: 'dna-direct-translation',
            label: 'Tradução direta da fita dupla no ribossomo',
            explanation: 'Incorreto: ribossomos não traduzem diretamente a fita dupla de DNA genômico; eles decodificam o mRNA no citoplasma.',
          },
          {
            id: 'protein-reverse-dna',
            label: 'Transcrição reversa contínua de proteínas em DNA',
            explanation: 'Incorreto: o fluxo padrão da informação flui do DNA para o RNA e proteínas, sem síntese de DNA a partir de polipeptídeos.',
          },
          {
            id: 'trna-genomic-storage',
            label: 'Armazenamento genômico primário por moléculas de tRNA',
            explanation: 'Incorreto: o tRNA funciona como adaptador transportador de aminoácidos durante a tradução, não como reservatório gênico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How does the sequence stored in DNA become functional cellular enzymes?',
      title: 'Central dogma of molecular biology: DNA to proteins',
      description: 'Understand the three key stages of genetic information flow: replication, transcription, and translation.',
      objective: 'Describe the directional flow of genetic information and distinguish semiconservative replication, transcription into mRNA, and ribosomal translation.',
      stages: [
        {
          id: 'replication',
          title: 'Semiconservative DNA replication',
          paragraphs: [
            'Before cell division, DNA polymerase duplicates the genome in a semiconservative manner. Each parental strand serves as a template for a new complementary strand.',
            'High replication fidelity ensures that both daughter cells receive identical copies of the genetic material.',
          ],
          takeaway: 'Replication = genome duplication with semiconservative fidelity.',
          diagram: 'dna',
        },
        {
          id: 'transcription',
          title: 'Transcription: from DNA to messenger RNA',
          paragraphs: [
            'In the nucleus, RNA polymerase reads a template DNA strand and synthesizes a complementary messenger RNA (mRNA) transcript.',
            'The pre-mRNA undergoes processing (splicing, 5\' capping, and poly-A tailing) before export to the cytoplasm.',
          ],
          takeaway: 'Transcription = copying a gene segment into transportable mRNA.',
          diagram: 'dna',
        },
        {
          id: 'translation',
          title: 'Ribosomal translation into polypeptides',
          paragraphs: [
            'On cytoplasmic ribosomes, mRNA is read in nucleotide triplets known as codons.',
            'tRNA molecules deliver corresponding amino acids matching anticodons, assembling the functional polypeptide chain.',
          ],
          takeaway: 'Translation = decoding mRNA codons into an amino acid sequence.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which step of the central dogma directly synthesizes the messenger RNA transcript from the template DNA strand?',
        options: [
          {
            id: 'mrna-transcription',
            label: 'Transcription catalyzed by RNA polymerase',
            explanation: 'Correct: RNA polymerase reads the template DNA strand in the nucleus and produces complementary mRNA.',
          },
          {
            id: 'dna-direct-translation',
            label: 'Direct translation of double-stranded DNA by ribosomes',
            explanation: 'Incorrect: ribosomes do not directly read double-stranded genomic DNA; they decode cytoplasmic mRNA.',
          },
          {
            id: 'protein-reverse-dna',
            label: 'Continuous reverse transcription of proteins into DNA',
            explanation: 'Incorrect: standard flow goes from DNA to RNA to protein; DNA is not synthesized from polypeptides.',
          },
          {
            id: 'trna-genomic-storage',
            label: 'Primary genomic storage by tRNA molecules',
            explanation: 'Incorrect: tRNA serves as an adapter delivering amino acids during translation, not as the genomic repository.',
          },
        ],
      },
    },
  },
});

export const geneticsMutationsLesson = lessonSchema.parse({
  id: 'genetics-mutations',
  revision: 1,
  questionId: 'genetics-mutations-frameshift',
  correctOptionId: 'frameshift-reading-frame',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch14',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/14-6',
      section: 'Chapter 14 · DNA Structure and Function: DNA Repair and Mutations',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Genética',
      hook: 'Como a inserção de apenas uma base pode destruir completamente a função de uma proteína inteira?',
      title: 'Mutações gênicas: de trocas pontuais a desvio de matriz',
      description: 'Analise as consequências funcionais de mutações silenciosas, missense, nonsense e frameshift.',
      objective: 'Classificar os tipos de mutações gênicas pontuais e explicar por que o frameshift altera todos os códons a jusante.',
      stages: [
        {
          id: 'point-mutations',
          title: 'Mutações silenciosas e missense',
          paragraphs: [
            'Uma mutação de ponto troca uma única base nitrogenada. Se a alteração codifica o mesmo aminoácido devido ao código genético degenerado, a mutação é silenciosa.',
            'Quando a troca gera um aminoácido diferente, chama-se missense (sentido trocado), como ocorre na anemia falciforme (Glu → Val).',
          ],
          takeaway: 'Mutações de ponto podem ser neutras (silenciosas) ou alterar um único aminoácido (missense).',
          diagram: 'dna',
        },
        {
          id: 'nonsense-mutations',
          title: 'Mutações nonsense: parada precoce',
          paragraphs: [
            'Uma mutação nonsense converte um códon de aminoácido em um códon de parada prematuro (UAA, UAG ou UGA).',
            'O ribossomo interrompe a síntese, gerando uma proteína truncada que quase sempre perde sua atividade biológica e é degradada.',
          ],
          takeaway: 'Nonsense = introdução prematura de códon de terminação gerando proteína truncada.',
          diagram: 'dna',
        },
        {
          id: 'frameshift-mutations',
          title: 'Frameshift: mudança na matriz de leitura',
          paragraphs: [
            'A inserção ou deleção de bases em número não múltiplo de três altera o agrupamento dos códons subsequentes.',
            'A partir do ponto de mutação, todos os aminoácidos sintetizados tornam-se incorretos, frequentemente culminando em parada precoce.',
          ],
          takeaway: 'Frameshift = inserção ou deleção que desalinha todos os códons seguintes.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento mutacional altera a matriz de leitura e modifica todos os aminoácidos codificados após o sítio da alteração?',
        options: [
          {
            id: 'frameshift-reading-frame',
            label: 'Inserção ou deleção de nucleotídeos em número não múltiplo de 3',
            explanation: 'Correto: a adição ou perda de 1 ou 2 bases desalinha a leitura dos códons de 3 em 3 a partir daquele ponto.',
          },
          {
            id: 'silent-same-aa',
            label: 'Substituição sinônima de base na terceira posição do códon',
            explanation: 'Incorreto: mutações silenciosas mantêm o mesmo aminoácido e preservam a matriz de leitura.',
          },
          {
            id: 'missense-single-aa',
            label: 'Troca de uma base com alteração de apenas um aminoácido isolado',
            explanation: 'Incorreto: mutações missense afetam unicamente o códon atingido, sem alterar o alinhamento dos seguintes.',
          },
          {
            id: 'nonsense-premature-stop',
            label: 'Criação de códon de parada sem alteração na contagem das bases prévias',
            explanation: 'Incorreto: mutações nonsense pontuais interrompem a tradução sem desviar a matriz de leitura precedente.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How can the insertion of a single base completely abolish the activity of an entire protein?',
      title: 'Gene mutations: from point substitutions to frameshifts',
      description: 'Analyze the functional consequences of silent, missense, nonsense, and frameshift mutations.',
      objective: 'Classify point gene mutations and explain why frameshifts alter every downstream codon.',
      stages: [
        {
          id: 'point-mutations',
          title: 'Silent and missense mutations',
          paragraphs: [
            'A point mutation substitutes a single nitrogenous base. If the alteration codes for the same amino acid due to genetic code degeneracy, it is silent.',
            'When the base change codes for a different amino acid, it is termed missense, as observed in sickle cell anemia (Glu → Val).',
          ],
          takeaway: 'Point mutations can be neutral (silent) or replace a single amino acid (missense).',
          diagram: 'dna',
        },
        {
          id: 'nonsense-mutations',
          title: 'Nonsense mutations: premature termination',
          paragraphs: [
            'A nonsense mutation converts an amino acid codon into a premature stop codon (UAA, UAG, or UGA).',
            'The ribosome stops translation prematurely, generating a truncated protein that typically loses biological function and is degraded.',
          ],
          takeaway: 'Nonsense = premature introduction of a stop codon producing a truncated protein.',
          diagram: 'dna',
        },
        {
          id: 'frameshift-mutations',
          title: 'Frameshift: altered reading frame',
          paragraphs: [
            'The insertion or deletion of nucleotides in numbers not divisible by three disrupts the triplet reading frame.',
            'From the mutation site onward, every downstream codon is misread, frequently leading to premature termination downstream.',
          ],
          takeaway: 'Frameshift = insertion or deletion that shifts the triplet reading frame downstream.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which mutational event shifts the translational reading frame and alters every amino acid coded downstream of the lesion?',
        options: [
          {
            id: 'frameshift-reading-frame',
            label: 'Insertion or deletion of nucleotides not divisible by three',
            explanation: 'Correct: adding or deleting 1 or 2 bases shifts the downstream triplet alignment, altering every subsequent amino acid.',
          },
          {
            id: 'silent-same-aa',
            label: 'Synonymous base substitution at the third codon position',
            explanation: 'Incorrect: silent mutations code for the same amino acid and maintain the reading frame intact.',
          },
          {
            id: 'missense-single-aa',
            label: 'Single-base substitution altering only one isolated amino acid',
            explanation: 'Incorrect: missense mutations affect only the single altered codon, preserving the downstream reading frame.',
          },
          {
            id: 'nonsense-premature-stop',
            label: 'Point stop codon introduction without altering base spacing',
            explanation: 'Incorrect: point nonsense mutations terminate synthesis prematurely without shifting triplet reading alignment.',
          },
        ],
      },
    },
  },
});

export const geneticsChromosomesLesson = lessonSchema.parse({
  id: 'genetics-chromosomes',
  revision: 1,
  questionId: 'genetics-chromosomes-aneuploidy',
  correctOptionId: 'meiotic-nondisjunction',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch13',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/13-3',
      section: 'Chapter 13 · Meiosis and Sexual Reproduction: Errors in Meiosis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Genética',
      hook: 'Como um erro na separação dos cromossomos durante a divisão celular gera a trissomia do 21?',
      title: 'Citogenética e aneuploidias: não disjunção meiótica',
      description: 'Estude o cariótipo humano normal e os mecanismos de não disjunção cromossômica que originam aneuploidias.',
      objective: 'Identificar a composição cromossômica humana padrão e explicar a não disjunção meiótica como causa da trissomia do 21.',
      stages: [
        {
          id: 'human-karyotype',
          title: 'Cariótipo humano diploide',
          paragraphs: [
            'O cariótipo humano normal compreende 46 cromossomos organizados em 23 pares: 22 pares de autossomos e 1 par sexual (46,XX em mulheres e 46,XY em homens).',
            'Cada gameta humano haploide (óvulo ou espermatozoide) deve carregar exatamente 23 cromossomos.',
          ],
          takeaway: 'Cariótipo normal = 46 cromossomos (2n) distribuídos em 23 pares.',
          diagram: 'dna',
        },
        {
          id: 'nondisjunction-mechanism',
          title: 'Mecanismo da não disjunção meiótica',
          paragraphs: [
            'A não disjunção é a falha na separação de cromossomos homólogos na meiose I ou de cromátides-irmãs na meiose II.',
            'Como resultado, um gameta recebe dois exemplares do mesmo cromossomo (n+1), enquanto outro não recebe nenhum exemplar (n-1).',
          ],
          takeaway: 'Não disjunção meiótica gera gametas com número cromossômico alterado (n+1 ou n-1).',
          diagram: 'dna',
        },
        {
          id: 'trisomy-21-syndrome',
          title: 'Trissomia do 21 e síndrome de Down',
          paragraphs: [
            'Quando um gameta portador de um cromossomo 21 extra (n+1) é fecundado por um gameta normal (n), o zigoto resultante possui 47 cromossomos (47,XX,+21 ou 47,XY,+21).',
            'Essa aneuploidia autossômica viável é a causa genética mais prevalente da síndrome de Down.',
          ],
          takeaway: 'Fecundação de gameta n+1 gera zigoto trissômico com 47 cromossomos.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o mecanismo citogenético primário responsável pela formação de um cariótipo com trissomia livre do cromossomo 21?',
        options: [
          {
            id: 'meiotic-nondisjunction',
            label: 'Não disjunção meiótica na separação de homólogos ou cromátides',
            explanation: 'Correto: a não disjunção durante a ovogênese ou espermatogênese gera um gameta com dois cromossomos 21, resultando em 47 cromossomos após a fertilização.',
          },
          {
            id: 'mitotic-cytokinesis',
            label: 'Falha completa da citocinese em células da linhagem somática',
            explanation: 'Incorreto: a falha de citocinese somática gera tetraploidia local, não gametas aneuploides transmissíveis.',
          },
          {
            id: 'crossing-over-inversion',
            label: 'Inversão pericêntrica equilibrada durante o crossing-over',
            explanation: 'Incorreto: inversões cromossômicas rearranjam segmentos sem alterar o número total de cromossomos do indivíduo.',
          },
          {
            id: 'epigenetic-methylation',
            label: 'Hipermetilação promotora que silencia o cromossomo 21 inteiro',
            explanation: 'Incorreto: o silenciamento epigenético modula transcrição, mas não adiciona um terceiro cromossomo físico ao cariótipo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'How does a chromosome separation failure during cell division lead to trisomy 21?',
      title: 'Cytogenetics and aneuploidies: meiotic nondisjunction',
      description: 'Examine the normal human karyotype and the meiotic nondisjunction mechanisms that produce aneuploidy.',
      objective: 'Identify standard human chromosome complement and explain meiotic nondisjunction as the cause of trisomy 21.',
      stages: [
        {
          id: 'human-karyotype',
          title: 'Standard human diploid karyotype',
          paragraphs: [
            'The normal human karyotype contains 46 chromosomes in 23 pairs: 22 autosome pairs and 1 sex chromosome pair (46,XX in females and 46,XY in males).',
            'Each haploid human gamete (oocyte or sperm) carries exactly 23 chromosomes.',
          ],
          takeaway: 'Normal karyotype = 46 chromosomes (2n) arranged in 23 pairs.',
          diagram: 'dna',
        },
        {
          id: 'nondisjunction-mechanism',
          title: 'Mechanism of meiotic nondisjunction',
          paragraphs: [
            'Nondisjunction is the failure of homologous chromosomes to separate in meiosis I, or sister chromatids in meiosis II.',
            'Consequently, one daughter gamete receives two copies of the chromosome (n+1), while the other receives none (n-1).',
          ],
          takeaway: 'Meiotic nondisjunction generates abnormal gametes carrying n+1 or n-1 chromosomes.',
          diagram: 'dna',
        },
        {
          id: 'trisomy-21-syndrome',
          title: 'Trisomy 21 and Down syndrome',
          paragraphs: [
            'When an aneuploid gamete carrying an extra chromosome 21 (n+1) is fertilized by a normal gamete (n), the zygote has 47 chromosomes (47,XX,+21 or 47,XY,+21).',
            'This viable autosomal aneuploidy is the most common genetic etiology of Down syndrome.',
          ],
          takeaway: 'Fertilization of an n+1 gamete produces a trisomic zygote with 47 chromosomes.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the primary cytogenetic mechanism responsible for producing a free trisomy 21 karyotype?',
        options: [
          {
            id: 'meiotic-nondisjunction',
            label: 'Meiotic nondisjunction during homolog or chromatid separation',
            explanation: 'Correct: nondisjunction during gametogenesis produces a gamete with two copies of chromosome 21, yielding 47 chromosomes upon fertilization.',
          },
          {
            id: 'mitotic-cytokinesis',
            label: 'Complete failure of cytokinesis in somatic lineages',
            explanation: 'Incorrect: somatic cytokinesis failure causes localized tetraploidy, not transmissible aneuploid gametes.',
          },
          {
            id: 'crossing-over-inversion',
            label: 'Balanced pericentric inversion during homologous crossing-over',
            explanation: 'Incorrect: inversions rearrange genetic segments without changing the total count of chromosomes.',
          },
          {
            id: 'epigenetic-methylation',
            label: 'Promoter hypermethylation silencing the entirety of chromosome 21',
            explanation: 'Incorrect: epigenetic silencing regulates transcription without introducing an additional physical chromosome.',
          },
        ],
      },
    },
  },
});

export const geneticsXLinkedLesson = lessonSchema.parse({
  id: 'genetics-x-linked',
  revision: 1,
  questionId: 'genetics-x-linked-hemizygous',
  correctOptionId: 'male-hemizygosity',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-biology-2e-ch13-linked',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/13-2',
      section: 'Chapter 13 · Chromosomal Basis of Inherited Disorders: Sex-Linked Traits',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Genética',
      hook: 'Por que o daltonismo e a hemofilia afetam muito mais homens do que mulheres?',
      title: 'Herança ligada ao X e inativação cromossômica',
      description: 'Explore a hemizigose masculina, a compensação de dose por inativação do X e o corpúsculo de Barr.',
      objective: 'Explicar a vulnerabilidade masculina a mutações ligadas ao X pela hemizigose e o papel da inativação do X em fêmeas.',
      stages: [
        {
          id: 'hemizygous-males',
          title: 'Hemizigose masculina no cromossomo X',
          paragraphs: [
            'Homens possuem um cromossomo X e um cromossomo Y (XY). Como o cromossomo Y não possui a grande maioria dos alelos do X, o homem é hemizigoto.',
            'Qualquer alelo recessivo no cromossomo X se expressa fenotipicamente no homem, pois não há segundo alelo para mascará-lo.',
          ],
          takeaway: 'Hemizigose = homens (XY) expressam alelos recessivos do X sem contrapartida alélica.',
          diagram: 'dna',
        },
        {
          id: 'x-inactivation-barr',
          title: 'Inativação do X e o corpúsculo de Barr',
          paragraphs: [
            'Em fêmeas de mamíferos (XX), um dos cromossomos X é aleatoriamente condensado e silenciado precocemente no embrião (hipótese de Lyon).',
            'O cromossomo X inativado e hipercondensado é visível ao microscópio óptico interfásico como o corpúsculo de Barr.',
          ],
          takeaway: 'Inativação do X = condensação em corpúsculo de Barr para compensação de dose gênica.',
          diagram: 'dna',
        },
        {
          id: 'epigenetic-expression',
          title: 'Expressão epigenética em mosaico',
          paragraphs: [
            'Como a inativação do X materno ou paterno ocorre aleatoriamente em cada célula precursora, as fêmeas adultas são mosaicos celulares funcionais.',
            'Isso protege fêmeas heterozigotas de expressarem sintomas graves de distúrbios recessivos ligados ao cromossomo X.',
          ],
          takeaway: 'Fêmeas heterozigotas formam mosaico tecidual funcional protetor.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que distúrbios recessivos ligados ao cromossomo X manifestam-se com frequência e severidade muito maiores em indivíduos do sexo masculino?',
        options: [
          {
            id: 'male-hemizygosity',
            label: 'Homens são hemizigotos (XY), manifestando alelos recessivos por ausência de segundo alelo homólogo',
            explanation: 'Correto: possuindo apenas um cromossomo X, qualquer alelo recessivo nele contido é diretamente expresso pelo fenótipo masculino.',
          },
          {
            id: 'barr-inactivation-males',
            label: 'Homens inativam seu único cromossomo X formando um corpúsculo de Barr intracelular',
            explanation: 'Incorreto: homens mantêm seu único cromossomo X ativo; a inativação do X ocorre apenas em células com múltiplos cromossomos X (como fêmeas 46,XX).',
          },
          {
            id: 'y-chromosome-masking',
            label: 'O cromossomo Y possui alelos dominantes que ativam mutações deletérias do X',
            explanation: 'Incorreto: o cromossomo Y humano tem poucos genes e não contém a maioria dos contrapostos alélicos dos genes do cromossomo X.',
          },
          {
            id: 'autosomal-imprinting',
            label: 'Genes do cromossomo X sofrem imprinting autossômico exclusivo na linhagem paterna',
            explanation: 'Incorreto: a manifestação decorre da hemizigose dos cromossomos sexuais, não de silenciamento autossômico diferencial.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'Why do color blindness and hemophilia affect males far more often than females?',
      title: 'X-linked inheritance and chromosome inactivation',
      description: 'Explore male hemizygosity, dosage compensation via X-inactivation, and the Barr body.',
      objective: 'Explain male vulnerability to X-linked mutations via hemizygosity and the protective role of X-inactivation in females.',
      stages: [
        {
          id: 'hemizygous-males',
          title: 'Male hemizygosity on the X chromosome',
          paragraphs: [
            'Males carry one X chromosome and one Y chromosome (XY). Because the Y chromosome lacks corresponding loci for most X genes, males are hemizygous.',
            'Any recessive allele on the X chromosome is directly expressed in the male phenotype because there is no homologous counterpart to mask it.',
          ],
          takeaway: 'Hemizygosity = males (XY) express X-linked recessive alleles due to lack of a homologous allele.',
          diagram: 'dna',
        },
        {
          id: 'x-inactivation-barr',
          title: 'X-inactivation and the Barr body',
          paragraphs: [
            'In mammalian females (XX), one X chromosome is randomly condensed and transcriptionally silenced early in embryonic development (Lyon hypothesis).',
            'The inactivated, highly condensed X chromosome forms a dense heterochromatic structure called the Barr body.',
          ],
          takeaway: 'X-inactivation = condensation into a Barr body to equalize gene dosage with males.',
          diagram: 'dna',
        },
        {
          id: 'epigenetic-expression',
          title: 'Mosaic epigenetic expression',
          paragraphs: [
            'Because paternal or maternal X-inactivation occurs randomly across embryonic cells, adult females are functional cellular mosaics.',
            'This mosaic expression protects heterozygous females from developing severe manifestations of X-linked recessive disorders.',
          ],
          takeaway: 'Heterozygous females represent a functional tissue mosaic providing phenotypic protection.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why do X-linked recessive disorders manifest with much higher frequency and clinical severity in biological males?',
        options: [
          {
            id: 'male-hemizygosity',
            label: 'Males are hemizygous (XY), expressing recessive alleles because no second homologous allele exists',
            explanation: 'Correct: possessing only one X chromosome, any recessive mutation is expressed without a dominant counterpart to mask it.',
          },
          {
            id: 'barr-inactivation-males',
            label: 'Males inactivate their single X chromosome forming an intracellular Barr body',
            explanation: 'Incorrect: males keep their sole X chromosome active; X-inactivation occurs in cells with multiple X chromosomes.',
          },
          {
            id: 'y-chromosome-masking',
            label: 'The Y chromosome contains dominant alleles that actively trigger X-linked deleterious mutations',
            explanation: 'Incorrect: the human Y chromosome contains relatively few genes and does not carry homologous alleles for most X-linked loci.',
          },
          {
            id: 'autosomal-imprinting',
            label: 'X-chromosome loci undergo obligatory autosomal imprinting exclusively in paternal lineages',
            explanation: 'Incorrect: the phenotypic difference stems from chromosomal hemizygosity, not differential autosomal imprinting.',
          },
        ],
      },
    },
  },
});
