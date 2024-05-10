/* Ação na linha da tabela

var encomendas = document.querySelectorAll(".cliente");

encomendas.forEach(function(linha){
    linha.addEventListener("dblclick", function(){
        console.log("Duplo clique!");
        this.remove();
    });
});*/

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        //Captura a TR da TD que sofreu o duplo clique e remove
        event.target.parentNode.remove();
    }, 500);
    
    console.log(event.target);
});