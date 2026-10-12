// eslint-disable-next-line import/no-unresolved
import { loadEnv } from "vite";
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    test: {
      include: ["tests/**/*.{test,spec}.js"],
      // The lint tests change the working directory, which is not supported in worker threads
      pool: "forks",
      testTimeout: 30_000,
      clearMocks: true,
      reporters: ["default", "junit", "vitest-sonar-reporter"],
      outputFile: {
        "vitest-sonar-reporter": "sonar-report.xml",
        junit: "junit-report.xml",
      },
      maxWorkers: env.CI ? 2 : undefined,
    },
  };
});
