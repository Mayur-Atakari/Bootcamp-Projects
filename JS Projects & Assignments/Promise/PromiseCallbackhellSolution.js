function setTimeOurPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeOurPromisified(3000).then(function () {
  console.log("hi");
  setTimeOurPromisified(5000).then(function () {
    console.log("Hello");
    setTimeOurPromisified(7000).then(function () {
      console.log("Hanji");
    });
  });
});
