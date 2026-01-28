import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// eslint-disable-next-line import/no-default-export
export default {
  extends: ['./rules/baseCss.js', './rules/baseScss.js', './rules/order.js'].map(require.resolve),
};
