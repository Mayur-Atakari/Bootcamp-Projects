class University {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class College extends University {
  constructor(name, rollno) {
    super(name);
    this.rollno = rollno;
  }
}

const s1 = new College("Rajan", 101);
s1.greet();
console.log(s1.rollno);
