import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@pplancq/eslint-config";
import { ESLint } from "eslint";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures", "user-settings");
const originalCwd = process.cwd();

// The TypeScript resolver looks for the tsconfig.json from the working directory
beforeAll(() => {
  process.chdir(root);
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  process.chdir(originalCwd);
  vi.restoreAllMocks();
});

const lint = async (options, pattern) => {
  const eslint = new ESLint({ cwd: root, overrideConfigFile: true, overrideConfig: defineConfig(options) });
  const results = await eslint.lintFiles([pattern]);

  // Messages without rule id are the unused directives and the parsing errors
  return results.flatMap((result) =>
    result.messages
      .filter((message) => !message.ruleId || /^import(-x)?\//.test(message.ruleId))
      .map((message) => `${path.relative(root, result.filePath)}:${message.line} ${message.ruleId}`),
  );
};

describe("lint with user settings and directives", () => {
  describe("with rulesNaming 'legacy'", () => {
    it("should report the unresolved module without user settings", async () => {
      expect(await lint({ rulesNaming: "legacy" }, "src/index.ts")).toStrictEqual([
        "src/index.ts:1 import/no-unresolved",
        "src/index.ts:3 import/no-default-export",
      ]);
    });

    it("should apply the user import/* settings", async () => {
      const extendConfig = [{ settings: { "import/core-modules": ["virtual-module"] } }];

      expect(await lint({ rulesNaming: "legacy", extendConfig }, "src/index.ts")).toStrictEqual([
        "src/index.ts:3 import/no-default-export",
      ]);
    });

    it("should apply the user import/* rule overrides", async () => {
      const extendConfig = [
        { settings: { "import/core-modules": ["virtual-module"] }, rules: { "import/no-default-export": "off" } },
      ];

      expect(await lint({ rulesNaming: "legacy", extendConfig }, "src/index.ts")).toStrictEqual([]);
    });

    it("should honor eslint-disable import/xxx directives", async () => {
      expect(await lint({ rulesNaming: "legacy" }, "src/disabled-legacy.ts")).toStrictEqual([]);
    });
  });

  describe("with rulesNaming 'modern'", () => {
    it("should apply the user import-x/* settings and rule overrides", async () => {
      const extendConfig = [
        { settings: { "import-x/core-modules": ["virtual-module"] }, rules: { "import-x/no-default-export": "off" } },
      ];

      expect(await lint({ rulesNaming: "modern", extendConfig }, "src/index.ts")).toStrictEqual([]);
    });

    it("should not map the legacy import/* settings", async () => {
      const extendConfig = [{ settings: { "import/core-modules": ["virtual-module"] } }];

      expect(await lint({ rulesNaming: "modern", extendConfig }, "src/index.ts")).toStrictEqual([
        "src/index.ts:1 import-x/no-unresolved",
        "src/index.ts:3 import-x/no-default-export",
      ]);
    });

    it("should honor eslint-disable import-x/xxx directives", async () => {
      expect(await lint({ rulesNaming: "modern" }, "src/disabled-modern.ts")).toStrictEqual([]);
    });
  });
});
