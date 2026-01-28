// eslint-disable-next-line import/no-extraneous-dependencies
import concurrently from 'concurrently';

const { result } = concurrently(['npm:lint:*(!fix)'], {
  prefixColors: 'auto',
  maxProcesses: process.env.CI ? 1 : undefined,
});

try {
  await result;
  process.exit(0);
} catch {
  process.exit(1);
}
