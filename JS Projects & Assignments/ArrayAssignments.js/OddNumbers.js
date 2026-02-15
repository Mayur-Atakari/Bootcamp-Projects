//Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

function OddNumbers(arr) {
  let oddArr = arr.filter((a) => a % 2 !== 0);
  console.log(oddArr);
}

OddNumbers([1, 5, 2, 3, 5, 4, 6]);
