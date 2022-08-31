/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NEGAÇÃO (NÃO)
*/
const expressaoAnd = true && false && true && true && true;

console.log(expressaoAnd) //false
// no operador AND && , Todas as condições tem que retornar verdadeiras para que a condição final retorne true, caso ao contrario retornará falsa.


const expressaoOR = true || false || false || false || false;

console.log(expressaoOR) // true
// no operador OR || , basta 1 condição retornar verdadeira para que todas expressões retornem verdadeiras.

const expressaoNot = !true
const expressaoNot2 = !false
// o operador NOT ( ! NEGAÇÃO ) irá me retornar a expressão oposta, se for true ele me retorna false, se for false ele me retorna true.

console.log(expressaoNot)
console.log(expressaoNot2)


const usuario = 'Lucas';
const senha = '123456';

const vaiLogar = usuario === 'Lucas' && senha === '123456'; // se o que o usuario digitar for igual a Lucas e a senha for igual a 123456 ele vai logar, se não caso ao contrario ele vai dar erro e vai aparecer uma mensagem de erro - devo fazer usando condições if e else.

// uma dica boa para eu escolher usar o operador AND é que só retorne verdadeiro no meu programa caso o que o usuário digitar esteja de acordo com aquilo que eu programei.