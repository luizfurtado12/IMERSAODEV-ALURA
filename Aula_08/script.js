// atualizações: exibit imagems da carta 
// refatorar o codigo
// cria uma funcão para exibir as cartas no html
// import cartar from caminho
var cartas = [
    {
        nome:"Goku",
        img: "https://i.pinimg.com/474x/15/ab/9e/15ab9efe55c9d8ddaf809ec28bb94170.jpg",
        atributos: {
            ataque: 89,
            defesa: 66,
            mp: 75
    }},
    {
        nome: "Vegetta",
        img: "https://a-static.mlcdn.com.br/1500x1500/quadro-c-moldura-dragon-ball-vegeta-super-saiyajin-fj-utilitys/fjutilitys/11622177024/5994513a025b8007e752759911a875e1.jpg",
    atributos: {
        ataque: 80,
        defesa: 79,
        mp: 75
    }},
    {
        nome: "Gohan",
        img: "https://i.pinimg.com/736x/55/c2/23/55c2236e44e2f305d9e238b61305afb8.jpg",
        atributos: {
            ataque:74,
            defesa: 70,
            mp: 80
        }
    },
    {
        nome: "Picollos",
        img: "https://i.pinimg.com/564x/b6/78/32/b678324f5032aa04fd2eb5e3e32ec4a6.jpg",
        atributos: {
            ataque: 70,
            defesa: 80,
            mp: 59
        }
    },
    {
        nome: "Majin buu",
        img: "https://dragonball.guru/wp-content/uploads/2021/03/majin-buu-happy-824x490.jpg",
        atributos: {
            ataque: 88,
            defesa:85,
            mp:87
        }
    },
    {
        nome: "Freeza",
        img: "https://i.pinimg.com/736x/ee/ba/85/eeba858e55bff304809e19f75ce1785a.jpg",
        atributos: {
            ataque: 87,
            defesa: 84,
            mp:79
        }
    },
    {
        nome: "Broly",
        img: "https://i.pinimg.com/originals/f1/8b/3d/f18b3d020cd505c2ff5577ac31089a76.jpg",
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

    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnSortear").disabled = true;
    exibir_carta_jogador()
    exibir_carta_maquina()
}

function exibir_carta_jogador(){
    var divjogador = document.getElementById("carta-jogador");
    divjogador.style.backgroundImage = 'url(' + carta_jogador.img + ')';
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    var taghtml = "<div id='opcoes' class='carta-status'>";
    elemento = "";
    for (const atributo in carta_jogador.atributos) {
        elemento += "<input type='radio' name='atributo' value=" + atributo + ">" + atributo + ": " + carta_jogador.atributos[atributo] + "<br>";
    }
    var nome = '<p class="carta-subtitle">' + carta_jogador.nome + '</p>'
    // document.getElementById("opcoes").innerHTML = elemento;
    divjogador.innerHTML = moldura + nome + taghtml + elemento + "</div>";
}

function exibir_carta_maquina() {
    var divmaquina = document.getElementById("carta-maquina");
    divmaquina.style.backgroundImage = 'url(' + carta_maquina.img + ')';
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    var taghtml = "<div id='opcoes' class='carta-status'>";
    elemento = "";
    for (const atributo in carta_maquina.atributos) {
        elemento += "<p name='atributo'>" + atributo + ": " + carta_maquina.atributos[atributo] + "</p>";
    }
    var nome = '<p class="carta-subtitle">' + carta_maquina.nome + '</p>';
    // document.getElementById("opcoes").innerHTML = elemento;
    divmaquina.innerHTML = moldura + nome + taghtml + elemento + "</div>";
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
