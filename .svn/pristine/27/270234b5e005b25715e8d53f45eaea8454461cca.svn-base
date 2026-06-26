<template src="./NSISBO01D01Template.html"></template>

<script>
/**
 *************************************************************************************
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2018 by Future Architect, Inc. Japan
 *
 * 画面ID: NSISBO01-D01
 * 画面名: 都道府県選択（ポップアップ）
 * 作成者: XXX
 * 更新履歴：
 * 更新日付		更新者		更新内容
 * 201X/XX/XX	XXX			設計書-新規作成
 *
 *************************************************************************************
 */
import NSISBO01D01Model from './NSISBO01D01Model.js';
import NSISBO01D01Const from './NSISBO01D01Const.js';
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'NSISBO01D01',
  mixins: [BasePopup], // 共通コンポーネントの読み込み

  props: {
    visible: Boolean,
    tdfkn: {},
  },

  data() {
    return NSISBO01D01Model;
  },

  mounted() {
    this.initialSet();
  },

  methods: {
    /**
     * @func functionNo1
     * イベント名: 初期表示
     * 処理説明: 遷移元画面から当該画面を表示した際、初期表示を行う
     */
    initialSet() {
      // TODO: function名を修正してロジックを実装してください。
    },

    /**
     * @func functionNo2,esc
     * イベント名: 「閉じる」ボタン押下
     * 処理説明: ポップアップを閉じる
     */
    cansel() {
      this.isVisibleComputed = false;
    },

    /**
     * @func functionNo3,f12
     * イベント名: 「決定」ボタン押下
     * 処理説明: 選択された項目のコードを遷移元画面へ返し、ポップアップを閉じる
     */
    closePopup() {
      this.isVisibleComputed = false;
    },
  },

  computed: {
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

<style lang="scss" src="./NSISBO01D01Style.scss" scoped></style>
