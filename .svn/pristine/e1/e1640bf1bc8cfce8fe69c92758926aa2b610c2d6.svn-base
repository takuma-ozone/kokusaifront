# :memo: RmCheckboxGroup

`RmcheckboxGroup`コンポネントで、**ラベル＋チェックボックスグループ** を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-checkbox-group](https://element.eleme.io/#/en-US/component/checkbox#checkbox-button-group)です。

## :white_check_mark: `<rm-checkbox-group>`の使用例 - 区分指定あり

<code-preview :data="{ checkList: [] }">

```vue
<rm-checkbox-group
  com-id="checkbox"
  caption="区分あり"
  v-model="checkList"
  kbnNm="SYAMEIMAKERKBN"
></rm-checkbox-group>
```

</code-preview>

## :white_check_mark: `<rm-checkbox-group>`の使用例 - 区分指定なし

<code-preview :data="{ checkList: []}">

```vue
<rm-checkbox-group com-id="checkbox" caption="区分なし" v-model="checkList">
  <ra-checkbox label="A"></ra-checkbox>
  <ra-checkbox label="B"></ra-checkbox>
  <ra-checkbox label="C"></ra-checkbox>
</rm-checkbox-group>
```

</code-preview>

## :white_check_mark: Rm チェックボックスグループのプロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください。

:::warning 注意

`Rmラジオグループ`と`Rmセレクト`、`Rmチェックボックス`については、実装方法が似ていますが、いくつか異なるところがあるのでご注意ください。

とくに、区分なしの場合に `Ra-` 部品に与える `label` は、下図のようになります。  
（`Element`の実装方法を踏襲しているための差異）

<div style="background: white;">

| Rm コンポーネント名         | Ra コンポーネント名 | バインドされる値 | 表示されるラベル |
| --------------------------- | ------------------- | ---------------- | ---------------- |
| Rm ラジオグループ           | ra-radio            | label            | slot             |
| Rm セレクト                 | ra-option           | value            | label            |
| Rm チェックボックスグループ | ra-checkbox         | label            | label            |

</div>

:::

| 属性                 | 必須 | 説明                                                                                                                  | タイプ         | 選択可能な値                           | デフォルト |
| -------------------- | :--: | --------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------- | ---------- |
| com-id               | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とチェックボックスグループの ID,name が付与される | String         | -                                      | -          |
| v-model              | :o:  | チェックボックスグループにバインドする値を指定                                                                        | String         | -                                      | -          |
| validate             |      | バリデーションを指定                                                                                                  | String, Object | [Validations](./../validations/)を参照 | -          |
| kbnNm                |      | 区分値からオプションを作成する場合に指定<br>`kbnUniqNm`を文字列で指定する                                             | String         | -                                      | -          |
| checkbox-group-class |      | チェックボックスグループのクラス名を指定                                                                              | String         | -                                      | -          |
| disabled             |      | 活性・非活性を制御                                                                                                    | Boolean        | -                                      | false      |

## :white_check_mark: Ra チェックボックスのプロパティ

区分なしの場合、slot として[Ra チェックボックス](https://element.eleme.io/#/en-US/component/checkbox)を使用する必要がある。

| 属性  | 必須 | 説明                                                                                                                                                                                | タイプ | 選択可能な値 | デフォルト |
| ----- | :--: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------ | ---------- |
| label | :o:  | ひとつのチェックボックスが持つ値かつ表示されるラベル（表示されるものが値となる）。選択したチェックボックスの値が、チェックボックスグループの v-model でバインドするモデルに渡される | {}     | -            | -          |

## :white_check_mark: イベント一覧

| イベント名 | 説明                           | パラメータ       |
| ---------- | ------------------------------ | ---------------- |
| change     | チェックボックスの値変更で発火 | 選択されている値 |

### :white_check_mark: コンポーネント使用例

<code-preview :data="{checkList: []}" :methods="{ handleChange(ev){ this.$alert(`${ev}を選択しています`)}}">

```vue
<rm-checkbox-group
  com-id="checkbox"
  caption="区分あり"
  v-model="checkList"
  kbnNm="SYAMEIMAKERKBN"
  @change="handleChange"
></rm-checkbox-group>
```

```js
methods: {
	handleChange(ev){
		this.$alert(`${ev}を選択しています`);
	}
}
```

</code-preview>

:::warning

// TODO  
「〇個以上選択」、「〇個以下選択」などのバリデーションがあれば、  
追加でカスタムバリデーションを定義する

:::
