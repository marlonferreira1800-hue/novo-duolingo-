import 'server-only';
import type { DraftProvider, ProviderResponse } from '@/contracts/ai';

/** Explicit deterministic test adapter. It does not generate or medically validate content. */
export function createFixtureProvider(response: ProviderResponse): DraftProvider {
  return {
    id: 'offline-fixture-v1',
    kind: 'fixture',
    async generate({ signal }) {
      signal.throwIfAborted();
      return structuredClone(response);
    },
  };
}
