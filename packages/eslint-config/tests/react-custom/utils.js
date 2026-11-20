import path from "node:path";
import { fileURLToPath } from "node:url";
import { ESLint } from "eslint";
/* eslint-disable import-x/extensions */
import { defineConfig } from "../../main.js";
/* eslint-enable import-x/extensions */

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "fixtures", "project");
const filePath = path.join(projectRoot, "src", "react-custom.js");

export const lintReactCustom = async (source, { fix = false } = {}) => {
  const eslint = new ESLint({
    cwd: projectRoot,
    fix,
    overrideConfigFile: true,
    overrideConfig: defineConfig({ enableReact: true }),
  });
  const [result] = await eslint.lintText(source, { filePath });
  const fatalMessages = result.messages.filter(({ fatal }) => fatal);

  if (fatalMessages.length > 0) {
    throw new Error(fatalMessages.map(({ message }) => message).join("\n"));
  }

  return {
    messages: result.messages.filter(({ ruleId }) => ruleId?.startsWith("pplancq-react/")),
    output: result.output,
  };
};
