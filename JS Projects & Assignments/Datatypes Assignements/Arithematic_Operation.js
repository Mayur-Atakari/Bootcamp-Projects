// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

function sum(a, b) {
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

function arithmetic(a, b, ope) {
  if (ope === sum) {
    sum(a, b);
  } else if (ope === sub) {
    sub(a, b);
  } else if (ope === divide) {
    divide(a, b);
  } else {
    mul(a, b);
  }
}

arithmetic(100, 20, divide);
