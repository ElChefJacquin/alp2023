x = Number(prompt("Insira o ano desejado:"))
function calculo (ano) { return Math.ceil(ano/100) };
y = calculo(x)
alert(`O ano ${x} corresponde ao século ${y}`)