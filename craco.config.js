const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.resolve(__dirname, dir);

const cracoConfig = {
  webpack: {
    alias: {
      '@': resolve('src'),
      api: resolve('src/api'),
      router: resolve('src/router'),
      components: resolve('src/components'),
      pages: resolve('src/pages'),
      store: resolve('src/store')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};

module.exports = cracoConfig;
