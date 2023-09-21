let vetor = [],
    aux;

for(let i = 0; i < 4;i++){
  vetorini[i] = Number(prompt(`Digite um número para o índice`))
}
//console.log(vetor.sort((a,b)=>a-b))
document.write(`Array antes da ordenação ${vetor} <br>`)

  for(let i=0;i<4;i++){
    for(let j = 0;j<4;j++){
       if(vetor[j] < vetor[j+1])[
        aux = vetor[j],
        vetor[j] = vetor[j+1],
        vetor[j+1] = aux
      ]
    }
  }