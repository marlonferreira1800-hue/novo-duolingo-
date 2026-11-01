import { lessonSchema } from '../src/contracts/learning';

export const endocrineAxisLesson = lessonSchema.parse({
  id: 'endocrine-axis',
  revision: 1,
  questionId: 'endocrine-axis-order',
  correctOptionId: 'axis-order',
  correctOrderIds: ['hypothalamus', 'pituitary', 'target-gland', 'hormone'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch17',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-1',
      section: 'Chapter 17 · The Endocrine System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Quem manda em quem no sistema hormonal?',
      title: 'Eixo hipotálamo-hipofisário: a cascata hormonal',
      description: 'Siga a ordem do eixo hipotálamo-hipófise-glândula-alvo e veja o feedback negativo.',
      objective: 'Ordenar as etapas do eixo hipotálamo-hipofisário e explicar o papel do feedback negativo na regulação hormonal.',
      stages: [
        {
          id: 'hypothalamus',
          title: 'O hipotálamo inicia o eixo',
          paragraphs: [
            'O hipotálamo libera hormônios liberadores (ex.: TRH, CRH) que chegam à hipófise anterior pela circulação porta.',
          ],
          takeaway: 'O hipotálamo comanda a hipófise por hormônios liberadores.',
          diagram: 'endocrine',
        },
        {
          id: 'pituitary',
          title: 'A hipófise estimula a glândula-alvo',
          paragraphs: [
            'A hipófise anterior libera hormônios tróficos (ex.: TSH, ACTH) que estimulam glândulas como tireoide, córtex adrenal e gônadas.',
          ],
          takeaway: 'Hipófise libera hormônio trófico para a glândula-alvo.',
          diagram: 'endocrine',
        },
        {
          id: 'feedback',
          title: 'O hormônio final freia o eixo',
          paragraphs: [
            'Quando o hormônio da glândula-alvo (ex.: tiroxina) sobe no sangue, ele inibe hipotálamo e hipófise: é o feedback negativo, que mantém o equilíbrio.',
          ],
          takeaway: 'Feedback negativo: o hormônio final inibe quem o estimulou.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Coloque na ordem correta a cascata do eixo hipotálamo-hipofisário:',
        items: [
          {
            id: 'hypothalamus',
            label: 'Hipotálamo libera hormônio liberador',
            explanation: 'Primeiro passo: o hipotálamo comanda a hipófise anterior.',
          },
          {
            id: 'pituitary',
            label: 'Hipófise libera hormônio trófico',
            explanation: 'Segundo passo: a hipófise estimula a glândula-alvo.',
          },
          {
            id: 'target-gland',
            label: 'Glândula-alvo produz seu hormônio',
            explanation: 'Terceiro passo: a glândula-alvo (tireoide, adrenal, gônada) secreta o hormônio final.',
          },
          {
            id: 'hormone',
            label: 'Hormônio age nos órgãos e faz feedback negativo',
            explanation: 'Quarto passo: o hormônio circula, age nos tecidos-alvo e inibe o eixo quando em excesso.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'Who is in charge of whom in the hormonal system?',
      title: 'The hypothalamic–pituitary axis: the hormonal cascade',
      description: 'Follow the order of the hypothalamus–pituitary–target gland axis and see negative feedback.',
      objective: 'Order the steps of the hypothalamic–pituitary axis and explain the role of negative feedback in hormone regulation.',
      stages: [
        {
          id: 'hypothalamus',
          title: 'The hypothalamus starts the axis',
          paragraphs: [
            'The hypothalamus releases releasing hormones (e.g., TRH, CRH) that reach the anterior pituitary through the portal circulation.',
          ],
          takeaway: 'The hypothalamus commands the pituitary via releasing hormones.',
          diagram: 'endocrine',
        },
        {
          id: 'pituitary',
          title: 'The pituitary stimulates the target gland',
          paragraphs: [
            'The anterior pituitary releases tropic hormones (e.g., TSH, ACTH) that stimulate glands such as the thyroid, adrenal cortex and gonads.',
          ],
          takeaway: 'The pituitary releases a tropic hormone to the target gland.',
          diagram: 'endocrine',
        },
        {
          id: 'feedback',
          title: 'The final hormone brakes the axis',
          paragraphs: [
            'When the target gland’s hormone (e.g., thyroxine) rises in the blood, it inhibits the hypothalamus and pituitary: this is negative feedback, which keeps balance.',
          ],
          takeaway: 'Negative feedback: the final hormone inhibits whatever stimulated it.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Put the hypothalamic–pituitary axis cascade in the correct order:',
        items: [
          {
            id: 'hypothalamus',
            label: 'Hypothalamus releases a releasing hormone',
            explanation: 'First step: the hypothalamus commands the anterior pituitary.',
          },
          {
            id: 'pituitary',
            label: 'Pituitary releases a tropic hormone',
            explanation: 'Second step: the pituitary stimulates the target gland.',
          },
          {
            id: 'target-gland',
            label: 'Target gland produces its hormone',
            explanation: 'Third step: the target gland (thyroid, adrenal, gonad) secretes the final hormone.',
          },
          {
            id: 'hormone',
            label: 'Hormone acts on organs and gives negative feedback',
            explanation: 'Fourth step: the hormone circulates, acts on target tissues and inhibits the axis when in excess.',
          },
        ],
      },
    },
  },
});
