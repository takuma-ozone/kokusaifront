import Vue from 'vue';

import $rHttp from './rdev.http';
import $rKbn from './rdev.kbn';
import $rProperty from './rdev.property';
import $rMessage from './rdev.msg';
import $rUtils from './rdev.utils';
import $rStringUtils from './rdev.utils.string';
import $rArrayUtils from './rdev.utils.array';
import $rDateUtils from './rdev.utils.date';
import $rPath from './rdev.utils.path';

//SGS追記
import $sAccess from '../sAccess';
import $sUtils from '../sUtils';
import $sMsg from '../sMsg';
import _ from 'lodash';
import $sUtilsEx from '../sUtilsEx';
import $sMsgEx from '../sMsgEx';
import $sConst from '../sConst';
import $sConstEx from '../sConstEx';

document.title = $sConstEx.DISPLAY_TITLE;
// メッセージ
const msgFunc = {
  $msg: $rMessage.get,
};

// プロパティ
const propertyFunc = {
  $property: $rProperty.get,
};

// フィルタの登録
const filterFunc = Object.assign({}, $rDateUtils);

for (const name in Object.assign({}, filterFunc)) {
  Vue.filter(name, filterFunc[name]);
}
Vue.filter('formatSystemNum', $rUtils.formatSystemNum);
Vue.filter('formatScreenNum', $rUtils.formatScreenNum);

// ユーティリティのnamespace
const utilComputed = Object.assign({}, $rUtils, $rStringUtils, $rArrayUtils, $rDateUtils);
// ミックスインする共通メソッド群
const mixinMethods = Object.assign({}, msgFunc, propertyFunc);

Vue.mixin({
  computed: {
    $http() {
      return $rHttp;
    },
    $kbn() {
      return $rKbn;
    },
    $util() {
      return utilComputed;
    },
    $path() {
      return $rPath;
    },
    //SGS追記
    $sAccess() {
      return $sAccess;
    },
    $sUtils() {
      return $sUtils;
    },
    $sMsg() {
      return $sMsg;
    },
    $sUtilsEx() {
      return $sUtilsEx;
    },
    $sMsgEx() {
      return $sMsgEx;
    },
    _() {
      return _;
    },
    $sConst() {
      return $sConst;
    },
  },
  methods: mixinMethods,
});
