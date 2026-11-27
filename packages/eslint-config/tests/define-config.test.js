import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { defineConfig } from "@pplancq/eslint-config";

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype;

// Makes a config snapshot-able: plugins are reduced to their namespace, anything that is not plain data is replaced by a marker
const serialize = (value) => {
  if (typeof value === "function") {
    return "[Function]";
  }
  if (Array.isArray(value)) {
    return value.map(serialize);
  }
  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, key === "plugins" ? Object.keys(item).sort() : serialize(item)]),
    );
  }
  if (value !== null && typeof value === "object") {
    return "[Object]";
  }
  return value;
};

// Keeps only what the plugin migrations touch, to get a readable snapshot
const pickMigratedParts = (config) => {
  const serialized = serialize(config);
  return {
    files: serialized.files,
    plugins: serialized.plugins,
    settings: serialized.settings,
    rules: Object.fromEntries(
      Object.entries(serialized.rules ?? {}).filter(([name]) => /^(import|jsx-a11y)(-x)?\//.test(name)),
    ),
  };
};

// Only the structure of each block is summarized: rule sets and options come from third-party plugins and change on every update
const summarize = (config) => ({
  files: config.files,
  plugins: Object.keys(config.plugins ?? {}).sort(),
  settings: Object.keys(config.settings ?? {}),
});

const combinations = () =>
  [false, true].flatMap((enableReact) =>
    ["legacy", "modern"].flatMap((rulesNaming) =>
      [false, true].flatMap((enableVitest) =>
        [false, true].flatMap((enablePlaywright) =>
          ["off", "on", "disableStyleOnly"].map((enablePrettier) => ({
            enableReact,
            rulesNaming,
            enableVitest,
            enablePlaywright,
            enablePrettier,
          })),
        ),
      ),
    ),
  );

const reactYouMightNotNeedAnEffectRuleNames = [
  "reactYouMightNotNeedAnEffect/no-derived-state",
  "reactYouMightNotNeedAnEffect/no-chain-state-updates",
  "reactYouMightNotNeedAnEffect/no-event-handler",
  "reactYouMightNotNeedAnEffect/no-adjust-state-on-prop-change",
  "reactYouMightNotNeedAnEffect/no-reset-all-state-on-prop-change",
  "reactYouMightNotNeedAnEffect/no-pass-live-state-to-parent",
  "reactYouMightNotNeedAnEffect/no-pass-data-to-parent",
  "reactYouMightNotNeedAnEffect/no-external-store-subscription",
  "reactYouMightNotNeedAnEffect/no-initialize-state",
];

const additionalReactHooksRuleLevels = {
  "react-hooks/static-components": "error",
  "react-hooks/use-memo": "error",
  "react-hooks/preserve-manual-memoization": "error",
  "react-hooks/immutability": "error",
  "react-hooks/globals": "error",
  "react-hooks/refs": "error",
  "react-hooks/set-state-in-effect": "error",
  "react-hooks/error-boundaries": "error",
  "react-hooks/purity": "error",
  "react-hooks/set-state-in-render": "error",
  "react-hooks/config": "error",
  "react-hooks/gating": "error",
  "react-hooks/incompatible-library": "warn",
  "react-hooks/unsupported-syntax": "warn",
};

describe("defineConfig", () => {
  beforeEach(() => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each(["legacy", "modern"])("should resolve import and JSX a11y rules with rulesNaming '%s'", (rulesNaming) => {
    const config = defineConfig({
      enableReact: true,
      rulesNaming,
      enableVitest: true,
      enablePlaywright: true,
      enablePrettier: "disableStyleOnly",
    });

    expect(config.map(pickMigratedParts)).toMatchSnapshot();
  });

  it("should expose React rule keys when React is enabled", () => {
    const getReactRuleKeys = (rulesNaming) =>
      [
        ...new Set(
          defineConfig({ enableReact: true, rulesNaming })
            .flatMap((block) => Object.keys(block.rules ?? {}))
            .filter((ruleName) =>
              /^(react|react-x|react-jsx|react-dom|react-hooks|pplancq-react|@stylistic)\//.test(ruleName),
            ),
        ),
      ].sort();

    const legacyRuleKeys = getReactRuleKeys("legacy");
    const modernRuleKeys = getReactRuleKeys("modern");

    expect(legacyRuleKeys).toMatchSnapshot();
    expect(modernRuleKeys).toStrictEqual(legacyRuleKeys);
    expect(legacyRuleKeys.some((ruleName) => ruleName.startsWith("react/"))).toBeFalsy();
  });

  it("should keep additional React Hooks rules disabled by default", () => {
    const config = defineConfig({ enableReact: true });
    const explicitlyDisabledConfig = defineConfig({
      enableReact: true,
      enableAdditionalReactHooksRules: false,
    });
    const configuredRules = Object.assign({}, ...config.map((block) => block.rules ?? {}));

    expect(config).toStrictEqual(explicitlyDisabledConfig);
    expect(
      Object.keys(additionalReactHooksRuleLevels).filter((ruleName) => configuredRules[ruleName] !== undefined),
    ).toStrictEqual([]);
    expect(configuredRules["react-hooks/rules-of-hooks"]).toBe("error");
    expect(configuredRules["react-hooks/exhaustive-deps"]).toBe("warn");
  });

  it("should enable additional React Hooks rules at their recommended levels when opted in", () => {
    const config = defineConfig({
      enableReact: true,
      enableAdditionalReactHooksRules: true,
    });
    const configuredRules = Object.assign({}, ...config.map((block) => block.rules ?? {}));

    expect(
      Object.fromEntries(
        Object.keys(additionalReactHooksRuleLevels).map((ruleName) => [ruleName, configuredRules[ruleName]]),
      ),
    ).toStrictEqual(additionalReactHooksRuleLevels);
    expect(configuredRules["react-hooks/rules-of-hooks"]).toBe("error");
    expect(configuredRules["react-hooks/exhaustive-deps"]).toBe("warn");
  });

  it("should ignore additional React Hooks rules when React is disabled", () => {
    const configs = [false, true].map((enableAdditionalReactHooksRules) =>
      defineConfig({
        enableReact: false,
        enableAdditionalReactHooksRules,
        enableReactYouMightNotNeedAnEffectRules: true,
        rulesNaming: "modern",
      }),
    );
    const configuredRules = configs.flatMap((config) => config.flatMap((block) => Object.keys(block.rules ?? {})));

    expect(console.warn).not.toHaveBeenCalled();
    expect(configuredRules.filter((ruleName) => ruleName in additionalReactHooksRuleLevels)).toStrictEqual([]);
  });

  it("should warn that additional React Hooks rules will be enabled by default in v8", () => {
    defineConfig({
      enableReact: true,
      enableReactYouMightNotNeedAnEffectRules: true,
      rulesNaming: "modern",
    });

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("[enableAdditionalReactHooksRules: false] these rules will be enabled by default in v8"),
    );

    vi.mocked(console.warn).mockClear();
    defineConfig({
      enableReact: true,
      enableAdditionalReactHooksRules: true,
      enableReactYouMightNotNeedAnEffectRules: true,
      rulesNaming: "modern",
    });

    expect(console.warn).not.toHaveBeenCalled();
  });

  it("should enable leaked conditional rendering only with TypeScript project services", () => {
    const config = defineConfig({ enableReact: true });
    const ruleBlock = config.find((block) => block.rules?.["react-x/no-leaked-conditional-rendering"]);

    expect(ruleBlock).toMatchObject({
      files: ["**/*.ts?(x)"],
      ignores: ["**/*.ts"],
      languageOptions: { parserOptions: { projectService: true } },
    });
  });

  it("should keep the React effects rules disabled by default", () => {
    const config = defineConfig({ enableReact: true });
    const explicitlyDisabledConfig = defineConfig({
      enableReact: true,
      enableReactYouMightNotNeedAnEffectRules: false,
    });
    const configuredRules = config.flatMap((block) => Object.keys(block.rules ?? {}));

    expect(config).toStrictEqual(explicitlyDisabledConfig);
    expect(configuredRules.filter((ruleName) => ruleName.startsWith("reactYouMightNotNeedAnEffect/"))).toStrictEqual(
      [],
    );
  });

  it("should enable the React effects rules as warnings when opted in", () => {
    const config = defineConfig({
      enableReact: true,
      enableReactYouMightNotNeedAnEffectRules: true,
    });
    const configuredRules = Object.assign({}, ...config.map((block) => block.rules ?? {}));

    expect(
      Object.fromEntries(
        reactYouMightNotNeedAnEffectRuleNames.map((ruleName) => [ruleName, configuredRules[ruleName]]),
      ),
    ).toStrictEqual(Object.fromEntries(reactYouMightNotNeedAnEffectRuleNames.map((ruleName) => [ruleName, "warn"])));
  });

  it("should only warn about the future default when React is enabled", () => {
    defineConfig({ enableReact: true, rulesNaming: "modern" });

    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("enabled by default in v8"));

    vi.mocked(console.warn).mockClear();
    const disabledReactConfig = defineConfig({
      enableReact: false,
      enableReactYouMightNotNeedAnEffectRules: false,
      rulesNaming: "modern",
    });

    expect(console.warn).not.toHaveBeenCalled();

    vi.mocked(console.warn).mockClear();
    const optedInWithoutReact = defineConfig({
      enableReact: false,
      enableReactYouMightNotNeedAnEffectRules: true,
      rulesNaming: "modern",
    });
    const configuredRules = [...disabledReactConfig, ...optedInWithoutReact].flatMap((block) =>
      Object.keys(block.rules ?? {}),
    );

    expect(console.warn).not.toHaveBeenCalled();
    expect(configuredRules.filter((ruleName) => ruleName.startsWith("reactYouMightNotNeedAnEffect/"))).toStrictEqual(
      [],
    );
  });

  it("should not warn about the future default when the rules are enabled", () => {
    defineConfig({
      enableReact: true,
      enableAdditionalReactHooksRules: true,
      enableReactYouMightNotNeedAnEffectRules: true,
      rulesNaming: "modern",
    });

    expect(console.warn).not.toHaveBeenCalled();
  });

  it("should resolve each option combination into the same blocks", () => {
    const summaries = Object.fromEntries(
      combinations().map((options) => [JSON.stringify(options), defineConfig(options).map(summarize)]),
    );

    expect(summaries).toMatchSnapshot();
  });

  it("should not share state between calls", () => {
    const findPrettier = (config) => config.find((block) => block.plugins?.prettier);

    defineConfig({ enablePrettier: "disableStyleOnly", tsFiles: ["custom/**/*.ts"] });
    const config = defineConfig({ enablePrettier: "on" });

    expect(findPrettier(config).rules["prettier/prettier"]).toBe("error");
    expect(config.find((block) => block.languageOptions?.parser).files).toStrictEqual(["**/*.ts?(x)"]);
  });

  it("should append extendConfig at the end", () => {
    const extension = { rules: { "no-console": "error" } };

    const config = defineConfig({ extendConfig: [extension] });

    expect(config.at(-1)).toBe(extension);
  });

  it("should allow extendConfig to override additional React Hooks rules", () => {
    const extension = {
      rules: {
        "react-hooks/immutability": "off",
        "react-hooks/incompatible-library": "error",
      },
    };
    const config = defineConfig({
      enableReact: true,
      enableAdditionalReactHooksRules: true,
      extendConfig: [extension],
    });
    const configuredRules = Object.assign({}, ...config.map((block) => block.rules ?? {}));

    expect(config.at(-1)).toBe(extension);
    expect(configuredRules["react-hooks/immutability"]).toBe("off");
    expect(configuredRules["react-hooks/incompatible-library"]).toBe("error");
  });
});
