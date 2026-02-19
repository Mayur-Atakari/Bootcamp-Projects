// Input -> ["apple", "banana", "apple", "orange", "banana", "apple"]

// output -> { apple: 3, banana: 2, orange: 1 }

function countWord() {
  //   let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
  //   let result = {};

  //   for (let fruit of arr) {
  //     result[fruit] = (result[fruit] || 0) + 1;
  //   }

  //   return result;
  // }

  let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let fruits = arr[i];

    if (result[fruits]) {
      result[fruits] = result[fruits] + 1;
    } else {
      result[fruits] = 1;
    }
  }
  return result;
}

let ans = countWord();
console.log(ans);
