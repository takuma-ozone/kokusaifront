# :green_book: Validations

[VeeValidate](https://baianat.github.io/vee-validate/)のバリデーターと、高速開発 FW 独自に追加したバリデーターが各コンポーネントで利用できます。

:::danger VeeValidate のバージョン

高速開発 FW で使用している VeeValidate は `version 2.x` です。  
`version 3.x`では記述方法が変わっているためご注意下さい。

:::

高速開発 FW 独自の追加バリデーターは、主に全角チェックなど日本語系のチェックが実装されています。

## バリデーションルールの利用方法

定義されたルールは`VeeValidate`の標準的なルールでは、`v-validate`属性（ディレクティブ）に指定することでバリデーションを行うことができます。

ただし、インプットやデートピッカーなど、一般的なフォーム部品はラベルと一緒に用いられることが多いことからこの機能をラップしており、[RmInput](./../components/RmInput) や [RmDatePicker](./../components/RmDatePicker) などの部品では`validate`属性にルールを指定します。

:::tip Rm 〇〇において、バリデーション関連で実施していること

- `comId`に指定した値をフォーム部品の`name`にもセットして、  
  この`name`を持つコンポーネントがエラーの場合、フィールドを赤くする`class`を付与する
- `caption`に指定した文字列を、`data-vv-as`にもセットして、  
  エラーメッセージ表示時に自動的にラベルと同じ文字列が表示されるようにする

:::

<code-preview :data="{email:''}">

```vue
<!-- エラーメッセージ表示コンポーネント -->
<ro-message-guide></ro-message-guide>

<!-- エラーの指定 -->
<rm-input
  com-id="email"
  v-model="email"
  caption="メールアドレス"
  input-width="3"
  validate="email"
></rm-input>
```

</code-preview>

◆ 複数のルールを指定したい場合は`|`で区切ってください

```html
validate="required|alpha"
```

## 利用可能なバリデーションルール一覧

[こちらのページ](./availableRules.html)をご参照ください。

## 利用可能な API

[VeeValidate](https://baianat.github.io/vee-validate/)の API が利用できます。
詳しくは、[VeeValidate - Validator API](https://baianat.github.io/vee-validate/api/)を参照してください。
