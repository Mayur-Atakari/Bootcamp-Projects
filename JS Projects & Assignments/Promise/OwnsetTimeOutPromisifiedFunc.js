function setTimeOutPromisified(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

setTimeOutPromisified(3000).then(function (data) {
  console.log("Hello Ji");
});
