const message = "El campo inválido.";
const re = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

/**
 * Check if a mongo ID
 * @name Validation
 * @param {string} value Text to validate
 * @return {boolean} return true if value is valid else false
 */
function validate(value) {
  // Valid required with required rule
  if (!value) return true;
  return re.test(String(value));
}

/**
 * Check for mongo objectId string
 */
module.exports = () => (value) => validate(value) || message;
