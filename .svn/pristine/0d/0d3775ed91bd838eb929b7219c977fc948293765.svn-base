<template>
  <div class="ro-message-guide" v-if="this.$validator.errors.items.length !== 0">
    <div class="message-guide">
      <!-- メッセージガイド -->
      <div class="error-message" v-show="errors.items.length">
        <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>
        <span class="navigation-message-text">
          <span v-show="hasSingleError">{{ errorMsg }}</span>
          <ra-button
            id="text-multi-error-message"
            v-show="hasMultiError"
            type="text"
            @click="dispErrors"
            >{{ errorMsg }}</ra-button
          >
        </span>
      </div>
    </div>
    <!-- エラーリストモーダル -->
    <div class="error-modal">
      <ra-popup
        title="Error List"
        :visible.sync="errorModalVisible"
        width="40%"
        :close-on-click-modal="close"
        :close-on-press-escape="close"
        :show-close="close"
      >
        <ul class="modal-error-list">
          <li class="modal-error-list" v-for="error in errorMsgs" :key="error">
            <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>
            {{ error }}
          </li>
        </ul>
      </ra-popup>
    </div>
  </div>
</template>

<script>
import RaPopup from './../Atoms/RaPopup';

export default {
  name: 'RoMessageGuide',
  componentName: 'RoMessageGuide',

  components: {
    RaPopup,
  },

  inject: ['$validator'],

  props: {
    isSideMenu: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      errorMsg: '', // 表示用エラーメッセージを格納
      errorModalVisible: false, // エラーリストモーダルの表示を制御
      errorMsgs: null, // 複数のエラーがある場合に全メッセージを格納
      close: true,
    };
  },

  computed: {
    /**
     * @function hasSingleError
     * エラー件数が1件であるかを判定する
     */
    hasSingleError() {
      const errorObj = this.$validator.errors.items;

      if (errorObj.length === 1) {
        this.errorMsg = errorObj[0].msg + '。';
        return true;
      } else {
        return false;
      }
    },

    /**
     * @function hasMultiError
     * エラー件数が複数件であるかを判定する
     */
    hasMultiError() {
      const errorObj = this.$validator.errors.items;
      const errorLength = errorObj.length;

      if (errorLength > 1) {
        // エラーが複数件の場合
        const tempArr = [];

        // 全エラーメッセージをerrorMsgsに詰める
        Object.keys(errorObj).forEach(function(key) {
          tempArr.push(errorObj[key].msg + '。');
        });

        this.errorMsgs = tempArr;
        this.errorMsg = `エラーが${errorLength}件あります。`;

        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    /**
     * @function dispErrors
     * 複数エラーメッセージ押下時にモーダルを表示する
     */
    dispErrors() {
      this.errorModalVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.ro-message-guide {
  .message-guide {
    height: $--message-guide-height;
    background-color: $--message-guide-background-color;

    .error-message {
      line-height: $--message-guide-height;
      margin-left: 5px;
      font-size: $--message-guide-font-size;
      color: $--message-guide-font-color;
    }

    #text-multi-error-message {
      color: $--message-guide-font-color;
      text-decoration: underline; // link風にする
    }

    .navigation-message-text {
      margin: 0 3px;
      padding: 0 3px;
    }
  }

  .error-modal {
    ul.modal-error-list {
      background: $--message-guide-background-color;
      padding: 0 0.5em;
      position: relative;
      color: $--message-guide-font-color;
      font-size: 11px;
    }

    li.modal-error-list {
      line-height: 1.5;
      padding: 0.5em 0 0.5em 0.5em;
      border-bottom: 2px solid white;
      list-style-type: none !important;
    }

    ul.modal-error-list li.modal-error-list:last-of-type {
      border-bottom: none; /*最後の線だけ消す*/
    }
  }
}
</style>
