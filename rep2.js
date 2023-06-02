numero = Number(prompt("Informe o número que deseja o fatorial"))

if (numero!=0 && numero!=1) {
    vf = 1
    for(i=2; i<=numero; i++) {
        vf = vf*i    
    }
    alert(`O fatorial de ${numero} é ${vf}`)
} else {
    alert(`O fatorial de ${numero} é 1`)
}