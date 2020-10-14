/*
P:
Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.


E:

D:
  Input =
  Output =

A:
   - Iterate through sorted, Own properties of the first object.
   - Compare object at each index against same index of array of sorted own properies of object B
   - Return false if you reach a non-match
   - Else return true.
*/

function objectsEqual(objA, objB) {
  let propsA = Object.getOwnPropertyNames(objA);
  let propsB = Object.getOwnPropertyNames(objB);

  for (let i = 0; i < propsA.length; i++) {
    if (!(propsB[i] == propsA[i])) return false;
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false