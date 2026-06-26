<template>
  <span class="rm-select">
    <!-- label -->
    <ra-label
      :id="[comId ? 'label-' + comId : '']"
      :class="labelClass"
      :color="labelColor"
      :text-align="labelAlign"
      v-if="hasLabel"
      :has-required="hasRequired"
      >{{ caption }}</ra-label
    >
    <!-- select -->
    <el-select
      v-model="select"
      :id="comId ? 'select-' + comId : ''"
      :name="comId ? 'select-' + comId : ''"
      ref="elSelect"
      :data-vv-as="caption"
      v-validate="validate"
      :class="[
        selectClass ? selectClass : '',
        selectWidth ? 'select-width' + selectWidth : '',
        {
          'is-invalid': errors.has('select-' + comId),
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
      <!-- 区分値なしの場合 -->
      <template v-if="!kbnNm">
        <slot></slot>
      </template>
      <!-- 区分値ありの場合 -->
      <template v-if="kbnNm">
        <ra-option
          v-for="kbnti in kbnOptions"
          :key="kbnti.value"
          :label="kbnti.label"
          :value="kbnti.value"
        ></ra-option>
      </template>
      <template v-slot:prefix>
        <slot name="prefix"></slot>
      </template>
      <template v-slot:empty>
        <slot name="empty"></slot>
      </template>
    </el-select>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';
import RaOption from '@/components/sdk/Atoms/RaOption';

export default {
  name: 'RmSelect',
  componentName: 'RmSelect',

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
      default: '7',
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
      default: '4',
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
      default: '選択してください',
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

    // nagamachi defaultをfalseに変更, ガイド記載なし
    popperAppendToBody: {
      type: Boolean,
      default: false,
    },
    automaticDropdown: Boolean,

    kbnNm: {
      type: String,
    },
    // tabindex: String,
  },

  data() {
    return {
      kbnOptions: [],
    };
  },

  mounted() {
    /**
     * tabindexが渡されている場合、
     * 子要素のインプットにtabindexを渡す
     */
    // if (this.$props.tabindex) {
    //   console.log(`渡している値は、${this.$props.tabindex}`);
    //   console.log(this.$refs.elSelect.$refs.reference.$refs.input);

    //   this.$refs.elSelect.$refs.reference.$refs.input.setAttribute(
    //     'tabindex',
    //     this.$props.tabindex
    //   );
    //   console.log(this.$refs.elSelect.$refs.reference.$refs.input.tabIndex);
    //   console.log(this.$refs.elSelect.$refs.reference.$refs.input);
    //   // console.log(this.$refs.elSelect.$refs.reference.$el.children);
    // }

    /**
     * //SGS追記
     * kbnNmが与えられている場合、
     * rKBNから区分値を取得する
     */
    if (this.kbnNm) {
      this.kbnOptions = $rComponent.getKbn(this.kbnNm);
      // if (!this.$sUtils.getSessionSelect('hanyo-group').includes(this.kbnNm)) {
      //   this.$sUtils.setKbn(this.kbnNm).then(() => {
      //     this.kbnOptions = this.$sUtils.getSessionSelect(this.kbnNm);
      //   });
      // } else {
      //   this.kbnOptions = this.$sUtils.getSessionSelect(this.kbnNm);
      // }
    }
  },

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
  },

  computed: {
    select: {
      get() {
        return this.value;
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

.rm-select /deep/ {
  // width
  @for $i from 1 through 10 {
    .select-width#{$i} {
      width: calc(#{$--form-width-standard} + (#{$--form-width-difference} * #{$i}));
    }
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
</style>
