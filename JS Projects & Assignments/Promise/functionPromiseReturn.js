function setTimeOutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("hello Ji");
}

setTimeOutPromisified(3000).then(callback);
