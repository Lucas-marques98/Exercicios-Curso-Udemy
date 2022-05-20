const nome = "Lucas";
const sobrenome = "Rodrigues Marques";
const idade = 24;
const peso = 74;
let alturaEmCm = "1,80 cm";
let imc;
let anoNascimento;

imc = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2022 - idade;
console.log(
  `Eu ${nome} ${sobrenome} tenho ${idade} Anos e peso ${peso}Kg e tenho ${alturaEmCm} e Nasci em ${anoNascimento} `
);
console.log('o meu IMC é', imc)
