let user = {
  name: "Mayur",
  age: 25,
};

function greet(user) {
  const greeting = `Hello ${user.name} your age is ${user.age}`;
  console.log(greeting);
}

greet(user);
