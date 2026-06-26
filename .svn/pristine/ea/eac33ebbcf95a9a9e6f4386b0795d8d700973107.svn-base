/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

/**
 * @file RDEV 文字列のユーティリティ・モジュール。
 * @author sekine
 */
const $rStringUtils = {
  /**
   * ベース文字列に対して、指定された文字列を差し込みます。
   *
   * $rUtils.insert("IDが{0}になっています。{1}にしてください", "全角", "半角");
   *   →"IDが全角になっています。半角にしてください"
   *
   * @param {String} ベース文字列
   * @param {String} 埋め込み文字列（複数指定可）
   * @returns {string} 差し込み結果文字列
   */
  insert() {
    var args = Array.prototype.slice.call(arguments);
    var str = args[0];

    for (var i = 1; i < args.length; i++) {
      str = str.replace('%' + (i) + '$s', args[i]);
    }
    return str;
  },

  /**
   * 文字列を指定文字で分割した後の配列の長さを返す
   * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
   *
   * @param {String} strToSplit
   * @param {String} separator
   */
  splitStrLength(strToSplit, separator) {
    const arrayOfStrings = strToSplit.split(separator);
    return arrayOfStrings.length;
  },

  /**
   * サーバから渡されたテキストの改行コードをHTML描画用の改行（<br/>）に変換
   * 例）AAAA\r\nBBBBがわたってきた場合AAAA<br/>BBBBをに変換
   *
   * @param {string} text サーバから渡される文字列
   * @return {string} text 改行コード<br/>変換後文字列
   */
  formatScreenText(text) {
    if (text !== null && text !== '') {
      text = text.replace(/\r\n/g, '<br>');
      text = text.replace(/(\n|\r)/g, '<br>');
    }
    return text;
  },

  /**
   * サーバから渡されたテキストの改行コード（<br/>）をサーバ格納用の改行（CRLF）に変換
   * 例）AAAA<br/>BBBBがわたってきた場合AAAA\r\nBBBBに変換
   *
   * @param {string} text サーバから渡される文字列
   * @return {string} text 改行コード<br/>変換後文字列
   */
  formatSystemText(text) {
    if (text !== null && text !== '') {
      text = text.replace('<br/>', '\r\n');
      text = text.replace('<br>', '\r\n');
    }
    return text;
  },

  /**
   * NULL、空文字判定
   * NULL、空文字だった場合trueを返す
   *
   * @param {string} text        判定文字列
   * @returns {boolean} 判定結果
   */
  isEmpty(text) {
    if (text !== null && text !== '') {
      return false;
    }
    return true;
  },

  /**
   * 全角変換
   *
   * @param  {string} 文字列
   * @return {string} 全角変換した文字列
   */
  convUpperCase(text) {
    const hanKana = [
      'ｶﾞ',
      'ｷﾞ',
      'ｸﾞ',
      'ｹﾞ',
      'ｺﾞ',
      'ｻﾞ',
      'ｼﾞ',
      'ｽﾞ',
      'ｾﾞ',
      'ｿﾞ',
      'ﾀﾞ',
      'ﾁﾞ',
      'ﾂﾞ',
      'ﾃﾞ',
      'ﾄﾞ',
      'ﾊﾞ',
      'ﾋﾞ',
      'ﾌﾞ',
      'ﾍﾞ',
      'ﾎﾞ',
      'ﾊﾟ',
      'ﾋﾟ',
      'ﾌﾟ',
      'ﾍﾟ',
      'ﾎﾟ',
      'ｦ',
      'ｧ',
      'ｨ',
      'ｩ',
      'ｪ',
      'ｫ',
      'ｬ',
      'ｭ',
      'ｮ',
      'ｯ',
      'ｰ',
      'ｱ',
      'ｲ',
      'ｳ',
      'ｴ',
      'ｵ',
      'ｶ',
      'ｷ',
      'ｸ',
      'ｹ',
      'ｺ',
      'ｻ',
      'ｼ',
      'ｽ',
      'ｾ',
      'ｿ',
      'ﾀ',
      'ﾁ',
      'ﾂ',
      'ﾃ',
      'ﾄ',
      'ﾅ',
      'ﾆ',
      'ﾇ',
      'ﾈ',
      'ﾉ',
      'ﾊ',
      'ﾋ',
      'ﾌ',
      'ﾍ',
      'ﾎ',
      'ﾏ',
      'ﾐ',
      'ﾑ',
      'ﾒ',
      'ﾓ',
      'ﾔ',
      'ﾕ',
      'ﾖ',
      'ﾗ',
      'ﾘ',
      'ﾙ',
      'ﾚ',
      'ﾛ',
      'ﾜ',
      'ﾝ',
      ' ',
    ];
    const zenKana = [
      'ガ',
      'ギ',
      'グ',
      'ゲ',
      'ゴ',
      'ザ',
      'ジ',
      'ズ',
      'ゼ',
      'ゾ',
      'ダ',
      'ヂ',
      'ヅ',
      'デ',
      'ド',
      'バ',
      'ビ',
      'ブ',
      'ベ',
      'ボ',
      'パ',
      'ピ',
      'プ',
      'ペ',
      'ポ',
      'ヲ',
      'ァ',
      'ィ',
      'ゥ',
      'ェ',
      'ォ',
      'ャ',
      'ュ',
      'ョ',
      'ッ',
      'ー',
      'ア',
      'イ',
      'ウ',
      'エ',
      'オ',
      'カ',
      'キ',
      'ク',
      'ケ',
      'コ',
      'サ',
      'シ',
      'ス',
      'セ',
      'ソ',
      'タ',
      'チ',
      'ツ',
      'テ',
      'ト',
      'ナ',
      'ニ',
      'ヌ',
      'ネ',
      'ノ',
      'ハ',
      'ヒ',
      'フ',
      'ヘ',
      'ホ',
      'マ',
      'ミ',
      'ム',
      'メ',
      'モ',
      'ヤ',
      'ユ',
      'ヨ',
      'ラ',
      'リ',
      'ル',
      'レ',
      'ロ',
      'ワ',
      'ン',
      '　',
    ];
    let convText = text.replace(/[A-Za-z0-9]|[!-\/:-@\[-`{-~]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
    while (convText.match(/[ｦ-ﾝ]|[ ]/)) {
      for (let cnt = 0, length = hanKana.length; cnt < length; cnt++) {
        const regexp = new RegExp(hanKana[cnt], 'g');
        convText = convText.replace(regexp, zenKana[cnt]);
      }
    }
    return convText;
  },

  /**
   * HTMLエスケープします。
   * @param {string} text 文字列
   * @return {string} 変換後文字列
   */
  escapeHTML(text) {
    text = text.replace(/&/g, '&amp;');
    text = text.replace(/>/g, '&gt;');
    text = text.replace(/</g, '&lt;');
    text = text.replace(/"/g, '&quot;');
    text = text.replace(/'/g, '&#x27;');
    text = text.replace(/`/g, '&#x60;');

    return text;
  },

  /**
   * HTMLアンエスケープします。
   * @param {string} text 文字列
   * @return {string} 変換後文字列
   */
  unescapeHTML(text) {
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&#x27;/g, "'");
    text = text.replace(/&#x60;/g, '`');

    return text;
  },
};

export default $rStringUtils;
