import 'server-only';
import type { AiErrorCode } from '@/contracts/ai';

export class AiRunError extends Error {
  constructor(readonly code: AiErrorCode) {
    super(`AI workflow failed: ${code}`);
    this.name = 'AiRunError';
  }
}
