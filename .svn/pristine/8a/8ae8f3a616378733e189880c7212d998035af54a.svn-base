# :memo: RmDatePickerRange

`RmDatePickerRange`コンポーネントで、**ラベル＋デートピッカー＋結合記号＋デートピッカー**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-date-picker](https://element.eleme.io/#/en-us/component/date-picker)です。

## :white_check_mark: `<rm-date-picker-range>`の実装

<code-preview :data="{dateFrom:'',dateTo:''}">

```vue
<rm-date-picker-range
  :value-from.sync="dateFrom"
  :value-to.sync="dateTo"
  caption="期間"
  com-id="date"
  picker-width="3"
></rm-date-picker-range>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください

### 結合文字列 のプロパティ

| 属性              | 必須 | 説明                                        | タイプ | 選択可能な値 | デフォルト |
| ----------------- | ---- | ------------------------------------------- | ------ | ------------ | ---------- |
| combinedCharacter |      | From と To のフォームの間に配置される文字列 | String | -            | ～         |

### デートピッカー共通のプロパティ

| 属性         | 必須 | 説明                                                                                                          | タイプ         | 選択可能な値                                                                           | デフォルト           |
| ------------ | ---- | ------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------- | -------------------- |
| com-id       | 〇   | コンポーネント共通の ID を指定<br>ここで与えられた ID を元にラベル ID とデートピッカーの ID,name が付与される | String         | -                                                                                      | -                    |
| type         |      | デートピッカータイプを指定                                                                                    | String         | year / month / date / dates / datetime / week / datetimerange / daterange / monthrange | date                 |
| prefix-icon  |      | フォーム内のアイコンを指定する                                                                                | String         | -                                                                                      | el-icon-date         |
| clear-icon   |      | 入力クリアのアイコンを指定する                                                                                | String         | -                                                                                      | el-icon-circle-close |
| size         |      | デートピッカーのサイズを指定                                                                                  | String         | medium/small/mini                                                                      | mini                 |
| format       |      | フォーム内の表示のフォーマットを指定                                                                          | String         | [DateFormats](https://element.eleme.io/#/en-US/component/date-picker) 参照             | yyyy/MM/dd           |
| value-format |      | バインドする値のフォーマットを指定                                                                            | String         | [DateFormats](https://element.eleme.io/#/en-US/component/date-picker) 参照             | -                    |
| clearable    |      | 入力クリアボタンを表示                                                                                        | Boolean        | -                                                                                      | false                |
| editable     |      | 入力編集の可否を指定                                                                                          | Boolean        | -                                                                                      | true                 |
| align        |      | テキストの位置を指定                                                                                          | String         | left/center/right                                                                      | left                 |
| picker-width |      | デートピッカーの横幅を指定する。<br>width="1"のとき 40px で、数値が 1 増えるごとに 40px ずつ増加する。        | String, Number | 1 - 10                                                                                 | 4                    |

### デートピッカー From のプロパティ

| 属性                | 必須 | 説明                                         | タイプ    | 選択可能な値                                                                                    | デフォルト |
| ------------------- | ---- | -------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- | ---------- |
| :value-from.sync    | 〇   | デートピッカーにバインドする値を指定         | String    | -                                                                                               | -          |
| picker-class-from   |      | デートピッカーのクラス名を指定               | String    | -                                                                                               | -          |
| validate-from       |      | バリデーションを指定                         | String,{} | [Validations](./../validations/)を参照                                                          | -          |
| placeholder-from    |      | プレースホルダーを指定                       | String    | -                                                                                               | -          |
| disabled-from       |      | 活性・非活性を制御                           | Boolean   | -                                                                                               | false      |
| readonly-from       |      | same as native                               | Boolean   | -                                                                                               | false      |
| default-value-from  |      | デフォルトの値を設定できる                   | Date      | new Date()の形式で与える<br>[参考ページ](http://cly7796.net/wp/javascript/how-to-use-new-date/) | -          |
| picker-option-from  |      | 追加オプションを選択                         | object    | [Picker Options](https://element.eleme.io/#/en-US/component/date-picker) 参照                   | ｛｝       |
| validate-event-from |      | バリデーションによって発火するイベントを制御 | Boolean   | 下記の [イベント一覧](#イベント一覧) 参照                                                       | false      |

### デートピッカー To のプロパティ

| 属性              | 必須 | 説明                                         | タイプ    | 選択可能な値                                                                                    | デフォルト |
| ----------------- | ---- | -------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- | ---------- |
| :value-to.sync    | 〇   | デートピッカーにバインドする値を指定         | String    | -                                                                                               | -          |
| picker-class-to   |      | デートピッカーのクラス名を指定               | String    | -                                                                                               | -          |
| validate-to       |      | バリデーションを指定                         | String,{} | [Validations](./../validations/)を参照                                                          | -          |
| placeholder-to    |      | プレースホルダーを指定                       | String    | -                                                                                               | -          |
| disabled-to       |      | 活性・非活性を制御                           | Boolean   | -                                                                                               | false      |
| readonly-to       |      | same as native                               | Boolean   | -                                                                                               | false      |
| default-value-to  |      | デフォルトの値を設定できる                   | Date      | new Date()の形式で与える<br>[参考ページ](http://cly7796.net/wp/javascript/how-to-use-new-date/) | -          |
| picker-option-to  |      | 追加オプションを選択                         | object    | [Picker Options](https://element.eleme.io/#/en-US/component/date-picker) 参照                   | ｛｝       |
| validate-event-to |      | バリデーションによって発火するイベントを制御 | Boolean   | 下記の [イベント一覧](#イベント一覧) 参照                                                       | false      |

## :white_check_mark: イベント一覧

### デートピッカー From のイベント

| イベント名  | 説明                     | パラメータ                 |
| ----------- | ------------------------ | -------------------------- |
| change-from | インプットの値変更で発火 | バインドされた値           |
| blur-from   | フォーカスアウトで発火   | コンポーネントインスタンス |
| focus-from  | フォーカスインで発火     | コンポーネントインスタンス |

### デートピッカー To のイベント

| イベント名 | 説明                     | パラメータ                 |
| ---------- | ------------------------ | -------------------------- |
| change-to  | インプットの値変更で発火 | バインドされた値           |
| blur-to    | フォーカスアウトで発火   | コンポーネントインスタンス |
| focus-to   | フォーカスインで発火     | コンポーネントインスタンス |

### コンポーネント使用例

<code-preview :data="{dateFrom:'',dateTo:''}" :methods="{ handleChangeTo(val){ this.$alert(val)}}">

```vue
<rm-date-picker-range
  :value-from.sync="dateFrom"
  :value-to.sync="dateTo"
  caption="期間"
  com-id="date"
  @change-to="handleChangeTo"
></rm-date-picker-range>
```

```js
methods: {
  handleChangeTo(val) {
    this.$alert(val);
  }
}
```

</code-preview>

## :white_check_mark: メソッド

### デートピッカー From のイベント

| イベント名 | 説明                       | パラメータ |
| ---------- | -------------------------- | ---------- |
| focusFrom  | インプットにフォーカスする | -          |

### デートピッカー To のイベント

| イベント名 | 説明                       | パラメータ |
| ---------- | -------------------------- | ---------- |
| focusTo    | インプットにフォーカスする | -          |

### コンポーネント使用例

<code-preview :data="{from:'',to:''}" :methods="{
	inputFocusFrom(){ this.$refs.range.focusFrom();
	},
	inputFocusTo(){ this.$refs.range.focusTo();
	},
}">

```vue
<rm-date-picker-range
  :value-from.sync="from"
  :value-to.sync="to"
  ref="range"
  caption="メソッド"
  com-id="range"
>
</rm-date-picker-range>

<ra-button @click="inputFocusFrom">From</ra-button>
<ra-button @click="inputFocusTo">To</ra-button>
```

```js
methods: {
	inputFocusFrom(){ this.$refs.range.focusFrom();
	},
	inputFocusTo(){ this.$refs.range.focusTo();
	},
}
```

</code-preview>

## :white_check_mark: その他コンポーネント使用例

### バリデーション

<code-preview :data="{dateFrom:'',dateTo:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker-range
  :value-from.sync="dateFrom"
  :value-to.sync="dateTo"
  caption="期間"
  com-id="date"
  validate-from="required"
  validate-to="required"
></rm-date-picker-range>

<ra-button @click="$validator.validateAll()">Validate!</ra-button>
```

</code-preview>
