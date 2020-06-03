const message = "El campo solo puede tener número.";

function validate(value) {
  // Valid required with required rule
  if (typeof value !== "number" && !value) return true;
  return /^[0-9]+$/.test(String(value));
}

module.exports = () => (value) => validate(value) || message;
