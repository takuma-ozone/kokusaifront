/**
 * Custom Validation Rules
 *
 * @file tel
 * 電話番号チェックを行う
 */
import $rMessage from '../helpers/rdev.msg';
import $sMsg from '../sMsg';

export default {
	getMessage(field, args) {
		if ((args.indexOf('KEITAI') >= 0) && (args.indexOf('KOTEI') === -1)) { // 携帯電話
			return $rMessage.get($sMsg.VALIDATE_TEL1, field)

		} else if ((args.indexOf('KOTEI') >= 0) && (args.indexOf('KEITAI') === -1)) { // 固定電話
			return $rMessage.get($sMsg.VALIDATE_TEL2, field)

		} else { // 指定なし or 両方指定
			return $rMessage.get($sMsg.VALIDATE_TEL3, field)
		}
	},
	validate(value, args) {
		if (Array.isArray(value)) {
			return value.every(val => this.validate(val, args))
		}
		if (value == null || value === '') {
			return true
		}
		// ハイフンを除去して判定
		const tel = value.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');

		if ((args.indexOf('KEITAI') >= 0) && (args.indexOf('KOTEI') === -1)) { // 携帯電話
			return !!tel.match(/^(0[5-9]0[0-9]{8})$/);

		} else if ((args.indexOf('KOTEI') >= 0) && (args.indexOf('KEITAI') === -1)) { // 固定電話
			return !!tel.match(/^(0[1-9][1-9][0-9]{7})$/);

		} else { // 指定なし or 両方指定
			return !!tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/);
		}
	}
}
