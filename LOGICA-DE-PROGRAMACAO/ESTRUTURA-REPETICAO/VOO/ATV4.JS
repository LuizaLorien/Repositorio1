let i, num

do{ 
    confirm ("O programa vai continuar até que o número 0 seja detectado. Deseja continuar?")
debugger
    num = Number(prompt("digite um número: "))
    if(num % 2 === 0){
        alert(`O dobro de ${num} é: ${num * 2}`)
        
        }else if(num % 2 != 0){
            alert(`O triplo de ${num} é: ${num * 3}`)
        }

}while(num != 0){

}

