import type { PlaywrightTestArgs, PlaywrightWorkerArgs, TestFixture } from '@playwright/test';
import { test } from '@playwright/test';
import { CoverageReport } from 'monocart-coverage-reports';
import { coverageOptions } from '../../mrc.playwright.config';

export const createTestWithCoverageFixture = (): [
  TestFixture<string, PlaywrightTestArgs & PlaywrightWorkerArgs>,
  { scope: 'test'; auto: true },
] => [
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
];
