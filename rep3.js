var deposito = Number(prompt("Digite o valor do depósito inicial:"));
var juro = Number(prompt("Digite a taxa de juros (em %):"));
var saldo = deposito;

for (i = 0; i <= 24; i++) {
  var juros = saldo * (juro / 100);
  var saldo, totalJuros;
  saldo += juros;
  totalJuros += juros;
  console.log(`O mês ${i} tem ${saldo.toFixed(2)} de saldo`);
}
console.log(`Total de Juros: ${totalJuros.toFixed(2)}`);
