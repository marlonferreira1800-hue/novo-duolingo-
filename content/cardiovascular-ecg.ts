import { lessonSchema } from '../src/contracts/learning';

export const cardiovascularEcgLesson = lessonSchema.parse({
  id: 'cardiovascular-ecg',
  revision: 1,
  questionId: 'cardiovascular-ecg-qrs',
  correctOptionId: 'qrs-ventricular',
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
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'O coração fala eletricamente antes de bater — você sabe ler essa mensagem?',
      title: 'ECG: ondas P, QRS e T',
      description: 'Interprete o eletrocardiograma e associe cada onda à fase elétrica do coração.',
      objective: 'Associar a onda P à despolarização atrial, o complexo QRS à despolarização ventricular e a onda T à repolarização ventricular.',
      stages: [
        {
          id: 'p-wave',
          title: 'Onda P: os átrios despolarizam',
          paragraphs: [
            'A onda P registra a despolarização dos átrios, deflagrada pelo nó sinoatrial. Logo depois os átrios se contraem.',
          ],
          takeaway: 'Onda P = despolarização atrial.',
          diagram: 'ecg',
        },
        {
          id: 'qrs',
          title: 'Complexo QRS: os ventrículos despolarizam',
          paragraphs: [
            'O complexo QRS é a despolarização ventricular, que precede a contração dos ventrículos. É o pico mais alto do ECG porque a massa ventricular é maior que a atrial.',
          ],
          takeaway: 'QRS = despolarização ventricular.',
          diagram: 'ecg',
        },
        {
          id: 't-wave',
          title: 'Onda T: os ventrículos repolarizam',
          paragraphs: [
            'A onda T é a repolarização ventricular, que prepara o ciclo seguinte. Entre o fim do QRS e a onda T ocorre a ejeção ventricular.',
          ],
          takeaway: 'Onda T = repolarização ventricular.',
          diagram: 'ecg',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'No ECG, o que o complexo QRS representa?',
        options: [
          {
            id: 'qrs-ventricular',
            label: 'A despolarização dos ventrículos',
            explanation: 'Correto: o QRS registra a despolarização ventricular, que inicia a contração dos ventrículos.',
          },
          {
            id: 'qrs-atrial',
            label: 'A despolarização dos átrios',
            explanation: 'Não: a despolarização atrial é a onda P, bem menor que o QRS.',
          },
          {
            id: 'qrs-repolarization',
            label: 'A repolarização ventricular',
            explanation: 'Não: a repolarização ventricular é a onda T, que vem depois do QRS.',
          },
          {
            id: 'qrs-contraction-atrial',
            label: 'A contração dos átrios',
            explanation: 'Não: o ECG registra despolarizações e repolarizações (elétrico), não a contração mecânica em si.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'The heart speaks electrically before it beats — can you read that message?',
      title: 'ECG: P, QRS and T waves',
      description: 'Interpret the electrocardiogram and link each wave to the heart’s electrical phase.',
      objective: 'Link the P wave to atrial depolarization, the QRS complex to ventricular depolarization and the T wave to ventricular repolarization.',
      stages: [
        {
          id: 'p-wave',
          title: 'P wave: the atria depolarize',
          paragraphs: [
            'The P wave records atrial depolarization, triggered by the sinoatrial node. Soon after, the atria contract.',
          ],
          takeaway: 'P wave = atrial depolarization.',
          diagram: 'ecg',
        },
        {
          id: 'qrs',
          title: 'QRS complex: the ventricles depolarize',
          paragraphs: [
            'The QRS complex is ventricular depolarization, which precedes ventricular contraction. It is the tallest deflection on the ECG because the ventricular mass is larger than the atrial one.',
          ],
          takeaway: 'QRS = ventricular depolarization.',
          diagram: 'ecg',
        },
        {
          id: 't-wave',
          title: 'T wave: the ventricles repolarize',
          paragraphs: [
            'The T wave is ventricular repolarization, which readies the next cycle. Ventricular ejection happens between the end of the QRS and the T wave.',
          ],
          takeaway: 'T wave = ventricular repolarization.',
          diagram: 'ecg',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'On the ECG, what does the QRS complex represent?',
        options: [
          {
            id: 'qrs-ventricular',
            label: 'Ventricular depolarization',
            explanation: 'Correct: the QRS records ventricular depolarization, which triggers ventricular contraction.',
          },
          {
            id: 'qrs-atrial',
            label: 'Atrial depolarization',
            explanation: 'No: atrial depolarization is the P wave, much smaller than the QRS.',
          },
          {
            id: 'qrs-repolarization',
            label: 'Ventricular repolarization',
            explanation: 'No: ventricular repolarization is the T wave, which comes after the QRS.',
          },
          {
            id: 'qrs-contraction-atrial',
            label: 'Atrial contraction',
            explanation: 'No: the ECG records depolarizations and repolarizations (electrical events), not mechanical contraction itself.',
          },
        ],
      },
    },
  },
});
