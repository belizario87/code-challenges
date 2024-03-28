/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// const a = "xyaabbbccccdefww";
// const b = "xxxxyyyyabklmopq";

// function longest(s1, s2) {
//     const combinedString = s1 + s2;
//     const uniqueLetters = Array.from(new Set(combinedString));
//     const sortedLetters = uniqueLetters.sort().join('');
//     return sortedLetters;
// }

// console.log(longest(a, b));


const arr = [20,10,6,5,4,3,2,12]

function alphabet(ns) {
  const result = ns.sort((a,b) => b - a)[4];
  return result 
}

console.log(alphabet(arr))
