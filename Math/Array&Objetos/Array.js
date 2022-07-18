// os Arrays tambem são indexisados, mas os valores deles são diferentes
//          01234567891011 
let nome = 'Lucas Marques'
console.log(nome[6]) // buscando indixes de uma string

// podemos Guardar tudo dentro de um Array, mas devemos separar os tipos de dados, para manter a boa prática de programação.
//forma de arrays indexisados
//                  0         1         2           3    ...
const pessoas = ['Lucas', 'Milena', 'Neide', 400040440,]

//Adicionando elementos no começo de um Array
pessoas.unshift('Lucas Rodrigues')

// pessoas.pop(); // remove o elemento do final // eu posso guardar o que foi removido do array em uma Váriavel. const removido = pessoas.pop(); // se usar SHIFT ele remove do começo.
// para descobrir se é um Array // console.log(pessoas instaceof Array)
// Exemplos de Adicionar Elementos no fim de um Array
// pessoas[0] = 'Lukinhas'  trocando valor de um Array
// pessoas[4] = 'Marques' // Adicionando um elemento sem adicionar dentro da Váriavel.
// pessoas[pessoas.length] = 'Rodrigues' // Outra forma de adicionar um elemento ou
// pessoas.push('Lucas') Adiciona elementos no fim de um Array
// console.log(pessoas.slice (0, -2))// para fazer fatiamento em no Array (da para fazer positivo ou negativo)
console.log(pessoas) 
