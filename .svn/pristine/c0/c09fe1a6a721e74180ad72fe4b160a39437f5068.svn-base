<template>
  <el-card shadow="always">
    <!-- <div :class="['ra-panel', panelClass ? panelClass : '']">
      <div class="ra-panel-header">
        <span class="ra-panel-title" v-if="!titleRight">{{ title }}</span>
        <span class="ra-panel-title-right" v-if="titleRight">{{ title }}</span>
        <ra-button
          id="openButton"
          v-if="openable"
          @click="toggleOpen"
          :icon="openIcon"
          circle
        ></ra-button>
      </div>

      <div class="ra-panel-content">
        <slot v-if="isOpenComputed"></slot>
      </div>

    </div> -->
    <div slot="header" class="clearfix" v-if="isHeaderView">
      <font-awesome-icon icon="asterisk" id="aster-icon" v-if="required"></font-awesome-icon>
      <span style="font-size:14pt;">{{ title }}</span>
      <a :href="url" v-if="hedderlinkflg" target="_blank" style="font-size:14pt;">{{ linknm }}</a>
      <ra-button style="float: right; padding: 0" type="text" v-if="openable"
        ><i :class="openIcon" @click="toggleOpen" id="openButton"></i
      ></ra-button>
    </div>
    <div class="text item" v-show="isOpenComputed">
      <rm-text com-id="validate" caption="" ref="validate" style="display:none;"></rm-text>
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
import BasePopup from '@/components/BasePopup.vue';
export default {
  name: 'RaPanel',
  componentName: 'RaPanel',
  mixins: [BasePopup],

  inject: ['$validator'],

  props: {
    title: String,
    required: {
      type: Boolean,
      default: false,
    },
    titleRight: {
      type: Boolean,
      default: false,
    },
    panelClass: String,

    isOpen: {
      type: Boolean,
      default: true,
    },

    openable: {
      type: Boolean,
      default: false,
    },

    isHeaderView: {
      type: Boolean,
      default: true,
    },

    hedderlinkflg: {
      type: Boolean,
      default: false,
    },

    url: {
      type: String,
      required: false,
    },

    linknm: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      open: true,
    };
  },

  mounted() {
    if (!this.isOpen) {
      this.open = this.isOpen;
    }
  },

  methods: {
    toggleOpen() {
      this.isOpenComputed = !this.isOpenComputed;
    },
  },

  computed: {
    isOpenComputed: {
      get() {
        return this.open;
      },
      set(value) {
        this.open = value;
      },
    },
    openIcon() {
      return !this.isOpenComputed ? 'el-icon-arrow-down' : 'el-icon-arrow-up';
    },
  },
};
</script>

<style lang="scss" scoped>
$--content-theme-color: #5866c2;

.ra-panel {
  width: 100%;
  border-left: solid 1px lightgray;
  border-right: solid 1px lightgray;

  .ra-panel-header {
    width: 100%;
    height: 25px;
    color: white;
    background-color: $--content-theme-color;

    .ra-panel-title {
      // titleをpanel-headerの上下中央に配置
      position: relative;
      top: 15%;
      transform: translateY(-50%);
      width: 90%;
      left: 10px;
    }

    .ra-panel-title-right {
      // titleをpanel-headerの上下中央に配置
      position: relative;
      top: 15%;
      transform: translateY(-50%);
      // titleを右端に配置
      text-align: right;
      width: 90%;
      right: 10px;
    }
  }

  .ra-panel-content {
    background-color: rgb(245, 250, 255);
    padding: 2px 0px;
  }

  #openButton {
    left: 18px;
    top: 14%;
    position: relative;
  }
}
#aster-icon {
  vertical-align: top;
  color: #ff0080;
  width: 8px;
  top: 2px;
  right: 2px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.el-card {
  margin: 10px;
}
</style>
