import { checkCancel } from '@/helpers/checkCancel';
import { validateProjectName } from '@/validates/validateProjectName';
import { text } from '@clack/prompts';

type InteractiveArgs = {
  projectName?: string;
};

type InteractiveArgsResult = {
  projectName: string;
};

export const getInteractiveArgs = async ({ projectName }: InteractiveArgs): Promise<InteractiveArgsResult> => {
  return {
    projectName:
      projectName ||
      checkCancel(
        await text({
          message: 'What is the name of your project?',
          placeholder: 'my-project',
          validate: validateProjectName,
        }),
      ).toString(),
  };
};
