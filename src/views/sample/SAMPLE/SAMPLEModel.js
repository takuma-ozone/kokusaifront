import SAMPLEConst from './SAMPLEConst.js';

export default {
  //定数
  SAMPLEConst: SAMPLEConst,

  //Menu制御確認用
  isSideMenu: true,

  //動作関連
  command: {
    //パネルの開閉
    isPanelOpen: true,
  },

  //バインド用モデル
  bind: {
    //検索条件モデル
    searchCondition: {
      D_TOROKU_FROM: '',
      D_TOROKU_TO: '',
      sampleId: '',
      sampleNm: '',
      sampleSelect: 'JP',
    },
    //検索結果格納用モデル
    searchResult: {
      searchResultList: [],
    },
    tests: [{key:1, a: 1 ,b:''}, {key:2, a: 2 ,b:''}, {key:3, a: 3 ,b:''}],
  },

  //遷移パラメータチェック用
  route_params: {
    m_sample_seqno: null,
  },

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
};
