<template>
  <div class="errPage-container">
    <el-row>
      <h1 class="text-jumbo">
        正常にログアウトしました。
      </h1>
      <div>
        <ra-link icon="el-icon-back" type="primary" @click="back">ログイン画面に戻る</ra-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Logout',

  created() {
    //ログイン情報が残っている場合、ログアウトさせる。
    if (this.isLogin) {
      this.logoutAsync();
    }
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push({ path: '/login' });
    },
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
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .text-jumbo {
    font-size: 40px;
    font-weight: 700;
    color: #484848;
  }
  .el-link {
    font-size: 20px;
  }
}
</style>
