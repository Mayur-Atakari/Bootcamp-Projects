//Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

function stringUpperCase() {
  let ArrofStr = ["Hello", "ji", "kkrh"];

  let uppercaseStr = ArrofStr.map((a) => a.toUpperCase());

  console.log(uppercaseStr);
}

stringUpperCase();
