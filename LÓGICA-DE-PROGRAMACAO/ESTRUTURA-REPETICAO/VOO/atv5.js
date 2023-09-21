let valorc, tipo, sair,valort


do{
    debugger
    tipo = prompt("Digite o tipo de conta (luz,água,energia,imposto...): ")
    valorc = Number(prompt("Digite o valor da conta: "))
    document.write(`Suas Contas: \n Conta de ${tipo}: ${valorc.toFixed(2)} \n`)

    valort = valort + valorc
    console.log(valorc)
    
    sair = confirm("Deseja continuar?");

    if(sair){
        break
    }else{
        continue
    }

}while(true){
    
}