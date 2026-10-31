import { test as base, expect, type Page } from '@playwright/test';
import { cardiacOutputLesson as lesson } from '../content/cardiac-output';
import { learningStateSchema, progressKey, type LearningState, type Locale } from '../src/contracts/learning';
import { STORAGE_KEY } from '../src/data/local-progress';
import { earnedXp } from '../src/features/learning/progress';
import { messages } from '../src/i18n/messages';

const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await use(errors);
    expect(errors).toEqual([]);
  }, { auto: true }],
});

const headlines = {
  'pt-BR': /^\s*Um\s+pouco\s+de\s+medicina\.\s*Todos\s+os\s+dias\.\s*$/,
  en: /^\s*A\s+little\s+medicine\.\s*Every\s+day\.\s*$/,
};
const publicSiteNames = { 'pt-BR': 'Sobre o Medora', en: 'About Medora' };
const completedState = learningStateSchema.parse({
  version: 1,
  uiLocale: 'pt-BR',
  studyLocale: 'en',
  lessons: {
    [progressKey(lesson)]: {
      stage: 2,
      selectedOptionId: lesson.correctOptionId,
      submitted: true,
      completedAt: '2026-10-01T12:00:00.000Z',
    },
  },
});

async function readStoredState(page: Page): Promise<LearningState | null> {
  const raw = await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY);
  return raw === null ? null : learningStateSchema.parse(JSON.parse(raw));
}

async function expectLanding(page: Page, locale: Locale) {
  const landing = page.getByTestId('landing-page');
  await expect(landing).toHaveCount(1);
  await expect(landing).toBeVisible();
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('main#main-content')).toBeVisible();
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(headlines[locale], { useInnerText: true });
  await expect(page.getByTestId('landing-locale')).toHaveCount(1);
  await expect(page.locator('select[data-testid="landing-locale"]')).toHaveValue(locale);
  await expect(page.getByTestId('landing-locale')).toHaveAccessibleName(/\S/);
  await expect(page.locator('html')).toHaveAttribute('lang', locale);
  for (const id of ['interface-locale', 'study-locale', 'start-lesson', 'check-answer']) {
    await expect(page.getByTestId(id)).toHaveCount(0);
  }
  await expect(page.getByRole('radio')).toHaveCount(0);
}

async function enterDemo(page: Page) {
  const link = page.getByTestId('landing-demo-link');
  await expect(link).toHaveCount(1);
  await expect(link).toBeVisible();
  await expect(page.getByRole('link').and(link)).toHaveCount(1);
  await expect(link).toHaveAttribute('href', '/app');
  await link.click();
  await expect(page).toHaveURL(/\/app$/);
  await expect(page.getByTestId('start-lesson')).toBeVisible();
  await expect(page.getByTestId('landing-page')).toHaveCount(0);
}

async function returnToPublicSite(page: Page, locale: Locale) {
  const link = page.getByRole('link', { name: publicSiteNames[locale], exact: true })
    .and(page.getByTestId('public-site-link'));
  await expect(link).toHaveCount(1);
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', '/');
  await link.click();
  await expect(page).toHaveURL((url) => url.pathname === '/' && url.hash === '');
  await expectLanding(page, locale);
}

function expectNoLessonPayload(payload: string) {
  for (const marker of [lesson.questionId, lesson.correctOptionId, 'correctOptionId']) {
    expect(payload, `Public payload must not contain ${marker}`).not.toContain(marker);
  }
  for (const translation of Object.values(lesson.translations)) {
    expect(payload).not.toContain(translation.question.prompt);
    for (const option of translation.question.options) {
      expect(payload).not.toContain(option.id);
      expect(payload).not.toContain(option.explanation);
    }
  }
}

async function expectNoOverflow(page: Page) {
  await page.evaluate(async () => { await document.fonts.ready; });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
}

async function expectProfileXp(page: Page, locale: Locale) {
  await page.getByRole('button', { name: messages[locale].profile, exact: true }).click();
  const xp = page.locator('.profile-stats > div')
    .filter({ has: page.getByText(messages[locale].totalXp, { exact: true }) });
  await expect(xp).toHaveCount(1);
  await expect(xp.locator('strong')).toHaveText('10');
}

test('root is the public landing, not the learning app or a lesson payload', async ({ page }, info) => {
  const response = await page.goto('/');
  expect(response?.ok()).toBe(true);
  expectNoLessonPayload(await response!.text());
  await expectLanding(page, 'pt-BR');
  await expect(page.getByTestId('landing-demo-link')).toHaveAttribute('href', '/app');
  expectNoLessonPayload(await page.content());
  await expectNoOverflow(page);
  await page.screenshot({ path: info.outputPath('landing-pt-BR.png'), fullPage: true });
});

