import { runCommand } from '@/helpers/runCommand';
import { spinner } from '@clack/prompts';

export const initializeGit = async (repoDir: string, skipGitInit: boolean) => {
  if (skipGitInit) {
    return;
  }

  const spinnerInstance = spinner();

  spinnerInstance.start('Initializing git repository.');

  await runCommand('git', ['init', '--initial-branch=main'], { cwd: repoDir });

  spinnerInstance.stop('Git repository initialized.');
};
