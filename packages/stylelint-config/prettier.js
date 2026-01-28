import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// eslint-disable-next-line import/no-default-export
export default {
  extends: ['./index.js', './rules/prettier.js'].map(require.resolve),
};
