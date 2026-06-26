<template>
  <span class="rm-date-picker-range">
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
    <!-- date-picker-from -->
    <el-date-picker
      v-model="dateFrom"
      :id="comId ? 'picker-from-' + comId : ''"
      :name="comId ? 'picker-from-' + comId : ''"
      ref="elDatePickerFrom"
      :data-vv-as="caption + 'From'"
      v-validate="validateFrom"
      :data-vv-validate-on="validateTiming"
      :class="[
        pickerFromClass ? pickerFromClass : '',
        pickerWidth ? 'picker-width' + pickerWidth : '',
        {
          'is-invalid': errors.has('picker-from-' + comId),
        },
      ]"
      :type="type"
      :placeholder="placeholderFrom"
      :prefix-icon="prefixIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :disabled="disabledFrom"
      :size="size"
      :format="format"
      :value-format="valueFormat"
      :readonly="readonlyFrom"
      :editable="editable"
      :align="align"
      :default-value="defaultValueFrom"
      :picker-options="pickerOptionsFrom"
      @focus="handleFocusFrom"
      @blur="handleBlurFrom"
      @change="handleChangeFrom"
    ></el-date-picker>
    <!-- 結合文字列 -->
    {{ combinedCharacter }}
    <!-- date-picker-to -->
    <el-date-picker
      v-model="dateTo"
      :id="comId ? 'picker-to-' + comId : ''"
      :name="comId ? 'picker-to-' + comId : ''"
      ref="elDatePickerTo"
      :data-vv-as="caption + 'To'"
      :data-vv-validate-on="validateTiming"
      v-validate="validateToComputed"
      :class="[
        pickerToClass ? pickerToClass : '',
        pickerWidth ? 'picker-width' + pickerWidth : '',
        {
          'is-invalid': errors.has('picker-to-' + comId),
        },
      ]"
      :type="type"
      :placeholder="placeholderTo"
      :prefix-icon="prefixIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :disabled="disabledTo"
      :size="size"
      :format="format"
      :value-format="valueFormat"
      :readonly="readonlyTo"
      :editable="editable"
      :align="align"
      :default-value="defaultValueTo"
      :picker-options="pickerOptionsTo"
      @focus="handleFocusTo"
      @blur="handleBlurTo"
      @change="handleChangeTo"
    ></el-date-picker>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  name: 'RmDatePickerRange',

  componentName: 'RmDatePickerRange',

  components: {
    RaLabel,
  },

  props: {
    /**
     * ラベル・デートピッカー共通
     */
    // 'label-', 'picker-from-', 'picker-to-' にcomIdをつけた値がそれぞれのidにセットされる
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
     * 結合文字列向け
     */
    combinedCharacter: {
      type: String,
      default: '～',
    },

    /**
     * デートピッカー共通向け
     */
    type: {
      type: String,
      default: 'date',
    },
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
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
    clearable: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      default: 'left',
    },
    pickerWidth: {
      type: String,
      default: '4',
    },
    tabindex: String,

    // ishino nameには'picker-' + comIdを当てるため、使用しない
    // name: {
    //   default: '',
    // },

    // ishino class名には'picker-' + comIdを当てるため、使用しない
    // popperClass: String,

    // ishinoTimeに関しては別のコンポーネントを使用するため、本propsは使用しない
    // defaultTime: {},

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

    // ishino バリデーション機能は別で作成するため、使用しない
    // validateEventFrom: {
    //   type: Boolean,
    //   default: true,
    // },

    // バリデーションタイミングを指定するProps
    validateTiming: {
      type: String,
      default: 'change',
    },

    /**
     * デートピッカーFrom向け
     */

    valueFrom: {
      required: true,
      default: '',
    },

    pickerFromClass: String,
    validateFrom: {},

    placeholderFrom: String,

    disabledFrom: {
      type: Boolean,
      default: false,
    },

    readonlyFrom: Boolean,

    defaultValueFrom: {},

    pickerOptionsFrom: {},

    /**
     * デートピッカーTo向け
     */

    valueTo: {
      required: true,
      default: '',
    },

    pickerToClass: String,
    validateTo: {},

    placeholderTo: String,

    disabledTo: {
      type: Boolean,
      default: false,
    },

    readonlyTo: Boolean,

    defaultValueTo: {},

    pickerOptionsTo: {},
  },

  methods: {
    handleBlurFrom(ev) {
      this.$emit('blur-from', ev);
    },
    handleFocusFrom(ev) {
      this.$emit('focus-from', ev);
    },
    handleChangeFrom(val) {
      this.$emit('change-from', val);
    },
    handleBlurTo(ev) {
      this.$emit('blur-to', ev);
    },
    handleFocusTo(ev) {
      this.$emit('focus-to', ev);
    },
    handleChangeTo(val) {
      this.$emit('change-to', val);
    },
  },

  mounted() {
    /**
     * tabindexが渡されている場合、
     * 子要素のインプットにtabindexを渡す
     */
    if (this.tabindex) {
      this.$refs.elDatePickerFrom.$refs.reference.$el.children[0].tabIndex = this.$props.tabindex;
      this.$refs.elDatePickerTo.$refs.reference.$el.children[0].tabIndex = this.$props.tabindex;
    }
  },

  computed: {
    dateFrom: {
      get() {
        return this.valueFrom;
      },
      set(value) {
        this.$emit('update:valueFrom', value);
      },
    },
    dateTo: {
      get() {
        return this.valueTo;
      },
      set(value) {
        this.$emit('update:valueTo', value);
      },
    },
    hasRequired() {
      const validate = this.validateFrom;
      return $rComponent.hasRequiredValidate(validate);
    },

    validateToComputed() {
      let validate = this.validateTo;
      const valFrom = this.valueFrom;
      const valFormat = this.valueFormat;
      //const afterRuleStr = 'after:picker-from,true';
      const afterRuleStr = `after:${valFrom},true|date_format:${valFormat}`;
      const afterRuleObj = { after: [valFrom, true], date_format: valFormat };

      // validateが渡されなかったらafterだけでreturn
      if (!validate) {
        return afterRuleObj;
      }

      if (typeof validate === 'string') {
        if (validate.indexOf('after:') !== -1) {
          validate = validate
            .replace(/date_format:.*?(\||$)/, '')
            .replace(/after:.*?(\||$)/, afterRuleStr + '|')
            .replace(/\|$/, '');
          return validate;
        } else {
          // ishino validateToにafterが含まれていない場合、after:picker-fromがバリデートに与えられる
          return this.validateTo + '|' + afterRuleStr;
        }
      } else {
        // ishino validateToにafterが含まれていない場合、after:picker-fromがバリデートに与えられる
        for (const key in validate) {
          if (key !== 'after' || key !== 'date_format') {
            afterRuleObj[key] = validate[key];
          }
        }
        return afterRuleObj;
        // }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.rm-date-picker-range /deep/ {
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
