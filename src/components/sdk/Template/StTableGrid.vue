<template>
  <div>
    <!-- ページャ -->
    <sm-pagination
      :total="total"
      :page.sync="currentPage"
      :limit.sync="pageSize"
      :hidden="hidden"
      @pagination="handlePaging"
      small
    ></sm-pagination>
    <!-- テーブル -->
    <vxe-table
      :ref="ref"
      :height="height"
      show-overflow
      :data.sync="dispData"
      :mouse-config="{ selected: true }"
      :keyboard-config="{ isArrow: true, isTab: true }"
      @checkbox-all="selectAllEvent"
      @checkbox-change="selectChangeEvent"
    >
      <slot></slot>
    </vxe-table>
  </div>
</template>

<script>
//テーブル・ページャのテンプレート
export default {
  name: 'StTableGrid',
  componentName: 'StTableGrid',

  props: {
    //ページャ
    // total: {
    //   required: true,
    //   type: Number,
    // },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      },
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    //テーブル
    // ref: {
    //   required: true,
    //   type: String,
    // },
    height: {
      type: String,
      default: '500',
    },
    data: {
      type: Array,
    },
  },

  data() {
    return {};
  },

  methods: {
    //テーブルページャ対応
    // handlePaging(current) {
    //   // ページングが変更されたらcurrentPageを更新してdispDataを再計算
    //   // this.$refs[this.ref].clearSelection();
    //   // this.page = current;
    //   this.currentPage.set(current);
    // },
    //表示件数プルダウン更新
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val });
    },
    //ページ遷移
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize });
    },
    //全選択時のイベント
    selectAllEvent() {
      this.$emit('checkbox-all');
    },
    //チェック時のイベント
    selectChangeEvent() {
      this.$emit('checkbox-change');
    },
  },

  computed: {
    total() {
      // グリッドの総計を計算して返却
      return this.data.length;
    },

    dispData() {
      // グリッド表示データ、ページャの変更によって再計算する。
      return this.data.slice((this.page - 1) * this.limit, this.page * this.limit);
    },

    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        // this.$emit('update:page', val);
        this.page = val;
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        // this.$emit('update:limit', val);
        this.limit = val;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
