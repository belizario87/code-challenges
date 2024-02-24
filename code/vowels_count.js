/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
const teste = 'abracadabra'
function getCount(str) {
    const arrVowels = str.split('');
    const arrVowelsFilter = arrVowels.filter((char) => 'aeiouAEIOU'.includes(char));
        
        return arrVowelsFilter.length;
    }


    console.log(getCount(teste));
        
  