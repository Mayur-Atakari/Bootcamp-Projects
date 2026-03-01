function setTimeOutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeOutPromisified(3000).then(function () {
  console.log("hi there");
});