test('landing language changes only UI locale, updates html lang and survives reload', async ({ page }, info) => {
  await page.goto('/');
  await expectLanding(page, 'pt-BR');
  await page.getByTestId('landing-locale').selectOption('en');
  await expectLanding(page, 'en');
  const englishState: LearningState = { version: 1, uiLocale: 'en', studyLocale: 'pt-BR', lessons: {} };
  await expect.poll(() => readStoredState(page)).toEqual(englishState);
  await expectNoOverflow(page);
  await page.screenshot({ path: info.outputPath('landing-en.png'), fullPage: true });
  await page.reload();
  await expectLanding(page, 'en');
  expect(await readStoredState(page)).toEqual(englishState);

  await page.getByTestId('landing-locale').selectOption('pt-BR');
  await expectLanding(page, 'pt-BR');
  await page.reload();
  await expectLanding(page, 'pt-BR');
  expect(await readStoredState(page)).toEqual({ ...englishState, uiLocale: 'pt-BR' });
});

test.describe('first use with an English browser', () => {
  test.use({ locale: 'en-US' });

  test('uses navigator.language and preserves both locales through the demo CTA', async ({ page }) => {
    await page.goto('/');
    expect(await page.evaluate(() => navigator.language)).toBe('en-US');
    await expectLanding(page, 'en');
    await enterDemo(page);
    await expect(page.getByTestId('interface-locale')).toHaveValue('en');
    await expect(page.getByTestId('study-locale')).toHaveValue('en');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await page.getByTestId('start-lesson').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(lesson.translations.en.stages[0].title);
  });
});

test('root to app to lesson uses the new route without changing the study language', async ({ page }) => {
  await page.goto('/');
  await expectLanding(page, 'pt-BR');
  await page.getByTestId('landing-locale').selectOption('en');
  await expectLanding(page, 'en');
  await enterDemo(page);
  await expect(page.getByTestId('interface-locale')).toHaveValue('en');
  await expect(page.getByTestId('study-locale')).toHaveValue('pt-BR');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByTestId('start-lesson').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(lesson.translations['pt-BR'].stages[0].title);
  await expect(page.getByRole('button', { name: messages.en.next, exact: true })).toBeVisible();
});

test('app and public-site roundtrip preserves study language, completion and exactly 10 XP', async ({ page }) => {
  await page.goto('/app');
  await expect(page.getByTestId('interface-locale')).toHaveValue('pt-BR');
  // Seed once, not in an init script: later navigation must not repair lost progress.
  await page.evaluate(({ key, state }) => localStorage.setItem(key, JSON.stringify(state)), {
    key: STORAGE_KEY, state: completedState,
  });
  await page.reload();
  await expect(page.getByTestId('study-locale')).toHaveValue('en');
  await expect(page.getByTestId('start-review')).toBeEnabled();
  await expectProfileXp(page, 'pt-BR');
  await returnToPublicSite(page, 'pt-BR');
  expect(await readStoredState(page)).toEqual(completedState);

  await page.getByTestId('landing-locale').selectOption('en');
  await expectLanding(page, 'en');
  const expected = { ...completedState, uiLocale: 'en' as const };
  await expect.poll(() => readStoredState(page)).toEqual(expected);
  await page.reload();
  await expectLanding(page, 'en');
  await enterDemo(page);
  await expect(page.getByTestId('interface-locale')).toHaveValue('en');
  await expect(page.getByTestId('study-locale')).toHaveValue('en');
  await expect(page.getByTestId('start-review')).toBeEnabled();
  await expectProfileXp(page, 'en');
  await returnToPublicSite(page, 'en');
  const restored = await readStoredState(page);
  expect(restored).toEqual(expected);
  expect(earnedXp(restored!, lesson)).toBe(10);
});

for (const denyReads of [true, false]) {
  test(`unavailable storage (${denyReads ? 'reads and writes' : 'writes only'}) keeps root and CTA usable without false persistence`, async ({ page }) => {
    await page.addInitScript(({ denyReads }) => {
      if (denyReads) Storage.prototype.getItem = () => { throw new Error('Storage unavailable'); };
      Storage.prototype.setItem = () => { throw new Error('Storage unavailable'); };
    }, { denyReads });
    await page.goto('/');
    await expectLanding(page, 'pt-BR');
    await page.getByTestId('landing-locale').selectOption('en');
    await expectLanding(page, 'en');
    await expect(page.getByRole('status')).toContainText(/storage[\s\S]*unavailable/i);
    // A regular anchor may reload the document; an unwritable locale need not survive that navigation.
    await page.reload();
    await expectLanding(page, 'pt-BR');
    if (denyReads) await expect(page.getByRole('status')).toContainText(/armazenamento[\s\S]*indisponível/i);
    await enterDemo(page);
    await page.getByTestId('interface-locale').selectOption('en');
    await expect(page.getByRole('status')).toHaveText(messages.en.storageWarning);
    await expect(page.locator('.panel-footer')).toHaveText(messages.en.temporarySession);
    await expect(page.locator('.panel-footer')).not.toContainText(messages.en.savedLocally);
    await page.getByTestId('start-lesson').click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(lesson.translations['pt-BR'].stages[0].title);
    await page.goto('/');
    // Full navigation/reload must not pretend that an unwritable preference was persisted.
    await expectLanding(page, 'pt-BR');
    await page.reload();
    await expectLanding(page, 'pt-BR');
  });
}

