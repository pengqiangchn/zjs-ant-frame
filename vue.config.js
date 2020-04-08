const path = require('path');

const getPath = (dir) => {
  return path.join(__dirname, dir);
};

const vueConfig = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@c', getPath('src/components'));
    config.resolve.alias.set('@v', getPath('src/views'));
    config.resolve.alias.set('@api', getPath('src/api'));
  },
  devServer: {
    port: 3010,
    // proxy: {
    //   '/api': {
    //     target: 'http:www.baidu.com',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  // transpileDependencies: ['']
};

module.exports = vueConfig;
