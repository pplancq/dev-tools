import { test as base } from '@playwright/test';
import { CoverageReport } from 'monocart-coverage-reports';
import { coverageOptions } from '../../mrc.playwright.config';

export const test = base.extend<{
  testWithCoverage: string;
}>({
  testWithCoverage: [
    async ({ page }, use) => {
      const isChromium = test.info().project.name === 'chromium';

      if (isChromium && coverageOptions.enabled) {
        await page.coverage.startJSCoverage({
          resetOnNavigation: false,
        });
      }

      await use('testWithCoverage');

      if (isChromium && coverageOptions.enabled) {
        const coverageList = await page.coverage.stopJSCoverage();
        const mcr = new CoverageReport(coverageOptions);
        await mcr.add(coverageList);
      }
    },
    {
      scope: 'test',
      auto: true,
    },
  ],
});

export const it = test;
export const { describe } = test;
