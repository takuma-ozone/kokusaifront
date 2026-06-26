import $sAccess from './sAccess';
import $rHttp from './helpers/rdev.http';
import $sUtils from './sUtils';
import { MessageBox } from 'element-ui';
import $sMsg from './sMsg';
import $sMsgEx from './sMsgEx';
import $rMessage from './helpers/rdev.msg';
import allCountries from '@/assets/allCountries';
import { resolve } from 'core-js/fn/promise';
import router from '../router.js';

const $sUtilsEx = {
    /**
   * PDFアップロードメソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ(検索条件)
   * @param {*} base64String base64URLエンコーディング済みのファイルデータ
   * @param {*} config Axios用config(任意)
   */
  async uploadPDFBase64Data(propsName, data, base64String, config) {
    const screenName = await router.history.current.name;
    const response = await $rHttp.post(
      'general/sutilsex/uploadPDFBase64Data',
      {
        $condition: Object.assign({
          base64String: base64String.replace(/^data:\w+\/\w+;base64,/, ''),
          screen_name:screenName
        },data || {}),
        propsName: propsName,
      },
      config
    );

    //正常終了
    if (response.data.data['code'] === Number($sMsg.NORMALEND_INF)) {
      return base64String;
    }
    //以下、異常終了
    if(response.data.data['code'] === Number($sMsg.REQUIRED_PARAMETER_ERR)) {
      MessageBox.alert($rMessage.get($sMsg.REQUIRED_PARAMETER_ERR,"ファイル未選択"), 'ファイル取込エラー', {
      type: 'error',
      });
      reject()
    }
    if(response.data.data['code'] === Number($sMsg.UNSUPPORTED_PARAMETER_ERROR)) {
      MessageBox.alert($rMessage.get($sMsg.UNSUPPORTED_PARAMETER_ERROR,"ファイル形式"), 'ファイル形式エラー', {
      type: 'error',
      });
      reject()
    }

  },

   /**
   * 画像アップロードメソッド
   * @param {*} sqlId SQLファイル名
   * @param {*} data バインド用データ(検索条件)
   * @param {*} base64String base64URLエンコーディング済みのファイルデータ
   * @param {*} config Axios用config(任意)
   */
  async uploadImageFileBase64Data(sqlId, data, base64String, config) {
    const screenName = await router.history.current.name;
    const response = await $rHttp.post(
      'general/sutilsex/uploadImageFileBase64Data',
      {
        $condition: Object.assign({
          base64String: base64String.replace(/^data:\w+\/\w+;base64,/, ''),
          screen_name:screenName
        },data || {}),
        sqlFileName: sqlId,
      },
      config
    );

    //正常終了
    if (response.data.data['code'] === Number($sMsg.NORMALEND_INF)) {
      return base64String;
    }
    //以下、異常終了
    if(response.data.data['code'] === Number($sMsg.REQUIRED_PARAMETER_ERR)) {
      MessageBox.alert($rMessage.get($sMsg.REQUIRED_PARAMETER_ERR,"ファイル未選択"), 'ファイル取込エラー', {
      type: 'error',
      });
      reject()
    }
    if(response.data.data['code'] === Number($sMsg.INCORRECT_PARAMETER_ERROR)) {
      MessageBox.alert($rMessage.get($sMsg.INCORRECT_PARAMETER_ERROR,"ファイルサイズ"), 'ファイルサイズエラー', {
      type: 'error',
      });
      reject()
    }
    if(response.data.data['code'] === Number($sMsg.UNSUPPORTED_PARAMETER_ERROR)) {
      MessageBox.alert($rMessage.get($sMsg.UNSUPPORTED_PARAMETER_ERROR,"ファイル形式"), 'ファイル形式エラー', {
      type: 'error',
      });
      reject()
    }

  },

  async ssmisrb01(config) {
    return $rHttp.post(
      'general/sutilsex/ssmisrb01',
      {},
      config
    );
  },

  // 和算
  counterGrid(grid, name) {
    let counter = 0;
    if (grid.length > 0) {
      for (const gridData of grid) {
        if (gridData[name]) {
          counter += Number(gridData[name]);
        }
      }
    }
    return isNaN(counter) ? '-' :counter;
  },

  // 和算(重量)
  counterGridWeight(grid, name) {
    let counter = 0;
    if (grid.length > 0) {
      for (const gridData of grid) {
        if (gridData[name]) {
          counter += Number(gridData[name]);
        }
      }
    }
    return isNaN(counter) ? '-' :(Math.round(counter * 10) / 10);
  },

  // 積算の和(梱包重量)
  totalGridPackageWeight(grid, name1, name2) {
    let counter = 0;
    if (grid.length > 0) {
      for (const gridData of grid) {
        if (gridData[name1] && gridData[name2]) {
          counter += Number(gridData[name1]) * Number(gridData[name2]);
        }
      }
    }
    return isNaN(counter) ? '-' :(Math.round(counter * 10) / 10);
  },
  
  // 積算の和(金額)
  totalGridPrice(grid, name1, name2) {
    let counter = 0;
    if (grid.length > 0) {
      for (const gridData of grid) {
        if (gridData[name1] && gridData[name2]) {
          counter += Number(gridData[name1]) * Number(gridData[name2]);
        }
      }
    }
    return isNaN(counter) ? '-' :(Math.round(counter * 100) / 100).toLocaleString();
  },

  getCountryDialCode(countryIso2) {
    let result = null;
    const country = allCountries.find(
        v => v.iso2 === countryIso2
      );
      if (country === void 0) {
        result = '';
      } else {
        result = '+' + country.dialCode;
    }
    return result;
  },

  cutCountryDialCode(telstr) {
    if (telstr !== null) {
      const country = allCountries.find(
        v => telstr.startsWith('+' + v.dialCode)
      );
      if (country === void 0) {
        return telstr;
      } else {
        return telstr.replace('+' + country.dialCode, '');
      }
    } else {
      return telstr;
    }
  },

  getClob(sqlId, data, columnName, config) {
    return $rHttp.post(
      'general/sutilsex/getclob',
      Object.assign(
        {
          sqlFileName: sqlId,
          clobColumnName: columnName,
        },
        data || {}
      ),
      config
    );
  },

  checkUser(config) {
    return $rHttp.post(
      'general/sutilsex/checkuser',
      {},
      config
    );
  },

  openPdf(base64Str) {
      const type = 'application/pdf';
      if (base64Str != null && base64Str !== '') {
        const file = this.toBlob(base64Str, type);
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
  },

  toBlob(base64, type) {
    // 日本語の文字化けに対処するためBOMを作成する。
    var bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    var bin = atob(base64.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    // Blobを作成
    try {
      var blob = new Blob([bom, buffer.buffer], {
        type: type,
      });
    } catch (e) {
      return false;
    }
    return blob;
  },

  // プルダウンの不正な値設定時のメッセージ
  errorSelectMessage(field, errorList) {
    errorList.push($rMessage.get($sMsg.VALIDATE_INCORRECT_SELECT, field));
  },

  // 登録番号の不正な値設定時のメッセージ
  errorTorokuNoMessage(field, errorList) {
    errorList.push($rMessage.get($sMsg.VALIDATE_TOROKUNO, field));
  },

  // DBアラート対策255文字許容
  dbTextLength(value) {
    const DB_LENGTH_MAX = 255;
    if (value != null && value !== '') {
        if (value.length > DB_LENGTH_MAX) {
          value = value.substr(0, DB_LENGTH_MAX);
        }
    }
    return value;
  },

};

export default $sUtilsEx;
