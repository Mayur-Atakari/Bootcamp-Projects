const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
//1.  first Method for Call Promise
/* fsReadFilePromisified("a.txt", "utf-8")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  }); */

// 2. Second Method using Async
async function main() {
  let content1 = await fsReadFilePromisified("a.txt", "utf-8");
  let content2 = await fsReadFilePromisified("b.txt", "utf-8");

  console.log(content1);
  console.log(content2);
}

main();
console.log("Pehle");
console.log("fir uske bad ye");
