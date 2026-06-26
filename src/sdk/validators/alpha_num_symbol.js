/**
 * Custom Validation Rules
 *
 * @file alpha_num_symbol
 * 記号と英数字チェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

export default {
	getMessage(field, args) {
		return $rMessage.get($sMsg.VALIDATE_ALPHA_NUM_SYMBOL, field)
	},
	validate(value, args) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}
		if (value == null || value === '') {
			return true
		}
		return !!value.match(/^[0-9a-zA-Z| |!-\/:-@[-`{-~]+$/);
	}
}
