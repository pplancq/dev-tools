import { defineConfig } from "@pplancq/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig({
  enableVitest: true,
  extendConfig: [
    eslintConfigPrettier,
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
