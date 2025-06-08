import { CoverageReportOptions } from 'monocart-coverage-reports';

export const coverageOptions: CoverageReportOptions = {
  enabled: process.env.CI ?? process.env.ENABLED_COVERAGE,
  name: 'Playwright Coverage Report',
  outputDir: './playwright-report/coverage',
  baseDir: './src/',
  reports: [
    'text',
    'text-summary',
    ['html', { subdir: 'html-coverage' }],
    ['lcovonly', { file: 'lcov-coverage.info' }],
    ['cobertura', { file: 'cobertura-coverage.xml' }],
  ],
  sourceFilter: {
    '**/node_modules/**': false,
    '**/mocks/**': false,
    '**/*.{test,spec,steps}.{js,jsx,ts,tsx}': false,
    'vitest.setup.ts': false,
    '**/*.{js,jsx,ts,tsx}': true,
  },
  watermarks: {
    statements: [80, 90],
    branches: [70, 80],
    functions: [80, 90],
    lines: [80, 90],
    bytes: [80, 90],
  },
};
