let qtdPar = 0;
let somaPar = 0;
let somaGeral = 0;
let numero;

do {
  numero = parseInt(prompt("Digite um número positivo (ou zero para sair):"));

  if (numero !== 0 && numero >= 0) {
    somaGeral += numero;

    if (numero % 2 === 0) {
      qtdPar++;
      somaPar += numero;
    }
  } else if (numero == 0) {
    document.write("Resultados:<br>");
  } else {
    document.write("Por favor, digite um valor válido.");
  }
} while (numero !== 0);

if (qtdPar > 0) {
  let mediaPar = somaPar / qtdPar;
  document.write(`Média dos valores pares: ${mediaPar}<br>`);
}

let mediaGeral = somaGeral / qtdPar;

document.write(`Quantidade de números pares: ${qtdPar}<br>`);
document.write(`Quantidade de números ímpares: ${qtdPar}<br>`);
document.write(`Média geral: ${mediaGeral}<br>`);
