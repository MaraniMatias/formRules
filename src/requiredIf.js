const { isNullOrUndefined, isEmptyArray } = require("./utils");

const message = "El campo es obligatorio.";

function validate(value) {
  if (isNullOrUndefined(value) || isEmptyArray(value)) return false;
  if (value === false) return false;
  return !!String(value).trim().length;
}

module.exports = (required_if) => (value) =>
  required_if ? validate(value) || message : true;
