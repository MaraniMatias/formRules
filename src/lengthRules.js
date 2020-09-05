function validateBetween(value, min, max) {
  // Valid only number, not if field is required
  if (!value) return true;
  return (
    (Number(min) <= String(value).length &&
      Number(max) >= String(value).length) ||
    `Longitud validad de ${min} a ${max}.`
  );
}
module.exports.between = ({ min, max }) => (value) =>
  validateBetween(value, min, max);

function validateMin(value, length) {
  // Valid only number, not if field is required
  if (!value) return true;
  return String(value).length >= length || `Longitud mínima es ${length}.`;
}
module.exports.min = (length) => (value) => validateMin(value, length);

function validateMax(value, length) {
  // Valid only number, not if field is required
  if (!value) return true;
  return String(value).length <= length || `Longitud máxima es ${length}.`;
}
module.exports.max = (length) => (value) => validateMax(value, length);
