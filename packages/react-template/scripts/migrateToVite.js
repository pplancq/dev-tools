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
rmSync(resolve(__dirname, '../webpack.config.js'));
console.info('\ninstall vite package ...');
runCommand(
  `${packageManager} ${packageManager === YARN ? 'add --dev' : 'install --save-dev'} vite vite-plugin-eslint2 vite-plugin-stylelint sass`,
);

writeFileSync(
  resolve(__dirname, '../vite.config.mts'),
  `import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint2'
import stylelintPlugin from 'vite-plugin-stylelint'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgr(),
      eslintPlugin({
        useEslintrc: true,
        emitErrorAsWarning: true,
        cache: false
      }),
      stylelintPlugin({
        emitErrorAsWarning: true,
        cache: false
      })
    ],
    envPrefix: env.ENV_PREFIX ?? 'FRONT_',
    server: {
      port: parseInt(process.env.PORT ?? '3000', 10),
      open: (process.env.BROWSER ?? 'false') === 'true'
    },
    root: resolve(__dirname, 'public'),
    publicDir: resolve(__dirname, 'public'),
    resolve: {
      alias: { '/src': resolve(__dirname, 'src') }
    },
    build: {
      outDir: resolve(__dirname, 'build')
    }
  }
})
`,
  { encoding: 'utf-8' },
);

const packagesJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), { encoding: 'utf-8' }));
const { start, build, 'migrate:vite': _, ...scripts } = packagesJson.scripts;
packagesJson.scripts = { start: 'vite', build: 'vite build', preview: 'vite preview', ...scripts };
writeFileSync(resolve(__dirname, '../package.json'), JSON.stringify(packagesJson, null, 2), { encoding: 'utf-8' });

let indexHTML = readFileSync(resolve(__dirname, '../public/index.html'), { encoding: 'utf-8' });
indexHTML = indexHTML.replace('  </body>', '    <script type="module" src="/src/main.ts"></script>\n  </body>');
writeFileSync(resolve(__dirname, '../public/index.html'), indexHTML, { encoding: 'utf-8' });

rmSync(resolve(__dirname, '../scripts/migrateToVite.js'));

console.info('\nThe application has been migrate to vite');
