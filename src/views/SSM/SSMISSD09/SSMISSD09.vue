<template src="./SSMISSD09Template.html"></template>

<script>
import SSMISSD09Model from './SSMISSD09Model.js';
import SSMISSD09Const from './SSMISSD09Const.js';
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'SSMISSD09',
  mixins: [BasePopup], // 共通コンポーネントの読み込み
  inject: ['$validator'],

  //メソッド目次
  //初期処理・検索関連
  //基本ボタン(登録・更新)
  //遷移系ボタン(子画面・次へ前へ・戻る)
  //その他ボタン・イベント(郵便番号等)

  data() {
    return SSMISSD09Model;
  },
  props: {
    route_params: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.empty();
    //デフォルトがあったらをセット
    this.bind_params.model.m_iraipersondefault_is_seqno = this.list_m_iraipersondefault_is_seqno[
      this.index
    ];
    this.initialize();
  },

  methods: {
    /////////////////
    //初期処理
    /////////////////
    async initialize() {
      //検索の実施
      await this.initSearch();

      // 新規・更新判断
      if (
        this.bind_params.model.m_iraipersondefault_is_seqno === '' ||
        this.bind_params.model.m_iraipersondefault_is_seqno == null
      ) {
        //登録モード
        this.bind_params.model.updateMode = false;
        this.$saveSnap('initial');
      } else {
        //更新モード
        this.bind_params.model.updateMode = true;
        this.$saveSnap('initial');
      }
      this.visible = true;
    },

    async initSearch() {
      //出荷人の取得
      const response = await this.$sAccess.select(
        SSMISSD09Const.SQL_SELECT_IRAIPERSONDEFAULT,
        this.bind_params.model
      );
      if (response.data.data.length > 0) {
        //検索結果を入れる
        Object.assign(this.bind_params.model.model_shukka, response.data.data[0]);
        this.bind_params.model.m_iraipersondefault_is_seqno =
          response.data.data[0].m_iraipersondefault_is_seqno;

        //依頼電話番号
        this.bind_params.model.model_shukka.irai_tel = this.$sUtilsEx.cutCountryDialCode(
          this.bind_params.model.model_shukka.irai_tel
        );
      }
    },

    /////////////////
    //基本ボタン
    /////////////////
    onClickUpdate() {
      const updateModel = Object.assign({}, this.bind_params.model.model_shukka);
      updateModel.m_iraipersondefault_is_seqno = this.bind_params.model.m_iraipersondefault_is_seqno;

      //1.登録モデル生成(TELの接続)
      updateModel.irai_tel_cd = updateModel.irai_country_tel_cd + updateModel.irai_tel;

      //4.登録モデル生成(DBアラート防止対策)
      updateModel.iraitorokuno1 = this.$sUtilsEx.dbTextLength(updateModel.iraitorokuno1);
      updateModel.iraitorokuno2 = this.$sUtilsEx.dbTextLength(updateModel.iraitorokuno2);
      updateModel.iraitorokuno3 = this.$sUtilsEx.dbTextLength(updateModel.iraitorokuno3);

      //実行
      this.$multipleValidate(async () => {
        await this.$sUtils.openConfirmDialog('更新', async () => {
          try {
            const response = await this.$sUtils.updateWithExclusionControl(
              updateModel,
              SSMISSD09Const.PROPSNAMEUPDATE
            );
            //更新完了後の再描画
            this.initialize();
          } catch (e) {
            throw e;
          }
        });
      });
    },

    onClickRegist() {
      const insertModel = Object.assign({}, this.bind_params.model.model_shukka);

      //1.登録モデル生成(TELの接続)
      insertModel.irai_tel_cd = insertModel.irai_country_tel_cd + insertModel.irai_tel;

      //4.登録モデル生成(DBアラート防止対策)
      insertModel.iraitorokuno1 = this.$sUtilsEx.dbTextLength(insertModel.iraitorokuno1);
      insertModel.iraitorokuno2 = this.$sUtilsEx.dbTextLength(insertModel.iraitorokuno2);
      insertModel.iraitorokuno3 = this.$sUtilsEx.dbTextLength(insertModel.iraitorokuno3);

      //実行
      this.$multipleValidate(async () => {
        await this.$sUtils.openConfirmDialog('登録', async () => {
          try {
            //INS1.出荷人情報登録
            const response1 = await this.$sAccess.insertGetSeq(
              insertModel,
              SSMISSD09Const.PROPSNAMEINSERT
            );

            // 更新モードに遷移するためにinsgetseqの戻り値をリスト等々にセット
            this.index = 0;
            this.list_m_iraipersondefault_is_seqno[0] = response1.data.data.sequence;

            // 再描画
            await this.initialize();
          } catch (e) {
            throw e;
          }
        });
      });
    },

    //ポップアップ閉じる
    closePopup() {
      this.command.isPopupOpen = false;
    },
    //ポップアップ開く
    openPopup() {
      this.command.isPopupOpen = true;
    },

    /////////////////
    //郵便番号
    /////////////////
    //リクエスト準備
    async onClickPlus() {
      const req = { countryCode: '', postalCode: '', cityName: '' };
      req.countryCode = this.bind_params.model.model_shukka.irai_country_cd;
      req.postalCode = this.bind_params.model.model_shukka.irai_yubin;
      req.cityName = this.bind_params.model.model_shukka.irai_toshi_nm;
      await this.organizeAddress(req);
    },

    //resを画面にセット
    async setAddress(res) {
      this.bind_params.model.model_shukka.irai_country_cd = res.countryCode;
      this.bind_params.model.model_shukka.irai_yubin = res.postalCode;
      this.bind_params.model.model_shukka.irai_toshi_nm = res.cityName;
    },
    //so-window向けイベント2種
    onClickPlusResult(result) {
      this.setAddress(result);
    },
    onClickPlusClosed() {
      this.yubinVisible = false;
    },

    //DHL住所のresponseデータを扱う
    async organizeAddress(req) {
      //response定義
      this.$http.post('/service/controller/SsmIssB07', req).then(response => {
        this.response = response;
        if (this.response.data.data.rezult_code === '1') {
          this.$alert(this.$msg(this.$sMsg.HISSERR), 'エラー', {
            //郵便番号、都市名のどちらかを入力してください
            type: 'error',
          });
          return;
        } else if (this.response.data.data.rezult_code === '2') {
          this.$alert(this.$msg(this.$sMsg.COUNTRYERR), 'エラー', {
            //国名は必須になります
            type: 'error',
          });
          return;
        } else if (this.response.data.data.rezult_code === '3') {
          this.$alert(this.$msg(this.$sMsg.NOTEXIST), 'エラー', {
            //該当の住所は存在しません
            type: 'error',
          });
          return;
        } else if (this.response.data.data.rezult_code === '4') {
          this.$alert(this.$msg(this.$sMsg.RIQESTERR), 'エラー', {
            //リクエストに失敗しました
            type: 'error',
          });
          return;
        } else if (this.response.data.data.address.length === 1) {
          const resaddress = { countryCode: '', postalCode: '', cityName: '' };
          resaddress.countryCode = this.response.data.data.address[0].countryCode;
          resaddress.postalCode = this.response.data.data.address[0].postalCode;
          resaddress.cityName = this.response.data.data.address[0].cityName;
          this.setAddress(resaddress);
        } else {
          this.bind_params.result_model.grid_result_set = this.response.data.data.address;
          this.yubinVisible = true;
        }
      });
    },
  },

  async beforeRouteLeave(to, from, next) {
    let result = true;
    const nowModel = this.bind_params.model.model_shukka;
    const snapModel = this.$loadSnap('initial').bind_params.model.model_shukka;
    //保存した初期モデルと現在のモデルが一致するか確認
    if (!_.isEqual(snapModel, nowModel)) {
      result = await this.$sUtils.confirm(this.$msg(this.$sMsg.SCREENLEAVECONFIRM), '確認', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info',
      });
    }
    if (result) {
      this.empty();
      next();
    } else {
      next(false);
    }
  },

  computed: {
    disCheckOther() {
      //登録番号または登録コードの活性非活性制御
      //番号は当該当該
      return function(value, value2) {
        if ((value === '' || value === null) && (value2 === '' || value2 === null)) {
          return true;
        } else {
          return false;
        }
      };
    },
    valiCheckTorokuNo() {
      //登録番号⇒引数のタイプがnullでなければ必須、最大35、半角英数
      return function(value) {
        if (value === '' || value === null) {
          return null;
        } else {
          return 'required|max:35|alpha_num';
        }
      };
    },

    valiCheckTorokuNoKbn() {
      //登録タイプ⇒引数がnullでなければ必須
      return function(value) {
        if (value === '' || value === null) {
          return null;
        } else {
          return 'alpha_num';
        }
      };
    },
    getTelCode() {
      const result = this.$sUtilsEx.getCountryDialCode(
        this.bind_params.model.model_shukka.irai_country_cd
      );
      return result;
    },
  },
};
</script>

<style lang="scss" src="./SSMISSD09Style.scss" scoped></style>
