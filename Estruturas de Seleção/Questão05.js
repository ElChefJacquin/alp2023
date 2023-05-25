L1 = Number(prompt('Insira o 1º lado'));
L2 = Number(prompt('Insira o 2º lado'));
L3 = Number(prompt('Insira o 3º lado'));
let verif
if (L1+L2>L3 && L2+L3>L1 && L3+L1>L2) {
    verif = true
} else {
    alert("Seu triangulo não é válido!")
}

if (verif == true) {
  if (L1 == L2 && L2 == L3 && L1 == L3) {
    alert("O seu triângulo é equilátero!");
  } else if (L1 == L2 || L2 == L3 || L3 == L1) {
    alert("Seu triângulo é Isósceles");
  } else {
    alert("Seu triângulo é escaleno");
  }
}