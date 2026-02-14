const fs = require("fs");

const contents = fs.readFileSync("a.txt", () => {
  console.log(contents);
});

console.log("End");
