/* eslint-disable import/extensions */
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { baseRules } from "./rules/base.js";
import { importRules } from "./rules/import.js";
import { playwrightRules } from "./rules/playwright.js";
import { reactJsxA11yRules } from "./rules/react-jsx-a11y.js";
import { reactRules, reactTestRules, reactTypescriptRules } from "./rules/react.js";
import { typescriptRules } from "./rules/typescript.js";
import { vitestRules } from "./rules/vitest.js";

let prettierRules = {};
try {
  const prettierConfig = await import("./rules/prettier.js");
  prettierRules = prettierConfig.prettierRules;
} catch {
  // eslint-plugin-prettier is not installed
}

const isColorSupported =
  !process.env.NO_COLOR &&
  !process.argv.includes("--no-color") &&
  (process.env.FORCE_COLOR ||
    process.argv.includes("--color") ||
    process.platform === "win32" ||
    process.stdout?.isTTY);

const yellow = isColorSupported ? (text) => `\x1b[33m${text}\x1b[39m` : (text) => text;
const bold = isColorSupported ? (text) => `\x1b[1m${text}\x1b[22m` : (text) => text;

/**
 * define eslint flat config.
 *
 * @param {Object} options
 * @param {string[]} [options.tsFiles=['**\/*.ts?(x)']]
 * @param {string[]} [options.unitTestFiles=['**\/*.{test,spec,steps}.{js,jsx,ts,tsx}']]
 * @param {string[]} [options.unitE2eFiles=['tests/**\/*.{test,spec}.{js,jsx,ts,tsx}']]
 * @param {boolean} [options.enableReact=false]
 * @param {boolean} [options.enableVitest=false]
 * @param {boolean} [options.enablePlaywright=false]
 * @param {'off' | 'on' | 'disableStyleOnly'} [options.enablePrettier='off']
 *   - `'off'`: disables Prettier integration (default).
 *     Recommended when using Prettier separately; install `eslint-config-prettier` to disable conflicting ESLint formatting rules.
 *     Note: rules such as `arrow-body-style`, `curly` and `prefer-arrow-callback` are not formatting rules and will need to be disabled manually if you want to keep the previous behavior.
 *   - `'on'`: enables Prettier as an ESLint rule. **Deprecated**, will be removed in the next major release.
 *     Use `'disableStyleOnly'` and run Prettier separately instead.
 *   - `'disableStyleOnly'`: disables conflicting ESLint formatting rules without running Prettier as an ESLint rule.
 *     Recommended transition option to keep the same behavior as `'on'` while running Prettier separately.
 * @param {Array<import('eslint').Linter.Config>} [options.extendConfig=[]]
 *
 * @returns {import('eslint').Linter.Config}
 */
export const defineConfig = ({
  tsFiles = ["**/*.ts?(x)"],
  unitTestFiles = ["**/*.{test,spec,steps}.{js,jsx,ts,tsx}"],
  unitE2eFiles = ["tests/**/*.{test,spec}.{js,jsx,ts,tsx}"],
  enableReact = false,
  enableVitest = false,
  enablePlaywright = false,
  enablePrettier = "off",
  extendConfig = [],
} = {}) => {
  typescriptRules.files = tsFiles;
  reactTypescriptRules.files = tsFiles;
  reactTestRules.files = unitTestFiles;
  vitestRules.files = unitTestFiles;
  playwrightRules.files = unitE2eFiles;

  if (enablePrettier === "on") {
    console.warn(
      `${bold(yellow("WARNING:"))} [enablePrettier: 'on'] is deprecated and will be removed in the next major release. Use 'disableStyleOnly' and run Prettier separately for formatting.`,
    );
  }

  if (enablePrettier === "disableStyleOnly") {
    prettierRules.rules["prettier/prettier"] = "off";
  }

  return [
    importRules,
    baseRules,
    enableReact && reactJsxA11yRules,
    typescriptRules,
    enableReact && reactRules,
    enableReact && reactTypescriptRules,
    enableReact && reactTestRules,
    enablePrettier !== "off" && prettierRules,
    enablePrettier !== "off" && eslintConfigPrettier,
    enableVitest && vitestRules,
    enablePlaywright && playwrightRules,
    {
      files: ["eslint.config.*"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-default-export": "off",
      },
    },
    ...extendConfig,
  ].filter(Boolean);
};
