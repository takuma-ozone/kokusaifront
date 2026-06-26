# :memo: RmInput

`RmInput`コンポーネントで、**ラベル＋インプット**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-input](https://element.eleme.io/#/en-us/component/input)です。

## :white_check_mark: `<rm-input>`の使用例

<code-preview :data="{address:''}">

```vue
<rm-input
  com-id="address"
  caption="お届け先"
  v-model="address"
  placeholder="入力して下さい"
  input-width="6"
></rm-input>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください。

| 属性              | 必須 | 説明                                                                                                    | タイプ          | 選択可能な値                           | デフォルト |
| ----------------- | :--: | ------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------- | ---------- |
| com-id            | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とインプットの ID,name が付与される | String          | -                                      | -          |
| v-model           | :o:  | インプットにバインドする値を指定                                                                        | String          | -                                      | -          |
| input-class       |      | インプットのクラス名を指定                                                                              | String          | -                                      | -          |
| input-width       |      | input の横幅を指定する。<br>width="1"のとき 40px で、数値が 1 増えるごとに 40px ずつ増加する。          | String, Number  | 1 - 10                                 | 4          |
| input-align-right |      | input のテキストアラインを右寄せ指定する                                                                | Boolean         | -                                      | false      |
| validate          |      | バリデーションを指定                                                                                    | String, Object  | [Validations](./../validations/)を参照 | -          |
| type              |      | インプットタイプを指定                                                                                  | String          | same as native type                    | -          |
| maxlength         |      | 最大文字数を指定                                                                                        | String, Number  | -                                      | -          |
| show-word-limit   |      | `maxlength` と併用で、文字数カウントを表示                                                              | Boolean         | -                                      | false      |
| placeholder       |      | プレースホルダーを指定                                                                                  | String          | -                                      | -          |
| clearable         |      | 入力クリアボタンを表示                                                                                  | Boolean         | -                                      | false      |
| show-password     |      | `type="password"`に変更して、表示切替ボタンを表示                                                       | Boolean         | -                                      | false      |
| disabled          |      | 活性・非活性を制御                                                                                      | Boolean         | -                                      | false      |
| size              |      | インプットサイズを指定<br>(`textarea`以外で有効)                                                        | String          | medium/small/mini                      | mini       |
| prefix-icon       |      | インプット前アイコンを指定                                                                              | String          | -                                      | -          |
| suffix-icon       |      | インプット後アイコンを指定                                                                              | String          | -                                      | -          |
| rows              |      | テキストエリアの行数を指定                                                                              | String, Number  | -                                      | 2          |
| autosize          |      | `textarea`の場合に、自動的にサイズ変更するかを指定                                                      | Boolean, Object | -                                      | false      |
| autocomplete      |      | オートコンプリート on/off を指定                                                                        | String          | on/off                                 | off        |
| readonly          |      | same as native                                                                                          | Boolean         | -                                      | false      |
| autofocus         |      | same as native                                                                                          | Boolean         | -                                      | false      |
| tabindex          |      | タブ順を指定                                                                                            | String          | -                                      | -          |
| is-price          |      | true の場合、`blur`タイミングで数字にカンマ区切りが入る                                                 | Boolean         | -                                      | false      |

---

## :white_check_mark: スロット

- `type="text"`の場合のみ有効。

| 名前    | 説明                                 |
| ------- | ------------------------------------ |
| prefix  | インプット内の前要素として項目を追加 |
| suffix  | インプット内の後要素として項目を追加 |
| prepend | インプット外の前要素として項目を追加 |
| append  | インプット外の後要素として項目を追加 |

### コンポーネント使用例

<code-preview :data="{value:''}">

```vue
<rm-input v-model="value" input-width="8" com-id="data" caption="スロット" :has-label="false">
  <template #prefix>pre</template>
  <template #suffix>suf</template>
  <template #prepend>prepend</template>
  <template #append>append</template>
</rm-input>
```

</code-preview>

## :white_check_mark: イベント

| イベント名 | 説明                     | パラメータ              |
| ---------- | ------------------------ | ----------------------- |
| change     | インプットの値変更で発火 | (value: string, number) |
| focus      | フォーカスインで発火     | (event: Event)          |
| blur       | フォーカスアウトで発火   | (event: Event)          |
| clear      | クリアボタン押下で発火   | -                       |

### コンポーネント使用例

<code-preview :data="{name:''}" :methods="{ handleBlur(ev){ this.$alert('Blur Event!') } }">

```vue
<rm-input v-model="name" @blur="handleBlur" caption="名前" com-id="name">
</rm-input>
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
| blur       | インプットからフォーカスアウトする | -          |
| select     | インプット要素のテキストを選択する | -          |

### コンポーネント使用例

<code-preview :data="{name:''}" :methods="{ inputFocus(){ this.$refs.name.focus(); } }">

```vue
<rm-input v-model="name" ref="name" caption="名前" com-id="name">
</rm-input>

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

<code-preview :data="{address:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="address"
  caption="お届け先"
  v-model="address"
  validate="required|alpha|max:4"
  placeholder="入力して下さい"
></rm-input>
```

</code-preview>
