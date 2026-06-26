# :bulb: `tabindex`の実装方針

:::danger

従来の SGH-P / SensuJS とは実装の考え方が異なるためご注意ください

:::

## :white_check_mark: 概要

- 従来の SGH-P では HTML の全要素で `tabindex` を明示的に指定していました

:star: SensuJS の例

```html{8}
<!-- 支店 -->
<div
  data-urushi-type="ComCodeBtName"
  id="siten"
  labelCaption="${siten}"
  textKey="sitenCd"
  nameKey="sitenNm"
  tabindex="1"
/>
```

- しかし、ユーザー操作の混乱を招くため、[**1 以上の（整数の）tabindex を指定することはアンチパターン**](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/tabindex)とされており、  
  高速開発 FW で採用している [Element UI](https://element.eleme.io/#/en-US) でも `tabindex` をサポートしないコンポーネントが存在します  
  (例えば、ラジオボタンやチェックボックスなど)

- :star: 上記を踏まえ、**高速開発 FW の実装では 1 以上の `tabindex` は指定せず、HTML の記述順によってタブ順を制御するようにしてください**  
  ※「要素にフォーカスを当てたくない」という場合に `tabindex="-1"` を指定するのは OK です

:::tip tabindex 基本ルール

- 1 以上の `tabindex` は指定せず、HTML の記述順によってタブ順を制御する
- タブ順の進み方は、**Z 方向**を基本とする
- 設計書のタブ順は削除せず、UT で想定通りの順序になっているかをテストするために使用する

:::

:::warning 例外パターンへの対応

実装の中で `tabindex` を明示的に指定しなければならないパターンがある場合は、  
例外的な対応を検討するので、Future までお問い合わせください。

:::
