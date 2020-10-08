class Cat {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log("I'm a cat named " + this.name);
  }
}
let kitty = new Cat('dave')
kitty.greet()