/*

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/

const list = [1, 2, 3, 4];

function reverseList(list) {
  return list.reverse();
}

console.log(reverseList(list));
