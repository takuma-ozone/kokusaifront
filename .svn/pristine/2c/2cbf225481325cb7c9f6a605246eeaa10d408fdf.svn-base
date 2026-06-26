# :green_book: 高速開発 FW - API ガイド

高速開発 FW 独自の[ミックスイン](https://jp.vuejs.org/v2/guide/mixins.html)が利用できます。

ミックスインは、Vue コンポーネントの `this` に組み込まれ、  
`this.[$モジュール].[メソッド]`といった形式で呼び出すことができます。

---

## :large_blue_diamond: \$http - HTTP モジュール

:::tip RtFA の BL 通信する場合の URL

RtFA の BL に通信する場合、各メソッドの URL は `/service/general/${logicId}` としてください。  
**\${logicId}** が `subject-mapping.properties` の **REST ロジック ID** となります。

また、RtFA 通信するときは送信した DTO を JSON に変換するため、 **原則 POST 通信** です。

記載方法は以下のサンプルコードをご参照ください。

:::

:::tip BL エラーメッセージの表示を行う Util 関数

BL から返却された `response` を[\$handleException()](#handleexception-response)の引数に入れることで、  
BL から `throw` されたエラーが存在する場合に、自動的にアラート表示します。

`$handleException()`は返り値として Boolean 型の`hasException`を返すので、  
アプリではその値で条件分岐して後続の処理を記載して下さい。

:::

:::warning ローディング画面の自動挿し込み

`$http`モジュールのメソッドを利用すると、自動的にローディング画面が挿し込まれます。  
ローディング画面を非表示にしたい場合は、`config`オブジェクトに`loading: false`を渡してください。

:::

### :white_check_mark:\$http.get(url, config)

::: warning

RtFA と接続する場合、通常、アプリケーションから利用することはありません。

:::

GET リクエストを送信します

| Paramater | Required | Description                    | Further Reading                                       |
| --------- | :------: | ------------------------------ | ----------------------------------------------------- |
| url       |   :o:    | URL を指定します。             | [axios API](https://github.com/axios/axios#axios-api) |
| config    |          | 設定オブジェクトを指定します。 | [axios API](https://github.com/axios/axios#axios-api) |

#### Example of \$http.get

```js
methods: {
  httpDemo() {
    this.$http
      .get('/service/general/otameshi')
      .then(response => {
        const hasException = this.$handleException(response);

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理があれば書く
          console.log(`NG`);
        }
      })
  }
}
```

### :white_check_mark:\$http.post(url, data, config)

POST リクエストを送信します

| Paramater | Required | Description                    | Further Reading                                       |
| --------- | :------: | ------------------------------ | ----------------------------------------------------- |
| url       |   :o:    | URL を指定します。             | [axios API](https://github.com/axios/axios#axios-api) |
| data      |   :o:    | 送信データを指定します。       | [axios API](https://github.com/axios/axios#axios-api) |
| config    |          | 設定オブジェクトを指定します。 | [axios API](https://github.com/axios/axios#axios-api) |

#### Example of \$http.post

```js
methods: {
  httpDemo() {
    const postData = this.input1;

    this.$http
      .post('/service/general/otameshi', postData)
      .then(response => {
        const hasException = this.$handleException(response);

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理があれば書く
          console.log(`NG`);
        }
      })
  }
}
```

<!--
### :white_check_mark:\$http.patch(url, data, config)

PATCH リクエストを送信します

| Paramater | Required | Description                    | Further Reading                                       |
| --------- | :------: | ------------------------------ | ----------------------------------------------------- |
| url       |   :o:    | URL を指定します。             | [axios API](https://github.com/axios/axios#axios-api) |
| data      |   :o:    | 送信データを指定します。       | [axios API](https://github.com/axios/axios#axios-api) |
| config    |          | 設定オブジェクトを指定します。 | [axios API](https://github.com/axios/axios#axios-api) |

#### Example of \$http.patch

```js
methods: {
  httpDemo() {
    const patchData = this.input1;

    this.$http
      .delete('/service/general/otameshi', patchData)
      .then(response => {
        const hasException = this.$handleException(response);

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理があれば書く
          console.log(`NG`);
        }
      })
  }
}
```
-->

<!--
### :white_check_mark:\$http.delete(url, data, config)

DELETE リクエストを送信します

| Paramater | Required | Description                    | Further Reading                                       |
| --------- | :------: | ------------------------------ | ----------------------------------------------------- |
| url       |   :o:    | URL を指定します。             | [axios API](https://github.com/axios/axios#axios-api) |
| data      |   :o:    | 送信データを指定します。       | [axios API](https://github.com/axios/axios#axios-api) |
| config    |          | 設定オブジェクトを指定します。 | [axios API](https://github.com/axios/axios#axios-api) |

#### Example of \$http.delete

```js
methods: {
  httpDemo() {
    const deleteData = this.input1;

    this.$http
      .delete('/service/general/logout', deleteData)
      .then(response => {
        const hasException = this.$handleException(response);

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理があれば書く
          console.log(`NG`);
        }
      })
  }
}
```
-->

### :white_check_mark:\$http.download(url, data, config)

ファイルダウンロードのリクエストを送信します  
フォーマットが`CSV`の場合は、[\$http.outputFile](#http-outputfile-resource-sql-property-condition)が便利です。

:::tip ファイルをダウンロードする場合の URL

ファイルをダウンロードする場合、各メソッドの URL は `/service/download/${logicId}` としてください。  
**\${logicId}** が `subject-mapping.properties` の **REST ロジック ID** となります。

記載方法は以下のサンプルコードをご参照ください。

:::

| Paramater | Required | Description                    | Further Reading                                       |
| --------- | :------: | ------------------------------ | ----------------------------------------------------- |
| url       |   :o:    | URL を指定します。             | [axios API](https://github.com/axios/axios#axios-api) |
| data      |   :o:    | 送信データを指定します。       | [axios API](https://github.com/axios/axios#axios-api) |
| config    |          | 設定オブジェクトを指定します。 | [axios API](https://github.com/axios/axios#axios-api) |

#### Example of \$http.download

```js
methods: {
  httpDemo() {
    this.$http
      .download('/service/download/otameshi', {
        fileNm: 'sample', // 送信dataは受け取るBL次第
        ...
      })
      .then(response => {
        const hasException = this.$handleException(response);

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理があれば書く
          console.log(`NG`);
        }
      });
  }
}
```

### :white_check_mark:\$http.outputFile(resource, property)

プロパティに定義されている内容をもとにファイルを作成し、その結果をダウンロードします。  
outputFile のフォーマットは `CSV` に対応しています。

| Paramater | Required | Description                                                              | Further Reading |
| --------- | :------: | ------------------------------------------------------------------------ | --------------- |
| resource  |   :o:    | アクセス先 URL を指定します。<br>`outputCsv` CSV 出力                    | -               |
| property  |   :o:    | CSV 出力に関するプロパティを指定<br>プロパティに指定できる項目は下記参照 | -               |

:bulb: `Property`に指定できる属性一覧（CSV 出力）

| Paramater        | Required | Description                                                                        |
| ---------------- | :------: | ---------------------------------------------------------------------------------- |
| downloadFileName |   :o:    | 出力ファイル名を指定します。                                                       |
| sqlId            |   :o:    | データを取得する sql ファイルの ID を指定します。                                  |
| hasHeader        |          | デフォルトは`true`（ヘッダー有）<br>ヘッダーを付けない場合、`false`を指定します    |
| columnStrings    |          | 出力項目名を配列で指定します。<br>定義しない場合、取得したデータ全てを出力します。 |
| headerStrings    |          | ヘッダー項目名を配列で指定します。<br>`hasHeader`が`true`の時のみ有効です。        |
| bindParamNames   |          | 検索条件にバインドする項目名を配列で指定します。                                   |
| bindParamValues  |          | 検索条件にバインドする値を配列で指定します。                                       |

:::tip 出力項目(columnStrings) と ヘッダー項目名(headerStrings) の関係性

| columnStrings | headerStrings | 出力内容                                                                                 |
| :-----------: | :-----------: | ---------------------------------------------------------------------------------------- |
|      :o:      |      :o:      | `columnStrings`に指定された項目のみ出力し、`headerStrings`に対応するヘッダー項目名を出力 |
|      :o:      |      :x:      | 両者の紐付けが行えないため、エラー                                                       |
|      :x:      |      :o:      | 両者の紐付けが行えないため、エラー                                                       |
|      :x:      |      :x:      | 全項目を出力し、物理カラム名をヘッダーに出力                                             |

:::

#### Example of \$http.outputFile

```js
methods: {
  outputFileDemo() {
    const sqlFile = 'ukx.ComDownloadCsv.Sample01';

    this.$http.outputFile('outputCsv', {
        downloadFileNm: 'sampleFile',
        sqlId: sqlFile,
        bindParamNames: ['SYUGRPSINSEINO'],
        bindParamValues: [11111111],
        hasHeader: true,
      })
      .then(response => {
        const hasException = this.$handleException(response);

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理があれば書く
          console.log(`NG`);
        }
      });
    },
  }
}
```

:::tip ファイルアップロード

ファイルのアップロードは、:link: [RmUpload](./../components/RmUpload.html)を参照してください。

:::

### :warning:\$http.\_handleError(err)

HTTP エラーをハンドリングします

::: warning

通常、アプリケーションから利用することはありません。

:::

| Paramater | Required | Description                          | Further Reading |
| --------- | :------: | ------------------------------------ | --------------- |
| err       |   :o:    | XHR エラーオブジェクトを指定します。 | -               |

### :warning:\$http.\_handle404()

404 のエラー画面へ遷移します

::: warning

通常、アプリケーションから利用することはありません。

:::

## Further Reading

- [Vue.js ガイド - ミックスイン](https://jp.vuejs.org/v2/guide/mixins.html)
- [axios - API](https://github.com/axios/axios#axios-api)

---

## :large_blue_diamond: \$kbn - 区分値モジュール

:::tip 区分値マスタの値

ここでは、以下のような区分値が DB に入っているという前提で取得を行っています。

<img :src="$withBase('/kbn-sample.png')" alt="区分サンプル">

:::

:::warning

ここでは分かりやすさのため区分 ID などをハードコーディングしていますが、  
PJ 開発では規約に応じて定数化されたものを利用して下さい。

:::

### :white_check_mark:\$kbn.getName(kbnId, kbntiId)

区分値 ID から、区分値論理名を取得します。

| Paramater | Required | Description              | Further Reading |
| --------- | :------: | ------------------------ | --------------- |
| kbnId     |   :o:    | 区分 ID を指定します。   | -               |
| kbntiId   |   :o:    | 区分値 ID を指定します。 | -               |

#### Example of \$kbn.getName

```js
methods: {
  kbnDemo() {
    const maker = this.$kbn.getName('11357', '1');
    console.log(maker); // いすゞ
  }
}
```

### :white_check_mark:\$kbn.getNameBy(kbnId, kbntiUniqName)

区分値物理名から、区分値論理名を取得します。

| Paramater     | Required | Description            | Further Reading |
| ------------- | :------: | ---------------------- | --------------- |
| kbnId         |   :o:    | 区分 ID を指定します。 | -               |
| kbntiUniqName |   :o:    | 区分値名を指定します。 | -               |

#### Example of \$kbn.getNameBy

```js
methods: {
  kbnDemo() {
    const maker = this.$kbn.getNameBy('11357', 'ISUZU');
    console.log(maker); // いすゞ
  }
}
```

### :white_check_mark:\$kbn.getId(kbnId, kbntiUniqName)

区分値物理名から、区分値 ID を取得します。

| Paramater     | Required | Description            | Further Reading |
| ------------- | :------: | ---------------------- | --------------- |
| kbnId         |   :o:    | 区分 ID を指定します。 | -               |
| kbntiUniqName |   :o:    | 区分値名を指定します。 | -               |

#### Example of \$kbn.getId

```js
methods: {
  kbnDemo() {
    const makerId = this.$kbn.getId('11357', 'ISUZU');
    console.log(makerId); // 1
  }
}
```

### :white_check_mark:\$kbn.getKbntiInfoByName(kbnId, kbntiUniqName, returnFieldName)

区分値物理名から、区分値情報を汎用的に取得します。

- `returnFieldName`が指定された場合はそのフィールドのみを返却します。
- 指定された区分・区分値情報が存在しない場合は `null` を返却します。

| Paramater       | Required | Description                    | Further Reading |
| --------------- | :------: | ------------------------------ | --------------- |
| kbnId           |   :o:    | 区分 ID を指定します。         | -               |
| kbntiUniqName   |   :o:    | 区分値名を指定します。         | -               |
| returnFieldName |          | 返却フィールド名を指定します。 | -               |

#### Example of \$kbn.getKbntiInfoByName

```js
methods: {
  kbnDemo() {
    const makerInfo = this.$kbn.getKbntiInfoByName('11375', 'ISUZU');
    console.log(makerInfo);
    // {KBN_UNIQ_NM: "SYAMEIMAKERKBN", KBNTI_UNIQ_NM: "ISUZU", KBNTI_ID: "1", JOTAI_KBN: "0", KBN_ID: "11357", …}
  }
}
```

### :white_check_mark:\$kbn.getKbntiInfoById(kbnId, kbntiId, returnFieldName)

区分値 ID から、区分値情報を汎用的に取得します。

- `returnFieldName`が指定された場合はそのフィールドのみを返却します。
- 指定された区分・区分値情報が存在しない場合は `null` を返却します。

| Paramater       | Required | Description                    | Further Reading |
| --------------- | :------: | ------------------------------ | --------------- |
| kbnId           |   :o:    | 区分 ID を指定します。         | -               |
| kbntiId         |   :o:    | 区分値 ID を指定します。       | -               |
| returnFieldName |          | 返却フィールド名を指定します。 | -               |

#### Example of \$kbn.getKbntiInfoById

```js
methods: {
  kbnDemo() {
    const makerInfo = this.$kbn.getKbntiInfoById('11375', '1');
    console.log(makerInfo);
    // {KBN_UNIQ_NM: "SYAMEIMAKERKBN", KBNTI_UNIQ_NM: "ISUZU", KBNTI_ID: "1", JOTAI_KBN: "0", KBN_ID: "11357", …}
  }
}
```

### :white_check_mark:\$kbn.getKbnInfoById(kbnId)

区分 ID から、区分情報を全て取得します。

| Paramater | Required | Description            | Further Reading |
| --------- | :------: | ---------------------- | --------------- |
| kbnId     |   :o:    | 区分 ID を指定します。 | -               |

#### Example of \$kbn.getKbnInfoById

```js
methods: {
  kbnDemo() {
    const makerInfo = this.$kbn.getKbnInfoById('11375');
    console.log(makerInfo);
    // {1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}}
  }
}
```

---

## :large_blue_diamond: \$util - Utils モジュール（全般）

### :white_check_mark:\$util.isObject(target)

渡された値の型がオブジェクトであるかを判定します。

| Paramater | Required | Description                  | Further Reading |
| --------- | :------: | ---------------------------- | --------------- |
| target    |   :o:    | 型判定する対象を指定します。 | -               |

#### Example of \$util.isObject

```js
methods: {
  utilDemo() {
    const obj = {
      key: 'value',
    };
    console.log(this.$util.isObject(obj)); // true
  }
}
```

### :white_check_mark:\$util.isFunction(target)

渡された値の型が Function であるかを判定します。

| Paramater | Required | Description                  | Further Reading |
| --------- | :------: | ---------------------------- | --------------- |
| target    |   :o:    | 型判定する対象を指定します。 | -               |

#### Example of \$util.isFunction

```js
methods: {
  utilDemo() {
    const func = function() {
      console.log('これはfunctionです');
    };
    console.log(this.$util.isFunction(func)); // true
  }
}
```

### :white_check_mark:\$util.isIE11()

ブラウザが IE11 であるかを判定します。

#### Example of \$util.isIE11

```js
methods: {
  utilDemo() {
    console.log(this.$util.isIE11()); // false
  }
}
```

### :white_check_mark:\$util.isEdge()

ブラウザが Edge であるかを判定します。

#### Example of \$util.isEdge

```js
methods: {
  utilDemo() {
    console.log(this.$util.isEdge()); // false
  }
}
```

### :white_check_mark:\$util.isChrome()

ブラウザが Chrome であるかを判定します。

#### Example of \$util.isChrome

```js
methods: {
  utilDemo() {
    console.log(this.$util.isChrome()); // true
  }
}
```

### :white_check_mark:\$util.isSafari()

ブラウザが Safari であるかを判定します。

#### Example of \$util.isSafari

```js
methods: {
  utilDemo() {
    console.log(this.$util.isSafari()); // false
  }
}
```

### :white_check_mark:\$util.formatScreenNum(amount)

数字を金額表記（三桁ごとにカンマ挿入）に変換します。

| Paramater | Required | Description                | Further Reading |
| --------- | :------: | -------------------------- | --------------- |
| amount    |   :o:    | 変換する数字を指定します。 | -               |

#### Example of \$util.formatScreenNum

```js
methods: {
  utilDemo() {
    let amount = 1001001001;
    amount = this.$util.formatScreenNum(amount);

    console.log(amount); // 1,001,001,001
  }
}
```

### :white_check_mark:\$util.formatSystemNum(amount)

金額表記（三桁ごとにカンマ挿入）をカンマ抜き数字に変換します。

| Paramater | Required | Description                | Further Reading |
| --------- | :------: | -------------------------- | --------------- |
| amount    |   :o:    | 変換する数字を指定します。 | -               |

#### Example of \$util.formatSystemNum

```js
methods: {
  utilDemo() {
    let amount = '1,001,001,001';
    amount = this.$util.formatSystemNum(amount);

    console.log(amount); // 1001001001
  }
}
```

### :white_check_mark:\$util.lookup(obj, path)

Object 内に与えられた path が存在するかを判定します。
存在しないオブジェクト階層下の場合でも正しく判定できます。

| Paramater | Required | Description                             | Further Reading |
| --------- | :------: | --------------------------------------- | --------------- |
| obj       |   :o:    | 判定元の Object を指定します。          | -               |
| path      |   :o:    | 判定する path を`.`区切りで指定します。 | -               |

#### Example of \$util.lookup

```js
methods: {
  utilDemo() {
    const obj = {
      h1: {
        h2: {
          p: 'Content',
        },
      },
    };
    const path1 = 'h1.h2.p';
    console.log(this.$util.lookup(obj, path1)); // true

    const path2 = 'h1.h2.h3';
    console.log(this.$util.lookup(obj, path2)); // false
  }
}
```

---

## :large_blue_diamond: \$util - Utils モジュール（String）

### :white_check_mark:\$util.formatScreenText(text)

渡されたテキストの改行コードを HTML 描画用の改行(`<br>`)に変換します。

| Paramater | Required | Description                  | Further Reading |
| --------- | :------: | ---------------------------- | --------------- |
| text      |   :o:    | 変換する文字列を指定します。 | -               |

#### Example of \$util.formatScreenText

```js
methods: {
  utilDemo() {
    const message = this.$util.formatScreenText('AAAA\r\nBBBB');
    console.log(message); // AAAA<br>BBBB
  }
}
```

### :white_check_mark:\$util.formatSystemText(text)

渡されたテキストの改行コード(`<br>`)をサーバ格納用の改行(CRLF)に変換します。

| Paramater | Required | Description                  | Further Reading |
| --------- | :------: | ---------------------------- | --------------- |
| text      |   :o:    | 変換する文字列を指定します。 | -               |

#### Example of \$util.formatSystemText

```js
methods: {
  utilDemo() {
    const message = this.$util.formatSystemText('AAAA<br/>BBBB');
    console.log(message); // AAAA\r\nBBBB
  }
}
```

### :white_check_mark:\$util.isEmpty(text)

渡されたテキストの空文字判定を行います。  
NULL, 空文字だった場合は true を返します。

| Paramater | Required | Description                        | Further Reading |
| --------- | :------: | ---------------------------------- | --------------- |
| text      |   :o:    | 空文字判定する文字列を指定します。 | -               |

#### Example of \$util.isEmpty

```js
methods: {
  utilDemo() {
    const isEmpty1 = this.$util.isEmpty('AA');
    console.log(isEmpty1); // false

    const isEmpty2 = this.$util.isEmpty('');
    console.log(isEmpty2); // true

    const isEmpty3 = this.$util.isEmpty(null);
    console.log(isEmpty3); // true
  }
}
```

### :white_check_mark:\$util.convUpperCase(text)

渡されたテキストを全角変換します。

| Paramater | Required | Description                      | Further Reading |
| --------- | :------: | -------------------------------- | --------------- |
| text      |   :o:    | 全角変換する文字列を指定します。 | -               |

#### Example of \$util.convUpperCase

```js
methods: {
  utilDemo() {
    const upperStr = this.$util.convUpperCase('ﾊﾝｶｸ');
    console.log(upperStr); // ハンカク
  }
}
```

### :white_check_mark:\$util.escapeHTML(text)

渡されたテキストを HTML エスケープします。

| Paramater | Required | Description                             | Further Reading |
| --------- | :------: | --------------------------------------- | --------------- |
| text      |   :o:    | HTML エスケープする文字列を指定します。 | -               |

#### Example of \$util.escapeHTML

```js
methods: {
  utilDemo() {
    const escaped = this.$util.escapeHTML('<strong>太字。</strong>');
    console.log(escaped); // &lt;strong&gt;太字。&lt;/strong&gt;
  }
}
```

### :white_check_mark:\$util.unescapeHTML(text)

渡されたテキストを HTML アンエスケープします。

| Paramater | Required | Description                                 | Further Reading |
| --------- | :------: | ------------------------------------------- | --------------- |
| text      |   :o:    | HTML アンエスケープする文字列を指定します。 | -               |

#### Example of \$util.unescapeHTML

```js
methods: {
  utilDemo() {
    const unescaped = this.$util.unescapeHTML('&lt;strong&gt;太字。&lt;/strong&gt;');
    console.log(unescaped); // <strong>太字。</strong>
  }
}
```

## :large_blue_diamond: \$util - Utils モジュール（Array）

### :white_check_mark:\$util.removeArray(array, value)

配列`array`に指定された値`value`がある場合に削除します。

| Paramater | Required | Description                      | Further Reading |
| --------- | :------: | -------------------------------- | --------------- |
| array     |   :o:    | 削除対象の配列を指定します。     | -               |
| value     |   :o:    | 配列から削除する値を指定します。 | -               |

#### Example of \$util.removeArray

```js
methods: {
  utilDemo() {
    let arr = ['リンゴ', 'ブドウ', 'バナナ'];

    arr = this.$util.removeArray(arr, 'ブドウ');
    console.log(arr); // ["リンゴ", "バナナ"]
  }
}
```

### :white_check_mark:\$util.cloneArray(array)

配列`array`を複製します。

| Paramater | Required | Description                  | Further Reading |
| --------- | :------: | ---------------------------- | --------------- |
| array     |   :o:    | 複製対象の配列を指定します。 | -               |

#### Example of \$util.cloneArray

```js
methods: {
  utilDemo() {
    let arr = ['リンゴ', 'ブドウ', 'バナナ'];
    let arrCopy = this.$util.cloneArray(arr);

    arr = this.$util.removeArray(arr, 'ブドウ');

    console.log(arr); // ["リンゴ", "バナナ"]
    console.log(arrCopy); // ["リンゴ", "ブドウ", "バナナ"]
  }
}
```

## :large_blue_diamond: \$util - Utils モジュール（Date）

:::tip 日付関連ライブラリ Moment.js

日付関連の処理では外部ライブラリ[Moment.js](https://momentjs.com/)を利用します。  
（[こちらの記事](https://qiita.com/osakanafish/items/5ef636bbcb2c3ef94953)に基本が載っています。）

:::

日付フォーマットについては高速開発 FW として`Moment.js`をラップした関数を用意しています。  
詳細は[フィルターのページ](./../filters/#date-formatting)をご参照ください。

### 日付フォーマットの利用例

```js
methods: {
  utilDemo() {
    const today = new Date();
    console.log(this.$util.formatYmdHmsSlash(today)); // 2019/09/18 17:38:00
  }
}
```

## :large_blue_diamond: その他共通モジュール

### :white_check_mark:\$msg(code, ins1, ins2, ins3, ins4, ins5)

メッセージを取得します。  
`isn1~5`で埋め込み文字列を指定できます。

:::tip メッセージ定義

メッセージは`message.properties`に定義されています。

:::

| Paramater | Required | Description                     | Further Reading |
| --------- | :------: | ------------------------------- | --------------- |
| key       |   :o:    | Property のキー名を指定します。 | -               |
| ins1      |          | 埋め込み文字列 1 を指定します。 | -               |
| ins2      |          | 埋め込み文字列 2 を指定します。 | -               |
| ins3      |          | 埋め込み文字列 3 を指定します。 | -               |
| ins4      |          | 埋め込み文字列 4 を指定します。 | -               |
| ins5      |          | 埋め込み文字列 5 を指定します。 | -               |

#### Example of \$msg

```js
methods: {
  msgDemo() {
    const message = this.$msg(2002107, 'column1');
    console.log(message); // JSONデータのキー（column1）の値が存在しません。
  }
}
```

### :white_check_mark:\$property(key)

Property を取得します。

:::tip クライアントで取得可能な Property 定義

Property は`system.properties`ファイルに定義されています。  
そのうち、クライアントサイドから取得できるのは`cl.`から始まるものだけです。

:::

| Paramater | Required | Description                     | Further Reading |
| --------- | :------: | ------------------------------- | --------------- |
| key       |   :o:    | Property のキー名を指定します。 | -               |

#### Example of \$property

```js
methods: {
  propertyDemo() {
    const property = this.$property('cl.def.date.format.screen');
    console.log(property); // yyyy/MM/dd
  }
}
```

## :large_blue_diamond: BasePage の共通メソッド

:::tip BasePage の Mixin 設定

各画面では、自動生成で `mixins: [BasePage]` という記述を出力して `BasePage.vue` を読み込んでいます。  
これにより、`BasePage.vue` に定義されたメソッドを `this.xxx` という形で呼び出すことができます。

:bulb: 上記の共通メソッドとは異なり各画面で Mixin 設定をしているため、各画面の Vue インスタンスへアクセスできるという特徴があります。

:::

### :white_check_mark:\$validate(func)

バリデーションを実行し、成功した場合に引数に指定された関数を実行します。

| Paramater | Required | Description                              | Further Reading |
| --------- | :------: | ---------------------------------------- | --------------- |
| func      |   :o:    | 成功した場合に実行する関数を指定します。 | -               |

#### Example of \$validate

```js
this.$validate(() => {
  this.$alert('Validate OK!');
});
```

### :white_check_mark:\$handleException(response, config)

BL から返却されたレスポンスにエラーメッセージが含まれる場合、画面上にアラート表示します。

| Paramater | Required | Description                               | Further Reading |
| --------- | :------: | ----------------------------------------- | --------------- |
| response  |   :o:    | BL から返却されたレスポンスを指定します。 | -               |
| config    |          | エラーハンドリングの設定を指定します。    | -               |

:wrench: `config` に指定可能な値

| Paramater   | Description                                                           | default |
| ----------- | --------------------------------------------------------------------- | ------- |
| outputAlert | 業務エラー(warning)が発生した場合にアラートを表示するかを指定します。 | true    |

#### Example of \$handleException

```js
methods: {
  httpDemo() {
    this.$http
      .get('/service/general/otameshi')
      .then(response => {
        const hasException = this.$handleException(response, {
          outputAlert: false
        });

        if (!hasException) {
          // エラーがない場合の処理を書く
          console.log(`OK`);
        } else {
          // エラーがある場合の処理がある場合は書く
          console.log(`NG`);
        }
      })
  }
}
```

### :white_check_mark:\$saveSnap(snapNm, modelNm)

`modelNm`で指定されたモデルの値を、`snapNm`指定の名前で Vuex の`store`内にスナップします。  
`modelNm`が指定なしの場合は、画面内の全モデルをスナップします。

保存されたスナップは`$loadSnap`で取得します。

| Paramater | Required | Description                                | Further Reading |
| --------- | :------: | ------------------------------------------ | --------------- |
| snapNm    |   :o:    | 保存するスナップにつける名前を指定します。 | -               |
| modelNm   |          | 保存するモデル名を指定します。             | -               |

#### Example of \$saveSnap

```js
data() {
  return {
    bind: {
      searchCondition: {
        ...
      }
    }
  }
},
mounted() {
  this.$saveSnap('sample', 'bind.searchCondition'); // Vuexにスナップが保存される
},
```

### :white_check_mark:\$loadSnap(snapNm, screenNm)

`$saveSnap`により保存されたスナップを取得します。

| Paramater | Required | Description                                                                  | Further Reading |
| --------- | :------: | ---------------------------------------------------------------------------- | --------------- |
| snapNm    |   :o:    | ロードするスナップ名を指定します。                                           | -               |
| screenNm  |          | スナップを保存した画面名を指定します。<br>指定がない場合は自画面となります。 | -               |

#### Example of \$loadSnap

```js
methods: {
  clearForm() {
    this.bind.searchCondition = this.$loadSnap('sample');
  }
}
```

:::tip Model データの初期化

データの初期化（クリア）を行う場合は、`$saveSnap`, `$loadSanp`を利用すると以下のように実現できます。

```js
mounted() {
  /**
   * Vuexに'snapData.NSISDP01D01.sample'が存在しない場合はスナップ生成
   */
  if (!this.$util.lookup(this.$store.state, 'snapData.NSISDP01D01.all')) {
    this.$saveSnap('all'); // Vuexにスナップが保存される
  } else {
    // 全データを'all'からロードしたデータで置き換える
    Object.assign(this.$data, this.$loadSnap('all'));
  }

  /**
   * Vuexに'snapData.NSISDP01D01.sample'が存在しない場合はスナップ生成
   */
  if (!this.$util.lookup(this.$store.state, 'snapData.NSISDP01D01.sample')) {
    this.$saveSnap('sample', 'bind.searchCondition'); // Vuexにスナップが保存される
  }
},
methods: {
  /**
   * @func clearForm
   * 検索条件をクリアする
   */
  clearForm() {
    this.bind.searchCondition = this.$loadSnap('sample');
  },
}
```

:::

:::tip

:star: 画面遷移時には FW 共通で画面モデル情報をクリアします。

:::

## :large_blue_diamond: BasePopup の共通メソッド

:::tip 共通ポップアップの実装手順

共通ポップアップの実装については、:link: [こちらのページ](./../tips/developComPopup.html)もご参照下さい。

:::

:::warning BasePopup の Mixin 設定

ポップアップでは `BasePage.vue` の代わりに `BasePopup.vue` を Mixin として設定するため、  
自動生成の TODO コメントに沿って文言を置換してください。

:::

### :white_check_mark:`BasePage.vue` との共通メソッド

以下のメソッドは、`BasePage` と同様に利用可能です

:::warning

:construction: BasePopup の`$validate`は現在整備中です

:::

- [\$validate](#validate-func)
- [\$handleException](#handleexception-response-config)
- [\$saveSnap](#savesnap-snapnm-modelnm)
- [\$loadSnap](#loadsnap-snapnm-screennm)

### :white_check_mark:\$clearPopup()

ポップアップのモデルを全てクリアします。  
ポップアップの`@close`タイミングで呼び出してポップアップをクリアしてください。

#### Example of \$clearPopup

```js{3-4}
methods: {
  closePopup() {
    // ポップアップのモデルをクリア
    this.$clearPopup();
  },
},
```
