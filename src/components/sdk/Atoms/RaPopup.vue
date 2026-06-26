<template>
  <el-dialog
    class="ra-popup"
    v-el-drag-dialog
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
    @dragDialog="handleDrag"
  >
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <template v-slot:default>
      <slot></slot>
    </template>
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
import elDragDialog from '../../../directive/el-drag-dialog'; // base on element-ui

export default {
  name: 'RaPopup',
  componentName: 'RaPopup',
  directives: { elDragDialog },

  props: {
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

    // nagamachi 利用シーンが想定されないためガイド記載なし
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },

    appendToBody: {
      type: Boolean,
      default: false,
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
      default: false,
    },

    closeOnPressEscape: {
      type: Boolean,
      default: false,
    },

    showClose: {
      type: Boolean,
      default: false,
    },

    beforeClose: Function,

    center: {
      type: Boolean,
      default: false,
    },

    // nagamachi 利用シーンが想定されないためガイド記載なし
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
    handleDrag() {
      this.$emit('drag');
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
  }
}
</style>
