<template src="./SAMPLETemplate.html"></template>

<script>
import SAMPLEModel from './SAMPLEModel.js';
import SAMPLEConst from './SAMPLEConst.js';
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SAMPLE',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  data() {
    return SAMPLEModel;
  },

  mounted() {
    this.setInitial();
  },

  methods: {
    /**
     * @func setInitial
     * 初期処理イベント
     * 処理説明: 画面起動時のイベント、一覧画面の場合は少なめになる想定
     */
    setInitial() {
      // クリアボタン押下時のため、初期状態を保存しておく。
      // Vuexを使用して状態保存をしている。処理詳細についてはBasePage.vueに記載
      // 参考:https://vuex.vuejs.org/ja/
      const today = new Date();
      const y = today.getFullYear();
      const m = ('00' + (today.getMonth() + 1)).slice(-2);
      const d = ('00' + today.getDate()).slice(-2);
      this.bind.searchCondition.D_TOROKU_FROM = y + '/' + m + '/' + d;
      this.bind.searchCondition.D_TOROKU_TO = y + '/' + m + '/' + d;
      this.$saveSnap('initial');
    },

    /**
     * @func clickSearch
     * イベント名: 検索イベント
     * 処理説明: サーバーへ検索条件モデルを送り、検索結果を受け取る。
     */
    clickSearch() {
      //バリデーションチェック
      this.$multipleValidate(async () => {
        //処理確認のダイアログ表示
        //Select処理を行う場合は以下のように記述する。
        // const response = this.$sUtils.itiranSearch(
        //   SAMPLEConst.SQL_SELECT,
        //   this.bind.searchCondition
        // );
        //Select結果をモデルへ格納する。
        //this.bind.searchResult.searchResultList = await response.data.data;
        //this.tablePage.displayList = this.dispData(this.bind.searchResult.searchResult);

        //以下はサンプル画面表示用
        this.bind.searchResult.searchResultList = [
          {
            m_sample_seqno: 1,
            sample_id: '1234',
            sample_nm: 'サンプルデータ',
            d_toroku: '2021/01/01 00:00:00',
            torokuuser: 'サンプルユーザ',
            d_koshin: '2021/01/01 00:00:00',
            koshinuser: 'サンプルユーザ',
          },
        ];
        this.tablePage.displayList = await this.dispData(this.bind.searchResult.searchResultList);
      });
    },

    /**
     * @func clearForm
     * イベント名: クリアボタン押下イベント
     * 処理説明: 検索条件を全てクリアする
     */
    clearForm() {
      // mounted時に生成したスナップを値に代入する
      Object.assign(
        this.$data.bind.searchCondition,
        this.$loadSnap('initial').bind.searchCondition
      );
    },

    /**
     * @func clickChild
     * イベント名: 新規登録ボタン押下イベント
     * 処理説明: 新規登録モードで子画面に遷移する
     */
    clickChild() {
      //新規の遷移パラメータ初期化
      //下記パラメータの有無でモード判断を行っているため
      this.route_params.m_sample_seqno = null;

      //子画面遷移
      // Vue-Routerを使用して画面遷移をしている。pathの詳細はrouter.jsに記載
      // 参考:https://router.vuejs.org/ja/
      this.$router.push({
        name: SAMPLEConst.NAME_CHILD,
        params: { route_params: this.route_params },
      });
    },

    clickMenu() {
      this.isSideMenu = !this.isSideMenu;
      this.$store.commit({
        type: 'setMenu',
        isSideMenu: this.isSideMenu,
      });
    },

    /**
     * @func clickAlert
     * イベント名: アラートメッセージ表示ボタン押下イベント
     * 処理説明: ユーザがメッセージを見るためのメッセージボックスを表示する
     */
    clickAlert() {
      this.$sUtils.alert('アラートメッセージ表示', 'Title-Alert', {
        confirmButtonText: '閉じる',
        type: 'success',
      });
    },

    /**
     * @func clickConfirm
     * イベント名: 確認メッセージ表示ボタン押下イベント
     * 処理説明: ユーザがメッセージを確認し、Yes/Noを選択するためのメッセージボックスを表示する
     */
    async clickConfirm() {
      const result = await this.$sUtils.confirm('確認メッセージ表示', 'Title-Confirm', {
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ',
        type: 'warning',
      });
      if (result) {
        this.$sUtils.alert('はいを選択しました。', 'Title-Result', {
          confirmButtonText: '閉じる',
          type: 'info',
        });
      }
    },

    /**
     * @func clickPrompt
     * イベント名: 確認メッセージ表示-入力ボタン押下イベント
     * 処理説明: ユーザがメッセージを確認し、パラメータを入力するためのメッセージボックスを表示する
     */
    async clickPrompt() {
      const result = await this.$sUtils.prompt('値入力メッセージ表示', 'Title-Prompt', {
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ',
        inputPattern: /\d*[0-9]\b/,
        inputErrorMessage: '数字のみ入力可能です。',
        type: 'warning',
      });
      if (result.result) {
        this.$sUtils.alert('入力結果：' + result.value, 'Title-Result', {
          confirmButtonText: '閉じる',
          type: 'info',
        });
      }
    },

    /**
     * @func clickInsert
     * 登録処理の実装イメージ
     * SAMPLE.vue画面は一覧検索画面のため登録処理がない
     * 子画面のSAMPLEChild.vueに実装されるイメージ
     */
    clickInsert() {
      //確認メッセージ表示
      this.$sUtils.openConfirmDialog('登録', async () => {
        //DB内SEQ名称。Const.jsに記述したほうが見栄えがよさそう
        const seqName = 'seq_sample';
        //Insert対象テーブルのUniqKeyのSEQNOカラム物理名
        const seqColumnName = 'sample_seqno';
        //登録処理実行
        const response = await this.$sAccess.insertGetSeq(
          SAMPLEConst.SQL_INSERT,
          searchCondition, //登録データモデル。SAMPLE.vueには登録処理がないため、実装イメージとしてsearchConditionで代用
          seqName,
          seqColumnName
        );
      });
    },

    /**
     * @func clickUpdate
     * 更新処理の実装イメージ
     * SAMPLE.vue画面は一覧検索画面のため更新処理がない
     * 子画面のSAMPLEChild.vueに実装されるイメージ
     */
    clickUpdate() {
      //確認メッセージ表示
      this.$sUtils.openConfirmDialog('更新', async () => {
        //Update対象テーブル名
        const tableName = 'sample_table';
        //更新対象データのSeqカラム物理名
        const seqColumnName = 'sample_seqno';
        //対象テーブルの排他制御カウンタカラム物理名
        const exclusionControlColumn = 'n_excl_cnt';
        //更新処理実行
        //楽観的排他制御の確認を行う共通機能
        const response = await this.$sUtils.updateWithExclusionControl(
          SAMPLEConst.SQL_UPDATE,
          searchCondition, //更新用モデル。SAMPLE.vueには更新処理がないため、実装イメージとしてsearchConditionで代用
          tableName,
          seqColumnName,
          exclusionControlColumn
        );
      });
    },

    /**
     * @func editEvent
     * イベント名: グリッド行クリックイベント
     * 処理説明: 更新モードで子画面に遷移する。
     */
    editEvent(row) {
      //対象行のSEQを取得して、子画面遷移用モデルに格納する。
      this.route_params.m_sample_seqno = row.m_sample_seqno;

      //子画面遷移
      // Vue-Routerを使用して画面遷移をしている。pathの詳細はrouter.jsに記載
      // 参考:https://router.vuejs.org/ja/
      this.$router.push({
        name: SAMPLEConst.NAME_CHILD,
        params: { route_params: this.route_params },
      });
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
      this.tablePage.displayList = this.dispData(this.bind.searchResult.searchResult);
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
      const compareList = this.bind.searchResult.searchResult;
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
      this.bind.searchResult.searchResult = list;
      return this.dispData(list);
    },

    /**
     * @func onReturn
     * イベント名: 子画面から戻ってきた時に発火
     * 親htmlに下記を記載
     * <router-view :seq="transition.param" @return="onReturn"></router-view>
     * 子画面側の閉じる際のイベントに下記を記載。
     * this.$emit('return');
     */
    onReturn() {
      this.clickSearch();
    },

    /**
     * @func clickProliferation
     * divループ動作確認
     */
    clickProliferation() {
      const tests = this.bind.tests[this.bind.tests.length - 1];
      const number = tests.a + 1;
      this.bind.tests.push({ key: number, a: number, b: '' });
    },

    onClickTopView() {
      document.getElementById('SAMPLE').scrollIntoView({ behavior: 'smooth' });
    },
  },

  computed: {
    // グリッドのデータ数の総計をカウントする。
    total() {
      return this.bind.searchResult.searchResultList.length;
    },

    //テーブル高さ指定 パネルの開閉によって高さ調整を行う。
    tHeight() {
      return this.command.isPanelOpen ? '400' : '505';
    },
  },
};
</script>

<style lang="scss" src="./SAMPLEStyle.scss" scoped></style>
