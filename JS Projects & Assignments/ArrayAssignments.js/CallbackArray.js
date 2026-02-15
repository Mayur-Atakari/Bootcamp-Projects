// Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

function newArr(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

let output = newArr([1, 5, 8, 10], double);
console.log(output);
