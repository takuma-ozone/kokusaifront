# :memo: RmRadioGroup

`RmRadioGroup`コンポネントで、**ラベル＋ラジオグループ** を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-radio-group](https://element.eleme.io/#/en-US/component/radio#radio-button-group)です。

## :white_check_mark: `<rm-radio-group>`の使用例 - 区分指定あり

<code-preview :data="{ value: '' }">

```vue
<rm-radio-group
  com-id="radio"
  caption="区分あり"
  v-model="value"
  kbnNm="SYAMEIMAKERKBN"
></rm-radio-group>
```

</code-preview>

## :white_check_mark: `<rm-radio-group>`の使用例 - 区分指定なし

<code-preview :data="{ value: '' }">

```vue
<rm-radio-group com-id="radio" caption="区分なし" v-model="value">
  <ra-radio :label="1">A</ra-radio>
  <ra-radio :label="2">B</ra-radio>
  <ra-radio :label="3">C</ra-radio>
</rm-radio-group>
```

</code-preview>

## :white_check_mark: Rm ラジオグループのプロパティ

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

| 属性              | 必須 | 説明                                                                                                        | タイプ         | 選択可能な値                           | デフォルト |
| ----------------- | :--: | ----------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------- | ---------- |
| com-id            | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とラジオグループの ID,name が付与される | String         | -                                      | -          |
| v-model           | :o:  | ラジオグループにバインドする値を指定                                                                        | String         | -                                      | -          |
| validate          |      | バリデーションを指定                                                                                        | String, Object | [Validations](./../validations/)を参照 | -          |
| kbnNm             |      | 区分値からオプションを作成する場合に指定<br>`kbnUniqNm`を文字列で指定する                                   | String         | -                                      | -          |
| radio-group-class |      | ラジオグループのクラス名を指定                                                                              | String         | -                                      | -          |
| disabled          |      | 活性・非活性を制御                                                                                          | Boolean        | -                                      | false      |

## :white_check_mark: Ra ラジオのプロパティ

区分なしの場合、slot として[Ra ラジオ](https://element.eleme.io/#/en-US/component/radio)を使用する必要がある。

| 属性   | 必須 | 説明                                                                                                  | タイプ | 選択可能な値 | デフォルト |
| ------ | :--: | ----------------------------------------------------------------------------------------------------- | ------ | ------------ | ---------- |
| :label | :o:  | ひとつのラジオが持つ値。選択したラジオの値が、ラジオグループの v-model でバインドするモデルに渡される | {}     | -            | -          |

## :white_check_mark: イベント一覧

| イベント名 | 説明                 | パラメータ       |
| ---------- | -------------------- | ---------------- |
| change     | ラジオの値変更で発火 | 選択されている値 |

### コンポーネント使用例

<code-preview :data="{value:''}" :methods="{ handleChange(ev){ this.$alert(`${ev}を選択しました`)}}">

```vue
<rm-radio-group
  com-id="radio"
  caption="区分あり"
  v-model="value"
  kbnNm="SYAMEIMAKERKBN"
  @change="handleChange"
></rm-radio-group>
```

```js
methods: {
	handleChange(ev){
		this.$alert(`${ev}を選択しました`);
	}
}
```

</code-preview>
