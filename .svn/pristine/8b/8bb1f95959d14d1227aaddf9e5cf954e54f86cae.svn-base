# :memo: RoFooter

`RoFooter`コンポーネントで、フッターを表示できます。

## :white_check_mark: `<ro-footer>`の使用例

<code-preview>

```vue
<ro-footer
  esc-caption="戻る"
  @esc="clickEsc"
  f1-caption="メニューへ"
  @f1="clickF1"
  f11-caption="印刷ﾌﾟﾚﾋﾞｭｰ"
  @f11="clickF11"
  f12-caption="印刷"
  @f12="clickF12"
  f12-primary
  :f12-disabled="true"
></ro-footer>
```

</code-preview>

## :white_check_mark: プロパティ

ここでは例として、`esc`ボタンのプロパティのみを説明します。  
`esc`の部分を`f1`~`f12`に変更することで、各キーについて設定することが可能です。

| 属性         | 必須 | 説明                                                                                                | タイプ  | 選択可能な値 | デフォルト |
| ------------ | ---- | --------------------------------------------------------------------------------------------------- | ------- | ------------ | ---------- |
| esc-caption  |      | フッターの esc キーにキャプションを追加。キャプションが渡されない場合、非活性でグレーアウトされる。 | String  | -            | -          |
| esc-disabled |      | true の場合、esc キーを非活性とする                                                                 | Boolean | -            | false      |
| esc-primary  |      | true の場合、esc キーをオレンジ色にする                                                             | Boolean | -            | false      |

## :white_check_mark: イベント

ここでは例として、`esc`ボタンのプロパティのみを説明します。  
`esc`の部分を`f1`~`f12`に変更することで、各キーについて設定することが可能です。

| イベント名 | 説明                     | パラメータ     |
| ---------- | ------------------------ | -------------- |
| esc        | esc ボタンクリックで発火 | (event: Event) |

## :white_check_mark: その他

RoFooter では共通で Function キーへのイベント登録を実施しています。  
そのため、アプリ実装時にはキーコードとの紐付けを行う必要はありません。

:::warning

イベント紐付けは未完成

:::
