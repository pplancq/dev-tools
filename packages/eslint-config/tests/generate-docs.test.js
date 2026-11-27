import { execFile } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { describe, expect, it } from "vitest";
/* eslint-disable import-x/extensions */
import { reactRules } from "../rules/react.js";
/* eslint-enable import-x/extensions */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const execFileAsync = promisify(execFile);

describe("generate-docs", () => {
  it("should generate documented optional React Hooks rules separately from default rules", async () => {
    const temporaryRoot = await mkdtemp(path.join(root, ".docs-test-"));

    try {
      await mkdir(path.join(temporaryRoot, "scripts"));
      await mkdir(path.join(temporaryRoot, "docs"));
      await symlink(path.join(root, "rules"), path.join(temporaryRoot, "rules"), "dir");
      await copyFile(
        path.join(root, "scripts/generate-docs.mjs"),
        path.join(temporaryRoot, "scripts/generate-docs.mjs"),
      );
      const template = await readFile(path.join(root, "docs/rules.md"), "utf8");
      await writeFile(
        path.join(temporaryRoot, "docs/rules.md"),
        template.replace(
          /<!-- START_ADDITIONAL_REACT_HOOKS_RULES -->[\s\S]*?<!-- END_ADDITIONAL_REACT_HOOKS_RULES -->/,
          "<!-- START_ADDITIONAL_REACT_HOOKS_RULES -->\n<!-- END_ADDITIONAL_REACT_HOOKS_RULES -->",
        ),
      );

      const generator = path.join(temporaryRoot, "scripts/generate-docs.mjs");
      await execFileAsync(process.execPath, [generator], { cwd: root });
      const generated = await readFile(path.join(temporaryRoot, "docs/rules.md"), "utf8");
      const defaultSection = generated.split("<!-- START_REACT_RULES -->")[1].split("<!-- END_REACT_RULES -->")[0];
      const optionalSection = generated
        .split("<!-- START_ADDITIONAL_REACT_HOOKS_RULES -->")[1]
        .split("<!-- END_ADDITIONAL_REACT_HOOKS_RULES -->")[0];
      const defaultRules = reactRules().rules;
      const optedInRules = reactRules({ enableAdditionalReactHooksRules: true }).rules;
      const optionalRules = Object.entries(optedInRules).filter(
        ([name]) => name.startsWith("react-hooks/") && !(name in defaultRules),
      );

      expect(optionalRules).toHaveLength(14);
      optionalRules.forEach(([name, severity]) => {
        const line = optionalSection.split("\n").find((row) => row.includes(`[${name}]`));
        expect(defaultSection).not.toContain(`[${name}]`);
        expect(line).toContain(`https://react.dev/reference/eslint-plugin-react-hooks/lints/${name.slice(12)}`);
        expect(line).toMatch(new RegExp(String.raw`\|\s*${severity}\s*\|\s*[^|\s][^|]*\|`));
        expect(line).not.toMatch(new RegExp(String.raw`\|\s*${severity}\s*\|\s*-\s*\|`));
      });

      await execFileAsync(process.execPath, [generator], { cwd: root });
      expect(await readFile(path.join(temporaryRoot, "docs/rules.md"), "utf8")).toBe(generated);
    } finally {
      await rm(temporaryRoot, { recursive: true, force: true });
    }
  });
});
