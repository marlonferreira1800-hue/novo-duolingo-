import { test as base, expect, type Page } from '@playwright/test';

const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await use(errors);
    expect(errors).toEqual([]);
  }, { auto: true }],
});

const CYCLE_ORDER = ['filling', 'atrial-systole', 'isovolumetric-contraction', 'ejection', 'isovolumetric-relaxation'];

async function openQuestion(page: Page) {
  await page.getByTestId('start-lesson-cardiac-output').click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Testar meu entendimento', exact: true }).click();
}
async function answer(page: Page, id: string) {
  await page.locator('label:has(input[value="' + id + '"])').click();
  await page.getByTestId('check-answer').click();
}
async function solveOrder(page: Page, correctIds: string[]) {
  for (let i = 0; i < correctIds.length; i++) {
    for (let guard = 0; guard < correctIds.length; guard++) {
      const at = await page.locator('.order-item').nth(i).getAttribute('data-testid');
      if (at === `order-item-${correctIds[i]}`) break;
      await page.getByTestId(`order-up-${correctIds[i]}`).click();
    }
  }
  await page.getByTestId('check-answer').click();
}
async function expectNoOverflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
}

test('complete lesson, correct a mistake, review, and keep exactly 10 XP', async ({ page }, info) => {
  await page.goto('/app');
  await expect(page.getByTestId('interface-locale')).toHaveValue('pt-BR');
  await expect(page.getByTestId('start-review-cardio-physiology')).toBeDisabled();
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
  await expect(page.getByTestId('start-review-cardio-physiology')).toBeEnabled();
  await page.reload();
  await expect(page.getByTestId('start-review-cardio-physiology')).toBeEnabled();
  const savedXp = await page.evaluate(() => {
    const saved = JSON.parse(localStorage.getItem('medora.learning.v1')!);
    return Object.values(saved.lessons).filter((item) => (item as { completedAt: string }).completedAt).length * 10;
  });
  expect(savedXp).toBe(10);
  await page.getByTestId('start-review-cardio-physiology').click();
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
  await page.getByTestId('start-lesson-cardiac-output').click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
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

test('opening hook is shown on the first stage of a lesson', async ({ page }) => {
  await page.goto('/app');
  await page.getByTestId('start-lesson-cardiac-output').click();
  await expect(page.locator('.lesson-hook')).toContainText('bomba que nunca para');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('bomba que nunca para');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Quanto um ventrículo bombeia por minuto?');
  await expect(page.locator('.hook-screen')).toHaveCount(0);
});

test('independent languages, stable stage and preferences after refresh', async ({ page }, info) => {
  await page.goto('/app');
  await page.getByTestId('study-locale').selectOption('en');
  await expect(page.locator('.course-heading h1')).toContainText('Basic cycle');
  await expect(page.getByTestId('interface-locale')).toHaveValue('pt-BR');
  await page.getByTestId('start-lesson-cardiac-output').click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('pump that never stops');
  await expect(page.locator('.lesson-hook')).toContainText('pump that never stops');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
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
  await page.getByTestId('start-lesson-cardiac-output').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Two measurements, one calculation');
  await page.getByTestId('study-locale').selectOption('pt-BR');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Duas medidas, um cálculo');
  await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('De 75 × 70 a 5,25 L/min');
});

test('cardiac cycle lesson uses order steps and completes independently', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('/app');
  await page.getByTestId('start-lesson-cardiac-cycle').click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('sequência precisa de eventos');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Um ciclo, três momentos');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Testar meu entendimento', exact: true }).click();
  await expect(page.getByTestId('order-item-filling')).toBeVisible();
  await page.getByTestId('check-answer').click();
  await expect(page.getByRole('status')).toContainText('Ainda não');
  await page.getByRole('button', { name: 'Tentar novamente', exact: true }).click();
  await solveOrder(page, CYCLE_ORDER);
  await expect(page.getByRole('status')).toContainText('Isso mesmo');
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mais um conceito, compreendido.');
  await page.locator('.reader-actions').getByRole('button', { name: 'Voltar à trilha', exact: true }).click();
  await expect(page.getByTestId('sidebar-xp')).toHaveText('10');
  await expect(page.getByTestId('start-review-cardio-physiology')).toBeEnabled();
  await openQuestion(page);
  await answer(page, 'output-5250');
  await page.getByTestId('complete-lesson').click();
  await page.locator('.reader-actions').getByRole('button', { name: 'Voltar à trilha', exact: true }).click();
  await expect(page.getByTestId('sidebar-xp')).toHaveText('20');
  await page.getByRole('button', { name: 'Perfil', exact: true }).click();
  await expect(page.locator('.profile-stats')).toContainText('2');
  await expect(page.locator('.profile-stats')).toContainText('20');
});

test('fill-in-the-blank lesson completes with the correct term', async ({ page }) => {
  await page.goto('/app');
  await page.getByTestId('start-lesson-cardiac-output-formula').click();
  await expect(page.locator('.lesson-hook')).toContainText('Qual número falta');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Qual número falta');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Testar meu entendimento', exact: true }).click();
  await expect(page.locator('.fill-blank')).toContainText('DC = FC ×');
  await answer(page, 'blood-pressure');
  await expect(page.getByRole('status')).toContainText('Ainda não');
  await page.getByRole('button', { name: 'Tentar novamente', exact: true }).click();
  await answer(page, 'stroke-volume');
  await expect(page.getByRole('status')).toContainText('Isso mesmo');
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mais um conceito, compreendido.');
});

