const moedas = {   // valores 
    euro: 5.10,
    dolar: 5.26,
    ienes: 0.037,
    libra_esterlina: 5.71,
    none: false
};

function nina(even) {
    if (even.code == 'Enter') {
        document.getElementById("search").click();
    };
};

function definir(moeda) {
    if(moedas[moeda]){
        var valor = parseFloat(document.getElementById("valor").value)
        var valorConvertido = valor * moedas[moeda]
        var msg = "R$ " + valorConvertido.toFixed(2).replace('.', ',')
        var output = document.getElementById("valorConvertido")
        output.innerHTML = msg;
    } else{
        var output = document.getElementById("valorConvertido")
        output.innerHTML = "";
    };
};

function Converter() {
    var moeda_1 = document.getElementById("moeda-1");
    moeda_1.addEventListener('change', function(){
        definir(moeda_1.value)
    });
};
