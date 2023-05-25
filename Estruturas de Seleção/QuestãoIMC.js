document.write(`
<h3>Calcule seu IMC abaixo</h3>
<span id="anterior"></span>
<span id="antigo"></span>
<table id="tabela" class="table-responsive">
    <tr>
        <td>Nome:</td>
        <td><input type="text" name="Nome" id="nome" class="input-group-text"></td>
    </tr>
    <tr>
        <td>Peso:</td>
        <td><input type="text" name="Peso" id="peso" class="input-group-text"></td>
    </tr>
    <tr>
        <td>Altura:</td>
        <td><input type="text" name="Altura" id="altura" class="input-group-text"></td>
    </tr>
    <tr>
        <td colspan="2"><button id="salvar" class="btn">Salvar</button></td>
    </tr>
</table>
`);

salvar = document.getElementById("salvar");
nomeh = document.getElementById("nome");
pesoh = document.getElementById("peso");
alturah = document.getElementById("altura");

salvar.addEventListener("click", function () {
  nome = nomeh.value;
  peso = pesoh.value;
  altura = alturah.value;
  regex = Verificar(nome);
  if (regex == true) {
    alert("Seu nome contém numeros, tente novamente!");
    return;
  } else if (altura.includes(",")) {
    altura = altura.replace(",", ".");
    altura = Number(altura);
  }
  var imc = peso / altura ** 2;
  span = document.getElementById("anterior");
  anterior.innerHTML = `O seu IMC é ${imc.toFixed(2)} <br> ${verificar(imc)}`;
  horapc = new Date();
  localStorage.setItem("Hora", String(horapc));
  localStorage.setItem("IMC", String(imc));
  localStorage.setItem("nome", String(nome))
  sobrepor = document.getElementById("antigo");
  sobrepor.innerHTML = "";
});

function Verificar(str) {
  return /[0-9]/.test(str);
}

if (localStorage.getItem("IMC")) {
    Hora = new Date(localStorage.getItem("Hora"));
    HoraD = Hora.getDate();
    HoraM = Hora.getMonth() + 1;
    if (HoraM < 10) {
        HoraM = String(HoraM)
        HoraM = "0" + HoraM
    }
    HoraH = Hora.getHours();
    HoraMM = Hora.getMinutes();
    if (HoraMM < 10) {
        HoraMM = String(HoraMM)
        HoraMM = "0" + HoraMM
    }
    sobrepor = document.getElementById("antigo");
    IMC = localStorage.getItem("IMC");
    nomesalvo = localStorage.getItem("nome");
    IMC = Number(IMC)
    sobrepor.innerHTML = `Olá ${nomesalvo}, seu último IMC foi dia ${HoraD}/${HoraM} às ${HoraH}:${HoraMM}, o resultado foi ${IMC.toFixed(2)} (IMC), e ${verificar(IMC).replace("Seu IMC", "")}`
}

function verificar(imc) {
    if (imc<18.5) {
        return "Seu IMC indica que você está abaixo do peso!"
    } else if (imc>=18.5 && imc<=24.9) {
        return "Seu IMC indica que você está em niveis normais, muito bem!"
    } else if (imc>=25 && imc<=29.9) {
        return "Seu IMC indica que você está acima do peso (sobrepeso)!"
    } else if (imc>=30 && imc<=34.9) {
        return "Seu IMC indica que você está com Obesidade I!"
    } else if (imc>=35 && imc<=39.9) {
        return "Seu IMC indica que você está com Obesidade II!"
    } else {
        return "Seu IMC indica que você está com Obesidade III!"
    }
}