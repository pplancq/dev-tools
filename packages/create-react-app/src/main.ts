import { createRepository } from '@/steps/createRepository';
import { getInteractiveArgs } from '@/steps/getInteractiveArgs';
import { getPromptArgs } from '@/steps/getPromptArgs';
import { gitCommit } from '@/steps/gitCommit';
import { initializeGit } from '@/steps/initializeGit';
import { installPackage } from '@/steps/installPackage';
import { installTemplate } from '@/steps/installTemplate';
import { postInstallTemplate } from '@/steps/postInstallTemplate';
import { validatePromptArgs } from '@/steps/validatePromptArgs';
import { intro, log, note } from '@clack/prompts';
import pc from 'picocolors';

export const main = async () => {
  const args = getPromptArgs();

  intro(`Create ${pc.blue('React')} App`);

  validatePromptArgs(args);

  const { projectName, skipDepInstall, skipGitInit } = await getInteractiveArgs(args);

  const { repoDir } = await createRepository(projectName);

  await installTemplate(repoDir, '@pplancq/react-template');

  await postInstallTemplate(projectName, repoDir);

  await initializeGit(repoDir, skipGitInit);

  await installPackage(repoDir, skipDepInstall);

  await gitCommit(repoDir, skipGitInit);

  log.success(`${pc.yellow('Success \\o/')}  Created ${pc.green(projectName)} at ${pc.green(repoDir)}`);
  note(
    `Inside that directory, you can run several commands:
 ${pc.cyan('npm start')}            Starts the development server.
 ${pc.cyan('npm run build')}        Bundles the app into static files for production.
 ${pc.cyan('npm test')}             Runs tests using Vitest and Playwright.
 ${pc.cyan('npm run remove:demo')}  Remove the demo application.

We suggest that you begin by typing:
 ${pc.cyan('cd')} ${projectName}
 ${pc.cyan('npm start')}`,
    'What next?',
  );
};
