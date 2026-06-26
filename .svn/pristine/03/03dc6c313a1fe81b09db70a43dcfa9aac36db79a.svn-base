'use strict'

const charGroup = require('../char-group')

/**
 * The character categories.
 * @memberof module:palette-front-end-utils/src/validator/password-char-category
 * @namespace _CHAR_CATEGORY_
 */
const passwordCharCategory = {
  /**
   * uppercase letters
   * @memberof module:palette-front-end-utils/src/validator/password-char-category._CHAR_CATEGORY_
   */
  UPPER: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_0000-0FFF
      return c >= 'A' && c <= 'Z'
    }
  },
  /**
   * lowercase letters
   * @memberof module:palette-front-end-utils/src/validator/password-char-category._CHAR_CATEGORY_
   */
  LOWER: {
    contains(c) {
      // https://ja.wikipedia.org/wiki/Unicode一覧_0000-0FFF
      return c >= 'a' && c <= 'z'
    }
  },
  /**
   * numbers
   * @memberof module:palette-front-end-utils/src/validator/password-char-category._CHAR_CATEGORY_
   */
  NUM: {
    contains(c) {
      return charGroup.contains(c, 'HALF_WIDTH_NUM')
    }
  },
  /**
   * symbols
   * @memberof module:palette-front-end-utils/src/validator/password-char-category._CHAR_CATEGORY_
   */
  SYMBOL: {
    contains(c) {
      return charGroup.contains(c, 'HALF_WIDTH_SYMBOL')
    }
  }
}

/**
 * The password character categories.
 * @exports palette-front-end-utils/src/validator/password-char-category
 */
module.exports = {
  /**
   * Checks whether the given string contains characters of the given category.
   * @param {string} value the string
   * @param {string} category character category that must use.
   * @return {boolean} `true` if the given string contains characters of the given category.
   */
  containsChar(value, category) {
    const pcc = passwordCharCategory[category]
    for (const c of value) {
      if (pcc.contains(c)) {
        return true
      }
    }
    return false
  },
  ALL_CATEGORIES: ['UPPER', 'LOWER', 'NUM', 'SYMBOL']
}
