const $sMsg = {
  //2002111 : 指定したパラメータには対応していません。({0})
  UNSUPPORTED_PARAMETER_ERROR: '2002111',
  //2002301 : 必須項目が設定されていません。{0}
  REQUIRED_PARAMETER_ERR: '2002301',
  //2002314 : 正常終了しました。
  NORMALEND_INF: '2002314',
  //2002318 : 不正な値です[{0}]
  INCORRECT_PARAMETER_ERROR: '2002318',
  //{0}が重複しています。
  DUPLICATE: '2002417',
  //{0}してもよろしいですか？
  CONFIRM: '2002418',
  //{0}が完了しました。
  COMPLETE: '2002419',
  //検索条件の入力がありませんが、全件検索しますか？
  SEARCH_ALL: '2002420',
  //初期起動に失敗しました。
  INIT_START_UP_ERROR: '2002421',
  //致命的エラーです。管理者連絡してください。
  ADMIN_ERROR: '2002422',
  //ユーザーIDが未入力です。
  USER_ID_NOT_ENTERED_ERROR: '2002423',
  //パスワードが未入力です。
  PASSWORD_NOT_ENTERED_ERROR: '2002424',
  //タイムアウトしました。
  TIMEOUT_ERROR: '2002425',
  //{0}を開始しました。
  START: '2002426',
  //ファイル生成待機中です。
  WAIT_FILE_CREATE: '2002427',
  //{0}件{1}しました。
  SQL_RESULT: '2002428',
  //フォームが入力されていますが、画面を離れますか？
  SCREENLEAVECONFIRM: '2002429',
  //更新対象データは他のユーザにより更新されているので更新できませんでした。 {0}
  DATA_LOCK_SEQ_ERROR: '2002312',
  //同時にアップロード可能なファイル数は{0}つです。
  FILE_UPLOAD_NUM: '2002430',

  //{0}はひらがなのみ使用できます。
  VALIDATE_FULL_HIRA: '1010101',
  //{0}は全角カナか数字のみ使用できます。
  VALIDATE_FULL_KANA_NUM: '1010102',
  //{0}は全角カナのみ使用できます。
  VALIDATE_FULL_KANA: '1010103',
  //{0}は全角のみ使用できます。
  VALIDATE_FULL_WIDTH: '1010104',
  //{0}は半角ｶﾅか数字のみ使用できます。
  VALIDATE_HARF_KANA_NUM: '1010105',
  //{0}は半角ｶﾅのみ使用できます。
  VALIDATE_HARF_KANA: '1010106',
  //{0}は半角のみ使用できます。
  VALIDATE_HARF_WIDTH: '1010107',
  //{0}は有効な携帯電話番号ではありません。
  VALIDATE_TEL1: '1010108',
  //{0}は有効な固定電話番号ではありません。
  VALIDATE_TEL2: '1010109',
  //{0}は有効な電話番号ではありません。
  VALIDATE_TEL3: '1010110',
  //{0}は有効な郵便番号ではありません。
  VALIDATE_ZIPCODE: '1010111',
  //{0}は英数字か半角スペースのみ使用できます。
  VALIDATE_ALPHA_NUM_SPACE: '1010112',
  //{0}は英数字か記号のみ使用できます。
  VALIDATE_ALPHA_NUM_SYMBOL: '1010113',
  //{0}は有効なメールアドレスではありません。
  VALIDATE_MAIL_ADDRESS: '1010114',
  //{0}はハイフンか数字のみ使用できます
  VALIDATE_TELCODE: '1010115',
  //国コードと電話番号の合計桁数は{0}文字以内にしてください。
  VALIDATE_TELMAX: '1010116',
  //正しい%1$sを選択してください。
  VALIDATE_INCORRECT_SELECT: '1010117',
  //{0}が正しくありません。
  VALIDATE_TOROKUNO: '1010118',
  //郵便番号、都市名のどちらかを入力してください。
  HISSERR: '1010211',
  //国名は必須になります。
  COUNTRYERR: '1010212',
  //該当の住所は存在しません。
  NOTEXIST: '1010213',
  //リクエストに失敗しました。
  RIQESTERR: '1010214',
  //お客様コードが間違っています。
  KOKYACDERR: '1010215',
};

export default $sMsg;
