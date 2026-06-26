/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

/**
 * @file RDEV 全般的なユーティリティ・モジュール
 * @author nagamachi
 */
const $rUtils = {
  /**
   * 型判定：オブジェクト
   */
  isObject(target) {
    return Object.prototype.toString.call(target).slice(8, 14) === 'Object';
  },

  /**
   * 型判定：関数
   */
  isFunction(target) {
    return typeof target === 'function';
  },

  /**
   * ブラウザがIE11であるか判定します。
   *
   * @return {boolean} ブラウザがIE11である場合には true、そうでない場合には false
   */
  isIE11() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('trident/7') !== -1;
  },

  /**
   * ブラウザ判定(Edge)
   *
   * @returns {boolean} 判定結果
   */
  isEdge() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('edge') !== -1;
  },

  /**
   * ブラウザ判定(chrome)
   *
   * @returns {boolean} 判定結果
   */
  isChrome() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1 && ua.indexOf('opr') === -1;
  },

  /**
   * ブラウザ判定(Safari)
   *
   * @returns {boolean} 判定結果
   */
  isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
  },

  /**
   * 数字を金額表記（三桁ごとにカンマ挿入）に変換します。
   *
   * @param {number} amount 金額
   * @return {string} 成形後の金額文字列
   */
  formatScreenNum(amount) {
    if (amount !== null && amount !== '') {
      const convVal = String(amount).replace(/,/g, '');
      const num = Number(convVal);
      if (num.toString() !== 'NaN') {
        return num.toLocaleString();
      }
    }
    return amount;
  },

  /**
   * 金額表記（三桁ごとにカンマ）数字をカンマ抜きの数字に変換します。
   *
   * @param {number} amount 金額（カンマつき）
   * @return {string} 成形後の金額文字列
   */
  formatSystemNum(amount) {
    if (amount !== null && amount !== '') {
      const convVal = String(amount).replace(/,/g, '');
      const num = Number(convVal);
      if (num.toString() !== 'NaN') {
        return convVal;
      }
    }
    return amount;
  },

  /**
   * Object内に与えられたpathが存在するかを判定する
   * 存在する場合はtrue, 存在しない場合はfalseを返す
   * 深い階層の場合でも判定できる
   *
   * @param {Object} obj
   * @param {String} path
   */
  lookup(obj, path) {
    const keys = path.split('.');
    for (const k in keys) {
      const key = keys[k];

      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (keys.length > 1) {
        return this.lookup(obj[key], keys.splice(1).join('.'));
      }
      return true;
    }
  },
};

export default $rUtils;
