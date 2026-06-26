# :memo: RmSelect

`RmSelect`コンポーネントで、**ラベル＋セレクト**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-select](https://element.eleme.io/#/en-US/component/select)です。

## :white_check_mark: `<rm-select>`の使用例 - 区分指定あり

<code-preview :data="{ value: '' }">

```vue
<rm-select
  com-id="select-demo"
  caption="区分あり"
  v-model="value"
  kbnNm="SYAMEIMAKERKBN"
></rm-select>
```

</code-preview>

## :white_check_mark: `<rm-select>`の使用例 - 区分指定なし

<code-preview :data="{ value: '' }">

```vue
<rm-select com-id="select-demo" caption="区分なし" v-model="value" select-width="3">
  <ra-option label="ラベル1" value="value1"></ra-option>
  <ra-option label="ラベル2" value="value2"></ra-option>
  <ra-option label="ラベル3" value="value3"></ra-option>
</rm-select>
```

</code-preview>

## :white_check_mark: プロパティ

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

| 属性                 | 必須 | 説明                                                                                                                             | タイプ         | 選択可能な値                           | デフォルト         |
| -------------------- | :--: | -------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------- | ------------------ |
| com-id               | :o:  | コンポーネント共通の ID を指定。ここで与えられた ID を元にラベル ID とセレクトの ID,name が付与される                            | String         | -                                      | -                  |
| v-model              | :o:  | セレクトにバインドする値を指定                                                                                                   | String         | -                                      | -                  |
| kbnNm                |      | 区分値からオプションを作成する場合に指定<br>`kbnUniqNm`を文字列で指定する                                                        | String         | -                                      | -                  |
| select-class         |      | セレクトのクラス名を指定                                                                                                         | String         | -                                      | -                  |
| select-width         |      | セレクトの横幅を指定する。<br>width="1"のとき 40px で、数値が 1 増えるごとに 40px ずつ増加する。                                 | String, Number | 1 - 10                                 | 4                  |
| validate             |      | バリデーションを指定                                                                                                             | String, Object | [Validations](./../validations/)を参照 | -                  |
| multiple             |      | 複数選択のプルダウンとするかを指定                                                                                               | Boolean        | -                                      | false              |
| disabled             |      | 活性・非活性を制御                                                                                                               | Boolean        | -                                      | false              |
| value-key            |      | value を特定する名称を指定<br>`value`が Object の場合は必須。                                                                    | String         | -                                      | value              |
| size                 |      | セレクトのサイズを指定                                                                                                           | String         | medium/small/mini                      | mini               |
| clearable            |      | セレクトの値をクリアできるかを指定                                                                                               | Boolean        | -                                      | false              |
| collapse-tags        |      | multiple の時、選択された値を省略して表示するかを指定                                                                            | Boolean        | -                                      | false              |
| multiple-limit       |      | multiple の時、選択できるオプションの数を指定<br>0 の時、制限なしとなる                                                          | Number         | -                                      | 0                  |
| placeholder          |      | 未選択時の placeholder を指定                                                                                                    | String         | -                                      | '選択してください' |
| filterable           |      | ユーザーの入力によってオプションをフィルタリング可能とするかを指定                                                               | Boolean        | -                                      | false              |
| allowCreate          |      | ユーザーが新たなオプションを作成できるかを指定<br>`filterable`が`true の時のみ有効 | Boolean | - | false                         |
| filter-method        |      | フィルターする方式を変えるメソッド<br>詳細は[こちら](https://element.eleme.io/#/en-US/component/select#option-filtering)を参照。 | Function       | -                                      | -                  |
| no-match-text        |      | フィルターにマッチする選択肢がない場合に表示される文字列                                                                         | String         | -                                      | データなし         |
| no-data-text         |      | オプションがない場合に表示される文字列                                                                                           | String         | -                                      | データなし         |
| default-first-option |      | `filterable`のとき、最初にマッチしたオプションをデフォルトで選択するかを指定                                                     | Boolean        | -                                      | false              |
| automatic-dropdown   |      | セレクト focus 時に自動的にオプションを開くかを指定                                                                              | Boolean        | -                                      | false              |

## :white_check_mark: スロット

| Name   | Description                              |
| ------ | ---------------------------------------- |
| prefix | セレクト内の前要素として項目を追加       |
| empty  | オプションがない場合のドロップダウン項目 |

### コンポーネント使用例

<code-preview :data="{ value: '' }">

```vue
<rm-select
  com-id="select-demo"
  caption="SLOT-PREFIX"
  v-model="value"
  kbnNm="SYAMEIMAKERKBN"
  clearable
>
  <template v-slot:prefix>pre</template>
</rm-select>
```

</code-preview>

## :white_check_mark: イベント

| イベント名     | 説明                       | パラメータ                            |
| -------------- | -------------------------- | ------------------------------------- |
| change         | セレクトの変更で発火       | 選択された値                          |
| visible-change | ドロップダウンの開閉で発火 | 開いていれば true, 閉じていれば false |
| remove-tag     | `multiple`のタグ削除で発火 | 削除されたタグの値                    |
| clear          | クリアボタン押下で発火     | -                                     |
| blur           | フォーカスアウトで発火     | (event: Event)                        |
| focus          | フォーカスインで発火       | (event: Event)                        |

### コンポーネント使用例

<code-preview :data="{value:''}" :methods="{ handleChange(val) { this.$alert(`選ばれたのは${val}です。`) } }">

```vue
<rm-select
  com-id="select-demo"
  caption="EVENT"
  v-model="value"
  kbnNm="SYAMEIMAKERKBN"
  @change="handleChange"
></rm-select>
```

```js
methods: {
  handleChange(val) {
    // 値選択でアラートを出す
    this.$alert(`選ばれたのは${val}です。`);
  }
}
```

</code-preview>

## :white_check_mark: メソッド

| イベント名 | 説明                               | パラメータ |
| ---------- | ---------------------------------- | ---------- |
| focus      | インプットにフォーカスする         | -          |
| blur       | インプットからフォーカスアウトする | -          |

### コンポーネント使用例

<code-preview :data="{value:''}" :methods="{ inputFocus(){ this.$refs.select.focus(); } }">

```vue
<rm-input v-model="value" ref="select" caption="メソッド" com-id="select">
</rm-input>

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

---

## :white_check_mark: `ra-option`のプロパティ

| 属性     | 必須 | 説明                                                      | タイプ               | 選択可能な値 | デフォルト |
| -------- | :--: | --------------------------------------------------------- | -------------------- | ------------ | ---------- |
| value    | :o:  | オプションのバリュー                                      | String/Number/Object | -            | -          |
| label    |      | オプションのラベル<br>省略された場合は`value`と同じになる | String/Number        | -            | -          |
| disabled |      | オプションが非活性かどうかを指定                          | Boolean              | -            | false      |

:::warning Option Group について

`Element UI`では [Grouping](https://element.eleme.io/#/en-US/component/select#grouping) でドロップダウン内でグループを作成できますが、  
新出荷システムではこれを利用する想定はないため高速開発 FW ではラップしていません。

:::
