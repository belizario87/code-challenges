const arr = [1, 5, 87, 45, 8, 8];

function getAverage(arr) {
  let soma = arr.reduce((acc, curr) => acc + curr, 0);

  return Math.floor(soma / arr.length);
}

console.log(getAverage(arr));
