<template>
  <div class="browser-error">
    <table class="tableSpace" style="border:none;">
      <tr>
        <td style="border:none;" width="890">
          <div>
            <img src="../../assets/SG_Logo.png" class="image-logo1" />
          </div>
        </td>
      </tr>
    </table>

    <hr />
    <el-row class="text-jumbo">
      <h1 class="text-jumbo1">
        非推奨のブラウザが利用されています。
      </h1>
      <h2 class="text-jumbo2">
        ChromeもしくはMicrosoft Edgeの最新版をご利用ください。
      </h2>
      <!--<div>
        <ra-link icon="el-icon-back" type="primary" @click="back">ログイン画面に戻る</ra-link>
      </div>-->
    </el-row>
    <hr />
    <el-footer>{{ footer }}</el-footer>
  </div>
</template>

<script>
export default {
  name: 'BrowserError',

  created() {
    //ログイン情報が残っている場合、正常にログアウトできていないので、ログイン画面に遷移させる。
    if (this.isLogin) {
      this.logoutAsync();
    }
  },
  data() {
    return {
      footer: '@2021 Sagawa Express Co.Ltd. All Rights Reserved.',
    };
  },
  methods: {
    async logoutAsync() {
      await this.$store.dispatch('logoutAsync');
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
.browser-error {
  .text-jumbo {
    text-align: center;
    color: #484848;
    height: 39vw;
    min-width: 1100px;

    .text-jumbo1 {
      font-size: 50px;
      font-weight: 700;
    }
    .text-jumbo2 {
      font-size: 30px;
      font-weight: 700;
    }
  }
  .el-link {
    font-size: 20px;
  }
}
.tableSpace {
  border: 1;
}
.el-footer {
  height: 30px !important;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: #fff;
  padding: 0 !important;
  min-width: 1100px;
}

.image-logo1 {
  float: left;
  height: 48px;
  margin: 0px 0px 0px 20px;
  position: relative;
}
</style>
