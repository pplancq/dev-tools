import { checkCancel } from '@/helpers/checkCancel';
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
        }),
      ).toString(),
  };
};
