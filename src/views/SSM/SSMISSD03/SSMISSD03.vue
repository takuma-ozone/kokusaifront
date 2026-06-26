<template src="./SSMISSD03Template.html"></template>

<script>
import SSMISSD03Model from './SSMISSD03Model.js';
import SSMISSD03Const from './SSMISSD03Const.js';
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SSMISSD03',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  //メソッド目次
  //初期処理・検索関連
  //基本ボタン(削除・送り状発行・CSV)
  //遷移系ボタン(子画面)
  //その他

  data() {
    return SSMISSD03Model;
  },

  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    // 子画面からデータをセットして自動的に検索
    if (
      this.route_params !== null &&
      this.route_params.search_save_model != null &&
      Object.keys(this.route_params.search_save_model).length !== 0
    ) {
      this.onReturn();
    } else {
      this.initialize();
    }
  },

  methods: {
    /////////////////
    //初期処理
    /////////////////
    initialize() {
      this.empty();
      const date = this.initDate();
      this.bind_params.search_model.d_hassou_from = date;
      this.bind_params.search_model.d_hassou_to = date;
    },

    initDate() {
      // 当日の日付セット
      const date = new Date();
      date.setDate(date.getDate());
      let dateFormat = 'YYYY/MM/DD';
      dateFormat = dateFormat.replace(/YYYY/g, date.getFullYear());
      dateFormat = dateFormat.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
      dateFormat = dateFormat.replace(/DD/g, ('0' + date.getDate()).slice(-2));
      return dateFormat;
    },

    async onReturn() {
      this.empty();
      this.bind_params.search_save_model = Object.assign({}, this.route_params.search_save_model);
      this.saveSearchReady();
    },

    onClickSearchReady() {
      // 検索ボタン押下
      this.$multipleValidate(async () => {
        this.searchActual();
      });
    },

    saveSearchReady() {
      // 自動検索準備
      this.bind_params.search_model = Object.assign({}, this.bind_params.search_save_model);
      this.searchActual();
    },

    async searchActual() {
      this.bind_params.search_result_model = [];
      this.bind_params.hassou_count = 0;
      this.bind_params.search_save_model = Object.assign({}, this.bind_params.search_model);
      const response = await this.$sAccess.select(
        SSMISSD03Const.SQL_SELECT,
        this.bind_params.search_model
      );
      if (response && response.data.data.length !== 0) {
        this.bind_params.search_result_model = response.data.data;
        for (let i = 0; i < this.bind_params.search_result_model.length; i++) {
          if (this.bind_params.search_result_model[i].status === SSMISSD03Const.SAVE_STATUS) {
            this.bind_params.hassou_count++;
          }
        }
        this.btnSetting();
      }
      this.tablePage.displayList = await this.dispData(this.bind_params.search_result_model);
    },

    btnSetting() {
      // ボタン設定
      for (let i = 0; i < this.bind_params.search_result_model.length; i++) {
        if (this.bind_params.search_result_model[i].status === SSMISSD03Const.SAVE_STATUS) {
          this.bind_params.search_result_model[i].btnCap = '参照';
          this.bind_params.search_result_model[i].isDel = false;
          this.bind_params.search_result_model[i].isCreate = false;
          this.bind_params.search_result_model[i].btnType = 'warning';
        }
        if (this.bind_params.search_result_model[i].status === SSMISSD03Const.NOHAKKOU_STATUS) {
          this.bind_params.search_result_model[i].btnCap = '編集';
          this.bind_params.search_result_model[i].isDel = true;
          this.bind_params.search_result_model[i].isCreate = true;
          this.bind_params.search_result_model[i].btnType = 'success';
        }
        if (this.bind_params.search_result_model[i].status === SSMISSD03Const.ERR_STATUS) {
          this.bind_params.search_result_model[i].btnCap = '編集';
          this.bind_params.search_result_model[i].isDel = true;
          this.bind_params.search_result_model[i].isCreate = false;
          this.bind_params.search_result_model[i].btnType = 'success';
        }
      }
    },

    /////////////////
    //基本ボタン
    /////////////////
    async onClickDel(seq, cnt) {
      await this.$sUtils.openConfirmDialog('削除', async () => {
        try {
          const response = await this.$sUtils.updateWithExclusionControl(
            {
              t_shukkairaimeisai_is_seqno: seq,
              n_excl_cnt: cnt,
            },
            SSMISSD03Const.PROPSNAMEUPDATEFORDEL
          );
          this.saveSearchReady();
        } catch (e) {
          throw e;
        }
      });
    },

    async onClickCSV() {
      //CSV発行ボタン押下時処理
      if (this.bind_params.search_result_model.length === 0) {
        this.$sUtils.alert(this.$msg(this.$sMsgEx.CSV_ERROR), 'エラー', {
          confirmButtonText: 'OK',
          type: 'error',
        });
      } else {
        this.$sUtils.exportCsv(
          'SSMISSD03.t_shukkairaimeisai_is_csv.select',
          this.bind_params.search_save_model,
          'SsmIssd03Csvout',
          10,
          30,
          Boolean(this.bind_params.recyclingFlg)
        );
      }
    },

    async onClickCreate(seq, ispackcd) {
      // 送り状発行処理
      let result = true;
      result = await this.$sUtils.confirm(this.$msg(this.$sMsgEx.RESPONSE_CONFIRM), '確認', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info',
      });
      if (result) {
        const response = await this.$sAccess.callAPI(0, seq);
        const url = await response.data.data.url;
        if (url == null) {
          await this.$sUtils.alert(
            this.$msg(this.$sMsgEx.RESPONSE_ERROR) + '再度データを確認ください。',
            'エラー',
            {
              confirmButtonText: 'OK',
              type: 'error',
            }
          );
        } else {
          await this.$sAccess.getDownloadPDF(url);
          this.command.isPopupOpen = true;
        }
        this.saveSearchReady();
      } else {
        return;
      }
    },

    /////////////////
    //遷移系ボタン
    /////////////////
    onClickRegist() {
      const param = {
        list_t_shukkairaimeisai_is_seqno: [null],
        index: 0,
        search_save_model: this.bind_params.search_save_model,
        seigyo_flg: '0',
        errors: [],
      };
      this.empty();
      // 下記の子画面を起動する
      this.$router.push({
        name: SSMISSD03Const.SYUKKA,
        params: { route_params: param },
      });
    },

    onClickUpd(no) {
      // クリックされた行のシーケンスを遷移用モデルにセットする
      const seqList = [];
      for (let i = 0; i < this.bind_params.search_result_model.length; i++) {
        seqList[i] = this.bind_params.search_result_model[i].t_shukkairaimeisai_is_seqno;
      }
      const param = {
        list_t_shukkairaimeisai_is_seqno: seqList,
        index: no - 1,
        search_save_model: this.bind_params.search_save_model,
        seigyo_flg: '0',
        errors: [],
      };
      this.empty();
      this.$router.push({
        name: SSMISSD03Const.SYUKKA,
        params: { route_params: param },
      });
    },

    async onClickCopyRegist(no) {
      this.$multipleValidate(async () => {
        result = await this.$sUtils.openCheckDialog('複写登録', async () => {
          try {
            // クリックされた行のシーケンスを遷移用モデルにセットする
            const seqList = [];
            for (let i = 0; i < this.bind_params.search_result_model.length; i++) {
              seqList[i] = this.bind_params.search_result_model[i].t_shukkairaimeisai_is_seqno;
            }
            const param = {
              list_t_shukkairaimeisai_is_seqno: seqList,
              index: no - 1,
              search_save_model: this.bind_params.search_save_model,
              seigyo_flg: '0',
              errors: [],
              copyregist_flg: '1',
            };
            this.empty();
            this.$router.push({
              name: SSMISSD03Const.SYUKKA,
              params: { route_params: param },
            });
          } catch (e) {
            return;
          }
        });
      });
    },

    //CSV取込マニュアル表示メソッド
    onClickCSVmanual() {
      window.open('/internationalShipping/web/CSVins_manual.pdf', 'CSV取込マニュアル'); // pdfファイル記述
    },

    /////////////////
    //その他
    /////////////////

    // 変更されたページに変更する。
    handlePaging(current) {
      this.tablePage.currentPage = current.page;
      this.tablePage.displayList = this.dispData(this.bind_params.search_result_model);
    },

    sort({ data, column, property, order }) {
      this.tablePage.sortColumn = property;
      const compareList = this.bind_params.search_result_model;
      let list = [];
      if (order === 'asc') {
        list = compareList.sort((a, b) => {
          let r = 0;
          if (a[this.tablePage.sortColumn] < b[this.tablePage.sortColumn]) {
            r = -1;
          } else if (a[this.tablePage.sortColumn] > b[this.tablePage.sortColumn]) {
            r = 1;
          }
          return r;
        });
      } else if (order === 'desc') {
        list = compareList.sort((a, b) => {
          let r = 0;
          if (a[this.tablePage.sortColumn] < b[this.tablePage.sortColumn]) {
            r = 1;
          } else if (a[this.tablePage.sortColumn] > b[this.tablePage.sortColumn]) {
            r = -1;
          }
          return r;
        });
      }
      this.bind_params.search_result_model = list;
      return this.dispData(list);
    },

    dispData(list) {
      const array = list.slice(
        (this.tablePage.currentPage - 1) * this.tablePage.pageSize,
        this.tablePage.currentPage * this.tablePage.pageSize
      );
      return array;
    },

    // ステータスがエラーの時、背景色をつける
    rowStyle({ row }) {
      if (row.status === SSMISSD03Const.ERR_STATUS) {
        return {
          backgroundColor: 'pink',
        };
      } else if (row.status === SSMISSD03Const.SAVE_STATUS) {
        return {
          backgroundColor: 'gray',
          color: 'white',
        };
      }
    },
    closePopup() {
      this.command.isPopupOpen = false;
    },
    openPopup() {
      this.command.isPopupOpen = true;
    },
  },

  //テーブル高さ指定 パネルの開閉によって高さ調整を行う。
  tHeight() {
    return this.command.isPanelOpen ? '400' : '505';
  },

  computed: {
    // グリッドのデータ数の総計をカウントする。
    total() {
      return this.bind_params.search_result_model.length;
    },
    isVisibleComputed: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit('update:visible', value);
      },
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD03Style.scss" scoped></style>
