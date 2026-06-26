# :memo: RaPanel

`RaPanel`コンポーネントで、パネルを表示できます。

## :white_check_mark: `<ra-panel>`の使用例

<code-preview>

```vue
<ra-panel title="検索条件">
	<div>フォーム部品等を配置</div>
	<div><el-button>ボタン</el-button></div>
</ra-panel>
```

</code-preview>

## :white_check_mark: プロパティ

| 属性        | 必須 | 説明                                                 | タイプ  | 選択可能な値 | デフォルト |
| ----------- | ---- | ---------------------------------------------------- | ------- | ------------ | ---------- |
| title       |      | パネルタイトルを指定、何も渡さない場合はタイトルなし | String  | -            | -          |
| title-right |      | true の場合パネルタイトルを右寄せにする              | Boolean | -            | false      |
| panel-class |      | パネルに追加で付与するクラスを指定                   | String  | -            | -          |

## :white_check_mark: スロット

| 名前 | 説明           |
| ---- | -------------- |
| -    | パネル内の要素 |

---

## :white_check_mark: プロパティ使用例

<code-preview>

```vue
<ra-panel title="検索条件" :title-right="true" panel-class="search-condition">
	フォーム部品等を配置
</ra-panel>
```

</code-preview>

:::warning

// TODO  
パネルの開く・閉じる機能を追加

1. パネル全体の開く・閉じる
2. 詳細検索条件の開く・閉じる

:::
