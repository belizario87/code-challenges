/*

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

const arr = [0, 1, 2, 3, 5, 8, 13];
// const arrSlice = arr.slice(0, 5);

// console.log(arrSlice);

function take(arr, n) {
  const arr1 = arr.slice(0, n);

  return arr1;
}

const t = arr.forEach((item) => console.log(item));

console.log(take(arr, 7));

console.log(t);
