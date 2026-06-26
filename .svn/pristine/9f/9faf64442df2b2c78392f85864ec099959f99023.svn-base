# :memo: RmTimeSelect

`RmTimeSelect`コンポーネントで、**ラベル＋タイムセレクト**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-time-select](https://element.eleme.io/#/en-US/component/time-picker#fixed-time-picker)です。

## :white_check_mark: `<rm-time-select>`の実装

<code-preview :data="{time:''}">

```vue
<rm-time-select com-id="time" caption="時間" v-model="time"></rm-time-select>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください

| 属性              | 必須 | 説明                                                                                                        | タイプ         | 選択可能な値                                                                                    | デフォルト           |
| :---------------- | :--: | :---------------------------------------------------------------------------------------------------------- | :------------- | ----------------------------------------------------------------------------------------------- | :------------------- |
| com-id            | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とタイムセレクトの ID,name が付与される | String         | -                                                                                               | -                    |
| v-model           | :o:  | タイムセレクトにバインドする値を指定                                                                        | String         | -                                                                                               | -                    |
| time-select-class |      | タイムセレクトのクラス名を指定                                                                              | String         | -                                                                                               | -                    |
| time-select-width |      | タイムセレクトの横幅を指定する。<br>width="1"のとき 40px で、数値が 1 増えるごとに 40px ずつ増加する。      | String, Number | 1 - 10                                                                                          | 4                    |
| validate          |      | バリデーションを指定                                                                                        | String,{}      | [Validations](./../validations/)を参照                                                          | -                    |
| placeholder       |      | プレースホルダーを指定                                                                                      | String         | -                                                                                               | -                    |
| prefix-icon       |      | フォーム内のアイコンを指定する                                                                              | String         | -                                                                                               | el-icon-date         |
| clear-icon        |      | 入力クリアのアイコンを指定する                                                                              | String         | -                                                                                               | el-icon-circle-close |
| clearable         |      | 入力クリアボタンを表示                                                                                      | Boolean        | -                                                                                               | false                |
| disabled          |      | 活性・非活性を制御                                                                                          | Boolean        | -                                                                                               | false                |
| size              |      | タイムセレクトのサイズを指定                                                                                | String         | medium/small/mini                                                                               | mini                 |
| value-format      |      | バインドする値のフォーマットを指定                                                                          | String         | [DateFormats](https://element.eleme.io/#/en-US/component/time-select) 参照                      | -                    |
| readonly          |      | same as native                                                                                              | Boolean        | -                                                                                               | false                |
| editable          |      | 入力編集の可否を指定                                                                                        | Boolean        | -                                                                                               | true                 |
| align             |      | テキストの位置を指定                                                                                        | String         | left/center/right                                                                               | left                 |
| default-value     |      | デフォルトの値を設定できる                                                                                  | Date           | new Date()の形式で与える<br>[参考ページ](http://cly7796.net/wp/javascript/how-to-use-new-date/) | -                    |
| picker-option     |      | 追加オプションを選択                                                                                        | object         | 下記のピッカーオプション一覧参照                                                                | ｛｝                 |

## :white_check_mark: ピッカーオプション一覧

| 属性    | 必須 | 説明                                                               | タイプ | 選択可能な値 | デフォルト |
| :------ | :--: | :----------------------------------------------------------------- | :----- | ------------ | :--------- |
| start   |      | セレクト内の表示開始時刻                                           | String | -            | 09:00      |
| end     |      | セレクト内の表示終了時刻                                           | String | -            | 18:00      |
| step    |      | セレクト内の時間の幅                                               | String | -            | 00:30      |
| minTime |      | セレクト内の選択できる開始時刻（これより前の時間は disabled 状態） | String | -            | 00:00      |
| maxTime |      | セレクト内の選択できる終了時刻（これより後の時間は disabled 状態） | String | -            | -          |

### コンポーネント使用例

<code-preview :data="{time:''}">

```vue
<rm-time-select
  v-model="time"
  com-id="time"
  caption="時間"
  :picker-options="{
    start: '06:00',
    end: '24:00',
    step: '00:15',
    minTime: '07:00',
    maxTime: '22:00',
  }"
>
</rm-time-select>
```

</code-preview>

## イベント一覧

| イベント名 | 説明                     | パラメータ                 |
| ---------- | ------------------------ | -------------------------- |
| change     | インプットの値変更で発火 | バインドされた値           |
| blur       | フォーカスアウトで発火   | コンポーネントインスタンス |
| focus      | フォーカスインで発火     | コンポーネントインスタンス |

### コンポーネント使用例

<code-preview :data="{time:''}" :methods="{ handleChange(val){ this.$alert(`ただいまの時刻は${val}です`)}}">

```vue
<rm-time-select v-model="time" @change="handleChange" com-id="time" caption="時間">
</rm-time-select>
```

```js
methods: {
	handleChange(val){
		this.$alert(`ただいまの時刻は${val}です`);
	}
}
```

</code-preview>

## :white_check_mark: メソッド

| イベント名 | 説明                       | パラメータ |
| ---------- | -------------------------- | ---------- |
| focus      | インプットにフォーカスする | -          |

### コンポーネント使用例

<code-preview :data="{value:''}" :methods="{ inputFocus(){ this.$refs.select.focus(); } }">

```vue
<rm-time-select v-model="value" ref="select" caption="メソッド" com-id="select">
</rm-time-select>

<ra-button @click="inputFocus">Focus!</ra-button>
```

```js
methods: {
  inputFocus() {
    this.$refs.select.focus();
  },
}
```

</code-preview>

## :white_check_mark: その他コンポーネント使用例

### バリデーション

<code-preview :data="{time:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-time-select com-id="time" caption="時間" v-model="time" validate="required"></rm-time-select>
```

</code-preview>
