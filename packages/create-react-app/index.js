#!/usr/bin/env node
const { execSync } = require('child_process');
const { Command } = require('commander');
const { cpSync, existsSync, readFileSync, renameSync, rmSync, writeFileSync, mkdirSync } = require('fs');
const { resolve } = require('path');

const runCommand = (command, options = { stdio: 'inherit' }) => {
  try {
    execSync(command, options);
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    process.exit(-1);
  }
};

const main = async () => {
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
  runCommand(`cd ${repoDir} && npm install ${reactTemplate}`);
  cpSync(templateDir, repoDir, { recursive: true });
  renameSync(`${repoDir}/_gitignore`, `${repoDir}/.gitignore`);
  const repoPackageJson = JSON.parse(readFileSync(resolve(repoDir, 'package.json'), { encoding: 'utf-8' }));
  repoPackageJson.name = projectName;
  repoPackageJson.description = projectName;
  const { _prepare, ...scripts } = repoPackageJson.scripts;
  repoPackageJson.scripts = { ...scripts, prepare: _prepare };

  delete repoPackageJson.author;
  delete repoPackageJson.repository;
  delete repoPackageJson.bugs;
  delete repoPackageJson.keywords;

  writeFileSync(resolve(repoDir, 'package.json'), JSON.stringify(repoPackageJson, null, 2), { encoding: 'utf-8' });
  rmSync(`${repoDir}/node_modules`, { recursive: true });
  rmSync(`${repoDir}/package-lock.json`);
  rmSync(`${repoDir}/LICENSE`);
  rmSync(`${repoDir}/CHANGELOG.md`);
  rmSync(`${repoDir}/README.md`);
  renameSync(`${repoDir}/_README.md`, `${repoDir}/README.md`);

  console.info('\nInitialized a git repository.');
  runCommand(`cd ${repoDir} && git init --initial-branch=main`, { stdio: 'ignore' });

  console.info('\nInstalling packages. This might take a couple of minutes.');
  runCommand(`cd ${repoDir} && npm install`);

  console.info('\nCreated git commit.');
  runCommand(`cd ${repoDir} && git add . && git commit --no-verify --message "Initial commit"`, {
    stdio: 'ignore',
  });

  console.info(`\n${chalk.yellow('Success \\o/')}  Created ${chalk.green(projectName)} at ${chalk.green(repoDir)}`);
  console.info('Inside that directory, you can run several commands:');
  console.info(`\n  ${chalk.cyan('npm start')}`);
  console.info('    Starts the development server.');
  console.info(`\n  ${chalk.cyan('npm run build')}`);
  console.info('    Bundles the app into static files for production.');
  console.info(`\n  ${chalk.cyan('npm test')}`);
  console.info('    Starts the test runner.');
  console.info(`\n  ${chalk.cyan('npm run remove:demo')}`);
  console.info('    Remove the demo application.');
  console.info('\nWe suggest that you begin by typing:');
  console.info(`\n  ${chalk.cyan('cd')} ${projectName}`);
  console.info(`  ${chalk.cyan('npm start')}`);
  console.info('\nHappy hacking!');
};

main();
