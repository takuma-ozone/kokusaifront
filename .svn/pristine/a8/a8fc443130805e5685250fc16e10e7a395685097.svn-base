'use strict'

/**
 * 文字種別
 * @memberof module:palette-front-end-utils/src/validator/char-group
 * @namespace _CHAR_GROUP_
 */
const charGroup = {
  /**
   * 半角英字
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_ALPHA: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_0000-0FFF
      if (c >= 'A' && c <= 'Z') {
        return true
      }
      if (c >= 'a' && c <= 'z') {
        return true
      }
      return false
    }
  },
  /**
   * 半角数字
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_NUM: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_0000-0FFF
      return c >= '0' && c <= '9'
    }
  },
  /**
   * 半角ｶﾅ
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_KANA: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      return c >= 'ｦ' && c <= 'ﾟ'
    }
  },
  /**
   * 半角ｶﾅ記号（カッコ等）<br>
   * [｡-･]
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_CJK_PUNCTUATION: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      return c >= '｡' && c <= '･'
    }
  },
  /**
   * 半角記号
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_SYMBOL: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_0000-0FFF
      if (c >= '!' && c <= '/') {
        return true
      } else if (c >= ':' && c <= '@') {
        return true
      } else if (c >= '[' && c <= '`') {
        return true
      } else if (c >= '{' && c <= '~') {
        return true
      }
      return false
    }
  },
  /**
   * 半角スペース
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_SPACE: {
    contains(c) {
      return c === ' '
    }
  },
  /**
   * 半角記号（変種）
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_SYMBOL_VARIANT: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      if (c >= '￨' && c <= '￮') {
        return true
      }
      return false
    }
  },
  /**
   * 半角ハングル
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  HALF_WIDTH_HANGUL: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      if (c /* HALFWIDTH HANGUL FILLER */ >= '\uFFA0' && c <= 'ￜ') {
        return true
      }
      return false
    }
  },
  /**
   * 全角英字
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_ALPHA: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      if (c >= 'Ａ' && c <= 'Ｚ') {
        return true
      }
      if (c >= 'ａ' && c <= 'ｚ') {
        return true
      }
      return false
    }
  },
  /**
   * 全角数字
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_NUM: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      return c >= '０' && c <= '９'
    }
  },
  /**
   * 全角CKJ記号<br>
   * （全角空白(Ideographic Space. U+3000)は含まれない）
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_CJK_SYMBOL: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_3000-3FFF
      return c >= '、' && c <= '〿' /* IDEOGRAPHIC HALF FILL SPACE */
    }
  },
  /**
   * 全角ひらがな
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_HIRA: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_3000-3FFF
      return c >= 'ぁ' && c <= 'ゖ'
    }
  },
  /**
   * 全角ひらがな記号
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_HIRA_SYMBOL: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_3000-3FFF
      return (
        c /* COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK */ >= '\u3099' &&
        c <= 'ゟ'
      ) /* HIRAGANA DIGRAPH YORI */
    }
  },
  /**
   * 全角カナ<br>
   * 「ー」(KATAKANA-HIRAGANA PROLONGED SOUND MARK)は含まれます。
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_KANA: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_3000-3FFF
      return (c >= 'ァ' && c <= 'ヺ') || c === 'ー'
    }
  },
  /**
   * 全角カナ記号
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_KANA_SYMBOL: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_3000-3FFF
      return c === '゠' || c === '・' || (c >= 'ヽ' && c <= 'ヿ')
    }
  },
  /**
   * 全角記号
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_SYMBOL: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_F000-FFFF
      if (c >= '！' && c <= '／') {
        return true
      } else if (c >= '：' && c <= '＠') {
        return true
      } else if (c >= '［' && c <= '｀') {
        return true
      } else if (c >= '｛' && c <= '～') {
        return true
      }
      return false
    }
  },
  /**
   * 全角スペース<br>
   * (Ideographic Space. U+3000)
   * @memberof module:palette-front-end-utils/src/validator/char-group._CHAR_GROUP_
   */
  FULL_WIDTH_SPACE: {
    contains(c) {
      return c === '　'
    }
  }
}

/**
 * The character groups.
 * @exports palette-front-end-utils/src/validator/char-group
 */
module.exports = {
  /**
   * Checks whether a character is contained in the given character group.
   * @param {string} c a character
   * @param {string} group the character group name
   * @returns {boolean}  `true` if a character is contained in the given character group.
   */
  contains(c, group) {
    return charGroup[group].contains(c)
  },
  /**
   * 半角文字グループ<br>
   * {@link #HALF_WIDTH_HANGUL},{@link #HALF_WIDTH_SYMBOL_VARIANT}は含まれません。
   */
  HALF_WIDTH_GROUPS: [
    'HALF_WIDTH_ALPHA',
    'HALF_WIDTH_NUM',
    'HALF_WIDTH_KANA',
    'HALF_WIDTH_SPACE',
    'HALF_WIDTH_CJK_PUNCTUATION',
    'HALF_WIDTH_SYMBOL'
  ],
  /**
   * すべての半角文字グループ
   */
  ALL_HALF_WIDTH_GROUPS: [
    'HALF_WIDTH_ALPHA',
    'HALF_WIDTH_NUM',
    'HALF_WIDTH_KANA',
    'HALF_WIDTH_SPACE',
    'HALF_WIDTH_CJK_PUNCTUATION',
    'HALF_WIDTH_SYMBOL',
    'HALF_WIDTH_HANGUL',
    'HALF_WIDTH_SYMBOL_VARIANT'
  ]
}
