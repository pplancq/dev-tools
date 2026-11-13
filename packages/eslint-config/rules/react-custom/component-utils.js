const isReactNamespace = (sourceCode, name) =>
  name === "React" ||
  sourceCode.ast.body.some(
    (node) =>
      node.type === "ImportDeclaration" &&
      node.source.value === "react" &&
      node.specifiers.some(
        (specifier) =>
          specifier.local.name === name &&
          (specifier.type === "ImportDefaultSpecifier" || specifier.type === "ImportNamespaceSpecifier"),
      ),
  );

const isReactComponentImport = (sourceCode, name) =>
  sourceCode.ast.body.some(
    (node) =>
      node.type === "ImportDeclaration" &&
      node.source.value === "react" &&
      node.specifiers.some(
        (specifier) =>
          specifier.type === "ImportSpecifier" &&
          specifier.local.name === name &&
          ["Component", "PureComponent"].includes(specifier.imported.name ?? specifier.imported.value),
      ),
  );

const getStaticPropertyName = (node) => {
  if (node.type !== "MemberExpression") {
    return undefined;
  }

  if (!node.computed && node.property.type === "Identifier") {
    return node.property.name;
  }

  if (node.computed && node.property.type === "Literal" && typeof node.property.value === "string") {
    return node.property.value;
  }

  return undefined;
};

export const isReactClassComponent = (node, sourceCode) => {
  if (node?.type !== "ClassDeclaration" && node?.type !== "ClassExpression") {
    return false;
  }

  const { superClass } = node;

  if (superClass?.type === "MemberExpression" && superClass.object.type === "Identifier") {
    const componentName = getStaticPropertyName(superClass);
    return (
      ["Component", "PureComponent"].includes(componentName) && isReactNamespace(sourceCode, superClass.object.name)
    );
  }

  if (superClass?.type !== "Identifier") {
    return false;
  }

  const { name } = superClass;

  return isReactComponentImport(sourceCode, name);
};

export const findParentClass = (node) => {
  const { parent } = node;

  if (!parent || parent.type === "ClassDeclaration" || parent.type === "ClassExpression") {
    return parent;
  }

  return findParentClass(parent);
};

export { getStaticPropertyName };
