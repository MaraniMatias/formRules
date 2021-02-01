const message = "Caracteres inválidos.";

function validate(val) {
  // eslint-disable-next-line
  const reg = /^[A-ZÁÉÓÚÍÑ\d-_\s'()\[\]$%&=?¿<>,\.]*$/i;
  return reg.test(String(val));
}

module.exports = () => (value) => validate(value) || message;
