/*
P:
Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']

E:

D:
  Input =  an object as a receiver
  Output = array of strings

A:
   - SET a variable currentObject
   - add the name of the current object to the front of the array,
   - SET currentObject = currentObject.__proto__
   - REPEAT until the current object is Object.prototype
   - 
   -
   -
*/

Object.prototype.ancestors = function() {
  let currentObject = this;
  let objectNames = []
  while (Object.getPrototypeOf(currentObject)) {
    currentObject = Object.getPrototypeOf(currentObject);
    objectNames.push(currentObject.name);
  }
  objectNames.push("Object.prototype");
  return objectNames;
}

let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log( qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log( baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log( bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log( foo.ancestors());  // returns ['Object.prototype']