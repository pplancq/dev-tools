import { RunCommandError } from '@/Error/RunCommandError';
import { runCommand } from '@/helpers/runCommand';
import { log, spinner } from '@clack/prompts';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const postInstallTemplate = async (projectName: string, repoDir: string) => {
  const spinnerInstance = spinner();
  let hasError = false;

  const templatePackageJson = JSON.parse(readFileSync(resolve(repoDir, 'package.json'), { encoding: 'utf-8' }));

  if (templatePackageJson?.bin?.['template-install'] === undefined) {
    log.warn('No post install template script found.');
    return;
  }

  spinnerInstance.start('Running post install template script...');
  try {
    await runCommand('npx', ['template-install', projectName], { cwd: repoDir });
  } catch (error) {
    hasError = true;
    if (!(error instanceof RunCommandError)) {
      throw error;
    }

    log.error('Failed to run template-install command');
  } finally {
    spinnerInstance.stop(
      hasError ? 'Failed to run post install template script.' : 'Post install template script finished.',
    );
  }
};
