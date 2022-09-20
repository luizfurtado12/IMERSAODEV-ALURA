class Jogador {
    constructor(nome, vitorias, empates, derrotas) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.empates = empates;
        this.derrotas = derrotas;
    }

    pontos(){
        return (this.vitorias * 3) + this.empates;  // return number
    }

    qtd_partidas(){
        return (this.derrotas + this.empates + this.vitorias);  // return number
    }
}


let jogador1 = new Jogador("Luiz", 0, 0, 0)
let jogador2 = new Jogador("Rafa", 0, 0, 0)
let jogador3 = new Jogador("Paulo", 0, 0, 0)
let jogadores = [jogador1, jogador2, jogador3]
console.log(jogadores[0].nome)

exibir_tabela(jogadores);

function resetar() {
    for(let i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        exibir_tabela(jogadores)
    }
}

function classificar() {
    let elemento_final = ""
    let copy_jogadores = jogadores.slice()
    let clas_jogadores = []
    for (let i = 0; i < jogadores.length; i++) {
        let pivo = findSmallestIndex(copy_jogadores) // index maior ponto
        // elemento_final +="<tr>";
        // elemento_final += "<td>" + jogadores[pivo].nome + "</td>";
        // elemento_final += "<td>" + jogadores[pivo].pontos() + "</td>";
        // elemento_final += "<td>" + jogadores[pivo].qtd_partidas() + "</td>";
        // elemento_final += "<tr>";
        elemt = copy_jogadores.pop(pivo)
        clas_jogadores.push(elemt);
    }
    for (let index = 0; index < clas_jogadores.length; index++) {
        console.log(clas_jogadores[index]);
    }
    console.log(clas_jogadores)
    // let tabela_final = document.getElementById("classificacao-final");
    // tabela_final.innerHTML = elemento_final;
}

function exibir_tabela(list_jogadores){
    elemento = ""
    for (let i = 0; i < list_jogadores.length; i++) {
        elemento += "<tr>";
        elemento += "<td>" + list_jogadores[i].nome + "</td>";
        elemento += "<td>" + list_jogadores[i].vitorias + "</td>";
        elemento += "<td>" + list_jogadores[i].empates + "</td>";
        elemento += "<td>" + list_jogadores[i].derrotas + "</td>"
        elemento += "<td>" + list_jogadores[i].pontos() + "</td>"
        elemento += "<td>" + list_jogadores[i].qtd_partidas() + "</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i + ")'>Empates</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i + ")'>Derrotas</button></td>"
        elemento += "</tr>"
    }
    var tabela = document.getElementById("tabelaJogadores");
    tabela.innerHTML = elemento;
}

function adicionarVitoria(index) {
    jogadores[index].vitorias++
    exibir_tabela(jogadores)
}

function adicionarEmpate(index) {
    jogadores[index].empates++
    exibir_tabela(jogadores)
}

function adicionarDerrota(index) {
    jogadores[index].derrotas++
    exibir_tabela(jogadores)
}

function quicksort(array) {
  if (array.length < 2) {
    // base case, arrays with 0 or 1 element are already "sorted"
    return array;
  } else {
   // recursive case
   let pivot = array[0];
   // sub-array of all the elements less than the pivot
   let less = array.slice(1).filter(function(el) { return el <= pivot; });
   // sub-array of all the elements greater than the pivot
   let greater = array.slice(1).filter(function(el) { return el > pivot; });
   return quicksort(greater).concat([pivot], quicksort(less));
  }
}

function findSmallestIndex(array) {
    var bigElement = array[0].pontos(); // Stores the smallest value
    var bigestIndex = 0; // Stores the index of the smallest value
    for (var i = 0; i < array.length; i++) {
      if (bigElement < array[i].pontos()) {
        bigElement = array[i].pontos();
        bigestIndex = i;
      }
    }
    return bigestIndex;
}