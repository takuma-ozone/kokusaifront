<template src="./SSMISSD08Template.html"></template>

<script>
import SSMISSD08Model from './SSMISSD08Model.js';
import SSMISSD08Const from './SSMISSD08Const.js';
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SSMISSD08',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  data() {
    return SSMISSD08Model;
  },

  async mounted() {
    await this.initialize();
    await this.getPdfFare();
  },

  methods: {
    async initialize() {
      this.bind_params.isCheckJuyo = 0;
      this.bind_params.isCheckHinmoku = 0;
      this.bind_params.fileList = [];
      //現在の設定情報取得を行う
      const response = await this.$sAccess.select(SSMISSD08Const.SQL_SELECT, {});
      await this.$sUtils.storeSearchResult(this.bind_params.model, response.data.data[0]);
      const responseClob = await this.$sUtilsEx.getClob(
        SSMISSD08Const.SQL_SELECT_CLOB_GAIKOHOKEN,
        this.bind_params.model,
        SSMISSD08Const.PDF_COLUMNNAME_GAIKOHOKEN
      );
      await this.$sUtils.storeSearchResult(this.bind_params.model, responseClob.data.data[0]);
    },

    clickApplication() {
      //ファイル選択済みかの判定
      this.bind_params.fileList = this.$refs.upload.fileList;
      if (this.bind_params.fileList.length < 1) {
        this.$sUtils.alert(this.$msg(this.$sMsgEx.FILE_NOT_SELECT_ERROR), 'エラー', {
          type: 'error',
        });
        return;
      }
      const file = this.bind_params.fileList[0];
      //ファイル拡張子：PDFかどうか
      if (this.checkFile(file.name) !== 'pdf') {
        this.$sUtils.alert(this.$msg(this.$sMsgEx.FILE_EXTENSION_ERROR, '「.pdf」'), 'エラー', {
          type: 'error',
        });
        return;
      }
      //ファイル名：既定の文字数を超過
      if (file.name.length > this.bind_params.fileNameMax) {
        this.$sUtils.alert(
          this.$msg(this.$sMsgEx.FILE_NAME_COUNT_ERROR, this.bind_params.fileNameMax),
          'エラー',
          {
            type: 'error',
          }
        );
        return;
      }
      //ファイル容量：規定容量を超過
      if (file.size >= this.bind_params.fileSizeMax) {
        this.$sUtils.alert(this.$msg(this.$sMsgEx.FILE_SIZE_ERROR), 'エラー', {
          type: 'error',
        });
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = async () => {
        await this.$sUtils.openConfirmDialog('申込', async () => {
          try {
            await this.$sUtilsEx.uploadPDFBase64Data(
              SSMISSD08Const.SQL_UPDATE_PROPERTY,
              this.bind_params.model,
              reader.result
            );
            await this.initialize();
          } catch (e) {
            await this.$sUtils.alert(this.$msg(response.data.data.code), 'エラー', {
              type: 'error',
            });
            throw e;
          }
        });
      };
    },
    handleMax(file, fileList) {
      this.$sUtils.alert(this.$msg(this.$sMsg.FILE_UPLOAD_NUM, this.bind_params.fileNm), 'エラー', {
        type: 'error',
      });
    },
    checkFile: function(filename) {
      var pos = filename.lastIndexOf('.');
      if (pos === -1) return '';
      return filename.slice(pos + 1);
    },
    onClickCheck() {
      this.$sUtilsEx.openPdf(this.bind_params.model.gaikohoken_pdf);
    },
    click_important() {
      window.open('/internationalShipping/web/important.pdf', '重要事項のご説明'); // pdfファイル記述
    },
    click_not_available() {
      window.open(
        '/internationalShipping/web/not_available.pdf',
        '外航貨物海上保険でお取り扱い出来ない品目について'
      ); // pdfファイル記述
    },
    click_original() {
      window.open('/internationalShipping/web/original.pdf', 'お申込み用包括委任状原本'); // pdfファイル記述
    },
    async getPdfFare() {
      const responseClob = await this.$sUtilsEx.getClob(
        SSMISSD08Const.SQL_SELECT_CLOB_FARE,
        {},
        SSMISSD08Const.PDF_COLUMNNAME_FARE
      );
      if (responseClob.data.data[0] != null) {
        this.pdf = await responseClob.data.data[0][SSMISSD08Const.PDF_COLUMNNAME_FARE];
        this.excel = await responseClob.data.data[0][SSMISSD08Const.EXCEL_COLUMNNAME_FARE]; // マクロファイル名取得
      }
    },
    click_fare() {
      this.$sUtilsEx.openPdf(this.pdf);
    },
    downloadFareExcelMacro() {
      const filename = this.excel;
      const url = '/internationalShipping/web/faretool_xlsm/' + filename;
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = function() {
        const url = window.URL.createObjectURL(
          new Blob([request.response], { type: 'application/vnd.ms-excel.sheet.macroEnabled.12' })
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        link.click();
      };
      request.send();
    },
  },

  computed: {
    isCheckValidate() {
      const checkJuyoFlg = !!this.bind_params.isCheckJuyo;
      const checkHinmokuFlg = !!this.bind_params.isCheckHinmoku;
      let result = false;
      if (
        (this.bind_params.model.riyou_flg === 0 || this.bind_params.model.riyou_flg === 2) &&
        checkJuyoFlg &&
        checkHinmokuFlg
      ) {
        result = true;
      } else {
        result = false;
      }
      return result;
    },
    riyouFlgText() {
      if (this.bind_params.model.riyou_flg === 0) {
        return '未加入';
      } else if (this.bind_params.model.riyou_flg === 1) {
        return '審査中';
      } else if (this.bind_params.model.riyou_flg === 2) {
        return '登録不備';
      } else if (this.bind_params.model.riyou_flg === 3) {
        return '保険利用可能';
      } else {
        return '--';
      }
    },
    riyouFlgBool() {
      if (this.bind_params.model.riyou_flg === 0 || this.bind_params.model.riyou_flg === 2) {
        return true;
      } else {
        return false;
      }
    },
    pdfButtonVisible() {
      if (this.bind_params.model.riyou_flg !== 0 && this.bind_params.model.riyou_flg !== -1) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD08Style.scss" scoped></style>
