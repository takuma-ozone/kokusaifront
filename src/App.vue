<template>
  <div id="app">
    <sm-menu
      backgroundColor="#3c64aa"
      textColor="#fff"
      activeTextColor="#ffd04b"
      :loginNm="getLoginNm"
      :kokyakuCd="getKokyakuCd"
      :isSideMenu="isSideMenu"
      v-if="isLogin && !commonPage"
    />
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import router from './router';

Vue.config.errorHandler = function(e, vm, info) {
  // console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    //エラー画面に遷移させる。
    router.push({ path: '/error' });
  } else {
    console.error(e);
  }

  return false;
};

export default {
  data() {
    return {
      //メニューを表示しないページのルーター名を記載する。
      ignorePage: [
        'login',
        'timeout',
        'error',
        'browserError',
        'SSMISRD02',
        'SSMISRD03',
        'SSMISRD04',
        'SSMISRD05',
        'SSMISRD06',
        'SSMISRD07',
      ],
    };
  },

  async mounted() {
    await this.$sUtils.setKbnAll();
    await this.$store.commit({
      type: 'setMenu',
      isSideMenu: true,
    });
  },

  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    getLoginNm() {
      return this.$store.getters.getLoginNm;
    },
    getKokyakuCd() {
      return this.$store.getters.getKokyakuCd;
    },
    commonPage() {
      const page = this.$route.name;
      return this.ignorePage.includes(page) || page == null;
    },
    isSideMenu() {
      return this.$store.getters.isSideMenu;
    },
  },
};
</script>
