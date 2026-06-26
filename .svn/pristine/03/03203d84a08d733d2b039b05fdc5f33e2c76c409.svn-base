# :memo: RmText

`RmText`コンポーネントで、**ラベル＋テキスト**を表示できます。

## :white_check_mark: `<rm-text>`の使用例

<code-preview>

```vue
<rm-text
  com-id="text"
  caption="表示"
  value="表示できます"
></rm-text>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください。

| 属性              | 必須 | 説明                                                                                                    | タイプ          | 選択可能な値                           | デフォルト |
| ----------------- | :--: | ------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------- | ---------- |
| com-id            | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とテキストの ID,name が付与される | String          | -                                      | -          |
| value           | :o:  | テキストにバインドする値を指定                                                                        | Any          | -                                      | -          |
| text-class       |      | テキストのクラス名を指定                                                                              | String          | -                                      | -          |
| suffix       |      | 単位など、表示するテキストの最後に固定で表示したいものを指定         | String  | -                                 | -        |


---


## :white_check_mark: その他のコンポーネント使用例

### サフィックス

<code-preview :data="{text:'130'}">

```vue
<rm-text
  com-id="text"
  caption="総出荷個数"
  :value="text"
  suffix="個"
></rm-text>
```

```js
data: {
  text:'130'
}
```

</code-preview>
