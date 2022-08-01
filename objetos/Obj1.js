const pessoa1 = {
  nome: 'Lucas',
  sobrenome: 'Marques',
  idade: 24,
  endereço: 'Rua Não te interessa',

  fala() {             // this significa "isto" é a mesma coisa que chamar o nome do Objeto (no caso pessoa1)
    console.log(`${this.nome} ${this.sobrenome} está te dizendo Oi, e a Minha Idade atual é ${this.idade}`) // função dentro de um Objeto
  },

incrementaIdade(){
  this.idade++;   //função que faz incremento //usada para poder incrementar os numeros quando preciso.
}
}; // objeto literal
pessoa1.fala() // chamando a função dentro do objeto


// dentro do escopo do Objeto eu posso criar váriaveis e atributos // basta eu dar o nome do atributo, agregar o valor com dois pontos (:) e se eu quiser separar os atributos 
// eu devo usar as virgulas.

// para eu conseguir acessar o atributo do Objeto, devo colocar o nome do objeto, depois o ponto (.) e por ultimo o nome do atributo.
// eu posso criar funções dentro de um Objeto, só dizer o nome da função (método)


console.log(`Eu ${pessoa1.nome} ${pessoa1.sobrenome} tenho ${pessoa1.idade} anos e moro na ${pessoa1.endereço}`)

function criaPessoa(nome, sobrenome, idade) { // nome dos parametros
  return {
    nome: nome,
    sobrenome: sobrenome, // função que cria Objetos
    idade: idade
  };
}
//criando constantes que guarda uma função de dar nome aos parametros da função.
const pessoas1 = criaPessoa('Lucas', 'Marques', 24)
const pessoas2 = criaPessoa('Neide', 'Marques', 43)
const pessoas3 = criaPessoa('Luiza', 'Oliveira', 21)
const pessoas4 = criaPessoa('Lara', 'moreira', 20)
const pessoas5 = criaPessoa('Leticia', 'silva', 25)

// argumentos sendo passado para o parametro. ☝ 
