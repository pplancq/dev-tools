/* eslint-disable import/extensions */
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { baseRules } from "./rules/base.js";
import { importRules } from "./rules/import.js";
import { playwrightRules } from "./rules/playwright.js";
import { reactJsxA11yRules } from "./rules/react-jsx-a11y.js";
import { reactRules, reactTestRules, reactTypescriptRules } from "./rules/react.js";
import { typescriptRules } from "./rules/typescript.js";
import { mapLegacyImportSettings, prefix } from "./rules/utils.js";
import { vitestRules } from "./rules/vitest.js";

let createPrettierRules = () => ({});
try {
  const prettierConfig = await import("./rules/prettier.js");
  createPrettierRules = prettierConfig.prettierRules;
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

const warn = (message) => console.warn(`${bold(yellow("WARNING:"))} ${message}`);

const resolveNamespaces = (rulesNaming) => {
  const modern = rulesNaming === "modern";

  return {
    jsxA11y: modern ? "jsx-a11y-x" : "jsx-a11y",
    import: modern ? "import-x" : "import",
  };
};

const warnLegacyNaming = (enableReact) => {
  const legacyNames = enableReact ? "'import/xxx' and 'jsx-a11y/xxx'" : "'import/xxx'";
  const modernNames = enableReact ? "'import-x/xxx' and 'jsx-a11y-x/xxx'" : "'import-x/xxx'";

  warn(
    `[rulesNaming: 'legacy'] the rules use the legacy ${legacyNames} names. In the next major release, the default will become 'modern' (${modernNames}). Set rulesNaming: 'modern' to migrate now.`,
  );
};

const resolvePrettierRules = (enablePrettier) => {
  const prettierRules = createPrettierRules();

  if (enablePrettier === "disableStyleOnly" && prettierRules.rules?.["prettier/prettier"] !== undefined) {
    prettierRules.rules["prettier/prettier"] = "off";
  }

  return prettierRules;
};

const resolveExtendConfig = (extendConfig) => {
  const { configs, mapped } = mapLegacyImportSettings(extendConfig);

  if (mapped.length > 0) {
    const settings = mapped.map((setting) => `'${setting}'`).join(", ");
    warn(
      `[rulesNaming: 'legacy'] eslint-plugin-import-x only reads the 'import-x/*' settings. The following settings were copied automatically: ${settings}. Rename them to 'import-x/*' in your configuration.`,
    );
  }

  return configs;
};

/**
 * define eslint flat config.
 *
 * @param {Object} options
 * @param {string[]} [options.tsFiles=['**\/*.ts?(x)']]
 * @param {string[]} [options.unitTestFiles=['**\/*.{test,spec,steps}.{js,jsx,ts,tsx}']]
 * @param {string[]} [options.unitE2eFiles=['tests/**\/*.{test,spec}.{js,jsx,ts,tsx}']]
 * @param {boolean} [options.enableReact=false]
 * @param {'legacy' | 'modern'} [options.rulesNaming='legacy']
 *   - `'legacy'`: registers `eslint-plugin-import-x` under the `import` namespace (rules named `import/xxx`)
 *     and `eslint-plugin-jsx-a11y-x` under the `jsx-a11y` namespace (rules named `jsx-a11y/xxx`).
 *     The `import/*` settings found in `extendConfig` are copied to `import-x/*`, the only prefix `eslint-plugin-import-x` reads.
 *   - `'modern'`: registers `eslint-plugin-import-x` under its own namespace (rules named `import-x/xxx`)
 *     and `eslint-plugin-jsx-a11y-x` under its own namespace (rules named `jsx-a11y-x/xxx`).
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
  rulesNaming = "legacy",
  enableVitest = false,
  enablePlaywright = false,
  enablePrettier = "off",
  extendConfig = [],
} = {}) => {
  const ns = resolveNamespaces(rulesNaming);
  const legacyNaming = rulesNaming === "legacy";

  if (enablePrettier === "on") {
    warn(
      "[enablePrettier: 'on'] is deprecated and will be removed in the next major release. Use 'disableStyleOnly' and run Prettier separately for formatting.",
    );
  }

  if (legacyNaming) {
    warnLegacyNaming(enableReact);
  }

  const extendedConfig = legacyNaming ? resolveExtendConfig(extendConfig) : extendConfig;

  const prettierRules = resolvePrettierRules(enablePrettier);

  return [
    importRules(ns),
    baseRules(),
    enableReact && reactJsxA11yRules(ns),
    typescriptRules({ files: tsFiles, ...ns }),
    enableReact && reactRules(ns),
    enableReact && reactTypescriptRules({ files: tsFiles, ...ns }),
    enableReact && reactTestRules({ files: unitTestFiles }),
    enablePrettier !== "off" && prettierRules,
    enablePrettier !== "off" && eslintConfigPrettier,
    enableVitest && vitestRules({ files: unitTestFiles, ...ns }),
    enablePlaywright && playwrightRules({ files: unitE2eFiles }),
    {
      files: ["eslint.config.*"],
      rules: prefix(
        {
          "import-x/no-extraneous-dependencies": "off",
          "import-x/no-default-export": "off",
        },
        "import-x",
        ns.import,
      ),
    },
    ...extendedConfig,
  ].filter(Boolean);
};
