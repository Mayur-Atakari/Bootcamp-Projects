const fs = require("fs");

const contents = fs.readFile("a.txt", "utf-8", (err, contents) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("successfully read a file", contents);
  }
});

const write = fs.writeFile("b.txt", "New File Created", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully write a file");
  }
});
