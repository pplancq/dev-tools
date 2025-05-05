#!/usr/bin/env node
const { execSync } = require('child_process');
const { rmSync, writeFileSync, readFileSync } = require('fs');
const { resolve } = require('path');

const NPM = 'npm';
const YARN = 'yarn';
const PNPM = 'pnpm';

const runCommand = (command, options = { stdio: 'inherit' }) => {
  try {
    execSync(command, options);
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    process.exit(-1);
  }
};

const getPackageManager = () => {
  switch (true) {
    case process.env.npm_config_user_agent.includes(YARN):
      return YARN;
    case process.env.npm_config_user_agent.includes(PNPM):
      return PNPM;
    default:
      return NPM;
  }
};

const packageManager = getPackageManager();

console.info('\nremove webpack ...');
runCommand(`${packageManager} remove @pplancq/webpack-config webpack webpack-cli webpack-dev-server`);
rmSync(resolve(__dirname, '../webpack.config.cjs'));
console.info('\ninstall vite package ...');
runCommand(
  `${packageManager} ${packageManager === YARN ? 'add --dev' : 'install --save-dev'} vite vite-plugin-eslint2 vite-plugin-stylelint sass`,
);

writeFileSync(
  resolve(__dirname, '../vite.config.mts'),
  `import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint2'
import stylelintPlugin from 'vite-plugin-stylelint'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import packageJson from './package.json'

const resolveModule = (module: string) => {
  try {
    require.resolve(module);
    return true;
  } catch {
    return false;
  }
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const disableStyleLintPlugin =
    (env.DISABLE_STYLELINT_PLUGIN ?? 'false') === 'true' || !resolveModule('stylelint');
  const disableEsLintPlugin =
   (env.DISABLE_ESLINT_PLUGIN ?? 'false') === 'true' || !resolveModule('eslint');
  const publicUrl = env.PUBLIC_URL ?? packageJson.homepage ?? '/';
  const publicPath = mode === 'development'
    ? '/'
    : new URL(publicUrl.endsWith('/') ? publicUrl : \`\${publicUrl}/\`, 'http://localhost').pathname;

  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgr(),
      !disableEsLintPlugin && eslintPlugin({
        emitErrorAsWarning: true,
        cache: false
      }),
      !disableStyleLintPlugin && stylelintPlugin({
        emitErrorAsWarning: true,
        cache: false
      })
    ].filter(Boolean),
    envPrefix: env.ENV_PREFIX ?? 'FRONT_',
    base: publicPath,
    server: {
      port: parseInt(env.PORT ?? '3000', 10),
      open: (env.BROWSER ?? 'false') === 'true'
    },
    build: {
      sourcemap: (env.DISABLE_SOURCE_MAP ?? 'false') !== 'true',
      outDir: 'build',
    },
  }
})
`,
  { encoding: 'utf-8' },
);

let tsconfig = readFileSync(resolve(__dirname, '../tsconfig.json'), { encoding: 'utf-8' });
tsconfig = tsconfig.replace('@pplancq/webpack-config', 'vite/client');
writeFileSync(resolve(__dirname, '../tsconfig.json'), tsconfig, { encoding: 'utf-8' });

const packagesJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), { encoding: 'utf-8' }));
const { start, build, 'migrate:vite': a, 'start:mock': b, ...scripts } = packagesJson.scripts;
packagesJson.scripts = {
  start: 'vite',
  build: 'vite build',
  preview: 'vite preview',
  'start:mock': 'vite --mode mock',
  ...scripts,
};
writeFileSync(resolve(__dirname, '../package.json'), JSON.stringify(packagesJson, null, 2), { encoding: 'utf-8' });

let indexHTML = readFileSync(resolve(__dirname, '../public/index.html'), { encoding: 'utf-8' });
indexHTML = indexHTML.replace('  </body>', '    <script type="module" src="/src/main.ts"></script>\n  </body>');
writeFileSync(resolve(__dirname, '../index.html'), indexHTML, { encoding: 'utf-8' });
rmSync(resolve(__dirname, '../public/index.html'));

let envFile = readFileSync(resolve(__dirname, '../.env'), { encoding: 'utf-8' });
envFile = envFile.replace(
  `

# Specify the type of configuration to use with ESLint.
# - 'eslintrc' is the classic configuration format available in most ESLint versions.
# - 'flat'  is the new format introduced in ESLint 8.21.0.
# Default is 'eslintrc'
ESLINT_CONFIG_TYPE='flat'`,
  '',
);
writeFileSync(resolve(__dirname, '../.env'), envFile, { encoding: 'utf-8' });

writeFileSync(
  resolve(__dirname, '../.env.mock'),
  `FRONT_MOCK_ENABLE=true
`,
  { encoding: 'utf-8' },
);

rmSync(resolve(__dirname, '../scripts/migrateToVite.cjs'));

console.info('\nThe application has been migrate to vite');
