import { createHash } from "node:crypto";
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

const hash = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex").slice(0, 12);

const summarize = (config) => ({
  files: config.files,
  plugins: Object.keys(config.plugins ?? {}).sort(),
  rules: Object.keys(config.rules ?? {}).length,
  settings: Object.keys(config.settings ?? {}),
  hash: hash(serialize(config)),
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
});
