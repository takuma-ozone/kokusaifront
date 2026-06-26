# :green_book: Vue Router

## [Vue Router](https://router.vuejs.org/ja/)とは？

`Vue Router`は Vue.js の公式ルータです  
`Vue Router`を用いることで、Vue.js で SPA（シングルページアプリケーション）を構築できます

## :triangular_flag_on_post: [HTML にリンクを記述する](https://router.vuejs.org/ja/guide/#html)

`<router-link>`コンポーネントを使い、リンク先を`to`プロパティに指定します

```html
<router-link to="/foo">Go to Foo</router-link>
```

## :triangular_flag_on_post: [JS のメソッド内でルート遷移する](https://router.vuejs.org/ja/guide/essentials/navigation.html)

ルータのインスタンスメソッドを使うことで、各種遷移を実現できます  
ルータインスタンスには、`this.$router`でアクセスできます

### :heavy_check_mark: `router.replace(location, onComplete?, onAbort?)`

- `router.replace`を用いることで JavaScript からルート遷移を実現できます
  - 引数に追加で`params`, `query`を与えることができます

`router.replace`メソッドは history スタックに新しいエントリを追加しません  
⇒ つまり、ユーザーがブラウザの「戻る」「進む」ボタンでの URL 制御をできなくなります！

:::danger 画面遷移時の URL 指定は禁止

新出荷 PJ は社外向けシステムであるため URL は最終的には変更される可能性が高いですが、  
現在は URL が未決のため、`router.js`には`path`と`name`のどちらも機能 ID を指定しています。

Vue Router では URL パスを指定して遷移する方法もありますが、  
URL は最終的に変更の可能性もあるため、下例の通り`name`指定での遷移としてください。

:::

```js
// 通常の遷移
this.$router.replace({ name: 'home' });

// 名前付きルート
this.$router.replace({ name: 'user', params: { userId: '123' } });

// 結果的に "/register?plan=private" になる query
this.$router.replace({ name: 'register', query: { plan: 'private' } });
```

:::tip `params`と`query`の違い

- `params`は原則 URL での[動的ルートマッチング](https://router.vuejs.org/ja/guide/essentials/dynamic-matching.html#動的ルートマッチング)に利用される値です  
  遷移先に検索条件として ID を渡す場合、例えば「送り状作成」画面での「伝票履歴 No」などに利用されます

:star: `params`は以下の方法で取得できます。

```js
this.$route.params['user'];
```

- `query`は[クエリ文字列](http://e-words.jp/w/クエリ文字列.html)のことで、Web サーバーへの付加情報を記述します  
  一般的には、検索条件を複数指定する場合などに利用されます

:star: `query`は以下の方法で取得できます。

```js
this.$route.query.itemId;
```

:bulb: :link: [transition と params の使い分け](./../tips/transitionParams.md)

:::

### :heavy_check_mark: `router.push(location, onComplete?, onAbort?)`

- `router.push`は、`router.replace`と異なり history スタックに新しいエントリを追加します

:::warning `router.push`と`router.history`

`router.push`と`router.history`は基本的な用法は同じですが、  
history スタックに新しいエントリを追加するかどうかという違いがあります。

一般的には`router.push`が使われることが多いですが、  
新出荷システムは業務システムである特性上、「進む」・「戻る」ボタンを制御するため、  
**原則 `router.replace` を使用すること**とします。

:::

### :heavy_check_mark: `router.go(n)`

history スタックの中でどのくらいステップを進めるか、もしくは戻るのかを表す 1 つの数値を受け取って画面遷移します

```js
// 1 つレコードを進める。history.forward() と同じ
router.go(1);

// 1 つレコードを戻す。history.back() と同じ
router.go(-1);

// 3 つレコードを進める
router.go(3);

// もし多くのレコードが存在しない場合、遷移に失敗します
router.go(-100);
router.go(100);
```

## :triangular_flag_on_post: [Router インスタンス / Route オブジェクト](https://qiita.com/tseno/items/4b299464c4fc5605e515)

### :heavy_check_mark: `$router`

- Router インスタンスを表します。
- Router インスタンスは Web アプリケーション全体に 1 つ存在し、全体的な Router 機能を管理しています。

### :heavy_check_mark: `$route`

- Route オブジェクトと呼ばれます。
- 現在アクティブなルートの状態を保持したオブジェクトで、現在のパスや URL パラメータなどの情報を取得できます。
- コンポーネントの内部に実装する Router のフック関数などからアクセスできます。

## :triangular_flag_on_post: [ナビゲーションガード](https://router.vuejs.org/ja/guide/advanced/navigation-guards.html)

Vue Router による遷移時にフック関数を挿し込みたい場合、[ナビゲーションガード](https://router.vuejs.org/ja/guide/advanced/navigation-guards.html)を利用します。  
ここでは、各画面内で利用される**コンポーネント内ガード**について説明します。

### コンポーネント内ガード

- `beforeRouteEnter`
- `beforeRouteUpdate`
- `beforeRouteLeave`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // このコンポーネントを描画するルートが確立する前に呼ばれます。
    // `this` でのこのコンポーネントへのアクセスはできません。
    // なぜならばこのガードが呼び出される時にまだ作られていないからです!
  },
  beforeRouteUpdate(to, from, next) {
    // このコンポーネントを描画するルートが変更されたときに呼び出されますが、
    // このコンポーネントは新しいルートで再利用されます。
    // たとえば、動的な引数 `/foo/:id` を持つルートの場合、`/foo/1` と `/foo/2` の間を移動すると、
    // 同じ `Foo` コンポーネントインスタンスが再利用され、そのときにこのフックが呼び出されます。
    // `this` でコンポーネントインスタンスにアクセスできます。
  },
  beforeRouteLeave(to, from, next) {
    // このコンポーネントを描画するルートが間もなく
    // ナビゲーションから離れていく時に呼ばれます。
    // `this` でのコンポーネントインスタンスへのアクセスができます。
  },
};
```

:::tip 実装サンプル

:star: 「荷物受渡書印刷」において、出荷日が入力されている状態で遷移する場合にコンファームを上げるパターン

```js
/**
 * 画面遷移前のconfirmダイアログ
 */
beforeRouteLeave(to, from, next){
  const syuDate = this.bind.searchCondition.syuDate;

  if (syuDate) { // 出荷日が入力されている場合
    this.$confirm('フォームが入力されていますが、画面を離れますか？', 'Title', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      next(); // OKが押されたら遷移する
    }).catch(() => {
      next(false); // Cancelが押されたら遷移しない
    });
  } else { // 出荷日が入力されていない場合
    next(); // 遷移する
  }
}
```

:::
