# :bulb: IE11 対応

`Vue.js`の中では比較的新しい[ES6](<https://github.com/takahashiakira/tech_for_web/wiki/ES2015について-(ES6)>)記法を採用している場面が多くあります。  
`ES6`記法は大半のモダンブラウザではサポートされていますが、IE11 では未対応です。

そこで、[webpack](https://webpack.js.org/)によるソースバンドル時に[babel](https://babeljs.io/)というトランスパイルライブラリを噛ますことで、  
どのブラウザでも表示できるソースに変換しています。

ただし、IE11 ではローカルファイル上の[WebSocket](https://developer.mozilla.org/ja/docs/Web/API/WebSockets_API)という通信プロトコルを許さない設定となっているため、  
この設定を変更する必要があります。

:::tip IE11 - WebSocket の設定

<!-- https://codeday.me/jp/qa/20190114/131549.html -->

`インターネットオプション > セキュリティ > ローカルイントラネット > サイト`  
から全てのチェックボックスをオフにします。

<img :src="$withBase('/webSocketConfig.PNG')" alt="WebSocketConfig" style="zoom: 80%;">

<img :src="$withBase('/webSocketConfig2.PNG')" alt="WebSocketConfig" style="zoom: 80%;">

:::
