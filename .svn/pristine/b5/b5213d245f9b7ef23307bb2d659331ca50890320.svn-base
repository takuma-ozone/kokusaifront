# :memo: RmUpload

`RmUpload`コンポーネントで、**ラベル+アップロード**を表示できます。

ベースになっているのは、[ra-label](./LabelForRm.html)と、[el-upload](https://element.eleme.io/#/en-US/component/upload)です。

## :white_check_mark: `<rm-upload>`の使用例

:::tip ファイルアップロードの仕組み

ファイルアップロードは FW 共通の URL にアップロード Request を飛ばして、  
WEB サーバからアップロードされたファイル名と Path が返却されるという仕組みです。

アプリ側では、下記 `on-success` を利用して返却されたファイル名と Path を保持し、  
後続の BL にそれらの値を連携してください。

:::

<code-preview :data="{}" :methods="{ // 送信OK
  handleSuccess(res, file, fileList) {
    this.$alert('***onSuccess***');
  },
  // 送信NG
  handleError(err, file, fileList) {
    this.$alert('***onError***');
  },
  // limitを超える場合
  handleOnExceed(file, fileList) {
    this.$alert(`アップロードできるファイルは1つまでです。`);
  },
  // ファイルをアップロード
  // ※このガイド上ではエラー
  uploadFile() {
    this.$refs.rmUp.submitUpload();
  }, }">

```vue
<rm-upload
  ref="rmUp"
  com-id="sample"
  caption="SAMPLE"
  accept="image/*"
  :on-success="handleSuccess"
  :on-error="handleError"
  :limit="1"
  :on-exceed="handleOnExceed"
>
</rm-upload>

<div>
  <ra-button type="success" @click="uploadFile">UPLOAD!</ra-button>
</div>
```

</code-preview>

```js
methods: {
  // 送信OK
  handleSuccess(res, file, fileList) {
    this.$alert('***onSuccess***');
  },
  // 送信NG
  handleError(err, file, fileList) {
    this.$alert('***onError***');
  },
  // limitを超える場合
  handleOnExceed(file, fileList) {
    this.$alert(`アップロードできるファイルは1つまでです。`);
  },
  // ファイルをアップロード
  // ※このガイド上ではエラー
  uploadFile() {
    this.$refs.rmUp.submitUpload();
  },
}
```

## :white_check_mark: プロパティ

ラベルのプロパティについては[こちら](./LabelForRm.html)を参照してください。

| 属性               | 必須 | 説明                                                                                                                               | タイプ                             | 選択可能な値                                                                                                  | デフォルト       |
| ------------------ | :--: | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| com-id             | :o:  | コンポーネント共通の ID を指定。<br>ここで与えられた ID を元にラベル ID が付与される                                               | String                             | -                                                                                                             | -                |
| names              |      | ファイルを POST するときの`key`名を指定                                                                                            | String                             | -                                                                                                             | 'files'          |
| data               |      | Request に追加するデータを指定                                                                                                     | Object                             | -                                                                                                             | -                |
| headers            |      | Request Header に追加するデータを指定                                                                                              | Object                             | -                                                                                                             | -                |
| withCredentials    |      | Cookie を送信するかどうかを制御                                                                                                    | Boolean                            | -                                                                                                             | false            |
| multiple           |      | explorer でのファイルの複数選択を制御                                                                                              | Boolean                            | -                                                                                                             | false            |
| accept             |      | アップロードできるファイル拡張子を指定                                                                                             | String                             | [file type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers) | -                |
| on-progress        |      | アップロードを開始したタイミングのフック関数                                                                                       | Function(event, file, fileList)    | -                                                                                                             | -                |
| on-success         |      | アップロードが成功したタイミングのフック関数                                                                                       | Function(response, file, fileList) | -                                                                                                             | -                |
| on-error           |      | アップロードが失敗したタイミングのフック関数                                                                                       | Function(err, file, fileList)      | -                                                                                                             | -                |
| before-upload      |      | アップロードを開始前タイミングのフック関数<br>`false`が返却されるか、返された`Promise`が`reject`された場合はアップロードを中止する | Function(file)                     | -                                                                                                             | -                |
| auto-upload        |      | ファイル選択時に自動的にアップロードするかを制御                                                                                   | Boolean                            | -                                                                                                             | false            |
| http-request       |      | Http 通信を置き換えたい場合に関数を指定<br>※基本的には利用なし                                                                     | Function                           | -                                                                                                             | -                |
| disabled           |      | ファイル選択ボタン, アップロードボタンの非活性を制御                                                                               | Boolean                            | -                                                                                                             | false            |
| limit              |      | アップロードできるファイル数の条件を指定                                                                                           | Number                             | -                                                                                                             | 1                |
| on-exceed          |      | `limit`を超えてファイルを選択しようとしたタイミングのフック関数                                                                    | Function(files, fileList)          | -                                                                                                             | -                |
| is-required        |      | アップロードが必須かどうかを制御                                                                                                   | Boolean                            | -                                                                                                             | false            |
| select-btn-caption |      | ファイルを選択するボタンのキャプションを指定                                                                                       | String                             | -                                                                                                             | 'ファイルを選択' |
| has-submit-btn     |      | コンポーネント内にアップロードボタンを表示するかを指定                                                                             | Boolean                            | -                                                                                                             | false            |
| submit-btn-caption |      | アップロードボタンのキャプションを指定                                                                                             | String                             | -                                                                                                             | 'アップロード    |
