import Vue from 'vue';
import { Loading } from 'element-ui';
import $rConst from './rdev.constant';
import router from '../../router';

const $rHttp = {
  /**
   * GETリクエストを送信します
   *
   * @param {string}
   *			url URL
   * @param {object}
   *			config パラメータ
   * @returns {Promise} response
   */
  // SGS追記 コメントアウト
  // get(url, config) {
  //   // ローディングを開始
  //   const loading = this._loadingStart(config);

  //   const axiosConf = Object.assign({ data: {} }, config);

  //   return new Promise((resolve, reject) => {
  //     Vue.prototype.axios
  //       .get(url, config)
  //       .then(response => {
  //         //SGS追記 keycloakを使わないため
  //         // if (response.data.at !== '') {
  //         //   sessionStorage.setItem('access_token', response.data.at);
  //         // }

  //         this._loadingClose(loading);
  //         resolve(response);
  //       })
  //       .catch(e => {
  //         if (config && config.isReject === true) {
  //           reject();
  //         }
  //         this._loadingClose(loading);
  //         this._handleError(e);
  //         console.error('[RDEV] GETリクエストエラー');
  //       });
  //   });
  // },

  // SGS追記 独自実装
  /**
   * 下記axios仕様の為、jsonStringに変換してサーバー側に送信
   * https://github.com/axios/axios/issues/787
   */

  get(url, data) {
    // ローディングを開始
    const loading = this._loadingStart(data);

    // KFWサーバー側用のセッション管理
    const sendData = {
      params: {
        data: JSON.stringify(
          Object.assign(data || {}, {
            unique_key: sessionStorage.getItem($rConst.SESSION_KEY),
          })
        ),
      },
    };

    return new Promise((resolve, reject) => {
      Vue.prototype.axios
        .get(url, sendData)
        .then(response => {
          this._loadingClose(loading);
          const res = this._handleSessionTimeout(response);
          if (res !== null) {
            resolve(res);
          } else {
            return;
          }
        })
        .catch(e => {
          if (data && data.isReject === true) {
            reject();
          }
          this._loadingClose(loading);
          this._handleError(e);
          console.error('[RDEV] GETリクエストエラー');
        });
    });
  },

  /**
   * POSTリクエストを送信します
   *
   * @param {string}
   *			url URL
   * @param {object}
   *			data 送信するオブジェクト
   * @param {object}
   *			config パラメータ
   * @returns {Promise} response
   */
  post(url, data, config) {
    // ローディングを開始
    const loading = this._loadingStart(config);

    // SGS追記
    // KFWサーバー側用のセッション管理
    const sendData = Object.assign(data || {}, {
      unique_key: sessionStorage.getItem($rConst.SESSION_KEY),
      screen_name: window.$location ? window.$location.split('/')[1] || 'no screen' : 'no screen',
    });

    return new Promise((resolve, reject) => {
      Vue.prototype.axios
        .post(
          url,
          //SGS追記
          sendData,
          config
        )
        .then(response => {
          const res = this._handleSessionTimeout(response);
          if (res !== null) {
            resolve(res);
          } else {
            return;
          }
        })
        .catch(e => {
          // console.log(process.env.NODE_ENV);
          if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
            //エラー画面に遷移させる。
            router.push({ path: '/error' });
          } else {
            console.warn(e);
            reject();
          }
        })
        .finally(() => {
          this._loadingClose(loading);
        });
    });
  },

  /**
   * POSTリクエストを送信します
   *
   * @param {string}
   *			url URL
   * @param {object}
   *			data 送信するオブジェクト
   * @param {object}
   *			config パラメータ
   * @returns {Promise} response
   */
  non_loading_post(url, data, config) {

    // SGS追記
    // KFWサーバー側用のセッション管理
    const sendData = Object.assign(data || {}, {
      unique_key: sessionStorage.getItem($rConst.SESSION_KEY),
      screen_name: window.$location ? window.$location.split('/')[1] || 'no screen' : 'no screen',
    });

    return new Promise((resolve, reject) => {
      Vue.prototype.axios
        .post(
          url,
          //SGS追記
          sendData,
          config
        )
        .then(response => {
          const res = this._handleSessionTimeout(response);
          if (res !== null) {
            resolve(res);
          } else {
            return;
          }
        })
        .catch(e => {
          // console.log(process.env.NODE_ENV);
          if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
            //エラー画面に遷移させる。
            router.push({ path: '/error' });
          } else {
            console.warn(e);
            reject();
          }
        })
        .finally(() => {
        });
    });
  },

  // /**
  //  * PATCHリクエストを送信します
  //  *
  //  * @param {string}
  //  *			url URL
  //  * @param {object}
  //  *			data 送信するオブジェクト
  //  * @param {object}
  //  *			config パラメータ
  //  * @returns {Promeise} response
  //  */
  // patch(url, data, config) {
  //   // ローディングを開始
  //   const loading = this._loadingStart(config);

  //   return new Promise((resolve, reject) => {
  //     Vue.prototype.axios
  //       .patch(url, data, config)
  //       .then(response => {
  //         if (response.data.at !== '') {
  //           sessionStorage.setItem('access_token', response.data.at);
  //         }
  //         this._loadingClose(loading);
  //         resolve(response);
  //       })
  //       .catch(e => {
  // if (config && config.isReject === true) {
  //           reject();
  //         }
  //         this._loadingClose(loading);
  //         this._handleError(e);
  //         console.error('[RDEV] PATCHリクエストエラー');
  //       });
  //   });
  // },

  // /**
  //  * DELETEリクエストを送信します
  //  *
  //  * @param {string}
  //  *			url URL
  //  * @param {object}
  //  *			data 送信するオブジェクト
  //  * @param {object}
  //  *			config パラメータ
  //  * @returns {Promeise} response
  //  */
  // delete(url, data, config) {
  //   // ローディングを開始
  //   const loading = this._loadingStart(config);

  //   return new Promise((resolve, reject) => {
  //     Vue.prototype.axios
  //       .delete(url, Object.assign({}, config, { data }))
  //       .then(response => {
  //         if (response.data.at !== '') {
  //           sessionStorage.setItem('access_token', response.data.at);
  //         }
  //         this._loadingClose(loading);
  //         resolve(response);
  //       })
  //       .catch(e => {
  // if (config && config.isReject === true) {
  //           reject();
  //         }
  //         this._loadingClose(loading);
  //         this._handleError(e, loading);
  //         console.error('[RDEV] DELETEリクエストエラー');
  //       });
  //   });
  // },

  /**
   * ファイルダウンロード用のPOSTリクエストを送信します
   *
   * @param {string}
   *			url URL
   * @param {object}
   *			data 送信するオブジェクト
   * @param {object}
   *			config パラメータ
   * @returns {Promise} response
   */
  download(url, data, config) {
    // ローディングを開始
    const loading = this._loadingStart(config);

    return new Promise((resolve, reject) => {
      Vue.prototype.axios
        .post(url, data, config)
        .then(response => {
          if (response.data.at !== '') {
            sessionStorage.setItem('access_token', response.data.at);
          }
          this._loadingClose(loading);

          let fileName = null;
          if (response.headers['content-disposition']) {
            fileName = decodeURI(
              response.headers['content-disposition']
                .slice("attachment; filename='".length)
                .slice(0, -1)
            );
          }

          if (fileName) {
            // ファイル名が取得できた場合
            if (window.navigator.msSaveBlob) {
              // for IE
              window.navigator.msSaveBlob(new Blob([response.data]), fileName);
            } else {
              // for Modern browsers
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(new Blob([response.data]));
              link.setAttribute('download', fileName);
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();

              setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(link.href);
              }, 100);
            }
          }

          const res = this._handleSessionTimeout(response);
          if (res !== null) {
            resolve(res);
          } else {
            return;
          }
        })
        .catch(e => {
          // TODO: reject周りを追加
          this._loadingClose(loading);
          this._handleError(e);
          console.error('[RDEV] DOWNLOADリクエストエラー');
        });
    });
  },

  /**
   * プロパティに定義されている内容をもとにファイルを作成し、その結果をダウンロードする
   *
   * @param {string}
   *			resource リソース<必須>
   *      subject-mapping.propertiesにBLとの紐付けを記載
   *			`/service/download/outputCsv` CSV出力
   * @param {string} property プロパティ<必須>
   *
   * ◆◆◆プロパティには以下の項目を設定可能◆◆◆
   * @param {string} downloadFileNm ダウンロードファイル名(必須)
   * @param {string} sqlId SQLID(必須)
   * @param {string} downloadCharset 文字コード<未使用>
   * @param {string} editorBeanId エディタクラスBeanId<未使用>
   * @param {boolean} hasHeader ヘッダー有フラグ
   * @param {string[]} columnStrings ヘッダー項目
   * @param {string[]} headerStrings CSVヘッダー項目（表示用）
   * @param {string[]} bindParamNames バインドパラメータ（項目名）
   * @param {string[]} bindParamValues バインドパラメータ（値）
   *
   * @returns {file} ファイル
   */
  outputFile(resource, property) {
    // 画面側で指定されない場合に初期値を設定する
    if (property.hasHeader == null) {
      property.hasHeader = true;
    }
    if (property.downloadCharset == null) {
      property.downloadCharset = 'UTF-8';
    }

    return new Promise((resolve, reject) => {
      this.download('/service/download/' + resource, property)
        .then(response => {
          const res = this._handleSessionTimeout(response);
          if (res !== null) {
            resolve(res);
          } else {
            return;
          }
        })
        .catch(e => {
          // TODO: reject周りを追加
          this._handleError(e);
          console.error('[RDEV] OUTPUT FILEリクエストエラー');
        });
    });
  },

  /**
   * axiosでキャッチしたエラーをハンドリングします
   *
   * @param {object}
   *			err XHRエラーオブジェクト
   * @returns {void}
   */
  _handleError(e) {
    // TODO: 予期せぬエラーとしてエラー画面に遷移させる
    this._handle404(e);
    console.warn('[RDEV]TODO: システムエラー画面に遷移させる');
  },

  /**
   * 404のエラー画面へ遷移します
   *
   * @returns {void}
   */
  _handle404(e) {
    console.log(e);
    // $router.push({
    // name: 'error',
    // params: {
    // subject: '404 Page Not Found'
    // }
    // });
  },

  /**
   * ElementのLoadingを開始します。
   */
  _loadingStart(config) {
    let loading;
    if (config && config.loading === false) {
      // ローディングなし
      loading = null;
      return;
    } else {
      // ローディングを開始
      loading = Loading.service();
    }
    return loading;
  },

  /**
   * ElementのLoadingを終了します。
   */
  _loadingClose(loading) {
    if (loading) {
      // ローディングを終了
      loading.close();
    }
  },

  _handleSessionTimeout(response) {
    const status = response.data.code;
    //RESPONSE_CD_SESSION_ERROR:1000
    if (status === 1000) {
      router.push({ path: '/timeout' });
      return null;
    } else {
      return response;
    }
  }
};

export default $rHttp;
