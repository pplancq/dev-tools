import type { FullConfig } from '@playwright/test';
import { CoverageReport } from 'monocart-coverage-reports';
import { coverageOptions } from '../../../mrc.playwright.config';

const globalTeardown = async (config: FullConfig) => {
  if (config.webServer && coverageOptions.enabled) {
    const mcr = new CoverageReport(coverageOptions);
    await mcr.generate();
  }
};

// eslint-disable-next-line import/no-default-export
export default globalTeardown;
