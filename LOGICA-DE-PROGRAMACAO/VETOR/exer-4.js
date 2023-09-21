let vetor = [],
  vetor2 = [],
  vetor3 = [];
let j = 0;

for (let i = 0; i < 3; i++) {
  vetor[i] = Number(prompt(`escreva um valor para o indice 1` + i + `:`));
  vetor3[i] = vetor[i];
  j++;

  vetor2[i] = Number(prompt(`digite um valor para o indice 2`));
  vetor3[j] = vetor2[i];
  j++;
}
document.write(`vetor 1 ${vetor}<br>`);
document.write(`vetor 2 ${vetor2}<br>`);

for (let i = 0; i < vetor3.length; i++) {
  console.log(vetor3[i]);
}
document.write(`vetor 3 ${vetor}<br>`);

//mostrar