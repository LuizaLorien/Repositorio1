//crie um programa que receba os salarios dos funcionarios e armazene em um array. depois esclua o menor e o maior salario e mostre a média.

let salario;
let salarios = [];
while (true) {
  salario = Number(prompt("Digite o salário do funcionário: "));

  if (salario == "") {
    break;
  }
}
salarios.append(float(salario));

// Exclua o menor e o maior salário.
salarios.sort();
salarios.pop(0);
salarios.pop(-1);

//Mostre a média.
media = sum(salarios) / len(salarios);
document.write("A média dos salários é:", media);
