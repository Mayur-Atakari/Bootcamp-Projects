const fs = require("fs");

fs.readFile("a.txt", "utf-8", callback);

function callback(err, content) {
  if (err) {
    console.log(err);
  }
  console.log("Successfully Read");
}
