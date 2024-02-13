/*
Example:
h = 0
m = 1
s = 1

result = 61000
*/

const h = 0;
const m = 1;
const s = 1;

function past(h, m, s) {
  const horasParaMilisegundos = h * 60 * 60 * 1000;
  const minutosParaMilisegundos = m * 60 * 1000;
  const segundosParaMilisegundos = s * 1000;

  const soma =
    horasParaMilisegundos + minutosParaMilisegundos + segundosParaMilisegundos;
  return soma;
}
console.log(past(h, m, s));
