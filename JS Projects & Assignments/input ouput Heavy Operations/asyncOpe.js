// const fs = require("fs");

// function fileReadCallBack(err, contents) {
//   console.log(contents);
//   console.log(contents);
// }

// fs.readFile("c.txt", "utf-8", fileReadCallBack);  // first read file through I/O bound task. and the below part will print first than the readable file will print.

// let s = 0;

// for (let i = 1; i <= 10000000; i++) {
//   s += i;
// }

// console.log(s);

// Basic Example

// const a = 1;
// const b = 2;

// console.log(a);
// console.log(b);

// function callback() {
//   console.log(a + b);
// }

// setTimeout(callback, 1000);

// console.log("hello");

let count = 0;
function callback() {
  console.log(count);
  count = count + 1;
}

setInterval(callback, 1000);

let x = 0;
for (let i = 1; i < 10000000000; i++) {
  x = x + 1;
}

console.log(x);
