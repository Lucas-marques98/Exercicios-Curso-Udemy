let num1 = 9.346565;
let num2 = Math.floor(num1); // pega o valor do num1 e arredonda para a primeira Casa do Número Decimal
console.log(num2)

let nu1 = 8.64364;
let nu2 = Math.ceil(nu1);
console.log(nu2)

// Math.floor (Arredonda o valor da Váriavel para baixo)
// Math.ceil (Arredonda o valor da Váriavel para cima)

let ex1 = 9.49;
let ex2 = Math.round(ex1);
console.log(ex2)
// Math.round (Arredondo para o numero mais proximo, de forma automática )
// se o numero for ate 49 ou próximo a metade ele arredonda pra baixo
// mas se for de 50 ou mais, ele arrendonda pra cima.

// Math.max Para achar qual é o maior numero

console.log(Math.max(1,2,4,5,6,7,111,333))

// Math.min Para achar o menor Numero
// Math.random Gera um número aleatório com varias casas decimais

const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // Gera um numero aleatório entre 10 e 5 
console.log(aleatorio)

//Math.PI Para descobrir o Valor de PI

console.log(Math.PI) // Descobre o valor de PI

// Math.pow para fazer potenciação, um numero elevado ao outro

console.log(Math.pow(2, 10)); // Está fazendo 2 elevado a 10.

let raiz = 81;
console.log(raiz ** (1/2)) // para descobrir a Raiz quadrada. 
console.log(raiz ** 0.5); // outra forma de Descobrir a Raiz quadrada.

console.log(!! 100 / 0); // Em JavaScript podemos dividir um número por 0. (Valor infinyty (True) ) 