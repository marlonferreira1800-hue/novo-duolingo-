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
    allowedTools: ['search_evidence', 'recall_memory'],
    maxOutputTokens: 600,
  },
  {
    id: 'memory-curator',
    role: 'memory-curator',
    promptId: 'agent-memory-curator',
    promptVersion: '1.0.0',
    allowedTools: ['recall_memory', 'consolidate_memory', 'search_evidence'],
    maxOutputTokens: 600,
  },
  {
    id: 'tutor-agent',
    role: 'tutor',
    promptId: 'agent-tutor',
    promptVersion: '1.0.0',
    allowedTools: ['search_evidence', 'get_lesson', 'recall_memory'],
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

const ID_ALIASES: Record<string, string> = {
  'tutor': 'tutor-agent',
  'agent-tutor': 'tutor-agent',
  'planner': 'planner',
  'agent-planner': 'planner',
  'question-generator': 'question-gen',
  'question-gen': 'question-gen',
  'agent-question-gen': 'question-gen',
  'fact-checker': 'fact-checker',
  'agent-fact-checker': 'fact-checker',
  'memory-curator': 'memory-curator',
  'agent-memory-curator': 'memory-curator',
  'orchestrator': 'orchestrator',
  'agent-orchestrator': 'orchestrator',
};

export function getAgent(id: string): AgentDefinition | undefined {
  const canonicalId = ID_ALIASES[id] ?? id;
  if (canonicalId === orchestratorDefinition.id) return orchestratorDefinition;
  return agentDefinitions.find(a => a.id === canonicalId);
}
