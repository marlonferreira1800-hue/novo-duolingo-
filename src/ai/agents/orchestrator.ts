import 'server-only';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import {
  orchestratorRequestSchema, orchestratorOutputSchema, evidenceKey,
  evidenceSchema, tokenUsageSchema,
  type AgentHandoff, type AgentRunRecord,
  type DraftProvider, type Evidence, type OrchestratorDraft,
} from '@/contracts/ai';
import type { Lesson } from '@/contracts/learning';
import { AiRunError } from '../errors';
import { orchestratorDefinition, getAgent } from './definitions';
import { agentPrompts } from '../prompts/agents';
import { executeTool, type AgentToolName } from './tools';
import { createSession, appendMessage, appendHandoff, getSession } from './session';
import { recordEpisodicMemory, recallCognitiveMemory } from './memory';

const limitsSchema = z.strictObject({
  maxInputBytes: z.number().int().min(256).max(64000).default(32000),
  maxOutputBytes: z.number().int().min(256).max(32000).default(16000),
  maxOutputTokens: z.number().int().min(64).max(4000).default(2000),
  timeoutMs: z.number().int().min(1).max(120000).default(60000),
  maxConcurrent: z.number().int().min(1).max(4).default(1),
});
type Limits = z.infer<typeof limitsSchema>;

function safeJsonParse(raw: string): unknown {
  const trimmed = raw.trim();
  const unwrapped = trimmed.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  return JSON.parse(unwrapped);
}

