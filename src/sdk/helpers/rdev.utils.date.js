/*!
 * Rapid JavaScript Library
 *
 * Copyright(C) 1999- Sagawa Express Co.,Ltd. All rights reserved.
 * Copyright(C) 2010- SG SYSTEMS Co.,Ltd. All rights reserved.
 * Copyright(C) 2019 by Future Architect, Inc. Japan
 */

import moment from 'moment'

/**
 * @file RDEV 日付関連のユーティリティ・モジュール。
 * @author nagamachi
 */
const $rDateUtils = {
	/**
	 * Date Funcs
	 */
	formatShortYm (val) {
		return val === null ? '' : moment(val).format('YYMM')
	},
	formatShortYmSlash (val) {
		return val === null ? '' : moment(val).format('YY/MM')
	},
	formatYm (val) {
		return val === null ? '' : moment(val).format('YYYYMM')
	},
	formatYmSlash (val) {
		return val === null ? '' : moment(val).format('YYYY/MM')
	},
	formatShortYmd (val) {
		return val === null ? '' : moment(val).format('YYMMDD')
	},
	formatShortYmdSlash (val) {
		return val === null ? '' : moment(val).format('YY/MM/DD')
	},
	formatYmd (val) {
		return val === null ? '' : moment(val).format('YYYYMMDD')
	},
	formatYmdSlash (val) {
		return val === null ? '' : moment(val).format('YYYY/MM/DD')
	},

	/**
	 * Time Funcs
	 */
	formatHm (val) {
		return val === null ? '' : moment(val).format('HHmm')
	},
	formatHmColon (val) {
		return val === null ? '' : moment(val).format('HH:mm')
	},
	formatHms (val) {
		return val === null ? '' : moment(val).format('HHmmss')
	},
	formatHmsColon (val) {
		return val === null ? '' : moment(val).format('HH:mm:ss')
	},

	/**
	 * DateTime Funcs
	 */
	formatYmdHm (val) {
		return val === null ? '' : moment(val).format('YYYYMMDDHHmm')
	},
	formatYmdHmSlash (val) {
		return val === null ? '' : moment(val).format('YYYY/MM/DD HH:mm')
	},
	formatYmdHms (val) {
		return val === null ? '' : moment(val).format('YYYYMMDDHHmmss')
	},
	formatYmdHmsSlash (val) {
		return val === null ? '' : moment(val).format('YYYY/MM/DD HH:mm:ss')
	}
}

export default $rDateUtils;
