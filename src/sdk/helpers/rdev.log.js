/* eslint-disable no-console */
/*!
 * r-Suite JavaScript Library
 *
 * Copyright 2014, Sagawa Express Co., Ltd.  All Rights Reserved.
 * Copyright(C) 2014- Sagawa Computer System Co.,Ltd.  All rights reserved.
 * Copyright(C) 2014 by Future Architect, Inc. Japan. All rights reserved.
 */

/**
 * @file ログ出力モジュール
 * @author nagamachi
 */
const $rLog = {
  /**
   * 出力モード
   * ture：出力する／false：出力しない
   *
   * @type {boolean}
   */
  mode: true,

  /**
   * ログ出力
   * consoleオブジェクトが存在しない場合、アラート表示する。
   *
   * @param {String} message 表示内容
   */
  log(message) {
    if (this.mode) {
      if (typeof window.console === 'undefined') {
        alert(message);
      } else {
        console.log(message);
      }
    }
  },

  /**
   * ログ出力
   * consoleオブジェクトが存在しない場合、アラート表示する。
   *
   * @param {String} message 表示内容
   */
  info(message) {
    if (this.mode) {
      if (typeof window.console === 'undefined') {
        alert(message);
      } else {
        console.info(message);
      }
    }
  },

  /**
   * ログ出力
   * consoleオブジェクトが存在しない場合、アラート表示する。
   *
   * @param {String} message 表示内容
   */
  warn(message) {
    if (this.mode) {
      if (typeof window.console === 'undefined') {
        alert(message);
      } else {
        console.warn(message);
      }
    }
  },

  /**
   * ログ出力
   * consoleオブジェクトが存在しない場合、アラート表示する。
   *
   * @param {String} message 表示内容
   */
  error(message) {
    if (this.mode) {
      if (typeof window.console === 'undefined') {
        alert(message);
      } else {
        console.error(message);
      }
    }
  },

  /**
   * ログ出力
   * consoleオブジェクトが存在しない場合、アラート表示する。
   *
   * @param {String} message 表示内容
   */
  processLog(message) {
    if (this.mode) {
      var disMsg = $rDateUtils.parseDateFormat(new Date(), 'yyyyMMddHHmmss') + ' ' + message;
      that.log(disMsg);
    }
  },

  /**
   * 差分時間出力
   *
   * @param {String} message メッセージ
   * @param {Date}   date    比較日付
   */
  benchmark(message, date) {
    if (this.mode) {
      that.log(message + '：' + $rDateUtils.getSpan4SSS(date) + 'ms');
    }
  },
};

export default $rLog;
