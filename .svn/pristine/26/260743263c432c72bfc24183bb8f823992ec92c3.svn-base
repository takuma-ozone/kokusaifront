# :bulb: ローカル開発時の stubJson を利用した API 通信モック

:::tip 開発前提の確認

:star: stubJson と通信しながらクライアントサイド（画面）を開発する際には、`npm scripts`から以下の 2 プロセスを起動します

1. `npm run express:watch`で [Express](https://expressjs.com/)サーバを起動する
2. Express サーバが起動したことが確認できたら、`npm run vue:serve`で [webpack-dev-server](https://github.com/webpack/webpack-dev-server)サーバを起動する

:::

## :white_check_mark: stubJson を利用した API 通信モックとは

- **クライアントサイドの開発時に API 通信をダミーで取得し画面表示させる**ことで、
  **API 通信部も含めてスムーズに開発するための仕組み**です

### :beginner: Getting Started

:link: [Mixins - HTTP モジュール](./../mixins/#http-http-モジュール) を参考に API 呼び出しを記述します。

:star: `NSISDP01D01.vue`

```js
methods: {
  searchResult() {
    // API通信
    this.$http.get('/service/general/NSISDP01B01').then(response => {
      const hasException = this.$handleException(response);

      if (!hasException) {
        this.bind.searchResult.searchResultList = response.data;
      }
    });
  }
}
```

次に、:file_folder: `webapp/express/stubJson/${subsys}`に URL に指定した`logicId`（例: `NSISDP01B01`）でフォルダを作成し、  
その中に`${logicId}-001.json`（例: `NSISDP01B01-001.json`）という JSON ファイルを作成します。

:star: `stubJson/NSISDP01B01/NSISDP01B01-001.json`

```json
[
  {
    "rowDenRrkNo": 1,
    "rowTorokuDate": "2019-06-07",
    "rowOtodCd": "000000000001",
    "rowOtodName1": "フューチャーアーキテクト株式会社",
    "rowOtodName2": "未来太郎",
    "rowOtodJyusyo1": "京都府京都市右京区",
    "rowOtodJyusyo2": "鳴滝和泉谷町",
    "rowOtodJyusyo3": "４ー１６－１３",
    "rowKosu": 532,
    "rowKyakuKanriNo": "",
    "rowToiNo": 430151864203,
    "rowMchakKbn": "元払",
    "rowCoolBin": "通常",
    "rowHaitasiYmd": "指定無し",
    "rowTimezoneSi": "指定無し",
    "rowTimeSi": "指定無し",
    "rowEgysyoUke": "可能性無し",
    "rowNisoName1": "",
    "rowNisoName2": "",
    "rowNisoButanNm": "急便太郎",
    "rowSealCd1": "",
    "rowSealCd2": "",
    "rowSealCd3": "",
    "rowSealCd4": "",
    "rowIraiName1": "出荷場A(A4金券付き)",
    "rowIraiName2": "出荷場名称２",
    "rowOkurijoShri": "",
    "rowEaddres": "",
    "rowKosinYmd": "2019-06-08",
    "rowSyuSijiMotoName": "",
    "rowSyuSijiNo": ""
  }
]
```

この状態でメソッドに紐づけたボタンを押下すると…

<img :src="$withBase('/rapidMockApi.gif')" alt="API Mock">

:tada: JSON ファイルが返されました！

### :star: API 通信モックの仕様

:::warning

WEB トータルサポートで使用されている`SensuJS`とは、
探しに行くファイル名などの仕様が異なるためご注意ください

:::

#### :file_folder: `webapp/express/scenarioConfig.js`

それぞれの API に対して、どのシナリオ ID の JSON ファイルを返却するかを定義したファイルです。  
定義は、`logicId: scenarioId`という構造で記述します。

```js
export default {
  NSISDP01B01: 1, // 0埋めは不要なので、Number型で定義してください
  NSISDP01B02: 2,
  ...
};
```

:::tip Express サーバの Reload

`npm run express:watch`でサーバ起動している場合は、  
関連する`js`や`json`が更新されたときに自動的に Express サーバをリロードします。

正しくリロードされているかどうかは、Express を起動している`console/terminal`の情報からご確認ください。

:::

:::warning

共通的な API モックは RtFA 接続の URL である `/service/general/` 配下のみを対象としています。  
これ以外の API モックを追加したい場合には Future 長町までご連絡ください。

:::
