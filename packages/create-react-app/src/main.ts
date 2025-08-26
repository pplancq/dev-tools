import { endProcess } from '@/helpers/endProcess';
import { runCommand } from '@/helpers/runCommand';
import { getInteractiveArgs } from '@/steps/getInteractiveArgs';
import { getPromptArgs } from '@/steps/getPromptArgs';
import { validatePromptArgs } from '@/steps/validatePromptArgs';
import { intro, log, note, outro } from '@clack/prompts';
import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import pc from 'picocolors';

const NPM = 'npm';
const YARN = 'yarn';
const PNPM = 'pnpm';

const getPackageManager = () => {
  switch (true) {
    case process.env.npm_config_user_agent && process.env.npm_config_user_agent.includes(YARN):
      return YARN;
    case process.env.npm_config_user_agent && process.env.npm_config_user_agent.includes(PNPM):
      return PNPM;
    default:
      return NPM;
  }
};

export const main = async () => {
  const args = getPromptArgs();

  intro(`Create ${pc.blue('React')} App`);

  validatePromptArgs(args);

  const { projectName } = await getInteractiveArgs(args);

  const packageManager = getPackageManager();

  const reactTemplate = '@pplancq/react-template';

  const repoDir = resolve(process.cwd(), projectName);
  const templateDir = resolve(repoDir, `node_modules/${reactTemplate}`);

  if (existsSync(repoDir)) {
    log.error(`The directory ${pc.green(projectName)} is already exist.
Either try using a new directory name, or remove the files listed above.`);
    outro('Please check and try again.');
    endProcess(true);
  }

  log.info(`Creating a new App React in ${pc.green(repoDir)}.`);
  log.info(`Install react template from ${pc.green(reactTemplate)}`);
  mkdirSync(repoDir);
  await runCommand('npm', ['init', '-y'], { cwd: repoDir });

  if (packageManager === YARN) {
    await runCommand('yarn', ['config', 'set', 'nodeLinker', 'node-modules'], { cwd: repoDir });
  }
  await runCommand(packageManager, [packageManager === YARN ? 'add' : 'install', reactTemplate], {
    cwd: repoDir,
  });
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

  let readme = readFileSync(resolve(repoDir, 'README.md'), { encoding: 'utf-8' });
  switch (packageManager) {
    case YARN:
      rmSync(`${repoDir}/yarn.lock`);
      readme = readme.replaceAll('npm install', 'yarn');
      readme = readme.replaceAll('npm', 'yarn');
      break;
    case PNPM:
      rmSync(`${repoDir}/pnpm-lock.yaml`);
      readme = readme.replaceAll('npm', 'pnpm');
      break;
    default:
      rmSync(`${repoDir}/package-lock.json`);
  }
  writeFileSync(resolve(repoDir, 'README.md'), readme, { encoding: 'utf-8' });

  log.info('Initialized a git repository.');
  await runCommand('git', ['init', '--initial-branch=main'], { cwd: repoDir });

  log.info('Installing packages. This might take a couple of minutes.');
  await runCommand(packageManager, ['install'], { cwd: repoDir });

  if (packageManager === PNPM) {
    await runCommand(packageManager, ['install', '-D', 'vite'], { cwd: repoDir });
  }

  log.info('Created git commit.');
  await runCommand('git', ['add', '.'], { cwd: repoDir });
  await runCommand('git', ['commit', '--no-verify', '--message', 'Initial commit'], { cwd: repoDir });

  log.success(`${pc.yellow('Success \\o/')}  Created ${pc.green(projectName)} at ${pc.green(repoDir)}`);
  note(
    `Inside that directory, you can run several commands:
 ${pc.cyan(`${packageManager} start`)}            Starts the development server.
 ${pc.cyan(`${packageManager} run build`)}        Bundles the app into static files for production.
 ${pc.cyan(`${packageManager} test`)}             Runs tests using Vitest and Playwright.
 ${pc.cyan(`${packageManager} run remove:demo`)}  Remove the demo application.

We suggest that you begin by typing:
 ${pc.cyan('cd')} ${projectName}
 ${pc.cyan('npm start')}`,
    'What next?',
  );

  outro('Happy hacking!');
};
