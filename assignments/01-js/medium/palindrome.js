/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const string = str.split(" ").join("");
  const cleaned = string.replace(/[^a-zA-Z]/g, "");

  for (let i = 0; i < cleaned.length; i++) {
    if (
      cleaned[i].toLowerCase() === cleaned[cleaned.length - 1 - i].toLowerCase()
    ) {
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
