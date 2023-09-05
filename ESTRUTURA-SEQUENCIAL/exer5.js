let lado1, lado2, lado3


lado1 = Number(prompt("digite o valor do primeiro lado do triangulo: "))
lado2 = Number(prompt("digite o valor do primeiro lado do triangulo: "))
lado3 = Number(prompt("digite o valor do primeiro lado do triangulo: "))



if (lado1 > lado2+lado3 || lado2 > lado1+lado3 || lado3 > lado1+lado2) { 
alert("Numeros inválidos!!! \nUm lado (ou mais) do triangulo é maior que a soma dos outros dois lados, logo, isso não é um triângulo.")
}