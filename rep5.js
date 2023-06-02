var base = Number(prompt("Digite a base:"));
var expoente = Number(prompt("Digite o expoente:"));
var resultado = 1;
for (let i = 0; i < expoente; i++) {
resultado *= base;
}
console.log(`${base} elevado a ${expoente} é ${resultado}`);
