class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("I'm a cat named " + this.name);
  }

  rename(name){
    this.name = name

  }
}

Cat.genericGreeting = function () {
  console.log("I'm a cat");
};

let kitty = new Cat('dave')
Cat.genericGreeting()
kitty.greet()