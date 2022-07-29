const pessoa1 = {
  nome: 'Lucas',
  sobrenome: 'Marques',
  idade: 24,
  endereço: 'Rua Não te interessa'
}; // objeto literal

// dentro do escopo do Objeto eu posso criar váriaveis e atributos // basta eu dar o nome do atributo, agregar o valor com dois pontos (:) e se eu quiser separar os atributos eu devo usar as virgulas.

// para eu conseguir acessar o atributo do Objeto, devo colocar o nome do objeto, depois o ponto (.) e por ultimo o nome do atributo.

console.log(`Eu ${pessoa1.nome} ${pessoa1.sobrenome} tenho ${pessoa1.idade} anos e moro na ${pessoa1.endereço}`)

function criaPessoa (nome, sobrenome, idade){ // nome dos parametros
  return{
    nome: nome,
    sobrenome: sobrenome, // função que cria Objetos
    idade: idade
  };
}
//criando constantes que guardar uma função de dar nome aos parametros da função.
const pessoas1 = criaPessoa('Lucas', 'Marques', 24)
const pessoas2= criaPessoa('Neide', 'Marques', 43)
const pessoas3 = criaPessoa('Luiza', 'Oliveira', 21)
const pessoas4 = criaPessoa('Lara', 'moreira', 20)
const pessoas5 = criaPessoa('Leticia', 'silva', 25)
 
// argumento sendo passado para o parametro. 
