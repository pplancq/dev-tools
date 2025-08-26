import { Command } from 'commander';
import process from 'node:process';
import pc from 'picocolors';
import packageJson from '../../package.json';

type PromptArgsResult = {
  projectName?: string;
};

export const getPromptArgs = (): PromptArgsResult => {
  const result: PromptArgsResult = {};

  const cli = new Command(packageJson.name);
  cli
    .argument('[project-name]', 'The name of the project to create.')
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
    .action((name?: string) => {
      if (name) {
        result.projectName = name;
      }
    })
    .parse(process.argv);

  return result;
};
