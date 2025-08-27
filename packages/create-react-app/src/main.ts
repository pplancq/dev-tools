import { runCommand } from '@/helpers/runCommand';
import { getInteractiveArgs } from '@/steps/getInteractiveArgs';
import { getPromptArgs } from '@/steps/getPromptArgs';
import { validatePromptArgs } from '@/steps/validatePromptArgs';
import { intro, log, note, outro } from '@clack/prompts';
import { cpSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';
import pc from 'picocolors';

export const main = async () => {
  const args = getPromptArgs();

  intro(`Create ${pc.blue('React')} App`);

  validatePromptArgs(args);

  const { projectName, skipDepInstall, skipGitInit } = await getInteractiveArgs(args);

  const reactTemplate = '@pplancq/react-template';

  const repoDir = resolve(process.cwd(), projectName);
  const templateDir = resolve(repoDir, `node_modules/${reactTemplate}`);

  log.info(`Creating a new App React in ${pc.green(repoDir)}.`);
  log.info(`Install react template from ${pc.green(reactTemplate)}`);
  mkdirSync(repoDir);
  await runCommand('npm', ['init', '-y'], { cwd: repoDir });

  await runCommand('npm', ['install', reactTemplate], { cwd: repoDir });
  rmSync(`${repoDir}/package-lock.json`);
  cpSync(templateDir, repoDir, { recursive: true, dereference: true });

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
  rmSync(`${repoDir}/node_modules`, { recursive: true });
  rmSync(`${repoDir}/LICENSE`);
  rmSync(`${repoDir}/CHANGELOG.md`);
  rmSync(`${repoDir}/README.md`);
  renameSync(`${repoDir}/_README.md`, `${repoDir}/README.md`);

  if (!skipGitInit) {
    log.info('Initialized a git repository.');
    await runCommand('git', ['init', '--initial-branch=main'], { cwd: repoDir });
  }

  if (!skipDepInstall) {
    log.info('Installing packages. This might take a couple of minutes.');
    await runCommand('npm', ['install'], { cwd: repoDir });
  }

  if (!skipGitInit) {
    log.info('Created git commit.');
    await runCommand('git', ['add', '.'], { cwd: repoDir });
    await runCommand('git', ['commit', '--no-verify', '--message', 'Initial commit'], { cwd: repoDir });
  }

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
