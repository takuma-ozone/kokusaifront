# :memo: RaInputRange

`RmInputRange`コンポーネントで、**ラベル＋インプット＋結合文字列＋インプット**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-input](https://element.eleme.io/#/en-us/component/input)です。

## :white_check_mark: `<rm-input-range>`の実装

<code-preview :data="{dataFrom:'',dataTo:''}">

```vue
<rm-input-range
  :value-from.sync="dataFrom"
  :value-to.sync="dataTo"
  caption="範囲"
  com-id="range"
  input-width="2"
></rm-input-range>
```

</code-preview>

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください

### 結合文字列 のプロパティ

| 属性              | 必須 | 説明                                        | タイプ | 選択可能な値 | デフォルト |
| ----------------- | ---- | ------------------------------------------- | ------ | ------------ | ---------- |
| combinedCharacter |      | From と To のフォームの間に配置される文字列 | String | -            | ～         |

### インプット共通のプロパティ

| 属性              | 必須 | 説明                                                                                                    | タイプ          | 選択可能な値        | デフォルト |
| :---------------- | :--: | :------------------------------------------------------------------------------------------------------ | :-------------- | ------------------- | :--------- |
| com-id            |  〇  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とインプットの ID,name が付与される | String          | -                   | -          |
| type              |      | インプットタイプを指定                                                                                  | String          | same as native type | -          |
| maxlength         |      | 最大文字数を指定                                                                                        | String, Number  | -                   | -          |
| show-word-limit   |      | `maxlength` と併用で、文字数カウントを表示                                                              | Boolean         | -                   | false      |
| clearable         |      | 入力クリアボタンを表示                                                                                  | Boolean         | -                   | false      |
| show-password     |      | `type="password"`に変更して、表示切替ボタンを表示                                                       | Boolean         | -                   | false      |
| size              |      | インプットサイズを指定<br>(`textarea`以外で有効)                                                        | String          | medium/small/mini   | mini       |
| prefix-icon       |      | インプット前アイコンを指定                                                                              | String          | -                   | -          |
| suffix-icon       |      | インプット後アイコンを指定                                                                              | String          | -                   | -          |
| rows              |      | テキストエリアの行数を指定                                                                              | String, Number  | -                   | 2          |
| autosize          |      | `textarea`の場合に、自動的にサイズ変更するかを指定                                                      | Boolean, Object | -                   | false      |
| autocomplete      |      | オートコンプリート on/off を指定                                                                        | String          | on/off              | off        |
| input-width       |      | input の横幅を指定する。<br>width="1"のとき 40px で、数値が 1 増えるごとに 40px ずつ増加する。          | String, Number  | 1 - 10              | 4          |
| input-align-right |      | input のテキストアラインを右寄せ指定する                                                                | Boolean         | -                   | false      |

### インプット From のプロパティ

| 属性             | 必須 | 説明                             | タイプ    | 選択可能な値                           | デフォルト |
| :--------------- | :--: | :------------------------------- | :-------- | -------------------------------------- | :--------- |
| :value-from.sync |  〇  | インプットにバインドする値を指定 | String    | -                                      | -          |
| input-class-from |      | インプットのクラス名を指定       | String    | -                                      | -          |
| validate-from    |      | バリデーションを指定             | String,{} | [Validations](./../validations/)を参照 | -          |
| placeholder-from |      | プレースホルダーを指定           | String    | -                                      | -          |
| disabled-from    |      | 活性・非活性を制御               | Boolean   | -                                      | false      |
| readonly-from    |      | same as native                   | Boolean   | -                                      | false      |
| tabindex-from    |      | タブ順を指定                     | String    | -                                      | -          |
| autofocus        |      | same as native                   | Boolean   | -                                      | false      |

### インプット To のプロパティ

| 属性           | 必須 | 説明                             | タイプ    | 選択可能な値                           | デフォルト |
| :------------- | :--: | :------------------------------- | :-------- | -------------------------------------- | :--------- |
| :value-to.sync |  〇  | インプットにバインドする値を指定 | String    | -                                      | -          |
| input-class-to |      | インプットのクラス名を指定       | String    | -                                      | -          |
| validate-to    |      | バリデーションを指定             | String,{} | [Validations](./../validations/)を参照 | -          |
| placeholder-to |      | プレースホルダーを指定           | String    | -                                      | -          |
| disabled-to    |      | 活性・非活性を制御               | Boolean   | -                                      | false      |
| readonly-to    |      | same as native                   | Boolean   | -                                      | false      |
| tabindex-to    |      | タブ順を指定                     | String    | -                                      | -          |

---

## :white_check_mark: スロット

- `type="text"`の場合のみ有効。

### インプット From 向け

| 名前        | 説明                                 |
| ----------- | ------------------------------------ |
| prefixFrom  | インプット内の前要素として項目を追加 |
| suffixFrom  | インプット内の後要素として項目を追加 |
| prependFrom | インプット外の前要素として項目を追加 |
| appendFrom  | インプット外の後要素として項目を追加 |

### インプット To 向け

| 名前      | 説明                                 |
| --------- | ------------------------------------ |
| prefixTo  | インプット内の前要素として項目を追加 |
| suffixTo  | インプット内の後要素として項目を追加 |
| prependTo | インプット外の前要素として項目を追加 |
| appendTo  | インプット外の後要素として項目を追加 |

### コンポーネント使用例

<code-preview :data="{dataFrom:'',dataTo:''}">

```vue
<rm-input-range
  :value-from.sync="dataFrom"
  :value-to.sync="dataTo"
  com-id="data"
  caption="スロット"
  :has-label="false"
>
	<template #prefixFrom>pre</template>
	<template #suffixTo>suf</template>
	<template #prependTo>prepend</template>
	<template #appendFrom>append</template>
</rm-input-range>
```

</code-preview>

## :white_check_mark: イベント

### インプット From 向け

| イベント名  | 説明                     | パラメータ              |
| ----------- | ------------------------ | ----------------------- |
| blur-from   | フォーカスアウトで発火   | (event: Event)          |
| focus-from  | フォーカスインで発火     | (event: Event)          |
| change-from | インプットの値変更で発火 | (value: string, number) |
| clear-from  | クリアボタン押下で発火   | -                       |

### インプット To 向け

| イベント名 | 説明                     | パラメータ              |
| ---------- | ------------------------ | ----------------------- |
| blur-to    | フォーカスアウトで発火   | (event: Event)          |
| focus-to   | フォーカスインで発火     | (event: Event)          |
| change-to  | インプットの値変更で発火 | (value: string, number) |
| clear-to   | クリアボタン押下で発火   | -                       |

### コンポーネント使用例

<code-preview :data="{dataFrom:'',dataTo:''}" :methods="{ handleChangeTo(ev){ this.$alert('Change Event!') } }">

```vue
<rm-input-range
  :value-from.sync="dataFrom"
  :value-to.sync="dataTo"
  caption="範囲"
  com-id="range"
  @change-to="handleChangeTo"
></rm-input-range>
```

```js
methods: {
  handleChangeTo(ev) {
    // Toの値変更でアラートを出す
    this.$alert('Change Event!');
  },
}
```

</code-preview>

## :white_check_mark: メソッド

### インプット From 向け

| イベント名 | 説明                               | パラメータ |
| ---------- | ---------------------------------- | ---------- |
| focusFrom  | インプットにフォーカスする         | -          |
| blurFrom   | インプットからフォーカスアウトする | -          |
| selectFrom | インプット要素のテキストを選択する | -          |

### インプット To 向け

| イベント名 | 説明                               | パラメータ |
| ---------- | ---------------------------------- | ---------- |
| focusTo    | インプットにフォーカスする         | -          |
| blurTo     | インプットからフォーカスアウトする | -          |
| selectTo   | インプット要素のテキストを選択する | -          |

### コンポーネント使用例

<code-preview :data="{from:'',to:''}" :methods="{
	inputFocusFrom(){ this.$refs.range.focusFrom();
	},
	inputFocusTo(){ this.$refs.range.focusTo();
	},
}">

```vue
<rm-input-range
  :value-from.sync="from"
  :value-to.sync="to"
  ref="range"
  caption="メソッド"
  com-id="range"
>
</rm-input-range>

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

<code-preview :data="{dataFrom:'',dataTo:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input-range
  :value-from.sync="dataFrom"
  :value-to.sync="dataTo"
  caption="範囲"
  com-id="range"
  validate-to="required"
></rm-input-range>
```

</code-preview>
