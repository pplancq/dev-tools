import { spawnSync } from 'child_process';

const runCommand = (cmd, args = []) => {
  console.info(`> ${cmd} ${args.join(' ')}`);
  const result = spawnSync(cmd, args, { cwd: process.cwd(), stdio: 'inherit' });
  if (result.status !== 0) {
    throw result;
  }
};

const main = async () => {
  const args = process.argv.slice(2);

  let playwrightArgs = [...args];

  if (args.indexOf('--watch') !== -1) {
    const filteredArgs = args.filter(a => a !== '--watch');
    runCommand('npx', [
      'nodemon',
      '--watch',
      './tests/',
      '--ext',
      'js,jx,ts,tsx',
      '--exec',
      ['node', 'scripts/playwright.js', ...filteredArgs].join(' '),
    ]);
    return;
  }

  if (playwrightArgs.indexOf('--coverage') !== -1) {
    process.env.ENABLED_COVERAGE = 'true';
    playwrightArgs = playwrightArgs.filter(p => p !== '--coverage');
  }

  runCommand('npx', ['playwright', ...playwrightArgs]);
};

main().catch(e => process.exit(e.status));
