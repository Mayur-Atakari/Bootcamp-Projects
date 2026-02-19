// { a: 20, b: 60, c: 40, d: 90 }
// { b: 60, d: 90 }

let obj = { a: 20, b: 60, c: 40, d: 90 };

let result = Object.fromEntries(
  Object.entries(obj).filter(([Key, value]) => value > 50),
);

console.log(result);
