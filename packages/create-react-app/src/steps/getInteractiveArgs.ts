import { checkCancel } from '@/helpers/checkCancel';
import { validateProjectName } from '@/validates/validateProjectName';
import { confirm, text } from '@clack/prompts';

type InteractiveArgs = {
  projectName?: string;
  skipDepInstall?: boolean;
};

type InteractiveArgsResult = {
  projectName: string;
  skipDepInstall: boolean;
};

export const getInteractiveArgs = async ({
  projectName,
  skipDepInstall,
}: InteractiveArgs): Promise<InteractiveArgsResult> => {
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
    skipDepInstall:
      skipDepInstall ||
      Boolean(
        checkCancel(
          await confirm({ message: 'Do you want to skip installing dependencies (npm install)?', initialValue: false }),
        ),
      ),
  };
};
