// closures_exercises_3.js
/*
P:
Write a function named later that takes two arguments: a function and an argument for that function. 

The return value should be a new function that calls the input function with the provided argument, like this:

> let logWarning = later(console.log, 'The system is shutting down!');
> logWarning();
The system is shutting down!

*/

function later(func, arg) {
  return function() {
    func.call(this, arg)
  }
}

let logWarning = later(console.log, "The system is shutting down!");
logWarning();