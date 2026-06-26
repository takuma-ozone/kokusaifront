# :green_book: 高速開発 FW - API ガイドについて

## このガイドで説明すること

- 本ガイドでは、高速開発 FW を使って PG/UT を行うための情報を提供します。

### 1. [UI Components Showcase](./../frontend/components/)

- UI コンポーネントのショーケースを提供します。
- 各コンポーネントの記述例・プロパティ一覧などをまとめています。

::: tip Component Showcase

コンポーネントショーケースでは、コードと見た目の両方が確認できます。

<code-preview :data="{value:''}">

```vue
<rm-input com-id="demo1" v-model="value" caption="DEMO">
</rm-input>
```

</code-preview>

:::

---

### 2. [Mixins](./../frontend/mixins/)

- 高速開発 FW の 共通メソッド仕様について説明します。
- クライアントサイドの共通機能は [Vue.js - ミックスイン](https://jp.vuejs.org/v2/guide/mixins.html) として定義されています。

---

### 3. [Validations](./../frontend/validations/)

- 高速開発 FW では、[VeeValidate](https://baianat.github.io/vee-validate/)というライブラリを用いてバリデーションを行います。
- これにより、リアルタイムバリデーションを簡単に実装することができます。

::: tip Validation Sample

バリデーションガイドでは、コードと結果の両方が確認できます。

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

:::

---

### 4. [Filters](./../frontend/filters/)

- [Vue.js - フィルター](https://jp.vuejs.org/v2/guide/filters.html) とは画面に表示する項目を編集する機能です。
- 例えば、「日付にスラッシュを入れる」・「金額にカンマを入れる」などが Filter にあたります。
