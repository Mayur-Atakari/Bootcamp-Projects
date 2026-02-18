function sum(num) {
  let ans = 0;
  for (let i = 1; i <= num; i++) {
    ans = ans + i;
  }
  return ans;
}

let result = sum(100);
console.log(result);
let result2 = sum(1000);
console.log(result2);
let result3 = sum(10000);
console.log(result3);
