import type { FullConfig } from '@playwright/test';
import { CoverageReport } from 'monocart-coverage-reports';
import { coverageOptions } from '../../mrc.playwright.config';

const globalSetup = (config: FullConfig) => {
  if (config.webServer && coverageOptions.enabled) {
    console.info('[playwright]  Coverage enabled with monocart');
    const mcr = new CoverageReport(coverageOptions);
    mcr.cleanCache();
  }
};

// eslint-disable-next-line import/no-default-export
export default globalSetup;
