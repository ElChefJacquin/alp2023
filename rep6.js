let number = parseInt(prompt("Digite um número decimal: "));
let binary = "";
while (number > 0) {
let remainder = number % 2;
binary = remainder + binary;
number = Math.floor(number / 2);
}
document.write(`O número binário correspondente é: ${binary}`);