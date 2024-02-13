/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
*/

const nbPetals = 7;
function howMuchILoveYou(nbPetals) {
  const messages = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  const messageIndex = (nbPetals - 1) % messages.length;
  return messages[messageIndex];
}

console.log(howMuchILoveYou(nbPetals));
