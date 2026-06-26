<template src="./SSMISSD05Template.html"></template>

<script>
import SSMISSD05Model from './SSMISSD05Model.js';
import SSMISSD05Const from './SSMISSD05Const.js';
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'SSMISSD05',
  mixins: [BasePopup], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  //メソッド目次
  //初期処理・検索関連
  //基本ボタン(登録・追加・削除)
  //遷移系ボタン(戻る)

  data() {
    return SSMISSD05Model;
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
      this.bind_params.panel = [{ key: 1, num: 1, name: '' }];
      const response = await this.$sAccess.select(
        SSMISSD05Const.SQL_SELECT,
        this.bind_params.model_seq
      );
      // selectしたデータを格納して次の要素を用意する
      if (response && response.data.data.length !== 0) {
        for (let i = 0; i < response.data.data.length; i++) {
          this.bind_params.model.splice(i, 1, response.data.data[i]);
          this.bind_params.model[i].n_line_id = i + 1;
          // 最後の要素以外であればパネルを追加してモデルを追加する

          if (i < response.data.data.length - 1) {
            this.bind_params.panel.push({ key: i + 2, num: i + 2, name: '' });
            this.bind_params.model.push({
              t_shukkairaipack_is_seqno: null,
              t_shukkairaimeisai_is_seqno: null,
              n_line_id: i + 2,
              n_packhaisokosu: '',
              package_weight: '',
              package_length: '',
              package_width: '',
              package_height: '',
              n_excl_cnt: 0,
            });
          }
        }
      } else {
        this.bind_params.model[0].t_shukkairaimeisai_is_seqno = this.bind_params.model_seq.t_shukkairaimeisai_is_seqno;
      }

      this.$saveSnap('initial');
      this.visible = true;
    },
    /////////////////
    //基本ボタン
    /////////////////
    onClickRegist() {
      this.$multipleValidate(async () => {
        const insertList = [];
        const updateList = [];
        const updatefordelList = [];
        // 各データをinsert・updateに分類している
        this.bind_params.model.forEach(function(value) {
          if (value.t_shukkairaipack_is_seqno == null) {
            value.propsName = SSMISSD05Const.PROPSNAMEINSERT;
            insertList.push(value);
          } else {
            value.propsName = SSMISSD05Const.PROPSNAMEUPDATE;
            updateList.push(value);
          }
        });
        // 消去データをupdatefordelに分類している
        if (this.bind_params.delete_params.length !== 0) {
          this.bind_params.delete_params.forEach(function(value) {
            value.propsName = SSMISSD05Const.PROPSNAMEUPDATEFORDEL;
            updatefordelList.push(value);
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
            if (updatefordelList.length !== 0) {
              const response3 = await this.$sUtils.insertUpdateInAll(updatefordelList);
            }
            // 初期化処理を行っている
            this.bind_params.delete_params = [];
            this.bind_params.model = [
              {
                t_shukkairaipack_is_seqno: null,
                t_shukkairaimeisai_is_seqno: null,
                n_line_id: 1,
                n_packhaisokosu: '',
                package_weight: '',
                package_length: '',
                package_width: '',
                package_height: '',
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
      if (this.bind_params.model[i].t_shukkairaipack_is_seqno != null) {
        this.bind_params.delete_params.push({
          t_shukkairaipack_is_seqno: this.bind_params.model[i].t_shukkairaipack_is_seqno,
          t_shukkairaimeisai_is_seqno: this.bind_params.model[i].t_shukkairaimeisai_is_seqno,
          n_excl_cnt: this.bind_params.model[i].n_excl_cnt,
        });
      }
      this.bind_params.panel.splice(i, 1);
      this.bind_params.model.splice(i, 1);
      let count = i;
      // パネルのkeyとnumを合わせる
      if (this.bind_params.panel.length !== count) {
        while (count < this.bind_params.panel.length) {
          this.bind_params.panel[count].key -= 1;
          this.bind_params.panel[count].num -= 1;
          this.bind_params.model[count].n_line_id -= 1;
          count++;
        }
      }
    },

    clickProliferation() {
      const adddata = this.bind_params.panel[this.bind_params.panel.length - 1];
      const modeldata = this.bind_params.model[this.bind_params.model.length - 1];
      if (adddata.num < 8) {
        const addnumber = adddata.num + 1;
        const linenumber = modeldata.n_line_id + 1;
        this.bind_params.panel.push({ key: addnumber, num: addnumber, name: '' });
        this.bind_params.model.push({
          t_shukkairaipack_is_seqno: null,
          t_shukkairaimeisai_is_seqno: this.bind_params.model_seq.t_shukkairaimeisai_is_seqno,
          n_line_id: linenumber,
          n_packhaisokosu: '',
          package_weight: '',
          package_length: '',
          package_width: '',
          package_height: '',
          n_excl_cnt: 0,
        });
      }
    },

    /////////////////
    //遷移系ボタン
    /////////////////
    onClickBack() {
      this.model_route_params.seigyo_flg = this.bind_params.seigyo_flg;
      this.$router.push({
        name: SSMISSD05Const.ROUTE_SSMISSD04,
        params: { route_params: this.model_route_params },
      });
    },
  },
  //テーブル高さ指定 パネルの開閉によって高さ調整を行う。
  tHeight() {
    return this.command.isPanelOpen ? '400' : '505';
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

  computed: {
    sumkosu: function() {
      const kosu = this.bind_params.model.reduce((p, x) => p + Number(x.n_packhaisokosu), 0);
      if (Number.isFinite(kosu)) {
        if (kosu <= 0) {
          return 0;
        } else if (kosu >= 9999) {
          return 9999;
        } else {
          return Math.round(kosu);
        }
      }
      return '-';
    },
    sumweight: function() {
      const weight = this.bind_params.model.reduce(
        (p, x) => p + Number(x.n_packhaisokosu * x.package_weight),
        0
      );
      if (Number.isFinite(weight)) {
        if (weight <= 0) {
          return 0;
        } else if (weight >= 9999) {
          return 9999;
        } else {
          return Math.round(weight * 10) / 10;
        }
      }
      return '-';
    },
    sumside: function() {
      return function(i) {
        const side =
          Number(this.bind_params.model[i].package_length) +
          Number(this.bind_params.model[i].package_width) +
          Number(this.bind_params.model[i].package_height);
        if (Number.isFinite(side)) {
          if (side <= 0) {
            return 0;
          } else if (side >= 9999) {
            return 9999;
          } else {
            return Math.round(side * 10) / 10;
          }
        }
        return '-';
      };
    },
    com: function() {
      return function(caption, value) {
        return caption + value.key;
      };
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD05Style.scss" scoped></style>
