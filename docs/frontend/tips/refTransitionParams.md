# :bulb: `transition`と`params`の関係

:::warning
整備中
:::

<!--

## :white_check_mark: 概要

1. 画面から画面への遷移パラメータは、設計書上「モデル定義」の`transition`内に記載する
   ➡ 設計書上、遷移パラメータが API の IN/OUT としてどのように用いられるかを表現するため

2. `Vue Router`の書き方では、遷移パラメータは`this.$route.params`で取得する
   ➡ :link: [Vue Router の説明](./../library/router.md)を参照

上記、1,2 のギャップを埋めるために、遷移パラメータを IN/OUT に含んだ API を記述する場合には、
**実装時に遷移パラメータを`transition`モデル内の項目に詰め直す** ことが必要となります。

## サンプルコード

:::tip サンプルコードの想定

- `Sample.vue`において、遷移パラメータとして受け取った`okurijoNo`を API パラメータとしてモデルに詰め替える場合
- API パラメータの取得関数は`SampleModel.js`に定義されている(自動生成)

:::

:star: `SampleModel.js`

```js{2-4,12}
export default {
  transition: {
    okurijoNo: 0
  },
  bind: {
    xxx: '',
    yyy: '',
  },
  ...
  getApi1Model() {
    return {
      okurijo: this.transition.okurijo,
      xxx: this.bind.xxx,
      yyy: this.bind.yyy,
    }
  }
}
```

:star: `SampleModel.vue`(API 呼出し箇所のみ)

```js{3-4,9}
methods: {
  selectSampleData() {
    // 遷移パラメータをtransitionに詰め替え
    this.transition.okurijoNo = this.$route.params.okurijoNo;

    // API呼び出し
    this.$http
      .get('/service/general/sample', {
        params: SampleModel.getApi1Model();
      })
      .then(response => {
        // 後続の処理
      })
  },
}
``` -->
