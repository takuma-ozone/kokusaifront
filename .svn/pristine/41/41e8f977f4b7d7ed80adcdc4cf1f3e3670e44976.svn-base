import Vue from 'vue';
import Vuex from 'vuex';
import $rHttp from './sdk/helpers/rdev.http';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /**
     * モデルの$saveSnap関連
     */
    snapData: {},
    loginData: {
      sessionToken: null,
      userNm: null,
      kokyakuCd: null,
    },
    isSideMenu: true,
  },
  getters: {
    isLogin(state) {
      //ログインしているかの判定を行う
      let result = false;
      if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
        if (state.loginData.sessionToken === 0) {
          result = true;
        } else {
          result = false;
        }
      }
      // ローカル開発環境では、個別画面に直接アクセスできるように常にログイン状態とする
      else {
        result = true;
      }
      return result;
    },
    getSessionToken(state) {
      return state.loginData.sessionToken;
    },
    getLoginNm(state) {
      return state.loginData.userNm;
    },
    getKokyakuCd(state) {
      return state.loginData.kokyakuCd;
    },
    isSideMenu(state) {
      return !!state.isSideMenu;
    },
  },
  mutations: {
    /**
     * $saveSnapの結果をstoreに保存する
     */
    addSnapData(state, payload) {
      const snapNm = payload.snapNm;
      const snapData = payload.snapData;
      const screenNm = payload.screenNm;

      if (!state.snapData[screenNm]) {
        state.snapData[screenNm] = {};
      }
      if (!state.snapData[screenNm][snapNm]) {
        state.snapData[screenNm][snapNm] = {};
      }
      Object.assign(state.snapData[screenNm][snapNm], snapData);
    },

    //login後の認証情報の追加
    addLoginData(state, payload) {
      const userNm = payload.userNm;
      const kokyakuCd = payload.kokyakuCd;
      state.loginData.userNm = userNm;
      state.loginData.kokyakuCd = kokyakuCd;
    },

    //認証情報の削除
    logout(state) {
      state.snapData = {};
      state.loginData.sessionToken = null;
      state.loginData.userNm = null;
      state.loginData.kokyakuCd = null;
      state.isSideMenu = true;
    },

    setMenu(state, param) {
      state.isSideMenu = param.isSideMenu;
    },

    setSessionToken(state, payload) {
      const sessionToken = payload.sessionToken;
      state.loginData.sessionToken = sessionToken;
    },
  },
  actions: {
    //ログアウト処理の共通化
    async logoutAsync(context) {
      //ログアウトAPIを叩く
      await $rHttp.post('/core/login/logout', {});
      //mutationsのlogoutを実行
      context.commit('logout');
    },
  },
  //更新時にVuexの状態を保持しておくプラグイン
  plugins: [createPersistedState()],
});
