<template src="./SSMISRD07Template.html"></template>

<script>
import SSMISRD07Model from './SSMISRD07Model.js';
import SSMISRD07Const from './SSMISRD07Const.js';
import BasePage from '@/components/BasePage.vue';
import $rHttp from '../../../sdk/helpers/rdev.http.js';
import { has } from 'lodash';

export default {
  name: 'SSMISRD07',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  data() {
    return SSMISRD07Model;
  },
  watch: {},
  computed: {
    viewConst() {
      return SSMISRD07Const;
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
     * ログインボタン押下
     */
    async onClickNext() {
      this.$multipleValidate(async () => {
        const response = await $rHttp.post('/core/emergency/execlogin', this.bind_params.model);
        if (response.data.code === 0) {
          if (has(response, 'data.data')) {
            if (response.data.data.result_code === 0) {
              this.$router.push({
                name: SSMISRD07Const.TOP,
                params: {
                  route_params: {},
                },
              });
            } else {
              await this.$alert('', 'エラー', {
                message: response.data.message,
                dangerouslyUseHTMLString: true,
                type: 'error',
              });
              throw response.data.message;
            }
          }
        } else {
          await this.$alert('', 'エラー', {
            message: response.data.message,
            dangerouslyUseHTMLString: true,
            type: 'error',
          });
          throw response.data.message;
        }
      });
    },

    /**
     * チェックディジット計算
     */
    dejit() {
      const str = this.bind_params.model.haisokokyaku_cd;
      if (str.length === 11 && !_.isNaN(Number(str))) {
        const ary = Array.from(str);
        let total = 0;
        total += +ary[0] * 4;
        total += +ary[1] * 3;
        total += +ary[2] * 2;
        total += +ary[3] * 9;
        total += +ary[4] * 8;
        total += +ary[5] * 7;
        total += +ary[6] * 6;
        total += +ary[7] * 5;
        total += +ary[8] * 4;
        total += +ary[9] * 3;
        total += +ary[10] * 2;
        const mod = total % 11;
        let result = 0;
        if (mod === 0) {
          result = 1;
        } else if (mod === 1) {
          result = 0;
        } else {
          result = 11 - mod;
        }
        this.bind_params.model.haisokokyaku_cd = str.concat(result);
      }
    },

    /**
     * お客様コード・申込IDの確認リンク押下時処理
     */
    click_link2() {
      window.open(
        '/internationalShipping/web/about_kokyakucd_mosikomiid.pdf',
        'お客様コード・申込ID説明'
      );
    },
  },
};
</script>

<style lang="scss" src="./SSMISRD07Style.scss" scoped></style>
