const users = [
  {
    name: "mayur",
    age: "20",
  },
  {
    name: "rahul",
    age: 30,
  },
  {
    name: "ajay",
    age: 14,
  },
];

const adults = users.filter((user) => user.age > 18);
console.log(adults);
