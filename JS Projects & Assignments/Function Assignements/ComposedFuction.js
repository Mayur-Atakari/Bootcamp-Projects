//Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x)  = f(g(x)).

function f(x) {
  return x + 2;
}

function g(x) {
  return 2 * x;
}

function h(x) {
  return f(g(x));
}

console.log(h(3));
