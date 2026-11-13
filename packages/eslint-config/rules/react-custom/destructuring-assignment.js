/* eslint-disable import/extensions */
import { merge } from "@eslint-react/kit";
import { findParentClass, getStaticPropertyName, isReactClassComponent } from "./component-utils.js";
/* eslint-enable import/extensions */

const reportUndestructuredParameter = (context, node, parameter) => {
  if (parameter.type !== "Identifier") {
    return;
  }

  const scope = context.sourceCode.getScope(node);
  const variable = scope.variables.find(({ name }) => name === parameter.name);

  (variable?.references ?? []).forEach((reference) => {
    const memberExpression = reference.identifier.parent;

    if (memberExpression?.type !== "MemberExpression" || memberExpression.object !== reference.identifier) {
      return;
    }

    context.report({
      node: memberExpression,
      message: "Use destructuring assignment for component props, state, and context.",
    });
  });
};

export const destructuringAssignment =
  (mode = "always") =>
  (context, { collect }) => {
    const { query, visitor } = collect.components(context);

    return merge(visitor, {
      MemberExpression(node) {
        const classNode = findParentClass(node);

        if (!isReactClassComponent(classNode, context.sourceCode)) {
          return;
        }

        const instanceProperty = node.object;

        if (
          instanceProperty.type !== "MemberExpression" ||
          instanceProperty.object.type !== "ThisExpression" ||
          !["props", "state", "context"].includes(getStaticPropertyName(instanceProperty))
        ) {
          return;
        }

        context.report({
          node,
          message: "Use destructuring assignment for component props, state, and context.",
        });
      },
      "Program:exit": function exitProgram(program) {
        if (mode !== "always") {
          return;
        }

        query.all(program).forEach(({ node }) => {
          node.params.slice(0, 2).forEach((parameter) => {
            reportUndestructuredParameter(context, node, parameter);
          });
        });
      },
    });
  };
