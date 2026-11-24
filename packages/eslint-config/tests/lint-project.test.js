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
      .filter((message) =>
        /^(import|import-x|jsx-a11y|jsx-a11y-x|react|react-x|react-jsx|react-dom|react-hooks|@stylistic)\//.test(
          message.ruleId ?? "",
        ),
      )
      .map(
        (message) =>
          `${path.relative(root, result.filePath)}:${message.line} ${message.ruleId} | ${normalize(message.message)}`,
      ),
  );
};

const lintText = async (options, code, filePath) => {
  const eslint = new ESLint({ cwd: root, overrideConfigFile: true, overrideConfig: defineConfig(options) });
  const [result] = await eslint.lintText(code, { filePath: path.join(root, filePath) });

  expect(result.messages.filter((message) => message.fatal)).toStrictEqual([]);

  return result.messages.map((message) => message.ruleId);
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

  it("should allow overriding the React effects rules through extendConfig", async () => {
    const overriddenRule = "reactYouMightNotNeedAnEffect/no-derived-state";
    const retainedRule = "reactYouMightNotNeedAnEffect/no-event-handler";
    const eslint = new ESLint({
      cwd: root,
      overrideConfigFile: true,
      overrideConfig: defineConfig({
        enableReact: true,
        enableReactYouMightNotNeedAnEffectRules: true,
        extendConfig: [{ rules: { [overriddenRule]: "off" } }],
      }),
    });
    const config = await eslint.calculateConfigForFile(path.join(root, "src/react-clean.tsx"));

    expect(config.rules[overriddenRule][0]).toBe(0);
    expect(config.rules[retainedRule][0]).toBe(1);
  });

  it("should preserve the deprecated lifecycle rules without duplicate deprecation coverage", async () => {
    const issues = await lint(
      {
        enableReact: true,
        extendConfig: [{ settings: { "react-x": { version: "18.2.0" } } }],
      },
      ["src/react-rules.tsx"],
    );
    const expectedRules = [
      "react-x/no-component-will-mount",
      "react-x/no-component-will-receive-props",
      "react-x/no-component-will-update",
      "react-dom/no-render",
      "react-dom/no-hydrate",
      "react-dom/no-find-dom-node",
      "react-dom/no-render-return-value",
    ];
    const configuredRules = defineConfig({ enableReact: true })
      .flatMap((block) => Object.keys(block.rules ?? {}))
      .filter((ruleName) => expectedRules.includes(ruleName));

    expect(expectedRules.every((ruleName) => issues.some((issue) => issue.includes(ruleName)))).toBeTruthy();
    expect(configuredRules).toHaveLength(expectedRules.length);
    expect(new Set(configuredRules)).toStrictEqual(new Set(expectedRules));
  });

  it("should analyze leaked conditional rendering with type information", async () => {
    const issues = await lint({ enableReact: true }, ["src/react-rules.tsx"]);

    expect(issues.join("\n")).toContain("react-x/no-leaked-conditional-rendering");
  });

  it("should keep the clean React fixture free of lint issues", async () => {
    expect(await lint({ enableReact: true }, ["src/react-clean.tsx"])).toStrictEqual([]);
  });

  it("should report a key placed after a spread", async () => {
    const code = 'export const A = ({ p }) => <span {...p} key="k" />;\n';

    expect(await lintText({ enableReact: true }, code, "src/virtual.js")).toContain("react-jsx/no-key-after-spread");
    expect(
      await lintText({ enableReact: true }, 'export const A = ({ p }) => <span key="k" {...p} />;\n', "src/virtual.js"),
    ).not.toContain("react-jsx/no-key-after-spread");
  });

  it("should require a display name on contexts", async () => {
    const invalid = 'import { createContext } from "react";\nexport const Ctx = createContext(null);\n';
    const valid = `${invalid}Ctx.displayName = "Ctx";\n`;

    expect(await lintText({ enableReact: true }, invalid, "src/virtual.js")).toContain(
      "react-x/no-missing-context-display-name",
    );
    expect(await lintText({ enableReact: true }, valid, "src/virtual.js")).not.toContain(
      "react-x/no-missing-context-display-name",
    );
  });

  it("should apply no-leaked-conditional-rendering only with type information", async () => {
    const code = "export const A = ({ count }: { count: number }) => <div>{count && <span />}</div>;\n";
    const rule = "react-x/no-leaked-conditional-rendering";

    expect(await lintText({ enableReact: true }, code, "src/react-rules.tsx")).toContain(rule);
    expect(
      await lintText({ enableReact: true }, code.replace(": { count: number }", ""), "src/virtual.js"),
    ).not.toContain(rule);
  });
});
