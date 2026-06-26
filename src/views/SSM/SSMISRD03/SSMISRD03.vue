<template src="./SSMISRD03Template.html"></template>

<script>
import SSMISRD03Model from './SSMISRD03Model.js';
import SSMISRD03Const from './SSMISRD03Const.js';
import BasePage from '@/components/BasePage.vue';
import $rHttp from '../../../sdk/helpers/rdev.http.js';
import kbnConst from '../../../sdk/constant/kbnConst';
import { has } from 'lodash';

export default {
  name: 'SSMISRD03',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  data() {
    return SSMISRD03Model;
  },
  watch: {},
  computed: {
    isKiyakuConfiermed() {
      return this.bind_params.isChecked;
    },
    viewConst() {
      return SSMISRD03Const;
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
      // 初期値をセット
      this.empty();
      // 遷移パラメータを設定
      const params = this.$route.params;
      this.bind_params.model = Object.assign({}, params.route_params.model);
    },

    /**
     * 「戻る」ボタン押下
     */
    async onClickBack() {
      const param = { exec_back: true };
      this.$router.push({
        name: SSMISRD03Const.FORWARD,
        params: {
          route_params: param,
        },
      });
    },

    /**
     * 「登録」ボタン押下
     */
    async onClickRegist() {
      const param = {
        haisokokyaku_cd: this.bind_params.model.haisokokyaku_cd,
        moshikomi_id: this.bind_params.model.moshikomi_id,
        execMode: kbnConst.VAL_PROCMODE_EXECUTE,
        errormsg: '',
      };
      await $rHttp.post('/core/login/regist', param).then(response => {
        if (response.data.code === 0) {
          if (has(response, 'data.data')) {
            if (response.data.data.result_code === 0) {
              this.$router.push({
                name: SSMISRD03Const.COMPLETE,
                params: {
                  route_params: param,
                },
              });
            } else {
              this.$router.push({
                name: SSMISRD03Const.ERROR,
                params: {
                  route_params: {
                    message: response.data.data.message,
                  },
                },
              });
            }
          }
        } else {
          this.$router.push({
            name: SSMISRD03Const.ERROR,
            params: {
              route_params: {
                message: response.data.message,
              },
            },
          });
        }
      });
    },
    /**
     * 利用規約リンク押下
     */
    click_terms() {
      window.open(
        '/internationalShipping/web/serviceterm.pdf',
        '飛脚国際宅配便出荷システム利用規約'
      );
    },
    /**
     * 約款リンク押下
     */
    click_term() {
      window.open('https://www.sagawa-exp.co.jp/company/public/pdf/stipulation_kokusai.pdf', '');
    },
  },
};
</script>

<style lang="scss" src="./SSMISRD03Style.scss" scoped></style>
