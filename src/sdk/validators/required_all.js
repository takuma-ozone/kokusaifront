/**
 * Custom Validation Rules
 *
 * @file required_all
 * 指定した項目の全てが入力されているかどうか検証します。
 */
const validate = {
	getMessage(field, [otherVal]) {
		return field + ' / ' + [otherVal] + 'は全て必須です'
	},
	validate(value, [otherVal]) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}

		const result = {
			valid: true,
			data: { // Require-likeルールにする
				required: true
			}
		}

		const valueCheck = requiredCheck(value);
		const otherCheck = requiredCheck([otherVal]);
		result.valid = (valueCheck && otherCheck);

		return result;
	},
}

/**
 * Required Check
 */
function requiredCheck(val) {
	return !!String(val).trim().length;
}

export default validate;
