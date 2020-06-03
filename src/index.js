// https://github.com/logaretm/vee-validate/tree/master/src/rules
// https://vuetifyjs.com/en/components/forms#validation-with-submit-clear
// https://github.com/validatorjs/validator.js
// import isLength from "validator/lib/isLength";

module.export. alpha_num =require( "./alphaNum");
module.export. alpha_spaces =require( "./alphaSpaces");
module.export. alpha_spaces_num_lodash =require("./alphaSpacesNumLodash");
module.export. cash =require( "./cash");
module.export. email =require( "./email");
module.export. lapsetext =require("./lapsetext");
module.export. numeric =require( "./numeric");
module.export. decimal =require( "./decimal");
module.export. page_intervals =require( "./pageIntervals");
module.export. password =require("./password");
module.export. password_equal =require( "./passwordEqual");
module.export. phone_number =require("./phoneNumber");
module.export. required =require("./required");
module.export. required_if =require("./requiredIf");
module.export. cuit_cuil =require( "./cuitCuil");

const { between, max, min } =require("./lengthRules");
module.export.between = between
module.export.max = max
module.export.min= min

