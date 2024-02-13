/*
Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
*/

const strA = "hello";
const strB = "codewars";
const strC = "goodbye";

const vowels = "aeiou";

const shortcut = (s) => {
  return s
    .split("")
    .map((letra) => {
      if (!vowels.includes(letra)) {
        return letra;
      }
    })
    .join("");
};

console.log(shortcut(strC));
