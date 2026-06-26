<template>
  <footer id="footer">
    <!-- キーコード名 -->
    <div class="footer-key-wrap">
      <span id="esc">ESC</span>
      <span id="f1">F1</span>
      <span id="f2">F2</span>
      <span id="f3">F3</span>
      <span id="f4">F4</span>
      <span id="f5">F5</span>
      <span id="f6">F6</span>
      <span id="f7">F7</span>
      <span id="f8">F8</span>
      <span id="f9">F9</span>
      <span id="f10">F10</span>
      <span id="f11">F11</span>
      <span id="f12">F12</span>
    </div>
    <!-- ボタン部 -->
    <div class="footer-button-flex-wrap">
      <!-- esc -->
      <ra-button
        :class="['footer-button', escCaption === '-' ? 'footer-nothing' : '']"
        @click="esc"
        :disabled="escCaption === '-' || escDisabled"
        :type="escPrimary ? 'warning' : ''"
        >{{ escCaption }}</ra-button
      >
      <ra-button-group>
        <!-- F1 -->
        <ra-button
          :class="['footer-button', f1Caption === '-' ? 'footer-nothing' : '']"
          @click="f1"
          :disabled="f1Caption === '-' || f1Disabled"
          :type="f1Primary ? 'warning' : ''"
          >{{ f1Caption }}</ra-button
        >
        <!-- F2 -->
        <ra-button
          :class="['footer-button', f2Caption === '-' ? 'footer-nothing' : '']"
          @click="f2"
          :disabled="f2Caption === '-' || f2Disabled"
          :type="f2Primary ? 'warning' : ''"
          >{{ f2Caption }}</ra-button
        >
        <!-- F3 -->
        <ra-button
          :class="['footer-button', f3Caption === '-' ? 'footer-nothing' : '']"
          @click="f3"
          :disabled="f3Caption === '-' || f3Disabled"
          :type="f3Primary ? 'warning' : ''"
          >{{ f3Caption }}</ra-button
        >
        <!-- F4 -->
        <ra-button
          :class="['footer-button', f4Caption === '-' ? 'footer-nothing' : '']"
          @click="f4"
          :disabled="f4Caption === '-' || f4Disabled"
          :type="f4Primary ? 'warning' : ''"
          >{{ f4Caption }}</ra-button
        >
      </ra-button-group>
      <ra-button-group>
        <!-- F5 -->
        <ra-button
          :class="['footer-button', f5Caption === '-' ? 'footer-nothing' : '']"
          @click="f5"
          :disabled="f5Caption === '-' || f5Disabled"
          :type="f5Primary ? 'warning' : ''"
          >{{ f5Caption }}</ra-button
        >
        <!-- F6 -->
        <ra-button
          :class="['footer-button', f6Caption === '-' ? 'footer-nothing' : '']"
          @click="f6"
          :disabled="f6Caption === '-' || f6Disabled"
          :type="f6Primary ? 'warning' : ''"
          >{{ f6Caption }}</ra-button
        >
        <!-- F7 -->
        <ra-button
          :class="['footer-button', f7Caption === '-' ? 'footer-nothing' : '']"
          @click="f7"
          :disabled="f7Caption === '-' || f7Disabled"
          :type="f7Primary ? 'warning' : ''"
          >{{ f7Caption }}</ra-button
        >
        <!-- F8 -->
        <ra-button
          :class="['footer-button', f8Caption === '-' ? 'footer-nothing' : '']"
          @click="f8"
          :disabled="f8Caption === '-' || f8Disabled"
          :type="f8Primary ? 'warning' : ''"
          >{{ f8Caption }}</ra-button
        >
      </ra-button-group>
      <ra-button-group>
        <!-- F9 -->
        <ra-button
          :class="['footer-button', f9Caption === '-' ? 'footer-nothing' : '']"
          @click="f9"
          :disabled="f9Caption === '-' || f9Disabled"
          :type="f9Primary ? 'warning' : ''"
          >{{ f9Caption }}</ra-button
        >
        <!-- F10 -->
        <ra-button
          :class="['footer-button', f10Caption === '-' ? 'footer-nothing' : '']"
          @click="f10"
          :disabled="f10Caption === '-' || f10Disabled"
          :type="f10Primary ? 'warning' : ''"
          >{{ f10Caption }}</ra-button
        >
        <!-- F11 -->
        <ra-button
          :class="['footer-button', f11Caption === '-' ? 'footer-nothing' : '']"
          @click="f11"
          :disabled="f11Caption === '-' || f11Disabled"
          :type="f11Primary ? 'warning' : ''"
          >{{ f11Caption }}</ra-button
        >
        <!-- F12 -->
        <ra-button
          :class="['footer-button', f12Caption === '-' ? 'footer-nothing' : '']"
          @click="f12"
          :disabled="f12Caption === '-' || f12Disabled"
          :type="f12Primary ? 'warning' : ''"
          >{{ f12Caption }}</ra-button
        >
      </ra-button-group>
    </div>
    <div class="footer-copyright">©2021 Sagawa Express Co.,Ltd. All Rights Reserved.</div>
  </footer>
</template>

<script>
import $rKeyCode from '@/sdk/helpers/rdev.keycode';

