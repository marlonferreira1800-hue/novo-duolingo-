import { lessonSchema } from '../src/contracts/learning';

export const pathologyInflammationLesson = lessonSchema.parse({
  id: 'pathology-inflammation',
  revision: 1,
  questionId: 'pathology-inflammation-signs',
  correctOptionId: 'vasodilation',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-microbiology-ch15',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/15-2',
      section: 'Innate immunity and acute inflammation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Por que um local inflamado fica vermelho, quente e inchado?',
      title: 'Inflamação aguda: sinais cardinais e vasodilatação',
      description: 'Entenda os cinco sinais cardinais da inflamação aguda e a vasodilatação que os produz.',
      objective: 'Listar os cinco sinais cardinais da inflamação aguda e explicar que a vasodilatação local gera rubor e calor.',
      stages: [
        {
          id: 'trigger',
          title: 'Lesão ou infecção disparam a resposta',
          paragraphs: [
            'Uma lesão tecidual ou a presença de patógenos libera mediadores químicos (histamina, prostaglandinas) pelas células do local.',
          ],
          takeaway: 'Mediadores químicos iniciam a resposta inflamatória.',
          diagram: 'inflammation',
        },
        {
          id: 'vessels',
          title: 'Vasodilatação e aumento da permeabilidade',
          paragraphs: [
            'Os vasos sanguíneos locais se dilatam (vasodilatação) e ficam mais permeáveis. Isso aumenta o fluxo de sangue para a área e deixa plasma e leucócitos saírem para o tecido.',
          ],
          takeaway: 'Vasodilatação explica o rubor e o calor; a permeabilidade explica o edema.',
          diagram: 'inflammation',
        },
        {
          id: 'signs',
          title: 'Os cinco sinais cardinais',
          paragraphs: [
            'Rubor (vermelhidão), calor, edema (inchaço), dor e perda da função. A dor vem da pressão do edema e da ação de mediadores sobre os nervos.',
            'A inflamação aguda é uma resposta protetora; quando persiste, vira crônica.',
          ],
          takeaway: 'Rubor, calor, edema, dor e impotência funcional.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Na inflamação aguda, o que causa o rubor (vermelhidão) e o calor local?',
        options: [
          {
            id: 'vasodilation',
            label: 'A vasodilatação dos vasos locais',
            explanation: 'Correto: a dilatação aumenta o fluxo de sangue quente para a área, causando rubor e calor.',
          },
          {
            id: 'fever',
            label: 'A febre sistêmica',
            explanation: 'Não: a febre é uma resposta geral do organismo; rubor e calor locais vêm da vasodilatação regional.',
          },
          {
            id: 'bleeding',
            label: 'Um sangramento no tecido',
            explanation: 'Não: na inflamação aguda típica não há sangramento; o aumento de sangue nos vasos dilatados é que causa a vermelhidão.',
          },
          {
            id: 'nerve-block',
            label: 'O bloqueio dos nervos sensitivos',
            explanation: 'Não: o bloqueio nervoso causaria perda de sensibilidade, não rubor e calor.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'Why does an inflamed area become red, hot and swollen?',
      title: 'Acute inflammation: cardinal signs and vasodilation',
      description: 'Understand the five cardinal signs of acute inflammation and the vasodilation behind them.',
      objective: 'List the five cardinal signs of acute inflammation and explain that local vasodilation produces rubor and heat.',
      stages: [
        {
          id: 'trigger',
          title: 'Injury or infection triggers the response',
          paragraphs: [
            'Tissue injury or the presence of pathogens makes local cells release chemical mediators (histamine, prostaglandins).',
          ],
          takeaway: 'Chemical mediators start the inflammatory response.',
          diagram: 'inflammation',
        },
        {
          id: 'vessels',
          title: 'Vasodilation and increased permeability',
          paragraphs: [
            'Local blood vessels dilate (vasodilation) and become more permeable. This increases blood flow to the area and lets plasma and leukocytes leave into the tissue.',
          ],
          takeaway: 'Vasodilation explains rubor and heat; permeability explains swelling.',
          diagram: 'inflammation',
        },
        {
          id: 'signs',
          title: 'The five cardinal signs',
          paragraphs: [
            'Rubor (redness), heat, swelling, pain and loss of function. Pain comes from the pressure of edema and from mediators acting on nerves.',
            'Acute inflammation is a protective response; when it persists, it becomes chronic.',
          ],
          takeaway: 'Rubor, heat, swelling, pain and loss of function.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In acute inflammation, what causes the local rubor (redness) and heat?',
        options: [
          {
            id: 'vasodilation',
            label: 'Vasodilation of the local vessels',
            explanation: 'Correct: dilation increases the flow of warm blood to the area, producing redness and heat.',
          },
          {
            id: 'fever',
            label: 'Systemic fever',
            explanation: 'No: fever is a whole-body response; local rubor and heat come from regional vasodilation.',
          },
          {
            id: 'bleeding',
            label: 'Bleeding into the tissue',
            explanation: 'No: typical acute inflammation has no bleeding; the increased blood in dilated vessels causes the redness.',
          },
          {
            id: 'nerve-block',
            label: 'Blockade of sensory nerves',
            explanation: 'No: nerve blockade would cause loss of sensation, not rubor and heat.',
          },
        ],
      },
    },
  },
});
