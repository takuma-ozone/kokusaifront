<template src="./SSMISSD02Template.html"></template>

<script>
import SSMISSD02Model from './SSMISSD02Model.js';
import SSMISSD02Const from './SSMISSD02Const.js';
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SSMISSD02',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  data() {
    return SSMISSD02Model;
  },

  mounted() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const response = await this.$sAccess.select(SSMISSD02Const.SQL_SELECT, {});
      this.searchResult = response.data.data;
      this.tablePage.displayList = await this.dispData(this.searchResult);
    },

    /**
     * @func onClickSampleDownload
     * イベント名：サンプルCSVダウンロード
     * 処理説明：取込サンプルCSVのダウンロードを行う
     */
    async onClickSampleDownload() {
      //サンプル CSV のダウンロード押下時処理
      const filename = SSMISSD02Const.CSV_NAME;
      const url = '/internationalShipping/web/' + filename;
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = function() {
        const url = window.URL.createObjectURL(
          new Blob([request.response], { type: 'aplication/octet-stream' })
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        link.click();
      };
      request.send();
    },

    /**
     * @func handlePaging
     * イベント名: ページャ変更イベント
     * 処理説明: ページャが変更された時のファンクション
     * TODO うまいこと共通化したい。
     */
    handlePaging(current) {
      // 変更されたページに変更する。
      this.tablePage.currentPage = current.page;
      this.tablePage.displayList = this.dispData(this.searchResult);
    },
    /**
     * @func dispData
     * イベント名：画面表示データ制限イベント
     * 処理説明：検索結果データを表示件数に合わせて切り出す
     */
    dispData(list) {
      const array = list.slice(
        (this.tablePage.currentPage - 1) * this.tablePage.pageSize,
        this.tablePage.currentPage * this.tablePage.pageSize
      );
      return array;
    },

    /**
     * @func sort
     * イベント名：テーブルソート
     * 処理説明：ソートを行う
     */
    sort({ data, column, property, order }) {
      this.tablePage.sortColumn = property;
      const compareList = this.searchResult;
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
      this.searchResult = list;
      return this.dispData(list);
    },
  },

  computed: {
    // グリッドのデータ数の総計をカウントする。
    total() {
      return this.searchResult.length;
    },

    //テーブル高さ指定 パネルの開閉によって高さ調整を行う。
    tHeight() {
      return '505';
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD02Style.scss" scoped></style>
