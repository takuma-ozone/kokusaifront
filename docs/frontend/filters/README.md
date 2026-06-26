# :green_book: Filter Rules

高速開発 FW ではいくつかの[フィルター](https://jp.vuejs.org/v2/guide/filters.html)を利用できます。

## フィルターの利用方法

[Vue.js ガイド - フィルター](https://jp.vuejs.org/v2/guide/filters.html)をご参照ください。

<code-preview>

```vue
{{ new Date() | formatYmdSlash }}
```

</code-preview>

---

## Available Filters

### Date Formatting

[Moment.js](https://momentjs.com/)を利用して、日付をフォーマットするフィルターです。

| Filter Name         | Description                                  |
| :------------------ | :------------------------------------------- |
| formatYmdSlash      | 日付を`YYYY/MM/DD`形式の文字列に変換します。 |
| formatYmd           | 日付を`YYYYMMDD`形式の文字列に変換します。   |
| formatShortYmdSlash | 日付を`YY/MM/DD`形式の文字列に変換します。   |
| formatShortYmd      | 日付を`YYMMDD`形式の文字列に変換します。     |
| formatYmSlash       | 日付を`YYYY/MM`形式の文字列に変換します。    |
| formatYm            | 日付を`YYYYMM`形式の文字列に変換します。     |
| formatShortYmSlash  | 日付を`YY/MM`形式の文字列に変換します。      |
| formatShortYm       | 日付を`YYMM`形式の文字列に変換します。       |

<code-preview>

```vue
<table>
  <thead>
    <tr><th> Filter Name         </th><th> Output                                 </th></tr>
  </thead>
  <tbody>
    <tr><td> formatYmdSlash      </td><td> {{ new Date() | formatYmdSlash }}      </td></tr>
    <tr><td> formatYmd           </td><td> {{ new Date() | formatYmd }}           </td></tr>
    <tr><td> formatShortYmdSlash </td><td> {{ new Date() | formatShortYmdSlash }} </td></tr>
    <tr><td> formatShortYmd      </td><td> {{ new Date() | formatShortYmd }}      </td></tr>
    <tr><td> formatYmSlash       </td><td> {{ new Date() | formatYmSlash }}       </td></tr>
    <tr><td> formatYm            </td><td> {{ new Date() | formatYm }}            </td></tr>
    <tr><td> formatShortYmSlash  </td><td> {{ new Date() | formatShortYmSlash }}  </td></tr>
    <tr><td> formatShortYm       </td><td> {{ new Date() | formatShortYm }}       </td></tr>
  </tbody>
</table>
```

</code-preview>

### Time Formatting

[Moment.js](https://momentjs.com/)を利用して、時間をフォーマットするフィルターです。

| Filter Name    | Description                                |
| :------------- | :----------------------------------------- |
| formatHmsColon | 時間を`HH:mm:ss`形式の文字列に変換します。 |
| formatHms      | 時間を`HHmmss`形式の文字列に変換します。   |
| formatHmColon  | 時間を`HH:mm`形式の文字列に変換します。    |
| formatHm       | 時間を`HHmm`形式の文字列に変換します。     |

<code-preview>

```vue
<table>
  <thead>
    <tr><th> Filter Name    </th><th> Output                            </th></tr>
  </thead>
  <tbody>
    <tr><td> formatHmsColon </td><td> {{ new Date() | formatHmsColon }} </td></tr>
    <tr><td> formatHms      </td><td> {{ new Date() | formatHms }}      </td></tr>
    <tr><td> formatHmColon  </td><td> {{ new Date() | formatHmColon }}  </td></tr>
    <tr><td> formatHm       </td><td> {{ new Date() | formatHm }}       </td></tr>
  </tbody>
</table>
```

</code-preview>

### Date Time Formatting

[Moment.js](https://momentjs.com/)を利用して、日時をフォーマットするフィルターです。

| Filter Name       | Description                                           |
| :---------------- | :---------------------------------------------------- |
| formatYmdHmsSlash | 日時を`YYYY/MM/DD HH:mm:ss`形式の文字列に変換します。 |
| formatYmdHms      | 日時を`YYYYMMDDHHmmss`形式の文字列に変換します。      |
| formatYmdHmSlash  | 日時を`YYYY/MM/DD HH:mm`形式の文字列に変換します。    |
| formatYmdHm       | 日時を`YYYYMMDDHHmm`形式の文字列に変換します。        |

<code-preview>

```vue
<table>
  <thead>
    <tr><th> Filter Name       </th><th> Output                               </th></tr>
  </thead>
  <tbody>
    <tr><td> formatYmdHmsSlash </td><td> {{ new Date() | formatYmdHmsSlash }} </td></tr>
    <tr><td> formatYmdHms      </td><td> {{ new Date() | formatYmdHms }}      </td></tr>
    <tr><td> formatYmdHmSlash  </td><td> {{ new Date() | formatYmdHmSlash }}  </td></tr>
    <tr><td> formatYmdHm       </td><td> {{ new Date() | formatYmdHm }}       </td></tr>
  </tbody>
</table>
```

</code-preview>

### Number Formatting

数値をフォーマットするフィルターです。

| Filter Name     | Description                                             |
| :-------------- | :------------------------------------------------------ |
| formatScreenNum | 数値をカンマによる 3 桁区切り形式の文字列に変換します。 |

<code-preview>

```vue
<table>
	<thead>
		<tr><th>Directive</th><th>Output</th></tr>
	</thead>
	<tbody>
		<tr>
			<td v-pre> {{ 1234567890 | formatScreenNum }} </td>
			<td> {{ 1234567890 | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ -1234567890 | formatScreenNum }} </td>
			<td> {{ -1234567890 | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ '1234567890' | formatScreenNum }} </td>
			<td> {{ '1234567890' | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ '1234567890.123' | formatScreenNum }} </td>
			<td> {{ '1234567890.12345' | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ '1234567890.000' | formatScreenNum }} </td>
			<td> {{ '1234567890.00000' | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ 10 ** 8 | formatScreenNum }} </td>
			<td> {{ 10 ** 21 | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ 'abcdefg' | formatScreenNum }} </td>
			<td> {{ 'abcdefg' | formatScreenNum }} </td>
		</tr>
		<tr>
			<td v-pre> {{ true | formatScreenNum }} </td>
			<td> {{ true | formatScreenNum }} </td>
		</tr>
	</tbody>
</table>
```

</code-preview>

:::tip Two-Way フィルタ

[Vue1.x Two-Way フィルタ](https://jp.vuejs.org/v2/guide/migration.html#Two-Way-フィルタ-置き換え) <Badge text="Replaced" type="warn"/>

Vue2.x では 2Way-Filter は廃止されているため、input 要素に直接 Filter を当てることはできません。

金額表示のカンマ付与など、双方向バインドされた input で Filter 機能を実現する場合には、  
`focus` / `blur` といったタイミングでモデル値を書き換えることになります。  
そのため、アプリで扱う際にはモデル値を BL 送信する際に、再フォーマットが求められる場合があることに注意してください。

現在用意している Two-Way フィルタは以下の通りです。

- 金額表示
  - 入力された数字を 3 桁ごとカンマ区切りする

:bulb: 追加してほしいフィルタがある場合には Future 長町までご連絡ください。

:::

:star: Two-Way フィルタの実装例  
詳しくは、:link: [Component ガイド - RmInput](./../components/RmInput.md)等をご確認ください。

<code-preview :data="{value1: ''}">

```vue
<rm-input com-id="price" caption="PRICE FILTER" v-model="value1" isPrice></rm-input>
```

</code-preview>
