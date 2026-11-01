'use server';

import { lessons } from '../../../content';
import { createAiRuntime } from '@/ai/runtime';
import { allEvidence } from '@/ai/evidence';
import { AiRunError } from '@/ai/errors';
import {
  evidenceKey,
  tutorRequestSchema,
  type RunRecord,
  type TutorDraft,
  type TutorOutput,
} from '@/contracts/ai';

function buildContextualTutorFixture(
  locale: 'pt-BR' | 'en',
  question: string,
  lessonId?: string,
): TutorOutput {
  const isPt = locale === 'pt-BR';
  const matchedLesson = lessonId ? lessons.find((item) => item.id === lessonId) : lessons[0];
  const translated = matchedLesson?.translations[locale];
  const primaryEvidenceKey = evidenceKey(allEvidence[0]);
  const secondaryEvidenceKey = allEvidence[1] ? evidenceKey(allEvidence[1]) : primaryEvidenceKey;

  const contextSummary = translated
    ? isPt
      ? `Contexto da lição "${translated.title}": ${translated.objective} (${translated.stages[0]?.takeaway ?? ''}).`
      : `Lesson context "${translated.title}": ${translated.objective} (${translated.stages[0]?.takeaway ?? ''}).`
    : isPt
      ? 'Contexto geral de fisiologia médica do Ciclo Básico.'
      : 'General Basic Sciences medical physiology context.';

  const answer = isPt
    ? `Rascunho educacional (fixture offline) sobre "${question.slice(0, 90)}". ${contextSummary} Na fisiologia cardiovascular de referência (OpenStax), o débito cardíaco depende diretamente da frequência cardíaca e do volume sistólico (DC = FC × VS), e o fluxo segue gradientes de pressão através das valvas unidirecionais. Este rascunho não substitui revisão médica humana.`
    : `Educational draft (offline fixture) for "${question.slice(0, 90)}". ${contextSummary} In reference cardiovascular physiology (OpenStax), cardiac output depends directly on heart rate and stroke volume (CO = HR × SV), and blood flow follows pressure gradients across one-way valves. This draft does not replace human medical review.`;

  const followUpSuggestions = isPt
    ? [
        'Como a pré-carga altera o volume sistólico (Lei de Frank-Starling)?',
        'Por que as valvas atrioventriculares se fecham no início da sístole?',
        'Como relacionar este mecanismo com o exame físico?',
      ]
    : [
        'How does preload change stroke volume (Frank-Starling mechanism)?',
        'Why do the atrioventricular valves close at the start of systole?',
        'How does this mechanism connect to physical examination findings?',
      ];

  return {
    locale,
    answer,
    difficulty: 'basic',
    evidenceKeys: Array.from(new Set([primaryEvidenceKey, secondaryEvidenceKey])),
    followUpSuggestions,
  };
}

export async function askTutorAction(
  input: unknown,
): Promise<{ ok: true; draft: TutorDraft } | { ok: false; error: string }> {
  try {
    const parsed = tutorRequestSchema.safeParse(input);
    if (!parsed.success) return { ok: false, error: 'INVALID_INPUT' };
    const records: RunRecord[] = [];
    const isLive = process.env.AI_LIVE_ENABLED === 'true';
    const runtime = isLive
      ? createAiRuntime({
          mode: 'live',
          onRun: (r) => { records.push(r); },
        })
      : createAiRuntime({
          mode: 'fixture',
          response: {
            output: buildContextualTutorFixture(
              parsed.data.studyLocale,
              parsed.data.question,
              parsed.data.lessonId,
            ),
            usage: { inputTokens: 180, outputTokens: 120 },
          },
          onRun: (r) => { records.push(r); },
        });
    const draft = await runtime.tutor.ask(parsed.data);
    return { ok: true, draft };
  } catch (error) {
    const code = error instanceof AiRunError ? error.code : 'PROVIDER_FAILED';
    return { ok: false, error: code };
  }
}
