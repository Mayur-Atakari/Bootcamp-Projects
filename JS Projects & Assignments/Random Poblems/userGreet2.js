let user = {
  name: "Mayur",
  age: 20,
  gender: "male",
};

function greet(user) {
  console.log(`Hi ${user.name}, your age is ${user.age}`);
  if (user.age >= 18) {
    console.log("you are allowed to vote");
  } else {
    console.log("you are not allowed to vote");
  }
}

greet(user);
