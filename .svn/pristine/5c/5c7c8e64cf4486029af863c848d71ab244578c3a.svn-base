<template>
  <div class="preview">
    <component :is="component" ref="root"></component>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import BasePage from '@/components/BasePage';

export default {
	name: 'vue-preview',
	components: {},
	mixins: [],
	props: {
		template: {
			type: String,
			default: ''
		},
		data: {
			type: Object,
			default() {
				return {};
			}
		},
		methods: {
			type: Object,
			default() {
				return {};
			}
		},
		previewStyle: {
			type: [Object, String],
			default() {
				return {};
			}
		},
		js: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return { component: 'div' };
	},
	watch: {
		template() {
			this.renderPreview();
		}
	},
	mounted() {
		this.renderPreview();
	},
	methods: {
		renderPreview() {
			const vm = this;
			const { data, methods, previewStyle } = vm;

			const template = `
      <div class="user-preview" :style="previewStyle" >
        ${vm.template}
			</div>`;

			vm.$emit('loaded');
			vm.component = Object.assign(
				{},
				{
					template,
					mixins: [vm.js || {}, BasePage],
					data() {
						return Object.assign(
							{
								previewStyle,
								// Promise,
								document
								// setTimeout(...args) {
								// 	setTimeout(...args);
								// }
							},
							data
						);
					},
					mounted() {
						if (this.mounted) {
							this.mounted();
						}
					},
					methods
				}
			);
		}
	}
};
</script>

<style scoped>
.user-preview {
	margin: 0.85rem 0;
}
</style>
