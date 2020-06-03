const message = "Caracteres inválidos.";

function validate(val) {
  const reg = /^[A-ZÁÉÓÚÍÑ\d-_\s'()º]*$/i;

  return reg.test(String(val));
}
module.exports = () => (value) => validate(value) || message;
