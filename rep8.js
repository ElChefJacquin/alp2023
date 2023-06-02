let somaIdade = 0;
let qtdIdade = 0;
let idade = 0;

do {
  idade = parseInt(prompt("Digite a idade (ou -1 para sair):"));

  if (idade >= 18) {
    somaIdade += idade;
    qtdIdade++;
  } else if (idade === 0 || idade < -1 || isNaN(idade)) {
    document.write("Idade inválida<br>");
  }
} while (idade !== -1);

if (qtdIdade > 0) {
  const mediaIdade = somaIdade / qtdIdade;
  document.write(`Soma das idades das pessoas maiores de idade: ${somaIdade}<br>`);
  document.write(`Média de idade das pessoas maiores de idade: ${mediaIdade}<br>`);
} else {
  document.write("Nenhuma pessoa maior de idade foi informada.<br>");
}
