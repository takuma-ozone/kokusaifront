<template>
  <span class="sm-menu">
    <!-- <vue-progress-bar></vue-progress-bar> -->
    <el-container>
      <el-aside :width="navwidth" v-if="isSideMenu">
        <!-- <el-scrollbar wrap-class="scrollbar-wrapper" name="menu-scroll"> -->
        <!-- ra-menu -->
        <ra-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :background-color="backgroundColor"
          :text-color="textColor"
          :active-text-color="activeTextColor"
          :unique-opened="true"
          :ref="elMenu"
        >
          <ra-menu-item
            v-for="subMenuItem in subMenu"
            :key="subMenuItem.id"
            :index="subMenuItem.id"
            :route="{ name: subMenuItem.name }"
          >
            <i :class="subMenuItem.icon + ' menu-icon'"></i>
            <span slot="title" class="menu-title"> {{ subMenuItem.title }}</span>
          </ra-menu-item>
          <ra-menu-item index="MANYUAL" @click="manyuar" :route="{ name: $route.name }">
            <i class="el-icon-info menu-icon"></i>
            <span slot="title" class="menu-title">マニュアル</span>
          </ra-menu-item>
        </ra-menu>
        <!-- </el-scrollbar> -->
      </el-aside>

      <el-container>
        <el-header :height="headerHeight" v-if="isSideMenu">
          <hamburger
            id="hamburger-container"
            class="hamburger-container"
            :is-active="!isCollapse"
            @toggleClick="toggleSideBar"
            v-if="isSideMenu"
          />
          <img src="../../../assets/SG_Logo.png" class="image-logo1" @click="clickLogo" />
          <span class="display-split">|</span>
          <span class="display-title">{{ displayTitle }}</span>
          <div class="right-menu">
            <!-- <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click"> -->
            <div
              class="avatar-container right-menu-item hover-effect avatar-wrapper"
              @click="logout"
            >
              <i class="el-icon-switch-button"></i>
              <span>{{ logoutMessage }}</span>
              <!-- <i class="el-icon-caret-bottom" /> -->
            </div>
            <!-- <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided @click.native="logout">
                  <span>閉じる</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown> -->
          </div>
          <div class="right-menu2">
            <p>カスタマ名：{{ loginNm }}</p>
            <p>顧客コード：{{ kokyakuCd }}</p>
          </div>
        </el-header>

        <!-- <so-navbar /> -->
        <el-main><router-view /></el-main>
        <el-footer v-if="isSideMenu">{{ footer }}</el-footer>
      </el-container>
    </el-container>
  </span>
</template>

<script>
import Menu from '@/menu.js';
export default {
  name: 'SmMenu',
  componentName: 'SmMenu',
  data() {
    return {
      isCollapse: true,
      activeIndex: '',
      navwidth: '',
      subMenu: Menu.subMenu,
      footer: '@2021 Sagawa Express Co.Ltd. All Rights Reserved.',
      elMenu: 'elMenu',
      logoutMessage: '閉じる',
    };
  },

  props: {
    backgroundColor: {
      type: String,
      default: '#3b499f',
    },
    textColor: {
      type: String,
      default: '#fff',
    },
    activeTextColor: {
      type: String,
      default: '#ffd04b',
    },
    headerHeight: {
      type: String,
      default: '50px',
    },
    loginNm: {
      type: String,
      default: '---',
    },
    kokyakuCd: {
      type: String,
      default: '---',
    },
    isSideMenu: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    //サブメニュー開くとトリガー
    handleOpen(index) {},
    //サブメニューを閉じるとトリガー
    handleClose(index) {},
    checkDefault(menuItem) {
      return new Promise((resolve, reject) => {
        var defaultObject = {
          value: 'name' in menuItem ? menuItem.name : '',
        };
        resolve(defaultObject);
      });
    },
    async logout() {
      await this.$store.dispatch('logoutAsync');
      window.close();
    },
    manyuar() {
      window.open(
        '/internationalShipping/web/manual.pdf',
        '【飛脚国際宅配便出荷システム】マニュアル'
      ); // pdfファイル記述
    },
    clickLogo() {
      this.$router.push({ name: 'home' });
    },
  },

  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },

  mounted() {
    this.activeIndex = this.$route.name;
    this.$Progress.finish();
  },
  computed: {
    displayTitle() {
      const title = this.$route.meta.title;
      return title;
    },
    styles() {
      return {
        '--color': this.backgroundColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$--sagawa-blue: #129b129f;

//sol add 以下
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 190px;
  overflow-x: hidden !important;
}

.el-menu-vertical-demo {
  min-height: 100vh;
}

#header {
  height: 25px;
}

#wrapper {
  margin: 0 auto;
  width: 100%;
  // min-height: 100%;
  position: relative;
  background: #fbeff5;
}

.el-container {
  //IE Chromium系 確認済み firefoxで少しおかしくなる？
  height: 100vh;
  width: 100vw;
}

.el-main {
  // margin-top: 40px;
  padding: 0px !important;
  // height: 90vh;
  min-width: 1100px;
}

// .sidebar-container {
//   transition: width 0.28s;
//   border-right: solid 2px #dfdfdf;
//   position: fixed;
//   width: 200px;
//   height: 100%;
//   position: fixed;
//   font-size: 0px;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 1001;
//   overflow: hidden;
// }

#content {
  // clear:both;
  background: #fbeff5;
  margin: 0px 0px 20px 250px;
  padding: 8px;
  // min-height: 1000px;
  padding-left: 0px;
  // left: 8px;
  position: absolute;
  // width: 800px;
}

.el-header {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 !important;
  min-width: 1100px;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 14px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
          color: rgba(0, 0, 255, 0.658);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 20px;
          height: 20px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .right-menu2 {
    float: right;
    line-height: 15px;
    margin: 7px 30px 0px 0px;
    font-size: 13px;
    color: #5a5e66;
  }

  .image-logo1 {
    float: left;
    height: 48px;
    //cursor: pointer;
    margin: 0px 0px 0px 20px;
    // &:hover {
    //   border: thin solid #5a5e66;
    // }
  }

  .display-title {
    --color: #3c64aa;
    margin: 2px 0px 0px 10px;
    float: left;
    font-size: 28px;
    font-weight: bold;
    color: var(--color);
  }

  .display-split {
    transform: scale(0.8, 1.45);
    bottom: 0.6px;
    margin-left: 6px;
    float: left;
    font-size: 27px;
    color: #899bcb;
  }
}

.el-menu--collapse {
  .el-submenu {
    & > .el-submenu__title {
      & > span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}

.horizontal-collapse-transition {
  transition: width 0.3s ease-in-out 0s, padding-left 0.3s ease-in-out 0s,
    padding-right 0.3s ease-in-out 0s;
}

.scrollbar-wrapper {
  overflow-x: hidden !important;
}

.el-scrollbar__bar.is-vertical {
  right: 0px;
}

.el-scrollbar {
  height: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #d3dce6;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #99a9bf;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.el-footer {
  height: 30px !important;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 !important;
  min-width: 1100px;
}

.menu-icon {
  color: #fff;
}

.el-icon-switch-button {
  margin-right: 5px;
}

.menu-title {
  font-size: 16px;
}

.el-input__inner {
  height: 19px;
  font-size: 12pt;
}
</style>
