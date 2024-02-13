const a = "Hi!";
const b = "Hi!!!";
const c = "!Hi!";
const d = "Hi! Hi!";

function remove(string) {
  //inicializa nova string
  let novaString = "";

  //Variavel para rastrear se encontramos o "Hi"
  let encontrouHi = false;
  //percorrer cada caractere da substring
  for (const char of string) {
    if (encontrouHi) {
      // Se já encontramos o "Hi", verificar e remover exclamações subsequentes
      if (char !== "!") {
        //Se o caractere nao for "!", adiciona-lo a nova string
        novaString += char;
      }
      //Se ainda nao encontrou o "Hi", adicionar o caractere a nova string
    } else {
      novaString += char;
    }
    // Verificar se encontramos o "Hi"
    if (novaString.endsWith("Hi")) {
      encontrouHi = true;
    }
  }
  return novaString;
}

console.log(remove(c));
