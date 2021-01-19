'use strict'
const path = require('path')
const PRODENV = require('./prod.env')
const domain = PRODENV.BASE_URL.replace(/\"/g,"");
const prefix = PRODENV.API_PREFIX.replace(/\"/g,"");

let proxyTable = {};
let pathRewrite = {};
pathRewrite[prefix] = "";

proxyTable[prefix] = {
  target: domain + prefix,
  changeOrigin: true,
  pathRewrite: pathRewrite
}

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/spweb': {
          target: 'http://hj.gk0312.cn:8011/spweb/',
          // target: 'http://sp.gk0312.cn/spweb/',
          changeOrigin:true,
          pathRewrite:{
              '/spweb': ''
          }
      }
    },
    // // Various Dev Server settings
    // host: 'http://ssp22.gk0312.cn', // can be overwritten by process.env.HOST
    // port: 8012, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

    // host: 'http://ssp2.gk0312.cn', // can be overwritten by process.env.HOST
    // port: 8010, // 

    // host: 'https://cyry.gk0312.cn', // can be overwritten by process.env.HOST
    // port: 80, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

    host:'localhost',
    port:8084,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: domain + '/', //'./'

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
