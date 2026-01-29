import { loadEnv } from 'vite';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    test: {
      projects: ['packages/*/vitest.config.{js,mjs,cjs,ts,mts,cts}'],
      reporters: ['default', 'junit', 'vitest-sonar-reporter'],
      outputFile: {
        'vitest-sonar-reporter': 'sonar-report.xml',
        junit: 'junit-report.xml',
      },
      maxWorkers: env.CI ? 2 : undefined,
      coverage: {
        enabled: env.CI === 'true',
        reporter: ['lcovonly', 'html', 'text', 'text-summary'],
        provider: 'v8',
        lines: 80,
        functions: 75,
        branches: 80,
        statements: 80,
        include: ['packages/*/src/**/*.[jt]s?(x)'],
        exclude: [
          'packages/*/src/**/*.d.[jt]s?(x)',
          'packages/*/src/**/*.types.[jt]s?(x)',
          'packages/*/src/**/index.[jt]s?(x)',
        ],
      },
    },
  };
});
