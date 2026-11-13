/* eslint-disable import/extensions */
import { merge } from "@eslint-react/kit";
import { isReactClassComponent } from "./component-utils.js";
/* eslint-enable import/extensions */

const getComponentName = ({ node, name }) => name ?? node.id?.name ?? "anonymous";
const getStart = ({ node }) => node.range?.[0] ?? node.start ?? 0;

export const noMultiComp =
  ({ ignoreStateless = false } = {}) =>
  (context, { collect }) => {
    const { query, visitor } = collect.components(context);
    const classComponents = [];

    return merge(visitor, {
      ClassDeclaration(node) {
        if (isReactClassComponent(node, context.sourceCode)) {
          classComponents.push({ node });
        }
      },
      ClassExpression(node) {
        if (isReactClassComponent(node, context.sourceCode)) {
          classComponents.push({ node });
        }
      },
      "Program:exit": function exitProgram(program) {
        const functionComponents = ignoreStateless ? [] : query.all(program);
        const components = [...functionComponents, ...classComponents].sort(
          (first, second) => getStart(first) - getStart(second),
        );

        components.slice(1).forEach((component) => {
          context.report({
            node: component.node,
            message: `Declare only one component per file. Found extra component "${getComponentName(component)}".`,
          });
        });
      },
    });
  };
