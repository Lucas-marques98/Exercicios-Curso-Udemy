const numero = Number(prompt('Digite um Número'));
// transformando Prompt em Number ( pois ele retorna uma string automático)

/*Eu também poderia fazer dessa forma:

let numero = prompt('Digite um Número')
numero = Number(numero)
Ele estária Redeclarando o Prompt como um número e não mais string. 
*/

const numTitle = document.getElementById("titulo"); // Selecionando o Id do Html (titulo)10

const numText = document.getElementById("texto"); // Secelionando o Id do Html (texto)


// Em Html é recomendado que a gente só tenha um Elemento por Id na página.
// Por exemplo não se pode ter outro elemento chamado (titulo ou texto --- isso não é recomendado)

numTitle.innerHTML = numero; // está guardando mo Prompt o que a pessoa digitar em Title.

numText.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}.</p>`;
numText.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
numText.innerHTML += `<p>É NaN ${Number.isNaN(numero)}.</p>`;
numText.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
numText.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
numText.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
//está guardando no Prompt o que a pessoa digitar em Text.

