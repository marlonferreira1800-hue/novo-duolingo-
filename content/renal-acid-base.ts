import { lessonSchema } from '../src/contracts/learning';

export const renalAcidBaseLesson = lessonSchema.parse({
  id: 'renal-acid-base',
  revision: 1,
  questionId: 'renal-acid-base-ph',
  correctOptionId: 'ph-740',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch26',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/26-1',
      section: 'Chapter 26 · Fluid, Electrolyte, and Acid-Base Balance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'O que mantém o pH do sangue tão estável, entre 7,35 e 7,45?',
      title: 'Equilíbrio ácido-base: tampões, pulmão e rim',
      description: 'Entenda como o organismo controla o pH sanguíneo e o papel do rim na excreção de ácido.',
      objective: 'Indicar a faixa normal de pH arterial (7,35–7,45) e explicar o papel dos tampões, do pulmão e do rim no equilíbrio ácido-base.',
      stages: [
        {
          id: 'buffers',
          title: 'Os tampões seguram o primeiro impacto',
          paragraphs: [
            'O tampão bicarbonato (HCO₃⁻/H₂CO₃) é o principal do sangue: ele converte ácidos fortes em fracos, amortecendo a variação de pH em segundos.',
          ],
          takeaway: 'Tampão bicarbonato = primeira linha, em segundos.',
          diagram: 'kidney',
        },
        {
          id: 'lungs',
          title: 'O pulmão ajusta em minutos',
          paragraphs: [
            'A respiração controla o CO₂: hiperventilar elimina CO₂ e sobe o pH (alcalose); hipoventilar retém CO₂ e baixa o pH (acidose).',
          ],
          takeaway: 'Pulmão regula CO₂ em minutos.',
          diagram: 'kidney',
        },
        {
          id: 'kidneys',
          title: 'O rim ajusta em horas a dias',
          paragraphs: [
            'Os rins reabsorvem HCO₃⁻ e excretam H⁺ na urina. É o ajuste mais potente e duradouro do pH, embora mais lento.',
          ],
          takeaway: 'Rim regula HCO₃⁻/H⁺ em horas — o ajuste definitivo.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete com a faixa normal do pH arterial:',
        blank: 'pH arterial normal = ______',
        options: [
          {
            id: 'ph-740',
            label: '7,35 a 7,45',
            explanation: 'Correto: o pH arterial normal fica entre 7,35 e 7,45. Abaixo disso é acidose; acima, alcalose.',
          },
          {
            id: 'ph-70',
            label: '7,0 exato',
            explanation: 'Não: 7,0 é neutro, mas o sangue arterial é levemente alcalino, entre 7,35 e 7,45.',
          },
          {
            id: 'ph-780',
            label: '7,8 a 8,0',
            explanation: 'Não: acima de 7,45 já é alcalose; a faixa normal não chega a 7,8.',
          },
          {
            id: 'ph-60',
            label: '6,0 a 6,5',
            explanation: 'Não: esse pH seria酸ose grave, incompatível com a vida.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'What keeps blood pH so stable, between 7.35 and 7.45?',
      title: 'Acid–base balance: buffers, lung and kidney',
      description: 'Understand how the body controls blood pH and the kidney’s role in acid excretion.',
      objective: 'State the normal arterial pH range (7.35–7.45) and explain the roles of buffers, lungs and kidneys in acid–base balance.',
      stages: [
        {
          id: 'buffers',
          title: 'Buffers absorb the first hit',
          paragraphs: [
            'The bicarbonate buffer (HCO₃⁻/H₂CO₃) is the main one in blood: it converts strong acids into weak ones, damping pH changes within seconds.',
          ],
          takeaway: 'Bicarbonate buffer = first line, within seconds.',
          diagram: 'kidney',
        },
        {
          id: 'lungs',
          title: 'The lungs adjust within minutes',
          paragraphs: [
            'Breathing controls CO₂: hyperventilating blows off CO₂ and raises pH (alkalosis); hypoventilating retains CO₂ and lowers pH (acidosis).',
          ],
          takeaway: 'Lungs regulate CO₂ within minutes.',
          diagram: 'kidney',
        },
        {
          id: 'kidneys',
          title: 'The kidneys adjust over hours to days',
          paragraphs: [
            'The kidneys reabsorb HCO₃⁻ and excrete H⁺ into the urine. It is the most powerful and lasting pH adjustment, though slower.',
          ],
          takeaway: 'Kidneys regulate HCO₃⁻/H⁺ over hours — the definitive adjustment.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete with the normal arterial pH range:',
        blank: 'Normal arterial pH = ______',
        options: [
          {
            id: 'ph-740',
            label: '7.35 to 7.45',
            explanation: 'Correct: normal arterial pH is 7.35–7.45. Below that is acidosis; above it, alkalosis.',
          },
          {
            id: 'ph-70',
            label: 'exactly 7.0',
            explanation: 'No: 7.0 is neutral, but arterial blood is slightly alkaline, between 7.35 and 7.45.',
          },
          {
            id: 'ph-780',
            label: '7.8 to 8.0',
            explanation: 'No: above 7.45 is already alkalosis; the normal range never reaches 7.8.',
          },
          {
            id: 'ph-60',
            label: '6.0 to 6.5',
            explanation: 'No: that pH would be severe acidosis, incompatible with life.',
          },
        ],
      },
    },
  },
});
