/*
For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]
*/

const array = ["Telescopes", "Glasses", "Eyes", "Monocles"];
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(array));
