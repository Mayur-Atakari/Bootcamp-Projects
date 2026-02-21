/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  const sort = (str) => str.toLowerCase().split("").sort().join("");
  return sort(str1) === sort(str2);
}

console.log(isAnagram("earth", "heart"));
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("hello", "ji"));

module.exports = isAnagram;
