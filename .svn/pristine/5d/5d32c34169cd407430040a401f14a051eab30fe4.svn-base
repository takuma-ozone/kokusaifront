<template src="./SSMISRD04Template.html"></template>

<script>
import SSMISRD04Model from './SSMISRD04Model.js';
import SSMISRD04Const from './SSMISRD04Const.js';
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SSMISRD04',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  data() {
    return SSMISRD04Model;
  },
  watch: {},
  computed: {
    viewConst() {
      return SSMISRD04Const;
    },
  },
  created() {
    this.empty();
  },
  mounted() {
    this.initialize();
  },
  methods: {
    /**
     * 初期処理
     */
    initialize() {
      // 初期処理を実装
      this.empty();
      // 遷移パラメータを設定
      const params = this.$route.params.route_params;
      this.bind_params.model.errormsg = params.message;
    },

    /**
     * 登録画面へ戻る
     */
    async onClickRestart() {
      const param = {};
      this.$router.push({
        name: SSMISRD04Const.RESTART,
        params: {
          route_params: param,
        },
      });
    },
  },
};
</script>

<style lang="scss" src="./SSMISRD04Style.scss" scoped></style>
