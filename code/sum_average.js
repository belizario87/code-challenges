const arr = [
  [3, 4, 1, 3, 5, 1, 4],
  [21, 54, 33, 21, 77],
  [20, 18, 12, 4],
];

const arr1 = [
  [3, 4, 1, 3, 5, 1, 4],
  [1, 3, 4],
];

const sumAverage = (arr) => {
  let result = 0;

  //percorrer o array 1 e soma os valores
  for (let i = 0; i < arr.length; i++) {
    let resultadoParcial = 0;

    for (let j = 0; j < arr[i].length; j++) {
      resultadoParcial += arr[i][j];
    }
    //calcula a media
    resultadoParcial /= arr[i].length;

    result += resultadoParcial;
  }
  const arredondado = Math.floor(result);

  return arredondado;
};

console.log(sumAverage(arr1));
