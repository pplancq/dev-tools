import { execSync, type ExecSyncOptions } from 'child_process';
import { Command } from 'commander';
import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const NPM = 'npm';
const YARN = 'yarn';
const PNPM = 'pnpm';

const runCommand = (command: string, options: ExecSyncOptions = { stdio: 'inherit' }) => {
  try {
    execSync(command, options);
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    process.exit(-1);
  }
};

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
  const chalk = await import('chalk').then(m => m.default);

  let projectName = '';
  const packageJson = JSON.parse(readFileSync(resolve(__dirname, './package.json'), { encoding: 'utf-8' }));

  const cli = new Command(packageJson.name);
  cli
    .version(packageJson.version)
    .argument('<project-name>')
    .usage(chalk.green('<project-name>'))
    .action(name => {
      projectName = name;
    })
    .parse(process.argv);

  const packageManager = getPackageManager();

  if (!/^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)) {
    console.error(`The project name '${projectName}' is not valid.`);
    console.error(
      'A valid npm project name must start with a lowercase letter, a number, a hyphen, or a tilde, and can include dots, hyphens, tildes, or underscores.',
    );
    console.error(
      "If the project name starts with '@', it must be followed by a valid scope name and a '/'. Please check and try again.",
    );
    process.exit(-1);
  }

  const reactTemplate = '@pplancq/react-template';

  const repoDir = resolve(process.cwd(), `./${projectName}`);
  const templateDir = resolve(repoDir, `./node_modules/${reactTemplate}`);

  if (existsSync(repoDir)) {
    console.error(`\nThe directory ${chalk.green(projectName)} is already exist.`);
    console.error('Either try using a new directory name, or remove the files listed above.');
    process.exit(-1);
  }

  console.info(`\nCreating a new App React in ${chalk.green(repoDir)}.`);

  console.info(`\nInstall react template from ${chalk.green(reactTemplate)}`);
  mkdirSync(repoDir);
  runCommand(`cd ${repoDir} && npm init -y`, { stdio: 'ignore' });
  if (packageManager === YARN) {
    runCommand(`cd ${repoDir} && yarn config set nodeLinker node-modules`, { stdio: 'ignore' });
  }
  runCommand(`cd ${repoDir} && ${packageManager} ${packageManager === YARN ? 'add' : 'install'} ${reactTemplate}`);
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

  console.info('\nInitialized a git repository.');
  runCommand(`cd ${repoDir} && git init --initial-branch=main`, { stdio: 'ignore' });

  console.info('\nInstalling packages. This might take a couple of minutes.');
  runCommand(`cd ${repoDir} && ${packageManager} install`);

  if (packageManager === PNPM) {
    runCommand(`cd ${repoDir} && ${packageManager} install -D vite`);
  }

  console.info('\nCreated git commit.');
  runCommand(`cd ${repoDir} && git add . && git commit --no-verify --message "Initial commit"`, {
    stdio: 'ignore',
  });

  console.info(`\n${chalk.yellow('Success \\o/')}  Created ${chalk.green(projectName)} at ${chalk.green(repoDir)}`);
  console.info('Inside that directory, you can run several commands:');
  const logCommand = (command: string) => {
    console.info(`\n  ${chalk.cyan(command)}`);
  };
  logCommand(`${packageManager} start`);
  console.info('    Starts the development server.');
  logCommand(`${packageManager} run build`);
  console.info('    Bundles the app into static files for production.');
  logCommand(`${packageManager} test`);
  console.info('    Starts the test runner.');
  logCommand(`${packageManager} run remove:demo`);
  console.info('    Remove the demo application.');
  console.info('\nWe suggest that you begin by typing:');
  console.info(`\n  ${chalk.cyan('cd')} ${projectName}`);
  logCommand(`${packageManager} start`);
  console.info('\nHappy hacking!');
};
