//Minha versão de sucesso

//var titulo = document.querySelector(".titulo");
//titulo.textContent = "Lista de encomendas";

//var linha = document.querySelectorAll(".Compradores");

//for(var i =0; i < linha.length; i++){
    //linha[i].querySelector(".Tt").textContent = linha[i].querySelector(".qntd").textContent * linha[i].querySelector(".vl").textContent}


// Versão da Prô

// Captura todos os clientes que fizeram encomendas
var Compradores = document.querySelectorAll(".Compradores");

// Passa por cada cliente, calculando o valor total
Compradores.forEach(function(Compradores) {
    // Captura a quantidade encomendada
    var qntd = parseInt(Compradores.querySelector(".qntd").textContent);

    // Captura o valor unitário do produto
    var unitario = parseFloat(Compradores.querySelector(".vl").textContent);

    // Valida a quantidade
    if (qntd < 1 || isNaN(qntd)) {
        // Quantidade NOK, avise o usuário
        Compradores.querySelector(".qntd").textContent = "QNTD INVÁLIDA!";
        Compradores.querySelector(".qntd").style.color = "red";
    } // Valida o valor 
    else if (unitario < 1 || isNaN(unitario)) {
        // Valor NOK, avise o usuário
        Compradores.querySelector(".vl").textContent = "VALOR INVÁLIDA!";
        Compradores.style.backgroundColor = "red";
    } else {
        // Valor OK, pode prosseguir
        // Calcula o valor total da encomenda
        Compradores.querySelector(".Tt").textContent = calculaTotal(qntd, unitario);
    }
    // Função para calcular o valor total da encomenda
    function calculaTotal(qntd, unitario) {
        var total = 0;
        total = qntd * unitario;
        return total;
}
    //if (vl < 1 || isNaN(vl)) {
        // Valor NOK, avise o usuário
       // Compradores.querySelector(".vl").textContent = "-";
   // }
   //if (qntd < 1 || isNaN(qntd)) {
        // Valor NOK, avise o usuário
       // Compradores.querySelector(".vl").textContent = "-";
   // }
});

