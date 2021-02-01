const message = "El campo inválido.";

function validate(decimalDigit = "1,2", value) {
  // console.log(decimalDigit);
  // Valid required with required rule
  if (!value) return true;
  const re = new RegExp(`^-?\\d+(?:\\.\\d{${decimalDigit}})?$`);
  return re.test(String(value));
}

module.exports = (decimalDigit) => (value) =>
  validate(decimalDigit, value) || message;
