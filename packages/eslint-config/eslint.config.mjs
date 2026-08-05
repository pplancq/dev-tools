import { defineConfig } from "@pplancq/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig({
  enablePrettier: "off",
  extendConfig: [
    eslintConfigPrettier,
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}"],
      rules: {
        "import/no-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
});
