import { defineConfig, devices } from '@playwright/test';

const appUrl = 'http://localhost:3000';

export default defineConfig({
  testDir: 'tests/e2e',
  outputDir: 'test-results',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report/html' }],
    ['junit', { outputFile: 'playwright-report/junit-report.xml' }],
    [
      '@bdellegrazie/playwright-sonar-reporter',
      { outputFile: 'playwright-report/sonar-results.xml', sonarcloud: true },
    ],
  ],
  globalSetup: 'tests/e2e/utils/playwright.globalSetup.ts',
  globalTeardown: 'tests/e2e/utils/playwright.globalTeardown.ts',
  use: {
    baseURL: appUrl,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Firefox Desktop'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run build -- --env-mode test && npm run preview',
    url: appUrl,
    stdout: 'pipe',
    reuseExistingServer: !process.env.CI,
  },
});
