import express from 'express';
// import scenarioConfig from './scenarioConfig';
import cache from 'memory-cache';
import fs from 'fs';
import _ from 'lodash';

/**
 * 各種JSONファイルのimport
 */
import _rMessage from './stubJson/sdk/rMessage.json';
import _rProperty from './stubJson/sdk/rProperty.json';
// import _rKbn from './stubJson/sdk/rKbn.json';

export default (app, http) => {
  app.use(express.json());

  /**
   * @see @/sdk/helpers/rdev.constant.js
   */
  const baseURL = '/internationalShipping/rest/rdev';

  /**
   * メッセージ
   */
  app.get(`${baseURL}/core/message/list`, (req, res) => {
    const result = _rMessage;
    res.json(result);
  });

  /**
   * プロパティ
   */
  app.get(`${baseURL}/core/prop/system`, (req, res) => {
    const result = _rProperty;
    res.json(result);
  });

  // /**
  //  * 区分値
  //  */
  // app.all(`${baseURL}/service/clientCache/rKBN.json`, (req, res) => {
  //   const result = _rKbn;
  //   res.json(result);
  // });

  /**
   * 高速開発API用
   * @see @/sdk/sAccess.js
   */
  app.post(`${baseURL}/general/saccess/:method`, (req, res) => {
    const { screen_name: screenName, sqlFileName, unique_key: uniqueKey, ...params } = req.body;
    let jsonData = {};

    // メモリキャッシュからreqCntを取得
    let reqCnt = cache.get(sqlFileName) || 1;
    // jsonファイルに埋め込むカウント数を生成
    const jsonCnt = zeroPadding(reqCnt);

    try {
      jsonData = require(`./stubJson/saccess/${screenName}/${sqlFileName}-${jsonCnt}.json`);
      cache.put(sqlFileName, ++reqCnt);
    } catch (e) {
      try {
        // シナリオIDからデータが取得できない場合は、`001`に戻す
        cache.put(sqlFileName, 1);
        jsonData = require(`./stubJson/saccess/${screenName}/${sqlFileName}-001.json`);
      } catch (e) {
        // 連番を戻しても見つからない場合のみ、commonフォルダからも探す
        if (_.isEmpty(sqlFileName)) {
          // updatewithexclusioncontrolはSQLファイル名がリクエストされないので固定で設定
          jsonData = require(`./stubJson/saccess/common/updatewithexclusioncontrol.json`);
        } else {
          jsonData = require(`./stubJson/saccess/common/${sqlFileName}.json`);
        }
      }
    }

    res.json(jsonData);
  });

  /**
   * 独自Controller呼び出し
   * `/service/controller/`配下に入ったら、BLのIDとシナリオIDをもとにJSONファイルを取得する
   */
  app.post(`${baseURL}/service/controller/:logicId`, (req, res) => {
    const logicId = req.params.logicId; // リクエストが飛ばされたBLのID
    let jsonData = [];

    // メモリキャッシュからreqCntを取得
    let reqCnt = cache.get(logicId) || 1;
    // jsonファイルに埋め込むカウント数を生成
    const jsonCnt = zeroPadding(reqCnt);

    try {
      jsonData = require(`./stubJson/controller/${logicId}-${jsonCnt}.json`);
      cache.put(logicId, ++reqCnt);
    } catch (e) {
      // シナリオIDからデータが取得できない場合は、`001`に戻す
      cache.put(logicId, 1);
      jsonData = require(`./stubJson/controller/${logicId}-001.json`);
    }
    res.json(jsonData);
  });

  /**
   * LoginResource呼出
   * logicId: getinfo  スマクラユーザ情報取得
   *          regist   初回登録
   */
  app.post(`${baseURL}/core/login/:logicId`, (req, res) => {
    const logicId = req.params.logicId; // リクエストが飛ばされたBLのID
    let jsonData = [];

    // メモリキャッシュからreqCntを取得
    let reqCnt = cache.get(logicId) || 1;
    // jsonファイルに埋め込むカウント数を生成
    const jsonCnt = zeroPadding(reqCnt);

    try {
      jsonData = require(`./stubJson/login/${logicId}-${jsonCnt}.json`);
      cache.put(logicId, ++reqCnt);
    } catch (e) {
      // シナリオIDからデータが取得できない場合は、`001`に戻す
      cache.put(logicId, 1);
      jsonData = require(`./stubJson/login/${logicId}-001.json`);
    }
    res.json(jsonData);
  });

  /**
   * 独自Resource呼出
   * resourceId
   * logicId
   */
  app.post(`${baseURL}/iss/:resourceId/:logicId`, (req, res) => {
    const resourceId = req.params.resourceId;
    const logicId = req.params.logicId; // リクエストが飛ばされたBLのID
    let jsonData = [];

    // メモリキャッシュからreqCntを取得
    let reqCnt = cache.get(logicId) || 1;
    // jsonファイルに埋め込むカウント数を生成
    const jsonCnt = zeroPadding(reqCnt);

    try {
      jsonData = require(`./stubJson/iss/${resourceId}/${logicId}-${jsonCnt}.json`);
      cache.put(logicId, ++reqCnt);
    } catch (e) {
      // シナリオIDからデータが取得できない場合は、`001`に戻す
      cache.put(logicId, 1);
      jsonData = require(`./stubJson/iss/${resourceId}/${logicId}-001.json`);
    }
    res.json(jsonData);
  });

  /**
   * PDFダウンロード系
   * 独自リクエストマッピング。PDFダウンロードを伴うため、別口として切り出し。
   */
  app.post(`${baseURL}/iss/pdfout/download/:pdftype`, (req, res) => {
    const type = req.params.pdftype;
    let csv = '';

    // メモリキャッシュからreqCntを取得
    let reqCnt = cache.get(`pdfoutdownload${type}`) || 1;
    // jsonファイルに埋め込むカウント数を生成
    const jsonCnt = zeroPadding(reqCnt);

    try {
      csv = fs.readFileSync(`./express/stubJson/iss/pdfout/download/${type}-${jsonCnt}.pdf`);
      cache.put(`pdfoutdownload${type}`, ++reqCnt);
    } catch (e) {
      // シナリオIDからデータが取得できない場合は、`001`に戻す
      cache.put(`pdfoutdownload${type}`, 1);
      csv = fs.readFileSync(`./express/stubJson/iss/pdfout/download/${type}-${jsonCnt}.pdf`);
    }

    res.setHeader('Content-disposition', "attachment; filename='file.pdf'");
    res.setHeader('Content-Type', 'application/pdf; charset=UTF-8');
    res.send(csv);
  });

  /**
   * general配下の呼出 sutilsexなど
   *
   * resourceId
   * logicId
   */
  app.post(`${baseURL}/general/:resourceId/:logicId`, (req, res) => {
    const resourceId = req.params.resourceId;
    const logicId = req.params.logicId; // リクエストが飛ばされたBLのID
    let jsonData = [];

    // メモリキャッシュからreqCntを取得
    let reqCnt = cache.get(logicId) || 1;
    // jsonファイルに埋め込むカウント数を生成
    const jsonCnt = zeroPadding(reqCnt);

    try {
      jsonData = require(`./stubJson/${resourceId}/${logicId}-${jsonCnt}.json`);
      cache.put(logicId, ++reqCnt);
    } catch (e) {
      // シナリオIDからデータが取得できない場合は、`001`に戻す
      cache.put(logicId, 1);
      jsonData = require(`./stubJson/${resourceId}/${logicId}-001.json`);
    }
    res.json(jsonData);
  });
};

/**
 * JSONファイル命名に合わせて数字を3桁になるまで0パディングする関数
 */
function zeroPadding(num) {
  return ('000000' + num).slice(-3);
}
