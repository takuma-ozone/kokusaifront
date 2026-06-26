<template>
  <span class="rm-checkbox-group">
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
    <!-- checkbox-group -->
    <el-checkbox-group
      v-model="checkboxGroup"
      :id="comId ? 'checkbox-group-' + comId : ''"
      :name="comId ? 'checkbox-group-' + comId : ''"
      :data-vv-as="caption"
      v-validate="validate"
      :class="[
        checkboxClass ? checkboxClass : '',
        {
          'is-invalid': errors.has('checkbox-group-' + comId),
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
        <ra-checkbox
          v-for="kbnti in kbnOptions"
          :key="kbnti.value"
          :label="kbnti.label"
        ></ra-checkbox>
      </template>
    </el-checkbox-group>
  </span>
</template>

<script>
import $rComponent from '@/sdk/helpers/rdev.component';
import RaLabel from '@/components/sdk/Atoms/RaLabel';

export default {
  name: 'RmCheckboxGroup',
  componentName: 'RmCheckboxGroup',

  components: {
    RaLabel,
  },

  // $validatorをinjectすることで親コンポーネントとエラー情報を共有できる
  // https://qiita.com/_Keitaro_/items/b46487ec8282690a0216
  inject: ['$validator'],

  props: {
    /**
     * ラベル・チェックボックス共通
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
     * チェックボックス向け
     */

    checkboxClass: String,
    validate: {},
    value: {},
    disabled: Boolean,
    kbnNm: {
      type: String,
    },
    /**
     * ishino チェックボックスではborderモード,buttonモードを利用しないため、使用しない。
     */

    // border: Boolean,
    // size: String,
    // text-color: String,
    // fill: String,

    /**
     * ishino validate別で定義するため、使用しない
     */

    // min: Number,
    // max: Number,
  },

  data() {
    return {
      kbnOptions: [],
    };
  },

  computed: {
    checkboxGroup: {
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

.el-checkbox-group {
  display: inline;
}

.el-input__inner {
  height: 19px;
  font-size: 16pt;
}
</style>
