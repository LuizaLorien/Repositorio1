let Numero, raiz

Numero = Number(prompt("Digite um número para raiz quadrada"))

raiz = Math.sqrt(numero)
alert(raiz)

if(raiz == Math.floor(raiz)){
        alert(`a raiz do numero ${numero} é ${raiz}`)

}else{
    alert(`esse número nçao possui raiz exata`)
}