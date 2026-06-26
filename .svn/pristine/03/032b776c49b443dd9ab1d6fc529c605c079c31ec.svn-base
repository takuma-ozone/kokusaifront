<template src="./SSMISRD02Template.html"></template>

<script>
import SSMISRD02Model from './SSMISRD02Model.js';
import SSMISRD02Const from './SSMISRD02Const.js';
import BasePage from '@/components/BasePage.vue';
import $rHttp from '../../../sdk/helpers/rdev.http.js';
import kbnConst from '../../../sdk/constant/kbnConst';
import { has } from 'lodash';

export default {
  name: 'SSMISRD02',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  data() {
    return SSMISRD02Model;
  },
  watch: {},
  computed: {
    viewConst() {
      return SSMISRD02Const;
    },
  },
  created() {
    this.empty();
    this.$store.commit({
      type: 'setSessionToken',
      sessionToken: 1,
    });
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
      const params = this.$route.params;
      // 戻るボタン押下で確認画面から戻った場合は、スナップからモデルを復元する
      if (this.$util.lookup(params, 'route_params.exec_back') && params.route_params.exec_back) {
        this.bind_params.model = Object.assign({}, this.$loadSnap('clickNext'));
      } else {
        // スマクラからお客様情報を取得する
        const response = await $rHttp.post('/core/login/getinfo', {});
        if (response.data.code === 0) {
          if (has(response, 'data.data')) {
            this.bind_params.model.userno = response.data.data.userId;
            this.bind_params.model.customer_nm = response.data.data.corpNm;
            this.bind_params.model.customer_nmk = response.data.data.corpKnm;
            this.bind_params.model.busho_nm = response.data.data.bushoNm;
            this.bind_params.model.kokyaku_nm =
              response.data.data.userSei + response.data.data.userMei;
            this.bind_params.model.kokyaku_nmk =
              response.data.data.userKsei + response.data.data.userKmei;
            this.bind_params.model.customer_tel =
              response.data.data.tel1 + response.data.data.tel2 + response.data.data.tel3;
            this.bind_params.model.customer_fax =
              response.data.data.fax1 + response.data.data.fax2 + response.data.data.fax3;
            this.bind_params.model.customer_mail = response.data.data.email;
            this.bind_params.model.customer_yubin = response.data.data.zip;
            this.bind_params.model.customer1_add = response.data.data.todouNm;
            this.bind_params.model.customer2_add = response.data.data.sityosonNm;
            this.bind_params.model.customer3_add =
              response.data.data.addr1 + response.data.data.addr2 + response.data.data.addr3;
          } else {
            this.$router.push({
              name: SSMISRD02Const.ERROR,
              params: {
                route_params: {
                  message: response.data.message,
                },
              },
            });
          }
        } else {
          this.$router.push({
            name: SSMISRD02Const.ERROR,
            params: {
              route_params: {
                message: response.data.message,
              },
            },
          });
        }
      }
    },

    /**
     * 次へボタン押下
     */
    async onClickNext() {
      const param = { model: this.bind_params.model };
      const checkModel = {
        haisokokyaku_cd: this.bind_params.model.haisokokyaku_cd,
        moshikomi_id: this.bind_params.model.moshikomi_id,
        execMode: kbnConst.VAL_PROCMODE_CHECKONLY,
      };
      this.$multipleValidate(async () => {
        // 現在のモデルをスナップ
        await this.$saveSnap('clickNext', 'bind_params.model');
        const response = await $rHttp.post('/core/login/regist', checkModel);
        if (response.data.code === 0) {
          if (has(response, 'data.data')) {
            if (response.data.data.result_code === 0) {
              this.$router.push({
                name: SSMISRD02Const.CONFIRM,
                params: {
                  route_params: param,
                },
              });
            } else {
              this.$router.push({
                name: SSMISRD02Const.ERROR,
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
            name: SSMISRD02Const.ERROR,
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
      window.open('https://www.e-service.sagawa-exp.co.jp/o/wtx/WTPSUP07D01.html');
    },
  },
};
</script>

<style lang="scss" src="./SSMISRD02Style.scss" scoped></style>
