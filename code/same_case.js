/*
Escreva uma função que verifique se dois caracteres fornecidos têm o mesmo caso.

Se algum dos caracteres não for uma letra, retorne -1
Se ambos os caracteres forem do mesmo caso, retorne 1
Se ambos os caracteres forem letras, mas não forem o mesmo caso, retorne 0

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

const a = "b";
const b = "a";

function sameCase(a, b) {
  // Verifica se a e b são letras
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
    return -1;
  }

  // Verifica se ambos estão no mesmo caso
  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(sameCase("b", "a")); // Saída esperada: 0
