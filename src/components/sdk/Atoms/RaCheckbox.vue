<template>
  <el-checkbox
    class="ra-checkbox"
    v-model="checkbox"
    :label="label"
    :true-label="trueLabel"
    :false-label="falseLabel"
    :disabled="disabled"
    :border="border"
    :size="size"
    :name="name"
    :checked="checked"
    :indeterminate="indeterminate"
    @change="handleChange"
    ><template> <slot></slot> </template
  ></el-checkbox>
</template>

<script>
export default {
  name: 'RaCheckbox',
  componentName: 'RaCheckbox',

  props: {
    value: {
      type: [String, Number, Boolean],
    },
    label: {
      type: [String, Number, Boolean],
    },
    trueLabel: {
      type: [String, Number],
      default: 1,
    },
    falseLabel: {
      type: [String, Number],
      default: 0,
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
    border: {
      type: Boolean,
      defalut: false,
    },
    size: {
      type: String,
      validator: function(val) {
        return ['medium', 'small', 'mini'].indexOf(val) !== -1;
      },
    },
    name: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    checkbox: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('checkbox', value);
      },
    },
  },

  methods: {
    handleChange() {
      this.$emit('change');
    },
  },
};
</script>

<style>
.ra-checkbox {
  width: 50px;
  height: 30px;
  font-size: 16px;
}
.el-checkbox__label {
  padding-left: 5px;
  line-height: 20px;
  font-size: 16px;
}
</style>
