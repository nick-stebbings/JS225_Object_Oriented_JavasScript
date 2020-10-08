// behaviour_delegation_3.js
// Write a function that extends an object (destination object) with contents from multiple objects (source objects).

function extend(destination, ...objects) {
  const newProto = objects.reduce((sourceObjects, nextObject) => (sourceObjects = { ...nextObject, ...sourceObjects }));
  return Object.setPrototypeOf(destination, newProto);
}
// NB this does not actually assign them to the destination object, just adds to prototype chain (I misunderstood what was meant by EXTEND)

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe