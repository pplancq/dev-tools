import { describe, expect, it } from "vitest";
/* eslint-disable import/extensions */
import { lintReactCustom } from "./utils.js";
/* eslint-enable import/extensions */

describe("pplancq-react/jsx-boolean-value", () => {
  it("should report explicit true and autofix it to shorthand", async () => {
    const source = "const Button = () => <button disabled={true} />;";
    const linted = await lintReactCustom(source);
    const fixed = await lintReactCustom(source, { fix: true });

    expect(linted.messages.map(({ ruleId }) => ruleId)).toStrictEqual(["pplancq-react/jsx-boolean-value"]);
    expect(fixed.output.trimEnd()).toBe("const Button = () => <button disabled />;");
    expect(fixed.messages).toStrictEqual([]);
  });

  it("should allow shorthand, false, and nonliteral boolean values", async () => {
    const source =
      "const Button = ({ disabled }) => <><button disabled={disabled} /><button disabled={false} /><button disabled /></>;";
    const { messages } = await lintReactCustom(source);

    expect(messages).toStrictEqual([]);
  });
});
