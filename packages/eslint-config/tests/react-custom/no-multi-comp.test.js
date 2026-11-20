import { describe, expect, it } from "vitest";
/* eslint-disable import-x/extensions */
import { lintReactCustom } from "./utils.js";
/* eslint-enable import-x/extensions */

describe("pplancq-react/no-multi-comp", () => {
  it("should report a second stateless component and leave the source unchanged", async () => {
    const source = ["const First = () => <button />;", "const Second = () => <span />;"].join("\n");
    const { messages, output } = await lintReactCustom(source);

    expect(messages.map(({ ruleId, message }) => [ruleId, message])).toStrictEqual([
      ["pplancq-react/no-multi-comp", 'Declare only one component per file. Found extra component "Second".'],
    ]);
    expect(output).toBeUndefined();
  });

  it("should report a React class component alongside a stateless component", async () => {
    const source = [
      "const React = globalThis.React;",
      "const Stateless = () => <span />;",
      "class Stateful extends React.Component { render() { return <button />; } }",
    ].join("\n");
    const { messages, output } = await lintReactCustom(source);

    expect(messages).toHaveLength(1);
    expect(messages[0].ruleId).toBe("pplancq-react/no-multi-comp");
    expect(output).toBeUndefined();
  });

  it("should allow a single component and ordinary helper functions", async () => {
    const source = "const Button = () => <button />; const formatLabel = (label) => label.trim();";
    const { messages } = await lintReactCustom(source);

    expect(messages).toStrictEqual([]);
  });
});
