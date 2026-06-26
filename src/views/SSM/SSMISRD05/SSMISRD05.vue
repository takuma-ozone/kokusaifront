<template src="./SSMISRD05Template.html"></template>

<script>
import SSMISRD05Model from './SSMISRD05Model.js';
import SSMISRD05Const from './SSMISRD05Const.js';
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SSMISRD05',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  data() {
    return SSMISRD05Model;
  },
  watch: {},
  computed: {
    viewConst() {
      return SSMISRD05Const;
    },
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
    },

    /**
     * 次へボタン押下
     */
    async onClickNext() {
      const param = {};
      this.$router.push({
        name: SSMISRD05Const.TOP,
        params: {
          route_params: param,
        },
      });
    },
  },
};
</script>

<style lang="scss" src="./SSMISRD05Style.scss" scoped></style>
