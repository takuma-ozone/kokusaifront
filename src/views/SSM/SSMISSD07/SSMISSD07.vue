<template src="./SSMISSD07Template.html"></template>

<script>
import SSMISSD07Model from './SSMISSD07Model.js';
import SSMISSD07Const from './SSMISSD07Const.js';
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'SSMISSD07',
  mixins: [BasePopup], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  //メソッド目次
  //初期処理・検索関連
  //基本ボタン(登録・追加・削除)
  //遷移系ボタン(戻る)
  //その他

  data() {
    return SSMISSD07Model;
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
      const response = await this.$sAccess.select(
        SSMISSD07Const.SQL_SELECT,
        this.bind_params.model_seq
      );
      // selectしたデータを格納して次の要素を用意する
      if (response && response.data.data.length !== 0) {
        for (let i = 0; i < response.data.data.length; i++) {
          this.bind_params.model.splice(i, 1, response.data.data[i]);
          this.bind_params.model[i].n_line_id = i + 1;
          this.bind_params.model[i].person_tel = this.$sUtilsEx.cutCountryDialCode(
            this.bind_params.model[i].person_tel
          );
          // 最後の要素以外であればパネルを追加してモデルを追加する
          if (i < response.data.data.length - 1) {
            this.bind_params.panel.push({ key: i + 2, num: i + 2, name: '' });
            this.bind_params.model.push({
              t_shukkairaiperson_is_seqno: null,
              t_shukkairaimeisai_is_seqno: null,
              n_line_id: i + 2,
              person_type_cd: '',
              person_yubin: '',
              person_toshi_nm: '',
              person_shu_cd: '',
              person1_add: '',
              person2_add: '',
              person3_add: '',
              person1_nm: '',
              person2_nm: '',
              person_mail: '',
              person_country_cd: '',
              person_country_tel_cd: '',
              person_tel: '',
              torokuno1_cd: '',
              torokuno2_cd: '',
              torokuno3_cd: '',
              torokuno1: '',
              torokuno2: '',
              torokuno3: '',
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
        //関係性(データ不正チェック)
        if (
          !this.$refs.person_type_cd[0].selectCheck(this.bind_params.model[i].person_type_cd, false)
        ) {
          this.bind_params.model[i].person_type_cd = '';
          this.$sUtilsEx.errorSelectMessage('関係性', this.bind_params.option_errors);
        }
        //国名
        if (
          !this.$refs.person_country_cd[0].selectCheck(
            this.bind_params.model[i].person_country_cd,
            false
          )
        ) {
          this.bind_params.model[i].person_country_cd = '';
          this.$sUtilsEx.errorSelectMessage('国名', this.bind_params.option_errors);
        }
        //登録番号1
        if (!this.$refs.torokuno1_cd[0].selectCheck(this.bind_params.model[i].torokuno1_cd, true)) {
          this.bind_params.model[i].torokuno1_cd = null;
          this.$sUtilsEx.errorTorokuNoMessage('登録番号区分1', this.bind_params.option_errors);
        }
        //登録番号2
        if (!this.$refs.torokuno2_cd[0].selectCheck(this.bind_params.model[i].torokuno2_cd, true)) {
          this.bind_params.model[i].torokuno2_cd = null;
          this.$sUtilsEx.errorTorokuNoMessage('登録番号区分2', this.bind_params.option_errors);
        }
        //登録番号3
        if (!this.$refs.torokuno3_cd[0].selectCheck(this.bind_params.model[i].torokuno3_cd, true)) {
          this.bind_params.model[i].torokuno3_cd = null;
          this.$sUtilsEx.errorTorokuNoMessage('登録番号区分3', this.bind_params.option_errors);
        }
      }
    },

    /////////////////
    //基本ボタン
    /////////////////
    clickProliferation() {
      const adddata = this.bind_params.panel[this.bind_params.panel.length - 1];
      const modeldata = this.bind_params.model[this.bind_params.model.length - 1];
      if (adddata.num < 5) {
        const addnumber = adddata.num + 1;
        const linenumber = modeldata.n_line_id + 1;
        this.bind_params.panel.push({ key: addnumber, num: addnumber, name: '' });
        this.bind_params.model.push({
          t_shukkairaiperson_is_seqno: null,
          t_shukkairaimeisai_is_seqno: this.bind_params.model_seq.t_shukkairaimeisai_is_seqno,
          n_line_id: linenumber,
          person_type_cd: '',
          person_yubin: '',
          person_toshi_nm: '',
          person_shu_cd: '',
          person1_add: '',
          person2_add: '',
          person3_add: '',
          person1_nm: '',
          person2_nm: '',
          person_mail: '',
          person_country_cd: '',
          person_country_tel_cd: '',
          person_tel: '',
          torokuno1_cd: '',
          torokuno2_cd: '',
          torokuno3_cd: '',
          torokuno1: '',
          torokuno2: '',
          torokuno3: '',
          n_excl_cnt: 0,
        });
      }
    },

    async onClickRegist() {
      // 関係者タイプの重複チェックをしている
      for (let i = 0; i < this.bind_params.model.length; i++) {
        for (let j = 0; j < this.bind_params.model.length; j++) {
          if (
            j !== i &&
            this.bind_params.model[j].person_type_cd === this.bind_params.model[i].person_type_cd
          ) {
            await this.$alert(this.$msg(this.$sMsgEx.PERSON_TYPE_CD_NOT_UNIQUE_ERROR), 'エラー', {
              type: 'error',
            });
            return;
          }
        }
      }
      this.$multipleValidate(async () => {
        const insertList = [];
        const updateList = [];
        const updatefordelList = [];
        // 各データをinsert・updateに分類している
        this.bind_params.model.forEach(function(value) {
          value.person_country_tel_cd = this.$sUtilsEx.getCountryDialCode(value.person_country_cd);
          value.person_tel_cd = value.person_country_tel_cd + value.person_tel;
          // DBアラート対策
          value.torokuno1 = this.$sUtilsEx.dbTextLength(value.torokuno1);
          value.torokuno2 = this.$sUtilsEx.dbTextLength(value.torokuno2);
          value.torokuno3 = this.$sUtilsEx.dbTextLength(value.torokuno3);
          if (value.t_shukkairaiperson_is_seqno == null) {
            value.propsName = SSMISSD07Const.PROPSNAMEINSERT;
            insertList.push(value);
          } else {
            value.propsName = SSMISSD07Const.PROPSNAMEUPDATE;
            updateList.push(value);
          }
        }, this);
        // 消去データをupdatefordelに分類している
        if (this.bind_params.delete_params.length !== 0) {
          this.bind_params.delete_params.forEach(function(value) {
            value.propsName = SSMISSD07Const.PROPSNAMEUPDATEFORDEL;
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
                t_shukkairaiperson_is_seqno: null,
                t_shukkairaimeisai_is_seqno: null,
                n_line_id: 1,
                person_type_cd: '',
                person_yubin: '',
                person_toshi_nm: '',
                person_shu_cd: '',
                person1_add: '',
                person2_add: '',
                person3_add: '',
                person1_nm: '',
                person2_nm: '',
                person_mail: '',
                person_country_cd: '',
                person_country_tel_cd: '',
                person_tel: '',
                torokuno1_cd: '',
                torokuno2_cd: '',
                torokuno3_cd: '',
                torokuno1: '',
                torokuno2: '',
                torokuno3: '',
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
      if (this.bind_params.model[i].t_shukkairaiperson_is_seqno != null) {
        this.bind_params.delete_params.push({
          t_shukkairaiperson_is_seqno: this.bind_params.model[i].t_shukkairaiperson_is_seqno,
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

    /////////////////
    //遷移系ボタン
    /////////////////
    onClickBack() {
      this.model_route_params.seigyo_flg = this.bind_params.seigyo_flg;
      this.$router.push({
        name: SSMISSD07Const.ROUTE_SSMISSD04,
        params: { route_params: this.model_route_params },
      });
    },

    /////////////////
    //その他
    /////////////////
    onClickPlus(a) {
      const res = { countryCode: '', postalCode: '', cityName: '' };
      res.countryCode = this.bind_params.model[a].person_country_cd;
      res.postalCode = this.bind_params.model[a].person_yubin;
      res.cityName = this.bind_params.model[a].person_toshi_nm;
      this.$http.post('/service/controller/SsmIssB07', res).then(response => {
        this.response = response;
        if (this.response.data.data.rezult_code === '1') {
          this.$alert(this.$msg(this.$sMsg.HISSERR), 'エラー', {
            //郵便番号、都市名のどちらかを入力してください
            type: 'error',
          });
          return;
        } else if (this.response.data.data.rezult_code === '2') {
          this.$alert(this.$msg(this.$sMsg.COUNTRYERR), 'エラー', {
            //国名は必須になります
            type: 'error',
          });
          return;
        } else if (this.response.data.data.rezult_code === '3') {
          this.$alert(this.$msg(this.$sMsg.NOTEXIST), 'エラー', {
            //該当の住所は存在しません
            type: 'error',
          });
          return;
        } else if (this.response.data.data.rezult_code === '4') {
          this.$alert(this.$msg(this.$sMsg.RIQESTERR), 'エラー', {
            //リクエストに失敗しました
            type: 'error',
          });
          return;
        } else if (this.response.data.data.address.length === 1) {
          this.bind_params.model[
            a
          ].person_country_cd = this.response.data.data.address[0].countryCode;
          this.bind_params.model[a].person_yubin = this.response.data.data.address[0].postalCode;
          this.bind_params.model[a].person_toshi_nm = this.response.data.data.address[0].cityName;
        } else {
          this.bind_params.result_model.grid_result_set = this.response.data.data.address;
          this.bind_params.count = a;
          this.yubinVisible = true;
        }
      });
    },
    onClickPlusResult(result) {
      if (result !== null) {
        const a = this.bind_params.count;
        this.bind_params.model[a].person_country_cd = result.countryCode;
        this.bind_params.model[a].person_yubin = result.postalCode;
        this.bind_params.model[a].person_toshi_nm = result.cityName;
      }
    },
    onClickPlusClosed() {
      this.yubinVisible = false;
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
    com: function() {
      return function(caption, value) {
        return caption + value.key;
      };
    },
    disCheckOther() {
      //登録区分２専用
      //value = 登録区分1の値
      //value2 = どの配列の中意味なのかを把握する為の数値
      //1の区分が変更になった際に2の活性非活性を決める
      return function(value, value2) {
        if ((value === '' || value === null) && (value2 === '' || value2 === null)) {
          return true;
        } else {
          return false;
        }
      };
    },

    valiCheckTorokuNo() {
      //登録番号⇒引数のタイプがnullでなければ必須、最大35、半角英数
      return function(value) {
        if (value === '' || value === null) {
          return null;
        } else {
          return 'required|max:35|alpha_num';
        }
      };
    },

    valiCheckTorokuNoKbn() {
      //登録タイプ⇒引数がnullでなければ必須
      return function(value) {
        if (value === '' || value === null) {
          return null;
        } else {
          return 'alpha_num';
        }
      };
    },
    getTelCode: function() {
      return function(i) {
        const result = this.$sUtilsEx.getCountryDialCode(
          this.bind_params.model[i].person_country_cd
        );
        return result;
      };
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD07Style.scss" scoped></style>
