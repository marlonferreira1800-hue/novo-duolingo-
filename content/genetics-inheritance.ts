import { lessonSchema } from '../src/contracts/learning';

export const geneticsInheritanceLesson = lessonSchema.parse({
  id: 'genetics-inheritance',
  revision: 1,
  questionId: 'genetics-dominant-cross',
  correctOptionId: 'aa-25',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'genetics',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch28',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-1',
      section: 'Chapter 28 · Development and Inheritance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Genética',
      hook: 'Se dois heterozigotos Aa se cruzam, qual a chance de nascer um aa?',
      title: 'Herança mendeliana: alelos dominantes e recessivos',
      description: 'Monte o quadrado de Punnett de Aa × Aa e encontre a proporção de cada genótipo.',
      objective: 'Aplicar o quadrado de Punnett em um cruzamento Aa × Aa e prever a proporção de homozigotos recessivos.',
      stages: [
        {
          id: 'alleles',
          title: 'Um gene, dois alelos',
          paragraphs: [
            'Cada característica é controlada por um gene com alelos. Alelo dominante (A) se manifesta mesmo com um só exemplar; o recessivo (a) só aparece em dose dupla (aa).',
          ],
          takeaway: 'Dominante (A) mascara o recessivo (a) no heterozigoto Aa.',
          diagram: 'dna',
        },
        {
          id: 'punnett',
          title: 'O quadrado de Punnett',
          paragraphs: [
            'No cruzamento Aa × Aa, cada pai transmite A ou a com 50% de chance. O quadrado mostra as quatro combinações possíveis da prole.',
          ],
          takeaway: 'Aa × Aa → AA, Aa, Aa, aa.',
          diagram: 'dna',
        },
        {
          id: 'ratio',
          title: 'A proporção 1 : 2 : 1',
          paragraphs: [
            'Genótipos: 1 AA : 2 Aa : 1 aa. Fenótipos: 3 com fenótipo dominante : 1 com recessivo — a clássica proporção 3:1 de Mendel.',
          ],
          takeaway: 'Homozigoto recessivo (aa) aparece em 1 de 4, ou 25% da prole.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'No cruzamento Aa × Aa, complete a proporção de genótipos da prole:',
        blank: 'Aa × Aa → 1 AA : 2 Aa : 1 aa  →  aa aparece em ______ da prole',
        options: [
          {
            id: 'aa-25',
            label: '25% (1 em 4)',
            explanation: 'Correto: o quadrado de Punnett de Aa × Aa dá 1 AA, 2 Aa e 1 aa — ou seja, 25% de homozigotos recessivos.',
          },
          {
            id: 'aa-50',
            label: '50% (2 em 4)',
            explanation: 'Não: 50% é a proporção de heterozigotos (Aa). O aa aparece em apenas 1 das 4 células do quadrado.',
          },
          {
            id: 'aa-75',
            label: '75% (3 em 4)',
            explanation: 'Não: 75% dos descendentes têm o fenótipo dominante (AA ou Aa), mas o genótipo aa é 25%.',
          },
          {
            id: 'aa-0',
            label: '0%',
            explanation: 'Não: como os dois pais são Aa, cada um pode passar o alelo a, gerando aa em 25% dos casos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Genetics',
      hook: 'If two heterozygotes Aa mate, what is the chance of an aa offspring?',
      title: 'Mendelian inheritance: dominant and recessive alleles',
      description: 'Set up the Punnett square for Aa × Aa and find the proportion of each genotype.',
      objective: 'Apply the Punnett square to an Aa × Aa cross and predict the proportion of recessive homozygotes.',
      stages: [
        {
          id: 'alleles',
          title: 'One gene, two alleles',
          paragraphs: [
            'Each trait is controlled by a gene with alleles. A dominant allele (A) shows up even in a single copy; the recessive (a) appears only in double dose (aa).',
          ],
          takeaway: 'Dominant (A) masks recessive (a) in the heterozygote Aa.',
          diagram: 'dna',
        },
        {
          id: 'punnett',
          title: 'The Punnett square',
          paragraphs: [
            'In an Aa × Aa cross, each parent passes on A or a with 50% probability. The square shows the four possible offspring combinations.',
          ],
          takeaway: 'Aa × Aa → AA, Aa, Aa, aa.',
          diagram: 'dna',
        },
        {
          id: 'ratio',
          title: 'The 1 : 2 : 1 ratio',
          paragraphs: [
            'Genotypes: 1 AA : 2 Aa : 1 aa. Phenotypes: 3 dominant phenotype : 1 recessive — Mendel’s classic 3:1 ratio.',
          ],
          takeaway: 'Recessive homozygote (aa) appears in 1 of 4, or 25% of the offspring.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'In an Aa × Aa cross, complete the offspring genotype ratio:',
        blank: 'Aa × Aa → 1 AA : 2 Aa : 1 aa  →  aa appears in ______ of the offspring',
        options: [
          {
            id: 'aa-25',
            label: '25% (1 in 4)',
            explanation: 'Correct: the Aa × Aa Punnett square gives 1 AA, 2 Aa and 1 aa — 25% recessive homozygotes.',
          },
          {
            id: 'aa-50',
            label: '50% (2 in 4)',
            explanation: 'No: 50% is the proportion of heterozygotes (Aa). aa appears in only 1 of the 4 squares.',
          },
          {
            id: 'aa-75',
            label: '75% (3 in 4)',
            explanation: 'No: 75% of offspring show the dominant phenotype (AA or Aa), but the aa genotype is 25%.',
          },
          {
            id: 'aa-0',
            label: '0%',
            explanation: 'No: since both parents are Aa, each can pass the a allele, producing aa in 25% of cases.',
          },
        ],
      },
    },
  },
});
