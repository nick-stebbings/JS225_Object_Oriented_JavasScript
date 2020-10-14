/*
P:
Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.
E:

D:
  Input = functon, context object 
  Output = function

A:
   - 
   -
   -
   -
   -
   -
*/

function myBind(func, thisArg) {
  return function() {
    return func.call(thisArg)
  }
}