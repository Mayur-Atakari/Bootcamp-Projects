const myPromise = new Promise((resolve, reject) => {
  // creating objects of promise
  let success = false;

  if (success) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
