/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

import { RDEV } from './rdev.namespace';
import $rHttp from './rdev.http';
import $rLog from './rdev.log';

/**
 * @file RDEV 区分取得モジュール
 * @author nagamachi
 */
const $rKbn = {
  /**
   * 区分値生成
   */
  init() {
    return $rHttp
      .get('/service/clientCache/rKBN.json', {
        isReject: true,
      })
      .then(response => {
        if (response.data.at !== '') {
          // sessionStorage.setItem('access_token', response.data.at);
        }
        this.callbackForClientCache(response.data);
      });
  },
  /**
   * クライアントキャッシュ生成ロジックコールバック関数
   *
   * @param {string}   response     レスポンス
   */
  callbackForClientCache(response) {
    /*
     * 結果生成
     */
    const responseData = response && response.data ? response.data : '';
    const _alias = '$rKBN';

    // 既にキャッシュされている場合、ログを出力する
    if (RDEV.cache.hasOwnProperty(_alias)) {
      $rLog.warn('[RDEV] override clientCacheData[' + _alias + ']');
    }

    /**
     * 取得した区分値をグローバル変数に登録する
     */
    RDEV.cache[_alias] = responseData;
    window[_alias] = RDEV.cache[_alias];

    /**
     * callback関数を実行
     */
    if (typeof follow === 'function') {
      follow(responseData);
    }
  },

  /**
   * 区分値情報取得（ID）<br>
   * 指定された区分、区分値情報が存在しない場合はnullを返却する。
   *
   * @param {string} kbnId       区分ID
   * @param {string} kbntiUniqName     区分値ユニーク名
   * @param {string} [returnFieldName] 返却フィールド名
   * @returns {string} returnFiled returnFieldNameが指定された場合。
   *           /{object} kbntiInfo  returnFieldNameが指定されない場合。
   */
  getKbntiInfoByName(kbnId, kbntiUniqName, returnFieldName) {
    if (!kbnId || !kbntiUniqName) throw new Error('[RDEV] kbnId & kbntiUniqName must be entered');
    /*
     * 区分値情報取得
     */
    return this.getKbntiInfo(
      kbnId,
      function(kbnInfo) {
        const _kbntiUniqName = kbntiUniqName; // パフォーマンス考慮し、ローカル変数に設定
        for (const key in kbnInfo) {
          if (kbnInfo[key].KBNTI_UNIQ_NM === _kbntiUniqName) {
            return kbnInfo[key];
          }
        }
        return null;
      },
      returnFieldName
    );
  },

  /**
   * 区分値情報取得（ユニーク名）<br>
   * 指定された区分、区分値情報が存在しない場合はnullを返却する。
   *
   * @param {string} kbnId       区分ID
   * @param {string} kbntiId           区分値ID
   * @param {string} [returnFieldName] 返却フィールド名
   * @returns {string} returnFiled returnFieldNameが指定された場合。
   *           /{object} kbntiInfo  returnFieldNameが指定されない場合。
   */
  getKbntiInfoById(kbnId, kbntiId, returnFieldName) {
    if (!kbnId || !kbntiId) throw new Error('[RDEV] kbnId & kbntiId must be entered');
    /*
     * 区分値情報取得
     */
    return this.getKbntiInfo(
      kbnId,
      function(kbnInfo) {
        return kbnInfo[kbntiId];
      },
      returnFieldName
    );
  },

  /**
   * kbntiIdによる区分値名取得
   * @param {string} kbnId       区分ID
   * @param {string} kbntiId           区分値ID
   * @returns {string} 区分値名
   */
  getName(kbnId, kbntiId) {
    return this.getKbntiInfoById(kbnId, kbntiId, 'KBNTI_NM1');
  },

  /**
   * kbntiUniqNmによる区分値名取得
   * @param {string} kbnId       区分ID
   * @param {string} kbntiUniqName     区分値ユニーク名
   * @returns {string} 区分値名
   */
  getNameBy(kbnId, kbntiUniqName) {
    return this.getKbntiInfoByName(kbnId, kbntiUniqName, 'KBNTI_NM1');
  },

  /**
   * 区分値ID取得
   * @param {string}  kbnId         区分ID
   * @param {string} kbntiUniqName     区分値ユニーク名
   * @returns {string} 区分値ID
   */
  getId(kbnId, kbntiUniqName) {
    return this.getKbntiInfoByName(kbnId, kbntiUniqName, 'KBNTI_ID');
  },

  /**
   * 区分値情報取得
   * @param {string}   kbnId         区分ID
   * @param {function} getKbntiInfoHandler 区分値情報取得関数
   * @param {string}   [returnFieldName]   返却フィールド名
   * @returns {string} returnFiled returnFieldNameが指定された場合。
   *           /{object} kbntiInfo  returnFieldNameが指定されない場合。
   */
  getKbntiInfo(kbnId, getKbntiInfoHandler, returnFieldName) {
    /*
     * 区分値取得
     */
    const kbnInfo = $rKBN[kbnId];
    if (!kbnInfo) {
      $rLog.error('[RDEV] kbnId: ' + kbnId + ' dose not exist');
      return null;
    }
    /*
     * 返却
     */
    // 返却フィールド名が指定されていない場合は区分値情報全てを返却
    // 指定されている場合は指定されたフィールドの値のみ返却
    // eslint-disable-next-line no-useless-call
    const kbntiInfo = getKbntiInfoHandler.call(null, kbnInfo);
    if (!kbntiInfo) {
      $rLog.error('[RDEV] kbnInfo dose not exist');
      return null;
    }

    if (!returnFieldName) return kbntiInfo;
    return kbntiInfo[returnFieldName];
  },

  /**
   * 区分情報取得
   * @param {string}   kbnId  区分ID
   * @returns {object} 区分情報
   */
  getKbnInfoById(kbnId) {
    const kbnInfo = $rKBN[kbnId];
    if (!kbnInfo) {
      $rLog.error('[RDEV] kbnId: ' + kbnId + ' dose not exist');
      return null;
    }
    return kbnInfo;
  },
};

export default $rKbn;
