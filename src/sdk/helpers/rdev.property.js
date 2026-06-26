/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

import $rHttp from './rdev.http';
import $rConst from './rdev.constant';
import $rPath from './rdev.utils.path';
import $rLog from './rdev.log';

/**
 * @file RDEV プロパティモジュール
 * @author nagamachi
 */
const $rProperty = {
  property: null,

  /**
   * プロパティ情報読み込み
   */
  init() {
    return $rHttp
      .get('/core/prop/system', {
        isReject: true,
      })
      .then(result => {
        if (result.data.at !== '') {
          sessionStorage.setItem('access_token', result.data.at);
        }

        this.property = result.data.data;
        // ローカルストレージに値を保存
        localStorage.removeItem($rConst.COOKIE_KEY_PROP);
        localStorage.setItem($rConst.COOKIE_KEY_PROP, JSON.stringify(this.property));
      });
  },

  /**
   * システムプロパティの情報を取得します。
   *
   * @param {string} key プロパティキー
   */
  get(key) {
    if (!key) {
      $rLog.error('rdev.property.js - 取得するプロパティキーを指定してください。');
      return;
    }

    if (!this.property) {
      // localStorageのpropertyをロード
      const property = JSON.parse(localStorage.getItem($rConst.COOKIE_KEY_PROP));
      if (!property) {
        this.load();
      } else {
        this.property = property;
      }
    }
    return this.property[key];
  },
};

export default $rProperty;
