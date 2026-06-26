<template>
  <span class="sm-select-country">
    <!-- label -->
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
    <!-- select -->
    <el-select
      v-model="select"
      :id="comId ? 'select-coutry-' + comId : ''"
      :name="comId ? 'select-coutry-' + comId : ''"
      ref="elSelect"
      :data-vv-as="caption"
      data-vv-validate-on="change"
      v-validate="validate"
      :class="[
        selectClass ? selectClass : '',
        selectWidth ? 'select-width' + selectWidth : '',
        {
          'is-invalid': errors.has('select-coutry-' + comId),
        },
      ]"
      :multiple="multiple"
      :disabled="disabled"
      :value-key="valueKey"
      :size="size"
      :clearable="clearable"
      :collapse-tags="collapseTags"
      :multiple-limit="multipleLimit"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :filterable="filterable"
      :allow-create="allowCreate"
      :filter-method="filterMethod"
      :no-match-text="noMatchText"
      :no-data-text="noDataText"
      :popper-class="popperClass"
      :default-first-option="defaultFirstOption"
      :popper-append-to-body="popperAppendToBody"
      :automatic-dropdown="automaticDropdown"
      @change="handleChange"
      @visible-change="handleVisibleChange"
      @remove-tag="handleRemoveTag"
      @clear="handleClear"
      @blur="handleBlur"
      @focus="handleFocus"
    >
      <ra-option v-if="blankAble" :label="placeholder" :value="this.empty"></ra-option>
      <el-option
        v-for="item in allCountries"
        :key="item.iso2"
        :label="item.name"
        :value="item.iso2"
      >
        <span
          :class="['vti__flag', item.iso2.toLowerCase()]"
          style="float: left; margin-top: 12px;"
        />
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
      </el-option>
    </el-select>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';
import RaOption from '@/components/sdk/Atoms/RaOption';
import allCountries from '@/assets/allCountries';

export default {
  name: 'SmSelectCountry',
  componentName: 'SmSelectCountry',

  components: {
    RaLabel,
    RaOption,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  props: {
    /**
     * ラベル・セレクト共通
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
      default: '6',
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
     * セレクト向け
     */
    selectClass: String,
    selectWidth: {
      type: [String, Number],
      default: '6',
    },
    validate: {},

    value: {},
    multiple: Boolean,
    disabled: Boolean,

    // nagamachi 用途不明だが使いそう…
    valueKey: {
      type: String,
      default: 'value',
    },

    size: String,
    clearable: Boolean,
    collapseTags: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },

    // nagamachi 用途不明のためガイド記載なし
    autocomplete: {
      type: String,
      default: 'off',
    },
    placeholder: {
      type: String,
      default: '-- 選択 --',
    },
    filterable: Boolean,
    allowCreate: Boolean,
    filterMethod: Function,

    /**
     * nagamachi remote機能は不要と判断
     */
    remote: Boolean,
    remoteMethod: Function,
    loading: Boolean,
    loadingText: String,

    noMatchText: String,
    noDataText: String,
    popperClass: String,

    // nagamachi 常にfalseでOKのためガイド記載なし
    reserveKeyword: Boolean,

    defaultFirstOption: Boolean,

    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    automaticDropdown: Boolean,

    blankAble: {
      type: Boolean,
      default: false,
    },
    // tabindex: String,
  },

  data() {
    return {
      empty: '',
      allCountries: allCountries,
    };
  },

  mounted() {},

  methods: {
    handleChange(val) {
      this.$emit('change', val);
    },
    handleVisibleChange(bool) {
      // true with it appears, and false otherwise.
      this.$emit('visible-change', bool);
    },
    handleRemoveTag(val) {
      this.$emit('remove-tag', val);
    },
    handleClear() {
      this.$emit('clear');
    },
    handleBlur(ev) {
      this.$emit('blur', ev);
    },
    handleFocus(ev) {
      this.$emit('focus', ev);
    },
    selectCheck(val, nullFlg) {
      let flg = false;
      // 必須項目でないかつプルダウンの値がnullのとき
      if (nullFlg) {
        if (val === '' || val == null) {
          return true;
        }
      }
      for (const op of this.allCountries) {
        if (val === op.iso2) {
          flg = true;
          break;
        }
      }
      return flg;
    },
  },

  computed: {
    select: {
      get() {
        if (this.value || this.value === 0) {
          if (typeof this.value === 'number') {
            return String(this.value);
          } else {
            return this.value;
          }
        } else {
          return '';
        }
        // return this.value || this.value === 0 ? this.value : '';
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    hasRequired() {
      const validate = this.validate;
      return $rComponent.hasRequiredValidate(validate);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.sm-select-country /deep/ {
  // width
  @for $i from 1 through 10 {
    .select-width#{$i} {
      width: calc(#{$--form-width-standard} + (#{$--form-width-difference} * #{$i}));
    }
  }

  .el-input__inner {
    height: 19px !important;
    font-size: 12pt;
  }
}
</style>
<style src="@/assets/allFlag.css"></style>
