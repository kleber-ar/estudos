const gerarCodigoAleatorio = () => {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const comprimentoCodigo = 12;

  let codigo = "";
  for (let i = 0; i < comprimentoCodigo; i++) {
    if (i === 2 || i === 9) {
      codigo += caracteres.charAt(Math.floor(Math.random() * 10) + 26);
    } else {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  }

  return codigo;
};

// Exemplo de uso:
const codigoGerado = gerarCodigoAleatorio();
console.log(codigoGerado);
