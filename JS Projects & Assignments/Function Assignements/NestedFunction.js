//Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

function Outer() {
  let a = "Mayur";
  function inner() {
    console.log(a);
  }
  inner();
}

Outer();
