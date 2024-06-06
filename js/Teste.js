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

    /*var total = parseFloat(Compradores.querySelector(".Tt").textContent);*/

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

var botaoAdicionar = document.querySelector(".btn");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Deu bom")
});

/*function Imprimir() {
    var Tabela = document.querySelectorAll(".Tabela");
    var linha = document.createElement("tr");
    var coluna = document.createElement("td");
    linha.appendChild(coluna);
}*/

function Imprimir() {
  var Tabela = document.querySelector(".Tabela");
  var linha = Tabela.insertRow(); // Inserir no final da tabela

  var linha1 = linha.insertCell(0); // Inserir célula na nova linha
  var linha2 = linha.insertCell(1);
  var linha3 = linha.insertCell(2);
  var linha4 = linha.insertCell(3);
  var linha5 = linha.insertCell(4);

  var nome = document.querySelector(".nome").value; // Obter valor dos campos do formulário
  var prod = document.querySelector(".prod").value;
  var quant = parseFloat(document.querySelector(".qtd").value);
  var val = parseFloat(document.querySelector(".val").value);

  linha1.textContent = nome;
  linha2.textContent = prod;
  linha3.textContent = quant;
  linha4.textContent = formatacao(val);
  if (validaQNTD(quant) == false) {
    // Quantidade NOK, avise o usuário
    linha3.textContent = "QNTD INVÁLIDA!";
    linha3.style.color = "red";
} // Valida o valor 
else if (validaValor(val) == false) {
    // Valor NOK, avise o usuário
    linha4.textContent = "VALOR INVÁLIDA!";
    linha.style.backgroundColor = "red";
} else {
    // Valor OK, pode prosseguir
    // Calcula o valor total da encomenda
    linha5.textContent = formatacao(calculaTotal(quant, val));
}
  

  // Limpar campos do formulário após a inserção
  form.reset();
}

//Função para validação da quantidade e do unitário
function validaEncomenda(encomenda){

    var erros =[];

    //Verifica se o nome foi informado
    if(encomenda.nome=="") {
        erros.push("O nome não pode ser vazio!");
    }

    //Verifica se a quantidade é maior que zero e um número
    if(encomenda.qtde <= 0 || isNaN(encomenda.qtde)){
        erros.push("A quantidade deve ser numérica e maior que 0.");
    }

    //Verifica se o valor unitário é maior que zero e um número
    if(encomenda.unitario <=0 || isNaN(encomenda.unitario)){
        erros.push("O valor unitário deve ser numérico e maior que 0.");
    }

    return erros;
}





















/*function certo(quant,val){
    if (validaQNTD(quant) == false) {
        // Quantidade NOK, avise o usuário
        linha3.textContent = "QNTD INVÁLIDA!";
        linha3.style.color = "red";
    } // Valida o valor 
    else if (validaValor(val) == false) {
        // Valor NOK, avise o usuário
        linha4.textContent = "VALOR INVÁLIDA!";
        linha.style.backgroundColor = "red";
    } else {
        // Valor OK, pode prosseguir
        // Calcula o valor total da encomenda
        linha5.textContent = formatacao(calculaTotal(quant, val));
    }
}*/

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