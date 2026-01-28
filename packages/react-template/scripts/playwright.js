import { spawnSync } from 'node:child_process';
import { platform } from 'node:process';

const runCommand = (cmd, args = []) => {
  console.info(`> ${cmd} ${args.join(' ')}`);
  const result = spawnSync(cmd, args, { shell: platform === 'win32', cwd: process.cwd(), stdio: 'inherit' });
  if (result.status !== 0) {
    throw result;
  }
};

const main = async () => {
  const args = process.argv.slice(2);

  let playwrightArgs = [...args];

  if (args.includes('--watch')) {
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

  if (playwrightArgs.includes('--coverage')) {
    process.env.ENABLED_COVERAGE = 'true';
    playwrightArgs = playwrightArgs.filter(p => p !== '--coverage');
  }

  runCommand('npx', ['playwright', ...playwrightArgs]);
};

main().catch(e => process.exit(e.status));
