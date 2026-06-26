'use strict'

const charGroup = require('./char-group')
const ipVersion = require('./ip-version')
const passwordCharCategory = require('./password-char-category')
const phoneTypes = require('./phone-type')

/** @private 整数（カンマなし）パターン */
const PATTERN_INTEGER = /^[+-]?(0|[1-9]\d*)$/
/** @private 整数（カンマあり）パターン */
const PATTERN_COMMA_INTEGER = /^[+-]?(0|[1-9]\d{0,2}(,\d{3})*)$/
/** @private 数字パターン */
const PATTERN_NUMERIC = /^\d+$/

/** @private 郵便番号パターン */
const PATTERN_ZIPCODE = /^\d{3}-?\d{4}$/

/**
 * Validate operations on string.
 * @mixin stringValidator
 */
const stringValidator = {
  /**
   * Checks whether the string contains only the given character groups.
   * @param {string} value the string
   * @param {Array<string>} charGroups the character groups
   * @returns {boolean}  `true` if the string contains only the given character groups.
   */
  isContainsOnly(value, charGroups) {
    if (
      (typeof value !== 'string' && typeof value !== 'number') ||
      value === ''
    ) {
      return false
    }
    for (const c of `${value}`) {
      if (!charGroups.some(gp => charGroup.contains(c, gp))) {
        return false
      }
    }
    return true
  },

  /**
   * Checks whether the string contains the given character groups.
   * @param {string} value the string
   * @param {Array<string>} charGroups the character groups
   * @returns {boolean}  `true` if the string contains the given character groups.
   */
  isContains(value, charGroups) {
    if (typeof value !== 'string' && typeof value !== 'number') {
      return false
    }
    for (const c of `${value}`) {
      if (charGroups.some(gp => charGroup.contains(c, gp))) {
        return true
      }
    }
    return false

    /* eslint-disable prettier/prettier */
  },

  /**
   * 文字列が半角かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width characters
   * @returns {boolean}  `true` if the string contains only the half-width characters.
   *//**
   * 文字列が半角かどうかをチェックします。
   * @param {string} value the string
   * @param {Array<string>} disallowed the not allowed character groups
   * @param {Array<string>} allowed the allowed character groups other than half-width characters
   * @returns {boolean}  `true` if the string contains only the half-width characters.
   */
  isHalfWidth(value, ...args) {
    /* eslint-enable prettier/prettier */
    if (!Array.isArray(args[0])) {
      return stringValidator.isHalfWidth(value, [], [...args])
    }
    const disallowed = args[0] || []
    const allowed = args[1] || []
    return (
      stringValidator.isContainsOnly(value, [
        ...charGroup.HALF_WIDTH_GROUPS,
        ...allowed
      ]) && !stringValidator.isContains(value, disallowed)
    )
  },

  /**
   * 文字列が全角（半角を含まない）かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width characters
   * @returns {boolean}  `true` if the string contains only the half-width characters.
   */
  isFullWidth(value, ...allowed) {
    if (
      (typeof value !== 'string' && typeof value !== 'number') ||
      value === ''
    ) {
      return false
    }
    const disallowed = charGroup.ALL_HALF_WIDTH_GROUPS.filter(
      gp => !allowed.includes(gp)
    )
    return !stringValidator.isContains(value, disallowed)
  },

  /**
   * 文字列が半角ｶﾅかどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width katakana characters
   * @returns {boolean}  `true` if the string contains only the half-width katakana characters.
   */
  isKana(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'HALF_WIDTH_KANA',
      ...allowed
    ])
  },

  /**
   * 文字列が全角カナかどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than full-width katakana characters
   * @returns {boolean}  `true` if the string contains only the full-width katakana characters.
   */
  isFullWidthKana(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'FULL_WIDTH_KANA',
      ...allowed
    ])
  },

  /**
   * 文字列が半角ｶﾅ・数字かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width numeric and katakana characters
   * @returns {boolean}  `true` if the string contains only the half-width numeric and katakana characters.
   */
  isKanaNum(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'HALF_WIDTH_KANA',
      'HALF_WIDTH_NUM',
      ...allowed
    ])
  },

  /**
   * 文字列が全角カナ・数字かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than full-width numeric and katakana characters
   * @returns {boolean}  `true` if the string contains only the full-width numeric and katakana characters.
   */
  isFullWidthKanaNum(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'FULL_WIDTH_KANA',
      'FULL_WIDTH_NUM',
      ...allowed
    ])
  },

  /**
   * 文字列が「ひらがな」かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than hiragana characters
   * @returns {boolean}  `true` if the string contains only the hiragana characters.
   */
  isFullWidthHira(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'FULL_WIDTH_HIRA',
      ...allowed
    ])
  },

  /**
   * 文字列が半角英字かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width alphabetic characters
   * @returns {boolean}  `true` if the string contains only the half-width alphabetic characters.
   */
  isAlpha(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'HALF_WIDTH_ALPHA',
      ...allowed
    ])
  },

  /**
   * 文字列が半角英数字かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width alpha-numeric characters
   * @returns {boolean}  `true` if the string contains only the half-width alpha-numeric characters.
   */
  isAlphaNum(value, ...allowed) {
    return stringValidator.isContainsOnly(value, [
      'HALF_WIDTH_ALPHA',
      'HALF_WIDTH_NUM',
      ...allowed
    ])
  },

  /**
   * 文字列が半角数字かどうかをチェックします。
   * @param {string} value the string
   * @param {string} allowed the allowed character groups other than half-width numeric characters
   * @returns {boolean}  `true` if the string contains only the half-width numeric characters.
   */
  isNumeric(value, ...allowed) {
    return stringValidator.isContainsOnly(value, ['HALF_WIDTH_NUM', ...allowed])
  },

  /**
   * 文字列が数値(カンマあり、またはなし)かどうかをチェックします。
   * @param {string} value the string
   * @param {boolean} allowComma `true` if allow comma-separated values.
   * @returns {boolean}  `true` if the string is number.
   */
  isAmount(value, allowComma = true) {
    if (typeof value !== 'string' && typeof value !== 'number') {
      return false
    }
    const s = `${value}`
    let dotIndex = -1
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '.') {
        dotIndex = i
        break
      }
    }
    let integrtPart
    if (dotIndex >= 0) {
      integrtPart = s.slice(0, dotIndex)
      const decimalPart = s.slice(dotIndex + 1)

      if (!PATTERN_NUMERIC.test(decimalPart)) {
        return false
      }
    } else {
      integrtPart = s
    }
    if (PATTERN_INTEGER.test(integrtPart)) {
      return true
    }
    return allowComma && PATTERN_COMMA_INTEGER.test(integrtPart)
  },

  /**
   * 文字列がIPとして正しいかどうかをチェックします。
   * @param {string} value the string
   * @param {number} v the IP version.
   * @returns {boolean}  `true` if the string is IP.
   */
  isIP(value, v) {
    return ipVersion.isValid(`${value}`, v)
  },

  /**
   * 文字列が電話・FAX番号（日本国内）として正しいかどうかをチェックします。
   * @param {string} value the string
   * @param {string} phoneType the phone type.
   * @returns {boolean}  `true` if the string is a valid phone number.
   */
  isTel(value, phoneType) {
    return phoneTypes.isValid(`${value}`, phoneType)
    /* eslint-disable prettier/prettier */
  },

  /**
   * 文字列が指定したパスワードポリシーを満たすかどうかをチェックします。
   * @param {string} value the string
   * @param {number} min the minimum number of characters
   * @param {string} requires character categories that must use.
   * @returns {boolean}  `true` if the string is meets the password policy.
   *//**
   * 文字列が指定したパスワードポリシーを満たすかどうかをチェックします。
   * @param {string} value the string
   * @param {number} min the minimum number of characters
   * @param {number} numOfCat the minimum number of character categories to use among.
   * @param {string} requires character categories that must use.
   * @returns {boolean}  `true` if the string is meets the password policy.
   */
  isMeetsPasswordPolicy(value, min, numOfCat = 0, ...requires) {
    /* eslint-enable prettier/prettier */
    if (typeof value !== 'string' && typeof value !== 'number') {
      return false
    }
    if (typeof numOfCat === 'string' && isNaN(numOfCat - 0)) {
      requires.push(numOfCat)
    }
    const s = `${value}`
    if (s.length < min) {
      return false
    }
    if (numOfCat <= 0 && requires.length === 0) {
      return true
    }

    const used = passwordCharCategory.ALL_CATEGORIES.filter(cat =>
      passwordCharCategory.containsChar(s, cat)
    )
    if (used.length < numOfCat) {
      return false
    }
    return requires.length === 0 || requires.every(cat => used.includes(cat))
  },

  /**
   * 文字列が郵便番号かどうかをチェックします。
   * @param {string} value the string
   * @returns {boolean} `true` if the string is a ZIP code.
   */
  isZipCode(value) {
    return PATTERN_ZIPCODE.test(`${value}`)
  }
}
module.exports = stringValidator
