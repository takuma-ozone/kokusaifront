<template>
  <!-- <span class="sm-import-csv">
    <input @change="fileChange" type="file" id="file_input_expense" name="file_input_expense" />
  </span> -->
  <span>
    <span class="sm-import-csv">
      <el-upload
        class="import-csv"
        action=""
        accept=".csv"
        :on-change="handleAdd"
        :on-remove="handleRemove"
        :on-exceed="handleMax"
        :file-list="fileList"
        :auto-upload="false"
        list-type="text"
        :limit="fileNumLimit"
      >
        <ra-button size="small" type="primary" :disabled="uploadDisabled">{{
          selectBtnCaption
        }}</ra-button>
        <span class="rm-upload-info-text">
          <span v-if="!hasSelectFile">
            ファイルを選択してください。
          </span>
          <span v-if="hasSelectFile"> {{ fileList.length }} 個のファイルが選択されています。 </span>
        </span>
      </el-upload>
    </span>
    <div class="import-btn">
      <ra-button @click="upload" :disabled="!hasSelectFile" type="warning" size="small">{{
        buttonName
      }}</ra-button>
    </div>
  </span>
</template>

<script>
import Encoding from 'encoding-japanese';
export default {
  name: 'SmImportCsv',
  componentName: 'SmImportCsv',

  data() {
    return {
      fileList: [],
      fileNumLimit: 1,
      uploadDisabled: false,
    };
  },

  props: {
    buttonName: {
      type: String,
      default: 'Upload',
    },
    model: {
      type: Object,
      default: null,
    },
    selectBtnCaption: {
      type: String,
      default: 'ファイルを選択',
    },
  },

  methods: {
    upload: function() {
      if (this.fileList.length >= 1) {
        // const reader = new FileReader();
        const file = this.fileList[0].raw;

        if (this.checkFile(file.name) !== 'csv') {
          this.$alert(`CSVファイルではありません。`, {
            type: 'error',
          });
          return false;
        }

        // if (file.size >= 2000) {
        //   // TODO バイト数を指定
        //   this.$alert(`ファイルサイズが大きすぎます`, {
        //     type: 'error',
        //   });
        //   return false;
        // }

        // reader.onerror = () => {
        //   alert('読み取りに失敗しました');
        //   return false;
        // };
        // reader.readAsArrayBuffer(file); //BinaryStringのほうがいい？要検討
        // reader.onload = e => {
        //   var array = new Uint8Array(e.target.result);
        //   // 文字コードを取得
        //   switch (Encoding.detect(array)) {
        //     case 'UTF16':
        //       // 16ビット符号なし整数値配列と見なす
        //       array = new Uint16Array(e.target.result);
        //       break;
        //     case 'UTF32':
        //       // 32ビット符号なし整数値配列と見なす
        //       array = new Uint32Array(e.target.result);
        //       break;
        //   }
        //   Unicodeの数値配列に変換
        //   var unicodeArray = Encoding.convert(array, 'UNICODE');
        //   Unicodeの数値配列を文字列に変換
        //   var result = Encoding.codeToString(unicodeArray);
        //   const config = {
        //     headers: {
        //       'content-type': 'multipart/form-data',
        //     },
        //   };
        //   this.$sAccess.importCsv(file, config);
        // };

        var baseurl =
          process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
            ? process.env.BASE_URL + '../rest/rdev'
            : `/internationalShipping/rest/rdev`;
        var url = baseurl + '/iss/csvimport';
        var formData = new FormData(document.forms.form1);
        formData.append('file', file);
        if (this.model != null) {
          formData.append('m_customer_seqno', this.model.m_customer_seqno);
          formData.append('m_kokyakucode_seqno', this.model.m_kokyakucode_seqno);
        }
        fetch(url, {
          method: 'POST',
          body: formData,
        }).then(response => {
          this.fileList = [];
          const isRedirect = response.redirected;
          if (!isRedirect) {
            this.$sUtils.alert(
              this.$msg(this.$sMsg.START, '取込') + '画面更新ボタンで履歴をご確認ください。',
              '取込開始',
              {
                type: 'success',
              }
            );
          } else {
            this.$router.push({ name: 'error' });
          }
        });
      }
    },

    checkFile: function(filename) {
      var pos = filename.lastIndexOf('.');
      if (pos === -1) return '';
      return filename.slice(pos + 1);
    },

    handleAdd: function(file, fileList) {
      this.fileList = fileList;
    },
    handleRemove: function(file, fileList) {
      this.fileList = fileList;
    },
    handleMax: function(file, fileList) {
      this.$alert(this.$msg(this.$sMsg.FILE_UPLOAD_NUM, this.fileNumLimit), {
        type: 'error',
      });
    },
  },
  computed: {
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
.sm-import-csv /deep/ {
  display: inline-flex;
  .el-upload-list__item {
    font-size: 12px;
    margin-top: 5px;
  }
  .sm-upload-info-text {
    margin-left: 5px;
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
.import-btn {
  margin-top: 10px;
}
</style>
