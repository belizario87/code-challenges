/*
Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"
*/
const array = [1023, 1, 2];
const oddOrEven = (array) => {
  const sum = array.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(oddOrEven(array));
