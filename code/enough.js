/*
    Bob está trabalhando como motorista de ônibus. No entanto, ele se tornou extremamente popular entre os moradores da cidade. 
    Com tantos passageiros querendo embarcar em seu ônibus, ele às vezes tem que enfrentar o problema de não haver espaço suficiente no ônibus! 
    Ele quer que você escreva um programa simples dizendo se ele conseguirá acomodar todos os passageiros.

    Você tem que escrever uma função que aceite três parâmetros:

cap é a quantidade de pessoas que o ônibus pode acomodar, excluindo o motorista.
on é o número de pessoas no ônibus, excluindo o motorista.
espera é o número de pessoas esperando para entrar no ônibus, excluindo o motorista.
Se houver espaço suficiente, retorne 0, e se não houver, retorne o número de passageiros que ele não pode levar.

*/

const cap = 10;
const on = 5;
const wait = 5;
function enough(cap, on, wait) {
  const totalDePessoasNoOnibus = on + wait;
  if (totalDePessoasNoOnibus > cap) {
    return totalDePessoasNoOnibus - cap;
  } else {
    return 0;
  }
}

function enough1(cap, on, wait) {
  const totalDePessoasNoOnibus = on + wait;
  return totalDePessoasNoOnibus > cap ? totalDePessoasNoOnibus - cap : 0;
}

console.log(enough(cap, on, wait));
console.log(enough1(cap, on, wait));
