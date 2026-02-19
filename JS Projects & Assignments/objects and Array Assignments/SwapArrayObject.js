// { a: "x", b: "y", c: "z" }

// { x: "a", y: "b", z: "c" }

function swapObj() {
  let result = {};
  let obj = { a: "x", b: "y", c: "z" };
  for (let val in obj) {
    if (obj.hasOwnProperty(val)) {
      console.log(`${obj[val]} :  ${val} `);
    }
  }
}

swapObj();
