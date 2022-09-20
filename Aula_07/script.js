var cartas = [
    {
        nome:"goku", 
        atributos: {
            ataque: 89,
            defesa: 66,
            mp: 75
    }},
    {
        nome: "vegetta",
    atributos: {
        ataque: 80,
        defesa: 79,
        mp: 75
    }},
    {
        nome: "gohan",
        atributos: {
            ataque:74,
            defesa: 70,
            mp: 80
        }
    },
    {
        nome: "picollos",
        atributos: {
            ataque: 70,
            defesa: 80,
            mp: 59
        }
    },
    {
        nome: "majin bull",
        atributos: {
            ataque: 88,
            defesa:85,
            mp:87
        }
    },
    {
        nome: "freeza",
        atributos: {
            ataque: 87,
            defesa: 84,
            mp:79
        }
    },
    {
        nome: "Brolly",
        atributos: {
            ataque: 88,
            defesa: 77,
            mp: 88
        }
    }
]

let carta_maquina = cartas[parseInt(Math.random() * cartas.length)];
let carta_jogador = cartas[parseInt(Math.random() * cartas.length)];

function sortearCarta(){
    while (carta_maquina == carta_jogador) {
        carta_jogador = cartas[parseInt(Math.random() * cartas.length)];
    }
    console.log(carta_jogador)

    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnSortear").disabled = true;
    elemento = "";
    for (const atributo in carta_jogador.atributos) {
        elemento += "<input type='radio' name='atributo' value=" + atributo + ">" + atributo;
    }
    document.getElementById("opcoes").innerHTML = elemento;
}

function obter_atrivuto(){
    var atributo_selecionado = document.getElementsByName("atributo");
    for(var i = 0; i < atributo_selecionado.length; i++){
        if(atributo_selecionado[i].checked){
            return atributo_selecionado[i].value
        }
    }
}

function jogar(){
    var atributo = obter_atrivuto();
    var jogada = carta_jogador.atributos[atributo];
    var jogada_pc = carta_maquina.atributos[atributo];
    
    if(jogada < jogada_pc) {
        document.getElementById("resultado").innerHTML = "Você perdeu";
    } else if(jogada_pc < jogada) {
        document.getElementById("resultado").innerHTML = "Você Ganhou";
    } else {
        document.getElementById("resultado").innerHTML = "Empate";
    }
}
