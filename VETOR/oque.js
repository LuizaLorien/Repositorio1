let produto;
const produtos = []

do{
    produto = prompt("digite o nome do produto: ")
    produtos.push(produto)//adiciona item ao array

}while(produto != "sair")
produtos.pop()// remove ultimo item do array
document.write(`${produtos}`)