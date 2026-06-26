import $rHttp from './helpers/rdev.http';
import router from '../router.js';

const $sAccess = {
  /**
   * select実行メソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ
   * @param {*} config Axios用config(任意)
   */
  async select(sqlId, data, config) {
    return $rHttp.post(
      'general/saccess/select',
      Object.assign(
        {
          sqlFileName: sqlId,
        },
        data || {}
      ),
      config
    );
  },
  /**
   * insert実行メソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ
   * @param {*} config Axios用config(任意)
   */
  async insert(sqlId, data, config) {
    const screenName = await router.history.current.name;
    return $rHttp.post(
      'general/saccess/insert',
      Object.assign(
        {
          sqlFileName: sqlId,
          screen_name: screenName
        },
        data || {}
      ),
      config
    );
  },
  /**
   * update実行メソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ
   * @param {*} config Axios用config(任意)
   */
  async update(sqlId, data, config) {
    const screenName = await router.history.current.name;
    return $rHttp.post(
      'general/saccess/update',
      Object.assign(
        {
          sqlFileName: sqlId,
          screen_name: screenName
        },
        data || {}
      ),
      config
    );
  },
  /**
   * delete実行メソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ
   * @param {*} config Axios用config(任意)
   */
  async delete(sqlId, data, config) {
    const screenName = await router.history.current.name;
    return $rHttp.post(
      'general/saccess/delete',
      Object.assign(
        {
          sqlFileName: sqlId,
          screen_name: screenName
        },
        data || {}
      ),
      config
    );
  },

  /**
   * シーケンス取得後にインサート
   * @param {*} data バインド用パラメータ
   * @param {*} propsName Java側で設定するpropertyファイルの名称
   */
  async insertGetSeq(data, propsName, config) {
    const screenName = await router.history.current.name;
    return $rHttp.post(
      'general/saccess/insertgetseq',
      Object.assign(
        {
          propsName: propsName,
          screen_name: screenName
        },
        data || {}
      ),
      config
    );
  },

  /**
   * ユニークコード重複チェック
   * ※画面からそのまま呼ばないでください。
   * @param {*} data 下記のデータを含むjsオブジェクト
   * {
   *  code
   *  tableName
   *  checkCode
   * }
   * @param {*} config Axios用config(任意)
   * @return Boolean (response.data.data)
   */
  async checkUniqCode(data, config) {
    return $rHttp.post('general/saccess/checkuniq', data || {}, config);
  },
  /**
   * updateWithExclusionControl実行
   * @param {*} data バインド用データ
   * @param {*} propsName Java側で設定するpropertyファイルの名称
   * @param {*} config Axios用config(任意)
   */
  async updateWithExclusionControl(data, propsName, config) {
    const screenName = await router.history.current.name;
    return $rHttp.post(
      'general/saccess/updatewithexclusioncontrol',
      Object.assign(
        {
          propsName: propsName,
          screen_name: screenName
        },
        data || {}
      ),
      config
    );
  },
  /**
   * insertUpdateInAll
   * @param {*} dataList バインド用データの集まり。{data1,data2}みたいな。各データにsqlConstantも要記述
   * @param {*} config Axios用config(任意)
   */
  async insertUpdateInAll(dataList, config) {
    const dataListCopy = JSON.parse(JSON.stringify(dataList));
    for (let i = 0; i < dataListCopy.length;i++) {
      dataListCopy[i].screen_name = await router.history.current.name;
    }
    return $rHttp.post(
      'general/saccess/insupdinall',
        {
          dataList:dataListCopy
        },
      config
    );
  },
  /**
   * SEQ取得処理
   * @param {*} seqName 取得対象シーケンス名
   * @param {*} config Axios用config(任意)
   * @return Number (response.data.data)
   */
  async getSeq(seqName, config) {
    return $rHttp.post(
      'general/saccess/getseq',
      {
        seqName: seqName,
      },
      config
    );
  },
  /**
   * CSVファイル出力要求メソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ(検索条件)
   * @param {*} property プロパティ名
   * @param {*} recyclingFlg 既に生成されたファイルを参照するかどうか
   * @param {*} config Axios用config(任意)
   */
  async exportCsv(sqlId, data, property, recyclingFlg, config) {
    return $rHttp.post(
      'general/saccess/outputcsv',
      {
        $condition: data || {},
        property: property,
        sql: sqlId,
        recyclingFlg: recyclingFlg,
      },
      config
    );
  },
  /**
   * CSVファイル出力確認メソッド
   * @param {*} beforeFileName 一時ファイル名
   * @param {*} config Axios用config(任意)
   */
  async checkExportCsv(beforeFileName, config) {
    return $rHttp.non_loading_post(
      'general/saccess/checkcsv',
      {
        beforeFileName: beforeFileName,
      },
      config
    );
  },
  /**
   * CSVファイル読み取りメソッド
   * @param {*} file CSVファイル
   * @param {*} config Axios用config(任意)
   */
  async importCsv(file, config) {
    return $rHttp.post(
      'iss/csvimport',
      {
        file: file,
      },
      config
    );
  },

    /**
   * Biz-Logi API通信モジュールの実行モード分岐リクエスト
   * @param {*} file CSVファイル
   * @param {*} config Axios用config(任意)
   */
  async callAPI(isCheckFlg, meisaiseq, config) {
    if (isCheckFlg) {
          return $rHttp.post(
      'iss/errorcheck',
      {
        t_shukkairaimeisai_is_seqno: meisaiseq,
      },
      config
    );
    } else {
                return $rHttp.post(
      'iss/pdfseisei',
      {
        t_shukkairaimeisai_is_seqno: meisaiseq,
      },
      config
    );
    }

  },

    async getDownloadPDF(url) {
      //出力ファイル名に利用する日次を取得
      var date = new Date();
      
      const year = date.getFullYear();
      const month = ("00" + (date.getMonth()+1)).slice(-2);
      const dates = ("00" + date.getDate()).slice(-2);
      const hours = ("00" + date.getHours()).slice(-2);
      const minutes = ("00" + date.getMinutes()).slice(-2);
      const seconds = ("00" + date.getSeconds()).slice(-2);

      const filename = '飛脚国際送り状_' + year + month + dates + hours + minutes + seconds + '.pdf';
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = function() {
        const url = window.URL.createObjectURL(
          new Blob([request.response], {
            type: 'application/octet-stream',
          })
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      request.send();
    },
};

export default $sAccess;
