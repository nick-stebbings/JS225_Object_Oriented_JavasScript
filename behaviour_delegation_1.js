// behaviour_delegation_1.js

// keep iterating through the __proto__ linkages,
// SET definingObj == null
// while the linkage !== object.prototype
//  -- Does the prototype haveOwnProperty of propKey?
//  -- If yes then return that prototype as the defining object
// -- If no, keep going up prototype chain

function getDefiningObject(object, propKey) {
  let definingObject = null;
  let currentCandidate = object;
  while (currentCandidate) {
    if (currentCandidate.hasOwnProperty(propKey)) {
      definingObject = currentCandidate;
      break;
    } else {
      currentCandidate = Object.getPrototypeOf(currentCandidate);
    }
  }
  return definingObject;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null