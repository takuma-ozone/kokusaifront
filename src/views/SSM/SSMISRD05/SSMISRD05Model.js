import SSMISRD05Const from './SSMISRD05Const.js';

export default {
  //定数
  SSMISRD05Const: SSMISRD05Const,

  //バインド用モデル
  bind_params: {
    model: {},
    search_result_model: [],
  },

  empty() {
    this.bind_params = {
      model: {},
      search_result_model: [],
    };
  },
};
