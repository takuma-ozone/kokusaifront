<template>
  <div class="home">
    <template v-for="notice in bind_params.search_result_model">
      <ra-panel
        v-show="!_.isEmpty(notice.notice_title) || !_.isEmpty(notice.contents)"
        :title="notice.notice_title"
        :is-header-view="!_.isEmpty(notice.notice_title)"
      >
        <div v-html="notice.contents"></div>
      </ra-panel>
    </template>
  </div>
</template>

<script>
import HomeModel from './HomeModel.js';
import HomeConst from './HomeConst.js';
import BasePage from '@/components/BasePage.vue';
import RaPanel from '@/components/sdk/Atoms/RaPanel.vue';
import { has } from 'lodash';

export default {
  name: 'home',
  mixins: [BasePage], // 共通コンポーネントの読み込み
  components: { RaPanel },
  data() {
    return HomeModel;
  },
  async mounted() {
    this.init();
  },
  computed: {
    viewConst() {
      return HomeConst;
    },
  },
  methods: {
    async init() {
      this.bind_params.model.testClobInfoCol = 'initialize_test';
      this.getClobInfoCol();

      if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
        const response = await $rHttp.get(
          `${window.location.origin}${process.env.BASE_URL}appver.json`,
          {
            v: new Date().getTime(),
          }
        );
        if (response.status === 200) {
          const appVersion = response.data.version;
          // ローカルストレージからバージョン情報を取得
          const curVersion = localStorage.getItem('curVersion');
          // ローカルストレージのバージョン情報と比較し、異なる場合はlocation.reload()
          // ※スーパーリロードにはならないので確実性に欠ける
          if (!_.isEqual(appVersion, curVersion)) {
            localStorage.setItem('curVersion', appVersion);
            window.location.reload();
          }
        }
      }
    },
    //CLOBを含むデータ取得
    async getClobInfoCol() {
      const response = await this.$sUtilsEx.getClob(
        HomeConst.SQL_SELECT_CLOB_INFO,
        {},
        'CLOB_CONTENTS'
      );
      if (has(response, 'data.data')) {
        if (response.data.data.length !== 0) {
          this.bind_params.search_result_model = response.data.data;
        }
      }
    },
  },
};
</script>
<style>
.el-link {
  font-size: 14px !important;
}
.attentionMessage {
  font-weight: bold;
  color: red;
}
.titleMessage {
  font-weight: bold;
  color: black;
}
</style>
