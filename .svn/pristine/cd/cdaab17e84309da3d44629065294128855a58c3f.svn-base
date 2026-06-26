import { template } from 'xe-utils/methods';
import SSMISSD07Const from './SSMISSD07Const.js';

export default {
  //定数
  SSMISSD07Const: SSMISSD07Const,

  //バインド用モデル
  bind_params: {
    //検索条件モデル
    model: [
      {
        t_shukkairaiperson_is_seqno: null,
        t_shukkairaimeisai_is_seqno: null,
        n_line_id: 1,
        person_type_cd: '',
        person_yubin: '',
        person_toshi_nm: '',
        person_shu_cd: '',
        person1_add: '',
        person2_add: '',
        person3_add: '',
        person1_nm: '',
        person2_nm: '',
        person_mail: '',
        person_country_cd: '',
        person_country_tel_cd: '',
        person_tel: '',
        torokuno1_cd: '',
        torokuno2_cd: '',
        torokuno3_cd: '',
        torokuno1: '',
        torokuno2: '',
        torokuno3: '',
        n_excl_cnt: 0,
      },
    ],
    result_model: {
      grid_result_set: [],
    },
    delete_params: [],
    model_seq: {
      t_shukkairaimeisai_is_seqno: null,
    },
    panel: [{ key: 1, num: 1, name: '' }],
    count: '',
    option_errors: [],
    seigyo_flg:'1',
  },
  yubinVisible: false,
  model_route_params: {
    list_t_shukkairaimeisai_is_seqno: [],
    index: 0,
    search_save_model: [],
    seigyo_flg: '',
    errors: [],
  },
  columnNames: {
    countryCode: '国コード',
    postalCode: '郵便番号',
    cityName: '都市名',
    //GMTOffset: 'GMTオフセット',
  },
  screenTitle: '関係性情報',
  labeloption: '※検索結果は上位10件のみの出力となります。',
  subtitle: '国際住所検索結果',

  // updateMode: false,
  // //テーブル関連情報
  // tablePage: {
  //   // ページング情報
  //   currentPage: 1,
  //   // 1ぺージのデータ数初期値
  //   pageSize: 50,
  //   //ソート処理用
  //   sortColumn: '',
  //   //画面表示データ
  //   displayList: [],
  // },

  empty() {
    this.bind_params = {
      model: [
        {
          t_shukkairaiperson_is_seqno: null,
          t_shukkairaimeisai_is_seqno: null,
          n_line_id: 1,
          person_type_cd: '',
          person_yubin: '',
          person_toshi_nm: '',
          person_shu_cd: '',
          person1_add: '',
          person2_add: '',
          person3_add: '',
          person1_nm: '',
          person2_nm: '',
          person_mail: '',
          person_country_cd: '',
          person_country_tel_cd: '',
          person_tel: '',
          torokuno1_cd: '',
          torokuno2_cd: '',
          torokuno3_cd: '',
          torokuno1: '',
          torokuno2: '',
          torokuno3: '',
          n_excl_cnt: 0,
        },
      ],
      result_model: {
        grid_result_set: [],
      },

      delete_params: [],
      model_seq: {
        t_shukkairaimeisai_is_seqno: null,
      },
      list_t_shukkairaimeisai_is_seqno: [],
      index: 0,
      panel: [{ key: 1, num: 1, name: '' }],
      count: '',
      option_errors: [],
      seigyo_flg:'1',
    };
  },
};
