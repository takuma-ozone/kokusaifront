<template>
  <div class="session-timeout">
    <div class="gridContainer">
      <el-header id="headerArea" height="50px">
        <div class="header">
          <img src="../../assets/SG_Logo.png" class="image-logo1" />
          <span class="display-split">|</span>
          <span class="display-title">{{ this.$route.meta.title }}</span>
        </div>
      </el-header>
      <ro-message-guide id="msgArea"></ro-message-guide>
      <!-- パネル -->
      <div id="errorPanel">
        <ra-panel title="セッションタイムアウト" ref="ref_validate1">
          <br />
          セッションの有効期限が切れたためログアウトしました。
          <br />
          再度ログインし直してください。
        </ra-panel>
      </div>
      <div id="footerButton"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionTimeout',

  created() {
    //ログイン情報が残っている場合、ログアウトさせる。
    if (this.isLogin) {
      this.logoutAsync();
    }
  },
  data() {
    return {
      footer: '@2021 Sagawa Express Co.Ltd. All Rights Reserved.',
    };
  },
  methods: {
    async logoutAsync() {
      await this.$store.dispatch('logoutAsync');
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
.gridContainer {
  display: grid;
  grid-template:
    'headerArea' 65px
    'msgArea' 12px
    'errorPanel' 371px
    'footerButton' auto/ 1fr;
  grid-gap: 0px;
  margin: 0 3px;
  min-width: 600px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

// CSSグリッド
$areas: headerArea, msgArea, errorPanel, footerButton;

@each $area in $areas {
  ##{$area} {
    grid-area: #{$area};
  }
}

#errorPanel {
  width: 800px;
  justify-self: center;
  div.el-card {
    height: 300px;
  }
}

#footerButton {
  justify-self: center;
}

.session-timeout {
  .text-jumbo {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    color: #484848;
    height: 39vw;
    min-width: 1100px;
  }
  .el-link {
    font-size: 20px;
  }
}
.tableSpace {
  border: 1;
}
.el-footer {
  height: 30px !important;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: #fff;
  padding: 0 !important;
  min-width: 1100px;
}

.image-logo1 {
  float: left;
  height: 48px;
  margin: 0px 0px 0px 20px;
  position: relative;
}

.el-header {
  height: 50px;
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  background: #fff;
  // box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 !important;
  // min-width: 1100px;
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
    margin: 0px 0px 0px 0px;
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
</style>
