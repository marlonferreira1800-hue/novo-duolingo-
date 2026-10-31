import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { evidenceKey, type AgentRunRecord } from '../../src/contracts/ai';
import { allEvidence } from '../../src/ai/evidence';
import { cardiovascularEvidence } from '../../src/ai/evidence/cardiovascular';
import { createAgentFixtureProvider } from '../../src/ai/providers/agent-fixture';
import { createAgentOrchestrator } from '../../src/ai/agents/orchestrator';
import { executeTool, searchEvidence, computeExample } from '../../src/ai/agents/tools';
import { createAiRuntime } from '../../src/ai/runtime';
import { AiRunError } from '../../src/ai/errors';
import { lessons } from '../../content';

const sourceKey = evidenceKey(cardiovascularEvidence);

function makeOrchestratorOutput(locale: 'pt-BR' | 'en' = 'pt-BR') {
  return {
    locale,
    summary: locale === 'pt-BR' ? 'Plano de estudo sobre débito cardíaco.' : 'Study plan about cardiac output.',
    agentTrace: [
      { agentId: 'planner', role: 'planner', action: 'Definiu etapas usando a fonte OpenStax.', handoffTo: 'tutor-agent' },
      { agentId: 'tutor-agent', role: 'tutor', action: 'Explicou CO = FC × VS.', handoffTo: 'question-gen' },
      { agentId: 'question-gen', role: 'question-generator', action: 'Gerou questão de múltipla escolha.', handoffTo: 'fact-checker' },
      { agentId: 'fact-checker', role: 'fact-checker', action: 'Verificou citações.' },
    ],
    draft: {
      title: locale === 'pt-BR' ? 'Débito cardíaco' : 'Cardiac output',
      body: locale === 'pt-BR'
        ? 'Débito cardíaco = FC × VS. Exemplo: 75 × 70 mL = 5,25 L/min.'
        : 'Cardiac output = HR × SV. Example: 75 × 70 mL = 5.25 L/min.',
      evidenceKeys: [sourceKey],
    },
    toolCalls: [{ tool: 'search_evidence', agentId: 'planner' }],
  };
}

function setup(agentResponses: Record<string, unknown>) {
  const provider = createAgentFixtureProvider(agentResponses);
  const onRun = vi.fn<(r: AgentRunRecord) => void>();
  const orchestrator = createAgentOrchestrator({
    provider,
    evidence: allEvidence,
    lessons,
    onRun,
  });
  return { orchestrator, onRun };
}

let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  fetchMock = vi.fn(() => { throw new Error('Network forbidden in offline agent evals.'); });
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
  expect(fetchMock).not.toHaveBeenCalled();
});

