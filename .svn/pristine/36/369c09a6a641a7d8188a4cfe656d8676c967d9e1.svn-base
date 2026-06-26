/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

/**
 * @file RDEV ロジックの定数モジュール
 * @author  nagamachi
 */
const $rConst = {
  //SGS追記
  CSRF_TOKEN: 'RDEV-CSRF-Token',
  SESSION_KEY: 'unique_key',
  /*
   * rdev設定
   */
  /** RESTID prefix */
  KEY_RESTID_PREFIX: '/rest/rdev',
  /** デフォルトキャッシュキー */
  DEFAULT_CACHE_KEY: 'rdev.savingCache',
  /** クッキーキー（プロパティ） */
  COOKIE_KEY_PROP: 'rdev.core.prop',
  /** クッキーキー（メッセージ） */
  COOKIE_KEY_MESSAGE: 'rdev.core.message',
  /** クッキーキー（一時） */
  COOKIE_KEY_TEMP: 'rdev.core.temp',
  /** セッションストレージ：グローバルキー */
  SESSION_STORAGE_RDEV: '__RDEV',
  /** セッションストレージ：グローバルキー */
  SESSION_STORAGE_IS_BROAD: '__BROAD__',

  /** 処理：登録 */
  PROCESS_INSERT: 'INSERT',
  /** 処理：更新 */
  PROCESS_UPDATE: 'UPDATE',
  /** 処理：削除 */
  PROCESS_DELETE: 'DELETE',
  /** 処理：検索 */
  PROCESS_SELECT: 'SELECT',

  /*
   * リクエストキー
   */
  /** functionId */
  REQUEST_FUNCTION: '$functionId',
  /** query */
  REQUEST_QUERY: '$query',
  /** convert */
  REQUEST_CONVERT: '$convert',
  /** check */
  REQUEST_CHECK: '$check',
  /** update */
  REQUEST_UPDATE: '$update',
  /** format */
  REQUEST_FORMAT: '$format',
  /** condition */
  REQUEST_CONDITION: '$condition',

  /*
   * 画面
   */
  /** 自動確認画面作成 ボタン：戻る */
  RETURN_BUTTON_ID: 'escBtn',
  RETURN_BUTTON_NAME: 'ESC:キャンセル',
  /** 自動確認画面作成 ボタン：実行 */
  EXECUTE_BUTTON_ID: 'execute',
  EXECUTE_BUTTON_NAME: '実行',
  /** 自動確認・更新画面 ボタンイメージ */
  RETURN_BUTTON_IMG: '../common/images/btn_back.gif',
  CONFIRM_BUTTON_IMG: '../common/images/btn_confirm.gif',
  EXECUTE_BUTTON_IMG: '../common/images/btn_regist.gif',

  /** 自動確認画面 表示イメージID */
  KEY_CONFIRM_IMG: '_confirmimg',

  /** 完了画面 ファンクション引数：CUDID (登録：01、更新：02、削除：03) */
  KEY_CUDID: 'cudId',
  cudId: { INSERT: '01', UPDATE: '02', DELETE: '03' },
  /** 完了画面 ファンクション引数：CUD名称 (登録/更新/削除)*/
  KEY_CUDNAME: 'cudName',
  cudName: { INSERT: '登録', UPDATE: '更新', DELETE: '削除' },

  /** 完了画面 ファンクション引数：画面ID */
  KEY_NEXT_SCREENID: 'nextScreen',

  /*
   * サーバエラー
   */
  /** セッションエラー */
  SESSION_ERROR: 'session.error',
  /** ファイルアップロードエラー **/
  FILEUPLOAD_ERROR: 'fileupload.error',
  /** アクセス制御エラー **/
  ACCESS_CONTROL_ERROR: 'access.control.error',
  /** 開閉局エラー */
  KAIHEIKYOKU_ERROR: 'kaiheikyoku.error',
  /** バリデーションエラー */
  VALLIDATION_ERROR: 'server.validation.error',
  /** 不正操作（CSRF） */
  CSRF_ERROR: 'server.csrf.error',
  /** 権限エラー */
  AUTH_ERROR: 'server.auth.error',
  /** その他（サーバエラー） */
  OTHER_ERROR: 'server.other.error',

  /*
   * DOMEException
   */
  /** ネットワークエラーが発生した */
  NETWORK_ERR: 19,

  /*
   * スクリーンタイプ
   */
  /** スクリーンタイプ（入力） */
  SCREEN_TYPE_INPUT: 'INPUT',
  /** スクリーンタイプ（確認） */
  SCREEN_TYPE_CONFIRM: 'confirm',
  /** スクリーンタイプ（完了） */
  SCREEN_TYPE_COMPLETE: 'complete',

  /*
   * 画面要素動的追加
   */
  /** 内容入れ替え */
  INSERT_TYPE_REPLACE: '0',
  /** 前に挿入 */
  INSERT_TYPE_BEFORE: '1',
  /** 後に挿入 */
  INSERT_TYPE_AFTER: '2',
  /** 最初の子要素に挿入 */
  INSERT_TYPE_PREPEND: '3',
  /** 最後の子要素に挿入 */
  INSERT_TYPE_APPEND: '4',

  /*
   * rAccess
   */
  /** 結果フィールド名 */
  RACCESS_RESULT_FIELDS: 'fields',
  /** 結果データ */
  RACCESS_RESULT_ROWS: 'rows',

  /*
   * rTable
   */
  /** No */
  LABLE_NO: 'NO',
  /** ソートオプション */
  SORT_OPTIONS: 'sortOption',
  /** ソートアイコン */
  RTABLE_SORT_ICONS: ['◆', '▼', '▲'],
  /** ソート句 昇順 */
  SORT_ASC: 'asc',
  /** ソート句 降順 */
  SORT_DESC: 'desc',
  /** 表示区分：非表示 */
  NOT_DISPLAY_KBN_DISPLAY: '0',
  /** 表示区分：表示 */
  DISPLAY_KBN_DISPLAY: '1',
  /** 表示区分：必須表示 */
  DISPLAY_KBN_REQUIRED: '2',

  /*
   * セッション
   */
  /** ウィンドウ識別キー */
  SESSION_UNIQUE_TOKEN: 'wt',

  /*
   * クライアントキャッシュエイリアス
   */
  /** クライアントキャッシュエイリアス（区分） */
  CLIENT_CACHE_ALIAS_KBN: 'rKBN',
  /** クライアントキャッシュエイリアス（バリデーションメッセージ） */
  CLIENT_CACHE_ALIAS_VALIDATION: 'validationMessage',
  /** クライアントキャッシュエイリアス（ラベル） */
  CLIENT_CACHE_ALIAS_LABEL: 'label',
  /** クライアントキャッシュエイリアス（表示文言） */
  CLIENT_CACHE_ALIAS_LITERAL: 'literal',
  /** クライアントキャッシュエイリアス（通知情報） */
  CLIENT_CACHE_ALIAS_NOTICE: 'notice',
  /** クライアントキャッシュエイリアス（一覧項目HTML） */
  CLIENT_CACHE_ALIAS_LISTITEMHTML: 'listItemHtml',

  /*
   * 権限
   */
  CONTROL_CATEGORY_ITEM: '02',
  CONTORL_VALUE_ACTIVE: '01',
  CONTORL_VALUE_INACTIVE: '02',
  CONTORL_VALUE_HIDDEN: '03',
};

export default $rConst;
