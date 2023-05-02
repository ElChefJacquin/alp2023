const questao1 = document.getElementById("0501");
const questao2 = document.getElementById("0502");
const questao3 = document.getElementById("0503");
const questao4 = document.getElementById("0504");
const questao5 = document.getElementById("0505");
const questao6 = document.getElementById("0506");
const questao7 = document.getElementById("0507");
const questao8 = document.getElementById("0508");

questao1.addEventListener("click", function () {
var v1 = (8+9+7)/3;
var v2 = (5+6+7)/3;
var v3 = (v2+v1)/2;
alert(`A média final das notas é de ${v3}`)
});

questao2.addEventListener("click", function () {
var valor1 = Number(prompt('Insira o primeiro valor:'));
var quant1 = Number(prompt('Insira a quantidade:'));
var valor2 = Number(prompt('Insira o segundo valor:'));
var quant2 = Number(prompt('Insira a quantidade:'));
var ipi = Number(prompt('Insira o imposto (sem porcentagem):'));
var cal = (valor1* quant1 + valor2 * quant2) * (ipi / 100 + 1);
alert(`O valor com o imposto fica ${cal.toFixed(2)}`);
});

questao3.addEventListener("click", function () {
var salarioa = Number(prompt('Insira o salário mínimo atual:'));
var salariob = Number(prompt('Insira o seu salário atual:'));
var s = salariob / salarioa;
alert(`Você ganha aproximadamente ${s.toFixed(2)} salários mínimos`);
});

questao4.addEventListener("click", function () {
var numero = Number(prompt('Insira um número inteiro:'));
var sucessor = numero + 1;
var antecessor = sucessor - 2;
alert(`Seu antecessor é ${antecessor} e o sucessor é ${sucessor}.`);
});

questao5.addEventListener("click", function () {
var va1 = Number(prompt('Insira o valor de A:'));
var va2 = Number(prompt('Insira o valor de B:'));
alert(`Valor trocado de A é ${va2} e de B é ${va1}`);
});

questao6.addEventListener("click", function () {
var valor = Number(prompt('Insira o valor do seu produto adquirido aqui na loja mamão com açúcar:'));
var pre2 = valor / 2;
var pre3 = valor / 3;
var pre4 = valor / 4;
var pre5 = valor / 5;
alert(`Parcelas disponíveis para ${valor.toFixed(2)}:\n1x de ${valor.toFixed(2)}\n2x de ${pre2.toFixed(2)}\n3x de ${pre3.toFixed(2)}\n4x de ${pre4.toFixed(2)}\n5x de ${pre5.toFixed(2)}`);
});

questao7.addEventListener("click", function () {
var custo = Number(prompt('Insira o custo:'));
var percentual = Number(prompt('Insira o percentual:'));
var cal = custo * (percentual / 100);
var vf = cal + custo;
alert(`O valor de venda é $${vf}`);
});

questao8.addEventListener("click", function () {
let num1 = Number(prompt("Insira o primeiro valor:"));
let num2 = Number(prompt("Insira o segundo valor:"));

let soma = num1+num2;
let sub = num1-num2;
let multi = num1*num2;
let div = num1/num2;

alert(`Soma = ${soma.toFixed(2)}\n Subtração = ${sub.toFixed(2)}\n Multiplicação = ${multi.toFixed(2)}\n Divisão = ${div.toFixed(2)}`);
});