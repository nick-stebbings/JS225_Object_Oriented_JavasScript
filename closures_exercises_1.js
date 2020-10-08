// closures_exercises_1.js
/*
P:
Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every positive integer multiple of that number less than 100. Usage looks like this:

> let lister = makeMultipleLister(13);
> lister();
13
26
39
52
65
78
91

*/

function makeMultipleLister(multiplier) {
  return function() {
    for (let i = multiplier; i < 100; i+= multiplier) {
      console.log(i);
    }
  }
}

let thirteener = makeMultipleLister(13);
thirteener();