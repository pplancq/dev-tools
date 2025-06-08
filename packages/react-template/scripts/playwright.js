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

  if (playwrightArgs.indexOf('--coverage') !== -1) {
    process.env.ENABLED_COVERAGE = 'true';
    playwrightArgs = playwrightArgs.filter(p => p !== '--coverage');
  }

  runCommand('npx', ['playwright', ...playwrightArgs]);
};

main().catch(e => process.exit(e.status));
