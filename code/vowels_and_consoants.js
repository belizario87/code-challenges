const word = "javascriptloops";
//Funcao usando arrays e filter
function vowelsAndConsoants1(word) {
  const consoants = word
    .split("")
    .filter(
      (char) =>
        char !== "a" &&
        char !== "e" &&
        char !== "i" &&
        char !== "o" &&
        char !== "u"
    );

  const vowels = word.split("").filter((char) => {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    );
  });

  const result = vowels.concat(consoants).join("");
  for (const i of result) {
    console.log(i);
  }
}
vowelsAndConsoants1(word);
