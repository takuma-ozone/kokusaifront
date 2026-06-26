# :memo: VxeTable

`VxeTable`コンポーネントで、テーブルを表示できます  
`VxeTable`の機能は多岐にわたるため、ここでは基本的な利用方法について説明します

プロパティの詳細については、以下の URL をご参照ください。

> [VxeTable](https://xuliangzhan.github.io/vxe-table/#/table/start/install)

:::warning ガイドの Style 崩れ

ガイド上ではテーブルのスタイルが崩れていますが、  
アプリ開発時には同じコードで問題なく表示されます

:::

## :white_check_mark: `<vxe-table>`の使用例

<code-preview :data="{ tableData: [
      { name: '佐藤', sex: '男性', age: 40 },
      { name: '田中', sex: '女性', age: 25 },
      { name: '山田', sex: '男性', age: 60 },
    ] }">

```vue
<vxe-table :data="tableData">
  <vxe-table-column type="index" width="60"></vxe-table-column>
  <vxe-table-column field="name" title="名前"></vxe-table-column>
  <vxe-table-column field="sex" title="性別"></vxe-table-column>
  <vxe-table-column field="age" title="年齢"></vxe-table-column>
</vxe-table>
```

```js
data() {
  return {
    tableData: [
      { name: '佐藤', sex: '男性', age: 40 },
      { name: '田中', sex: '女性', age: 25 },
      { name: '山田', sex: '男性', age: 60 },
    ],
  };
},
```

</code-preview>

## :white_check_mark: `VxeTable`のグローバル設定

`VxeTable`では、様々なグローバルオプションが用意されています  
高速開発 FW では、`src/sdk/rVxeTable.js`にてグローバル設定を行っています

ここでは、主な設定項目についてソースをもとに説明します

```js
VXETable.setup({
  size: 'mini', // sizeを'mini'に設定
  showOverflow: true, // コンテンツが複数行になった場合にtooltipを表示する
  headerAlign: 'center', // ヘッダーを中央寄せ
  stripe: true, // 行の交互に色を付ける
  border: true, // テーブルの枠線を表示
  resizable: true, // 列の横幅サイズを変更可能とする
  highlightHoverRow: true, // マウスカーソルを当てた行に色を付ける
  toolbar: {
    resizable: {
      storage: true, // サイズ変更をlocalStorageに保存する
    },
  },
});
```

## :white_check_mark: 主なプロパティ

### [テーブル No.](https://xuliangzhan.github.io/vxe-table/#/table/base/index)

`<vxe-table-column`に`type="index"`を与えることで、テーブル No.を表示できます

```html
<vxe-table :data="tableData">
  <vxe-table-column type="index" width="60"></vxe-table-column>
  ...
</vxe-table>
```

### [テーブル内 Radio](https://xuliangzhan.github.io/vxe-table/#/table/base/radio)

`<vxe-table-column>`に`type="radio"`を与えることで、テーブル内にラジオを表示できます  
ユーザーが手動でラジオを選択すると、`radio-change`イベントが発火します

```html
<vxe-table ref="xTable1" :data="tableData" @radio-change="radioChangeEvent">
  <vxe-table-column type="radio" width="60">
    <!-- radioのヘッダーにボタンを追加 -->
    <template v-slot:header>
      <vxe-button type="text" @click="clearRadioRowEvent" :disabled="!selectRow">クリア</vxe-button>
    </template>
  </vxe-table-column>
  ...
</vxe-table>
```

```js
data() {
  return {
    tableData: [],
    selectRow: null
  }
},
methods: {
  radioChangeEvent ({ row }) {
    // 選ばれたラジオをモデルにセットする
    this.selectRow = row
  },
  clearRadioRowEvent () {
    // 取消ボタンが押されたら、ラジオの選択を解除する
    this.selectRow = null
    this.$refs.xTable1.clearRadioRow()
  },
}
```

#### Methods

- `this.$refs.xTable1.setRadioRow(tableData[1])`: 指定した行のラジオを選択する
- `this.$refs.xTable1.getRadioRow()`: 選択されているラジオの情報を取得する
- `this.$refs.xTable1.clearRadioRow()`: ラジオをクリアする

#### Options

デフォルトで選択されるラジオを指定する場合は、`radio-config`に`checkRowKey`を渡します  
また、`row-id`も併せて指定する必要があります

