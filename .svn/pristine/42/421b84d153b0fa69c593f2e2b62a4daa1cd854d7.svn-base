# :memo: RaPopup

`RaPopup`コンポーネントで、ポップアップを作成できます。

ベースになっているのは、`ElementUI`の`el-dialog`です。

> [ElementUI dialog](https://element.eleme.io/#/en-US/component/dialog#dialog)

## :white_check_mark: `<ra-popup>`の使用例

<code-preview :data="{isVisible:false}">

```vue
<ra-popup :visible.sync="isVisible" title="お届け先検索">
  <h1>Content</h1>
  <h2>Insert Content Here</h2>
</ra-popup>

<ra-button type="primary" size="small" @click="isVisible = true">ポップアップを表示</ra-button>
```

</code-preview>

## :white_check_mark: プロパティ

| 属性                  | 必須 | 説明                                           | タイプ                                                        | 選択可能な値 | デフォルト |
| --------------------- | ---- | ---------------------------------------------- | ------------------------------------------------------------- | ------------ | ---------- |
| visible               |      | ポップアップの表示制御を行う                   | Boolean                                                       | -            | false      |
| title                 |      | タイトル文字列を指定                           | String                                                        | -            | 'タイトル' |
| width                 |      | ポップアップのサイズを指定                     | String                                                        | -            | '50%'      |
| fullscreen            |      | 表示をフルスクリーンにするかを指定             | Boolean                                                       | -            | false      |
| top                   |      | ポップアップの`margin-top`を指定               | String                                                        | -            | 15vh       |
| modal                 |      | 背景色をつけるかどうかを指定                   | Boolean                                                       | -            | true       |
| append-to-body        |      | ポップアップを nest する場合は`true`にする     | Boolean                                                       | -            | false      |
| lock-scroll           |      | 親画面のスクロールをロックするかを指定         | Boolean                                                       | -            | true       |
| close-on-click-modal  |      | 背景クリックでポップアップを閉じるかを指定     | Boolean                                                       | -            | false      |
| close-on-press-escape |      | ESC クリックでポップアップを閉じるかを指定     | Boolean                                                       | -            | false      |
| show-close            |      | 閉じるボタンの表示・非表示を指定               | Boolean                                                       | -            | false      |
| before-close          |      | ポップアップを閉じるときの callback を指定     | function(done),<br>`done`はポップアップを閉じるために使われる | -            | -          |
| center                |      | ポップアップヘッダーとフッターの中央寄せを指定 | Boolean                                                       | -            | false      |

## :white_check_mark: スロット

| 名前    | 説明                             |
| ------- | -------------------------------- |
| default | ポップアップ内のコンテンツを追加 |
| title   | ポップアップのタイトル要素を追加 |
| footer  | ポップアップのフッター要素を追加 |

<code-preview :data="{isVisible:false}">

```vue
<ra-popup :visible.sync="isVisible">
  <h1>Content</h1>
  <h2>Insert Content Here</h2>
  <template #title>title content</template>
  <template #footer>footer content</template>
</ra-popup>

<ra-button type="primary" size="small" @click="isVisible = true">ポップアップを表示</ra-button>
```

</code-preview>

## :white_check_mark: イベント

| イベント名 | 説明                                           | パラメータ |
| ---------- | ---------------------------------------------- | ---------- |
| open       | ポップアップ表示で発火                         | -          |
| opened     | ポップアップ表示アニメーション終了時に発火     | -          |
| close      | ポップアップを閉じるときに発火                 | -          |
| closed     | ポップアップを閉じるアニメーション終了時に発火 | -          |

<code-preview :data="{isVisible:false}" :methods="{ handleOpen() {this.$alert('Popup Open!')} }">

```vue
<ra-popup :visible.sync="isVisible" title="お届け先検索" @open="handleOpen">
  <h1>Content</h1>
  <h2>Insert Content Here</h2>
</ra-popup>

<ra-button type="primary" size="small" @click="isVisible = true">ポップアップを表示</ra-button>
```

```js
methods: {
  handleOpen() {
    this.$alert('Popup Open!');
  },
}
```

</code-preview>

## :bulb: 共通ポップアップの実装方法

:link: [開発 Tips - 共通コンポーネント開発](./../tips/developComPopup.md) をご覧ください。
