const { existsSync } = require('fs');
const dotenvExpand = require('dotenv-expand');
const dotenv = require('dotenv');
const paths = require('./paths');

module.exports = (mode, env = {}) => {
  const isEnvProduction = mode === 'production';
  const isEnvDevelopment = !isEnvProduction;

  [`${paths.dotenv}.${mode}.local`, `${paths.dotenv}.local`, `${paths.dotenv}.${mode}`, paths.dotenv].forEach(
    dotenvFile => {
      if (existsSync(dotenvFile)) {
        dotenvExpand.expand(
          dotenv.config({
            path: dotenvFile,
          }),
        );
      }
    },
  );

  process.env = { ...process.env, ...env };

  const metaEnv = {
    'import.meta.env.MODE': JSON.stringify(mode),
    'import.meta.env.DEV': JSON.stringify(isEnvDevelopment),
    'import.meta.env.PROD': JSON.stringify(isEnvProduction),
  };

  Object.keys(process.env).forEach(key => {
    if (key.startsWith(process.env.ENV_PREFIX ?? 'FRONT_')) {
      metaEnv[`import.meta.env.${key}`] = JSON.stringify(process.env[key]);
    }
  });

  return metaEnv;
};
