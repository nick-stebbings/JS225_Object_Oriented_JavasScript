// closures_exercises_2.js
/*
P:
Write a program that uses two functions, add and subtract, to manipulate a running total value. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. Usage looks like this:

> add(1);
1
> add(42);
43
> subtract(39);
4
> add(6);
10


*/

function doubleEncloser() {
  let total = 0
  let adder = (difference) => console.log(total += difference);
  let subtractor = (difference) => console.log(total -= difference);

  return [adder, subtractor]
}

const [add, subtract] = doubleEncloser();

add(4);
add(6);
add(2);
subtract(4)