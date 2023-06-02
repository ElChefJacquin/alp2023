let numero = parseInt(prompt("Digite um número inteiro"));
if (numero >= 1) {
  let resultado = true;
  if (numero <= 1) {
    resultado = false;
  } else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        resultado = false;
        break;
      }
    }
  }
  
  if (resultado) {
    document.write(`O número ${numero} é primo.`);
  } else {
    document.write(`O número ${numero} não é primo.`);
  }
} else {
  document.write("Digite um número inteiro maior ou igual a 1.");
}
