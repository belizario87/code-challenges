/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
"www.codewars.com#about" --> "www.codewars.com"
*/

const s = "www.codewars.com#about";

function removeAnchor(s) {
  return s.split("#")[0];
}

console.log(removeAnchor(s));
