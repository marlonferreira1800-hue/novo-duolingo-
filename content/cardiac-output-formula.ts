import { lessonSchema } from '../src/contracts/learning';

export const cardiacOutputFormulaLesson = lessonSchema.parse({
  id: 'cardiac-output-formula',
  revision: 1,
  questionId: 'cardiac-output-formula-fill',
  correctOptionId: 'stroke-volume',
  estimatedMinutes: 2,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-19-4',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology',
      section: '19.4 Cardiac Physiology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Sistema cardiovascular',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'Toda bomba tem uma fórmula. Qual número falta nessa aqui?',
      title: 'A fórmula do débito cardíaco',
      description: 'Complete a relação entre frequência cardíaca e volume sistólico que define o débito cardíaco.',
      objective: 'Completar corretamente a fórmula do débito cardíaco (DC = FC × VS) e justificar cada termo.',
      stages: [
        {
          id: 'pump',
          title: 'Uma bomba por minuto',
          paragraphs: [
            'O débito cardíaco (DC) é o volume de sangue que cada ventrículo bombeia em um minuto. Quanto mais batimentos por minuto e quanto mais sangue por batimento, maior o débito.',
          ],
          takeaway: 'Débito cardíaco depende de dois fatores: frequência e volume por batimento.',
          diagram: 'pump',
        },
        {
          id: 'equation',
          title: 'A fórmula',
          paragraphs: [
            'Frequência cardíaca (FC) é o número de batimentos por minuto. Volume sistólico (VS) é o volume ejetado por batimento. O produto dos dois dá o débito cardíaco: DC = FC × VS.',
          ],
          takeaway: 'DC = FC × VS: a fórmula tem exatamente esses dois fatores.',
          diagram: 'equation',
        },
        {
          id: 'calculation',
          title: 'Conferindo as unidades',
          paragraphs: [
            'Batimentos/min × mL/batimento resulta em mL/min, porque a unidade de batimento se cancela. Por isso o segundo fator da fórmula precisa ser um volume por batimento.',
          ],
          takeaway: 'Só o volume sistólico completa a fórmula com as unidades corretas.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a fórmula do débito cardíaco:',
        blank: 'DC = FC × ______',
        options: [
          {
            id: 'stroke-volume',
            label: 'VS (volume sistólico)',
            explanation: 'Correto: DC = FC × VS. Volume sistólico é o sangue ejetado por batimento, e suas unidades (mL/batimento) fazem o resultado sair em mL/min.',
          },
          {
            id: 'heart-rate-again',
            label: 'FC (frequência cardíaca)',
            explanation: 'Não: a frequência cardíaca já aparece no primeiro fator. Repeti-la daria batimentos²/min, sem sentido de volume.',
          },
          {
            id: 'blood-pressure',
            label: 'PA (pressão arterial)',
            explanation: 'Não: pressão arterial não entra na fórmula do débito cardíaco; ela é consequência do débito e da resistência vascular.',
          },
          {
            id: 'respiratory-rate',
            label: 'FR (frequência respiratória)',
            explanation: 'Não: a frequência respiratória não participa do cálculo do débito cardíaco.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'Every pump has a formula. Which term is missing from this one?',
      title: 'The cardiac output formula',
      description: 'Complete the relationship between heart rate and stroke volume that defines cardiac output.',
      objective: 'Correctly complete the cardiac output formula (CO = HR × SV) and justify each term.',
      stages: [
        {
          id: 'pump',
          title: 'One pump per minute',
          paragraphs: [
            'Cardiac output (CO) is the volume of blood each ventricle pumps in one minute. The more beats per minute and the more blood per beat, the greater the output.',
          ],
          takeaway: 'Cardiac output depends on two factors: rate and volume per beat.',
          diagram: 'pump',
        },
        {
          id: 'equation',
          title: 'The formula',
          paragraphs: [
            'Heart rate (HR) is the number of beats per minute. Stroke volume (SV) is the volume ejected per beat. Multiplying the two gives cardiac output: CO = HR × SV.',
          ],
          takeaway: 'CO = HR × SV: the formula has exactly these two factors.',
          diagram: 'equation',
        },
        {
          id: 'calculation',
          title: 'Checking the units',
          paragraphs: [
            'Beats/min × mL/beat gives mL/min because the beat unit cancels. That is why the second factor must be a volume per beat.',
          ],
          takeaway: 'Only stroke volume completes the formula with the right units.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the cardiac output formula:',
        blank: 'CO = HR × ______',
        options: [
          {
            id: 'stroke-volume',
            label: 'SV (stroke volume)',
            explanation: 'Correct: CO = HR × SV. Stroke volume is the blood ejected per beat, and its units (mL/beat) make the result come out in mL/min.',
          },
          {
            id: 'heart-rate-again',
            label: 'HR (heart rate)',
            explanation: 'No: heart rate is already the first factor. Repeating it would give beats²/min, which is not a volume.',
          },
          {
            id: 'blood-pressure',
            label: 'BP (blood pressure)',
            explanation: 'No: blood pressure is not part of the cardiac output formula; it results from output and vascular resistance.',
          },
          {
            id: 'respiratory-rate',
            label: 'RR (respiratory rate)',
            explanation: 'No: respiratory rate does not take part in the cardiac output calculation.',
          },
        ],
      },
    },
  },
});
