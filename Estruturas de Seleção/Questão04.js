a  = Number(prompt('Insira o coeficiente A'));
b  = Number(prompt('Insira o coeficiente B'));
c  = Number(prompt('Insira o coeficiente C'));
let delta 
delta = (b**2)-4*a*c
if (delta<0) {
    alert("Inválido! Tentando Novamente...")
    window.Location.reload();
} else if (delta==0) {
    alert("Delta é Nulo!");
} else {
    x1 = (-b + Math.sqrt(delta))/(2*a)
    x2 = (-b - Math.sqrt(delta))/(2*a)
    alert(`A 1º raiz é ${x1}, e a 2º ${x2}`)
}