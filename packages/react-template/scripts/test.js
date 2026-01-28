// eslint-disable-next-line import/no-extraneous-dependencies
import concurrently from 'concurrently';

const args = process.argv.slice(2);

let commands = ['npm:test:unit', 'npm:test:e2e'];

if (args.includes('--coverage')) {
  commands = commands.map(command => `${command} -- --coverage`);
}

const { result } = concurrently(commands, {
  prefixColors: 'auto',
  maxProcesses: 1,
});

try {
  await result;
} catch {
  process.exit(1);
}
