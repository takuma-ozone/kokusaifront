'use strict'
/** @private 携帯・PHS(国内) */
const PATTERN_MOBILE_PHONE = /^(080-?[1-9]\d{3}-?\d{4}|0[79]0-?\d{4}-?\d{4})$/
/** @private 固定電話(国内市外通話10桁、または0xx0-電話サービス10or11桁)) */
const PATTERN_FIXED_PHONE = /^(0\d{9}|0\d(-\d{3}|\d-\d{2}|\d{2}-\d|\d{3}-)\d-\d{4})$|^(0\d{2}0-?\d{6,7}|0\d{2}0-\d{3}-\d{3,4})$/

/**
 * The phone type.
 * @memberof module:palette-front-end-utils/src/validator/phone-type
 * @namespace _TYPE_
 */
const phoneType = {
  /**
   * any phone
   * @memberof module:palette-front-end-utils/src/validator/phone-type._TYPE_
   */
  ANY: {
    isValid(value) {
      return phoneType.MOBILE.isValid(value) || phoneType.FIXED.isValid(value)
    },

    get caption() {
      return 'phone'
    },

    get captionJa() {
      return '電話'
    }
  },
  /**
   * mobile phone
   * @memberof module:palette-front-end-utils/src/validator/phone-type._TYPE_
   */
  MOBILE: {
    isValid(value) {
      return PATTERN_MOBILE_PHONE.test(value)
    },

    get caption() {
      return 'mobile-phone'
    },

    get captionJa() {
      return '携帯電話'
    }
  },
  /**
   * fixed phone
   * @memberof module:palette-front-end-utils/src/validator/phone-type._TYPE_
   */
  FIXED: {
    isValid(value) {
      return PATTERN_FIXED_PHONE.test(value)
    },

    get caption() {
      return 'fixed-phone'
    },

    get captionJa() {
      return '固定電話'
    }
  }
}

/**
 * The phone types.
 * @exports palette-front-end-utils/src/validator/phone-type
 */
module.exports = {
  /**
   * Checks whether the given string is the given phone number.
   * @param {string} value the string
   * @param {string} type the phone type.
   * @returns {boolean} `true` if the given string is the given phone number.
   */
  isValid(value, type) {
    const e = (type && phoneType[type]) || phoneType.ANY
    return e.isValid(value)
  },

  getCaption(type, local) {
    const e = (type && phoneType[type]) || phoneType.ANY
    return local === 'ja' ? e.captionJa : e.caption
  }
}
