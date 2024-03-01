// Captura todos os clientes que fizeram encomendas
var Compradores = document.querySelectorAll(".Compradores");

// Passa por cada cliente, calculando o valor total
Compradores.forEach(function(Compradores) {
    // Captura a quantidade encomendada
    var qntd = parseFloat(Compradores.querySelector(".qntd").textContent);

    // Captura o valor unitário do produto
    var unitario = parseFloat(Compradores.querySelector(".vl").textContent);
    Compradores.querySelector(".vl").textContent = formatacao(unitario);

    // Captura o total

    var total = parseFloat(Compradores.querySelector(".Tt").textContent);

    // Valida a quantidade
    if (validaQNTD(qntd) == false) {
        // Quantidade NOK, avise o usuário
        Compradores.querySelector(".qntd").textContent = "QNTD INVÁLIDA!";
        Compradores.querySelector(".qntd").style.color = "red";
    } // Valida o valor 
    else if (validaValor(unitario) == false) {
        // Valor NOK, avise o usuário
        Compradores.querySelector(".vl").textContent = "VALOR INVÁLIDA!";
        Compradores.style.backgroundColor = "red";
    } else {
        // Valor OK, pode prosseguir
        // Calcula o valor total da encomenda
        Compradores.querySelector(".Tt").textContent = formatacao(calculaTotal(qntd, unitario));
    }
});

    // Função para calcular o valor total da encomenda
    function calculaTotal(qntd, unitario) {        
        total = qntd * unitario;
        return total
}
    // Válida a quantidade
    function validaQNTD(qntd) {        
        valida = true;
        if (qntd < 1 || isNaN(qntd)) {
            valida = false;
        }
        return valida;
}
    // Válida a valor
    function validaValor(valor) {        
        valida = true;
        if (valor < 1 || isNaN(valor)) {
            valida = false;
        }
        return valida;
}

// Válida a valor
function formatacao(valor) {        
    parseFloat(valor);
    return valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}












//var titulo = document.querySelector(".titulo");
//titulo.textContent = "Lista de encomendas";

//var linha = document.querySelectorAll(".Compradores");

//for(var i =0; i < linha.length; i++){
    //linha[i].querySelector(".Tt").textContent = linha[i].querySelector(".qntd").textContent * linha[i].querySelector(".vl").textContent}

// Valida a quantidade
//if (qntd < 1 || isNaN(qntd)) {
    // Quantidade NOK, avise o usuário
//    Compradores.querySelector(".qntd").textContent = "QNTD INVÁLIDA!";
//    Compradores.querySelector(".qntd").style.color = "red";
//} // Valida o valor 
//else if (unitario < 1 || isNaN(unitario)) {
    // Valor NOK, avise o usuário
 //   Compradores.querySelector(".vl").textContent = "VALOR INVÁLIDA!";
 //   Compradores.style.backgroundColor = "red";
//} else {
    // Valor OK, pode prosseguir
    // Calcula o valor total da encomenda
//    Compradores.querySelector(".Tt").textContent = calculaTotal(qntd, unitario);
//}
//});