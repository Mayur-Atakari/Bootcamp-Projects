class Animal {
  eat() {
    console.log("eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("barking...");
  }
}

let d = new Dog();
d.eat();
d.bark();
