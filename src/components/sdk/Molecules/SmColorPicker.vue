<template>
  <span class="sm-color-picker">
    <!-- ラベル -->

    <rm-input
      :input-width="inputWidth"
      :com-id="comId"
      :caption="caption"
      v-model="color"
      :id="[comId ? 'label-' + comId : '']"
      :class="labelClass"
      :color="labelColor"
      :width="labelWidth"
      :text-align="labelAlign"
      v-if="hasLabel"
      :has-required="hasRequired"
    >
    </rm-input>
    <!-- color-picker -->
    <el-color-picker
      v-model="color"
      :id="comId ? 'picker-' + comId : ''"
      :name="comId ? 'picker-' + comId : ''"
      ref="elDatePicker"
      v-validate="validate"
      :class="[
        pickerClass ? pickerClass : '',
        pickerWidth ? 'picker-width' + pickerWidth : '',
        {
          'is-invalid': errors.has('picker-' + comId),
        },
      ]"
      :color-format="colorFormat"
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
    ></el-color-picker>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'SmColorPicker',
  componentName: 'SmColorPicker',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    RaLabel,
  },

  inject: ['$validator'],

  props: {
    /**
     * ラベル・カラーピッカー共通
     */
    // comIdに指定した値がid, nameに付与される
    comId: {
      type: String,
      required: true,
    },

    inputWidth: {
      type: String,
      default: '4',
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
     * カラーピッカー向け
     */
    pickerClass: String,
    pickerWidth: {
      type: String,
      default: '4',
    },
    validate: {},

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

    colorFormat: {
      type: String,
      default: 'hex',
    },
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
    color: {
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

// .el-color-picker {
//   padding: 20px 0 -40px 0 !important;
// }

.sm-color-picker /deep/ {
  // width
  @for $i from 1 through 10 {
    .picker-width#{$i} {
      width: calc(#{$--form-width-standard} + (#{$--form-width-difference} * #{$i}));
    }
  }

  //   // validation
  //   .is-invalid {
  //     input {
  //       border-color: $--is-invalid-border-color;
  //       background-color: $--is-invalid-background-color;
  //     }
  //   }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
</style>
