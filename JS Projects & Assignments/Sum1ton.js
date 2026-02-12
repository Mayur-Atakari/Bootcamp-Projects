function sum(num) {
  let ans = 0;
  for (let i = 1; i <= num; i++) {
    ans = ans + i;
  }
  return ans;
}

let result = sum(5);
console.log(result);
