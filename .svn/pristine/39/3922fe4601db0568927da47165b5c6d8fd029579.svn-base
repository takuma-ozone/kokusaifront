import SSMISSD03Const from './SSMISSD03Const.js';

export default {
  //定数
  SSMISSD03Const: SSMISSD03Const,

  //動作関連
  command: {
    //パネルの開閉
    isPanelOpen: true,
    isPopupOpen: false,
  },

  //バインド用モデル
  bind_params: {
    //検索条件モデル
    search_model: {
      d_hassou_from: '',
      d_hassou_to: '',
      otodoke_country_cd: '',
      nohakkou_status: 1,
      save_status: 0,
      err_status: 1,
    },
    //検索結果格納用モデル
    search_result_model: [],
    search_save_model: {},
    hassou_count: 0,
    recyclingFlg: 0,

    //ポップアップ表示管理
    isVisibleComputed: true,

    //複写登録遷移フラグ
    copyregist_flg: 0,
  },

  //テーブル関連情報
  tablePage: {
    // ページング情報
    currentPage: 1,
    // 1ぺージのデータ数初期値
    pageSize: 100,
    //ソート処理用
    sortColumn: '',
    //画面表示データ
    displayList: [],
  },

  empty() {
    this.bind_params = {
      search_model: {
        d_hassou_from: '',
        d_hassou_to: '',
        otodoke_country_cd: '',
        nohakkou_status: 1,
        save_status: 0,
        err_status: 1,
      },
      search_result_model: [],
      search_save_model: {},
      hassou_count: 0,
      recyclingFlg: 0,
      copyregist_flg: 0,
    };
  },
};
