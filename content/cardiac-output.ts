import { lessonSchema } from '../src/contracts/learning';

export const cardiacOutputLesson = lessonSchema.parse({
  id: 'cardiac-output',
  revision: 1,
  questionId: 'cardiac-output-calculation',
  correctOptionId: 'output-5250',
  estimatedMinutes: 3,
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
      hook: 'E se o coração fosse uma bomba que nunca para — quanto sangue ela consegue enviar em um minuto?',
      title: 'Débito cardíaco: do batimento ao minuto',
      description: 'Relacione frequência cardíaca e volume sistólico para calcular o volume bombeado por minuto.',
      objective: 'Calcular o débito cardíaco de um ventrículo a partir da frequência cardíaca e do volume sistólico, explicitando as unidades.',
      stages: [
        {
          id: 'pump',
          title: 'Quanto um ventrículo bombeia por minuto?',
          paragraphs: [
            'Débito cardíaco (DC) é o volume de sangue que cada ventrículo bombeia em um minuto. O ventrículo direito envia sangue à circulação pulmonar; o esquerdo, à circulação sistêmica.',
            'As duas circulações estão em série. Para calcular o débito cardíaco, usamos o volume bombeado por um ventrículo, sem somar os volumes dos dois.',
          ],
          takeaway: 'Débito cardíaco é volume por minuto de cada ventrículo, não a soma dos dois ventrículos.',
          diagram: 'pump',
        },
        {
          id: 'equation',
          title: 'Duas medidas, um cálculo',
          paragraphs: [
            'A frequência cardíaca (FC) conta os batimentos por minuto. O volume sistólico (VS) é o volume de sangue ejetado por um ventrículo a cada batimento.',
            'Multiplique as duas medidas: DC = FC × VS. Em inglês, a mesma relação é CO = HR × SV. Nas unidades, batimentos/min × mL/batimento resulta em mL/min, pois a unidade de batimento se cancela.',
          ],
          takeaway: 'DC = FC × VS: batimentos por minuto × volume por batimento = volume por minuto.',
          diagram: 'equation',
        },
        {
          id: 'calculation',
          title: 'De 75 × 70 a 5,25 L/min',
          paragraphs: [
            'Em um exemplo hipotético, a frequência cardíaca é 75 batimentos/min e o volume sistólico de um ventrículo é 70 mL/batimento. Logo, DC = 75 × 70 = 5.250 mL/min.',
            'Como 1 L = 1.000 mL, divida por 1.000: 5.250 mL/min = 5,25 L/min. Esses valores servem apenas ao exercício; não estabelecem uma faixa de referência nem orientam condutas clínicas.',
          ],
          takeaway: 'Neste exemplo hipotético, o débito de cada ventrículo é 5.250 mL/min, equivalente a 5,25 L/min.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um exemplo hipotético, a frequência cardíaca é 75 batimentos/min e o volume sistólico de um ventrículo é 70 mL/batimento. Qual é o débito cardíaco desse ventrículo?',
        options: [
          {
            id: 'output-5250',
            label: '5.250 mL/min (5,25 L/min)',
            explanation: 'Correto: 75 batimentos/min × 70 mL/batimento = 5.250 mL/min. Dividindo por 1.000, obtemos 5,25 L/min.',
          },
          {
            id: 'output-525',
            label: '525 mL/min (0,525 L/min)',
            explanation: 'Esse resultado é dez vezes menor que o produto correto. 75 × 70 = 5.250 mL/min; a conversão para litros resulta em 5,25 L/min.',
          },
          {
            id: 'output-10500',
            label: '10.500 mL/min (10,5 L/min)',
            explanation: 'Esse resultado dobra o produto de 75 × 70. O débito cardíaco se refere a cada ventrículo; não se somam os volumes dos dois ventrículos.',
          },
          {
            id: 'output-70',
            label: '70 mL/min (0,07 L/min)',
            explanation: '70 mL/batimento é o volume sistólico informado, não um volume por minuto. É preciso multiplicá-lo por 75 batimentos/min para obter 5.250 mL/min.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'What if the heart were a pump that never stops — how much blood could it send out in one minute?',
      title: 'Cardiac output: from one beat to one minute',
      description: 'Connect heart rate and stroke volume to calculate the volume pumped per minute.',
      objective: 'Calculate cardiac output for one ventricle from heart rate and stroke volume, showing the units.',
      stages: [
        {
          id: 'pump',
          title: 'How much does one ventricle pump per minute?',
          paragraphs: [
            'Cardiac output (CO) is the volume of blood each ventricle pumps in one minute. The right ventricle sends blood to the pulmonary circulation; the left sends blood to the systemic circulation.',
            'The two circulations are connected in series. To calculate cardiac output, use the volume pumped by one ventricle rather than adding the volumes from both.',
          ],
          takeaway: 'Cardiac output is volume per minute for each ventricle, not the sum of both ventricles.',
          diagram: 'pump',
        },
        {
          id: 'equation',
          title: 'Two measurements, one calculation',
          paragraphs: [
            'Heart rate (HR) counts beats per minute. Stroke volume (SV) is the volume of blood ejected by one ventricle with each beat.',
            'Multiply the two measurements: CO = HR × SV. In Portuguese, the same relationship is DC = FC × VS. For the units, beats/min × mL/beat gives mL/min because the beat unit cancels.',
          ],
          takeaway: 'CO = HR × SV: beats per minute × volume per beat = volume per minute.',
          diagram: 'equation',
        },
        {
          id: 'calculation',
          title: 'From 75 × 70 to 5.25 L/min',
          paragraphs: [
            'In a hypothetical example, heart rate is 75 beats/min and stroke volume for one ventricle is 70 mL/beat. Therefore, CO = 75 × 70 = 5,250 mL/min.',
            'Since 1 L = 1,000 mL, divide by 1,000: 5,250 mL/min = 5.25 L/min. These values are for the exercise only; they do not establish a reference range or guide clinical management.',
          ],
          takeaway: 'In this hypothetical example, output for each ventricle is 5,250 mL/min, equivalent to 5.25 L/min.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a hypothetical example, heart rate is 75 beats/min and stroke volume for one ventricle is 70 mL/beat. What is cardiac output for that ventricle?',
        options: [
          {
            id: 'output-5250',
            label: '5,250 mL/min (5.25 L/min)',
            explanation: 'Correct: 75 beats/min × 70 mL/beat = 5,250 mL/min. Dividing by 1,000 gives 5.25 L/min.',
          },
          {
            id: 'output-525',
            label: '525 mL/min (0.525 L/min)',
            explanation: 'This result is ten times smaller than the correct product. 75 × 70 = 5,250 mL/min; converting to liters gives 5.25 L/min.',
          },
          {
            id: 'output-10500',
            label: '10,500 mL/min (10.5 L/min)',
            explanation: 'This result doubles the product of 75 × 70. Cardiac output refers to each ventricle; the volumes from both ventricles are not added together.',
          },
          {
            id: 'output-70',
            label: '70 mL/min (0.07 L/min)',
            explanation: '70 mL/beat is the given stroke volume, not a volume per minute. Multiply it by 75 beats/min to obtain 5,250 mL/min.',
          },
        ],
      },
    },
  },
});
