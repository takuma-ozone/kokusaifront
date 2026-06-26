<template src="./SSMISSD06Template.html"></template>

<script>
import SSMISSD06Model from './SSMISSD06Model.js';
import SSMISSD06Const from './SSMISSD06Const.js';
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'SSMISSD06',
  mixins: [BasePopup], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  //メソッド目次
  //初期処理・検索関連
  //基本ボタン(登録・追加・削除)
  //遷移系ボタン(戻る)

  data() {
    return SSMISSD06Model;
  },

  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  async mounted() {
    this.empty();
    const propsData = this.$keepTransitionParameter();
    if (propsData) {
      this.$sUtils.storeSearchResult(this.model_route_params, propsData.route_params);
      this.bind_params.model_seq.t_shukkairaimeisai_is_seqno = this.model_route_params.list_t_shukkairaimeisai_is_seqno[
        this.model_route_params.index
      ];
    }
    await this.init();
    await this.$multipleValidate();
  },
  methods: {
    /////////////////
    //初期処理
    /////////////////
    async init() {
      this.bind_params.option_errors = [];
      this.bind_params.panel = [{ key: 1, num: 1, name: '' }];

      // 明細のインボイス通貨を取得する
      const response1 = await this.$sAccess.select(
        SSMISSD06Const.MEISAI_SELECT,
        this.bind_params.model_seq
      );
      if (response1 && response1.data.data.length !== 0) {
        this.bind_params.model_shukka.invoice_cur_text = this.dispCur(
          response1.data.data[0].invoice_cur
        );
      }

      // 品目情報を取得する
      const response2 = await this.$sAccess.select(
        SSMISSD06Const.SQL_SELECT,
        this.bind_params.model_seq
      );
      // selectしたデータを格納して次の要素を用意する
      if (response2 && response2.data.data.length !== 0) {
        for (let i = 0; i < response2.data.data.length; i++) {
          this.bind_params.model.splice(i, 1, response2.data.data[i]);
          this.bind_params.model[i].n_line_id = i + 1;
          // 最後の要素以外であればパネルを追加してモデルを追加する
          if (i < response2.data.data.length - 1) {
            this.bind_params.panel.push({ key: i + 2, num: i + 2, name: '' });
            this.bind_params.model.push({
              t_shukkairaiitem_is_seqno: null,
              t_shukkairaimeisai_is_seqno: null,
              n_line_id: i + 2,
              item_nm: '',
              item_kosu: '',
              item_unit: '',
              item_price: '',
              n_netweight: '',
              n_grossweight: '',
              item_country: '',
              n_excl_cnt: 0,
            });
          }
        }
        await this.initOptionCheck();
      } else {
        //データがない場合
        this.bind_params.model[0].t_shukkairaimeisai_is_seqno = this.bind_params.model_seq.t_shukkairaimeisai_is_seqno;
      }
      this.$saveSnap('initial');
      this.visible = true;
    },

    async initOptionCheck() {
      for (let i = 0; i < this.bind_params.model.length; i++) {
        //原産国
        if (
          !this.$refs.item_country[0].selectCheck(this.bind_params.model[i].item_country, false)
        ) {
          this.bind_params.model[i].item_country = '';
          this.$sUtilsEx.errorSelectMessage('原産国', this.bind_params.option_errors);
        }
        //単位
        if (!this.$refs.item_unit[0].selectCheck(this.bind_params.model[i].item_unit, false)) {
          this.bind_params.model[i].item_unit = '';
          this.$sUtilsEx.errorSelectMessage('単位', this.bind_params.option_errors);
        }
      }
    },

    /////////////////
    //基本ボタン
    /////////////////
    clickProliferation() {
      const add = this.bind_params.panel[this.bind_params.panel.length - 1];
      const modeldata = this.bind_params.model[this.bind_params.model.length - 1];
      if (add.num < 50) {
        const number = add.num + 1;
        const linenumber = modeldata.n_line_id + 1;
        this.bind_params.panel.push({ key: number, num: number, name: '' });
        this.bind_params.model.push({
          t_shukkairaiitem_is_seqno: null,
          t_shukkairaimeisai_is_seqno: this.bind_params.model_seq.t_shukkairaimeisai_is_seqno,
          n_line_id: linenumber,
          item_nm: '',
          item_kosu: '',
          item_unit: '',
          item_price: '',
          n_netweight: '',
          n_grossweight: '',
          item_country: '',
          n_excl_cnt: 0,
        });
      }
    },

    async onClickRegist() {
      this.$multipleValidate(async () => {
        const insertList = [];
        const updateList = [];
        const updfordelList = [];
        // 各データをinsert・updateに分類している
        this.bind_params.model.forEach(function(value) {
          if (value.t_shukkairaiitem_is_seqno == null) {
            value.propsName = SSMISSD06Const.PROPSNAMEINSERT;
            insertList.push(value);
          } else {
            value.propsName = SSMISSD06Const.PROPSNAMEUPDATE;
            updateList.push(value);
          }
        });
        // 消去データをupdatefordelに分類している
        if (this.bind_params.delete_params.length !== 0) {
          this.bind_params.delete_params.forEach(function(value) {
            value.propsName = SSMISSD06Const.PROPSNAMEUPDFORDEL;
            updfordelList.push(value);
          });
        }
        await this.$sUtils.openConfirmDialog('変更', async () => {
          try {
            if (insertList.length !== 0) {
              const response1 = await this.$sUtils.insertUpdateInAll(insertList);
            }
            if (updateList.length !== 0) {
              const response2 = await this.$sUtils.insertUpdateInAll(updateList);
            }
            if (updfordelList.length !== 0) {
              const response3 = await this.$sUtils.insertUpdateInAll(updfordelList);
            }
            // 初期化処理を行っている
            this.bind_params.delete_params = [];
            this.bind_params.model = [
              {
                t_shukkairaiitem_is_seqno: null,
                t_shukkairaimeisai_is_seqno: null,
                n_line_id: 1,
                item_nm: '',
                item_kosu: '',
                item_unit: '',
                item_price: '',
                n_netweight: '',
                n_grossweight: '',
                item_country: '',
                n_excl_cnt: 0,
              },
            ];
            this.bind_params.seigyo_flg = '0';
            this.init();
          } catch (e) {
            throw e;
          }
        });
      });
    },

    // 削除ボタンの処理
    onClickDelete(i) {
      if (this.bind_params.model[i].t_shukkairaiitem_is_seqno != null) {
        this.bind_params.delete_params.push({
          t_shukkairaiitem_is_seqno: this.bind_params.model[i].t_shukkairaiitem_is_seqno,
          t_shukkairaimeisai_is_seqno: this.bind_params.model[i].t_shukkairaimeisai_is_seqno,
          n_excl_cnt: this.bind_params.model[i].n_excl_cnt,
        });
      }
      this.bind_params.panel.splice(i, 1);
      this.bind_params.model.splice(i, 1);
      let count = i;

      if (this.bind_params.panel.length !== count) {
        while (count < this.bind_params.panel.length) {
          this.bind_params.panel[count].key -= 1;
          this.bind_params.panel[count].num -= 1;
          this.bind_params.model[count].n_line_id -= 1;
          count++;
        }
      }
    },

    /////////////////
    //遷移系ボタン
    /////////////////
    onClickBack() {
      this.model_route_params.seigyo_flg = this.bind_params.seigyo_flg;
      this.$router.push({
        name: SSMISSD06Const.ROUTE_SSMISSD04,
        params: { route_params: this.model_route_params },
      });
    },

    /////////////////
    //インボイス通貨表示制御
    /////////////////
    dispCur(cur) {
      const curText = '-';
      let flg = false;
      const curArray = ['JPY', 'USD', 'EUR', 'CNY', 'KRW'];
      if (cur == null) {
        return curText;
      } else {
        for (let i = 0; i < curArray.length; i++) {
          if (cur === curArray[i]) {
            flg = true;
            break;
          }
        }
      }
      if (flg === true) {
        return cur;
      } else {
        return curText;
      }
    },
  },

  async beforeRouteLeave(to, from, next) {
    let result = true;
    const nowModel = this.bind_params.model;
    const snapModel = this.$loadSnap('initial').bind_params.model;
    //保存した初期モデルと現在のモデルが一致するか確認
    if (!_.isEqual(snapModel, nowModel)) {
      result = await this.$sUtils.confirm(this.$msg(this.$sMsg.SCREENLEAVECONFIRM), '確認', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info',
      });
    }
    if (result) {
      this.empty();
      next();
    } else {
      next(false);
    }
  },
  //テーブル高さ指定 パネルの開閉によって高さ調整を行う
  tHeight() {
    return this.command.isPanelOpen ? '400' : '505';
  },
  computed: {
    netw: function() {
      const nw = this.bind_params.model.reduce((p, x) => p + Number(x.n_netweight), 0);
      if (Number.isFinite(nw)) {
        if (nw <= 0) {
          return 0;
        } else if (nw >= 9999) {
          return 9999;
        } else {
          return Math.round(nw * 10) / 10;
        }
      }
      return '-';
    },
    grossw: function() {
      const gw = this.bind_params.model.reduce((p, x) => p + Number(x.n_grossweight), 0);
      if (Number.isFinite(gw)) {
        if (gw <= 0) {
          return 0;
        } else if (gw >= 9999) {
          return 9999;
        } else {
          return Math.round(gw * 10) / 10;
        }
      }
      return '-';
    },
    sumKingaku: function() {
      const kingaku = this.bind_params.model.reduce(
        (p, x) => p + Number(x.item_price * x.item_kosu),
        0
      );
      if (Number.isFinite(kingaku)) {
        if (kingaku <= 0) {
          return 0;
        } else {
          return (Math.round(kingaku * 100) / 100).toLocaleString();
        }
      }
      return '-';
    },
    com: function() {
      return function(caption, value) {
        return caption + value.key;
      };
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD06Style.scss" scoped></style>
