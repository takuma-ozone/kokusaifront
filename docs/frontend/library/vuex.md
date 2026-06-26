# :green_book: Vuex

## [Vuex](https://vuex.vuejs.org/ja/)とは？

`Vuex`はすべてのコンポーネントでデータを一元管理するための**状態管理パターン + ライブラリ**です。

`Vuex`がない環境ではコンポーネント間のデータの受け渡しには、`props`や`$emit`を使用して行います。  
しかし、コンポーネント間でのデータ受け渡しが頻繁に行われたり階層が増えてくると`props`や`$emit`でのデータ管理が難しくなります。

その問題を解決する仕組みが`Vuex`です。  
`Vuex`という一つの入れ物にデータを入れることでどこからでもそのデータへのアクセスが可能になります。

新出荷システムにおいては、権限情報などアプリケーション全体で共有されるデータを保持するために`Vuex`の仕組みを使います。

<img :src="$withBase('/rapidVuexGuide.png')" alt="VuexAbst">

- :white_check_mark: 予測可能な方法によってのみ状態の変異を行うというルールを保証
- :white_check_mark: アプリケーション内の全コンポーネント（＝全画面）のための集中型のストアとして機能
- :white_check_mark: Vue 公式の開発ツール拡張と連携し、設定なしでタイムトラベルデバッグやステートのスナップショットなどの高度な機能を提供する

### Vuex の利用方法

FW 共通部分で Vuex の`state`を読み込んでいるため、  
アプリ画面からは通常の`data`アクセスと同様の方式で記述することができます。

:::tip Vuex の`state`へのアクセス

例）`count`という`state`にアクセスする場合  
※`Vuex`では、`data`ではなく`state`という名前で状態を管理します

```html
{{ count }}
```

```js
this.count;
```

:::

:::warning

`state`として何を持つかは FW ではなくアプリ要件によって定まる部分です。  
そのため、一覧については今後アプリチームを含めて検討します。

:::

### 状態管理パターンとは？

`Vuex`では、「予測可能な方法によってのみ状態の変異を行う」というルールを守るため、  
直接`state`を更新することを禁止しています。

:::warning

以下は、`Vuex`に保持した`state`を更新する場合の決まり事です。  
アプリ画面から`state`を更新する機会は多くないため、不要であれば読み飛ばしてください。

また、ここから先の説明はアプリ画面記述範囲のみに絞っています。  
`Vuex`側の記述も含めて知りたい場合には :link: [こちらのページ](https://reffect.co.jp/vue/understaind-vue-basic)などを参考にして下さい。

:::

```js
// 以下の書き方はNG
this.$store.state.count++;
```

代わりに、`mutations`という`methods`によく似た仕組みを使って状態を更新します。  
さらに、`mutations`は直接実行するのではなく`commit`を経由して行わなければなりません。

```vue
<template>
  {{ count }}
  <button @click="increment">++</button>
</template>

<script>
export default {
	...
	methods: {
		increment() {
			this.$store.commit('increment');
		}
	},
}
</script>
```

さらに、非同期処理の中で`state`を更新したい場合には、`actions`を利用します。  
`actions`は直接`state`を変更するのではなく、その内部で`mutations`を`commit`するように作成します。

`mutations`を実行するのは`commit`でしたが、`actions`は`dispatch`メソッドから呼び出されます。

```js
methods: {
	increment() {
		this.$store.dispatch('increment');
	}
}
```

これらの概念を図にまとめると、以下のようになります。

<img :src="$withBase('/rapidVuexDiagram.png')" alt="VuexAbst">
