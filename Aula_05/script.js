const filmesdb = new Set();

function nina(e) {
    if(e.code == "Enter") {
        document.getElementById("submit").click();
    };
};

function outputFilmes(setFilmes, lisaDeFilmes) {
    for (const x of setFilmes.values()){
        lisaDeFilmes.push(x)
    }
    return lisaDeFilmes
};

function listarMovie(filme) {
    var listFilmes = []
    var filmeImg = "<img src=" + filme + ">";
    var saida = document.getElementById("listaFilmes");
    if (!(filmesdb.has(filmeImg))) {
        filmesdb.add(filmeImg)
        console.log(listFilmes)
        saida.innerHTML = outputFilmes(filmesdb, listFilmes);
    } else {

        console.log(listFilmes, " Bloco Else")
        saida.innerHTML = outputFilmes(filmesdb, listFilmes);
    }
};

function remover(){
    console.log("Removendo o caralho da porra do filmo")
}


function adicionarFilme() {
    document.getElementById("listaFilmes").innerHTML = ""
    let endFilmeImg = document.getElementById("filme").value;
    if (endFilmeImg.endsWith(".png") || endFilmeImg.endsWith(".jpg")){
        listarMovie(endFilmeImg);
    }else{
        console.log("ERRO: endereço inválido")
    }
};
