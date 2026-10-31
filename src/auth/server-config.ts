import 'server-only';

export function getSupabaseUrl(): string {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) throw new Error('SUPABASE_URL is not configured');
  return url;
}

export function getSupabaseAnonKey(): string {
  const key = process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) throw new Error('SUPABASE_ANON_KEY is not configured');
  return key;
}
