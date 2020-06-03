const alphaNumeric = {
  // en: /^[0-9A-Z]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  // pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i
};
const defaultMessage = "El campo solo puede tener letras y numeros.";

/**
 * Check for alpha numeric string
 * @param {Object} config
 * @param {string} config.locale - Values es, en, pt
 * @param {string} config.message - The error message
 */
module.exports = ({ locale, message } = {}) => (value) =>
  alphaNumeric[locale || "es"].test(value) || message || defaultMessage;
