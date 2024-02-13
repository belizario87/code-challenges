/*
crie uma funcao recursiva para retornar os fatoriais de um numero
!4 = 4 * 3 * 2 * 1 = 24
*/

const numero = 3;
const getFatorial = (numero) => {
  if (numero === 1) {
    return 1;
  }

  return numero * getFatorial(numero - 1);
};

console.log(getFatorial(numero));
