import Vue from 'vue';
import VueI18n from 'vue-i18n';
import 'xe-utils';
import VXETable from 'vxe-table';
import VXETablePluginElement from 'vxe-table-plugin-element';
import enLocat from 'vxe-table/lib/locale/lang/en';
import jaLocat from 'vxe-table/lib/locale/lang/ja';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocat,
  },
  ja: {
    ...jaLocat,
  },
};

export const i18n = new VueI18n({
  locale: 'ja',
  messages,
});

const rVxeTable = new Vue({
  name: 'rVxeTable',
  methods: {
    /**
     * モジュールを初期化します
     * @returns {void}
     */
    init() {
      Vue.use(VXETable, {
        i18n: (key, value) => i18n.t(key, value), // 日本語化
      });
      this.setup();
      VXETable.use(VXETablePluginElement); // vxeのプラグイン
    },

    /**
     * VXETableのグローバル設定を行います
     *
     * デフォルトのパラメータは以下URL参照
     * https://xuliangzhan.com/vxe-table/index.html#/table/start/global
     */
    setup() {
      VXETable.setup({
        //size: 'mini', // sizeを'mini'に設定
        table: {
          showOverflow: "ellipsis", // コンテンツが複数行になった場合にtooltipを表示する
          showHeaderOverflow: "title",
          headerAlign: 'center', // ヘッダーを中央寄せ
          stripe: true, // 行の交互に色を付ける
          border: true, // テーブルの枠線を表示
          resizable: true, // 列の横幅サイズを変更可能とする
          highlightHoverRow: true, // マウスカーソルを当てた行に色を付ける
        },

        // 最適化構成
        optimization: {
          scrollX: {},
          scrollY: {
            gt: 50,
            rSize: 30,
          },
        },
      });
    },
  },
});

export default rVxeTable;
