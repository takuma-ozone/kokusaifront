import Vue from 'vue';
import VeeValidate, { validator, Validator } from 'vee-validate';
import veeJa from 'vee-validate/dist/locale/ja';

/**
 * Custom Validation Import
 */
import halfWidth from './validators/half_width';
import fullWidth from './validators/full_width';
import halfKana from './validators/half_kana';
import fullKana from './validators/full_kana';
import halfKanaNum from './validators/half_kana_num';
import fullKanaNum from './validators/full_kana_num';
import fullHira from './validators/full_hira';
import tel from './validators/tel';
import zipcode from './validators/zipcode';
import requiredAny from './validators/required_any';
import requiredAll from './validators/required_all';
import alphaNumSpace from './validators/alpha_num_space';
import alphaNumSymbol from './validators/alpha_num_symbol';
import mailAddress from './validators/mail_address';
import telcode from './validators/telcode';
import telmax from './validators/telmax';
import kokyakucd from './validators/kokyakucd';

Validator.localize('ja', veeJa);

const validatorOptions = {
  locale: veeJa,
  events: 'blur', // バリデーションの発火タイミングをblurイベントに変更
  fastExit: false,
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
};

const rValidator = new Vue({
  name: 'rValidator',
  methods: {
    /**
     * モジュールを初期化します
     * @returns {void}
     */
    init() {
      Vue.use(VeeValidate, validatorOptions);
      this.initValidators();
    },

    /**
     * 拡張バリデータを初期化します
     * @returns {void}
     */
    initValidators() {
      VeeValidate.Validator.extend('half_width', halfWidth);
      VeeValidate.Validator.extend('full_width', fullWidth);
      VeeValidate.Validator.extend('half_kana', halfKana);
      VeeValidate.Validator.extend('full_kana', fullKana);
      VeeValidate.Validator.extend('half_kana_num', halfKanaNum);
      VeeValidate.Validator.extend('full_kana_num', fullKanaNum);
      VeeValidate.Validator.extend('full_hira', fullHira);

      VeeValidate.Validator.extend('tel', tel);
      VeeValidate.Validator.extend('zipcode', zipcode);
      VeeValidate.Validator.extend('alpha_num_space', alphaNumSpace);
      VeeValidate.Validator.extend('alpha_num_symbol', alphaNumSymbol);
      VeeValidate.Validator.extend('mail_address', mailAddress);
      VeeValidate.Validator.extend('telcode', telcode);
      VeeValidate.Validator.extend('telmax', telmax, {
        hasTarget: true,
      });

      VeeValidate.Validator.extend('required_any', requiredAny, {
        hasTarget: true,
        computesRequired: true,
      });
      VeeValidate.Validator.extend('required_all', requiredAll, {
        hasTarget: true,
        computesRequired: true,
      });
      VeeValidate.Validator.extend('kokyakucd', kokyakucd);
    },
  },
});

export default rValidator;
