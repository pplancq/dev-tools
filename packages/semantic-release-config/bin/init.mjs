#!/usr/bin/env node
import { writeFileSync } from 'node:fs';

console.info('Add semantic-release config in release.config.mjs');

writeFileSync(
  'release.config.mjs',
  `import defaultConfig from '@pplancq/semantic-release-config';

export default {
  ...defaultConfig,
};`,
  {
    encoding: 'utf-8',
  },
);
