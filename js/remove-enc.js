/* Ação na linha da tabela

var encomendas = document.querySelectorAll(".cliente");

encomendas.forEach(function(linha){
    linha.addEventListener("dbclick", function(){
        console.log("Duplo clique!");
        this.remove();
    });
});*/

var tabela = document.querySelector(".Tabela");

tabela.addEventListener("dbclick", function(event){
    //Captura a TR da TD que sofreu o duplo clique e remove
    event.target.parentNode.classList.add("fadeOut");
    event.target.parentNode.remove();
    console.log(event.target);
    // this.remove();
});