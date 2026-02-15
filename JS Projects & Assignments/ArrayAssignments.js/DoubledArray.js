//Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

function doubled() {
  let arr = [1, 2, 3, 4, 5];

  let doubledArray = arr.map((a) => a * 2);

  console.log(doubledArray);
}

doubled();
