/*
  Write a function `findLargestElement` that takes an numbersay of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // 1. let largestNum = numbers.sort((a, b) => b - a);
  // console.log(largestNum);

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

let ans = findLargestElement([3, 7, 2, 9, 1]);
console.log(ans);
module.exports = findLargestElement;
