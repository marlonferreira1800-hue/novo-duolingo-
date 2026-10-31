import { describe, expect, it } from 'vitest';
import { learningStateSchema, progressKey } from '../src/contracts/learning';

describe('foundation contracts', () => {
  it('uses a locale-independent, revision-aware progress identity', () => {
    expect(progressKey({ id: 'cardiac-output', revision: 1 })).toBe('cardiac-output@1');
  });
  it('rejects unsupported locales and incompatible persisted data', () => {
    expect(learningStateSchema.safeParse({ version: 2, uiLocale: 'fr', lessons: {} }).success).toBe(false);
  });
});
