//Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

function localVaribale() {
  let a = "Mayur"; // local Variable
}

let b = "Hello";
console.log(a); // global Variable

function GlobalVariable() {
  console.log(b);
}
