<template>
  <span class="rm-list">
    <!-- Label -->
    <ra-label
      :id="[comId ? 'label-' + comId : '']"
      :class="['rm-list-label', labelClass ? labelClass : '']"
      :color="labelColor"
      :width="labelWidth"
      :text-align="labelAlign"
      v-if="hasLabel"
      >{{ caption }}</ra-label
    >
    <!-- List -->
    <select
      :id="[comId ? 'list-' + comId : '']"
      :name="[comId ? 'list-' + comId : '']"
      :data-vv-as="caption"
      v-validate="validate"
      :class="[
        'rm-list-select',
        listClass ? listClass : '',
        listWidth ? 'list-width' + listWidth : '',
        {
          'is-invalid': errors.has('list-' + comId),
        },
      ]"
      multiple
      :size="size"
      :tabindex="tabindex"
      @keyup.prevent.delete.exact="handleDelete"
    >
      <!-- 配列の場合 -->
      <template v-if="mode === 'Array'">
        <option v-for="item in items" :key="item" v-on:keyup.delete="handleDelete">{{
          item
        }}</option>
      </template>
      <!-- 連想配列の場合 -->
      <template v-if="mode === 'Object'">
        <option v-for="item in items" :key="item.key" v-on:keyup.delete="handleDelete">{{
          item.value
        }}</option>
      </template>
    </select>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmList',
  componentName: 'RmList',

  components: {
    RaLabel,
  },

  props: {
    /**
     * ラベル・インプット共通
     */
    // comIdに指定した値がid, nameに付与される
    comId: {
      type: String,
      required: true,
    },

    /**
     * ラベル用
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
     * リスト用
     */
    listClass: String,
    listWidth: {
      type: String,
      default: '4',
    },
    validate: {},
    size: {
      type: [String, Number],
      default: 3,
    },
    items: {
      type: [Object, Array],
      required: true,
    },
    mode: {
      type: String,
      default: 'Array',
    },
    tabindex: String,
  },

  computed: {},

  methods: {
    handleDelete(ev) {
      // this.$emit('delete', ev.target.options.selectedIndex);
      const items = this.items;
      // itemsの中で、deleteが押されたindexと一致する要素を削除する
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some
      items.some((el, idx, arr) => {
        if (idx === ev.target.options.selectedIndex) items.splice(idx, 1);
      });
      this.items = items;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';
@import '../../../sdk/element-variables';

.rm-list /deep/ {
  .rm-list-label {
    display: inline-block;
    vertical-align: top;
  }

  .rm-list-select {
    // common-style
    display: inline-block;
    vertical-align: top;
    font-size: 11px;
    -webkit-appearance: none;
    background-color: white;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #333333;
    font-size: inherit;
    outline: none;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /*外枠の色をelementUIに合わせた*/
  .rm-list-select:focus {
    border-color: $--color-primary;
  }

  /*スクロールバー全体*/
  ::-webkit-scrollbar {
    width: 10px;
  }

  /*スクロールバーの軌道*/
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.027);
  }

  /*スクロールバーの動く部分*/
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 50, 0.274);
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
  }

  // width
  @for $i from 1 through 10 {
    .list-width#{$i} {
      width: calc(#{$--list-width-standard} + (#{$--list-width-difference} * #{$i}));
    }
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
</style>
