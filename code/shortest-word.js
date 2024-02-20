/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const b = "bitcoin take over the world maybe who knows perhaps";

const findShort = (s) => {
  const a = s.split(" ").map((s) => s.length);
  return Math.min(...a);
};
console.log(findShort(b));
