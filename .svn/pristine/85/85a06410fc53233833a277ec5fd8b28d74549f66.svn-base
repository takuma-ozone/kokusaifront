/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

import $rConst from './rdev.constant';
import $rHttp from './rdev.http';

/**
 * @file RDEV 設定モジュール
 * @author nagamachi
 */
const $rSetting = {
  context: 'CL_EXT_NSX',
  scriptCharset: 'utf-8',
  dataType: 'json',
  serverErrorCodeMapping: {
    1000: $rConst.SESSION_ERROR,
    1100: $rConst.FILEUPLOAD_ERROR,
    1200: $rConst.KAIHEIKYOKU_ERROR,
    1300: $rConst.ACCESS_CONTROL_ERROR,
    1400: $rConst.VALLIDATION_ERROR,
    1500: $rConst.CSRF_ERROR,
    1600: $rConst.AUTH_ERROR,
  },

  /**
   * ログアウト処理(開発用)
   */
  Logout() {
    return $rHttp.delete('/service/auth/logout');
  },

  /**
   * ログイン処理(開発用)
   */
  // Login() {
  //   return $rHttp
  //     .get('/service/auth/login', {
  //       params: {
  //         // 開発用ログインのためID/Passは決め打ち
  //         userId: '9999999',
  //         password: '9999999',
  //       },
  //       isReject: true,
  //     })
  //     .then(response => {
  //       sessionStorage.removeItem('access_token');
  //       if (response.data.at !== '') {
  //         sessionStorage.setItem('access_token', response.data.at);
  //       }
  //     });
  // },
  //SGS追記 ログイン修正
  Login() {
    return $rHttp
      .get('/core/login/login', {
        params: {
          // 開発用ログインのためID/Passは決め打ち
          userId: '9999999',
          password: '9999999',
        },
        isReject: true,
      })
      .then(response => {
        // sessionStorage.removeItem('access_token');
        // if (response.data.at !== '') {
        //   sessionStorage.setItem('access_token', response.data.at);
        // }
        //TODO ベタ書き修正
        sessionStorage.setItem('unique_key', response.data.data['unique_key']);
      });
  },
};

export default $rSetting;
