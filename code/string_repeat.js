/*
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

const s = "I";
const n = 6;
let newString = "";

function repeat(n, s) {
  for (let i = 0; i <= n; i++) {
    newString = newString + s;
  }
  return newString;
}

console.log(repeat(n, s));
