const fs = require("fs");

// // callback way without promise
/* function cleanFile(filePath, cb) {
  let content = fs.readFile(filePath, "utf-8", function (err, content) {
    const trimmetContents = content.trim();
    fs.writeFile("a.txt", trimmetContents, function () {
      cb();
    });
  });
} */

/* cleanFile("a.txt", function () {
  console.log("File Cleaned");
}); */

// // Callback way with promise
/* function cleanFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, content) {
      if (err) {
        reject();
      } else {
        const trimmedContent = content.trim();
        fs.writeFile("a.txt", trimmedContent, function (err) {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
}

cleanFile("asc.txt")
  .then(function () {
    console.log("file has been cleaned");
  })
  .catch(function () {
    console.log("error while cleaning a file");
  }); */

// // promise with async await -> modern way
/* function cleanFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, content) {
      if (err) {
        reject();
      } else {
        const trimmedContent = content.trim();
        fs.writeFile(filePath, trimmedContent, function (err) {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
}

async function main() {
  try {
    await cleanFile("a.txt");
    console.log("file has been cleaned");
  } catch (e) {
    console.log("error while cleaning");
  }
}

main(); */

//easier way if we are calling one promise function to another it will be easy

function cleanFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, content) {
      if (err) {
        reject();
      } else {
        const trimmedContent = content.trim();
        fs.writeFile(filePath, trimmedContent, function (err) {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
}

// cleaner and shorter way no need to return another promise
async function cleanManyFiles(prefix) {
  await cleanFile(prefix + "1.txt");
  await cleanFile(prefix + "2.txt");
  await cleanFile(prefix + "3.txt");
}

cleanManyFiles("a")
  .then(function () {
    console.log("all 3 files cleaned");
  })
  .catch(function () {
    console.log("error while cleaning file");
  });
