/*
gimme([2, 3, 1]) => 1
*/

const triplet = [2, 3, 1];
function gimme(triplet) {
  const maior = Math.max(...triplet);
  const min = Math.min(...triplet);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== maior && triplet[i] !== min) {
      return i;
    }
  }
}

console.log(gimme(triplet)); // 1
