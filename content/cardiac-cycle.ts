import { lessonSchema } from '../src/contracts/learning';

export const cardiacCycleLesson = lessonSchema.parse({
  id: 'cardiac-cycle',
  revision: 1,
  questionId: 'cardiac-cycle-order',
  correctOptionId: 'cycle-order',
  correctOrderIds: ['filling', 'atrial-systole', 'isovolumetric-contraction', 'ejection', 'isovolumetric-relaxation'],
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
      hook: 'Um único batimento esconde uma sequência precisa de eventos — você consegue colocá-los na ordem?',
      title: 'O ciclo cardíaco: diástole e sístole',
      description: 'Acompanhe a ordem das fases do ciclo cardíaco e o estado das valvas em cada uma delas.',
      objective: 'Distinguir diástole e sístole e prever o estado das valvas atrioventriculares e semilunares durante a contração isovolumétrica.',
      stages: [
        {
          id: 'phases',
          title: 'Um ciclo, três momentos',
          paragraphs: [
            'O ciclo cardíaco é a sequência de eventos de um batimento: a diástole, fase de relaxamento e enchimento dos ventrículos, seguida da sístole, fase de contração e ejeção.',
            'Entre elas há a sístole atrial, contração curta dos átrios que completa o enchimento ventricular. O ciclo recomeça a cada batimento.',
          ],
          takeaway: 'Diástole é enchimento; sístole é ejeção. A sístole atrial acontece no fim da diástole.',
          diagram: 'phases',
        },
        {
          id: 'valves',
          title: 'As valvas abrem e fecham por pressão',
          paragraphs: [
            'As valvas atrioventriculares (mitral e tricúspide) e as semilunares (aórtica e pulmonar) não têm músculo próprio: abrem e fecham conforme a diferença de pressão entre as câmaras.',
            'Durante a diástole, com os ventrículos relaxados, as valvas atrioventriculares ficam abertas e o sangue entra passivamente. Quando os ventrículos contraem, a pressão ventricular supera a atrial e elas se fecham.',
          ],
          takeaway: 'O estado das valvas depende da pressão: fecham quando a pressão a jusante supera a a montante.',
          diagram: 'valves',
        },
        {
          id: 'sounds',
          title: 'As bulhas cardíacas marcam o fechamento das valvas',
          paragraphs: [
            'A primeira bulha (S1) corresponde ao fechamento das valvas atrioventriculares no início da sístole ventricular. A segunda bulha (S2) corresponde ao fechamento das valvas semilunares no fim da sístole.',
            'Entre S1 e S2 ocorre a ejeção ventricular; entre S2 e a próxima S1, o coração enche novamente durante a diástole.',
          ],
          takeaway: 'S1 marca o fechamento das valvas atrioventriculares; S2, o das semilunares.',
          diagram: 'sounds',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Coloque as fases do ciclo cardíaco na ordem correta, do enchimento até o relaxamento:',
        items: [
          {
            id: 'filling',
            label: 'Enchimento ventricular (diástole)',
            explanation: 'Início do ciclo: os ventrículos relaxados enchem de sangue com as valvas AV abertas.',
          },
          {
            id: 'atrial-systole',
            label: 'Sístole atrial',
            explanation: 'Os átrios contraem e completam o enchimento ventricular no fim da diástole.',
          },
          {
            id: 'isovolumetric-contraction',
            label: 'Contração isovolumétrica',
            explanation: 'Os ventrículos contraem com todas as valvas fechadas: a pressão sobe sem mudar o volume (gera S1).',
          },
          {
            id: 'ejection',
            label: 'Ejeção ventricular',
            explanation: 'A pressão ventricular supera a arterial, as semilunares abrem e o sangue é ejetado.',
          },
          {
            id: 'isovolumetric-relaxation',
            label: 'Relaxamento isovolumétrico',
            explanation: 'Os ventrículos relaxam com todas as valvas fechadas: a pressão cai sem mudar o volume (gera S2), e o ciclo recomeça.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'A single heartbeat hides a precise sequence of events — can you put them in order?',
      title: 'The cardiac cycle: diastole and systole',
      description: 'Follow the order of the cardiac cycle phases and the state of the valves in each one.',
      objective: 'Tell diastole and systole apart and predict the state of the atrioventricular and semilunar valves during isovolumetric contraction.',
      stages: [
        {
          id: 'phases',
          title: 'One cycle, three moments',
          paragraphs: [
            'The cardiac cycle is the sequence of events in one heartbeat: diastole, the relaxation and filling phase of the ventricles, followed by systole, the contraction and ejection phase.',
            'Between them is atrial systole, a brief atrial contraction that completes ventricular filling. The cycle restarts with every beat.',
          ],
          takeaway: 'Diastole is filling; systole is ejection. Atrial systole happens at the end of diastole.',
          diagram: 'phases',
        },
        {
          id: 'valves',
          title: 'Valves open and close by pressure',
          paragraphs: [
            'The atrioventricular valves (mitral and tricuspid) and the semilunar valves (aortic and pulmonary) have no muscle of their own: they open and close according to the pressure difference between chambers.',
            'During diastole, with the ventricles relaxed, the atrioventricular valves are open and blood flows in passively. When the ventricles contract, ventricular pressure exceeds atrial pressure and they close.',
          ],
          takeaway: 'Valve state depends on pressure: they close when downstream pressure exceeds upstream pressure.',
          diagram: 'valves',
        },
        {
          id: 'sounds',
          title: 'Heart sounds mark valve closure',
          paragraphs: [
            'The first heart sound (S1) corresponds to the closure of the atrioventricular valves at the start of ventricular systole. The second heart sound (S2) corresponds to the closure of the semilunar valves at the end of systole.',
            'Between S1 and S2 the ventricle ejects blood; between S2 and the next S1, the heart fills again during diastole.',
          ],
          takeaway: 'S1 marks atrioventricular valve closure; S2 marks semilunar valve closure.',
          diagram: 'sounds',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Put the phases of the cardiac cycle in the correct order, from filling to relaxation:',
        items: [
          {
            id: 'filling',
            label: 'Ventricular filling (diastole)',
            explanation: 'Start of the cycle: the relaxed ventricles fill with blood while the AV valves are open.',
          },
          {
            id: 'atrial-systole',
            label: 'Atrial systole',
            explanation: 'The atria contract and complete ventricular filling at the end of diastole.',
          },
          {
            id: 'isovolumetric-contraction',
            label: 'Isovolumetric contraction',
            explanation: 'The ventricles contract with all valves closed: pressure rises without volume change (produces S1).',
          },
          {
            id: 'ejection',
            label: 'Ventricular ejection',
            explanation: 'Ventricular pressure exceeds arterial pressure, the semilunar valves open and blood is ejected.',
          },
          {
            id: 'isovolumetric-relaxation',
            label: 'Isovolumetric relaxation',
            explanation: 'The ventricles relax with all valves closed: pressure falls without volume change (produces S2), and the cycle restarts.',
          },
        ],
      },
    },
  },
});
