function greeting(hour) {
  if (hour > 0 && hour < 12) {
    console.log("Its Morning");
  } else if (hour > 12 && hour < 4) {
    console.log("its Afternoon");
  } else {
    console.log("its Evening");
  }
}

let time = new Date();

const hour = time.getHours();

greeting(hour);
