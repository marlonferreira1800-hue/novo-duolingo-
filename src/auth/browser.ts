'use client';

import { createBrowserClient } from '@supabase/ssr';

let client: ReturnType<typeof createBrowserClient> | undefined;

export function createClientSupabaseClient() {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('NEXT_PUBLIC_SUPABASE_URL/ANON_KEY not configured');
  client = createBrowserClient(url, key);
  return client;
}
