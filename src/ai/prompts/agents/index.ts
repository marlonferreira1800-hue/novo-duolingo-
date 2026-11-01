import 'server-only';
import { orchestratorPrompt } from './orchestrator';
import { plannerPrompt } from './planner';
import { memoryCuratorPrompt } from './memory-curator';
import { tutorAgentPrompt } from './tutor';
import { questionGenPrompt } from './question-gen';
import { factCheckerPrompt } from './fact-checker';

export const agentPrompts = {
  'agent-orchestrator': orchestratorPrompt,
  'agent-planner': plannerPrompt,
  'agent-memory-curator': memoryCuratorPrompt,
  'agent-tutor': tutorAgentPrompt,
  'agent-question-gen': questionGenPrompt,
  'agent-fact-checker': factCheckerPrompt,
} as const;

export {
  orchestratorPrompt,
  plannerPrompt,
  memoryCuratorPrompt,
  tutorAgentPrompt,
  questionGenPrompt,
  factCheckerPrompt,
};
