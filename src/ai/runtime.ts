import 'server-only';
import type { AgentRunRecord, ProviderResponse, RunRecord } from '@/contracts/ai';
import { lessons } from '../../content';
import { allEvidence } from './evidence';
import { AiRunError } from './errors';
import { createAgentOrchestrator } from './agents/orchestrator';
import { createAgentFixtureProvider } from './providers/agent-fixture';
import { createFixtureProvider } from './providers/fixture';
import { createLiveProvider, isLiveProviderConfigured } from './providers/live';
import { createStudyPlanService } from './study-plan-service';
import { createTutorService } from './tutor-service';

export function createAiRuntime(config:
  | { mode: 'fixture'; response: ProviderResponse; agentResponses?: Record<string, unknown>; onRun?: (record: RunRecord) => void; onAgentRun?: (record: AgentRunRecord) => void }
  | { mode: 'live'; onRun?: (record: RunRecord) => void; onAgentRun?: (record: AgentRunRecord) => void }
) {
  if (config.mode === 'fixture') {
    const provider = createFixtureProvider(config.response);
    const agentProvider = createAgentFixtureProvider(config.agentResponses ?? {});
    return {
      studyPlan: createStudyPlanService({ provider, evidence: allEvidence, onRun: config.onRun }),
      tutor: createTutorService({ provider, evidence: allEvidence, onRun: config.onRun }),
      agents: createAgentOrchestrator({ provider: agentProvider, evidence: allEvidence, lessons, onRun: config.onAgentRun }),
    };
  }
  // Live mode: fails closed unless AI_API_KEY is set server-side AND D5 is approved via AI_LIVE_ENABLED=true.
  const liveEnabled = process.env.AI_LIVE_ENABLED === 'true';
  if (!liveEnabled || !isLiveProviderConfigured()) {
    throw new AiRunError('PROVIDER_NOT_CONFIGURED');
  }
  const provider = createLiveProvider();
  if (!provider) throw new AiRunError('PROVIDER_NOT_CONFIGURED');
  return {
    studyPlan: createStudyPlanService({ provider, evidence: allEvidence, onRun: config.onRun }),
    tutor: createTutorService({ provider, evidence: allEvidence, onRun: config.onRun }),
    agents: createAgentOrchestrator({ provider, evidence: allEvidence, lessons, onRun: config.onAgentRun }),
  };
}
