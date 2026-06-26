// https://qiita.com/seta999/items/4dc1f52f2fbe39da6dc7
module.exports = {
  root: true,
  parser: 'vue-eslint-parser', // parserをvue用に指定
  parserOptions: {
    parser: 'babel-eslint', // es6用のparserはoptionsの仲へ
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },

  plugins: ['vue', 'prettier'],

  extends: [
    'eslint:recommended', // eslintの推奨ルール
    'plugin:vue-libs/recommended', // eslint-plugin-vueを推奨設定でenable
    'prettier',
    'prettier/vue', // eslint-config-prettierのvue用ルールを適用
  ],

  // add your custom type here
  rules: {
    'no-plusplus': 'off', // for文だけでなく、++は使いたかった
    'func-names': 'off', // 無名関数を許可
    'vue/component-name-in-template-casing': 'off', // html部分をPascalにするかkebabにするか
    'no-console': [
      'warn', // console表示はwarning
      {
        allow: ['info', 'warn', 'error'], // FWによるconsole表示はOK
      },
    ],
    'no-undef': 'off',
    'no-unused-vars': ['warn'], // 使用されない変数宣言
    'no-dupe-keys': 'off', // 非推奨のキー名
    'vue/no-dupe-keys': 'off', // 非推奨のキー名(Vue)
    'doctype-first': 'off', // HTMLのdoctype-first
    'spaced-comment': 'off', // コメントのエラーを解消
  },
};
