
function nina(even) {
    if (even.code == 'Enter') {
        document.getElementById("search").click();
    };
};

function Converter() {
    var out = document.getElementById("moeda-1");
    out.addEventListener('change', function(){
        console.log(out.value)
    })
    // var put = document.getElementById("moeda-2");
    // console.log(out)
    // console.log(put)
    var valor = parseFloat(document.getElementById("valor").value)
    var valorConvertido = valor * 5.25
    var msg = "O preço ficou R$ " + valorConvertido.toFixed(2).replace('.', ',')
    var output = document.getElementById("valorConvertido")
    output.innerHTML = msg;
};
