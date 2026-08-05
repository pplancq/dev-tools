const isColorSupported =
  !process.env.NO_COLOR &&
  !process.argv.includes("--no-color") &&
  (process.env.FORCE_COLOR ||
    process.argv.includes("--color") ||
    process.platform === "win32" ||
    process.stdout?.isTTY);

const yellow = isColorSupported ? (text) => `\x1b[33m${text}\x1b[39m` : (text) => text;
const bold = isColorSupported ? (text) => `\x1b[1m${text}\x1b[22m` : (text) => text;

console.warn(
  `\n${bold(yellow("WARNING:"))} [@pplancq/stylelint-config/prettier] This configuration is deprecated and will be removed in the next major release. Use \`@pplancq/stylelint-config\` instead, and run Prettier separately for formatting.\n`,
);

// eslint-disable-next-line import/no-default-export
export default {
  extends: ["./index.js", "./rules/prettier.js"],
};
