import { LoginForm } from './login-form';
import { isSupabaseConfigured } from '@/auth/config';

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const configured = isSupabaseConfigured();
  return (
    <main style={{ maxWidth: 420, margin: '4rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <h1>Entrar no Medora</h1>
      {configured ? (
        <LoginForm />
      ) : (
        <p role="status">
          Login não está configurado neste ambiente. O app continua funcionando em modo local (sem sincronização).
        </p>
      )}
      <p style={{ marginTop: '1rem' }}><a href="/">← Voltar para a página inicial</a></p>
    </main>
  );
}
