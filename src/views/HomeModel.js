import HomeConst from './HomeConst.js';

export default {
  // 定数
  HomeConst: HomeConst,

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
