import { checkCancel } from '@/helpers/checkCancel';
import { validateProjectName } from '@/validates/validateProjectName';
import { validateTemplateName } from '@/validates/validateTemplateName';
import { confirm, group, text } from '@clack/prompts';

type InteractiveArgs = {
  projectName?: string;
  skipDepInstall?: boolean;
  skipGitInit?: boolean;
  template?: string;
};

type InteractiveArgsResult = {
  projectName: string;
  skipDepInstall: boolean;
  skipGitInit: boolean;
  template: string;
};

export const getInteractiveArgs = async ({
  projectName,
  skipDepInstall,
  skipGitInit,
  template,
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
    skipGitInit:
      skipGitInit ||
      Boolean(
        checkCancel(
          await confirm({ message: 'Do you want to skip initializing a git repository?', initialValue: false }),
        ),
      ),
    template:
      template ||
      checkCancel(
        (
          await group<{ useCustomTemplate: boolean; template: string }>({
            useCustomTemplate: async () =>
              Boolean(
                await confirm({
                  message: 'Do you want to use a custom template?',
                  initialValue: false,
                }),
              ),
            template: async ({ results }) => {
              if (!results.useCustomTemplate) {
                return '@pplancq/react-template';
              }

              return (
                await text({
                  message: 'Enter the custom template name (e.g., @pplancq/react-template):',
                  placeholder: '@pplancq/react-template',
                  validate: validateTemplateName,
                })
              ).toString();
            },
          })
        ).template,
      ),
  };
};