export default {
  name: 'RoFooter',

  componentName: 'RoFooter',

  props: {
    // esc
    escCaption: {
      type: String,
      default: '-',
    },
    escDisabled: {
      type: Boolean,
      default: false,
    },
    escPrimary: {
      type: Boolean,
      default: false,
    },
    // f1
    f1Caption: {
      type: String,
      default: '-',
    },
    f1Disabled: {
      type: Boolean,
      default: false,
    },
    f1Primary: {
      type: Boolean,
      default: false,
    },
    // f2
    f2Caption: {
      type: String,
      default: '-',
    },
    f2Disabled: {
      type: Boolean,
      default: false,
    },
    f2Primary: {
      type: Boolean,
      default: false,
    },
    // f3
    f3Caption: {
      type: String,
      default: '-',
    },
    f3Disabled: {
      type: Boolean,
      default: false,
    },
    f3Primary: {
      type: Boolean,
      default: false,
    },
    // f4
    f4Caption: {
      type: String,
      default: '-',
    },
    f4Disabled: {
      type: Boolean,
      default: false,
    },
    f4Primary: {
      type: Boolean,
      default: false,
    },
    // f5
    f5Caption: {
      type: String,
      default: '-',
    },
    f5Disabled: {
      type: Boolean,
      default: false,
    },
    f5Primary: {
      type: Boolean,
      default: false,
    },
    // f6
    f6Caption: {
      type: String,
      default: '-',
    },
    f6Disabled: {
      type: Boolean,
      default: false,
    },
    f6Primary: {
      type: Boolean,
      default: false,
    },
    // f7
    f7Caption: {
      type: String,
      default: '-',
    },
    f7Disabled: {
      type: Boolean,
      default: false,
    },
    f7Primary: {
      type: Boolean,
      default: false,
    },
    // f8
    f8Caption: {
      type: String,
      default: '-',
    },
    f8Disabled: {
      type: Boolean,
      default: false,
    },
    f8Primary: {
      type: Boolean,
      default: false,
    },
    // f9
    f9Caption: {
      type: String,
      default: '-',
    },
    f9Disabled: {
      type: Boolean,
      default: false,
    },
    f9Primary: {
      type: Boolean,
      default: false,
    },
    // f10
    f10Caption: {
      type: String,
      default: '-',
    },
    f10Disabled: {
      type: Boolean,
      default: false,
    },
    f10Primary: {
      type: Boolean,
      default: false,
    },
    // f11
    f11Caption: {
      type: String,
      default: '-',
    },
    f11Disabled: {
      type: Boolean,
      default: false,
    },
    f11Primary: {
      type: Boolean,
      default: false,
    },
    // f12
    f12Caption: {
      type: String,
      default: '-',
    },
    f12Disabled: {
      type: Boolean,
      default: false,
    },
    f12Primary: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    esc(ev) {
      if (!this.escDisabled) {
        this.$emit('esc', ev);
      }
    },
    // TODO: 他のキーも制御追加
    f1(ev) {
      this.$emit('f1', ev);
    },
    f2(ev) {
      this.$emit('f2', ev);
    },
    f3(ev) {
      this.$emit('f3', ev);
    },
    f4(ev) {
      this.$emit('f4', ev);
    },
    f5(ev) {
      this.$emit('f5', ev);
    },
    f6(ev) {
      this.$emit('f6', ev);
    },
    f7(ev) {
      this.$emit('f7', ev);
    },
    f8(ev) {
      this.$emit('f8', ev);
    },
    f9(ev) {
      this.$emit('f9', ev);
    },
    f10(ev) {
      this.$emit('f10', ev);
    },
    f11(ev) {
      this.$emit('f11', ev);
    },
    f12(ev) {
      this.$emit('f12', ev);
    },
  },

  mounted() {
    const vm = this;

    window.addEventListener('keyup', event => {
      if (event.keyCode === $rKeyCode.ESC && vm.escCaption !== '-') {
        vm.esc();
      }
      // TODO: 他のキーも追加
    });
  },

  // TODO: 終了時の処理を追加
  destroyed() {},
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

/**
 * footerのCSS定義
 **/
footer#footer /deep/ {
  position: absolute;
  top: 570px;
  width: 100%;
  background-color: $--sagawa-blue;

  // キーコード名
  .footer-key-wrap {
    display: flex;
    justify-content: space-around;
    color: white;
    margin-top: 4px;
    font-size: 10px;
    span#f1,
    span#f2,
    span#f11 {
      left: 3px;
    }
    span#f5,
    span#f6,
    span#f7 {
      left: 8px;
    }
    span#f8 {
      left: 5px;
    }
    span#f9 {
      left: 15px;
    }
    span#f10 {
      left: 10px;
    }
    span#f12 {
      left: -2px;
    }
  }

  // ボタン
  .footer-button-flex-wrap {
    display: flex;
    justify-content: space-around;
    margin-top: 2px;
    margin-bottom: 6px;
  }

  .footer-button {
    width: 75px;
    padding: 2px 3px;
    span {
      font-size: 10px;
    }
  }

  // フッターがない場合
  .footer-nothing {
    color: $--footer-button-nothing-color !important;
    background-color: $--footer-button-nothing-color !important;
  }

  // Copyright
  .footer-copyright {
    padding: 2px 1px;
    font-size: 10px !important;
    text-align: center;
    background-color: white;
    color: black;
  }
}
</style>
