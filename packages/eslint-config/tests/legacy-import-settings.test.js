import { defineConfig } from "@pplancq/eslint-config";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// eslint-disable-next-line import/extensions
import { mapLegacyImportSettings } from "../rules/utils.js";

describe("mapLegacyImportSettings", () => {
  it("should copy the import/* settings to import-x/* and keep the original keys", () => {
    const resolver = { webpack: { config: "webpack.config.js" } };

    const { configs, mapped } = mapLegacyImportSettings([
      { settings: { "import/resolver": resolver, "import/core-modules": ["electron"], react: { version: "18" } } },
    ]);

    expect(configs).toStrictEqual([
      {
        settings: {
          "import/resolver": resolver,
          "import/core-modules": ["electron"],
          "import-x/resolver": resolver,
          "import-x/core-modules": ["electron"],
          react: { version: "18" },
        },
      },
    ]);
    expect(mapped).toStrictEqual(["import/resolver", "import/core-modules"]);
  });

  it("should not override an existing import-x/* setting", () => {
    const { configs, mapped } = mapLegacyImportSettings([
      { settings: { "import/resolver": { node: {} }, "import-x/resolver": { typescript: true } } },
    ]);

    expect(configs[0].settings["import-x/resolver"]).toStrictEqual({ typescript: true });
    expect(mapped).toStrictEqual([]);
  });

  it("should not mutate the given configs", () => {
    const config = { files: ["**/*.js"], settings: { "import/ignore": ["node_modules"] } };

    const { configs } = mapLegacyImportSettings([config]);

    expect(configs[0]).not.toBe(config);
    expect(config).toStrictEqual({ files: ["**/*.js"], settings: { "import/ignore": ["node_modules"] } });
  });

  it("should return the same config when there is nothing to map", () => {
    const withoutSettings = { rules: {} };
    const withOtherSettings = { settings: { react: { version: "18" }, "import-x/ignore": [] } };

    const { configs, mapped } = mapLegacyImportSettings([withoutSettings, withOtherSettings, undefined, false]);

    expect(configs[0]).toBe(withoutSettings);
    expect(configs[1]).toBe(withOtherSettings);
    expect(configs.slice(2)).toStrictEqual([undefined, false]);
    expect(mapped).toStrictEqual([]);
  });

  it("should list a setting once when several configs define it", () => {
    const { mapped } = mapLegacyImportSettings([
      { settings: { "import/resolver": {} } },
      { settings: { "import/resolver": {} } },
    ]);

    expect(mapped).toStrictEqual(["import/resolver"]);
  });
});

describe("defineConfig legacy settings", () => {
  let warn;

  beforeEach(() => {
    warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const settingsWarnings = () =>
    warn.mock.calls.map(([message]) => message).filter((message) => message.includes("copied automatically"));

  it("should copy the user import/* settings in legacy mode and warn", () => {
    const extension = { settings: { "import/resolver": { webpack: {} } } };

    const config = defineConfig({ rulesNaming: "legacy", extendConfig: [extension] });

    expect(config.at(-1).settings).toStrictEqual({
      "import/resolver": { webpack: {} },
      "import-x/resolver": { webpack: {} },
    });
    expect(extension.settings).toStrictEqual({ "import/resolver": { webpack: {} } });
    expect(settingsWarnings()).toHaveLength(1);
    expect(settingsWarnings()[0]).toContain("'import/resolver'");
  });

  it("should not touch the user settings in modern mode", () => {
    const extension = { settings: { "import/resolver": { webpack: {} } } };

    const config = defineConfig({ rulesNaming: "modern", extendConfig: [extension] });

    expect(config.at(-1)).toBe(extension);
    expect(settingsWarnings()).toHaveLength(0);
  });

  it("should not warn about settings when the user does not set any import/* setting", () => {
    defineConfig({ rulesNaming: "legacy", extendConfig: [{ rules: {} }] });

    expect(settingsWarnings()).toHaveLength(0);
  });

  it("should warn about the legacy names, including import without React", () => {
    defineConfig({ rulesNaming: "legacy" });
    defineConfig({ rulesNaming: "legacy", enableReact: true });
    defineConfig({ rulesNaming: "modern" });

    const messages = warn.mock.calls.map(([message]) => message);

    expect(messages).toHaveLength(2);
    expect(messages[0]).toContain("legacy 'import/xxx' names");
    expect(messages[1]).toContain("'import/xxx' and 'jsx-a11y/xxx'");
  });
});
