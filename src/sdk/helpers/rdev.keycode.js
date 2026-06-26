/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

// TODO: nagamachi キーイベントハンドル処理を追加

/**
 * @file RDEV キーコードモジュール
 * @author nagamachi
 */
const $rKeyCode = {
  /*
   * キー
   * 対応しているもののみ設定（ここに記載しているものは基本ブラウザで差異がない想定）
   */
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  L_CURSOR: 37, // カーソル←
  U_CURSOR: 38, // カーソル↑
  R_CURSOR: 39, // カーソル→
  D_CURSOR: 40, // カーソル↓
  INSERT: 45,
  DELETE: 46,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
};

export default $rKeyCode;
