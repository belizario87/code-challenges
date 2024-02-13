/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty

*/
const string = "friendship";

function wordsToMark(string) {
  const alfabeto = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
  );

  return string.split("").reduce((acc, letra) => {
    const indice = alfabeto.indexOf(letra);

    return (acc += indice + 1);
  }, 0);
}

console.log(wordsToMark(string));
