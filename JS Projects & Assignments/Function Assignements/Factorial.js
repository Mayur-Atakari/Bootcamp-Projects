//Question-9:  Write a recursive function to calculate the factorial of a given number.

function factorial(n) {
  let fact = 1;

  for (let i = n; i >= 1; i--) {
    fact = fact * i;
  }
  console.log(fact);
}

factorial(6);
