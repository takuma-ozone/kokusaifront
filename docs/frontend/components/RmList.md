# RmList

`RmInput`コンポーネントで、**ラベル＋リスト**を表示できます。

## `<rm-list>`の使用例

:star: 配列の場合

<code-preview :data="{ items: ['東京', '大阪', '名古屋', '沖縄'] }">

```vue
<rm-list com-id="list-demo" caption="RmList" :items="items"></rm-list>
```

```js
data() {
  return {
    items: ['東京', '大阪', '名古屋', '沖縄'],
  }
},
```

</code-preview>

:star: 配列の中にオブジェクトが入る場合

<code-preview :data="{ items: [
      { key: 1, value: '東京' },
      { key: 2, value: '大阪' },
      { key: 3, value: '名古屋' },
      { key: 4, value: '沖縄' },
    ] }">

```vue
<rm-list com-id="list-demo" caption="RmList" :items="items" mode="Object"></rm-list>
```

```js
data() {
  return {
    items: [
      { key: 1, value: '東京' },
      { key: 2, value: '大阪' },
      { key: 3, value: '名古屋' },
      { key: 4, value: '沖縄' },
    ],
  }
},
```

</code-preview>

## プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください。

| 属性       | 必須 | 説明                                                                                                | タイプ         | 選択可能な値  | デフォルト |
| ---------- | :--: | --------------------------------------------------------------------------------------------------- | -------------- | ------------- | ---------- |
| com-id     | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とリストの ID,name が付与される | String         | -             | -          |
| items      | :o:  | リスト内に表示する連想配列を指定<br>オブジェクト内に`key`と`value`を持たせる必要がある              | Array          | -             | -          |
| list-class |      | リストのクラス名を指定                                                                              | String         | -             | -          |
| list-width |      | list の横幅を指定する。<br>width="1"のとき 20px で、数値が 1 増えるごとに 30px ずつ増加する。       | String, Number | 1 - 10        | 4          |
| size       |      | リストの表示サイズを指定                                                                            | String, Number | -             | 3          |
| mode       |      | バインドするデータの形式が配列か、連想配列かを指定する<br>（上記サンプル参照）                      | String         | Array, Object | Array      |

:::tip リスト内の削除

リストで表示された項目にフォーカスを合わせた状態で`Del`ボタンを押すと、  
リストからその項目を削除できます。

:::
