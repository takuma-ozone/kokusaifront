<template>
  <span class="rm-radio-group">
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
    <!-- radio-group -->
    <el-radio-group
      v-model="radioGroup"
      :id="comId ? 'radio-group-' + comId : ''"
      :name="comId ? 'radio-group-' + comId : ''"
      :data-vv-as="caption"
      v-validate="validate"
      :class="[
        radioClass ? radioClass : '',
        {
          'is-invalid': errors.has('radio-group-' + comId),
        },
      ]"
      :disabled="disabled"
      @change="handleChange"
    >
      <!-- 区分値なしの場合 -->
      <template v-if="!kbnNm">
        <slot></slot>
      </template>
      <!-- 区分値ありの場合 -->
      <template v-if="kbnNm">
        <ra-radio
          v-for="kbnti in kbnOptions"
          :key="kbnti.value"
          :label="kbnti.value"
          :tabindex="tabindex"
          >{{ kbnti.label }}</ra-radio
        >
      </template>
    </el-radio-group>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmRadioGroup',
  componentName: 'RmRadioGroup',

  components: {
    RaLabel,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  props: {
    /**
     * ラベル・ラジオ共通
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
     * ラジオ向け
     */

    radioClass: String,
    validate: {},
    value: {},
    disabled: Boolean,
    kbnNm: {
      type: String,
    },
    tabindex: String,
    /**
     * ishino ラジオではborderモード,buttonモードを利用しないため、使用しない。
     */

    // border: Boolean,
    // size: String,
    // text-color: String,
    // fill: String,

    // ishino nameにはcomIdを利用するため、使用しない
    // name: String,
  },

  data() {
    return {
      kbnOptions: [],
    };
  },

  computed: {
    radioGroup: {
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

  mounted() {
    /**
     * kbnNmが与えられている場合、
     * rKBNから区分値を取得する
     */
    if (this.kbnNm) {
      this.kbnOptions = $rComponent.getKbn(this.kbnNm);
    }
  },

  methods: {
    handleChange(val) {
      this.$emit('change', val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../sdk/variables';

.el-input__inner {
  height: 19px;
  font-size: 12pt;
}
</style>
