import 'server-only';
import type { ProviderResponse, RunRecord } from '@/contracts/ai';
import { cardiovascularEvidence } from './evidence/cardiovascular';
import { AiRunError } from './errors';
import { createFixtureProvider } from './providers/fixture';
import { createStudyPlanService } from './study-plan-service';

export function createAiRuntime(config:
  | { mode: 'fixture'; response: ProviderResponse; onRun?: (record: RunRecord) => void }
  | { mode: 'live' },
) {
  if (config.mode !== 'fixture') throw new AiRunError('PROVIDER_NOT_CONFIGURED');
  return createStudyPlanService({
    provider: createFixtureProvider(config.response),
    evidence: [cardiovascularEvidence],
    onRun: config.onRun,
  });
}
