import { describe, expect, it, vi } from 'vitest';

describe('auth config (public, browser-safe)', () => {
  it('reports not configured when NEXT_PUBLIC vars are missing', async () => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');
    const { isSupabaseConfigured } = await import('../src/auth/config');
    expect(isSupabaseConfigured()).toBe(false);
    vi.unstubAllEnvs();
  });

  it('reports configured when both NEXT_PUBLIC vars are set', async () => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'http://localhost:54321');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-key');
    const { isSupabaseConfigured, getPublicSupabaseUrl } = await import('../src/auth/config');
    expect(isSupabaseConfigured()).toBe(true);
    expect(getPublicSupabaseUrl()).toBe('http://localhost:54321');
    vi.unstubAllEnvs();
  });
});

describe('lesson status editorial flow', () => {
  it('accepts all editorial statuses in schema', async () => {
    const { lessonStatusSchema } = await import('../src/contracts/learning');
    for (const s of ['demo-unreviewed', 'in_review', 'approved', 'published', 'withdrawn'] as const) {
      expect(lessonStatusSchema.safeParse(s).success).toBe(true);
    }
    expect(lessonStatusSchema.safeParse('bogus').success).toBe(false);
  });
});
