let quantidade = parseInt(prompt("Digite a quantidade de elementos da sequência de Fibonacci que deseja imprimir:"));
let segundoAnterior = 1;
let anterior = 1;
let contador = 2;
document.write(`${anterior}, ${segundoAnterior}`);

while (contador < quantidade) {
  let proximo = anterior + segundoAnterior;
  document.write(`, ${proximo}`);
  segundoAnterior = anterior;
  anterior = proximo;
  contador++;
}