describe('multi-agent orchestrator (offline fixture)', () => {
  it('runs the full agent chain and returns a draft with trace + provenance', async () => {
    const { orchestrator, onRun } = setup({
      'agent-planner': { action: 'Planejou 3 etapas.', handoffTo: 'tutor-agent', tool: 'search_evidence', toolInput: { query: 'cardiac output' } },
      'agent-tutor': { action: 'Explicou o conceito.', handoffTo: 'question-gen' },
      'agent-question-gen': { action: 'Gerou questão.', handoffTo: 'fact-checker', tool: 'compute_example', toolInput: { expr: '75*70' } },
      'agent-fact-checker': { action: 'Verificou citações.', handoffTo: undefined },
      'agent-orchestrator': makeOrchestratorOutput('pt-BR'),
    });

    const draft = await orchestrator.run({ goal: 'Explique débito cardíaco', studyLocale: 'pt-BR', level: 'basic' });

    expect(draft.status).toBe('draft');
    expect(draft.medicallyReviewed).toBe(false);
    expect(draft.content.agentTrace.length).toBe(4);
    expect(draft.content.draft.evidenceKeys).toEqual([sourceKey]);
    expect(draft.provenance.agentTrace.map(t => t.agentId)).toEqual(['planner', 'tutor-agent', 'question-gen', 'fact-checker']);
    expect(draft.provenance.evidenceKeys).toContain(sourceKey);
    expect(draft.sessionId).toBeTruthy();
    expect(onRun).toHaveBeenCalledWith(expect.objectContaining({
      outcome: 'draft-created',
      steps: 4,
      providerKind: 'fixture',
    }));
    const record = onRun.mock.calls[0][0];
    expect(record.handoffs.length).toBe(3);
    expect(record.toolCalls).toBeGreaterThanOrEqual(2);
  });

  it('rejects invalid input without calling the provider', async () => {
    const { orchestrator, onRun } = setup({});
    await expect(orchestrator.run({ goal: '  ', studyLocale: 'pt-BR', level: 'basic' })).rejects.toMatchObject({ code: 'INVALID_INPUT' });
    await expect(orchestrator.run({ goal: 'x'.repeat(600), studyLocale: 'pt-BR', level: 'basic' })).rejects.toMatchObject({ code: 'INVALID_INPUT' });
    expect(onRun).not.toHaveBeenCalled();
  });

  it('rejects output with unknown evidence key', async () => {
    const { orchestrator } = setup({
      'agent-planner': { action: 'ok' },
      'agent-orchestrator': { ...makeOrchestratorOutput(), draft: { ...makeOrchestratorOutput().draft, evidenceKeys: ['unknown@1'] } },
    });
    await expect(orchestrator.run({ goal: 'teste', studyLocale: 'pt-BR', level: 'basic', maxSteps: 2 })).rejects.toMatchObject({ code: 'UNKNOWN_EVIDENCE' });
  });

  it('rejects locale mismatch in final output', async () => {
    const { orchestrator } = setup({
      'agent-planner': { action: 'ok' },
      'agent-orchestrator': makeOrchestratorOutput('en'),
    });
    await expect(orchestrator.run({ goal: 'teste', studyLocale: 'pt-BR', level: 'basic', maxSteps: 2 })).rejects.toMatchObject({ code: 'LOCALE_MISMATCH' });
  });

  it('works through the runtime in fixture mode', async () => {
    const runtime = createAiRuntime({
      mode: 'fixture',
      response: { output: {} },
      agentResponses: {
        'agent-planner': { action: 'ok', handoffTo: 'fact-checker' },
        'agent-fact-checker': { action: 'verificado' },
        'agent-orchestrator': makeOrchestratorOutput('en'),
      },
    });
    const draft = await runtime.agents.run({ goal: 'Explain cardiac output', studyLocale: 'en', level: 'basic' });
    expect(draft.status).toBe('draft');
    expect(draft.content.locale).toBe('en');
  });

  it('never exposes raw tool output or prompts in the run record', async () => {
    const secret = 'SECRET_PROMPT_CONTENT';
    const { orchestrator, onRun } = setup({
      'agent-planner': { action: secret, handoffTo: 'fact-checker', tool: 'search_evidence', toolInput: { query: 'x' } },
      'agent-fact-checker': { action: 'ok' },
      'agent-orchestrator': makeOrchestratorOutput(),
    });
    await orchestrator.run({ goal: 'teste', studyLocale: 'pt-BR', level: 'basic' });
    const serialized = JSON.stringify(onRun.mock.calls);
    expect(serialized).not.toContain(secret);
  });
});

describe('agent tools (audited, no external access)', () => {
  it('search_evidence finds relevant sources by keyword', () => {
    const result = searchEvidence(allEvidence, 'cardiac output');
    expect(result.ok).toBe(true);
    expect((result.data as { key: string }[]).length).toBeGreaterThan(0);
    expect((result.data as { key: string }[])[0].key).toContain('openstax');
  });

  it('compute_example evaluates safe arithmetic only', () => {
    expect(computeExample('75*70').data).toEqual({ expression: '75*70', result: 5250 });
    expect(computeExample('process.exit()').ok).toBe(false);
    expect(computeExample('fetch("http://evil")').ok).toBe(false);
    expect(computeExample('1/0').ok).toBe(false);
  });

  it('executeTool dispatches and audits', () => {
    const r1 = executeTool('search_evidence', { query: 'heart' }, { evidence: allEvidence, lessons });
    expect(r1.ok).toBe(true);
    const r2 = executeTool('get_lesson', { lessonId: 'cardiac-output' }, { evidence: allEvidence, lessons });
    expect(r2.ok).toBe(true);
    const r3 = executeTool('get_lesson', { lessonId: 'nope' }, { evidence: allEvidence, lessons });
    expect(r3.ok).toBe(false);
  });
});

it('live agent mode fails closed without approval', () => {
  expect(() => createAiRuntime({ mode: 'live' })).toThrow(AiRunError);
});
