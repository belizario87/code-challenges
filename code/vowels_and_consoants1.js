const word = "javascriptloops";
//Funcao usando apenas metodos do Prototype String.
function vowelsAndConsoants2(word) {
  let stringVogal = "";
  let stringConsoante = "";
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];

    if ("aeiou".includes(currentChar)) {
      stringVogal += currentChar;
    } else if (!"aeiou".includes(currentChar)) {
      stringConsoante += currentChar;
    }
  }
  const result2 = stringVogal.concat(stringConsoante);
  for (const i of result2) {
    console.log(i);
  }
}

vowelsAndConsoants2(word);
