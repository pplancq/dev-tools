#!/usr/bin/env node
import { writeFileSync } from 'node:fs';

console.info('Add eslint config in eslint.config.mjs');

writeFileSync(
  'eslint.config.mjs',
  `import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enableReact: true,
  enableVitest: true,
});
`,
  {
    encoding: 'utf-8',
  },
);
