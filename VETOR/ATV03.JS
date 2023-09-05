let produtos = [], qtd, i
debugger
do {
    alert("Quando desejar finalizar o programa digite 0")
    alert("Digite os produtos que deseja adicionar a lista(um por um): ")
    qtd = Number(prompt("Quantos produtos serão adicionados? "))
    i = qtd

    for(i=qtd; i != 0; i++){
        produtos = prompt("Produto: ")

        if(produtos = "0"){
            break
        }

    }
 document.write(`Lista: <br>${produtos[i]}<br>`)

} while (produtos != "0"){

}