const cashValid = /^([1-9]{1}\d*|0)([,.]\d{1,2})?$/;
// const message = "El campo solo puede un moto valido.";
const message = "Monto no valido.";

/**
 * @name Validation
 * @param {string} value Text to validate
 * @return {boolean} return true if value is valid else false
 */
function validate(value) {
  // Valid required with required rule
  if (!value) return true;
  return cashValid.test(String(value));
}

module.exports = () => (value) => validate(value) || message;
