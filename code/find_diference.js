/*
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
the volume of a is 12 and the volume of b is 20. 
Therefore, the function should return 8.
*/

const a = [2, 2, 3];
const b = [5, 4, 1];

function findDifference(a, b) {
  function calcVolum(a, b) {
    const volA = a.reduce((acc, n) => (acc *= n));
    const volB = b.reduce((acc, n) => (acc *= n));
    return volA > volB ? volA - volB : volB - volA;
  }
  return calcVolum(a, b);
}

console.log(findDifference(a, b));
