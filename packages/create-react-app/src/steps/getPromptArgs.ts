import { Command } from 'commander';
import process from 'node:process';
import pc from 'picocolors';
import packageJson from '../../package.json';

type PromptArgsResult = {
  projectName?: string;
  skipDepInstall?: boolean;
};

export const getPromptArgs = (): PromptArgsResult => {
  const result: PromptArgsResult = {};

  const cli = new Command(packageJson.name);
  cli
    .argument('[project-name]', 'The name of the project to create.')
    .option('--skip-dep-install', 'Skip installing dependencies (npm install).')
    .version(packageJson.version, '-v, --version')
    .name(pc.green('create-react-app'))
    .usage(`[options] ${pc.yellow('[project-name]')}`)
    .addHelpText(
      'after',
      `
Examples:
  $ npm create @pplancq/react-app my-project
  $ npx @pplancq/create-react-app my-project`,
    )
    .action((projectName?: string, options?: { skipDepInstall?: boolean }) => {
      if (projectName) {
        result.projectName = projectName;
      }

      if (options?.skipDepInstall) {
        result.skipDepInstall = options.skipDepInstall;
      }
    })
    .parse(process.argv);

  return result;
};
