import SSMISSD05Const from './SSMISSD05Const.js';

export default {
  //定数
  SSMISSD05Const: SSMISSD05Const,

  //動作関連
  command: {
    //パネルの開閉
    isPanelOpen: true,
  },

  //バインド用モデル
  bind_params: {
    model: [{
      t_shukkairaipack_is_seqno: null,
      t_shukkairaimeisai_is_seqno: null,
      n_line_id: 1,
      n_packhaisokosu: '',
      package_weight: '',
      package_length: '',
      package_width: '',
      package_height: '',
      n_excl_cnt: 0,
    }],
    model_seq: {
      t_shukkairaimeisai_is_seqno: null
    },
    list_t_shukkairaimeisai_is_seqno: [],
    index: 0,
    delete_params: [],
    panel: [{ key: 1, num: 1, name: '' }],
    seigyo_flg: '1',
  },

  model_route_params: {
    list_t_shukkairaimeisai_is_seqno: [],
    index: 0,
    search_save_model: [],
    seigyo_flg: '1',
    errors: [],
  },

  areaReadOnly: false,
  visible: false,
  screenTitle: '梱包情報',
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
        t_shukkairaipack_is_seqno: null,
        t_shukkairaimeisai_is_seqno: null,
        n_line_id: 1,
        n_packhaisokosu: '',
        package_weight: '',
        package_length: '',
        package_width: '',
        package_height: '',
        n_excl_cnt: 0,
      }],
      model_seq: {
        t_shukkairaimeisai_is_seqno: null
      },
      delete_params: [],
      panel: [{ key: 1, num: 1, name: '' }],
      seigyo_flg: '1',
    };
  }
};
