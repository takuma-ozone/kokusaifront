/**
 *************************************************************************************
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 * 画面ID: NSISBO08-D01
 * 画面名: 荷送人選択（ポップアップ）
 * 作成者: XXX
 * 更新履歴：
 * 更新日付		更新者		更新内容
 * 201X/XX/XX	XXX			設計書-新規作成
 *
 *************************************************************************************
 */
import NSISBO08D01Const from './NSISBO08D01Const.js';

// TODO: モデルに初期値がある場合はソースを修正してください
export default {
  NSISBO08D01Const: NSISBO08D01Const,
  transition: {},
  command: {
    ketteiBtnEnableFlg: false,
  },
  bind: {
    nisoninDtoList: [],
  },
  temporary: {},
  text1: '',

  /**
   * Getter Functions
   */
  // NSISBO08-B01_API_荷送人検索
  getNSISBO08B01Params() {
    return {};
  },

  /**
   * Setter Functions
   */
  // NSISBO08-B01_API_荷送人検索
  setNSISBO08B01Params() {
    this.bind.nisoninDtoList = response.nisoninDtoList;
    this.bind.nisoninDtoList.nisoninDto = response.nisoninDto;
    this.bind.nisoninDtoList.nisoninDto.nisoninCode = response.nisoninCode;
    this.bind.nisoninDtoList.nisoninDto.meisho1 = response.meisho1;
    this.bind.nisoninDtoList.nisoninDto.meisho2 = response.meisho2;
    this.bind.nisoninDtoList.nisoninDto.telNo = response.telNo;
    this.bind.nisoninDtoList.nisoninDto.postNo = response.postNo;
    this.bind.nisoninDtoList.nisoninDto.jusho1 = response.jusho1;
    this.bind.nisoninDtoList.nisoninDto.jusho2 = response.jusho2;
  },
};
