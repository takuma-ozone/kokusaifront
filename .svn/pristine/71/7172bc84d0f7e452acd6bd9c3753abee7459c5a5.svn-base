<template>
  <span class="rm-input-range">
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
    <!-- input-from -->
    <el-input
      v-model="inputFrom"
      :id="[comId ? 'input-from-' + comId : '']"
      :name="[comId ? 'input-from-' + comId : '']"
      ref="elInputFrom"
      :data-vv-as="caption + 'From'"
      v-validate="validateFrom"
      :class="[
        inputFromClass ? inputFromClass : '',
        inputWidth ? 'input-width' + inputWidth : '',
        inputAlignRight ? 'input-align-right' : '',
        {
          'is-invalid': errors.has('input-from-' + comId),
        },
      ]"
      :type="type"
      :maxlength="maxlength"
      :show-word-limit="showWordLimit"
      :placeholder="placeholderFrom"
      :clearable="clearable"
      :show-password="showPassword"
      :disabled="disabledFrom"
      :size="size"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :rows="rows"
      :autosize="autosize"
      :autocomplete="autocomplete"
      :readonly="readonlyFrom"
      :autofocus="autofocus"
      :tabindex="tabindex"
      @focus="handleFocusFrom"
      @blur="handleBlurFrom"
      @change="handleChangeFrom"
      @clear="handleClearFrom"
    >
      <template v-slot:prefix>
        <slot name="prefixFrom"></slot>
      </template>
      <template v-slot:suffix>
        <slot name="suffixFrom"></slot>
      </template>
      <template v-slot:prepend>
        <slot name="prependFrom"></slot>
      </template>
      <template v-slot:append>
        <slot name="appendFrom"></slot>
      </template>
    </el-input>
    <!-- 結合文字列 -->
    {{ combinedCharacter }}
    <!-- input-to -->
    <el-input
      v-model="inputTo"
      :id="[comId ? 'input-to-' + comId : '']"
      :name="[comId ? 'input-to-' + comId : '']"
      ref="elInputTo"
      :data-vv-as="caption + 'To'"
      v-validate="validateTo"
      :class="[
        inputToClass ? inputToClass : '',
        inputWidth ? 'input-width' + inputWidth : '',
        inputAlignRight ? 'input-align-right' : '',
        {
          'is-invalid': errors.has('input-to-' + comId),
        },
      ]"
      :type="type"
      :maxlength="maxlength"
      :show-word-limit="showWordLimit"
      :placeholder="placeholderTo"
      :clearable="clearable"
      :show-password="showPassword"
      :disabled="disabledTo"
      :size="size"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :rows="rows"
      :autosize="autosize"
      :autocomplete="autocomplete"
      :readonly="readonlyTo"
      :tabindex="tabindex"
      @focus="handleFocusTo"
      @blur="handleBlurTo"
      @change="handleChangeTo"
      @clear="handleClearTo"
    >
      <template v-slot:prefix>
        <slot name="prefixTo"></slot>
      </template>
      <template v-slot:suffix>
        <slot name="suffixTo"></slot>
      </template>
      <template v-slot:prepend>
        <slot name="prependTo"></slot>
      </template>
      <template v-slot:append>
        <slot name="appendTo"></slot>
      </template>
    </el-input>
  </span>
</template>

<script>
import $rUtils from '@/sdk/helpers/rdev.utils';
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmInputRange',
  componentName: 'RmInputRange',

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
     * 結合文字列向け
     */

    combinedCharacter: {
      type: String,
      default: '～',
    },

    /**
     * インプット共通向け
     */
    type: {
      type: String,
      default: 'text',
    },
    maxlength: [String, Number],
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
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
    autocomplete: {
      type: String,
      default: 'off',
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    inputWidth: {
      type: String,
      default: '4',
    },
    inputAlignRight: {
      type: Boolean,
      default: false,
    },
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

    /**
     * インプットFrom向け
     */
    inputFromClass: String,
    validateFrom: {},

    valueFrom: [String, Number],

    placeholderFrom: String,

    disabledFrom: {
      type: Boolean,
      default: false,
    },
    readonlyFrom: Boolean,
    // 画面遷移してきた際のオートフォーカス機能なのでfromだけに当てる
    autofocus: {
      type: Boolean,
      default: false,
    },

    /**
     * インプットTo向け
     */
    inputToClass: String,
    validateTo: {},

    valueTo: [String, Number],

    placeholderTo: String,

    disabledTo: {
      type: Boolean,
      default: false,
    },
    readonlyTo: Boolean,
  },

  mounted() {
    if (this.$props.isPrice) {
      this.inputFrom = this.formatPrice(this.valueFrom);
      this.inputTo = this.formatPrice(this.valueTo);
    }
  },

  methods: {
    handleBlurFrom(ev) {
      // isPrice === trueの場合カンマ区切り
      if (this.$props.isPrice) {
        this.inputFrom = this.formatPrice(this.valueFrom);
      }
      this.$emit('blur-from', ev);
    },
    handleFocusFrom(ev) {
      // isPrice === trueの場合カンマ区切り解除
      if (this.$props.isPrice) {
        this.inputFrom = this.unformatPrice(this.valueFrom);
      }
      this.$emit('focus-from', ev);
    },
    handleChangeFrom(val) {
      this.$emit('change-from', val);
    },
    handleClearFrom() {
      this.$emit('clear-from');
    },
    handleBlurTo(ev) {
      // isPrice === trueの場合カンマ区切り
      if (this.$props.isPrice) {
        this.inputTo = this.formatPrice(this.valueTo);
      }
      this.$emit('blur-to', ev);
    },
    handleFocusTo(ev) {
      // isPrice === trueの場合カンマ区切り解除
      if (this.$props.isPrice) {
        this.inputTo = this.unformatPrice(this.valueTo);
      }
      this.$emit('focus-to', ev);
    },
    handleChangeTo(val) {
      this.$emit('change-to', val);
    },
    handleClearTo() {
      this.$emit('clear-to');
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
    inputFrom: {
      get() {
        return this.valueFrom;
      },
      set(value) {
        this.$emit('update:value-from', value);
      },
    },
    inputTo: {
      get() {
        return this.valueTo;
      },
      set(value) {
        this.$emit('update:value-to', value);
      },
    },
    hasRequired() {
      const validate = this.validateFrom;
      return $rComponent.hasRequiredValidate(validate);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.rm-input-range /deep/ {
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

  // align-right
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
