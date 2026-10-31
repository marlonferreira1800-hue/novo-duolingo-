'use client';

import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { createClientSupabaseClient } from './browser';
import { isSupabaseConfigured } from './config';

export function useSession() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }
    const supabase = createClientSupabaseClient();
    supabase.auth.getUser().then(({ data }: { data: { user: { id: string } | null } }) => {
      setUserId(data.user?.id ?? null);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setUserId(session?.user?.id ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return { userId, loading, configured: isSupabaseConfigured() };
}
