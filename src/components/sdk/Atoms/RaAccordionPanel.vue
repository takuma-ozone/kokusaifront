<template>
  <div
    :class="['ra-accordion-panel', accordionClass ? accordionClass : '', this.group ? 'group' : '']"
  >
    <div class="ra-accordion-header" @click="clickHeader">
      <span class="ra-accordion-title">
        {{ title }}
        <i class="arrow el-icon-d-arrow-right" v-if="!this.isOpenComputed && isLeft"></i>
        <i class="arrow el-icon-d-arrow-left" v-if="!this.isOpenComputed && !isLeft"></i>
      </span>
      <span class="top-triangle"></span>
      <span class="bottom-triangle"></span>
    </div>
    <div class="ra-accordion-content" v-if="isOpenComputed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaAccordionPanel',
  componentName: 'RaAccordionPanel',

  inject: ['$validator'],

  props: {
    title: String,
    accordionClass: String,
    isOpen: {
      default: true,
      type: Boolean,
    },
    isLeft: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {};
  },

  computed: {
    isOpenComputed() {
      return this.isOpen;
    },
    group() {
      return '$parent' in this && this.$parent.$options.name === 'ra-accordion-panel-group'
        ? this.$parent
        : '';
    },
  },
  methods: {
    clickHeader() {
      if (!this.isOpen) {
        this.$emit('event');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$--content-theme-color: #5866c2;

.ra-accordion-panel {
  display: inline-grid;
  grid-area: header, content;
  grid-template:
    'header content' auto /
    50px auto;
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  border-left: solid 1px lightgray;
  border-right: solid 1px lightgray;

  /**
 * パネルの五角形ヘッダー
 */
  .ra-accordion-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $--content-theme-color;

    .ra-accordion-title {
      position: absolute;
      left: -6px;
      -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
      writing-mode: vertical-rl;
      color: white;
      position: relative;
    }
    .top-triangle {
      position: absolute;
      top: 0;
      right: -1px;
      width: 40%;
      height: 55%;
      background: linear-gradient(to top right, rgba(255, 255, 255, 0) 50%, rgb(245, 250, 255) 52%)
        no-repeat top left/100% 100%;
    }
    .bottom-triangle {
      position: absolute;
      bottom: 0;
      right: -1px;
      width: 40%;
      height: 55%;
      background: linear-gradient(
          to bottom right,
          rgba(255, 255, 255, 0) 50%,
          rgb(245, 250, 255) 52%
        )
        no-repeat top left/100% 100%;
    }
  }

  .ra-accordion-content {
    background-color: rgb(245, 250, 255);
    width: auto;
  }

  /**
 * アコーディオングループを使用する際の、開閉ボタン
 */
  .el-icon-d-arrow-right {
    position: relative;
    top: 50%;
    z-index: 2;
  }
  .el-icon-d-arrow-left {
    position: relative;
    top: 50%;
    z-index: 2;
  }
}
</style>
