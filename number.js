let num1 = 10; //Number
let num2 = 11.282480249204902; //Number

console.log(num1.toString(2)) // transforma em Binário
console.log(num2.toFixed(3)) // para usar somente 3 casas decimais
console.log(Number.isInteger(num1)) // Para saber se o número é inteiro (true Para sim) (False para não)
console.log(Number.isNaN()) // Para saber se a a conta que está tentando fazer é verdadeiro ou falso.


// .toFixed para arredondar números e escolher quantas casas decimais usar
// .toString para transformar um Number em uma string. 
// Number.isInteger Para saber se é o Número é inteiro.
// Number.isNan para saber se a conta é válida ou não.

// Nunca faça conta com strings.

let nu1 = 0.7;
let nu2 = 0.1;

nu1 += nu2; // 0.8
nu1 += nu2; // 0.9
nu1 += nu2; // 1.0

// nu1 = ((nu1 * 100) + (nu2 * 100)) / 100; // Resultado = True

nu1 = Number(nu1.toFixed(2)) // Vai se virar pra saber se é um numero com uma ou mais casas decimais
console.log(nu1)
console.log(Number.isInteger(nu1)) // Para saber se o número é inteiro (true Para sim) (False para não)

// O Objetivo dessa aula é usar essas funções quando eu precisar fazer conta com Casas decimais.