export function createAgentOrchestrator(options: {
  provider: DraftProvider;
  evidence: readonly Evidence[];
  lessons: readonly Lesson[];
  limits?: Partial<Limits>;
  onRun?: (record: AgentRunRecord) => void;
}) {
  const { provider } = options;
  z.string().regex(/^[a-z0-9._-]{1,80}$/).parse(provider.id);
  z.enum(['fixture', 'live']).parse(provider.kind);
  const limits = limitsSchema.parse(options.limits ?? {});
  const evidence = z.array(evidenceSchema).min(1).max(8).parse(options.evidence);
  const keys = evidence.map(evidenceKey);
  if (new Set(keys).size !== keys.length) throw new AiRunError('INVALID_EVIDENCE');
  let active = 0;

  return {
    async run(rawRequest: unknown): Promise<OrchestratorDraft> {
      const parsed = orchestratorRequestSchema.safeParse(rawRequest);
      if (!parsed.success) throw new AiRunError('INVALID_INPUT');
      const request = parsed.data;
      if (active >= limits.maxConcurrent) throw new AiRunError('CAPACITY_EXCEEDED');
      active += 1;
      const runId = randomUUID();
      const session = request.sessionId && getSession(request.sessionId) ? getSession(request.sessionId)! : createSession();
      const started = performance.now();
      const controller = new AbortController();
      let usage: z.infer<typeof tokenUsageSchema> | undefined;
      const handoffs: AgentHandoff[] = [];
      let toolCallCount = 0;
      let memoryOpCount = 0;
      const trace: OrchestratorDraft['provenance']['agentTrace'] = [];

      function emit(outcome: AgentRunRecord['outcome'], error?: AiRunError) {
        const record: AgentRunRecord = {
          runId, sessionId: session.id, providerId: provider.id, providerKind: provider.kind,
          steps: trace.length, handoffs, toolCalls: toolCallCount, memoryOps: memoryOpCount, outcome,
          elapsedMs: Math.max(0, Math.round(performance.now() - started)),
        };
        if (error) record.errorCode = error.code;
        if (usage) record.usage = usage;
        try { options.onRun?.(record); } catch { /* host owns telemetry */ }
      }

      const invocation = (async () => {
        let currentAgent = getAgent('planner') ?? orchestratorDefinition;
        let steps = 0;
        const maxSteps = request.maxSteps;
        while (steps < maxSteps) {
          steps += 1;
          const promptDef = agentPrompts[currentAgent.promptId as keyof typeof agentPrompts];
          const userPayload = JSON.stringify({
            goal: request.goal,
            studyLocale: request.studyLocale,
            level: request.level,
            sessionMessages: session.messages.slice(-6),
            evidenceKeys: keys,
          });
          const fullPrompt = promptDef.system + '\n' + userPayload;
          if (Buffer.byteLength(fullPrompt, 'utf8') > limits.maxInputBytes) throw new AiRunError('INPUT_TOO_LARGE');
          const response = await provider.generate({
            prompt: { system: promptDef.system, user: userPayload },
            maxOutputTokens: Math.min(currentAgent.maxOutputTokens, limits.maxOutputTokens),
            signal: controller.signal,
          });
          if (response.usage !== undefined) {
            const u = tokenUsageSchema.safeParse(response.usage);
            if (!u.success) throw new AiRunError('INVALID_USAGE');
            usage = u.data;
            if (usage.outputTokens > limits.maxOutputTokens) throw new AiRunError('BUDGET_EXCEEDED');
          }
          let text: string;
          try { text = typeof response.output === 'string' ? response.output : JSON.stringify(response.output); }
          catch { throw new AiRunError('INVALID_OUTPUT'); }
          if (Buffer.byteLength(text, 'utf8') > limits.maxOutputBytes) throw new AiRunError('INVALID_OUTPUT');
          let value: unknown;
          try { value = safeJsonParse(text); } catch { throw new AiRunError('INVALID_OUTPUT'); }

          // Se for o orquestrador final, valida o output completo
          if (currentAgent.id === 'orchestrator') {
            if (value && typeof value === 'object' && !Array.isArray(value)) {
              const rec = value as Record<string, unknown>;
              if (rec.toolCalls === null || !Array.isArray(rec.toolCalls)) delete rec.toolCalls;
              if (!rec.locale) rec.locale = request.studyLocale;
              if (typeof rec.summary !== 'string' || !rec.summary) {
                rec.summary = 'Rascunho de plano de estudos sintetizado pelos agentes de estudo.';
              } else if (rec.summary.length > 1000) {
                rec.summary = rec.summary.slice(0, 1000);
              }
              if (rec.draft && typeof rec.draft === 'object') {
                const draftRec = rec.draft as Record<string, unknown>;
                if (typeof draftRec.title === 'string' && draftRec.title.length > 160) {
                  draftRec.title = draftRec.title.slice(0, 160);
                }
                if (typeof draftRec.body === 'string' && draftRec.body.length > 4000) {
                  draftRec.body = draftRec.body.slice(0, 4000);
                }
              }
              if (provider.kind === 'live' && trace.length > 0) {
                rec.agentTrace = trace.map(t => ({
                  agentId: t.agentId,
                  role: t.role,
                  action: t.action.slice(0, 300),
                  ...(t.handoffTo ? { handoffTo: t.handoffTo } : {})
                }));
              } else if (!Array.isArray(rec.agentTrace) || rec.agentTrace.length === 0) {
                rec.agentTrace = trace.length > 0
                  ? trace.map(t => ({
                      agentId: t.agentId,
                      role: t.role,
                      action: t.action.slice(0, 300),
                      ...(t.handoffTo ? { handoffTo: t.handoffTo } : {})
                    }))
                  : [{ agentId: 'planner', role: 'planner' as const, action: 'Planejamento sintetizado' }];
              } else if (Array.isArray(rec.agentTrace)) {
                for (const item of rec.agentTrace) {
                  if (item && typeof item === 'object') {
                    const itemRec = item as Record<string, unknown>;
                    if (itemRec.handoffTo === null) delete itemRec.handoffTo;
                    if (typeof itemRec.action === 'string' && itemRec.action.length > 300) {
                      itemRec.action = itemRec.action.slice(0, 300);
                    }
                  }
                }
              }
              const sanitizedOut: Record<string, unknown> = {
                locale: rec.locale,
                summary: rec.summary,
                agentTrace: rec.agentTrace,
                draft: rec.draft,
              };
              if (rec.toolCalls) sanitizedOut.toolCalls = rec.toolCalls;
              value = sanitizedOut;
            }
            const out = orchestratorOutputSchema.safeParse(value);
            if (!out.success) throw new AiRunError('INVALID_OUTPUT');
            if (out.data.locale !== request.studyLocale) throw new AiRunError('LOCALE_MISMATCH');
            if (out.data.draft.evidenceKeys.some(k => !keys.includes(k))) throw new AiRunError('UNKNOWN_EVIDENCE');
            const draft: OrchestratorDraft = {
              id: randomUUID(), status: 'draft', medicallyReviewed: false,
              sessionId: session.id, content: out.data,
              memorySnapshot: recallCognitiveMemory(session.id),
              provenance: {
                runId, createdAt: new Date().toISOString(), providerId: provider.id, providerKind: provider.kind,
                schemaVersion: 1, evidenceKeys: keys, agentTrace: out.data.agentTrace,
              },
            };
            emit('draft-created');
            return draft;
          }

          // Sub-agente: parseia handoff
          if (value && typeof value === 'object' && !Array.isArray(value)) {
            const rec = value as Record<string, unknown>;
            if (typeof rec.action === 'string' && rec.action.length > 300) {
              rec.action = rec.action.slice(0, 300);
            }
            if (typeof rec.action !== 'string' || !rec.action) {
              rec.action = 'Progresso de aprendizado estruturado pelos agentes.';
            }
            for (const optKey of ['handoffTo', 'tool', 'toolInput'] as const) {
              if (rec[optKey] === null) delete rec[optKey];
            }
            if (rec.toolInput && typeof rec.toolInput !== 'object') {
              rec.toolInput = { query: String(rec.toolInput) };
            }
            const sanitizedStep: Record<string, unknown> = {
              action: rec.action,
            };
            if (typeof rec.handoffTo === 'string') sanitizedStep.handoffTo = rec.handoffTo;
            if (typeof rec.tool === 'string') sanitizedStep.tool = rec.tool;
            if (rec.toolInput && typeof rec.toolInput === 'object') sanitizedStep.toolInput = rec.toolInput;
            value = sanitizedStep;
          }
          const step = z.strictObject({
            action: z.string().min(1).max(300),
            handoffTo: z.string().optional(),
            tool: z.string().optional(),
            toolInput: z.record(z.string(), z.unknown()).optional(),
          }).safeParse(value);
          if (!step.success) throw new AiRunError('INVALID_OUTPUT');

          trace.push({ agentId: currentAgent.id, role: currentAgent.role, action: step.data.action, handoffTo: step.data.handoffTo });
          recordEpisodicMemory(session.id, {
            role: currentAgent.role,
            summary: step.data.action,
            conceptIds: ['cardiac-output'],
          });
          memoryOpCount += 1;

          if (step.data.tool && currentAgent.allowedTools.includes(step.data.tool as never)) {
            const toolName = step.data.tool as AgentToolName;
            const result = executeTool(toolName, step.data.toolInput ?? {}, { evidence, lessons: options.lessons, sessionId: session.id });
            toolCallCount += 1;
            if (toolName === 'recall_memory' || toolName === 'consolidate_memory') {
              memoryOpCount += 1;
            }
            appendMessage(session.id, { role: currentAgent.role, content: step.data.action, toolCalls: [{ tool: toolName, input: step.data.toolInput ?? {}, output: result.ok ? result.data : result.error }] });
          } else {
            appendMessage(session.id, { role: currentAgent.role, content: step.data.action });
          }

          if (!step.data.handoffTo) break;
          const next = getAgent(step.data.handoffTo);
          if (!next) throw new AiRunError('INVALID_OUTPUT');
          // Reason is a fixed label, never the agent's raw action text (could contain untrusted data).
          handoffs.push({ from: currentAgent.id, to: next.id, reason: `handoff ${currentAgent.id}→${next.id}` });
          appendHandoff(session.id, handoffs[handoffs.length - 1]);
          currentAgent = next;
        }

        // Se saiu do loop sem output do orquestrador, chama o orquestrador para sintetizar
        const promptDef = agentPrompts['agent-orchestrator'];
        const userPayload = JSON.stringify({ goal: request.goal, studyLocale: request.studyLocale, level: request.level, trace, evidenceKeys: keys });
        const response = await provider.generate({
          prompt: { system: promptDef.system, user: userPayload },
          maxOutputTokens: Math.min(orchestratorDefinition.maxOutputTokens, limits.maxOutputTokens),
          signal: controller.signal,
        });
        const text = typeof response.output === 'string' ? response.output : JSON.stringify(response.output);
        let value: unknown;
        try { value = safeJsonParse(text); } catch { throw new AiRunError('INVALID_OUTPUT'); }
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          const rec = value as Record<string, unknown>;
          if (rec.toolCalls === null || !Array.isArray(rec.toolCalls)) delete rec.toolCalls;
          if (!rec.locale) rec.locale = request.studyLocale;
          if (typeof rec.summary !== 'string' || !rec.summary) {
            rec.summary = 'Rascunho de plano de estudos sintetizado pelos agentes de estudo.';
          } else if (rec.summary.length > 1000) {
            rec.summary = rec.summary.slice(0, 1000);
          }
          if (rec.draft && typeof rec.draft === 'object') {
            const draftRec = rec.draft as Record<string, unknown>;
            if (typeof draftRec.title === 'string' && draftRec.title.length > 160) {
              draftRec.title = draftRec.title.slice(0, 160);
            }
            if (typeof draftRec.body === 'string' && draftRec.body.length > 4000) {
              draftRec.body = draftRec.body.slice(0, 4000);
            }
          }
          if (provider.kind === 'live' && trace.length > 0) {
            rec.agentTrace = trace.map(t => ({
              agentId: t.agentId,
              role: t.role,
              action: t.action.slice(0, 300),
              ...(t.handoffTo ? { handoffTo: t.handoffTo } : {})
            }));
          } else if (!Array.isArray(rec.agentTrace) || rec.agentTrace.length === 0) {
            rec.agentTrace = trace.length > 0
              ? trace.map(t => ({
                  agentId: t.agentId,
                  role: t.role,
                  action: t.action.slice(0, 300),
                  ...(t.handoffTo ? { handoffTo: t.handoffTo } : {})
                }))
              : [{ agentId: 'planner', role: 'planner' as const, action: 'Planejamento sintetizado' }];
          } else if (Array.isArray(rec.agentTrace)) {
            for (const item of rec.agentTrace) {
              if (item && typeof item === 'object') {
                const itemRec = item as Record<string, unknown>;
                if (itemRec.handoffTo === null) delete itemRec.handoffTo;
                if (typeof itemRec.action === 'string' && itemRec.action.length > 300) {
                  itemRec.action = itemRec.action.slice(0, 300);
                }
              }
            }
          }
          const sanitizedOut: Record<string, unknown> = {
            locale: rec.locale,
            summary: rec.summary,
            agentTrace: rec.agentTrace,
            draft: rec.draft,
          };
          if (rec.toolCalls) sanitizedOut.toolCalls = rec.toolCalls;
          value = sanitizedOut;
        }
        const out = orchestratorOutputSchema.safeParse(value);
        if (!out.success) throw new AiRunError('INVALID_OUTPUT');
        if (out.data.locale !== request.studyLocale) throw new AiRunError('LOCALE_MISMATCH');
        if (out.data.draft.evidenceKeys.some(k => !keys.includes(k))) throw new AiRunError('UNKNOWN_EVIDENCE');
        const draft: OrchestratorDraft = {
          id: randomUUID(), status: 'draft', medicallyReviewed: false,
          sessionId: session.id, content: out.data,
          memorySnapshot: recallCognitiveMemory(session.id),
          provenance: {
            runId, createdAt: new Date().toISOString(), providerId: provider.id, providerKind: provider.kind,
            schemaVersion: 1, evidenceKeys: keys, agentTrace: out.data.agentTrace,
          },
        };
        emit('draft-created');
        return draft;
      })();

      void invocation.then(() => { active -= 1; }, () => { active -= 1; });
      try {
        const deadline = new Promise<never>((_, reject) => {
          const t = setTimeout(() => { reject(new AiRunError('TIMEOUT')); controller.abort(); }, limits.timeoutMs);
          void t;
        });
        return await Promise.race([invocation, deadline]);
      } catch (error) {
        const failure = error instanceof AiRunError ? error : new AiRunError('PROVIDER_FAILED');
        emit('failed', failure);
        throw failure;
      }
    },
  };
}
