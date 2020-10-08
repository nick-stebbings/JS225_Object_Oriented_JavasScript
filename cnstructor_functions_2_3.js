// P
// Create a function that can create an object with a given object as its prototype, without using Object.create.

function createObject(obj) {
  let constructorFunc = function() {};
  constructorFunc.prototype = obj;
  return new constructorFunc()
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));          // true