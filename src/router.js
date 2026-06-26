import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';

/**
 * 表示する画面のインポート
 */
import Home from './views/Home.vue';

//sample
// import SAMPLE from './views/sample/SAMPLE/SAMPLE.vue';
// import SAMPLECHILD from './views/sample/SAMPLECHILD/SAMPLECHILD.vue';
import SSMISRD02 from './views/SSM/SSMISRD02/SSMISRD02.vue';
import SSMISRD03 from './views/SSM/SSMISRD03/SSMISRD03.vue';
import SSMISRD04 from './views/SSM/SSMISRD04/SSMISRD04.vue';
import SSMISRD05 from './views/SSM/SSMISRD05/SSMISRD05.vue';
import SSMISRD06 from './views/SSM/SSMISRD06/SSMISRD06.vue';
import SSMISRD07 from './views/SSM/SSMISRD07/SSMISRD07.vue';
//import SSMISSD01 from './views/SSM/SSMISSD01/SSMISSD01.vue';
import SSMISSD02 from './views/SSM/SSMISSD02/SSMISSD02.vue';
import SSMISSD03 from './views/SSM/SSMISSD03/SSMISSD03.vue';
import SSMISSD04 from './views/SSM/SSMISSD04/SSMISSD04.vue';
import SSMISSD05 from './views/SSM/SSMISSD05/SSMISSD05.vue';
import SSMISSD06 from './views/SSM/SSMISSD06/SSMISSD06.vue';
import SSMISSD07 from './views/SSM/SSMISSD07/SSMISSD07.vue';
import SSMISSD08 from './views/SSM/SSMISSD08/SSMISSD08.vue';
import SSMISSD09 from './views/SSM/SSMISSD09/SSMISSD09.vue';

//共通ページ
import Login from './views/common/Login.vue';
// import Logout from './views/common/Logout.vue';
import ErrorPage from './views/common/ErrorPage.vue';
import SessionTimeout from './views/common/SessionTimeout.vue';
import BrowserError from './views/common/BrowserError.vue';

import $store from './store';
import $sUtilsEx from './sdk/sUtilsEx.js';

Vue.use(VueRouter);

const router = new VueRouter({
  base:
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
      ? process.env.BASE_URL + 'web/'
      : '',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'トップページ' },
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Login' },
      beforeEnter: (to, from, next) => checkLogin(next),
    },
    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: Logout,
    //   meta: { title: 'Logout' },
    // },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage,
      meta: { title: 'システムエラー' },
    },
    {
      path: '/timeout',
      name: 'timeout',
      component: SessionTimeout,
      meta: { title: 'セッションタイムアウト' },
    },
    {
      path: '/browserError',
      name: 'browserError',
      component: BrowserError,
      meta: { title: 'BrowserError' },
    },
    {
      path: '*',
      redirect: '/error',
    },
    // {
    //   path: '/SAMPLE',
    //   name: 'SAMPLE',
    //   component: SAMPLE,
    //   meta: { title: 'サンプルページ' },
    // },
    // {
    //   path: '/SAMPLE/SAMPLECHILD',
    //   name: 'SAMPLECHILD',
    //   component: SAMPLECHILD,
    //   meta: { title: '子画面サンプル' },
    //   props: true,
    // },
    {
      path: '/SSMISSD02',
      name: 'SSMISSD02',
      component: SSMISSD02,
      meta: { title: '出荷CSV取込' },
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      path: '/SSMISSD03',
      name: 'SSMISSD03',
      component: SSMISSD03,
      meta: { title: '出荷一覧' },
      props: true,
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },

    {
      path: '/SSMISSD03/SSMISSD04',
      name: 'SSMISSD04',
      component: SSMISSD04,
      meta: { title: '出荷登録更新' },
      props: true,
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      //梱包情報
      path: '/SSMISSD03/SSMISSD04/SSMISSD05',
      component: SSMISSD05,
      meta: { title: '梱包情報設定' },
      name: 'SSMISSD05',
      props: true,
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      //品目情報
      path: '/SSMISSD03/SSMISSD04/SSMISSD06',
      component: SSMISSD06,
      meta: { title: '品目情報設定' },
      name: 'SSMISSD06',
      props: true,
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      path: '/SSMISSD03/SSMISSD04/SSMISSD07',
      name: 'SSMISSD07',
      component: SSMISSD07,
      meta: { title: '関係者情報設定' },
      props: true,
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      path: '/SSMISSD08',
      name: 'SSMISSD08',
      component: SSMISSD08,
      meta: { title: '配送設定' },
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      path: '/SSMISSD09',
      name: 'SSMISSD09',
      component: SSMISSD09,
      meta: { title: '出荷人情報設定' },
      beforeEnter: (to, from, next) => checkToken(next, 0),
    },
    {
      path: '/signup',
      name: 'SSMISRD02',
      component: SSMISRD02,
      meta: { title: '利用申込入力' },
      beforeEnter: (to, from, next) => checkSignUp(next),
    },
    {
      path: '/signup/confirm',
      name: 'SSMISRD03',
      component: SSMISRD03,
      meta: { title: '入力内容確認' },
      beforeEnter: (to, from, next) => checkToken(next, 1),
    },
    {
      path: '/signup/complete',
      name: 'SSMISRD05',
      component: SSMISRD05,
      meta: { title: '申込完了' },
      beforeEnter: (to, from, next) => checkToken(next, 1),
    },
    {
      path: '/signup/error',
      name: 'SSMISRD04',
      component: SSMISRD04,
      meta: { title: '申込エラー' },
      beforeEnter: (to, from, next) => checkToken(next, 1),
    },
    {
      path: '/signup/autherror',
      name: 'SSMISRD06',
      component: SSMISRD06,
      meta: { title: 'ログインエラー' },
    },
    {
      path: '/emergency',
      name: 'SSMISRD07',
      component: SSMISRD07,
      meta: { title: 'ログイン' },
      beforeEnter: (to, from, next) => checkEmergencyLogin(next),
    },
  ],
});

Vue.use(VueGtag, {
    config: {
        id: process.env.VUE_APP_UA_ID,
    },
    includes: [
        { id: process.env.VUE_APP_GA_ID },
    ],
}, router);

const checkBefore = function(next) {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('edg') === -1 && userAgent.indexOf('chrome') === -1) {
    next({ name: 'browserError' });
  }
};

const checkToken = function(next, checkToken) {
  checkBefore(next);
  const token = $store.getters.getSessionToken;
  if (token === checkToken) {
    next();
  } else {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
      next({ name: 'error' });
    } else {
      // 開発環境ではセッショントークンチェックをスルーする
      next();
    }
  }
};

const checkLogin = async function(next) {
  checkBefore(next);
  const response = await $sUtilsEx.checkUser();
  const url = await response.data.data.response_url;
  if (url !== 'login') {
    next({ name: 'error' });
  } else {
    next();
  }
};

/**
 * ログインチェック
 */
const checkSignUp = async function(next) {
  checkBefore(next);
  const response = await $sUtilsEx.checkUser();
  const url = await response.data.data.response_url;
  if (url !== 'signup' && url !== 'autherror') {
    next({ name: 'error' });
  } else {
    next();
  }
};

const checkEmergencyLogin = async function(next) {
  checkBefore(next);
  const response = await $sUtilsEx.checkUser();
  const url = await response.data.data.response_url;
  if (url !== 'emergency' && url !== 'autherror') {
    next({ name: 'error' });
  } else {
    next();
  }
};

export default router;
