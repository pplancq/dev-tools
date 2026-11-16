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

  it("should report property access on props with a default value", async () => {
    const source = "const Button = (props = {}) => <button>{props.label}</button>;";
    const { messages } = await lintReactCustom(source);

    expect(messages.map(({ ruleId }) => ruleId)).toStrictEqual(["pplancq-react/destructuring-assignment"]);
  });

  it("should allow destructured props with a default value", async () => {
    const source = "const Button = ({ label } = {}) => <button>{label}</button>;";
    const { messages } = await lintReactCustom(source);

    expect(messages).toStrictEqual([]);
  });

  it("should report forwarded component props without reporting ref access", async () => {
    const source = [
      'import { forwardRef } from "react";',
      "const Button = forwardRef((props, ref) => <button ref={ref}>{props.label}{ref.current}</button>);",
    ].join("\n");
    const { messages } = await lintReactCustom(source);

    expect(messages.map(({ ruleId, column }) => ({ ruleId, column }))).toStrictEqual([
      { ruleId: "pplancq-react/destructuring-assignment", column: 62 },
    ]);
  });

  it("should ignore ref access in a memoized forwardRef component", async () => {
    const source = [
      'import { forwardRef, memo } from "react";',
      "const Button = memo(forwardRef((props, ref) => <button ref={ref}>{props.label}{ref.current}</button>));",
    ].join("\n");
    const { messages } = await lintReactCustom(source);

    expect(messages.map(({ ruleId, column }) => ({ ruleId, column }))).toStrictEqual([
      { ruleId: "pplancq-react/destructuring-assignment", column: 67 },
    ]);
  });

  it("should continue to report property access on legacy context", async () => {
    const source = "const Button = (props, context) => <button>{context.theme}</button>;";
    const { messages } = await lintReactCustom(source);

    expect(messages.map(({ ruleId }) => ruleId)).toStrictEqual(["pplancq-react/destructuring-assignment"]);
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
