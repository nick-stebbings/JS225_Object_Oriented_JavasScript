
class Car {}

const towMixin = {
  tow() {
    console.log('I can tow a trailer!');
  }
}
class Truck {
  constructor() {
    Object.assign(this, towMixin)
  }
}

let truck = new Truck();
truck.tow();
