import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: false,
  workers: 1,
  timeout: 45000,
  expect: { timeout: 10000 },
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:3100',
    channel: 'chrome',
    locale: 'pt-BR',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    reducedMotion: 'reduce',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1366, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: [
    {
      command: 'npm run start -- --hostname 127.0.0.1 --port 3100',
      url: 'http://127.0.0.1:3100',
      env: { ENABLE_MEDICAL_DEMO: 'true' },
      reuseExistingServer: false,
      timeout: 30000,
    },
    {
      command: 'npm run start -- --hostname 127.0.0.1 --port 3101',
      url: 'http://127.0.0.1:3101',
      env: { ENABLE_MEDICAL_DEMO: 'false' },
      reuseExistingServer: false,
      timeout: 30000,
    },
  ],
});
