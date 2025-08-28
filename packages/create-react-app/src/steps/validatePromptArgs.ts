import { InvalidProjectNameError } from '@/Error/InvalidProjectNameError';
import { validateProjectName } from '@/validates/validateProjectName';

type ValidatePromptArgs = {
  projectName?: string;
};

export const validatePromptArgs = ({ projectName }: ValidatePromptArgs) => {
  if (!projectName) {
    return;
  }

  const projectNameIsValid = validateProjectName(projectName);
  if (projectNameIsValid !== '') {
    throw new InvalidProjectNameError(projectNameIsValid);
  }
};
