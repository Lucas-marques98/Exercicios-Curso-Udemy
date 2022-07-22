// lembrando tudo que está dentro do escopo da Função não pode ser acessado de fora. {ESCOPO}

// Criando funções que faz somas ou multiplicações

function multiplique(l, m) { // posso dar valores aos parametros com letras, exemplo: l = 3, m = 5 // se eu não dar valor quando chamar minha função esses serão os valores padrões.
  const res = l * m;
  return res; // tudo que está abaixo de return não é mais executado.
}

//se eu crio uma variavel dentro da função eu não posso acessar ela fora do escopo. posso criar outra variavel com o mesmo nome.


console.log(multiplique(4, 5)) // adiciona o valor de L e M
console.log(multiplique(42, 3)) // reutilizando a Função de Multiplicar


function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 5)) // adiciona o Valor de x e y

console.log(soma(10, 10)) // reutilizando a Função de Soma

// criando Funções anonimas // em formato de váriaveis

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(81)) // função para descobrir a Raiz Quadrada de um número

// forma de usar ary function (Remove a palavra function e adiciona o sinal de igual e maior => )

const raizAry = p => p ** 0.5; // quando eu tenho somente uma linha na minha função eu posso eliminar a palavra return e também os parentes dos parametros caso houver somente 1 parametro.

console.log(raizAry(49)) // ary function, descobrindo a raiz quadrada de 49  