/**
 * Vue.jsと関連ライブラリインポート
 */
import 'core-js'; // IE11対応
import 'regenerator-runtime/runtime'; // IE11対応
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueProgressBar from 'vue-progressbar';
import store from './store';
import '@/sdk/helpers'; // 共通Filters, Mixinのインポート
import rValidator from './sdk/rValidator';
import rElement from './sdk/rElement';
import rComponent from './sdk/rComponent';
import rVxeTable from './sdk/rVxeTable';
import { i18n } from './sdk/rVxeTable'; // vxe-tableの日本語化対応
import $sConstEx from './sdk/sConstEx';
import $sMsg from './sdk/sMsg';

/**
 * その他ライブラリインポート
 */
import './sdk/rAxios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './normalize.css';
import './style.scss';

/**************
 * rdev library
 **************/
import $rMsg from './sdk/helpers/rdev.msg';
import $rProperty from './sdk/helpers/rdev.property';
import $sUtils from './sdk/sUtils';

// Element UI
rElement.init();
// rdev component
rComponent.init();
// VeeValidate
rValidator.init();
// VXETable
rVxeTable.init();
// VueProgressBar
Vue.use(VueProgressBar);

// font-awesome
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/**
 * ページタイトルの更新
 */
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' | ' + $sConstEx.DISPLAY_TITLE;
  }
});

window.onerror = function(msg, file, line, column, err) {
  router.push({ path: '/error' });
};

/**
 * Vueインスタンス生成
 * -> 初めにログインと、区分・メッセージ・プロパティの取得を行う
 */
//区分取得処理がある場合はここに記述
$rMsg.init()
  .then(() => $rProperty.init())
  .catch(e => {
    console.error($rMsg.get($sMsg.INIT_START_UP_ERROR));
  })
  .then(() => {
    // Vueインスタンス生成

    new Vue({
      i18n,
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  });
