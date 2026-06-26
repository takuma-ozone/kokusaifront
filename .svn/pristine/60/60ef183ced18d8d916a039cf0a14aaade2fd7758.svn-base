/**
 * Custom Validation Rules
 *
 * @file kokyakucd
 * 佐川急便顧客コードチェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

export default {
  getMessage(field, args) {
    return $rMessage.get($sMsg.KOKYACDERR, field);
  },
  validate(value, args) {
    var prev, back;
    if (value.length === 12) {
      prev = value.substr(0, 8);
      back = value.substr(8, 3);
      const ary = Array.from(value);
      let total = 0;
      total += +ary[0] * 4;
      total += +ary[1] * 3;
      total += +ary[2] * 2;
      total += +ary[3] * 9;
      total += +ary[4] * 8;
      total += +ary[5] * 7;
      total += +ary[6] * 6;
      total += +ary[7] * 5;
      total += +ary[8] * 4;
      total += +ary[9] * 3;
      total += +ary[10] * 2;
      const mod = total % 11;
      let result = 0;
      if (mod === 0) {
        result = 1;
      } else if (mod === 1) {
        result = 0;
      } else {
        result = 11 - mod;
      }
      if (value === prev.concat(back, result)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  },
};
