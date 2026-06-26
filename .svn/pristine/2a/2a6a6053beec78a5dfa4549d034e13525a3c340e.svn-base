<template src="./SSMISRD06Template.html"></template>

<script>
import SSMISRD06Model from './SSMISRD06Model.js';
import SSMISRD06Const from './SSMISRD06Const.js';
import BasePage from '@/components/BasePage.vue';
import $rHttp from '../../../sdk/helpers/rdev.http.js';
import { has } from 'lodash';

export default {
  name: 'SSMISRD06',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  data() {
    return SSMISRD06Model;
  },
  watch: {},
  computed: {
    viewConst() {
      return SSMISRD06Const;
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
    async initialize() {
      // 初期処理を実装
      this.empty();
      const response = await $rHttp.post('/core/login/geterror', {});
      if (has(response, 'data.data')) {
        this.bind_params.model.errormsg = response.data.data;
      }
    },

    async onClickRestart() {
      const param = {};
      this.$router.push({
        name: SSMISRD06Const.RESTART,
        params: {
          route_params: param,
        },
      });
    },
  },
};
</script>

<style lang="scss" src="./SSMISRD06Style.scss" scoped></style>
