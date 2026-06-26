/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

/**
 * @file RDEV 配列関連のユーティリティ・モジュール。
 * @author sekine
 */
const $rArrayUtils = {
  /**
   * 配列に指定された値がある場合に削除します。
   *
   * @param {array}  array 配列
   * @param {object} value 削除対象の値
   * @return {array} 削除済みの配列
   */
  removeArray(array, value) {
    const index = array.indexOf(value);
    if (index >= 0) {
      array.splice(index, 1);
    }
    return array;
  },

  /**
   * 配列を複製します。
   *
   * @param {array} array 配列
   * @return {array} 複製した配列
   */
  cloneArray(array) {
    let cloneArray = [];
    if (array.length) {
      // 配列をコピー
      cloneArray = array.slice();
    }
    return cloneArray;
  },
};

export default $rArrayUtils;