test('production gate keeps root public in both languages and blocks only app', async ({ page, request }) => {
  const response = await page.goto('http://127.0.0.1:3101/');
  expect(response?.ok()).toBe(true);
  const html = await response!.text();
  expect(html).toContain('data-testid="landing-page"');
  expect(html).not.toContain('Medical demo disabled');
  expectNoLessonPayload(html);
  for (const locale of ['pt-BR', 'en'] as const) {
    await page.getByTestId('landing-locale').selectOption(locale);
    await expectLanding(page, locale);
    await expect(page.locator('a[href="/app"]')).toHaveCount(0);
    const demo = page.locator('#demo');
    await expect(demo).toHaveCount(1);
    await expect(demo).toContainText(locale === 'pt-BR'
      ? /demonstração[\s\S]*(?:indisponível|desativada|não (?:está )?(?:disponível|habilitada))[\s\S]*ambiente/i
      : /demo(?:nstration)?[\s\S]*(?:unavailable|disabled|not (?:available|enabled))[\s\S]*environment/i);
    const demoLinks = page.locator('a[href="#demo"]').filter({ visible: true });
    expect(await demoLinks.count()).toBeGreaterThan(0);
    for (const link of await demoLinks.all()) {
      await link.click();
      await expect(page).toHaveURL('http://127.0.0.1:3101/#demo');
      await expect(demo).toBeInViewport();
    }
    expectNoLessonPayload(await page.content());
    await expectNoOverflow(page);
  }
  const blocked = await request.get('http://127.0.0.1:3101/app');
  expect(blocked.ok()).toBe(true);
  const blockedHtml = await blocked.text();
  expect(blockedHtml).toContain('Medical demo disabled');
  expect(blockedHtml).not.toContain('data-testid="start-lesson"');
  expectNoLessonPayload(blockedHtml);
});

for (const locale of ['pt-BR', 'en'] as const) {
  test(`landing anchors have real targets and FAQ works with the keyboard (${locale})`, async ({ page }) => {
    await page.goto('/');
    await expectLanding(page, 'pt-BR');
    await page.getByTestId('landing-locale').selectOption(locale);
    await expectLanding(page, locale);
    const hrefs = await page.getByTestId('landing-page').locator('a')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')));
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(href).toBeTruthy();
      expect(href).not.toMatch(/^javascript:/i);
      if (href?.startsWith('#')) {
        expect(href).not.toBe('#');
        const id = decodeURIComponent(href.slice(1));
        expect(await page.evaluate((id) => [...document.querySelectorAll('[id]')]
          .filter((element) => element.id === id).length, id), `Anchor target ${href}`).toBe(1);
      }
    }
    for (const id of ['how-it-works', 'demo', 'faq']) {
      const target = page.locator(`#${id}`);
      await expect(target).toHaveCount(1);
      await expect(target).toBeVisible();
      const links = page.locator(`a[href="#${id}"]`).filter({ visible: true });
      expect(await links.count()).toBeGreaterThan(0);
      for (const link of await links.all()) {
        await link.click();
        await expect(page).toHaveURL((url) => url.pathname === '/' && url.hash === `#${id}`);
        await expect(target).toBeInViewport();
      }
    }
    const questions = page.locator('#faq details');
    expect(await questions.count()).toBeGreaterThan(0);
    for (const details of await questions.all()) {
      const summary = details.locator(':scope > summary');
      await expect(summary).toHaveCount(1);
      await expect(summary).toHaveText(/\S/);
      await summary.focus();
      await expect(summary).toBeFocused();
      if (await details.getAttribute('open') !== null) await summary.press('Space');
      await expect(details).not.toHaveAttribute('open');
      await summary.press('Enter');
      await expect(details).toHaveAttribute('open', '');
      expect((await details.innerText()).length).toBeGreaterThan((await summary.innerText()).length);
      await summary.press('Space');
      await expect(details).not.toHaveAttribute('open');
    }
    await expectNoOverflow(page);
  });
}
