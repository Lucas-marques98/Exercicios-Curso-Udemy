/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
> menor que ou igual a
== igualdade (checa valor)
=== igualdade estrita (checa valor e tipo da váriavel)
!= diferente (checa valor)
!== diferente estrito (checa valor e tipo)
*/
const comparacao = 10 > 5;
console.log(comparacao); //true

const comp = 10 < 10;
console.log(comp) // false

const comp2 = 10 <= 10;
console.log(comp2) // true

const comp3 = 10 >= 9;
console.log(comp3) // true

let igual = 10 == 15;
console.log(igual) // false

let dif = 10 != 15
console.log(dif) // true

let num = 30;
let num2 = '30';

let tipo = num === num2;
console.log(tipo) // checa se igual e do mesmo tipo de dados

let tipo2 = num !== num2;
console.log(tipo2) // checa se é diferente o valor e os tipos de dados


// se eu usar menor ou igual e ele der verdadeiro na primeira checagem automaticamente ele ja retorna true // verdadeiro.

// caso a primeira retorne false e a segunda checagem retorne verdadeiro, a saida vai retornar true.

//posso checar usando váriaveis