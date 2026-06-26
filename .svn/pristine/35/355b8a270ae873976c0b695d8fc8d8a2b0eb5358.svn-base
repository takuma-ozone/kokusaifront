/**
 * Custom Validation Rules
 *
 * @file half_kana_num
 * 半角ｶﾅ・数字チェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

export default {
	getMessage(field, args) {
		return $rMessage.get($sMsg.VALIDATE_HARF_KANA_NUM, field)
	},
	validate(value, args) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}
		if (value == null || value === '') {
			return true
		}
		if(args.indexOf('HALF_SPACE') >= 0) {
			return !!value.match(/^[ｧ-ﾝﾞﾟ\-0-9 ]*$/); // 半角スペースを許す
		} else {
			return !!value.match(/^[ｧ-ﾝﾞﾟ\-0-9]*$/); // 半角スペースを許さない
		}
	}
}
