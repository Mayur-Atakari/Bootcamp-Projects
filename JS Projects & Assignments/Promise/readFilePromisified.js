const fs = require("fs");

function fsReadFilePromisified(filName, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filName, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

fsReadFilePromisified("a.txt", "utf-8")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
