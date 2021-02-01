const message = "El campo inválido.";
const re = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?).\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

function validate(value) {
  // console.log(decimalDigit);
  // Valid required with required rule
  if (!value) return true;
  return re.test(String(value));
}

module.exports = () => (value) => validate(value) || message;
