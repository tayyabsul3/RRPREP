/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false; //length same na hui toh 
  }
  const string2 = str2.split("").map((item) => item.toLowerCase()); //yeh iis lye take hamein sab char acters lowerscase mein mil jain 

  for (i = 0; i < str1.length; i++) {
    if (string2.includes(str1[i].toLowerCase())) {
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
