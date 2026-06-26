import SSMISSD04Const from './SSMISSD04Const.js';

export default {
  minusTab:-1,
  //定数
  SSMISSD04Const: SSMISSD04Const,
  //seq: '0',

  //動作関連
  command: {
    isPopupOpen: false,
    isDirectPopupOpen: false,
    isEikokuPopupOpen: false,
    isShoruiPopupOpen: false,
  },

  //バインド用モデル
  bind_params: {
    //検索条件モデル
    model: {
      t_shukkairaimeisai_is_seqno: '',
      model_shukka: {
        otodoke_yubin: '',
        otodoke_toshi_nm: '',
        otodoke_country_cd: '',
        otodoke_country_tel_cd: '',
        otodoke_shu_cd: '',
        otodoke1_add: '',
        otodoke2_add: '',
        otodoke3_add: '',
        otodoke_mail: '',
        otodoke_tel: '',
        otodoke1_nm: '',
        otodoke2_nm: '',
        otodoketorokuno1_cd: '',
        otodoketorokuno1: '',
        otodoketorokuno2_cd: '',
        otodoketorokuno2: '',
        otodoketorokuno3_cd: '',
        otodoketorokuno3: '',
        irai_yubin: '',
        irai_toshi_nm: '',
        irai_country_cd: '',
        irai_country_tel_cd: '',
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
        d_hassou: '',
        ispack_cd: '',
        gaikohoken_flg: 0,
        direct_flg: 0,
        ispack_contents: '',
        invoiceexportreason: '',
        dangeritem_cd: '',
        kanzeishiharai_cd:'0',
        incoterms: '',
        invoice_no: '',
        error_flg: 0,
        n_excl_cnt: 0,
        d_okurihakkou: '',
        gaikohoken_kin: '',
        invoice_cur: '',
      },
      search_result_model_konpou: [],
      search_result_model_hinmoku: [],
      search_result_model_kankeisya: [],
      updateMode: false,
      readOnlyMode: false,
      sumhaisokosu: 0,
      sumweight: 0,
      countprice:0,
      netw: 0,
      grossw: 0,
      errors: [],
      invoice_cur_text: '',
    },
    result_model: {
      grid_result_set: [],
    },
    seigyo_flg: '',
    //複写登録遷移フラグ
    copyregist_flg: 0,
  },

  index: 0,
  list_t_shukkairaimeisai_is_seqno: [],
  search_save_model: {},

  columnNames: {
    countryCode: '国コード',
    postalCode: '郵便番号',
    cityName: '都市名',
    //GMTOffset: 'GMTオフセット',
  },
  isIrai: false,
  yubinVisible: false,
  visible: false,
  screenTitle: '出荷情報',
  labeloption: '※検索結果は上位10件のみの出力となります。',
  subtitle: '国際住所検索結果',

  //テーブル関連情報
  tablePageHinmoku: {
    // ページング情報
    currentPage: 1,
    // 1ぺージのデータ数初期値
    pageSize: 100,
    //ソート処理用
    sortColumn: '',
    //画面表示データ
    displayList: [],
  },

  tablePageKonpou: {
    // ページング情報
    currentPage: 1,
    // 1ぺージのデータ数初期値
    pageSize: 100,
    //ソート処理用
    sortColumn: '',
    //画面表示データ
    displayList: [],
  },

  tablePageKankeisya: {
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
      model: {
        t_shukkairaimeisai_is_seqno: '',
        model_shukka: {
          otodoke_yubin: '',
          otodoke_toshi_nm: '',
          otodoke_country_cd: '',
          otodoke_country_tel_cd: '',
          otodoke_shu_cd: '',
          otodoke1_add: '',
          otodoke2_add: '',
          otodoke3_add: '',
          otodoke_mail: '',
          otodoke_tel: '',
          otodoke1_nm: '',
          otodoke2_nm: '',
          otodoketorokuno1_cd: '',
          otodoketorokuno1: '',
          otodoketorokuno2_cd: '',
          otodoketorokuno2: '',
          otodoketorokuno3_cd: '',
          otodoketorokuno3: '',
          irai_yubin: '',
          irai_toshi_nm: '',
          irai_country_cd: SSMISSD04Const.INIT_IRAI_JP,
          irai_country_tel_cd: SSMISSD04Const.INIT_IRAITEL_JP,
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
          d_hassou: '',
          ispack_cd: '',
          gaikohoken_flg: 0,
          direct_flg: 0,
          ispack_contents: '',
          invoiceexportreason: '',
          dangeritem_cd: '',
          kanzeishiharai_cd: '0',
          incoterms: SSMISSD04Const.INIT_INCOTERMS,
          invoice_no: '',
          error_flg: 0,
          n_excl_cnt: 0,
          d_okurihakkou: '',
          gaikohoken_kin: '',
          invoice_cur: '',
        },
        search_result_model_konpou: [],
        search_result_model_hinmoku: [],
        search_result_model_kankeisya: [],
        updateMode: false,
        readOnlyMode: false,
        sumhaisokosu: 0,
        sumweight: 0,
        countprice: 0,
        netw: 0,
        grossw: 0,
        errors: [],
        invoice_cur_text: '',
      },
      result_model: {
        grid_result_set: [],
      },
      seigyo_flg: '',
      //複写登録遷移フラグ
      copyregist_flg: '',
    };
  },
};
