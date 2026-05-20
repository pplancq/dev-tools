#!/usr/bin/env node
const { rmSync, readFileSync, writeFileSync, mkdirSync } = require('node:fs');
const { resolve } = require('node:path');

const resolveSrc = path => resolve(__dirname, `../src${path}`);

rmSync(resolveSrc('/demo'), { recursive: true, force: true });

rmSync(resolveSrc('/app/assets/css/mainBody.css'), { force: true });
writeFileSync(resolveSrc('/app/assets/css/global.css'), ':root {\n  --white-color: #fff;\n}\n', { encoding: 'utf-8' });
writeFileSync(resolveSrc('/app/assets/css/index.ts'), "import './reset.css';\nimport './global.css';\n", {
  encoding: 'utf-8',
});

mkdirSync(resolveSrc('/home/domain'), { recursive: true });
writeFileSync(resolveSrc('/home/domain/.gitkeep'), '', { encoding: 'utf-8' });

mkdirSync(resolveSrc('/home/application'), { recursive: true });
writeFileSync(resolveSrc('/home/application/.gitkeep'), '', { encoding: 'utf-8' });

mkdirSync(resolveSrc('/home/infrastructure'), { recursive: true });
writeFileSync(resolveSrc('/home/infrastructure/.gitkeep'), '', { encoding: 'utf-8' });

writeFileSync(resolveSrc('/home/serviceIdentifiers.ts'), 'export const HOME_SERVICES = Object.freeze({});\n', {
  encoding: 'utf-8',
});

writeFileSync(
  resolveSrc('/home/serviceHome.ts'),
  [
    "import { ContainerModule } from 'inversify';",
    '',
    'export const serviceHome: ContainerModule = new ContainerModule(_options => {',
    '  // Register your home context services here',
    '});',
    '',
  ].join('\n'),
  { encoding: 'utf-8' },
);

mkdirSync(resolveSrc('/home/ui/pages/Home'), { recursive: true });
writeFileSync(
  resolveSrc('/home/ui/pages/Home/Home.tsx'),
  [
    'export const Home = () => {',
    '  return (',
    '    <section>',
    '      <h1>Home</h1>',
    '      <p>Your demo context has been removed. Start building your first bounded context from here.</p>',
    '    </section>',
    '  );',
    '};',
    '',
  ].join('\n'),
  { encoding: 'utf-8' },
);

mkdirSync(resolveSrc('/home/ui/routing'), { recursive: true });
writeFileSync(
  resolveSrc('/home/ui/routing/homeAppRoutes.ts'),
  ['export const homeAppRoutes = Object.freeze({', "  home: '/',", '});', ''].join('\n'),
  { encoding: 'utf-8' },
);

writeFileSync(
  resolveSrc('/home/ui/routing/homeRoutes.tsx'),
  [
    "import { Home } from '@Home/ui/pages/Home/Home';",
    "import type { RouteObject } from 'react-router';",
    '',
    'export const homeRoutes: RouteObject = {',
    '  children: [',
    '    {',
    '      index: true,',
    '      element: <Home />,',
    '    },',
    '  ],',
    '};',
    '',
  ].join('\n'),
  { encoding: 'utf-8' },
);

writeFileSync(
  resolveSrc('/app/config/serviceContainer.ts'),
  [
    "import { serviceHome } from '@Home/serviceHome';",
    "import { Container } from 'inversify';",
    '',
    'export const serviceContainer = new Container();',
    '',
    'serviceContainer.load(serviceHome);',
    '',
  ].join('\n'),
  { encoding: 'utf-8' },
);

writeFileSync(
  resolveSrc('/app/routing/routes.tsx'),
  [
    "import { homeRoutes } from '@Home/ui/routing/homeRoutes';",
    "import type { RouteObject } from 'react-router';",
    '',
    'export const routeObject: RouteObject[] = [',
    '  {',
    "    path: '/',",
    '    children: [homeRoutes],',
    '  },',
    '];',
    '',
  ].join('\n'),
  { encoding: 'utf-8' },
);

const tsconfigJson = JSON.parse(readFileSync(resolve(__dirname, '../tsconfig.json'), { encoding: 'utf-8' }));
delete tsconfigJson.compilerOptions.paths['@Demo/*'];
tsconfigJson.compilerOptions.paths['@Home/*'] = ['./src/home/*'];
writeFileSync(resolve(__dirname, '../tsconfig.json'), JSON.stringify(tsconfigJson, null, 2), { encoding: 'utf-8' });

const packagesJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), { encoding: 'utf-8' }));
const { 'remove:demo': _, ...scripts } = packagesJson.scripts;
packagesJson.scripts = { ...scripts };
writeFileSync(resolve(__dirname, '../package.json'), JSON.stringify(packagesJson, null, 2), { encoding: 'utf-8' });

rmSync(resolve(__dirname, '../scripts/removeDemo.cjs'));

console.info('\nThe demo application has been removed\n');
