import SSMISSD06Const from './SSMISSD06Const.js';

export default {
  //定数
  minusTab:-1,
  SSMISSD06Const: SSMISSD06Const,

  //動作関連
  command: {
    //パネルの開閉
    isPanelOpen: true,
  },

  //バインド用モデル
  bind_params: {
    model: [{
      t_shukkairaiitem_is_seqno: null,
      t_shukkairaimeisai_is_seqno: null,
      n_line_id: 1,
      item_nm: '',
      item_kosu: '',
      item_unit: '',
      item_price: '',
      n_netweight: '',
      n_grossweight: '',
      item_country: '',
      n_excl_cnt: 0,
    }],
    model_seq: {
      t_shukkairaimeisai_is_seqno: null
    },
    model_shukka: {
      invoice_cur_text: '',
    },
    panel: [{ key: 1, num: 1, name: '' }],
    delete_params: [],
    option_errors: [],
    seigyo_flg:'1',
  },

  model_route_params: {
    list_t_shukkairaimeisai_is_seqno: [],
    index: 0,
    search_save_model: [],
    seigyo_flg: '',
    errors: [],
  },

  visible: false,
  screenTitle: '品目情報',
  updateMode: false,
  //テーブル関連情報
  tablePage: {
    // ページング情報
    currentPage: 1,
    // 1ぺージのデータ数初期値
    pageSize: 50,
    //ソート処理用
    sortColumn: '',
    //画面表示データ
    displayList: [],
  },

  empty() {
    this.bind_params = {
      model: [{
        t_shukkairaiitem_is_seqno: null,
        t_shukkairaimeisai_is_seqno: null,
        n_line_id: 1,
        item_nm: '',
        item_kosu: '',
        item_unit: '',
        item_price: '',
        n_netweight: '',
        n_grossweight: '',
        item_country: '',
        n_excl_cnt: 0,
      }],
      model_seq: { t_shukkairaimeisai_is_seqno: null },
      model_shukka: {
        invoice_cur_text: '',
      },
      list_t_shukkairaimeisai_is_seqno: [],
      index: 0,
      panel: [{ key: 1, num: 1, name: '' }],
      delete_params: [],
      option_errors: [],
      seigyo_flg:'1',
    };
  },
};
