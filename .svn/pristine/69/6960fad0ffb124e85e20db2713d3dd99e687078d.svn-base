<template>
  <span class="rm-upload">
    <!-- ラベル -->
    <ra-label
      :id="[comId ? 'label-' + comId : '']"
      :class="labelClass"
      :color="labelColor"
      :width="labelWidth"
      :text-align="labelAlign"
      v-if="hasLabel"
      :has-required="hasRequired"
      >{{ caption }}</ra-label
    >
    <!-- アップロード -->
    <el-upload
      ref="upload"
      :type="type"
      :action="uploadPath"
      :name="name"
      :data="data"
      :headers="headers"
      :with-credentials="withCredentials"
      :multiple="multiple"
      :accept="accept"
      :on-progress="onProgress"
      :on-success="onSuccess"
      :on-error="onError"
      :on-change="handleAdd"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :drag="false"
      :file-list="fileList"
      :show-file-list="true"
      :auto-upload="autoUpload"
      list-type="text"
      :http-request="httpRequest"
      :disabled="disabled"
      :limit="limit"
      :on-exceed="onExceed"
    >
      <!-- Triggerボタン -->
      <!-- ※Elementではslotになっているが、汎用性は求めないためPropsで対応 -->
      <template v-slot:trigger>
        <ra-button size="small" type="primary" :disabled="disabled">{{
          selectBtnCaption
        }}</ra-button>
      </template>
      <!-- 選択ファイル表示エリア -->
      <span class="rm-upload-info-text">
        <template v-if="!hasSelectFile">
          ファイルを選択してください。
        </template>
        <template v-if="hasSelectFile">
          {{ fileList.length }} 個のファイルが選択されています。
        </template>
      </span>
      <!-- uploadボタン -->
      <!-- ※Elementではslotになっているが、汎用性は求めないためPropsで対応 -->
      <ra-button
        size="small"
        v-if="hasSubmitBtn"
        type="success"
        @click="submitUpload"
        :disabled="disabled"
        >{{ submitBtnCaption }}</ra-button
      >
      <!-- Tips: 各種ボタンの1行下に表示 -->
      <template v-slot:tip>
        <slot name="tip"></slot>
      </template>
    </el-upload>
  </span>
</template>

<script>
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmUpload',
  componentName: 'RmUpload',

  components: {
    RaLabel,
  },

  props: {
    /**
     * ラベル・インプット共通
     */
    // comIdに指定した値がidに付与される
    comId: {
      type: String,
      required: true,
    },

    /**
     * ラベル向け
     */
    hasLabel: {
      type: Boolean,
      default: true,
    },
    labelClass: String,
    labelColor: String,
    labelWidth: {
      type: String,
      default: '4',
    },
    labelAlign: {
      type: String,
      default: 'right',
    },
    caption: {
      type: String,
      required: true,
    },

    /**
     * アップロード向け
     */
    // nagamachi 用途不明のためガイド記載なし
    type: String,

    // nagamachi 高速開発FWではアップロードURLが一意に決まるため不要
    // action: {
    //   type: String,
    //   required: true,
    // },

    name: {
      type: String,
      default: 'files',
    },
    data: Object,
    headers: Object,
    withCredentials: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    accept: String,

    /**
     * フック関数系
     */
    // nagamachi ガイドに記載なく、効かなかったのでコメントアウト
    // onStart: Function,

    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,

    // nagamachi Element側の問題か、Functionが効かないのでコメントアウト
    // onPreview: {
    //   type: Function,
    // },

    // nagamachi fileList編集用にコンポーネント側で仕様
    // onRemove: {
    //   type: Function,
    //   default: function() {},
    // },

    // nagamachi dragモードは使用しない
    // drag: Boolean,

    // nagamachi ◆◆◆Propsではなく、コンポーネントのデータとして保持する◆◆◆
    // fileList: Array,

    // ファイル名は常に表示するためコメントアウト
    // showFileList: {
    //   type: Boolean,
    //   default: true,
    // },

    autoUpload: {
      type: Boolean,
      default: false,
    },

    // nagamachi picture, picture-cardは使用しない
    // listType: String,

    httpRequest: {
      type: Function,
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: 1,
    },
    onExceed: Function,

    /**
     * Original Props
     */

    /**
     * ファイル拡張子
     * サーバー側でロジックを分岐させる場合に利用する
     *
     * ※新出荷ではロジック分岐がなく、ログ出力にしか影響しないのでガイド記載なし
     */
    extension: {
      type: String,
      default: 'csv',
    },

    isRequired: {
      type: Boolean,
      default: false,
    },

    selectBtnCaption: {
      type: String,
      default: 'ファイルを選択',
    },

    hasSubmitBtn: {
      type: Boolean,
      default: false,
    },

    submitBtnCaption: {
      type: String,
      default: 'アップロード',
    },
  },

  data() {
    return {
      fileList: [],
    };
  },

  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },

    // ファイル追加時
    handleAdd(file, fileList) {
      this.fileList = fileList;
    },

    // ファイル削除時
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
  },

  computed: {
    uploadPath() {
      return this.$path.getUploadPath() + this.extension; // アップロードのREST URL
    },

    hasRequired() {
      return this.$props.isRequired;
    },

    hasSelectFile() {
      if (this.fileList.length > 0) {
        return true; // 選択ファイルあり
      } else {
        return false; // 選択ファイルなし
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.rm-upload /deep/ {
  display: inline-flex; // 要素を一行に並べる

  .el-upload-list__item {
    font-size: 12px;
    margin-top: 5px;
  }

  .rm-upload-info-text {
    margin-left: 5px;
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
</style>
