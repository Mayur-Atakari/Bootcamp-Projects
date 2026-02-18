function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function divide(a, b) {
  console.log(a / b);
}

function mul(a, b) {
  console.log(a * b);
}

function calculate(a, b, opt) {
  if (opt === 1) {
    add(a, b);
  } else if (opt === 2) {
    sub(a, b);
  } else if (opt === 3) {
    divide(a, b);
  } else {
    mul(a, b);
  }
}

calculate(8, 4, 3);
