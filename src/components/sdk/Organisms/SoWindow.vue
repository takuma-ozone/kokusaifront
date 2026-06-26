<template>
  <span class="so-window">
    <ra-button @click="onClickPlus" type="info" size="mini">+</ra-button>
    <el-dialog
      class="el-dialog"
      :visible.sync="isVisibleComputed"
      :width="width"
      :top="top"
      :modal="modal"
      :modal-append-to-body="modalAppendToBody"
      :append-to-body="appendToBody"
      :lock-scroll="lockScroll"
      :custom-class="customClass"
      close-on-click-modal
      :close-on-press-escape="closeOnPressEscape"
      :show-close="showClose"
      :before-close="beforeClose"
      :center="center"
      :destroy-on-close="destroyOnClose"
      @closed="handleClosed"
    >
      <ra-panel :title="this.titledate" ref="ref_validate2">
        <p class="coment">{{ labeloption }}</p>
        <sm-pagination
          :total="total"
          :limit.sync="pageSize"
          :page.sync="currentPage"
          @pagination="handlePaging"
        ></sm-pagination>
        <vxe-table height="500" :data.sync="dispData" @cell-click="cellClick">
          <vxe-table-column
            v-for="(columnName, name) in columnNames"
            :key="name"
            :field="name"
            width="auto"
            :title="columnName"
          ></vxe-table-column>
          <!-- <vxe-table-column field="yubin" width="120" title="keyOrColumn[name]"> </vxe-table-column> -->
        </vxe-table>
      </ra-panel>
    </el-dialog>
  </span>
</template>

<script>
import RaLabel from '../Atoms/RaLabel.vue';
//import elDragDialog from '../../../directive/el-drag-dialog'; // base on element-ui

export default {
  components: { RaLabel },
  name: 'SoWindow',
  componentName: 'SoWindow',
  //directives: { elDragDialog },

  props: {
    //元々
    visible: {
      required: true,
    },

    width: String,

    top: {
      type: String,
      default: '15vh',
    },

    modal: {
      type: Boolean,
      default: true,
    },

    modalAppendToBody: {
      type: Boolean,
      default: true,
    },

    appendToBody: {
      type: Boolean,
      default: true,
    },

    lockScroll: {
      type: Boolean,
      default: true,
    },

    customClass: {
      type: String,
      default: '',
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },

    showClose: {
      type: Boolean,
      default: true,
    },

    beforeClose: Function,

    center: {
      type: Boolean,
      default: false,
    },

    destroyOnClose: {
      type: Boolean,
      default: false,
    },

    table: {
      type: Array,
      required: true,
    },

    columnNames: {
      type: Object,
      default: null,
      required: true,
    },

    labeloption: {
      type: String,
      default: '',
      required: true,
    },
    titledate: {
      type: String,
      default: '',
      required: true,
    },
  },

  data() {
    return {
      pageSize: 50,
      currentPage: 1,
    };
  },

  computed: {
    isVisibleComputed: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit('update:visible', value);
      },
    },
    dispData() {
      // 表示するデータを算出
      return this.table.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    total() {
      // テーブル行数を算出してページャーにセット
      return this.table.length;
    },
  },

  methods: {
    handleClosed() {
      // this.$destroy();
      this.$emit('closed');
    },
    onClickPlus() {
      this.$emit('click');
    },
    cellClick({ row }) {
      this.onClickCell(row);
    },

    onClickCell(row) {
      const selectItem = {};
      for (const columnName in this.columnNames) {
        selectItem[columnName] = row[columnName];
      }
      this.$emit('result', selectItem);
      this.handleClosed();
    },
    handlePaging(pageData) {
      // ページングが変更されたらcurrentPageを更新してdispDataを再計算
      this.pageSize = pageData.limit;
      this.currentPage = pageData.page;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.ra-popup /deep/ {
  .el-dialog__header {
    padding: 5px;
    padding-bottom: 5px;
    background-color: $--content-theme-color;
    color: white; // for slot header
  }

  .el-dialog__title {
    line-height: 20px;
    font-size: 14px;
    color: white;
  }

  .el-dialog__headerbtn {
    top: 6px;
    right: 8px;

    .el-dialog__close {
      color: white;
    }
  }

  .el-dialog__footer {
    padding: 5px;
    padding-top: 5px;
    background-color: $--content-theme-color;
    color: white;

    .el-button {
      // margin-right: 10px;
    }
  }
}

.vxe-table {
  margin-left: auto;
  margin-right: auto;
}

.button {
  margin-left: 10px;
}

.el-dialog__wrapper {
  width: 100% !important;
}
.coment {
  font-size: 10pt;
  color: #3c64aa;
  font-weight: bold;
}
</style>
