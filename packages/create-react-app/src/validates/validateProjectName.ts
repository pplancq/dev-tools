import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';
import pc from 'picocolors';

export const validateProjectName = (value: unknown) => {
  const isValid = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

  if (typeof value !== 'string' || !isValid.test(value)) {
    return `The project name '${value}' is not valid.

A valid npm project name must start with a lowercase letter, a number, a hyphen, or a tilde, and can include dots, hyphens, tildes, or underscores.

If the project name starts with '@', it must be followed by a valid scope name and a '/'.`;
  }

  if (existsSync(resolve(process.cwd(), value))) {
    return `The directory ${pc.green(value)} already exists.
Either try using a new directory name, or remove the files listed above.`;
  }

  return '';
};
