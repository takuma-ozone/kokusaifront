# :memo: RmInputNumber

`RmInputNumber`コンポーネントで、**ラベル＋インプットナンバー**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-input-number](https://element.eleme.io/#/en-US/component/input-number#inputnumber)です。

## :white_check_mark: `<rm-input-number>`の使用例

<code-preview :data="{num:''}">

```vue
<rm-input-number
  com-id="input-number-demo"
  v-model="num"
  caption="INPUT_NUMBER"
  :min="-1"
  :max="10"
  :precision="1"
  placeholder="0.5"
></rm-input-number>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください。

| 属性               | 必須 | 説明                                                                                                                | タイプ         | 選択可能な値                           | デフォルト |
| ------------------ | :--: | ------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------- | ---------- |
| com-id             | :o:  | コンポーネント共通の ID を指定。<br>ここで与えられた ID を元にラベル ID とインプットナンバーの ID,name が付与される | String         | -                                      | -          |
| v-model            | :o:  | インプットナンバーにバインドする値を指定                                                                            | Number         | -                                      | 0          |
| input-number-class |      | インプットナンバーのクラス名を指定                                                                                  | String         | -                                      | -          |
| input-align-right  |      | input のテキストアラインを右寄せ指定する                                                                            | Boolean        | -                                      | false      |
| validate           |      | バリデーションを指定                                                                                                | String, Object | [Validations](./../validations/)を参照 | -          |
| min                |      | 入力可能な最小数値を指定                                                                                            | Number         | -                                      | -Infinity  |
| max                |      | 入力可能な最大数値を指定                                                                                            | Number         |                                        | Infinity   |
| step               |      | 数値の増加幅を指定                                                                                                  | Number         | -                                      | 1          |
| step-strictly      |      | 手入力の際に`step`の倍数のみを入力可能とするかを指定                                                                | Boolean        | -                                      | false      |
| precision          |      | 小数点以下を何桁まで入力するかを指定                                                                                | Number         | -                                      | -          |
| size               |      | コンポーネントサイズを指定                                                                                          | String         | large/small                            | mini       |
| disabled           |      | コンポーネントの非活性を制御                                                                                        | Boolean        | -                                      | false      |
| controls           |      | "+", "-"ボタンの表示するかを指定                                                                                    | Boolean        | -                                      | true       |
| placeholder        |      | プレースホルダーを指定                                                                                              | String         | -                                      | -          |

## :white_check_mark: イベント

| イベント名 | 説明                     | パラメータ             |
| ---------- | ------------------------ | ---------------------- |
| change     | インプットの値変更で発火 | currentValue, oldValue |
| blur       | フォーカスアウトで発火   | (event: Event)         |
| focus      | フォーカスインで発火     | (event: Event)         |

### コンポーネント使用例

<code-preview :data="{num:''}" :methods="{ handleBlur(ev){ this.$alert('Blur Event!') } }">

```vue
<rm-input-number
  com-id="input-number-demo"
  v-model="num"
  caption="INPUT_NUMBER"
  :min="-1"
  :max="10"
  @blur="handleBlur"
></rm-input-number>
```

```js
methods: {
  handleBlur(ev) {
    // フォーカスアウトでアラートを出す
    this.$alert('Blur Event!');
  },
}
```

</code-preview>

## :white_check_mark: メソッド

| イベント名 | 説明                               | パラメータ |
| ---------- | ---------------------------------- | ---------- |
| focus      | インプットにフォーカスする         | -          |
| select     | インプット要素のテキストを選択する | -          |

### コンポーネント使用例

<code-preview :data="{num:''}" :methods="{ inputFocus(){ this.$refs.num.focus(); } }">

```vue
<rm-input-number v-model="num" ref="num" caption="カウンタ" com-id="num">
</rm-input-number>

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

## :white_check_mark: その他のコンポーネント使用例

### バリデーション

<code-preview :data="{num:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input-number
  com-id="input-number-demo"
  v-model="num"
  caption="INPUT_NUMBER"
  label-width="5"
  :min="-1"
  :max="10"
  validate="required"
></rm-input-number>
```

</code-preview>
