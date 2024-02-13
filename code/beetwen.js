/*
a = 1
b = 4
--> [1, 2, 3, 4]
*/

const a = 1;
const b = 4;

function beetwen1(a, b) {
  const newArray = [];
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }
  return newArray;
}
function beetwen2(a, b) {
  return Array.from({ length: a + b - 1 }, (_, index) => a + index);
}

console.log(beetwen1(a, b));
console.log(beetwen2(a, b));
