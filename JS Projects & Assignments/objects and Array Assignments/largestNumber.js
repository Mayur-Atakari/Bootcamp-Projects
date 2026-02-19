// { a: 10, b: 50, c: 20 }

// b

// function largestNum() {
//   let obj = { a: 10, b: 50, c: 80 };
//   let newArr = [];

//   let biggest = 0;

//   for (let val in obj) {
//     if (obj.hasOwnProperty(val)) {
//       newArr.push(obj[val]);
//     }
//   }
//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = i + 1; j < newArr.length; j++) {
//       if (newArr[i] > newArr[j]) {
//         biggest = newArr[i];
//       } else {
//         biggest = newArr[j];
//       }
//     }
//   }
//   return biggest;
// }

// let ans = largestNum();
// console.log(ans);

let obj = { a: 10, b: 50, c: 20 };

let result = Object.fromEntries(
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (acc > [key, value]) {
      console.log("hello");
    } else {
      console.log("no");
    }
  }),
);

console.log(result);
