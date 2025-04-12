/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let answer = [];
  str.split("").forEach((item) => {
    if (vowels.includes(item)) {
      answer.push(item);
    }
  });
  return answer.length;
}

module.exports = countVowels;
