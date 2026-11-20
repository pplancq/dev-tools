import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  rulesNaming: "modern",
  enableReact: true,
  enableVitest: true,
  unitTestFiles: ["src/**/*.{test,spec,steps}.{js,jsx,ts,tsx}"],
  enablePlaywright: true,
  unitE2eFiles: ["tests/**/*.{test,spec}.{js,jsx,ts,tsx}"],
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      ignores: ["build"],
    },
    {
      files: ["mocks/**/*", "scripts/**/*"],
      rules: {
        "import-x/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}"],
      rules: {
        "import-x/no-default-export": "off",
        "import-x/no-extraneous-dependencies": "off",
      },
    },
  ],
});
