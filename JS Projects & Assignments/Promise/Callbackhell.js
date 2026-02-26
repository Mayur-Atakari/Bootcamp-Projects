// callback hell

setTimeout(function () {
  console.log("Hello");
  setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
      console.log("hanji");
      setTimeout(function () {
        console.log("Namastey");
      }, 7000);
    }, 5000);
  }, 3000);
}, 1000);