test('sections are numbered on the learning path with per-section counters', async ({ page }) => {
  await page.goto('/app');
  await expect(page.locator('.section-header h2').first()).toHaveText('01 · Fisiologia cardiovascular');
  await expect(page.locator('.section-header p').first()).toHaveText('0 de 10 lições concluídas');
  await expect(page.getByTestId('discipline-picker')).toBeVisible();
  await page.getByTestId('discipline-select').selectOption('embryology');
  await expect(page.locator('.section-header h2')).toHaveText(['11 · Embriologia']);
  await expect(page.locator('.section-header p')).toHaveText(['0 de 10 lições concluídas']);
  await expect(page.getByTestId('start-lesson-embryology-fertilization')).toBeVisible();
  await expect(page.getByTestId('start-lesson-embryology-germ-layers')).toBeVisible();
  await expect(page.getByTestId('start-lesson-embryology-neurulation')).toBeVisible();
  await expect(page.getByTestId('start-lesson-embryology-placenta')).toBeVisible();
  await expect(page.getByTestId('start-lesson-embryology-organogenesis')).toBeVisible();
  await expect(page.getByTestId('start-lesson-embryology-urogenital')).toBeVisible();
  await page.getByTestId('discipline-select').selectOption('cell-biology');
  await expect(page.locator('.section-header h2')).toHaveText(['04 · Biologia celular']);
  await expect(page.locator('.section-header p')).toHaveText(['0 de 10 lições concluídas']);
  await expect(page.getByTestId('start-lesson-cell-membrane')).toBeVisible();
  await expect(page.getByTestId('start-lesson-cell-autophagy-proteasome')).toBeVisible();
  await page.getByTestId('discipline-select').selectOption('all');
  await expect(page.locator('.section-header h2')).toHaveCount(21);
});

test('library search and lesson entry are functional', async ({ page }) => {
  await page.goto('/app');
  await page.getByRole('button', { name: 'Biblioteca', exact: true }).click();
  await page.getByRole('textbox', { name: 'Buscar cursos', exact: true }).fill('neurologia');
  await expect(page.getByRole('status')).toHaveText('Nenhum curso corresponde à busca.');
  await page.getByRole('textbox', { name: 'Buscar cursos', exact: true }).fill('embriologia');
  await page.getByTestId('open-section-path-embryology').click();
  await expect(page.locator('.section-header h2')).toHaveText(['11 · Embriologia']);
  await page.getByRole('button', { name: 'Biblioteca', exact: true }).click();
  await page.getByRole('textbox', { name: 'Buscar cursos', exact: true }).fill('cardiaco');
  await page.getByTestId('library-lesson-cardiac-output').click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('bomba que nunca para');
});

test('unavailable storage is explicit and does not break the lesson', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('Storage unavailable'); };
    Storage.prototype.setItem = () => { throw new Error('Storage unavailable'); };
  });
  await page.goto('/app');
  await expect(page.getByRole('status')).toContainText('armazenamento do navegador está indisponível');
  await openQuestion(page);
  await answer(page, 'output-5250');
  await page.getByTestId('complete-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mais um conceito, compreendido.');
});

test('production demo requires explicit opt-in', async ({ request }) => {
  const response = await request.get('http://127.0.0.1:3101/app');
  expect(response.ok()).toBe(true);
  const html = await response.text();
  expect(html).toContain('Medical demo disabled');
  expect(html).not.toContain('data-testid="start-lesson-cardiac-output"');
});

test('invalid stored data recovers with a visible notice', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('medora.learning.v1', JSON.stringify({ version: 99 })));
  await page.goto('/app');
  await expect(page.getByRole('status')).toContainText('registro salvo incompatível');
  await page.getByTestId('start-lesson-cardiac-output').click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('bomba que nunca para');
});

test('wondering parity: create project (?project=), tutor drawer, advanced integration and canvas work end-to-end', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('/app');
  await page.getByRole('button', { name: 'Criar', exact: true }).click();
  await page.getByTestId('recommendation-rec-cardio').click();
  await expect(page.getByTestId('create-draft')).toBeVisible({ timeout: 45000 });
  await page.getByTestId('save-open-project').click();
  await expect(page.getByTestId('active-project-banner')).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId('active-project-section')).toBeVisible();
  expect(page.url()).toContain('?project=proj-');
  await page.getByTestId('clear-active-project').click();
  await expect(page.getByTestId('active-project-banner')).toHaveCount(0);

  await page.getByTestId('floating-tutor-btn').click();
  await expect(page.getByTestId('tutor-drawer')).toBeVisible();
  await page.getByTestId('tutor-input').fill('Como calcular o débito cardíaco?');
  await page.getByTestId('tutor-submit').click();
  await expect(page.getByTestId('tutor-response')).toBeVisible({ timeout: 30000 });
  await page.getByTestId('close-tutor').click();

  await page.getByTestId('start-advanced-cardio-physiology').click();
  await expect(page.getByTestId('clinical-integration-modal')).toBeVisible();
  await page.getByTestId('close-integration-modal').click();

  await page.getByRole('button', { name: 'Canvas', exact: true }).click();
  await expect(page.getByTestId('canvas-page')).toBeVisible();
  await page.getByTestId('canvas-zoom-in').click();
  await expect(page.getByTestId('canvas-zoom-value')).toHaveText('110%');
  await page.getByTestId('canvas-input').fill('Hipótese de sobrecarga de volume');
  await page.getByTestId('canvas-add').click();
  await expect(page.getByText('Hipótese de sobrecarga de volume')).toBeVisible();
});
