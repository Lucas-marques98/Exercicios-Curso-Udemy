let valorA = "A";
let valorB = "B";
let valorC = "C";

const varTempA = valorA;

valorA = valorB;
valorB = valorC;
valorC = varTempA

console.log(valorA, valorB, valorC);