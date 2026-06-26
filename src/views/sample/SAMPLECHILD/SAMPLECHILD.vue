<template src="./SAMPLECHILDTemplate.html"></template>

<script>
import SAMPLECHILDModel from './SAMPLECHILDModel';
import SAMPLECHILDConst from './SAMPLECHILDConst';
import BasePopup from '@/components/BasePopup.vue';

export default {
  name: 'SAMPLECHILD',
  mixins: [BasePopup], // 共通コンポーネントの読み込み

  inject: ['$validator'],

  data() {
    return SAMPLECHILDModel;
  },

  //この引数を受け取った場合、更新モード
  props: {
    route_params: Object,
  },

  mounted() {
    //画面リロード対応。リロードされるとpropsが維持されないため、予め保存
    const propsData = this.$keepTransitionParameter();
    //モデルに格納
    this.$sUtils.storeSearchResult(this.bind.bindModel, propsData.route_params);
    //初期処理
    this.init();
    //初期表示時のモデルを保存
    this.$saveSnap('initial');
  },

  methods: {
    /**
     * @func init
     * 初期表示時処理
     */
    init() {
      if (this.bind.bindModel.m_sample_seqno === null) {
        this.updateMode = false;
      } else {
        this.updateMode = true;
        this.modeUpdateGetParams();
      }
    },
    /**
     * @func modeUpdateGetParams
     * 更新モード時に、DBから値を取得する処理
     */
    async modeUpdateGetParams() {
      //const response = await this.$sAccess.select(SAMPLECHILDConst.SQL_SELECT, this.bind.bindModel);
      //サンプル用DBがないので、Select値として以下サンプルデータを用意
      const response = {
        data: {
          data: [
            {
              m_sample_seqno: 1,
              sample_id: '1234',
              sample_nm: 'サンプルデータ',
              n_excl_cnt: 1,
              yuko_flg: 1,
            },
          ],
        },
      };
      this.$sUtils.storeSearchResult(this.bind.bindModel, response.data.data[0]);
    },

    /**
     * @func clickInsert
     * 登録イベント
     * 処理説明: 登録ボタン押下時に発火
     * ※更新モード時はコンポーネント側の制御により非表示となる。
     */
    clickInsert() {
      this.$multipleValidate(async () => {
        //確認メッセージ表示
        // await this.$sUtils.openConfirmDialog('登録', async () => {
        //DB内SEQ名称。Const.jsに記述したほうが見栄えがよさそう
        const propsNameInsert = 'SAMPLE01D01_INSERT1';
        const propsNameUpdate = 'SAMPLE01D01_UPDATE1';

        //登録処理実行 サンプル用DBがないので、サンプルデータを利用
        // const response = await this.$sAccess.insertGetSeq(this.bind.bindModel, propsNameInsert);

        // const response = await this.$sUtils.updateWithExclusionControl(
        //   { ms_sample_seqno: 63, n_excl_cnt: 0 },
        //   propsNameUpdate
        // );

        const dataList = [
          { ms_sample_seqno: 64, n_excl_cnt: 7, propsName: propsNameUpdate },
          { ms_sample_seqno: 65, n_excl_cnt: 4, propsName: propsNameUpdate },
          { propsName: propsNameInsert },
        ];
        const response = await this.$sUtils.insertUpdateInAll(dataList);

        // this.bind.bindModel.m_sample_seqno = await response.data.data.sequence;
        // this.updateMode = true;
        // await this.modeUpdateGetParams();
        // });
      });
    },

    /**
     * @func clickUpdate
     * 登録イベント
     * 処理説明: 更新ボタン押下時に発火
     * ※登録モード時はコンポーネント側の制御により非表示となる。
     */
    clickUpdate() {
      this.$multipleValidate(async () => {
        //確認メッセージ表示
        this.$sUtils.openConfirmDialog('更新', async () => {
          //Update対象テーブル名
          const tableName = 'sample_table';
          //更新対象データのSeqカラム物理名
          const seqColumnName = 'm_sample_seqno';
          //対象テーブルの排他制御カウンタカラム物理名
          const exclusionControlColumn = 'n_excl_cnt';
          //更新処理実行
          //楽観的排他制御の確認を行う共通機能
          const response = await this.$sUtils.updateWithExclusionControl(
            SAMPLECHILDConst.SQL_UPDATE,
            bind.bindModel,
            tableName,
            seqColumnName,
            exclusionControlColumn
          );
        });
        await this.modeUpdateGetParams();
      });
    },

    btnBack() {
      this.$emit('return');
      this.$router.push({ name: SAMPLECHILDConst.NAME_PARENT });
    },

    //論理削除変更処理
    yukoChanged(val) {},
  },

  async beforeRouteLeave(to, from, next) {
    let result = true;
    //保存した初期モデルと現在のモデルが一致するか確認
    if (!_.isEqual(this.$loadSnap('initial').bind.bindModel, this.bind.bindModel)) {
      result = await this.$sUtilsBase.confirm(this.$msg(this.$sMsg.SCREENLEAVECONFIRM), '確認', {
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
    //論理削除判定
    isLogicYuko() {
      return !!this.bind.bindModel.yuko_flg;
    },
  },
};
</script>

<style lang="scss" src="./SAMPLECHILDStyle.scss" scoped></style>
