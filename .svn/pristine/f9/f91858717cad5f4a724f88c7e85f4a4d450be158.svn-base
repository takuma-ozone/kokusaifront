/*!
 * r-Suite JavaScript Library
 *
 * Copyright 2014, Sagawa Express Co., Ltd.  All Rights Reserved.
 * Copyright(C) 2014- Sagawa Computer System Co.,Ltd.  All rights reserved.
 * Copyright(C) 2014 by Future Architect, Inc. Japan. All rights reserved.
 */

/**
 * @file コンポーネント・ヘルパー
 * @author nagamachi
 */

import $rKbn from '@/sdk/helpers/rdev.kbn';

const $rComponent = {
  /**
   * @function hasRequiredValidate
   * validateの必須チェック
   * `validate`文字列に必須が渡されたかを判定する
   *
   * @param {String} target - 判定するvalidateモデルを指定
   * @return {Boolean} true: 必須指定あり / false: 必須指定なし
   */
  hasRequiredValidate(target) {
    // targetが渡されていない場合、return
    if (!target) {
      return false;
    }

    // targetにrequiredが渡された場合は、trueを返す
    const isStr = typeof target === 'string';
    if (isStr) {
      const hasReqStr = target.indexOf('required') !== -1;
      return !!hasReqStr;
    }

    const isObj = typeof target === 'object';
    if (isObj) {
      const hasReqKey = target.hasOwnProperty('required');
      if (hasReqKey) {
        const isReqTrue = target['required'] === true;
        return !!isReqTrue;
      } else {
        return false;
      }
    }

    return false;
  },

  /**
   * @function getKbn()
   * コンポーネントで利用する区分値の取得
   *
   * @param {String} kbnNm - 区分名Constを指定
   * @return {Array} kbnOptions
   */
  getKbn(kbnNm) {
    /**
     * 区分情報を取得して、`kbnOptions`に詰める
     */
    const kbnOptions = [];

    const kbnInfo = $rKbn.getKbnInfoById(kbnNm);
    if (!kbnInfo) {
      return;
    }

    Object.keys(kbnInfo).forEach(key => {
      const kbntiObj = {};
      kbntiObj.value = kbnInfo[key].KBNTI_ID;
      kbntiObj.label = kbnInfo[key].KBNTI_NM1;
      kbntiObj.order = kbnInfo[key].HYOJI_JYUNJYO;
      kbnOptions.push(kbntiObj);
    });

    /**
     * kbnOptionsを表示順にソートする
     */
    kbnOptions.sort((x, y) => {
      if (x.order > y.order) {
        return 1;
      }
      return -1;
    });

    return kbnOptions;
  },
};

export default $rComponent;
