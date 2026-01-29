import { loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [viteTsconfigPaths()],
    test: {
      setupFiles: 'vitest.setup.ts',
      clearMocks: true,
      reporters: ['default', 'junit', 'vitest-sonar-reporter'],
      outputFile: {
        'vitest-sonar-reporter': 'sonar-report.xml',
        junit: 'junit-report.xml',
      },
      include: ['tests/**/*.{test,spec}.[jt]s?(x)'],
      maxWorkers: env.CI ? 2 : undefined,
      coverage: {
        enabled: env.CI === 'true',
        reporter: ['lcovonly', 'html', 'text', 'text-summary'],
        provider: 'v8',
        lines: 80,
        functions: 75,
        branches: 80,
        statements: 80,
        include: ['src/**/*.[jt]s?(x)'],
        exclude: ['src/**/*.d.[jt]s?(x)', 'src/**/*.types.[jt]s?(x)'],
      },
    },
  };
});
