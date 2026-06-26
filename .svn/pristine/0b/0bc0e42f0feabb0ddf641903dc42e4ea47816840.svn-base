import SSMISSD09Const from './SSMISSD09Const.js';

export default {
  minusTab:-1,
  //定数
  SSMISSD09Const: SSMISSD09Const,
  //seq: '0',

  //動作関連
  command: {
    isPopupOpen: false,
  },

  //バインド用モデル
  bind_params: {
    //検索条件モデル
    model: {
      m_iraipersondefault_is_seqno: '',

      model_shukka: {
        irai_yubin: '',
        irai_toshi_nm: '',
        irai_country_cd: '',
        irai_country_tel_cd: '',
        irai_shu_cd: '',
        irai1_add: '',
        irai2_add: '',
        soke3_add: '',
        irai_mail: '',
        irai_tel: '',
        irai1_nm: '',
        irai2_nm: '',
        iraitorokuno1_cd: '',
        iraitorokuno1: '',
        iraitorokuno2_cd: '',
        iraitorokuno2: '',
        iraitorokuno3_cd: '',
        iraitorokuno3: '',
        error_flg: 0,
        n_excl_cnt: 0,
      },
      search_result_model: [],
      updateMode: false,
      readOnlyMode: false,
      errors: [],
    },
    result_model: {
      grid_result_set: [],
    },
  },

  index: 0,
  list_m_iraipersondefault_is_seqno: [],
  search_save_model: {},

  columnNames: {
    countryCode: '国コード',
    postalCode: '郵便番号',
    cityName: '都市名',
    //GMTOffset: 'GMTオフセット',
  },
  yubinVisible: false,
  visible: false,
  screenTitle: '出荷人情報',
  labeloption: '※検索結果は上位10件のみの出力となります。',
  subtitle: '国際住所検索結果',

  empty() {
    this.bind_params = {
      model: {
        m_iraipersondefault_is_seqno: '',
        model_shukka: {
          irai_yubin: '',
          irai_toshi_nm: '',
          irai_country_cd: SSMISSD09Const.INIT_IRAI_JP,
          irai_country_tel_cd: SSMISSD09Const.INIT_IRAITEL_JP,
          irai_shu_cd: '',
          irai1_add: '',
          irai2_add: '',
          irai3_add: '',
          irai_mail: '',
          irai_tel: '',
          irai1_nm: '',
          irai2_nm: '',
          iraitorokuno1_cd: '',
          iraitorokuno1: '',
          iraitorokuno2_cd: '',
          iraitorokuno2: '',
          iraitorokuno3_cd: '',
          iraitorokuno3: '',
          error_flg: 0,
          n_excl_cnt: 0,
        },
      search_result_model: [],
      updateMode: false,
      readOnlyMode: false,
      errors: [],
      },
      result_model: {
        grid_result_set: [],
      },
    };
  },
};
