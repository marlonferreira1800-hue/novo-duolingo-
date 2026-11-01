import { lessonSchema } from '../src/contracts/learning';

export const renalFiltrationLesson = lessonSchema.parse({
  id: 'renal-filtration',
  revision: 1,
  questionId: 'renal-filtration-gfr',
  correctOptionId: 'gfr-125',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch25',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-1',
      section: 'Chapter 25 · The Urinary System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Seus rins filtram todo o seu sangue várias vezes por dia — quanto passa pelo filtro?',
      title: 'Filtração glomerular: o primeiro passo da formação da urina',
      description: 'Entenda a filtração glomerular e o valor aproximado da taxa de filtração glomerular (TFG).',
      objective: 'Descrever a filtração glomerular como etapa inicial da formação da urina e informar o valor típico da TFG em mL/min.',
      stages: [
        {
          id: 'glomerulus',
          title: 'O glomérulo é o filtro',
          paragraphs: [
            'No glomérulo, o sangue sob pressão é filtrado: água e solutos pequenos passam para a cápsula de Bowman, formando o filtrado. Proteínas e células sanguíneas ficam no sangue.',
          ],
          takeaway: 'O glomérulo filtra o sangue por pressão, formando o filtrado inicial.',
          diagram: 'kidney',
        },
        {
          id: 'tubule',
          title: 'O túbulo ajusta o filtrado',
          paragraphs: [
            'Ao longo do túbulo renal (proximal, alça de Henle, distal e coletor), o organismo reabsorve o que precisa (água, glicose, íons) e secreta o que deve eliminar.',
            'Do filtrado inicial, sobra apenas a urina final.',
          ],
          takeaway: 'Reabsorção e secreção no túbulo transformam filtrado em urina.',
          diagram: 'kidney',
        },
        {
          id: 'gfr',
          title: 'A taxa de filtração glomerular',
          paragraphs: [
            'A TFG mede quanto plasma é filtrado por minuto nos dois rins. Em um adulto saudável, gira em torno de 125 mL/min — cerca de 180 litros por dia de filtrado.',
            'A maior parte desse filtrado é reabsorvida; urinamos cerca de 1–2 litros por dia.',
          ],
          takeaway: 'TFG típica ≈ 125 mL/min; quase tudo é reabsorvido depois.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete com o valor típico da taxa de filtração glomerular em um adulto saudável:',
        blank: 'TFG ≈ ______ mL/min',
        options: [
          {
            id: 'gfr-125',
            label: '125 mL/min',
            explanation: 'Correto: a TFG média de um adulto saudável é cerca de 125 mL/min, o que corresponde a ~180 L de filtrado por dia.',
          },
          {
            id: 'gfr-1500',
            label: '1.500 mL/min',
            explanation: 'Não: 1.500 mL/min está longe do valor fisiológico; a TFG fica em torno de 125 mL/min.',
          },
          {
            id: 'gfr-12',
            label: '12 mL/min',
            explanation: 'Não: 12 mL/min indicaria insuficiência renal grave; o valor normal é próximo de 125 mL/min.',
          },
          {
            id: 'gfr-urine-1',
            label: '1–2 mL/min',
            explanation: 'Não: 1–2 mL/min é aproximadamente o fluxo de urina final, não a filtração glomerular.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'Your kidneys filter your whole blood several times a day — how much goes through the filter?',
      title: 'Glomerular filtration: the first step of urine formation',
      description: 'Understand glomerular filtration and the approximate value of the glomerular filtration rate (GFR).',
      objective: 'Describe glomerular filtration as the first step of urine formation and state the typical GFR in mL/min.',
      stages: [
        {
          id: 'glomerulus',
          title: 'The glomerulus is the filter',
          paragraphs: [
            'In the glomerulus, blood under pressure is filtered: water and small solutes pass into Bowman’s capsule, forming the filtrate. Proteins and blood cells stay in the blood.',
          ],
          takeaway: 'The glomerulus filters blood by pressure, forming the initial filtrate.',
          diagram: 'kidney',
        },
        {
          id: 'tubule',
          title: 'The tubule adjusts the filtrate',
          paragraphs: [
            'Along the renal tubule (proximal, loop of Henle, distal and collecting), the body reabsorbs what it needs (water, glucose, ions) and secretes what must be eliminated.',
            'From the initial filtrate, only the final urine remains.',
          ],
          takeaway: 'Reabsorption and secretion in the tubule turn filtrate into urine.',
          diagram: 'kidney',
        },
        {
          id: 'gfr',
          title: 'The glomerular filtration rate',
          paragraphs: [
            'GFR measures how much plasma is filtered per minute by both kidneys. In a healthy adult it is about 125 mL/min — roughly 180 liters of filtrate per day.',
            'Most of that filtrate is reabsorbed; we urinate about 1–2 liters per day.',
          ],
          takeaway: 'Typical GFR ≈ 125 mL/min; almost everything is reabsorbed afterward.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete with the typical glomerular filtration rate in a healthy adult:',
        blank: 'GFR ≈ ______ mL/min',
        options: [
          {
            id: 'gfr-125',
            label: '125 mL/min',
            explanation: 'Correct: average GFR in a healthy adult is about 125 mL/min, corresponding to ~180 L of filtrate per day.',
          },
          {
            id: 'gfr-1500',
            label: '1,500 mL/min',
            explanation: 'No: 1,500 mL/min is far from the physiological value; GFR is around 125 mL/min.',
          },
          {
            id: 'gfr-12',
            label: '12 mL/min',
            explanation: 'No: 12 mL/min would indicate severe kidney failure; the normal value is near 125 mL/min.',
          },
          {
            id: 'gfr-urine-1',
            label: '1–2 mL/min',
            explanation: 'No: 1–2 mL/min is roughly the final urine flow, not the glomerular filtration rate.',
          },
        ],
      },
    },
  },
});