```html
<vxe-table row-id="id" :data="tableData" :radio-config="{checkRowKey: '2'}">
  <vxe-table-column type="radio" width="60"></vxe-table-column>
  ...
</vxe-table>
```

ラジオが選択された行に色を付けるには、`highlight-current-row`と`radio-config`を以下のように指定します

```html
<vxe-table :data="tableData" highlight-current-row :radio-config="{trigger: 'row'}">
  <vxe-table-column type="radio" width="60"></vxe-table-column>
  ...
</vxe-table>
```

### [テーブル内 Checkbox](https://xuliangzhan.github.io/vxe-table/#/table/base/checkbox)

`<vxe-table-column>`に`type="checkbox"`を与えることで、テーブル内にチェックボックスを表示できます  
ユーザーが手動でチェックボックスを選択すると、`select-change`イベントが発火します  
また、ヘッダーの全件選択を行うと、`select-all`イベントが発火します

```html
<vxe-table
  ref="xTable1"
  :data="tableData"
  @select-all="selectAllEvent"
  @select-change="selectChangeEvent"
>
  <vxe-table-column type="checkbox" width="60"></vxe-table-column>
  ...
</vxe-table>

<el-button @click="getSelectEvent">チェックされている行を取得</el-button>
```

```js
data () {
  return {
    tableData: []
  }
},
methods: {
  selectAllEvent ({ checked }) {
    console.log(checked ? '全件✔' : '全件取消')
  },
  selectChangeEvent ({ checked, row }) {
    console.log(checked ? '単体✔' : '単体取消')
  },
  getSelectEvent () {
    // チェックされている行を取得する
    let updateRecords = this.$refs.xTable1.getSelectRecords()
    this.$alert(updateRecords.length)
  }
}
```

#### Methods

- `this.$refs.xTable1.toggleRowSelection(tableData[1])`: 指定した行のチェックボックスを反転する
- `this.$refs.xTable1.setSelection([tableData[2], tableData[3]], true)`: 指定したチェックボックスを選択する
- `this.$refs.xTable1.setAllSelection(true)`: 全てのチェックボックスを選択する
- `this.$refs.xTable1.clearSelection()`: 全てのチェックボックスを選択解除する
- `this.$refs.xTable1.getSelectRecords()`: 選択されているチェックボックスの情報を取得する

#### Options

デフォルトで選択されるチェックボックスを指定する場合は、`select-config`に`checkRowKeys`を渡します  
また、`row-id`も併せて指定する必要があります

```html
<vxe-table row-id="id" :data="tableData" :select-config="{checkRowKeys: ['2', '3']}">
  <vxe-table-column type="checkbox" width="60"></vxe-table-column>
  ...
</vxe-table>
```

チェックボックスが選択された行に色を付けるには、`highlight-current-row`と`select-config`を以下のように指定します

```html
<vxe-table :data="tableData" highlight-current-row :select-config="{trigger: 'row'}">
  <vxe-table-column type="checkbox" width="60"></vxe-table-column>
  ...
</vxe-table>
```

### [列の固定](https://xuliangzhan.github.io/vxe-table/#/table/base/fixed)

`fixed`プロパティを用いることで、列の固定をすることができます。  
左固定の時は`fixed="left"`、右固定の時は`fixed="right"`

```html
<vxe-table :data="tableData">
  <vxe-table-column type="index" width="60" fixed="left"></vxe-table-column>
  ...
  <vxe-table-column field="address" title="Address" fixed="right" width="300"></vxe-table-column>
</vxe-table>
```

### [列のソート](https://xuliangzhan.github.io/vxe-table/#/table/base/sort)

`sortable`プロパティを用いることで、並び替えを実現できます  
複数フィールドの組み合わせによる並び替えは`sort-by`で行うことができます

```html
<vxe-table :data="tableData">
  <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
  <vxe-table-column field="age" title="Age" sortable :sort-by="['age', 'name']"></vxe-table-column>
  ...
</vxe-table>
```

#### Options - 詳細は[こちら](https://xuliangzhan.github.io/vxe-table/#/table/base/sort)を参照してください

- ソートを関数で定義したい場合には`sort-method`が利用できます
- セルクリックでソートしたい場合は、`sort-config`に`"{trigger: 'cell'}"`を指定します

