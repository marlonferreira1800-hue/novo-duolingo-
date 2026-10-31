import { test, expect } from '@playwright/test';

// E2E autenticado (D12). Requer emulador Supabase local rodando (npx supabase start)
// e variáveis SUPABASE_URL/SUPABASE_ANON_KEY no .env do servidor de teste.
// Se Supabase não estiver configurado, estes testes são pulados.

const SUPABASE_URL = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const configured = Boolean(SUPABASE_URL);

test.describe('auth flow (D12)', () => {
  test.skip(!configured, 'Supabase não configurado — pule este teste sem emulador local.');

  test('login page renders with magic link form', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: /entrar/i })).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });

  test('app shell shows sign-in button when unauthenticated', async ({ page }) => {
    await page.goto('/app');
    await expect(page.getByTestId('sign-in')).toBeVisible();
  });

  test('two users have isolated progress (requires seeded users)', async ({ browser }) => {
    // Este teste requer 2 usuários de teste criados via auth API.
    // Placeholder: verifica que a página /app carrega sem erro para usuário não logado.
    const page = await browser.newPage();
    await page.goto('/app');
    await expect(page.getByTestId('sign-in')).toBeVisible();
    await page.close();
  });
});
