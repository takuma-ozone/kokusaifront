<template>
  <div class="login"></div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {};
  },
  created() {
    this.$store.commit({
      type: 'logout',
    });
    this.$store.commit({
      type: 'setSessionToken',
      sessionToken: 0,
    });
  },
  mounted() {
    this.handleLogin();
  },
  methods: {
    async handleLogin() {
      //Vuexに認証情報をコミットする。
      const response = await this.$sAccess.select('ssmcmnb01.customer_nm.select', {});
      const userNm = await response.data.data[0].customer_nm;
      const kokyakuCd = await response.data.data[0].haisokokyaku_cd;
      await this.$store.commit({
        type: 'addLoginData',
        userNm: userNm,
        kokyakuCd: kokyakuCd,
      });
      //画面遷移を行う
      await this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss" />
