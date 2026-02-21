class Hospital {
  constructor(pName, pId, pAge) {
    this.pName = pName;
    this.pId = pId;
    this.pAge = pAge;
  }

  greet() {
    return `hello ${this.pName}`;
  }

  static compare(p1, p2) {
    return p1.pAge > p2.pAge ? "p1 is big" : "p2 is big";
  }
}

const p1 = new Hospital("Sumit", 101, 25);
const p2 = new Hospital("Rahul", 102, 19);

console.log(Hospital.compare(p1, p2));
console.log(p1.greet());
