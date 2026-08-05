import { defineConfig } from "@pplancq/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig({
  extendConfig: [
    eslintConfigPrettier,
    {
      ignores: ["dist/", "node_modules/"],
    },
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}", "src/cli.ts"],
      rules: {
        "import/no-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
});
