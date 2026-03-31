import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), svgr()],
    envPrefix: env.ENV_PREFIX ?? 'FRONT_',
    resolve: {
      tsconfigPaths: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'vitest.setup.ts',
      clearMocks: true,
      css: false,
      reporters: ['default', 'junit', 'vitest-sonar-reporter'],
      outputFile: {
        'vitest-sonar-reporter': 'sonar-report.xml',
        junit: 'junit-report.xml',
      },
      include: ['src/**/*.(spec|test|steps).[jt]s?(x)'],
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
        exclude: [
          'src/**/*.d.[jt]s?(x)',
          'src/utils/tests/**/*.[jt]s?(x)',
          'src/**/*.types.[jt]s?(x)',
          'src/**/index.[jt]s?(x)',
          'src/**/*.stories.[jt]s?(x)',
        ],
      },
    },
  };
});
