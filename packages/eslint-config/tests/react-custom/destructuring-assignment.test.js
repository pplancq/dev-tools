import { describe, expect, it } from "vitest";
/* eslint-disable import/extensions */
import { lintReactCustom } from "./utils.js";
/* eslint-enable import/extensions */

describe("pplancq-react/destructuring-assignment", () => {
  it("should report property access on component props", async () => {
    const source = "const Button = (props) => <button>{props.label}</button>;";
    const { messages, output } = await lintReactCustom(source);

    expect(messages.map(({ ruleId }) => ruleId)).toStrictEqual(["pplancq-react/destructuring-assignment"]);
    expect(output).toBeUndefined();
  });

  it("should allow destructured props in the function body", async () => {
    const source = "const Button = (props) => { const { label } = props; return <button>{label}</button>; };";
    const { messages } = await lintReactCustom(source);

    expect(messages).toStrictEqual([]);
  });

  it("should report property access on class props, state, and context", async () => {
    const source = [
      'import { Component as ReactComponent } from "react";',
      "class Counter extends ReactComponent {",
      "  render() { return <button>{this.props.label}{this.state.count}{this.context.theme}</button>; }",
      "}",
    ].join("\n");
    const { messages, output } = await lintReactCustom(source);

    expect(messages).toHaveLength(3);
    expect(messages.every(({ ruleId }) => ruleId === "pplancq-react/destructuring-assignment")).toBeTruthy();
    expect(output).toBeUndefined();
  });
});
