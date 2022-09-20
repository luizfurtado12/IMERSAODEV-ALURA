// var name = prompt("digite seu nome")
// console.log('Bem vindo luiz')
function nina(e) {
  if (e.code == "Enter") {
    CalcNotas();
  }
}

function CalcNotas() {
  const lista_id = [
    "primeira_nota_1",
    "segunda_nota_1",
    "primeira_nota_2",
    "segunda_nota_2",
    "primeira_nota_3",
    "segunda_nota_3",
    "primeira_nota_4",
    "segunda_nota_4",
  ];
  const lista_notas = [];
  for (i = 0; i < lista_id.length; i++) {
    lista_notas.push(parseFloat(document.getElementById(lista_id[i]).value));
  }
  var soma_bim1 = lista_notas[0] + lista_notas[1]  // lista_notas.slice(0, 2)
  var soma_bim2 = lista_notas[2] + lista_notas[3]  // lista_notas.slice(2, 4)
  var soma_bim3 = lista_notas[4] + lista_notas[5]  // lista_notas.slice(4, 6)
  var soma_bim4 = lista_notas[6] + lista_notas[7]  // lista_notas.slice(6, 8)
  var md1 = document.getElementById("media1")
  var md2 = document.getElementById("media2")
  var md3 = document.getElementById("media3")
  var md4 = document.getElementById("media4")
  md1.innerHTML = (soma_bim1 / 2).toFixed(1);
  md2.innerHTML = (soma_bim2 / 2).toFixed(1);
  md3.innerHTML = (soma_bim3 / 2).toFixed(1);
  md4.innerHTML = (soma_bim4 / 2).toFixed(1);
}

function aprovar() {
  var media1 = parseFloat(document.getElementById("media1").innerText);
  var media2 = parseFloat(document.getElementById("media2").innerText);
  var media3 = parseFloat(document.getElementById("media3").innerText);
  var media4 = parseFloat(document.getElementById("media4").innerText);
  var resultado = (media1 + media2 + media3 + media4) / 4;
  var output = document.getElementById("saida");
  var confimacao = {
    true: "Resultado: Você foi aprovado.",
    false: "Resultado: Você foi reprovado.",
  };
  v = verificar(resultado);
  output.innerHTML = confimacao[v] + " Nota: " + resultado.toFixed(1);
}

function verificar(nota) {
  if (7 <= nota) {
    return true;
  }
  return false;
}
