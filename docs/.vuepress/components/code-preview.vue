<template>
  <div
    :class="[
    'code-preview',
    {
      'code-preview--hidden-code': mode === 'preview',
      'code-preview--hidden-preview': mode === 'code',
    }
  ]"
  >
    <div ref="code" class="code">
      <slot></slot>
    </div>
    <vue-preview
      ref="preview"
      :data="data"
      :methods="methods"
      :template="template"
      :js="js"
      :preview-style="previewStyle"
      v-on="$listeners"
      @loaded="loaded = true"
    ></vue-preview>
    <div v-if="loaded" class="tools">
      <button @click="onCodeModeClick">code</button>
      <button @click="onPreviewModeClick">component</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import VuePreview from './vue-preview';

export default {
  name: 'code-preview',
  components: { VuePreview },
  mixins: [],
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    methods: {
      type: Object,
      default() {
        return {};
      },
    },
    previewStyle: {
      type: [Object, String],
      default() {
        return {};
      },
    },
    initMode: {
      type: String,
      default: 'both',
    },
  },
  data() {
    return { template: '', js: {}, mode: this.initMode, loaded: false };
  },
  // watch: {
  //   mode () {
  //     this.$nextTick().then(() => setTimeout(() => {
  //       this.$emit('resize', this.$refs.preview.$refs.root)
  //     }, 10))
  //   }
  // },
  mounted() {
    this.template = this.$refs.code.querySelector('pre.language-vue').textContent;
    const langJs = this.$refs.code.querySelector('pre.language-js');
    // eslint-disable-next-line palette-vue/no-text-compare
    if (langJs && langJs.textContent.includes('export default')) {
      // eslint-disable-next-line no-new-func
      const fn = new Function(
        `${langJs.textContent.replace('export default', 'const $$$$export = ')}; return $$export;`
      );
      this.js = fn();
    }
  },
  methods: {
    onCodeModeClick() {
      if (this.mode === 'both') {
        this.mode = 'code';
      } else if (this.mode === 'code') {
        this.mode = 'both';
      } else if (this.mode === 'preview') {
        this.mode = 'both';
      }
    },
    onPreviewModeClick() {
      if (this.mode === 'both') {
        this.mode = 'preview';
      } else if (this.mode === 'code') {
        this.mode = 'both';
      } else if (this.mode === 'preview') {
        this.mode = 'both';
      }
    },
  },
};
</script>

<style scoped>
.code-preview {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  position: relative;
}

.code-preview > .code {
  width: 50%;
  padding-right: 4px;
  margin-right: auto;
}

.code-preview > .preview {
  width: 50%;
  padding-left: 4px;
  margin-left: auto;
}

.tools {
  position: absolute;
  right: 0;
  opacity: 0.3;
  z-index: 1;
}

.tools > button {
  cursor: pointer;
  -webkit-appearance: none;
  background-color: white;
  outline: none;
}

.tools:hover {
  opacity: 0.8;
}

.code-preview--hidden-code > .code {
  display: none;
}

.code-preview--hidden-code > .preview {
  width: 100%;
  padding: 0;
}

.code-preview--hidden-preview > .code {
  width: 100%;
  padding: 0;
}

.code-preview--hidden-preview > .preview {
  display: none;
}

.tool-button__code,
.tool-button__preview {
  color: #3eaf7c;
  font-size: 16px;
}

.code-preview--hidden-code .tool-button__code {
  color: #2c3e50;
}

.code-preview--hidden-preview .tool-button__preview {
  color: #2c3e50;
}
</style>
