const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  ident: 'postcss',
  config: false,
  plugins: [
    postcssFlexbugsFixes,
    postcssPresetEnv({
      stage: 4,
    }),
    postcssNormalize,
  ],
};
