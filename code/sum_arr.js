const arr1 = [1, 2, 3];
const arr2 = [2, 5, 6];

function sumArr(arr1, arr2) {
  const sumArr1 = arr1.reduce((acc, number) => acc + number);
  const sumArr2 = arr2.reduce((acc, number) => acc + number);
  return sumArr1 + sumArr2;
}

console.log(sumArr(arr1, arr2));
