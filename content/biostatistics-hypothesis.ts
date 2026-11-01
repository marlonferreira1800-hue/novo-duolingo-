import { lessonSchema } from '../src/contracts/learning';

export const biostatisticsHypothesisLesson = lessonSchema.parse({
  id: 'biostatistics-hypothesis',
  revision: 1,
  questionId: 'biostatistics-pvalue',
  correctOptionId: 'reject-null',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'cdc-principles-epidemiology',
      title: 'CDC · Principles of Epidemiology in Public Health Practice',
      url: 'https://www.cdc.gov/training-publichealth101/php/training/principles-of-epidemiology.html',
      section: 'Hypothesis testing and p-values',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Um remédio pareceu funcionar em um estudo — foi sorte ou efeito real?',
      title: 'Teste de hipótese: H₀, H₁ e valor-p',
      description: 'Entenda a lógica do teste de hipótese e o que significa p < 0,05.',
      objective: 'Definir hipótese nula e alternativa e interpretar um valor-p menor que 0,05 como rejeição da H₀.',
      stages: [
        {
          id: 'hypotheses',
          title: 'Duas hipóteses competem',
          paragraphs: [
            'A hipótese nula (H₀) diz que não há diferença entre os grupos (o remédio não funciona). A alternativa (H₁) diz que há diferença.',
            'O estudo junta evidências para decidir se rejeita ou não a H₀.',
          ],
          takeaway: 'H₀ = sem efeito; H₁ = há efeito.',
          diagram: 'stats',
        },
        {
          id: 'pvalue',
          title: 'O valor-p mede a证据 contra H₀',
          paragraphs: [
            'O valor-p é a probabilidade de obter um resultado tão extremo quanto o observado, supondo que H₀ seja verdadeira. Quanto menor o p, mais improvável é a H₀.',
          ],
          takeaway: 'p pequeno = H₀ improvável.',
          diagram: 'stats',
        },
        {
          id: 'decision',
          title: 'p < 0,05 rejeita a H₀',
          paragraphs: [
            'Por convenção, se p < 0,05 (5%), rejeitamos a H₀ e aceitamos que há diferença significativa. Isso não prova que H₁ é verdadeira — é uma decisão estatística com margem de erro.',
          ],
          takeaway: 'p < 0,05 → rejeita H₀ (diferença significativa).',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um estudo, o valor-p encontrado foi 0,02. O que isso significa?',
        options: [
          {
            id: 'reject-null',
            label: 'Rejeita-se a H₀: a diferença é estatisticamente significativa (p < 0,05)',
            explanation: 'Correto: como 0,02 < 0,05, rejeita-se a hipótese nula e considera-se a diferença significativa.',
          },
          {
            id: 'accept-null',
            label: 'Aceita-se a H₀: não há diferença',
            explanation: 'Não: p = 0,02 é menor que 0,05, então a H₀ é rejeitada, não aceita.',
          },
          {
            id: 'prob-correct',
            label: 'Há 2% de chance de a H₁ estar correta',
            explanation: 'Não: o valor-p não é a probabilidade de a hipótese ser verdadeira; ele mede a evidência contra a H₀.',
          },
          {
            id: 'no-conclusion',
            label: 'Nada se pode concluir',
            explanation: 'Não: com p < 0,05 há conclusão estatística: rejeita-se a H₀.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology and biostatistics',
      hook: 'A drug seemed to work in a study — was it chance or a real effect?',
      title: 'Hypothesis testing: H₀, H₁ and the p-value',
      description: 'Understand the logic of hypothesis testing and what p < 0.05 means.',
      objective: 'Define the null and alternative hypotheses and interpret a p-value below 0.05 as rejecting H₀.',
      stages: [
        {
          id: 'hypotheses',
          title: 'Two hypotheses compete',
          paragraphs: [
            'The null hypothesis (H₀) says there is no difference between groups (the drug does not work). The alternative (H₁) says there is a difference.',
            'The study gathers evidence to decide whether to reject H₀.',
          ],
          takeaway: 'H₀ = no effect; H₁ = there is an effect.',
          diagram: 'stats',
        },
        {
          id: 'pvalue',
          title: 'The p-value measures evidence against H₀',
          paragraphs: [
            'The p-value is the probability of getting a result at least as extreme as the one observed, assuming H₀ is true. The smaller the p, the more unlikely H₀ is.',
          ],
          takeaway: 'Small p = H₀ is unlikely.',
          diagram: 'stats',
        },
        {
          id: 'decision',
          title: 'p < 0.05 rejects H₀',
          paragraphs: [
            'By convention, if p < 0.05 (5%), we reject H₀ and accept that there is a significant difference. This does not prove H₁ is true — it is a statistical decision with a margin of error.',
          ],
          takeaway: 'p < 0.05 → reject H₀ (significant difference).',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a study, the p-value found was 0.02. What does that mean?',
        options: [
          {
            id: 'reject-null',
            label: 'H₀ is rejected: the difference is statistically significant (p < 0.05)',
            explanation: 'Correct: since 0.02 < 0.05, the null hypothesis is rejected and the difference is considered significant.',
          },
          {
            id: 'accept-null',
            label: 'H₀ is accepted: there is no difference',
            explanation: 'No: p = 0.02 is less than 0.05, so H₀ is rejected, not accepted.',
          },
          {
            id: 'prob-correct',
            label: 'There is a 2% chance H₁ is correct',
            explanation: 'No: the p-value is not the probability that a hypothesis is true; it measures evidence against H₀.',
          },
          {
            id: 'no-conclusion',
            label: 'Nothing can be concluded',
            explanation: 'No: with p < 0.05 there is a statistical conclusion: H₀ is rejected.',
          },
        ],
      },
    },
  },
});
