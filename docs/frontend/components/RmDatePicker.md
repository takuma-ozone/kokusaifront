# :memo: RmDatePicker

`RmDatePicker`コンポーネントで、**ラベル＋デートピッカー**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-date-picker](https://element.eleme.io/#/en-us/component/date-picker)です。

## :white_check_mark: `<rm-date-picker>`の実装

<code-preview :data="{syuDate:''}">

```vue
<rm-date-picker
  com-id="syuDate"
  caption="出荷日"
  v-model="syuDate"
  picker-width="4"
></rm-date-picker>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください

| 属性          | 必須 | 説明                                                                                                        | タイプ         | 選択可能な値                                                                                    | デフォルト           |
| :------------ | :--: | :---------------------------------------------------------------------------------------------------------- | :------------- | ----------------------------------------------------------------------------------------------- | :------------------- |
| com-id        | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とデートピッカーの ID,name が付与される | String         | -                                                                                               | -                    |
| v-model       | :o:  | デートピッカーにバインドする値を指定                                                                        | String         | -                                                                                               | -                    |
| picker-class  |      | デートピッカーのクラス名を指定                                                                              | String         | -                                                                                               | -                    |
| picker-width  |      | デートピッカーの横幅を指定する。<br>width="1"のとき 40px で、数値が 1 増えるごとに 40px ずつ増加する。      | String, Number | 1 - 10                                                                                          | 4                    |
| validate      |      | バリデーションを指定                                                                                        | String,{}      | [Validations](./../validations/)を参照                                                          | -                    |
| type          |      | デートピッカータイプを指定                                                                                  | String         | year / month / date / dates / datetime / week / datetimerange / daterange / monthrange          | date                 |
| placeholder   |      | プレースホルダーを指定                                                                                      | String         | -                                                                                               | -                    |
| prefix-icon   |      | フォーム内のアイコンを指定する                                                                              | String         | -                                                                                               | el-icon-date         |
| clear-icon    |      | 入力クリアのアイコンを指定する                                                                              | String         | -                                                                                               | el-icon-circle-close |
| clearable     |      | 入力クリアボタンを表示                                                                                      | Boolean        | -                                                                                               | false                |
| disabled      |      | 活性・非活性を制御                                                                                          | Boolean        | -                                                                                               | false                |
| size          |      | デートピッカーのサイズを指定                                                                                | String         | medium/small/mini                                                                               | mini                 |
| format        |      | フォーム内の表示のフォーマットを指定                                                                        | String         | [DateFormats](https://element.eleme.io/#/en-US/component/date-picker) 参照                      | yyyy/MM/dd           |
| value-format  |      | バインドする値のフォーマットを指定                                                                          | String         | [DateFormats](https://element.eleme.io/#/en-US/component/date-picker) 参照                      | -                    |
| readonly      |      | same as native                                                                                              | Boolean        | -                                                                                               | false                |
| editable      |      | 入力編集の可否を指定                                                                                        | Boolean        | -                                                                                               | true                 |
| align         |      | テキストの位置を指定                                                                                        | String         | left/center/right                                                                               | left                 |
| default-value |      | デフォルトの値を設定できる                                                                                  | Date           | new Date()の形式で与える<br>[参考ページ](http://cly7796.net/wp/javascript/how-to-use-new-date/) | -                    |

## :white_check_mark: イベント一覧

| イベント名 | 説明                     | パラメータ                 |
| ---------- | ------------------------ | -------------------------- |
| change     | インプットの値変更で発火 | バインドされた値           |
| blur       | フォーカスアウトで発火   | コンポーネントインスタンス |
| focus      | フォーカスインで発火     | コンポーネントインスタンス |

### コンポーネント使用例

<code-preview :data="{syuDate:''}" :methods="{ handleBlur(ev){ this.$alert(ev)}}">

```vue
<rm-date-picker v-model="syuDate" @blur="handleBlur" com-id="syuDate" caption="出荷日">
</rm-date-picker>
```

```js
methods: {
	handleBlur(ev){
		this.$alert(ev);
	}
}
```

</code-preview>

## :white_check_mark: メソッド

| イベント名 | 説明                       | パラメータ |
| ---------- | -------------------------- | ---------- |
| focus      | インプットにフォーカスする | -          |

### コンポーネント使用例

<code-preview :data="{date:''}" :methods="{ inputFocus(){ this.$refs.date.focus(); } }">

```vue
<rm-date-picker v-model="date" ref="date" caption="メソッド" com-id="date">
</rm-date-picker>

<ra-button @click="inputFocus">Focus!</ra-button>
```

```js
methods: {
  inputFocus() {
    this.$refs.name.focus();
  },
}
```

</code-preview>

## :white_check_mark: その他コンポーネント使用例

### バリデーション

<code-preview :data="{syuDate:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="syuDate"
  caption="出荷日"
  v-model="syuDate"
  validate="required"
></rm-date-picker>

<ra-button @click="$validator.validateAll()">Validate!</ra-button>
```

</code-preview>
