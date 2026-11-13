export const jsxBooleanValue =
  (mode = "never") =>
  (context, { ast }) => ({
    JSXAttribute(node) {
      if (mode !== "never") {
        return;
      }

      const { value } = node;

      if (value?.type !== "JSXExpressionContainer") {
        return;
      }

      const expression = ast.unwrap(value.expression);

      if (expression.type !== "Literal" || expression.value !== true) {
        return;
      }

      context.report({
        node,
        message: "Omit the value for boolean attributes.",
        fix: (fixer) => fixer.removeRange([node.name.range[1], value.range[1]]),
      });
    },
  });
