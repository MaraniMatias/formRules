/**
 * Basic string validations for using with vuetifyjs
 * I copy same rules from this repository
 * https://github.com/logaretm/vee-validate/tree/master/src/rules
 * https://github.com/validatorjs/validator.js
 * https://vuetifyjs.com/en/components/forms#validation-with-submit-clear
 * @module FormRules
 */

const { between, max, min } = require("./lengthRules");
module.exports.between = between;
module.exports.max = max;
module.exports.min = min;
module.exports.alpha_num = require("./alphaNum");
module.exports.alpha_spaces = require("./alphaSpaces");
module.exports.alpha_spaces_num_lodash = require("./alphaSpacesNumLodash");
module.exports.cash = require("./cash");
module.exports.email = require("./email");
module.exports.lapsetext = require("./lapsetext");
module.exports.numeric = require("./numeric");
module.exports.decimal = require("./decimal");
module.exports.page_intervals = require("./pageIntervals");
module.exports.password = require("./password");
module.exports.password_equal = require("./passwordEqual");
module.exports.phone_number = require("./phoneNumber");
module.exports.required = require("./required");
module.exports.required_if = require("./requiredIf");
module.exports.cuit_cuil = require("./cuitCuil");
module.exports.latitude_longitude = require("./latitudeLongitude");
