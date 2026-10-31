import { test as base, expect, type Page } from '@playwright/test';

const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await use(errors);
    expect(errors).toEqual([]);
  }, { auto: true }],
});

async function openQuestion(page: Page) {
  await page.getByTestId('start-lesson').click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Testar meu entendimento', exact: true }).click();
}
async function answer(page: Page, id: string) {
  await page.locator('label:has(input[value="' + id + '"])').click();
  await page.getByTestId('check-answer').click();
}
async function expectNoOverflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
}

test('complete lesson, correct a mistake, review, and keep exactly 10 XP', async ({ page }, info) => {
  await page.goto('/');
  await expect(page.getByTestId('interface-locale')).toHaveValue('pt-BR');
  await expect(page.getByTestId('start-review')).toBeDisabled();
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.screenshot({ path: info.outputPath('home.png'), fullPage: true });
  await expectNoOverflow(page);
  await openQuestion(page);
  await expect(page.getByTestId('check-answer')).toBeDisabled();
  await answer(page, 'output-10500');
  await expect(page.getByRole('status')).toContainText('Ainda não');
  await expect(page.getByRole('status')).toContainText('não se somam');
  await page.getByRole('button', { name: 'Tentar novamente', exact: true }).click();
  await answer(page, 'output-5250');
  await expect(page.getByRole('status')).toContainText('Isso mesmo');
  await page.screenshot({ path: info.outputPath('answer.png'), fullPage: true });
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mais um conceito, compreendido.');
  await page.locator('.reader-actions').getByRole('button', { name: 'Voltar à trilha', exact: true }).click();
  await expect(page.getByTestId('start-review')).toBeEnabled();
  await page.reload();
  await expect(page.getByTestId('start-review')).toBeEnabled();
  const savedXp = await page.evaluate(() => {
    const saved = JSON.parse(localStorage.getItem('medora.learning.v1')!);
    return Object.values(saved.lessons).filter((item) => (item as { completedAt: string }).completedAt).length * 10;
  });
  expect(savedXp).toBe(10);
  await page.getByTestId('start-review').click();
  await answer(page, 'output-5250');
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Revisão concluída');
  await page.locator('.reader-actions').getByRole('button', { name: 'Voltar à trilha', exact: true }).click();
  await page.getByRole('button', { name: 'Perfil', exact: true }).click();
  await expect(page.locator('.profile-stats')).toContainText('10');
  await expectNoOverflow(page);
  await page.getByRole('button', { name: 'Início', exact: true }).click();
  await page.getByTestId('interface-locale').selectOption('en');
  await page.getByTestId('study-locale').selectOption('en');
  await page.getByTestId('start-lesson').click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Check my understanding', exact: true }).click();
  await answer(page, 'output-5250');
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('One more concept, understood.');
  await expect(page.locator('.earned-xp')).toContainText('no additional XP');
  await page.locator('.reader-actions').getByRole('button', { name: 'Back to learning path', exact: true }).click();
  await page.getByRole('button', { name: 'Profile', exact: true }).click();
  await expect(page.locator('.profile-stats')).toContainText('10');
});

test('independent languages, stable stage and preferences after refresh', async ({ page }, info) => {
  await page.goto('/');
  await page.getByTestId('study-locale').selectOption('en');
  await expect(page.getByTestId('interface-locale')).toHaveValue('pt-BR');
  await page.getByTestId('start-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How much does one ventricle pump per minute?');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Two measurements, one calculation');
  await page.getByTestId('interface-locale').selectOption('en');
  await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Two measurements, one calculation');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.screenshot({ path: info.outputPath('reader-en.png'), fullPage: true });
  await expectNoOverflow(page);
  await page.reload();
  await expect(page.getByTestId('interface-locale')).toHaveValue('en');
  await expect(page.getByTestId('study-locale')).toHaveValue('en');
  await page.getByTestId('start-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Two measurements, one calculation');
  await page.getByTestId('study-locale').selectOption('pt-BR');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Duas medidas, um cálculo');
  await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('De 75 × 70 a 5,25 L/min');
});

test('library search and lesson entry are functional', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Biblioteca', exact: true }).click();
  await page.getByRole('textbox', { name: 'Buscar cursos', exact: true }).fill('neurologia');
  await expect(page.getByRole('status')).toHaveText('Nenhum curso corresponde à busca.');
  await page.getByRole('textbox', { name: 'Buscar cursos', exact: true }).fill('cardiaco');
  await page.locator('.library-course').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Quanto um ventrículo bombeia por minuto?');
});

test('unavailable storage is explicit and does not break the lesson', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('Storage unavailable'); };
    Storage.prototype.setItem = () => { throw new Error('Storage unavailable'); };
  });
  await page.goto('/');
  await expect(page.getByRole('status')).toContainText('armazenamento do navegador está indisponível');
  await openQuestion(page);
  await answer(page, 'output-5250');
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mais um conceito, compreendido.');
});

test('production demo requires explicit opt-in', async ({ request }) => {
  const response = await request.get('http://127.0.0.1:3101/');
  expect(response.ok()).toBe(true);
  const html = await response.text();
  expect(html).toContain('Medical demo disabled');
  expect(html).not.toContain('data-testid="start-lesson"');
});

test('invalid stored data recovers with a visible notice', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('medora.learning.v1', JSON.stringify({ version: 99 })));
  await page.goto('/');
  await expect(page.getByRole('status')).toContainText('registro salvo incompatível');
  await page.getByTestId('start-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Quanto um ventrículo bombeia por minuto?');
});
