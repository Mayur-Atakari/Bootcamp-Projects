class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} is logged in`);
    return `${this.name} is logged in`;
  }
}

class Admin extends User {
  delete() {
    console.log("User deleted");
  }
}

const d = new Admin("Mayur", "mayur@gmail.com");
let ans = d.login();
console.log(ans);
d.delete();
