'use server';

import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/auth/server';
import { isSupabaseConfigured } from '@/auth/config';

export type AuthState = { error?: string; sent?: boolean };

export async function signInWithMagicLink(_prev: AuthState, formData: FormData): Promise<AuthState> {
  if (!isSupabaseConfigured()) {
    return { error: 'Supabase não está configurado neste ambiente.' };
  }
  const email = String(formData.get('email') ?? '').trim();
  if (!email || !email.includes('@')) {
    return { error: 'Informe um email válido.' };
  }
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/app` },
  });
  if (error) return { error: 'Não foi possível enviar o link. Tente novamente.' };
  return { sent: true };
}

export async function signOut() {
  if (!isSupabaseConfigured()) redirect('/');
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  redirect('/');
}
