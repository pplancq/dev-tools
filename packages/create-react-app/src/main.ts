import { createRepository } from '@/steps/createRepository';
import { getInteractiveArgs } from '@/steps/getInteractiveArgs';
import { getPromptArgs } from '@/steps/getPromptArgs';
import { gitCommit } from '@/steps/gitCommit';
import { initializeGit } from '@/steps/initializeGit';
import { installPackage } from '@/steps/installPackage';
import { installTemplate } from '@/steps/installTemplate';
import { validatePromptArgs } from '@/steps/validatePromptArgs';
import { intro, log, note, outro } from '@clack/prompts';
import { readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import pc from 'picocolors';

export const main = async () => {
  const args = getPromptArgs();

  intro(`Create ${pc.blue('React')} App`);

  validatePromptArgs(args);

  const { projectName, skipDepInstall, skipGitInit } = await getInteractiveArgs(args);

  const { repoDir } = await createRepository(projectName);

  await installTemplate(repoDir, '@pplancq/react-template');

  renameSync(`${repoDir}/_gitignore`, `${repoDir}/.gitignore`);
  const repoPackageJson = JSON.parse(readFileSync(resolve(repoDir, 'package.json'), { encoding: 'utf-8' }));
  repoPackageJson.name = projectName;
  repoPackageJson.description = projectName;
  const { _prepare, _postinstall, ...scripts } = repoPackageJson.scripts;
  repoPackageJson.scripts = { ...scripts, prepare: _prepare, postinstall: _postinstall };
  repoPackageJson.version = '0.1.0';

  delete repoPackageJson.author;
  delete repoPackageJson.repository;
  delete repoPackageJson.bugs;
  delete repoPackageJson.keywords;
  delete repoPackageJson.engines;

  writeFileSync(resolve(repoDir, 'package.json'), JSON.stringify(repoPackageJson, null, 2), { encoding: 'utf-8' });
  rmSync(`${repoDir}/LICENSE`);
  rmSync(`${repoDir}/CHANGELOG.md`);
  rmSync(`${repoDir}/README.md`);
  renameSync(`${repoDir}/_README.md`, `${repoDir}/README.md`);

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

  outro('Happy hacking!');
};
