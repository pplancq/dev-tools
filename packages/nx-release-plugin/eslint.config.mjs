import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  rulesNaming: "modern",
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      ignores: ["dist/", "node_modules/"],
    },
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}", "src/cli.ts"],
      rules: {
        "import-x/no-default-export": "off",
        "import-x/no-extraneous-dependencies": "off",
      },
    },
  ],
});
