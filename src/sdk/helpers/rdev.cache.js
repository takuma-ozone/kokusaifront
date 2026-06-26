/**
 * @date 20191121
 * @author nagamachi
 * `rdev.cache.js`を利用する想定が区分値のみだったため、
 * 共通化されたこのファイルは不要として、`rdev.kbn.js`で個別取得する
 */

// /*!
//  * Rapid JavaScript Library
//  *
//  * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
//  * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
//  * Copyright(C) 2019 by Future Architect, Inc. Japan
//  */
// import { RDEV } from './rdev.namespace';
// import $rLog from './rdev.log';
// import $rHttp from './rdev.http';

// /**
//  * @file RDEV キャッシュモジュール
//  * @author nagamachi
//  */
// const $rCache = {
//   /**
//    * クライアントキャッシュを生成します。<br>
//    * RDEV.cacheに対してキャッシュ情報を追加します。呼び出し方法としては２方法。
//    * １．リクエストオブジェクトを設定する。
//    * ２．エイリアスのみを指定する
//    * <pre>
//    *  例
//    *  １．
//    *  generateClientCache({alias : 'rKbn'},
//    *                       data  : {key : value},
//    *                       dataType : 'json',
//    *                       follow   : function() {alert('Complete!'},
//    *                       needToEscape : true});
//    *  ２．
//    *  generateClientCache('rKbn');
//    * </pre>
//    * 「$」+ requestAliasにてアクセスできるよう、グローバル変数に定義する。
//    * @param {object} request
//    *          {string}   alias          エイリアス
//    *          {object}   [params]       パラメータ
//    *          {string}   [criteria]     データの絞り込み条件
//    *          {string}   [dataType]     取得データタイプ
//    *          {boolean}  [needToEscape] エスケープ有無（trueでHTMLエスケープを実施）
//    *          {function} [follow]       データ取得後のフォロー関数
//    * @returns json
//    */
//   generateClientCache(request) {
//     /*
//      * 各種パラメータ取得
//      */
//     const alias = typeof request === 'string' ? request : request.alias;
//     if (typeof alias === 'undefined') {
//       throw new Error('alias is required');
//     }

//     // APIの送信先
//     const resource = '/service/clientCache/' + alias + '.json';

//     // HTTPリクエストのパラメータ
//     let params = request.params;
//     params = typeof params === 'undefined' ? {} : params;

//     // 絞り込み条件
//     if (request.criteria) {
//       params.$criteria = request.criteria;
//     }

//     // HTMLエスケープの実施有無
//     let needToEscape = request.needToEscape;
//     needToEscape = typeof needToEscape === 'undefined' ? false : needToEscape;

//     /**
//      * axiosによるデータ取得
//      */
//     return $rHttp
//       .get(resource, params)
//       .then(response => {
//         if (response.data.at !== '') {
//           sessionStorage.setItem('access_token', response.data.at);
//         }

//         callbackForClientCache(response, alias, request.follow, needToEscape);
//       })
//       .catch(err => {
//         $rLog.error(`rdev.cache.js - generateClientCache(): ${err}`);
//       });
//   },
// };

// /**
//  * クライアントキャッシュ生成ロジックコールバック関数
//  *
//  * @param {string}   response     レスポンス
//  * @param {string}   alias        エイリアス
//  * @param {function} follow       コールバック関数
//  * @param {boolean}  needToEscape HTMLエスケープ有無
//  */
// const callbackForClientCache = (response, alias, follow, needToEscape) => {
//   /*
//    * 結果生成
//    */
//   let responseData = response && response.data ? response.data : '';
//   const _alias = '$' + alias;

//   // needToEscapeがtrueのとき、HTMLエスケープを実施する
//   if (needToEscape) {
//     responseData = $rStringUtils.escapeHTML(responseData);
//   }

//   // 既にキャッシュされている場合、ログを出力する
//   if (RDEV.cache.hasOwnProperty(_alias)) {
//     $rLog.warn('【RDEV】override clientCacheData[' + _alias + ']');
//   }

//   /**
//    * 取得した区分値をグローバル変数に登録する
//    */
//   RDEV.cache[_alias] = responseData;
//   window[_alias] = RDEV.cache[_alias];

//   /**
//    * callback関数を実行
//    */
//   if (typeof follow === 'function') {
//     follow(responseData);
//   }
// };

// export default $rCache;
