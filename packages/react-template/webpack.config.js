// const { ModuleFederationPlugin } = require('webpack').container;

// const deps = require('./package.json').dependencies;

module.exports = {
  extends: [require.resolve('@pplancq/webpack-config')],
  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: 'reactTemplate',
  //     filename: 'js/remoteEntry.js',
  //     remotes: {},
  //     exposes: {
  //       './App': './src/bootstrap.tsx',
  //     },
  //     shared: {
  //       react: { singleton: true, requiredVersion: deps.react },
  //       'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
  //       'react-router-dom': { singleton: true, requiredVersion: deps['react-router-dom'] },
  //     },
  //   }),
  // ],
};
