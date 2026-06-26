<template>
  <span class="rm-date-picker">
    <!-- ラベル -->
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
    <!-- date-picker -->
    <el-date-picker
      v-model="date"
      :id="comId ? 'picker-' + comId : ''"
      :name="comId ? 'picker-' + comId : ''"
      ref="elDatePicker"
      :data-vv-as="caption"
      :data-vv-validate-on="validateTiming"
      v-validate="validate"
      :class="[
        pickerClass ? pickerClass : '',
        pickerWidth ? 'picker-width' + pickerWidth : '',
        {
          'is-invalid': errors.has('picker-' + comId),
        },
      ]"
      :type="type"
      :placeholder="placeholder"
      :prefix-icon="prefixIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      :format="format"
      :value-format="valueFormat"
      :readonly="readonly"
      :editable="editable"
      :align="align"
      :default-value="defaultValue"
      :picker-options="pickerOptions"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></el-date-picker>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmDatePicker',
  componentName: 'RmDatePicker',

  components: {
    RaLabel,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  props: {
    /**
     * ラベル・デートピッカー共通
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
     * デートピッカー向け
     */
    pickerClass: String,
    pickerWidth: {
      type: String,
      default: '4',
    },
    validate: {},
    // バリデーションタイミングを指定するProps
    validateTiming: {
      type: String,
      default: 'change',
    },

    value: {},
    type: {
      type: String,
      default: 'date',
    },
    placeholder: String,
    /**
     * ishino
     * レンジモードのみでの利用のため、使用しない
     */
    // startPlaceholder: String,
    // endPlaceholder: String,
    // rangeSeparator: {
    //   default: '-',
    // },
    // unlinkPanels: Boolean,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },

    // ishino nameには'picker-' + comIdを当てるため、使用しない
    // name: {
    //   default: '',
    // },
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: String,
    format: {
      type: String,
      default: 'yyyy/MM/dd',
    },
    valueFormat: {
      type: String,
      default: 'yyyy/MM/dd',
    },
    readonly: Boolean,
    /**
     * ishino
     * class名には'picker-' + comIdを当てるため、使用しない
     */
    // popperClass: String,
    editable: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      default: 'left',
    },
    defaultValue: {},

    // ishino Timeに関しては別のコンポーネントを使用するため、本propsは使用しない
    // defaultTime: {},

    pickerOptions: {},

    tabindex: String,

    // ishino バリデーション機能は別で作成するため、使用しない
    // validateEvent: {
    //   type: Boolean,
    //   default: true,
    // },
  },

  methods: {
    handleBlur(ev) {
      this.$emit('blur', ev);
    },
    handleFocus(ev) {
      this.$emit('focus', ev);
    },
    handleChange(val) {
      this.$emit('change', val);
    },
  },
  mounted() {
    /**
     * tabindexが渡されている場合、
     * 子要素のインプットにtabindexを渡す
     */
    if (this.tabindex) {
      this.$refs.elDatePicker.$refs.reference.$el.children[0].tabIndex = this.$props.tabindex;
    }
  },

  computed: {
    date: {
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

.rm-date-picker /deep/ {
  // width
  @for $i from 1 through 10 {
    .picker-width#{$i} {
      width: calc(#{$--form-width-standard} + (#{$--form-width-difference} * #{$i}));
    }
  }

  // validation
  .is-invalid {
    input {
      border-color: $--is-invalid-border-color;
      background-color: $--is-invalid-background-color;
    }
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
</style>
