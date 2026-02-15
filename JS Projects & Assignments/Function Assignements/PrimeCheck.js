//Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function primeCheck(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(primeCheck(9));
