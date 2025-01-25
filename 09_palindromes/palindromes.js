const palindromes = function (str) {
//  works with punctuation  (2 ms)
//  works with upper-case letters 
//  works with multiple words (1 ms)
//  works with multiple words 

const cleanedStr = str
.toLowerCase()
.replace(/[^a-z0-9]/g,"");

/*

replace(rule, replacement) method: Finds characters in the string according to rule and replaces them with an empty strnig ("")

"/" and "/": This denotes a regular expression 
"^": Means "not" or "anything except"
"a-z": Matches all lowercase letters (a to z)
"0-9": Matches all numbers (0 to 9)
Together [^a-z0-9] matches anything that is NOT a lowercase letter or a digit ||
To remove everything that ISN'T a letter or a number (punctuation, spaces, etc.)

"g" (global flag): means "global", so the regex will match all occurrences in the string, not just the first one

*/


const reversedStr = cleanedStr.split("").reverse().join("");

/*

.split("") turn the string into an array of characters
.reverse() to reverse the array
.join("") to turn it back into a string

*/

return cleanedStr == reversedStr;

/*

Check if the cleaned string is equal to the reversed string

*/

};

// Do not edit below this line
module.exports = palindromes;

