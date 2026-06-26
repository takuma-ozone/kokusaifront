# :green_book: Validation Rules

[VeeValidate 標準ルール](https://baianat.github.io/vee-validate/guide/rules.html#validation-rules)と高速開発 FW 独自拡張ルールが利用できます。

:::warning

本ガイドでは`VeeValidate`標準ルールのうち、利用が予想されるものだけを記載しています。  
その他のルールは、[VeeValidate 標準ルール](https://baianat.github.io/vee-validate/guide/rules.html#validation-rules)をご参照ください。

:::

## :large_blue_diamond: Basic Rules

### :heavy_check_mark: `required`

要素が null でも空でもないかを検証します。

- [required](https://baianat.github.io/vee-validate/guide/rules.html#required)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="required_str"
  v-model="value"
  input-width="3"
  caption="REQUIRED"
  validate="required"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `length`

要素のサイズ（長さ）が指定範囲内にあるかを検証します。

- [length](https://baianat.github.io/vee-validate/guide/rules.html#length)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="length_str"
  v-model="value"
  input-width="3"
  caption="LENGTH"
  validate="length:2,4"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `min`

要素が`min`より長いことを検証します。

- [min](https://baianat.github.io/vee-validate/guide/rules.html#min)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="min_str"
  v-model="value"
  input-width="3"
  caption="MIN"
  validate="min:4"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `max`

要素が`max`より短いことを検証します。

- [max](https://baianat.github.io/vee-validate/guide/rules.html#max)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="max_str"
  v-model="value"
  input-width="3"
  caption="MAX"
  validate="max:4"
></rm-input>
```

</code-preview>

## :large_blue_diamond: Character Types Rules

### :heavy_check_mark: `half_width`

文字列が半角であることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="half_width_str"
  v-model="value"
  input-width="3"
  caption="HALF_WIDTH"
  validate="half_width"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `full_width`

文字列が全角であることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="full_width_str"
  v-model="value"
  input-width="3"
  caption="FULL_WIDTH"
  validate="full_width"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `half_kana`

文字列が半角ｶﾅであることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

| Paramater | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| ...args   | string[] | その他利用可能な文字グループ |

半角ｽﾍﾟｰｽを許容する場合は`args`に`HALF_SPACE`を指定します。

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="half_kana_str"
  v-model="value"
  input-width="3"
  caption="HALF_KANA"
  validate="half_kana:HALF_SPACE"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `full_kana`

文字列が全角カナであることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

| Paramater | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| ...args   | string[] | その他利用可能な文字グループ |

全角スペースを許容する場合は`args`に`FULL_SPACE`を指定します。

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="full_kana_str"
  v-model="value"
  input-width="3"
  caption="FULL_KANA"
  validate="full_kana:FULL_SPACE"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `half_kana_num`

文字列が半角ｶﾅ・数字であることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

| Paramater | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| ...args   | string[] | その他利用可能な文字グループ |

半角ｽﾍﾟｰｽを許容する場合は`args`に`HALF_SPACE`を指定します。

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="half_kana_num_str"
  v-model="value"
  input-width="3"
  caption="HALF_KANA_NUM"
  validate="half_kana_num:HALF_SPACE"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `full_kana_num`

文字列が全角カナ・数字であることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

| Paramater | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| ...args   | string[] | その他利用可能な文字グループ |

全角スペースを許容する場合は`args`に`FULL_SPACE`を指定します。

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="full_kana_num_str"
  v-model="value"
  input-width="3"
  caption="FULL_KANA_NUM"
  validate="full_kana_num:FULL_SPACE"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `full_hira`

文字列がひらがなであることを検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

| Paramater | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| ...args   | string[] | その他利用可能な文字グループ |

全角スペースを許容する場合は`args`に`FULL_SPACE`を指定します。

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="full_hira_str"
  v-model="value"
  input-width="3"
  caption="FULL_HIRA"
  validate="full_hira:FULL_SPACE"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `alpha`

文字列が半角英字であることを検証します。

- [alpha](https://baianat.github.io/vee-validate/guide/rules.html#alpha)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="alpha_str"
  v-model="value"
  input-width="3"
  caption="ALPHA"
  validate="alpha"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `alpha_num`

文字列が半角英数字であることを検証します。

- [alpha_num](https://baianat.github.io/vee-validate/guide/rules.html#alpha_num)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="alpha_num_str"
  v-model="value"
  input-width="3"
  caption="ALPHA_NUM"
  validate="alpha_num"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `numeric`

文字列が半角数字であることを検証します。

- [numeric](https://baianat.github.io/vee-validate/guide/rules.html#numeric)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="numeric_str"
  v-model="value"
  input-width="3"
  caption="NUMERIC"
  validate="numeric"
></rm-input>
```

</code-preview>

## :large_blue_diamond: String Format Rules

### :heavy_check_mark: `decimal`

値が小数点以下の桁数を持つかどうかを検証します。

- [decimal](https://baianat.github.io/vee-validate/guide/rules.html#decimal)

| Paramater | Type   | Description        |
| :-------- | :----- | :----------------- |
| dicimals  | number | 許容する小数点桁数 |

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="decimal_str"
  v-model="value"
  input-width="3"
  caption="DECIMAL"
  validate="decimal:3"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `email`

指定された文字列が有効なメールアドレスかどうかを検証します。

- [email](https://baianat.github.io/vee-validate/guide/rules.html#email)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="email_str"
  v-model="value"
  input-width="3"
  caption="EMAIL"
  validate="email"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `credit_card`

文字シーケンスが Luhn チェックサムテストに合格するかどうかを検証します。

- [credit_card](https://baianat.github.io/vee-validate/guide/rules.html#credit_card)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="credit_card_str"
  v-model="value"
  input-width="3"
  caption="CREDIT_CARD"
  validate="credit_card"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `url`

文字シーケンスが有効な URL かどうかを検証します。

- [url](https://baianat.github.io/vee-validate/guide/rules.html#url)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="url_str"
  v-model="value"
  input-width="3"
  caption="URL_CHECK"
  validate="url"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `amount`

:::warning
TODO: 後で作成予定
:::

### :heavy_check_mark: `ip`

文字列が IP として正しいかどうか検証します。

- [ip](https://baianat.github.io/vee-validate/guide/rules.html#ip)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="ip_str"
  v-model="value"
  input-width="3"
  caption="IP_CHECK"
  validate="ip"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `tel`

文字列が電話・FAX 番号（日本国内）として正しいかどうか検証します。

| Paramater | Type   | Description                                    |
| :-------- | :----- | :--------------------------------------------- |
| type      | string | 携帯電話か固定電話か（デフォルトは両方を許容） |

携帯電話のみを許容する場合は`type`に`KEITAI`を指定します。
固定電話のみを許容する場合は`type`に`KOTEI`を指定します。

:::tip
高速開発 FW のオリジナルルールです。
:::

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="tel_str"
  v-model="value"
  input-width="3"
  caption="TEL_CHECK"
  validate="tel:KEITAI"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `zipcode`

文字列が郵便番号として正しいかどうか検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="zipcode_str"
  v-model="value"
  input-width="3"
  caption="ZIPCODE"
  validate="zipcode"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `regex`

文字列が正規表現と一致するかどうかを検証します。

- [regex](https://baianat.github.io/vee-validate/guide/rules.html#regex)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="regex_str"
  v-model="value"
  input-width="3"
  caption="REGEX"
  validate="regex:^([A-Z]*)$"
></rm-input>
```

</code-preview>

## :large_blue_diamond: Number Validation Rules

### :heavy_check_mark: `max_value`

値が指定された最大値よりも小さいかどうかを検証します。

- [max_value](https://baianat.github.io/vee-validate/guide/rules.html#max-value)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="max_value_str"
  v-model="value"
  input-width="3"
  caption="MAX_VALUE"
  validate="max_value:4"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `min_value`

値が指定された最大値よりも小さいかどうかを検証します。

- [min_value](https://baianat.github.io/vee-validate/guide/rules.html#min-value)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="min_value_str"
  v-model="value"
  input-width="3"
  caption="MIN_VALUE"
  validate="min_value:6"
></rm-input>
```

</code-preview>

### :heavy_check_mark: `between`

値の大きさが、指定された最小値と最大値の間にあるかどうかを検証します。

- [between](https://baianat.github.io/vee-validate/guide/rules.html#between)

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="between_str"
  v-model="value"
  input-width="3"
  caption="BETWEEN"
  validate="between:2,6"
></rm-input>
```

</code-preview>

## :large_blue_diamond: Date Validation Rules

### :heavy_check_mark: `date_format`

文字列が指定した日時フォーマットかどうか検証します。

- [date_format](https://baianat.github.io/vee-validate/guide/rules.html#date_format)

:::tip

他の Date Validation Rule を利用する際は、`date_format`をセットで設定してください。

:::

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="date_format_str"
  v-model="value"
  input-width="3"
  caption="DATE_FORMAT"
  validate="date_format:yyyy/MM/dd"
></rm-input>
```

</code-preview>

<code-preview :data="{value:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="date_format_str"
  v-model="value"
  input-width="3"
  caption="DATE_FORMAT"
  validate="date_format:yyyy/MM/dd"
></rm-date-picker>
```

</code-preview>

### :heavy_check_mark: `after`

日付が比較対象よりも未来かどうかを検証します。

- [after](https://baianat.github.io/vee-validate/guide/rules.html#after)

:::warning 他の DatePicker と比較する場合

[こちらのルール](#correlation-rules):link:をご覧ください。

:::

<code-preview :data="{value:'', beforeDay: '2019/09/10'}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="after_str"
  v-model="value"
  input-width="3"
  caption="AFTER"
  :validate="{ after: beforeDay, date_format: 'yyyy/MM/dd' }"
>
</rm-date-picker>
```

</code-preview>

```js
export default {
  data() {
    return { beforeDay: '2019/09/10' };
  },
};
```

◆ 指定日付を含む場合には第 2 引数に`true`を指定します:

<code-preview :data="{value:'', beforeDay: '2019/09/10'}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="after_str"
  v-model="value"
  input-width="3"
  caption="AFTER"
  :validate="{ after: [beforeDay, true], date_format: 'yyyy/MM/dd' }"
>
</rm-date-picker>
```

</code-preview>

```js
export default {
  data() {
    return { beforeDay: '2019/09/10' };
  },
};
```

### :heavy_check_mark: `before`

日付が比較対象よりも過去かどうかを検証します。

- [before](https://baianat.github.io/vee-validate/guide/rules.html#before)

:::warning 他の DatePicker と比較する場合

[こちらのルール](#correlation-rules):link:をご覧ください。

:::

<code-preview :data="{value:'', afterDay: '2019/09/10'}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="before_str"
  v-model="value"
  input-width="3"
  caption="BEFORE"
  :validate="{ before: afterDay, date_format: 'yyyy/MM/dd' }"
>
</rm-date-picker>
```

</code-preview>

```js
export default {
  data() {
    return { afterDay: '2019/09/10' };
  },
};
```

◆ 指定日付を含む場合には第 2 引数に`true`を指定します:

<code-preview :data="{value:'', afterDay: '2019/09/10'}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="before_str"
  v-model="value"
  input-width="3"
  caption="BEFORE"
  :validate="{ before: [afterDay, true], date_format: 'yyyy/MM/dd' }"
>
</rm-date-picker>
```

</code-preview>

```js
export default {
  data() {
    return { beforeDay: '2019/09/10' };
  },
};
```

### :heavy_check_mark: `date_between`

指定日時範囲内かどうか検証します。

- [date_between](https://baianat.github.io/vee-validate/guide/rules.html#date_between)

<code-preview :data="{value:'', beforeDay: '2019/01/10', afterDay: '2019/10/10'}">

```vue
<ro-message-guide></ro-message-guide>

<rm-date-picker
  com-id="date_between_str"
  v-model="value"
  input-width="3"
  caption="DATE_BETWEEN"
  :validate="{ date_between: [beforeDay, afterDay], date_format: 'yyyy/MM/dd' }"
>
</rm-date-picker>
```

</code-preview>

```js
export default {
  data() {
    return { beforeDay: '2019/01/10', afterDay: '2019/10/10' };
  },
};
```

## :large_blue_diamond: Correlation Rules

:::warning 他の入力フォームとの相関チェック記述方法

`VeeValidate`を用いて他の入力フォームとの相関チェックを行う場合、  
[ref](https://jp.vuejs.org/v2/api/index.html#ref)を用いてコンポーネントに名前を付け、その値を参照します。

`ref`を用いて相関チェックを行う場合、コンポーネント側でラップした`validate`属性では正常に動作しないため、アプリ開発時に以下の対応を行う必要があります。

1. `VeeValidate`標準の`v-validate`属性を用いる  
   :warning:ダブルクォートの中にシングルクォートが入るため注意
2. エラーメッセージを適切に表示するため、比較するフォーム部品それぞれに`data-vv-as`を指定する

:::

### :heavy_check_mark: `required_any`

指定した項目のいずれかが入力されているかどうか検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

<code-preview :data="{value1:'', value2:''}">

```vue
<ro-message-guide></ro-message-guide>

<!-- 1.refを用いる場合は`v-validate`属性 -->
<!-- 2.`data-vv-as` / 3.`data-vv-delay`も指定 -->
<!-- その他のルールは`validate`属性で指定 -->
<rm-input
  com-id="keitai_str"
  v-model="value1"
  caption="携帯電話"
  v-validate="'required_any:kotei'"
  validate="tel:KEITAI"
  data-vv-as="携帯電話"
  name="required_any"
></rm-input>

<rm-input
  com-id="kotei_str"
  v-model="value2"
  caption="固定電話"
  ref="kotei"
  data-vv-as="固定電話"
  validate="tel:KOTEI"
></rm-input>

<ra-button @click="$validator.validateAll()">Validate!</ra-button>
```

</code-preview>

### :heavy_check_mark: `required_all`

指定した項目の全てが入力されているかどうか検証します。

:::tip
高速開発 FW のオリジナルルールです。
:::

<code-preview :data="{value1:'', value2:''}">

```vue
<ro-message-guide></ro-message-guide>

<rm-input
  com-id="keitai_str"
  v-model="value1"
  caption="携帯電話"
  v-validate="'required_all:kotei'"
  validate="tel:KEITAI"
  data-vv-as="携帯電話"
  name="required_all"
></rm-input>

<rm-input
  com-id="kotei_str"
  v-model="value2"
  caption="固定電話"
  ref="kotei"
  data-vv-as="固定電話"
  validate="tel:KOTEI"
></rm-input>

<ra-button @click="$validator.validateAll()">Validate!</ra-button>
```

</code-preview>

:::warning

`required-any` / `required-all`は現状 2 項目での相関チェックのみサポートしています。  
3 項目間での相関チェックが発生した場合は、バリデーション定義の新規作成となるため Future 長町までご連絡ください。

:::
