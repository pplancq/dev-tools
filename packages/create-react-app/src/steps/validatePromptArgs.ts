import { endProcess } from '@/helpers/endProcess';
import { validateProjectName } from '@/validates/validateProjectName';
import { log, outro } from '@clack/prompts';

type ValidatePromptArgs = {
  projectName?: string;
};

export const validatePromptArgs = ({ projectName }: ValidatePromptArgs) => {
  if (!projectName) {
    return;
  }

  const projectNameIsValid = validateProjectName(projectName);
  if (projectNameIsValid !== '') {
    log.error(projectNameIsValid);
    outro('Please check and try again.');
    endProcess(true);
  }
};
