//S = 5
//O = 0
//I = 1

const string1 = "L0NDON";
const string2 = "DUBL1N";

function correctLetter(string) {
  let novaString = "";

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "0":
        novaString += "O";
        break;
      case "5":
        novaString += "S";
        break;
      case "1":
        novaString += "I";
        break;
      default:
        novaString += string[i];
        break;
    }
  }
  return novaString;
}

console.log(correctLetter(string2));
