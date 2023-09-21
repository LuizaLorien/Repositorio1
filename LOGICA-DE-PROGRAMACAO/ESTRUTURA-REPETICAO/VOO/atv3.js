//após a validação, o programa exibe todos os numeros pares entre 1 e o numero informsdo pelo usuario.
let num, i, par


do{
    num = Number(prompt("Digite um númerooooo: "))
    if(num === 0|| isNaN(num)){{
        alert("Número inválido: ")
    }}

}while(num === 0|| isNaN(num))

for(i=1; i<=num; i++){
    if(i%2 === 0){
        console.log(i)
    }
}