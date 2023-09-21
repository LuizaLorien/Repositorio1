let Num, i

num = parseInt(prompt("Insira um valor: "));

if (!isNaN(num)) {
    alert(`A tabuada de ${num} é:`);
    for(i = 1; i <=10; i++){
        alert(`${num} x ${i} = ${num * i}`);
    }
}else{
     alert("Número inválido.")
}

