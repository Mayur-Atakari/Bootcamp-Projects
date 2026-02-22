function makePayement(amount) {
  let p = new Promise((resolve, reject) => {
    //
    if (amount > 0) {
      resolve("Payment Succefull");
    } else reject("Payment Failed");
  });
  return p; // returnig object p where promise is stored
}

makePayement(0)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
