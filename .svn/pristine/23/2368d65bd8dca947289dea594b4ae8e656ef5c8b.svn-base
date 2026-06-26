<template>
  <span class="rm-input-number">
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
    <el-input-number
      v-model="number"
      :id="comId ? 'input-number-' + comId : ''"
      :name="comId ? 'input-number-' + comId : ''"
      ref="elInputNumber"
      :data-vv-as="caption"
      :data-vv-validate-on="validateTiming"
      v-validate="validate"
      :class="[
        'rm-input-number__inner',
        inputNuberClass ? inputNuberClass : '',
        inputAlignRight ? 'input-align-right' : '',
        {
          'is-invalid': errors.has('input-' + comId),
        },
      ]"
      :min="min"
      :max="max"
      :step="step"
      :step-strictly="stepStrictly"
      :precision="precision"
      :size="size"
      :disabled="disabled"
      :controls="controls"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></el-input-number>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmInputNumber',
  componentName: 'RmInputNumber',

  components: {
    RaLabel,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  props: {
    // バリデーションタイミングを指定するProps
    validateTiming: {
      type: String,
      default: 'change',
    },

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
     * インプット向け
     */
    inputNuberClass: String,
    validate: {},
    inputAlignRight: {
      type: Boolean,
      default: false,
    },

    value: [String, Number],
    min: Number,
    max: Number,
    step: Number,
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    precision: Number,
    size: String,
    disabled: Boolean,
    controls: {
      type: Boolean,
      default: true,
    },

    // nagamachi `position="right"`にするとStyle崩れるため利用しない
    controlsPosition: {
      type: String,
      default: '',
    },

    /**
     * nagamachi 不要のためラップなし
     */
    // name: String,
    // label: String,

    placeholder: String,
  },

  methods: {
    handleBlur(ev) {
      this.$emit('blur', ev);
    },
    handleFocus(ev) {
      this.$emit('focus', ev);
    },
    handleChange(currentValue, oldValue) {
      this.$emit('change', currentValue, oldValue);
    },
  },

  computed: {
    number: {
      get() {
        var value2 = this.value;
        if (typeof value2 === 'undefined') {
          value2 = null;
        }
        return value2;
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

.rm-input-number /deep/ {
  // width
  .rm-input-number__inner {
    width: 100px;
  }

  // validation
  .is-invalid {
    input {
      border-color: $--is-invalid-border-color;
      background-color: $--is-invalid-background-color;
    }
  }

  // ishino インプットのalignを右寄せにする
  .input-align-right {
    .el-input__inner {
      text-align: right;
    }
  }

  .el-input__inner {
    height: 19px;
    font-size: 12pt;
  }
}
</style>
