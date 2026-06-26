import $sAccess from './sAccess';
import $sConst from './sConst';
import $sConstEx from './sConstEx';
import $sMsg from './sMsg';
import $rMessage from './helpers/rdev.msg';
import { MessageBox } from 'element-ui';
import { Notification } from 'element-ui';
import store from '@/store';

const $sUtils = {
  /**
   * 汎用区分を全取得しセッションに格納する。
   * App.vue読み込みタイミングの1度のみで行われる。
   * @return promise関数
   */
  async setKbnAll() {
    const sqlFileName = $sConstEx.SQL_HANYO_GROUP;
    if ($sConstEx.SQL_HANYO_GROUP !== '' && $sConstEx.SQL_HANYO_GROUP !== null) {
      return $sAccess.select(sqlFileName, {}).then(response => {
        // 重複なしgroup
        const keyMap = new Map(response.data.data.map(o => [o.group, o]));
        const keyArray = Array.from(keyMap.values()).map(value => {
          return value.group;
        });
        sessionStorage.setItem($sConst.GROUP_HANYO, JSON.stringify(keyArray));
        // group分ループ
        keyArray.forEach(value1 => {
          const groupMap = [];
          response.data.data.forEach(value2 => {
            // 重複無しのgroupを比較し抽出
            if (value2.group === value1) {
              groupMap.push(value2);
            }
          });
          sessionStorage.setItem(value1, JSON.stringify(groupMap));
        });
      });
    } else {
      return;
    }
  },

  /**
   * 指定したkbn名から対象区分を取得し、セッションに格納する。
   * @param {*} kbnNm 格納対象区分
   * @return なし
   */
  async setKbn(kbnNm, model) {
    const sqlFileName = `common.kbn.${kbnNm}`;
    const response = await $sAccess.select(sqlFileName, model || {});
    return sessionStorage.setItem(response.data.data[0].group, JSON.stringify(response.data.data));
  },

  /**
   * セッションからjsオブジェクトの取得を行う
   * ※区分の場合はRmSelect.vueから呼ばれる
   * @param {*} key 対象
   * @return なし
   */
  getSessionSelect(Key) {
    let getSelectArray = [];
    const getSelectJson = sessionStorage.getItem(Key);
    getSelectArray = JSON.parse(getSelectJson);
    return getSelectArray;
  },

  /**
   * セッションからjsオブジェクトの削除を行う
   * ※画面個別のkbnを保存したままだと画面遷移をはさんでも更新されないため
   * @param {*} key 対象
   * @return なし
   */
  removeSessionSelect(Key) {
    sessionStorage.removeItem(Key);
  },

  /**
   * ユニークコードチェック・重複があればアラート
   * @param {*} tableName テーブル名
   * @param {*} code チェック対象のDBカラム
   * @param {*} checkCode チェックしたい値
   */
  async checkUniqCd(tableName, code, checkCode,codeStr) {
    const response = await $sAccess.checkUniqCode({
      code: code,
      tableName: tableName,
      checkCode: checkCode,
    });
    if (response.data.data === false) {
      await this.alert($rMessage.get($sMsg.DUPLICATE, codeStr), '警告', {
        type: 'warning',
      });
      throw response;
    }
    //画面側の結果取得用
    return response;
  },

  /**
   * 楽観的排他制御チェック後にアップデート
   * @param {*} data バインド用データ
   * @param {*} propsName Java側で設定するpropertyファイルの名称
   * @return int (response.data.data.count) count=-1：排他制御チェックエラー
   *
   */
  async updateWithExclusionControl(data, propsName) {
    const response = await $sAccess.updateWithExclusionControl(data, propsName);
    if (+response.data.data.count < 0) {
      await this.alert($rMessage.get($sMsg.DATA_LOCK_SEQ_ERROR, ''), '排他制御エラー', {
        type: 'error',
      });
      throw response;
    }
    return response;
  },

  /**
   * 一括登録更新
   * @param {*} dataList
   * @returns response
   */
  async insertUpdateInAll(dataList) {
    await $sAccess.insertUpdateInAll(dataList).then(async response => {
      const res = response;
      if (response.data.code === 0) {
        return response;
      } else if (response.data.code === 1) {
        await this.alert($rMessage.get($sMsg.DATA_LOCK_SEQ_ERROR, ''), '排他制御エラー', {
          type: 'error',
        });
        throw response;
      }
    });
  },

  /**
   * ダイアログ表示
   * @param mode 登録or更新
   * @param func ダイアログ表示前後に行う処理(AsyncFunc)
   */
  async openConfirmDialog(mode, func) {
    const result = await this.confirm($rMessage.get($sMsg.CONFIRM, mode), `${mode}前確認`, {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'info',
    });
    if (result) {
      try {
        await func();
        await this.openCompleteDialog(mode);
      } catch (e) {
        return;
      }
    }
  },

    /**
   * ダイアログ表示(確認ダイアログのみ)
   * @param mode 複写登録
   * @param func ダイアログ表示前後に行う処理(AsyncFunc)
   */
  async openCheckDialog(mode, func) {
    const result = await this.confirm($rMessage.get($sMsg.CONFIRM, mode), `${mode}前確認`, {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'info',
    });
    if (result) {
      try {
        await func();
      } catch (e) {
        return;
      }
    }
  },


  /**
   * ダイアログ表示
   * @param mode 登録or更新
   */
  async openCompleteDialog(mode) {
    await this.alert($rMessage.get($sMsg.COMPLETE, mode), `${mode}完了`, {
      type: 'success',
    });
    return;
  },

  /**
   * 検索条件空白チェック・メッセージ表示
   * @param {*} condition 検索条件オブジェクト
   * @return Boolean
   */
  async isEmptyCondition(condition) {
    //オブジェクト内に値があるものが含まれていたら
    if (Object.keys(condition).every(key => !condition[key])) {
      const result = await this.confirm($rMessage.get($sMsg.SEARCH_ALL), '全件検索', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info',
      });
      return result;
    } else {
      return true;
    }
  },

  /**
   * 一覧検索
   * @param {*} sqlName SQL名
   * @param {*} condition 検索条件オブジェクト
   * @return Boolean
   */
  async itiranSearch(sqlName, condition) {
    const searchCheck = await this.isEmptyCondition(condition);
    if (searchCheck) {
      const result = await $sAccess.select(sqlName, condition);
      return result;
    }
  },

  /**
   * メッセージボックス-alert
   * @param {*} msg メッセージ内容
   * @param {*} title タイトル
   * @param {*} params その他パラメータ
   * @returns Boolean
   */
  async alert(msg, title, params) {
    let result = false;
    await MessageBox.alert(msg, title, params)
      .then(() => {
        result = true;
      })
      .catch(() => {
        result = false;
      });
    return result;
  },

  /**
   * メッセージボックス-confirm
   * @param {*} msg メッセージ内容
   * @param {*} title タイトル
   * @param {*} params その他パラメータ
   * @returns Boolean
   */
  async confirm(msg, title, params) {
    let result = false;
    await MessageBox.confirm(msg, title, params)
      .then(() => {
        result = true;
      })
      .catch(() => {
        result = false;
      });
    return result;
  },

  /**
   * メッセージボックス-prompt
   * @param {*} msg メッセージ内容
   * @param {*} title タイトル
   * @param {*} params その他パラメータ
   * @returns Boolean
   */
  async prompt(msg, title, params) {
    let result = {
      value: null,
      result: false,
    };
    await MessageBox.prompt(msg, title, params)
      .then(({ value }) => {
        result.value = value;
        result.result = true;
      })
      .catch(() => {
        result = false;
      });
    return result;
  },

  /**
   * CSV出力-CSV作成
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ(検索条件)
   * @param {*} property プロパティ名
   * @param {*} checkSec 確認間隔（秒）
   * @param {*} checkCnt タイムアウトまでの確認回数
   * @param {*} recyclingFlg 既に生成されたファイルを参照するかどうか
   */
  async exportCsv(sqlId, data, property, checkSec, checkCnt, recyclingFlg) {
    const mode = 'CSV出力';
    const res = await $sAccess.exportCsv(sqlId, data, property, recyclingFlg);
    const beforeFileName = res.data.data.beforeFileName;
    const afterFileName = res.data.data.afterFileName;
    const checkmSec = (await checkSec) * 1000;

    Notification.info({
      title: mode,
      message: $rMessage.get($sMsg.START, mode + '処理'),
      duration: checkmSec,
    });

    let cnt = 0;
    let checkResult = false;
    let result = '';
    const intervalId = setInterval(async () => {
      if (store.getters.isLogin) {
        result = await $sAccess.checkExportCsv(beforeFileName);
        checkResult = await result.data.data.result;
        cnt++;
        if (checkResult) {
          clearInterval(intervalId);
          //ダウンロード処理
          Notification({
            title: mode,
            message: $rMessage.get($sMsg.COMPLETE, mode),
            type: 'success',
            duration: 5000,
          });
          const baseUrl = process.env.BASE_URL;
          var link = document.createElement('a');
          link.href =
            baseUrl +
            '../rest/rdev/general/saccess/' +
            encodeURIComponent(beforeFileName) +
            '/' +
            encodeURIComponent(afterFileName) +
            '/downloadcsv';
          link.click();
        } else if (cnt >= checkCnt) {
          clearInterval(intervalId);
          await MessageBox.alert($rMessage.get($sMsg.TIMEOUT_ERROR), mode, {
            type: 'error',
          });
        } else {
          Notification({
            title: mode,
            message: $rMessage.get($sMsg.WAIT_FILE_CREATE),
            type: 'warning',
            duration: 3000,
          });
        }
      } else {
        clearInterval(intervalId);
      }
    }, checkmSec);
  },

  /**
   * Select結果をmodelに入れる処理
   * @param {*} model 格納先モデル
   * @param {*} searchResult 検索結果モデル
   * @returns 格納した値の数
   */
  storeSearchResult(model, searchResult) {
    let cnt = 0;
    if (searchResult != null) {
      Object.keys(searchResult).forEach(key => {
        if (key in model) {
          model[key] = searchResult[key];
          cnt++;
        }
      });
    }
    return cnt;
  },

  /**
   * キャメルケースへ変換 sampleString
   * @param string
   * @return string
   */
  camelCase(str) {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/[-_](.)/g, function(match, group1) {
      return group1.toUpperCase();
    });
  },

  /**
   * スネークケースへ変換 sample_string
   * @param string
   * @return string
   */
  snakeCase(str) {
    const camel = camelCase(str);
    return camel.replace(/[A-Z]/g, function(s) {
      return '_' + s.charAt(0).toLowerCase();
    });
  },

  /**
   * パスカルケースへ変換 SampleString
   * @param string
   * @return string
   */
  pascalCase(str) {
    const camel = camelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  },
};

export default $sUtils;
