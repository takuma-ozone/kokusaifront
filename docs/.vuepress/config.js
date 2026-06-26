const path = require('path');

function resolve(dir) {
  const p = path.join(__dirname, dir);
  return p;
}

module.exports = {
  port: '8889', // 開発時のポート番号
  configureWebpack: {
    resolve: {
      // アプリケーションのscss依存関係を解決するために`'.scss'`を追加しました。
      extensions: ['.js', '.vue', '.json', '.scss'],
      // アプリケーションのモジュール関係を解決するためにアプリケーションのnode_modulesを参照させます。
      modules: [resolve('../../node_modules')],
      alias: {
        // DEMOを動的に起動させるために`vue`に`vue.esm.js`を利用させます。
        vue: resolve('../../node_modules/vue/dist/vue.esm.js'),
        // アプリケーションの`@`依存関係解決の設定をします。
        '@': resolve('../../src'),
      },
    },
  },
  scss: {
    // アプリケーションのscss importを解決させるための設定をします。
    includePaths: [resolve('../../node_modules')],
  },
  title: '高速開発FW - APIガイド',
  description: '高速開発FWでの開発を行う上での、コンポーネント・API仕様',
  dest: 'docs/.vuepress/dist',
  markdown: {
    // 行番号。表示すると狭いので削除したほうがいいならこの記述を削除
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3, 4, 5, 6],
    },
  },
  locales: {
    '/': {
      // lang属性のデフォルトを`ja`に変更
      lang: 'ja',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP`,
      },
    ],
    ['link', { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/assets/favicon.ico' }],
  ],
  themeConfig: {
    sidebar: 'auto',
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Components', link: '/frontend/components/' },
      { text: 'Mixins', link: '/frontend/mixins/' },
      {
        text: 'Validations',
        items: [
          { text: 'TOP', link: '/frontend/validations/index' },
          { text: 'Rules', link: '/frontend/validations/availableRules' },
        ],
      },
      { text: 'Filters', link: '/frontend/filters/' },
      { text: 'Tips', link: '/frontend/tips/' },
      {
        text: 'Libraries',
        items: [
          { text: 'Vue Router', link: '/frontend/library/router' },
          { text: 'Vuex', link: '/frontend/library/vuex' },
        ],
      },
      {
        text: 'link',
        items: [
          { text: 'Vue.js', link: 'https://jp.vuejs.org/v2/guide/' },
          { text: 'Element', link: 'https://element.eleme.io/#/en-US' },
        ],
      },
    ],
  },
  plugins: [],
};
