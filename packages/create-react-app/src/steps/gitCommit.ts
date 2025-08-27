import { runCommand } from '@/helpers/runCommand';
import { spinner } from '@clack/prompts';

export const gitCommit = async (repoDir: string, skipGitInit: boolean) => {
  if (skipGitInit) {
    return;
  }

  const spinnerInstance = spinner();

  spinnerInstance.start('Creating git commit.');

  await runCommand('git', ['add', '.'], { cwd: repoDir });
  await runCommand('git', ['commit', '--no-verify', '--message', 'Initial commit'], { cwd: repoDir });

  spinnerInstance.stop('Git commit created.');
};
