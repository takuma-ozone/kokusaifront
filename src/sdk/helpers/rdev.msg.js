/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

import $rHttp from './rdev.http';
import $rConst from './rdev.constant';
import $rStringUtils from './rdev.utils.string';
import $rLog from './rdev.log';

/**
 * @file RDEV プロパティモジュール
 * @author nagamachi
 */
const $rMessage = {
  message: null,

  /**
   * メッセージプロパティの情報を読込みます。
   */
  init() {
    return $rHttp
      .get('/core/message/list', {
        isReject: true,
      })
      .then(result => {
        if (result.data.at !== '') {
          sessionStorage.setItem('access_token', result.data.at);
        }

        this.message = result.data.data;
        // ローカルストレージに値を保存
        localStorage.removeItem($rConst.COOKIE_KEY_MESSAGE);
        localStorage.setItem($rConst.COOKIE_KEY_MESSAGE, JSON.stringify(this.message));
      });
  },

  /**
   * メッセージの情報を取得します。
   *
   * @param {number} code メッセージコード
   * @param {string} ins1 埋め込み文字列１
   * @param {string} ins2 埋め込み文字列２
   * @param {string} ins3 埋め込み文字列３
   * @param {string} ins4 埋め込み文字列４
   * @param {string} ins5 埋め込み文字列５
   * @returns {string} メッセージ
   */
  get(code, ins1, ins2, ins3, ins4, ins5) {
    if (!code) {
      $rLog.error('rdev.msg.js - 取得するメッセージコードを指定してください。');
      return;
    }

    if (!this.message) {
      // localStorageのmessageをロード
      const message = JSON.parse(localStorage.getItem($rConst.COOKIE_KEY_MESSAGE));
      if (!message) {
        this.loadMessage();
      } else {
        this.message = message;
      }
    }
    return $rStringUtils.insert(this.message[code], ins1, ins2, ins3, ins4, ins5);
  },
};

export default $rMessage;
