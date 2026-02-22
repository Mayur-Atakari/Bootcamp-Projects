const myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Hello Ji");
  } else {
    reject("No Ji");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
