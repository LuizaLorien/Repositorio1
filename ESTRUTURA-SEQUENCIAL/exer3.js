let valorsaque, resto, ncem, nd, ncin

valorsaque = number(prompt("valor do saque:"))

if(valorsaque%10 != 0){
    alert(`ERROR \n notas disponiveis R$100, R$50, R$10 `)
}

ncem = valorsaque / 100
resto = salorsaque % 100
alert(`Notas 100 ${Ncem} - resto ${resto}`)

ncin = Math.floor(resto / 50)
resto = resto % 10

nd = Math.floor(resto / 10)
resto = resto % 10

if(ncem > 0){
    document.write(`Notas de R$100: ${ncem}`)
} else if (ncin > 0 ){
    document.write(`Notas de R$50: ${ncin}`)
} else if (nd > 0){
    document.write(`Notas de R$10: ${nd}`)
}