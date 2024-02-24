/*
DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/


const s1 = "Hey wollef sroirraw";

function spinWords(string) {
    const inverseWord = string.split(' ').map((item) => (item.length >= 5 ? item.split('').reverse().join('') : item)).join(' ');
    return inverseWord;
}



console.log(spinWords(s1));


