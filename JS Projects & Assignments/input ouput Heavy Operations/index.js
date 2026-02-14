// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// const fs = require("fs");

// function afterFileRead(err, contents) {
//   console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", afterFileRead);

const fs = require("fs");

console.log("Start");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log("File Done");
});

console.log("hi there");
