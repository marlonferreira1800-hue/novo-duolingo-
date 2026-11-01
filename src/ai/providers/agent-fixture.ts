import 'server-only';
import type { DraftProvider, ProviderRequest, ProviderResponse } from '@/contracts/ai';

// Fixture determinístico para testes do orquestrador de agentes.
// Recebe um mapa promptId → resposta para simular cada agente.
export function createAgentFixtureProvider(responses: Record<string, unknown>): DraftProvider {
  return {
    id: 'agent-fixture-v1',
    kind: 'fixture',
    async generate(request: ProviderRequest): Promise<ProviderResponse> {
      request.signal.throwIfAborted();
      const promptId = request.prompt.system.includes('orchestrator') ? 'agent-orchestrator'
        : request.prompt.system.includes('planner') ? 'agent-planner'
        : request.prompt.system.includes('memory-curator') ? 'agent-memory-curator'
        : request.prompt.system.includes('tutor') ? 'agent-tutor'
        : request.prompt.system.includes('question-generator') ? 'agent-question-gen'
        : 'agent-fact-checker';
      const output = responses[promptId] ?? responses['default'] ?? { error: 'no fixture response' };
      return {
        output: typeof output === 'string' ? output : JSON.stringify(output),
        usage: { inputTokens: 50, outputTokens: 30 },
      };
    },
  };
}
