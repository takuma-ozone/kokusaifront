<template>
  <span class="rm-time-select">
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
    <!-- タイムセレクト -->
    <el-time-select
      v-model="time"
      :id="comId ? 'time-select-' + comId : ''"
      :name="comId ? 'time-select' + comId : ''"
      ref="elTimeSelect"
      :data-vv-as="caption"
      :data-vv-validate-on="validateTiming"
      v-validate="validate"
      :class="[
        timeSelectClass ? timeSelectClass : '',
        timeSelectWidth ? 'time-select-width' + timeSelectWidth : '',
        {
          'is-invalid': errors.has('time-select-' + comId),
        },
      ]"
      :placeholder="placeholder"
      :prefix-icon="prefixIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      :value-format="valueFormat"
      :readonly="readonly"
      :editable="editable"
      :align="align"
      :default-value="defaultValue"
      :picker-options="pickerOptions"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></el-time-select>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmTimeSelect',
  componentName: 'RmTimeSelect',

  components: {
    RaLabel,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  props: {
    /**
     * ラベル・タイムピッカー共通
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
     * タイムセレクト向け
     */
    timeSelectClass: String,
    timeSelectWidth: {
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
    readonly: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    size: String,
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
    align: {
      type: String,
      default: 'left',
    },
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },

    // ishino nameには'time-select-' + comIdを当てるため、使用しない
    // name: {
    //   default: '',
    // },
    valueFormat: String,
    defaultValue: {},
    /**
     * ishino
     * class名には'time-select-' + comIdを当てるため、使用しない
     */
    // popperClass: String,

    pickerOptions: {},
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

  computed: {
    time: {
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

.rm-time-time-select /deep/ {
  // width
  @for $i from 1 through 10 {
    .time-select-width#{$i} {
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
