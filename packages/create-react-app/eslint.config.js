import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  rulesNaming: "modern",
  enableVitest: true,
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      ignores: ["dist"],
    },
    {
      rules: {
        "import-x/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
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
