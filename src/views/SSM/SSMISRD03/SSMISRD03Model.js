import SSMISRD03Const from './SSMISRD03Const.js';

export default {
  //定数
  SSMISRD03Const: SSMISRD03Const,

  //バインド用モデル
  bind_params: {
    model: {
      haisokokyaku_cd: '',
      moshikomi_id: '',
      userno: '',
      customer_nm: '',
      customer_nmk: '',
      busho_nm: '',
      kokyaku_nm: '',
      kokyaku_nmk: '',
      customer_tel: '',
      customer_fax: '',
      customer_mail: '',
      customer_yubin: '',
      customer1_add: '',
      customer2_add: '',
      customer3_add: '',
    },
    isChecked: false,
    search_result_model: [],
  },

  empty() {
    this.bind_params = {
      model: {
        haisokokyaku_cd: '',
        moshikomi_id: '',
        userno: '',
        customer_nm: '',
        customer_nmk: '',
        busho_nm: '',
        kokyaku_nm: '',
        kokyaku_nmk: '',
        customer_tel: '',
        customer_fax: '',
        customer_mail: '',
        customer_yubin: '',
        customer1_add: '',
        customer2_add: '',
        customer3_add: '',
      },
      isChecked: false,
      search_result_model: [],
    };
  },
};
