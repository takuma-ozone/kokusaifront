<script>
/**
 * rdev library
 */
const cloneDeep = require('lodash.clonedeep');

export default {
  created() {},

  mounted() {
    //現在の場所を記録
    window.$location = this.$route.path || '';
    /**
     * 戻るボタンを無効にする
     * https://hidari-lab.hatenablog.com/entry/2015/03/02/212818
     */
    this._invalidHistoryBack();
    // this._initializeData();
  },

  methods: {
    /**
     * ブラウザの「戻る」ボタンを無効にします
     */
    $keepTransitionParameter() {
      let result = null;
      const vm = this;
      let snapData = null;
      const snapName = vm.$el.className; //vm.$route.path;
      const screenName = 'propsData';
      let propsBlank = true;
      // eslint-disable-next-line prefer-const
      for (let value in vm.$options.propsData) {
        if (Object.keys(vm.$options.propsData[value]).length !== 0) {
          propsBlank = false;
        }
      }
      if (!propsBlank) {
        snapData = cloneDeep(vm.$options.propsData);
        vm.$store.commit({
          type: 'addSnapData',
          snapNm: snapName,
          snapData: snapData,
          screenNm: screenName,
        });
        result = snapData;
      } else if (vm.$store.state.snapData[screenName]) {
        if (vm.$store.state.snapData[screenName][snapName]) {
          result = vm.$store.state.snapData[screenName][snapName];
        }
      } else {
        //propsDataがない
      }
      return result;
    },

    _invalidHistoryBack() {
      // ページが読み込まれたタイミングで新しい履歴を一つ追加する
      // 第3引数がnullなので、自分自身が履歴に追加される
      history.pushState(null, null, null);

      // 戻るボタン押下でイベントハンドラが実行される
      window.addEventListener('popstate', function() {
        history.pushState(null, null, null);
        return;
      });
    },

    // _initializeData() {
    //   /**
    //    * Vuexに'snapData.XXXXXXXXX._init'が存在しない場合はスナップ生成
    //    * 存在する場合は全データを置き換え
    //    */
    //   if (!this.$util.lookup(this.$store.state, 'snapData.' + this.$route.name + '._init')) {
    //     this.$saveSnap('_init'); // Vuexにスナップが保存される
    //   }
    // },

    /**
     * バリデーションを実行し、成功した場合に引数に指定された関数を実行します
     *
     * @param {Function} func バリデーション成功時に実行する関数
     * @returns {void}
     */
    $validate(func, ref) {
      const target = this.$refs[ref || 'validate'];
      return new Promise((resolve, reject) => {
        target.$validator.validateAll().then(result => {
          if (result) {
            func();
          } else {
            // this.$message({
            //   showClose: true,
            //   message: 'validation error',
            //   type: 'error',
            //   duration: 6000,
            // });
          }
          resolve(result);
        });
      });
    },

    $multipleValidate(func) {
      const refs = this.$refs;
      const targetPanel = [];
      const targetTooltip = [];
      for (const ref in refs) {
        if (typeof refs[ref] !== 'undefined') {
          if (refs[ref] instanceof Array) {
            for (const refArray in refs[ref]) {
              if (refs[ref][refArray].$options._componentTag === 'ra-tooltip') {
                targetTooltip.push(refs[ref][refArray]);
              }
            }
          } else {
            if (refs[ref].$options._componentTag === 'ra-panel') {
              targetPanel.push(refs[ref]);
            } else if (refs[ref].$options._componentTag === 'ra-tooltip') {
              targetTooltip.push(refs[ref]);
            }
          }
        }
      }
      return new Promise(async (resolve, reject) => {
        let multipleResult = true;
        for (const target of targetPanel) {
          // if (multipleResult) {
          await target
            .$validate(() => {})
            .then(response => {
              if (!response) {
                multipleResult = false;
              }
            });
          // }
        }
        for (const target of targetTooltip) {
          await target.$validator.validateAll().then(response => {
            if (!response) {
              multipleResult = false;
            }
          });
        }
        if (multipleResult) {
          func();
        } else {
          this.$message({
            showClose: true,
            message: 'エラーを修正してください。',
            type: 'error',
            duration: 6000,
          });
        }
        resolve();
      });
    },

    /**
     * WEBサーバから返却されたエラーメッセージをハンドリングします
     *
     * @param {object}
     *			response
     * @returns {boolean}
     *      hasException
     */
    $handleException(response) {
      // response.dataがない場合はエラーあり
      if (!response.data) {
        return true;
      }

      // warningInfo
      if (response.data.warningInfo) {
        const info = response.data.warningInfo[0];
        const messageCd = info.messageCd;
        const message = info.message;
        // エラーメッセージを追加
        this.$alert(message, '警告', {
          type: 'error',
        });

        return true;
      }

      // errorInfo追加
      if (response.data.errorInfo) {
        const info = response.data.errorInfo[0];
        const messageCd = info.messageCd;
        const message = info.message;
        // エラーメッセージを追加
        this.$alert(message, '警告', {
          type: 'error',
        });

        return true;
      }

      return false;
    },

    /**
     * モデルの値を取得して、temporaryにスナップショットとして格納します。
     *
     * @type {function}
     * @param {String} snapNm - スナップショット保存名称
     * @param {String} modelNm - スナップするモデル名称（指定しない場合は全て）
     */
    $saveSnap(snapNm, modelNm) {
      const vm = this;

      if (!snapNm) {
        console.error('$saveSnap - スナップの保存名称を指定してください。');
        return;
      }

      let snapData = {};

      if (modelNm) {
        let modelData = vm.$data;
        const arrOfStr = modelNm.split('.'); // 与えられた文字列を'.'で分割
        for (const i in arrOfStr) {
          modelData = modelData[arrOfStr[i]];
        }
        // modelが指定された場合はそのObjectをsnapDataに詰める
        snapData = cloneDeep(modelData);
      } else {
        // modelが指定されない場合は全モデルをsnapDataに詰める
        snapData = cloneDeep(vm.$data);
      }

      if (!snapData) {
        console.error('$saveSnap - スナップ対象のデータが見つかりません。');
        return;
      }

      const routeName = vm.$route.name;
      const className = vm.$el.className;
      if (_.isEqual(routeName, className)) {
        vm.$store.commit({
          type: 'addSnapData',
          snapNm: snapNm,
          snapData: snapData,
          screenNm: routeName,
        });
      }
    },

    /**
     * モデルのスナップショットを取得して、モデルの値にセットします。
     *
     * @type {function}
     * @param {String} snapNm - ロードするデータの保存名称
     * @param {String} screenNm - スナップをセーブした画面名（指定なしの場合は自画面）
     */
    $loadSnap(snapNm, screenNm) {
      const vm = this;

      if (!snapNm) {
        console.error('loadSnap - スナップの保存名称を指定してください。');
        return;
      }

      if (!screenNm) {
        screenNm = vm.$route.name;
      }

      const snapData = cloneDeep(vm.$store.state.snapData[screenNm][snapNm]);
      if (!snapData) {
        console.error('loadSnap - ロードするスナップが見つかりません。');
        return;
      }
      return snapData;
    },
  },
};
</script>
