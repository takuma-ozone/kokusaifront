/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

import $rSetting from './rdev.setting';

/**
 * @file RDEV パス取得系の処理モジュール
 * @author nagamachi
 */
const $rPath = {
  /**
   * コンテキストの情報を取得します。
   */
  getContext() {
    return $rSetting.context;
  },

  /**
   * FileUploadで指定するパス
   * extensionでアップロードするファイル拡張子を指定する
   */
  getUploadPath() {
    return `/${this.getContext()}/rest/rdev/service/upload/`;
  },
};

export default $rPath;
