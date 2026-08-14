import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      files: ["**/*.config.{js,cjs,mjs,ts,cts,mts}"],
      rules: {
        "import/no-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
});
