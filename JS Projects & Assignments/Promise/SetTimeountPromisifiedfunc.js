function setTimeOutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("hi there");
}

setTimeOutPromisified(3000).then(callback);
