#!/usr/bin/env node
const { rmSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const resolveSrc = path => resolve(__dirname, `../src${path}`);

rmSync(resolveSrc('/api/demoApi.ts'));

rmSync(resolveSrc('/assets/css/mainBody.css'));
rmSync(resolveSrc('/assets/css/reset.css'));
writeFileSync(resolveSrc('/assets/css/global.css'), ':root {\n  --white-color: #fff;\n}\n', { encoding: 'utf-8' });
let assetsIndex = readFileSync(resolveSrc('/assets/css/index.ts'), { encoding: 'utf-8' });
assetsIndex = assetsIndex.replaceAll("import './reset.css';\nimport './mainBody.css';\n", "import './global.css';\n");
writeFileSync(resolveSrc('/assets/css/index.ts'), assetsIndex, { encoding: 'utf-8' });

rmSync(resolveSrc('/assets/images/logo.png'));
rmSync(resolveSrc('/assets/images/templatePlugins.png'));

rmSync(resolveSrc('/components/Footer'), { recursive: true });
rmSync(resolveSrc('/components/Header'), { recursive: true });
rmSync(resolveSrc('/components/TextInput'), { recursive: true });

rmSync(resolveSrc('/forms/ProfileForm'), { recursive: true });

rmSync(resolveSrc('/hooks/api/useDemoApi.ts'));
let queryKey = readFileSync(resolveSrc('/hooks/api/queryKey.ts'), { encoding: 'utf-8' });
queryKey = queryKey.replaceAll("export const demoQuery = () => ['dataWithDelay'];\n", '');
writeFileSync(resolveSrc('/hooks/api/queryKey.ts'), queryKey, { encoding: 'utf-8' });

rmSync(resolveSrc('/pages/Demo'), { recursive: true });
rmSync(resolveSrc('/pages/Layout'), { recursive: true });
rmSync(resolveSrc('/pages/UnexpectedError'), { recursive: true });
writeFileSync(resolveSrc('/pages/Home/index.ts'), "export { homeRoutes } from './routes';\n", { encoding: 'utf-8' });
writeFileSync(
  resolveSrc('/pages/Home/routes.tsx'),
  "import type { RouteObject } from 'react-router-dom';\n" +
    "import { Home } from './Home';\n" +
    '\n' +
    'export const homeRoutes: RouteObject = {\n' +
    '  index: true,\n' +
    '  element: <Home />,\n' +
    '};\n',
  { encoding: 'utf-8' },
);
writeFileSync(resolveSrc('/pages/Home/Home.tsx'), 'export const Home = () => {\n  return <div>HomePage</div>;\n};\n', {
  encoding: 'utf-8',
});

let appRoutes = readFileSync(resolveSrc('/routing/appRoutes.ts'), { encoding: 'utf-8' });
appRoutes = appRoutes.replaceAll(
  "\n  reactQueryDemo: '/reactQueryDemo',\n  reactHookFormDemo: '/reactHookFormDemo',",
  '',
);
writeFileSync(resolveSrc('/routing/appRoutes.ts'), appRoutes, { encoding: 'utf-8' });
let routes = readFileSync(resolveSrc('/routing/routes.tsx'), { encoding: 'utf-8' });
routes = routes.replaceAll(
  "import { demoRoutes } from '@Front/pages/Demo';",
  "import { homeRoutes } from '@Front/pages/Home';",
);
routes = routes.replaceAll("\nimport { Layout } from '@Front/pages/Layout';", '');
routes = routes.replaceAll("\nimport { UnexpectedError } from 'src/pages/UnexpectedError';", '');
routes = routes.replaceAll(
  'element: <Layout />,\n    children: [demoRoutes],\n    errorElement: <UnexpectedError />,',
  'children: [homeRoutes],',
);
writeFileSync(resolveSrc('/routing/routes.tsx'), routes, { encoding: 'utf-8' });

rmSync(resolveSrc('/types/demoApi.ts'));
rmSync(resolveSrc('/types/profileTypes.ts'));

rmSync(resolveSrc('/ui/atoms/Input'), { recursive: true });
rmSync(resolveSrc('/ui/atoms/Logo'), { recursive: true });
rmSync(resolveSrc('/ui/atoms/NavLink'), { recursive: true });
rmSync(resolveSrc('/ui/molecules/Navigation'), { recursive: true });
rmSync(resolveSrc('/ui/organisms/Footer'), { recursive: true });
rmSync(resolveSrc('/ui/organisms/Header'), { recursive: true });
rmSync(resolveSrc('/ui/organisms/MainContent'), { recursive: true });
rmSync(resolveSrc('/ui/templates/MainTemplate'), { recursive: true });

const packagesJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), { encoding: 'utf-8' }));
const { 'remove:demo': _, ...scripts } = packagesJson.scripts;
packagesJson.scripts = { ...scripts };
writeFileSync(resolve(__dirname, '../package.json'), JSON.stringify(packagesJson, null, 2), { encoding: 'utf-8' });

rmSync(resolve(__dirname, '../scripts'), { recursive: true });

console.info('\nThe demo application has been removed\n');
