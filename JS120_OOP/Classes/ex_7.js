class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
  
  greet() {
    console.log("I'm a person named " + this.name);
  }
}
let p1 = new Person('dave')
let p2 = new Person()
p1.greet()
p2.greet()
