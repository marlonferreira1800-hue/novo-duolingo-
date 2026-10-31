import 'server-only';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import {
  evidenceKey, evidenceSchema, tokenUsageSchema, tutorOutputSchema, tutorRequestSchema,
  type DraftProvider, type Evidence, type RunRecord, type TutorDraft,
} from '@/contracts/ai';
import { AiRunError } from './errors';
import { buildTutorPrompt, tutorPrompt } from './prompts/tutor-v1';

const limitsSchema = z.strictObject({
  maxInputBytes: z.number().int().min(256).max(32000).default(16000),
  maxOutputBytes: z.number().int().min(256).max(24000).default(12000),
  maxOutputTokens: z.number().int().min(32).max(4000).default(1200),
  timeoutMs: z.number().int().min(1).max(30000).default(15000),
  maxConcurrent: z.number().int().min(1).max(4).default(1),
});
type Limits = z.infer<typeof limitsSchema>;

export function createTutorService(options: {
  provider: DraftProvider;
  evidence: readonly Evidence[];
  limits?: Partial<Limits>;
  onRun?: (record: RunRecord) => void;
}) {
  const { provider } = options;
  z.string().regex(/^[a-z0-9._-]{1,80}$/).parse(provider.id);
  z.enum(['fixture', 'live']).parse(provider.kind);
  const limits = limitsSchema.parse(options.limits ?? {});
  const parsedEvidence = z.array(evidenceSchema).min(1).max(4).safeParse(options.evidence);
  if (!parsedEvidence.success) throw new AiRunError('INVALID_EVIDENCE');
  const evidence = parsedEvidence.data;
  const keys = evidence.map(evidenceKey);
  if (new Set(keys).size !== keys.length) throw new AiRunError('INVALID_EVIDENCE');
  let active = 0;

  return {
    async ask(rawRequest: unknown): Promise<TutorDraft> {
      const parsed = tutorRequestSchema.safeParse(rawRequest);
      if (!parsed.success) throw new AiRunError('INVALID_INPUT');
      const request = parsed.data;
      const prompt = buildTutorPrompt(request, evidence);
      if (Buffer.byteLength(prompt.system + prompt.user, 'utf8') > limits.maxInputBytes) throw new AiRunError('INPUT_TOO_LARGE');
      if (active >= limits.maxConcurrent) throw new AiRunError('CAPACITY_EXCEEDED');
      active += 1;
      const runId = randomUUID();
      const started = performance.now();
      const controller = new AbortController();
      let timer: ReturnType<typeof setTimeout> | undefined;
      let usage: z.infer<typeof tokenUsageSchema> | undefined;
      const base = {
        runId, providerId: provider.id, providerKind: provider.kind,
        promptId: tutorPrompt.id, promptVersion: tutorPrompt.version,
        schemaVersion: tutorPrompt.schemaVersion, studyLocale: request.studyLocale,
      } as const;
      function emit(outcome: RunRecord['outcome'], error?: AiRunError) {
        const record: RunRecord = { ...base, outcome, elapsedMs: Math.max(0, Math.round(performance.now() - started)) };
        if (error) record.errorCode = error.code;
        if (usage) record.usage = usage;
        try { options.onRun?.(record); } catch { /* The host owns telemetry availability. */ }
      }
      const invocation = Promise.resolve().then(() => provider.generate({ prompt, maxOutputTokens: limits.maxOutputTokens, signal: controller.signal }));
      void invocation.then(() => { active -= 1; }, () => { active -= 1; });
      try {
        const deadline = new Promise<never>((_, reject) => {
          timer = setTimeout(() => {
            reject(new AiRunError('TIMEOUT'));
            controller.abort();
          }, limits.timeoutMs);
        });
        const response = await Promise.race([invocation, deadline]);
        if (!response || !Object.hasOwn(response, 'output')) throw new AiRunError('INVALID_OUTPUT');
        if (response.usage !== undefined) {
          const checkedUsage = tokenUsageSchema.safeParse(response.usage);
          if (!checkedUsage.success) throw new AiRunError('INVALID_USAGE');
          usage = checkedUsage.data;
          if (usage.outputTokens > limits.maxOutputTokens) throw new AiRunError('BUDGET_EXCEEDED');
        }
        let text: string;
        try { text = typeof response.output === 'string' ? response.output : JSON.stringify(response.output); }
        catch { throw new AiRunError('INVALID_OUTPUT'); }
        if (typeof text !== 'string' || Buffer.byteLength(text, 'utf8') > limits.maxOutputBytes) throw new AiRunError('INVALID_OUTPUT');
        let value: unknown;
        try { value = JSON.parse(text); } catch { throw new AiRunError('INVALID_OUTPUT'); }
        const output = tutorOutputSchema.safeParse(value);
        if (!output.success) throw new AiRunError('INVALID_OUTPUT');
        if (output.data.locale !== request.studyLocale) throw new AiRunError('LOCALE_MISMATCH');
        if (output.data.evidenceKeys.some((key) => !keys.includes(key))) throw new AiRunError('UNKNOWN_EVIDENCE');
        const draft: TutorDraft = {
          id: randomUUID(), status: 'draft', medicallyReviewed: false, content: output.data,
          provenance: {
            runId, createdAt: new Date().toISOString(), providerId: provider.id, providerKind: provider.kind,
            promptId: tutorPrompt.id, promptVersion: tutorPrompt.version, schemaVersion: tutorPrompt.schemaVersion,
            evidenceKeys: keys,
          },
        };
        emit('draft-created');
        return draft;
      } catch (error) {
        const failure = error instanceof AiRunError ? error : new AiRunError('PROVIDER_FAILED');
        emit('failed', failure);
        throw failure;
      } finally {
        if (timer) clearTimeout(timer);
      }
    },
  };
}
