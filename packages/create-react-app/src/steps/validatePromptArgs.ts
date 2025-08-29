import { InvalidProjectNameError } from '@/Error/InvalidProjectNameError';
import { InvalidTemplateNameError } from '@/Error/InvalidTemplateNameError';
import { validateProjectName } from '@/validates/validateProjectName';
import { validateTemplateName } from '@/validates/validateTemplateName';

type ValidatePromptArgs = {
  projectName?: string;
  template?: string;
};

export const validatePromptArgs = ({ projectName, template }: ValidatePromptArgs) => {
  if (projectName) {
    const projectNameIsValid = validateProjectName(projectName);
    if (projectNameIsValid !== '') {
      throw new InvalidProjectNameError(projectNameIsValid);
    }
  }

  if (template) {
    const templateIsValid = validateTemplateName(template);
    if (templateIsValid !== '') {
      throw new InvalidTemplateNameError(templateIsValid);
    }
  }
};
