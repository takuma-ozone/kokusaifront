<template>
  <span class="rm-input-read-only">
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
    <el-input
      v-model="input"
      :id="[comId ? 'input-' + comId : '']"
      :name="[comId ? 'input-' + comId : '']"
      ref="elInput"
      :data-vv-as="caption"
      v-validate="validate"
      :class="[
        inputClass ? inputClass : '',
        inputWidth ? 'input-width' + inputWidth : '',
        inputAlignRight ? 'input-align-right' : '',
        {
          'is-invalid': errors.has('input-' + comId),
        },
      ]"
      :type="type"
      :maxlength="maxlength"
      :show-word-limit="showWordLimit"
      :placeholder="placeholder"
      :clearable="clearable"
      :show-password="showPassword"
      :disabled="disabled"
      :size="size"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :rows="rows"
      :autosize="autosize"
      :autocomplete="autocomplete"
      readonly
      :autofocus="autofocus"
      :tabindex="tabindex"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @clear="handleClear"
    >
      <template v-slot:prefix>
        <slot name="prefix"></slot>
      </template>
      <template v-slot:suffix>
        <slot name="suffix"></slot>
      </template>
      <template v-slot:prepend>
        <slot name="prepend"></slot>
      </template>
      <template v-slot:append>
        <slot name="append"></slot>
      </template>
    </el-input>
  </span>
</template>

<script>
import $rUtils from '@/sdk/helpers/rdev.utils';
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmInputReadOnly',
  componentName: 'RmInputReadOnly',

  components: {
    RaLabel,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

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
     * ラベル向け
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
    inputClass: String,
    validate: {},
    inputWidth: {
      type: String,
      default: '4',
    },
    inputAlignRight: {
      type: Boolean,
      default: false,
    },

    value: [String, Number],
    type: {
      type: String,
      default: 'text',
    },
    maxlength: [String, Number],

    // 最小文字の制限は使用しない
    // minlength: [String, Number],

    showWordLimit: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: String,
    suffixIcon: String,
    prefixIcon: String,
    rows: {
      type: [String, Number],
      default: 2,
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },

    autofocus: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
    tabindex: String,

    // nagaamchi 金額かどうかを判断するProps
    // isPriceがtrueの場合は数字がカンマ区切りになる
    isPrice: {
      type: Boolean,
      default: false,
    },

    // ishino 非推奨なverのため、使用しない
    // auto-complete,

    // ishino com-idをnameに与えるため、使用しない
    // name,

    // ishino インプットナンバー型や日付には別のコンポーネントを利用するため、使用しない
    // step,

    // ishino 要素のサイズについては、ユーザー側で操作させないため、使用しない
    // resize,

    // ishino formは使わないので、使用しない
    // form,

    // ishino ラベルはRaLabelとして別で作成するため、使用しない
    // label,

    /**
     * ishino バリデーション機能は別で作成するため、使用しない
     */
    // validate-event,
    // max,
    // min,
  },

  mounted() {
    if (this.$props.isPrice) {
      this.input = this.formatPrice(this.value);
    }
  },

  methods: {
    /**
     * events
     */
    handleBlur(ev) {
      // isPrice === trueの場合カンマ区切り
      if (this.$props.isPrice) {
        this.input = this.formatPrice(this.value);
      }
      this.$emit('blur', ev);
    },
    handleFocus(ev) {
      // isPrice === trueの場合カンマ区切り解除
      if (this.$props.isPrice) {
        this.input = this.unformatPrice(this.value);
      }
      this.$emit('focus', ev);
    },
    handleChange(val) {
      this.$emit('change', val);
    },
    handleClear() {
      this.$emit('clear');
    },

    /**
     * blurタイミングで金額表記（三桁ごとにカンマ挿入）に変換
     */
    formatPrice(val) {
      // valueがない場合はreturn
      if (!val) {
        return;
      }
      // Not-A-Numberならそのままのvalue, 数字の場合は3桁区切りで返す
      const number = isNaN(val) ? val : parseInt(val);
      return $rUtils.formatScreenNum(number);
    },

    /**
     * focusタイミングで金額表記をカンマなし数字に変換
     */
    unformatPrice(val) {
      // valueがない場合はreturn
      if (!val) {
        return;
      }
      const price = isNaN(val) ? val : parseInt(val);
      return $rUtils.formatSystemNum(price);
    },
  },

  computed: {
    input: {
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

.rm-input-read-only /deep/ {
  // width
  @for $i from 1 through 10 {
    .input-width#{$i} {
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

  display: none;
}
</style>
