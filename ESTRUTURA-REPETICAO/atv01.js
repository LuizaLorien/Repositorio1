let num, div = 0

debugger
do{ 
    num = Number(prompt("Digite um número: "))
    if(num === 0 || isNaN(num)){
        alert(`Digite um número válido`)
    }

    }while(num === 0 || isNaN(num)){

        for (let i = 0; i <= num; i++){
            if(num%i === 0){
                div++
            }
        }

        if(div === 2){
            document.write(`${num} é um número primo`)
        }else{
            document.write(`${num} não é um número primo`)
        }
    }