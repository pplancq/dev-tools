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

  const { projectName, skipDepInstall, skipGitInit, template } = await getInteractiveArgs(args);

  const { repoDir } = await createRepository(projectName);

  await installTemplate(repoDir, template);

  await postInstallTemplate(projectName, repoDir);

  await initializeGit(repoDir, skipGitInit);

  await installPackage(repoDir, skipDepInstall);

  await gitCommit(repoDir, skipGitInit);

  const successMessage = String.raw`Success \o/`;
  log.success(`${pc.yellow(successMessage)}  Created ${pc.green(projectName)} at ${pc.green(repoDir)}`);
  note(
    `We suggest that you begin by typing:
 ${pc.cyan('cd')} ${projectName}${
   skipDepInstall
     ? `
 ${pc.cyan('npm install')}`
     : ''
 }
 ${pc.cyan('npm start')}`,
    'What next?',
  );
};
