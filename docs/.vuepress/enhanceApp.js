/**
 * Component
 */
import rElement from '@/sdk/rElement';
import rComponent from '@/sdk/rComponent';

/**
 * Validator
 */
import rValidator from '@/sdk/rValidator';

/**
 * vxe-table
 * mixinの中の`document`でエラーが起こるため条件付きインポート
 */
if (typeof document !== 'undefined') {
  var rVxeTable = require('@/sdk/rVxeTable').default;
}

// font-awesome
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas, faThermometerEmpty } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Style
import '@/sdk/element-variables.scss';
import './component-config.scss'; // ガイド向けの追加scss

// テスト用stubKbn
import rKbn from './../../express/stubJson/sdk/rKbn';

/**
 * Vue.mixinが画面表示後に行われると、SPAの画面遷移でエラーとなるため、
 * アプリケーションの実行に必要なVue.mixinが行われる処理のみ画面表示前に処理を完了させる。
 */
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // Component
  rElement.init();
  rComponent.init();
  // VeeValidate
  rValidator.init();
  // font-awesome
  library.add(fas);
  Vue.component('font-awesome-icon', FontAwesomeIcon);

  if (typeof document !== 'undefined') {
    // vxe-table
    rVxeTable.init();
    window.$rKBN = rKbn; // デモ用の区分
    require('@/sdk/helpers');
  }
};
