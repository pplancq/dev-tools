import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNormalize from 'postcss-normalize';

// eslint-disable-next-line import/no-default-export
export default {
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
