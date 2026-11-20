import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  rulesNaming: "modern",
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}"],
      rules: {
        "import-x/no-default-export": "off",
        "import-x/no-extraneous-dependencies": "off",
      },
    },
  ],
});
