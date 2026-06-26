<template>
  <span
    :class="[
      'ra-label',
      color === 'blue' ? 'label-blue' : '',
      labelWidth ? 'label-width' + labelWidth : 'label-width5',
      align ? 'text-align-' + align : '',
    ]"
  >
    <font-awesome-icon icon="asterisk" id="aster-icon" v-if="hasAster"></font-awesome-icon>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'RaLabel',
  componentName: 'RaLabel',

  props: {
    color: {
      type: String,
    },
    width: {
      type: [String, Number],
      default: '7',
    },
    textAlign: {
      type: String,
      default: 'left',
    },
    hasRequired: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    labelWidth() {
      return this.width;
    },
    align() {
      return this.textAlign;
    },
    // ishino 必須マークの表示を制御
    hasAster() {
      return this.hasRequired;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.ra-label {
  display: inline-block;
  margin: $--label-margin;
  height: $--form-height;
  line-height: $--form-height;
  text-align: right;
  font-size: 12pt; //$--form-font-size;
  vertical-align: top;

  // 必須アイコン
  #aster-icon {
    vertical-align: top;
    color: $--aster-icon-color;
    width: 8px;
    top: 2px;
    right: 2px;
  }
}

.label-blue {
  color: white;
  background-color: $--content-theme-color;
}

/**
 * ラベルの横幅
 */
@for $i from 1 through 10 {
  .label-width#{$i} {
    width: calc(#{$--label-width-standard} + (#{$--label-width-difference} * #{$i}));
  }
}

/**
 * テキストの配置
 */
.text-align-start {
  text-align: start;
}

.text-align-end {
  text-align: end;
}

.text-align-left {
  text-align: left;
}

.text-align-right {
  text-align: right;
}

.text-align-center {
  text-align: center;
}
</style>
