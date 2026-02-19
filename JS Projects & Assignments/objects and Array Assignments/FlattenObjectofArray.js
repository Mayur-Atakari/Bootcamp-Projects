// { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

// ["apple", "banana", "carrot", "pea"]

function arrFromObj() {
  let objArr = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };

  let result = [];

  for (let val in objArr) {
    if (objArr.hasOwnProperty(val)) {
      result.push(objArr[val]);
    }
  }
  return result;
}

let ans = arrFromObj();
console.log(ans);
