# :bulb: 共通ポップアップの実装方法

## :white_check_mark: 共通ポップアップの概要

複数画面から呼ばれる「共通ポップアップ」は、Vue.js のコンポーネントとして定義されます。  
ポップアップの実装ではデータの受け渡しが発生して少々複雑となるため、このページで実装方法について説明します。

「共通ポップアップ」の概要は下図の通りです。

<img :src="$withBase('/rapidComPopup.png')" alt="Popup" style="zoom: 80%;">

:::tip props down, events up

Vue.js の親子コンポーネントの関係は、`props down, events up`と要約されます。  
親はプロパティを経由してデータを子に伝え、子はイベントを経由して親にメッセージを送ります。

このような形式にすることで、親子間で**それぞれのデータを直接書き換えないような仕組み**を実現します。

<img :src="$withBase('/rapidPropsDownEventsUp.jpg')" alt="props down events up" style="zoom: 50%;">

:warning: ただし、この方法は複雑になると管理が難しくなるため、多数の状態が行き交うような場合には、  
[Vuex](./../library/vuex.html)を利用するのがベストプラクティスとなっています。

:::

## :white_check_mark: 共通ポップアップの実装

ここでは、簡単な例としてチェックボックスだけを含んだポップアップ実装を説明します。  
ポップアップではチェックボックスを選択して、親画面に選んだ値を return します。

<img :src="$withBase('/rapidComPopupSample.PNG')" alt="共通ポップアップサンプル">

### 共通ポップアップ側

:star: 共通ポップアップの`Template.html`

ポップアップ作成のために、 :link: [ra-popup](./../components/RaPopup.md)コンポーネントを利用します。  
共通ポップアップとしてのポイントは、`visible`に computed で生成された値をバインドしている点です。(下記`.vue`参照)

```html{1-2}
<!-- syncのバインドにcomputedで生成した値をセット -->
<ra-popup title="お届け先選択" :visible.sync="isVisibleComputed" @close="closePopup">
  <div>
    <!-- ポップアップ内で保持するデータは通常通りバインド -->
    <!-- ポップアップクローズのタイミングで値を親画面に返す(closePopupメソッド参照) -->
    <rm-checkbox-group com-id="checkbox" caption="都道府県選択" v-model="bind.prefList">
      <ra-checkbox label="北海道"></ra-checkbox>
      <ra-checkbox label="東京"></ra-checkbox>
      <ra-checkbox label="沖縄"></ra-checkbox>
    </rm-checkbox-group>
  </div>
  <template #footer>
    <ra-button @click="closePopup">決定！</ra-button>
  </template>
</ra-popup>
```

:star: 共通ポップアップの`.vue`

ポイントは以下 3 点です。

1. 親コンポーネントから`visible`を **Props** として貰う
2. 貰った`visible`をもとに、**computed** で`isVisibleComputed`を生成
3. ポップアップを閉じる際に、**\$emit** で親画面にモデルを渡す

```js{8-10,28-29,35-45}
// Component定義のインポート
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'SamplePopup',
  mixins: [BasePage],

  props: {
    visible: Boolean, // visibleをPropsとして親から貰う
  },

  data() {
    return {
      bind: {
        prefList: [],
      },
    };
  },

  watch: {
    // ポップアップ起動時の処理
    isVisibleComputed(val) {},
  },

  methods: {
    // ポップアップを閉じる
    closePopup() {
      // 親コンポーネントにモデルを渡す
      this.$emit('returnVal', this.bind.prefList);
      // ポップアップを閉じる
      this.isVisibleComputed = false;
    },
  },

  computed: {
    // 直接親のモデルを操作しないためにcomputedの中で新たな値を生成する
    isVisibleComputed: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      },
    },
  },
};
```

### 親画面(共通ポップアップの呼び出し)側

:star: 親画面の`Template.html`

```html
<!-- 共通ポップアップの呼び出し -->
<sample-popup :visible.sync="isVisible" @returnVal="getPopupVal"></sample-popup>

<ra-button @click="openPopup">Open Popup</ra-button>
```

:star: 親画面の`.vue`

```js
data() {
  return {
    isVisible: false,
    items: [],
  };
},

methods: {
  openPopup() {
    this.isVisible = true;
  },
  getPopupVal(prefList) {
    // 引数に貰った都道府県チェックボックスをitemsにセット
    this.items = prefList;
  },
},
```

## :white_check_mark: 実装 Tips

### :bulb: ポップアップにおけるフォーカス管理

ポップアップが表示されている間は背景画面へのフォーカス移動を制限する必要があります。  
そこで、ポップアップの前後に空の `<div>` タグを入れることで、背景へのフォーカス移動を抑制します。

```html{2-4,8,14-15}
<div class="NSIXXX01D01">
  <!-- 最初のdivタグにフォーカスされたら最初の要素にフォーカス -->
  <div tabindex="0" @focus="focusFirst"></div>
  <!-- ポップアップを開いたタイミングで最初の要素にフォーカス -->
  <ra-popup
    title="サンプルポップアップ"
    :visible.sync="isVisibleComputed"
    @open="openPopup"
    @close="closePopup"
  >
    <p><rm-input ref="firstInput" v-model="first" com-id="first" caption="FIRST" /></p>
    ...
  </ra-popup>
  <!-- 最後のdivタグにフォーカスされたら最初の要素にフォーカス -->
  <div tabindex="0" @focus="focusFirst"></div>
</div>
```

```js{2-5,7-14}
methods: {
  // ポップアップを開いたときの処理
  openPopup() {
    this.focusFirst();
  },

  // 最初の要素にフォーカスする
  focusFirst() {
    // $nextTickはDOMの更新後にFunctionを実行する
    // https://jp.vuejs.org/v2/api/index.html#Vue-nextTick
    this.$nextTick(() => {
      this.$refs.firstInput.focus();
    });
  },
},
```

### :bulb: ポップアップモデルのクリア

:::warning

通常画面では画面遷移のタイミングで自動的にモデルクリアされますが、  
ポップアップの場合は、各実装で `@close` を拾ってモデルをクリアする :link: [`this.$clearPopup`](./../mixins/#clearpopup) を呼び出してください。

:::

```html{5}
<ra-popup
  title="サンプルポップアップ"
  :visible.sync="isVisibleComputed"
  @open="openPopup"
  @close="closePopup"
>
  ...
</ra-popup>
```

```js{5-6}
methods: {
  closePopup() {
    // ポップアップを閉じる
    this.isVisibleComputed = false;
    // ポップアップのモデルをクリア
    this.$clearPopup();
  },
},
```
