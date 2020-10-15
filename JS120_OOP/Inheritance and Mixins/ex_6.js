const swimMixin = (superclass) => class extends superclass {
  swim() {
    return `${this.name} is swimming.`;
  }
};

// class Fish extends swimMixin(class baseClass {
//   constructor(name) {
//     this.name = name;
//   }
// }) {
//   constructor(name) {
//     super(name)
//   }
// }

class Maltese extends swimMixin(Dog) {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");
console.log(fish1.swim());
console.log(dog1.swim());