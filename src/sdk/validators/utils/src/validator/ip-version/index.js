'use strict'
/** @private IPv4パターン */
const PATTERN_IP_VERSION_4 = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[.]){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/
/** @private IPv6パターン */
const PATTERN_IP_VERSION_6 = /::|(?:[0-9a-fA-F]{1,4}:){1,7}:|:(?::[0-9a-fA-F]{1,4}){1,7}|(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}/

const ipVersion = {
  /**
   * IP version any
   */
  ANY: {
    isValid(value) {
      return ipVersion.V4.isValid(value) || ipVersion.V6.isValid(value)
    }
  },

  /**
   * IP version 4
   */
  V4: {
    isValid(value) {
      return PATTERN_IP_VERSION_4.test(value)
    }
  },
  /**
   * IP version 6
   */
  V6: {
    isValid(value) {
      return PATTERN_IP_VERSION_6.test(value)
    }
  }
}

/**
 * The ip-versions.
 * @exports palette-front-end-utils/src/validator/ip-version
 */
module.exports = {
  /**
   * Checks whether the given string is the given IP version.
   * @param {string} value the string
   * @param {number} v the IP version.
   * @returns {boolean} `true` if the given string is the given IP version.
   */
  isValid(value, v) {
    const e = (v && ipVersion[`V${v}`]) || ipVersion.ANY
    return e.isValid(value)
  }
}
