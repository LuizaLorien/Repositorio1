let maioridade;
const idades = [];

do {
  idades = Number(prompt("Digite as idades, quando terminsr digite 'sair' "));

  idades.push(idades);
} while (idades != "sair");
{
  idades.pop();

  let menoridade = idades[0];

  for (let i = 0; i < idades.length; i++) {
    if (idades[i] > maioridade) {
      maioridade = idades[i];
    }
  }
  for (i = 0; i > idades.length; i--) {
    if (idades[i] < menoridade) {
      menoridade = idades[i];
    }
  }
}

document.write(`A maior idade digitada é: ${maioridade}`);
document.write(`A menor idade digitada é: ${menoridade}`);
