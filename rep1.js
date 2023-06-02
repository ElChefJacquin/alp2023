var numero = Number(prompt("Informe o número que deseja saber a tabuada"))
let tabuada = ''

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    tabuada += `${numero}.${i} = ${resultado}\n`;
}

alert(tabuada)