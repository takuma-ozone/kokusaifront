/**
 * Custom Validation Rules
 *
 * @file half_width
 * 半角チェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

export default {
	getMessage(field, args) {
		return $rMessage.get($sMsg.VALIDATE_HARF_WIDTH, field)
	},
	validate(value, args) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}
		if (value == null || value === '') {
			return true
		}
		return !value.match(/[^\x01-\x7E]/) || !value.match(/[^\uFF65-\uFF9F]/);
	}
}
