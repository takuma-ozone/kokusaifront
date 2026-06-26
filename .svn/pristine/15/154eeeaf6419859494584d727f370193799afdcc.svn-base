/**
 * Custom Validation Rules
 *
 * @file telmax
 * 電話番号の桁数チェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

const MAX = 25;

const validate = {
	getMessage(field, args) {
		return $rMessage.get($sMsg.VALIDATE_TELMAX, String(MAX))
	},
	validate(value, [otherValue]) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}
		if (value == null || value === '') {
			return true;
		}
		if ((otherValue.length + value.length) > MAX) {
			return false;
		} else {
			return true;
		}
	},
}

export default validate;

