export const validateProjectName = (value: unknown) => {
  const isValid = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

  if (typeof value !== 'string' || !isValid.test(value)) {
    return `The project name '${value}' is not valid.

A valid npm project name must start with a lowercase letter, a number, a hyphen, or a tilde, and can include dots, hyphens, tildes, or underscores.

If the project name starts with '@', it must be followed by a valid scope name and a '/'.`;
  }

  return '';
};
