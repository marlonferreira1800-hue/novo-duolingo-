import { test as base, expect } from '@playwright/test';

const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await use(errors);
    expect(errors).toEqual([]);
  }, { auto: true }],
});

test('skip link is the first tab stop and moves focus into the main region', async ({ page }) => {
  await page.goto('/app');
  await page.keyboard.press('Tab');
  const skip = page.locator('a.skip-link');
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
});

test('reader moves focus to the heading on each stage and to the feedback after submitting', async ({ page }) => {
  await page.goto('/app');
  await page.getByTestId('start-lesson-cardiac-output').click();
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeFocused();
  await expect(heading).toHaveText('Quanto um ventrículo bombeia por minuto?');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await expect(heading).toBeFocused();
  await expect(heading).toHaveText('Duas medidas, um cálculo');
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Testar meu entendimento', exact: true }).click();
  await page.locator('label:has(input[value="output-525"])').click();
  await page.getByTestId('check-answer').click();
  await expect(page.locator('.answer-feedback')).toBeFocused();
  await expect(page.getByRole('status')).toContainText('Ainda não');
});

test('reader skip link targets the reader main region', async ({ page }) => {
  await page.goto('/app');
  await page.getByTestId('start-lesson-cardiac-output').click();
  const skip = page.locator('.reader a.skip-link');
  await expect(skip).toHaveAttribute('href', '#reader-main');
  await skip.focus();
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#reader-main')).toBeFocused();
});

test('reduced motion disables transitions and animations', async ({ page }) => {
  await page.goto('/app');
  const style = await page.locator('.button.primary').first().evaluate((element) => {
    const computed = getComputedStyle(element);
    return { transitionDuration: computed.transitionDuration, animationName: computed.animationName };
  });
  expect(style.transitionDuration).toBe('0s');
  expect(style.animationName).toBe('none');
});

test('intermediate stage and unsubmitted selection survive reload and a study-language switch', async ({ page }) => {
  await page.goto('/app');
  await page.getByTestId('start-lesson-cardiac-output').click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.getByRole('button', { name: 'Próximo', exact: true }).click();
  await page.reload();
  await page.getByTestId('start-lesson-cardiac-output').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('De 75 × 70 a 5,25 L/min');
  await page.getByRole('button', { name: 'Testar meu entendimento', exact: true }).click();
  await page.locator('label:has(input[value="output-525"])').click();
  await page.reload();
  await page.getByTestId('start-lesson-cardiac-output').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Testar meu entendimento');
  await expect(page.locator('input[value="output-525"]')).toBeChecked();
  await expect(page.getByTestId('check-answer')).toBeEnabled();
  await page.getByTestId('study-locale').selectOption('en');
  await expect(page.locator('.quiz legend')).toContainText('In a hypothetical example');
  await expect(page.locator('input[value="output-525"]')).toBeChecked();
  await page.getByTestId('interface-locale').selectOption('en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Check my understanding');
  await expect(page.locator('input[value="output-525"]')).toBeChecked();
  await page.getByTestId('check-answer').click();
  await expect(page.getByRole('status')).toContainText('Not quite');
  await page.getByRole('button', { name: 'Try again', exact: true }).click();
  await expect(page.locator('input[value="output-525"]')).not.toBeChecked();
});
