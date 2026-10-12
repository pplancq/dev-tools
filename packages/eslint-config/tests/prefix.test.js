import { describe, expect, it } from "vitest";
// eslint-disable-next-line import/extensions
import { prefix } from "../rules/utils.js";

describe("prefix", () => {
  it("should rename the namespace of the rules", () => {
    const rules = { "foo-x/first": "error", "foo-x/second": ["warn", { a: 1 }] };

    expect(prefix(rules, "foo-x", "foo")).toStrictEqual({ "foo/first": "error", "foo/second": ["warn", { a: 1 }] });
  });

  it("should keep the other rules untouched", () => {
    const rules = { "foo-x/first": "error", "bar/other": "off", "foo-xy/third": "off", "no-console": "error" };

    expect(prefix(rules, "foo-x", "foo")).toStrictEqual({
      "foo/first": "error",
      "bar/other": "off",
      "foo-xy/third": "off",
      "no-console": "error",
    });
  });

  it("should return the rules as is when the namespace does not change", () => {
    const rules = { "foo-x/first": "error" };

    expect(prefix(rules, "foo-x", "foo-x")).toBe(rules);
  });
});
