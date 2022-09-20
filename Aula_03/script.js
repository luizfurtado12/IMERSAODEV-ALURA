var numSecret = parseInt(Math.random() * 11)

function nina(evento) {
    if (evento.code == "Enter") {
        document.getElementById("Chute").click();
    };    
};

function reset() {
    numSecret = parseInt(Math.random() * 11)
    console.log(numSecret)
    var resetado = document.getElementById("resultado");
    resetado.innerHTML = "Digite um número de 0 a 10";
};

function Chutar() {
    var numChute = parseInt(document.getElementById("valor").value);
    var output = document.getElementById("resultado");
    if (numChute == numSecret){
        // console.log('Acertou!!!')
        output.innerHTML = "Você acertou!!!";
    } else if (numChute < 0 || numChute > 10) {
        output.innerHTML = "Você deve digitar um numero entre 0 a 10";
        // console.log('Você deve digitar um numero entre 0 a 10')
    } else if (numChute < numSecret) {
        output.innerHTML = "Número errado!!! É maior que " + numChute; 
        // console.log('Errou!!!')
    } else {
        output.innerHTML = "Número errado!!! É menor que " + numChute;
    }
    console.log(numChute)
};

function revelar() {
    var msg = document.getElementById("resultado")
    msg.innerHTML = "Número Secreto é " + numSecret
};
// var numSecret = reset()
