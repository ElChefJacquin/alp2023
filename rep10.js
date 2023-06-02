let tempmenor = Infinity;
let tempmaior = -Infinity;
let stemp, qttemp;
let cont = true;

while (cont) {
  let temt = parseFloat(prompt("Digite a temperatura (ou digite '0' para sair):"));
  if (temt === 0) {
    cont = false;
  } else if (isNaN(temt)) {
    document.write("Temperatura inválida");
  } else {
    if (temt < tempmenor) {
      tempmenor = temt;
    }
    if (temt > tempmaior) {
      tempmaior = temt;
    }
    stemp += temt;
    qttemp++;
  }
}

const mtemp = stemp / qttemp;

document.write(`Menor temperatura: ${tempmenor}<br>`);
document.write(`Maior temperatura: ${tempmaior}<br>`);
document.write(`Média das temperaturas: ${mtemp}<br>`);
