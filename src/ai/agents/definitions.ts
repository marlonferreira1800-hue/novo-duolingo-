import 'server-only';
import type { AgentDefinition } from '@/contracts/ai';

// Sub-agentes especializados. Cada um tem prompt próprio, ferramentas limitadas
// e NUNCA pode publicar, aprovar ou usar ferramentas externas (web, arquivo).
export const agentDefinitions: readonly AgentDefinition[] = [
  {
    id: 'planner',
    role: 'planner',
    promptId: 'agent-planner',
    promptVersion: '1.0.0',
    allowedTools: ['search_evidence'],
    maxOutputTokens: 600,
  },
  {
    id: 'tutor-agent',
    role: 'tutor',
    promptId: 'agent-tutor',
    promptVersion: '1.0.0',
    allowedTools: ['search_evidence', 'get_lesson'],
    maxOutputTokens: 800,
  },
  {
    id: 'question-gen',
    role: 'question-generator',
    promptId: 'agent-question-gen',
    promptVersion: '1.0.0',
    allowedTools: ['search_evidence', 'compute_example'],
    maxOutputTokens: 600,
  },
  {
    id: 'fact-checker',
    role: 'fact-checker',
    promptId: 'agent-fact-checker',
    promptVersion: '1.0.0',
    allowedTools: ['search_evidence'],
    maxOutputTokens: 400,
  },
] as const;

export const orchestratorDefinition: AgentDefinition = {
  id: 'orchestrator',
  role: 'orchestrator',
  promptId: 'agent-orchestrator',
  promptVersion: '1.0.0',
  allowedTools: [],
  maxOutputTokens: 1000,
};

export function getAgent(id: string): AgentDefinition | undefined {
  if (id === orchestratorDefinition.id) return orchestratorDefinition;
  return agentDefinitions.find(a => a.id === id);
}
