import { runCommand } from '@/helpers/runCommand';
import { spinner } from '@clack/prompts';

export const installPackage = async (repoDir: string, skipDepInstall: boolean) => {
  if (skipDepInstall) {
    return;
  }

  const spinnerInstance = spinner();

  spinnerInstance.start('Installing packages. This might take a couple of minutes.');

  await runCommand('npm', ['install'], { cwd: repoDir });

  spinnerInstance.stop('Packages installed.');
};
