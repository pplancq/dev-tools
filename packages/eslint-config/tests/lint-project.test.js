import path from "node:path";
import { fileURLToPath } from "node:url";
import { ESLint } from "eslint";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { defineConfig } from "@pplancq/eslint-config";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures", "project");
const repoRoot = path.resolve(root, "../../../../..");

const escapeRegExp = (value) => value.replaceAll(/[$()*+.?[\\\]^{|}]/g, String.raw`\$&`);
const pathPattern = (location) => new RegExp(`(/private)?${escapeRegExp(location)}`, "g");
const rootPattern = pathPattern(root);
const repoRootPattern = pathPattern(repoRoot);

// Messages can contain absolute paths, which depend on the machine
const normalize = (message) => message.replaceAll(rootPattern, "<root>").replaceAll(repoRootPattern, "<repo>");

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

const lint = async (options, patterns) => {
  const eslint = new ESLint({
    cwd: root,
    overrideConfigFile: true,
    overrideConfig: defineConfig(options),
  });
  const results = await eslint.lintFiles(patterns);

  const fatals = results.flatMap((result) => result.messages.filter((message) => message.fatal));
  expect(fatals).toStrictEqual([]);

  return results.flatMap((result) =>
    result.messages
      .filter((message) => /^(import|import-x|jsx-a11y|jsx-a11y-x|react|react-hooks)\//.test(message.ruleId ?? ""))
      .map(
        (message) =>
          `${path.relative(root, result.filePath)}:${message.line} ${message.ruleId} | ${normalize(message.message)}`,
      ),
  );
};

describe("lint a project", () => {
  it("should report import issues on TypeScript and JavaScript files", async () => {
    expect(await lint({ enableReact: false }, ["src/**/*.{ts,js}"])).toMatchSnapshot();
  });

  it.each(["legacy", "modern"])(
    "should report import, React, and JSX a11y issues with rulesNaming '%s'",
    async (rulesNaming) => {
      expect(await lint({ enableReact: true, rulesNaming }, ["src/**/*.{ts,tsx,js,jsx}"])).toMatchSnapshot();
    },
  );

  it("should report setState in componentDidUpdate for React versions before 16.3", async () => {
    const issues = await lint(
      {
        enableReact: true,
        extendConfig: [{ settings: { react: { version: "16.2.0" } } }],
      },
      ["src/react-rules.tsx"],
    );

    expect(issues.join("\n")).toContain("react/no-did-update-set-state");
  });

  it("should keep the clean React fixture free of lint issues", async () => {
    expect(await lint({ enableReact: true }, ["src/react-clean.tsx"])).toStrictEqual([]);
  });
});
