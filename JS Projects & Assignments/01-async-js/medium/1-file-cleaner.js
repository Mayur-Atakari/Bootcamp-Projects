// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

console.log("start");

fs.readFile("b.txt", "utf-8", (err, content) => {
  console.log(content);

  const cleanedFile = content.replace(/\s+/g, " ").trim();

  fs.writeFile("b.txt", cleanedFile, (err) => {
    if (err) {
      console.log("Some Erros", err);
    } else {
      console.log("successfully read and write the file");
      console.log(cleanedFile);
    }
  });
});

console.log("End");
