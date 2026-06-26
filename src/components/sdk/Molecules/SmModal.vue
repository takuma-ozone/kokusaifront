<template>
  <el-dialog
    class="sm-modal"
    :visible.sync="isVisibleComputed"
    :title="title"
    :width="width"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :append-to-body="appendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="beforeClose"
    :center="center"
    :destroy-on-close="destroyOnClose"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
  >
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <template v-slot:default>
      <slot></slot>
      <rm-text com-id="validate" caption="" ref="validate" style="display:none;"></rm-text>
    </template>
    <template v-slot:footer>
      <slot name="footer"></slot>
      <!-- <span class="button" v-if="mode">
        <ra-button @click="insertFunction" type="warning" size="small">登録</ra-button>
      </span>
      <span class="button" style="margin-left:10px;" v-else>
        <ra-button @click="updateFunction" type="warning" size="small">更新</ra-button>
      </span>
      <span class="button" style="margin-left:10px;">
        <ra-button @click="beforeClose" type="info" size="small">閉じる</ra-button>
      </span> -->
    </template>
  </el-dialog>
</template>

<script>
import elDragDialog from '../../../directive/el-drag-dialog'; // base on element-ui
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'SmModal',
  componentName: 'SmModal',
  mixins: [BasePopup], // 共通コンポーネントの読み込み
  directives: { elDragDialog },
  inject: ['$validator'],

  props: {
    //モード処理追加
    mode: {
      type: Boolean,
      default: true,
    },

    //登録ファンクションを引数として受け取る
    insertFunction: {
      type: Function,
      default: () => {
        alert('登録ボタン処理がありません');
      },
    },

    updateFunction: {
      type: Function,
      default: () => {
        alert('更新ボタン処理がありません');
      },
    },

    beforeClose: {
      type: Function,
      default: () => {
        alert('閉じるボタン処理がありません');
      },
    },

    //元々
    visible: {
      required: true,
    },

    title: {
      type: String,
      default: 'タイトル',
    },

    width: String,

    fullscreen: Boolean,

    top: {
      type: String,
      default: '15vh',
    },

    modal: {
      type: Boolean,
      default: true,
    },

    modalAppendToBody: {
      type: Boolean,
      default: true,
    },

    appendToBody: {
      type: Boolean,
      default: true,
    },

    lockScroll: {
      type: Boolean,
      default: true,
    },

    customClass: {
      type: String,
      default: '',
    },

    closeOnClickModal: {
      type: Boolean,
      default: true,
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },

    showClose: {
      type: Boolean,
      default: true,
    },

    beforeClose: Function,

    center: {
      type: Boolean,
      default: false,
    },

    destroyOnClose: {
      type: Boolean,
      default: false,
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

  methods: {
    handleOpen() {
      this.$emit('open');
    },
    handleOpened() {
      this.$emit('opened');
    },
    handleClose() {
      this.$emit('close');
    },
    handleClosed() {
      this.$emit('closed');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.ra-popup /deep/ {
  .el-dialog__header {
    padding: 5px;
    padding-bottom: 5px;
    background-color: $--content-theme-color;
    color: white; // for slot header
  }

  .el-dialog__title {
    line-height: 20px;
    font-size: 14px;
    color: white;
  }

  .el-dialog__headerbtn {
    top: 6px;
    right: 8px;

    .el-dialog__close {
      color: white;
    }
  }

  .el-dialog__footer {
    padding: 5px;
    padding-top: 5px;
    background-color: $--content-theme-color;
    color: white;

    .el-button {
      // margin-right: 10px;
    }
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}

.button {
  margin-left: 10px;
}

.el-dialog__wrapper {
  width: 100% !important;
}
</style>
