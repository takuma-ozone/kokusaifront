/**
 * Custom Validation Rules
 *
 * @file full_kana_num
 * 全角カナ・数字チェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

export default {
	getMessage(field, args) {
		return $rMessage.get($sMsg.VALIDATE_FULL_KANA_NUM, field)
	},
	validate(value, args) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}
		if (value == null || value === '') {
			return true
		}
		if(args.indexOf('FULL_SPACE') >= 0) {
			return !!value.match(/^[ァ-ンヴー０-９　]*$/); // 全角スペースを許す
		} else {
			return !!value.match(/^[ァ-ンヴー０-９]*$/); // 全角スペースを許さない
		}
	}
}
