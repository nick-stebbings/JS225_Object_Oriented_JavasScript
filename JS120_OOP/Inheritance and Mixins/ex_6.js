const swimMixin = (superclass) => class extends superclass {
  swim() {
    return `${this.name} is swimming.`;
  }
};
class Dog {
  constructor(name) {
    this.name = name;
  }
}
// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }
class Fish extends swimMixin(class baseClass {
  constructor(name) {
    this.name = name;
  }
}) {
  constructor(name) {
    super(name)
  }
}

class Maltese extends swimMixin(Dog) {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");
console.log(dog1.swim());
console.log(fish1.swim());
console.log(fish1);