### [Rowspan / Colspan](https://xuliangzhan.github.io/vxe-table/#/table/advanced/span)

`span-method`を利用することで、多段の一覧を作成することができます

```html
<vxe-table :span-method="colspanMethod" :data="tableData">
  <vxe-table-column type="index" width="60"></vxe-table-column>
  <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
  ...
</vxe-table>
```

```js
methods: {
  colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
    if (rowIndex % 2 === 0) {
      if (columnIndex === 2) {
        return {
          rowspan: 1,
          colspan: 2
        }
      } else if (columnIndex === 3) {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    }
  }
}
```

<!-- TODO: Element Pagerのリンクへ -->

### [ページング]()

`<vxe-table>`のページングを行う場合は、Element UI をベースにした`ra-paging`を利用します

```html
<!-- テーブルで表示するデータにdispDataを指定 -->
<vxe-table ref="xTable" :data="dispData" height="300">
  <vxe-table-column field="name" title="名前" width="200"></vxe-table-column>
  <vxe-table-column field="sex" title="性別" width="100"></vxe-table-column>
  ...
</vxe-table>

<ra-pagination
  :total="total"
  :page-size="tablePage.pageSize"
  @current-change="handlePaging"
  small
></ra-pagination>
```

```js
export default {
  ...

  data() {
    return {
      tableData: tableData,
      tablePage: { // ページング情報を持つ
        currentPage: 1,
        pageSize: 50
      }
    }
  },

  computed: {
    total() { // テーブル行数を算出してページャーにセット
      return this.tableData.length;
    },
    dispData() { // 表示するデータを算出
      return tableData.slice(
        (this.tablePage.currentPage - 1) * this.tablePage.pageSize,
        this.tablePage.currentPage * this.tablePage.pageSize
      );
    }
	},

	methods: {
		handlePaging(current) { // ページングが変更されたらcurrentPageを更新してdispDataを再計算
      this.tableData.currentPage = current;
    },
	}
}
```

### [toolbar](https://xuliangzhan.github.io/vxe-table/#/table/advanced/toolbar)

`<vxe-toolbar>`を用いることで、表示列のユーザー指定や列幅の可変などの機能を簡単に実装できます  
`<vxe-toolbar>`は`<vxe-table>`と隣接させる必要があります

<code-preview :data="{ tableData: [
      { name: '佐藤', sex: '男性', age: 40 },
      { name: '田中', sex: '女性', age: 25 },
      { name: '山田', sex: '男性', age: 60 },
    ] }">

```vue
<vxe-toolbar id="toolBar" setting resizable></vxe-toolbar>

<vxe-table :data="tableData">
  <vxe-table-column type="index" width="60"></vxe-table-column>
  <vxe-table-column field="name" title="名前"></vxe-table-column>
  <vxe-table-column field="sex" title="性別"></vxe-table-column>
  <vxe-table-column field="age" title="年齢"></vxe-table-column>
</vxe-table>
```

</code-preview>

#### Options

- `<vxe-toolbar>`についてより詳細な情報が知りたい場合は、  
  [vxe-toolbar API Reference](https://xuliangzhan.github.io/vxe-table/#/toolbar/api)が参考になります

## :white_check_mark: [Events](https://xuliangzhan.github.io/vxe-table/#/table/advanced/event)

- 上記 URL を参考にして下さい
- より詳細な情報が知りたい場合は、[API Reference](https://xuliangzhan.github.io/vxe-table/#/table/api)が参考になります

## :white_check_mark: [Slot](https://xuliangzhan.github.io/vxe-table/#/table/advanced/template)

- 上記 URL を参考にして下さい
- より詳細な情報が知りたい場合は、[API Reference](https://xuliangzhan.github.io/vxe-table/#/table/api)が参考になります

---

## :white_check_mark: その他のプロパティ

### [ヘッダーのグルーピング](https://xuliangzhan.github.io/vxe-table/#/table/base/group)

`vxe-table-column`を入れ子にすることでヘッダーのグルーピングを実現できます

```html
<vxe-table :data="tableData">
  <vxe-table-column title="基本情報">
    <vxe-table-column type="index" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
  </vxe-table-column>
  ...
  <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
</vxe-table>
```
