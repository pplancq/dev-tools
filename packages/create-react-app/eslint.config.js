import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableVitest: true,
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      ignores: ["dist"],
    },
    {
      rules: {
        "import/no-extraneous-dependencies": [
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
        "import/no-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
});
