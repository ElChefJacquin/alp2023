ano = Number(prompt("Insira o ano que deseja verificar"));

if ((0 == ano % 4) && (0 != ano % 100) || (0 == ano % 400)) {
    alert(`O ano ${ano} é bissexto!`)
} else {
    alert(`O ano ${ano} não é bissexto!`)
}

