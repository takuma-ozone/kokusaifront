<template>
  <div :class="['ra-accordion-panel-group']">
    <ra-accordion-panel
      :class="['button-left']"
      :title="leftTitle"
      :is-open="this.isOpenLeft"
      @event="accordionChange"
    >
      <template>
        <slot name="left"></slot>
      </template>
    </ra-accordion-panel>
    <ra-accordion-panel
      :class="['button-right']"
      :title="rightTitle"
      :is-open="!this.isOpenLeft"
      @event="accordionChange"
      :is-left="false"
    >
      <template>
        <slot name="right"></slot>
      </template>
    </ra-accordion-panel>
  </div>
</template>

<script>
export default {
  name: 'RaAccordionPanelGroup',
  componentName: 'RaAccordionPanelGroup',

  inject: ['$validator'],

  props: {
    leftTitle: String,
    rightTitle: String,
    isOpenLeft: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {};
  },

  computed: {
    isOpenLeftComputed: {
      get() {
        return this.isOpenLeft;
      },
      set(value) {
        this.$emit('update:isOpenLeft', value);
      },
    },
  },
  methods: {
    /**
     * 子のクリックイベントにより発火される
     */
    accordionChange() {
      this.isOpenLeftComputed = !this.isOpenLeftComputed;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
$--content-theme-color: #5866c2;

.ra-accordion-panel-group {
  display: flex;
}
</style>
