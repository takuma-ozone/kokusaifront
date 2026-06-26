import SSMISRD06Const from './SSMISRD06Const.js';

export default {
  //定数
  SSMISRD06Const: SSMISRD06Const,

  //バインド用モデル
  bind_params: {
    model: {
      errormsg: '',
    },
    search_result_model: [],
  },

  empty() {
    this.bind_params = {
      model: {
        errormsg: '',
      },
      search_result_model: [],
    };
  },
};
