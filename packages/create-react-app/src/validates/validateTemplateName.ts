export const validateTemplateName = (value: unknown) => {
  const isValid = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*(?:@[^\s@][^\s]*)?$/;

  if (typeof value !== 'string' || !isValid.test(value)) {
    return `The template name '${value}' is not valid.`;
  }

  return '';
};
