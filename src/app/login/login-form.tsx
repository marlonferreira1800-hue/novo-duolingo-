'use client';

import { useActionState } from 'react';
import { signInWithMagicLink, type AuthState } from '../actions/auth';

const initialState: AuthState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signInWithMagicLink, initialState);
  if (state.sent) {
    return <p role="status">Link de acesso enviado! Verifique seu email (Inbucket local em :54324).</p>;
  }
  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required placeholder="voce@exemplo.com"
        style={{ padding: '0.5rem', borderRadius: 6, border: '1px solid #ccc' }} />
      {state.error ? <p role="alert" style={{ color: '#b00' }}>{state.error}</p> : null}
      <button type="submit" disabled={pending}
        style={{ padding: '0.6rem', borderRadius: 6, border: 'none', background: '#111', color: '#fff', cursor: 'pointer' }}>
        {pending ? 'Enviando…' : 'Enviar link de acesso'}
      </button>
    </form>
  );
}
