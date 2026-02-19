// input -> { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

// output -> { food: 60, travel: 20, bills: 100 }

function sumOfArrayObjects() {
  const obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

  let sum = 0;

  for (let num in obj) {
    sum = 0;
    if (obj.hasOwnProperty(num)) {
      for (let n of obj[num]) {
        sum += n;
      }
      console.log(`${num}: ${sum}`);
    }
  }
}

sumOfArrayObjects();
