const path = require('path');
// キャッシュを作成してビルドを高速化するプラグイン
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ExtractHashWebpackPlugin = require('extract-hash-webpack-plugin').default;
/**
 * ENV
 */
const APP_CONFIG = process.env.APP_CONFIG || 'express'; // API通信方式

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
      ? process.env.BASE_URL + 'web/'
      : '',

  // default: dist
  outputDir: undefined,

  // default: ''
  assetsDir: undefined,

  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    loaderOptions: {
      scss: {},
    },
  },

  /**
   * Webpack設定
   */
  configureWebpack: {
    resolve: {
      alias: {
        APP_CONFIG: path.join(__dirname, `/src/sdk/config/${APP_CONFIG}.js`),
      },
    },
    optimization: {
      // chunkをサイズに応じて自動でsplit
      splitChunks: {
        minSize: 300000,
        maxSize: 500000,
      },
    },
    //SGS追記 デバッグできない箇所が発生するため
    devtool:
      process.env.NODE_ENV === 'production' //|| process.env.NODE_ENV === 'staging'
        ? ''
        : 'source-map',
    plugins: []
      .concat([
        new HardSourceWebpackPlugin(),
        new ExtractHashWebpackPlugin({
          dest: 'dist',
          filename: 'appver.json',
        }),
      ]),
  },

  /**
   * 開発用サーバの設定
   */
  devServer: {
    host: 'localhost',
    port: 8888,
    // APIアクセスをProxyさせる
    proxy: {
      //RFWのサーバー側と疎通する場合は下記をtomcatの起動ポートに合わせる。
      '/rest': {
         target: 'http://localhost:8080/',
        //target: 'http://localhost:3000/',
        //target: 'http://10.17.48.227:50000/',
      },
    },
  },

  /**
   * IE11対応
   */
  transpileDependencies: ['strip-ansi', 'ansi-regex', 'vuex'],

  pluginOptions: {
    /**
     * stubJsonを返すExpressサーバの設定
     */
    express: {
      shouldServeApp: true,
      serverDir: './express',
    },
  },
};
