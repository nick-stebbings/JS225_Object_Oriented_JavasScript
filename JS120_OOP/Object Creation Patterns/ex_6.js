// In this exercise, you'll make an extend function and use it to add a mixin to the previous exercise. The mixin adds invoice and payTax methods.

const classes = require('./ex_3.js');

function extend(instance, constructor) {
  Object.assign(instance.__proto__, constructor.prototype);
  return instance;
};

function Professional() { };
Professional.prototype = Object.create(classes.Person.prototype);
Professional.prototype.invoice = function () {
  console.log('Give me money!');
};
Professional.prototype.payTax = function () {
  console.log('Stop taking me money!');
};

const doctor = extend((new classes.Doctor('foo', 'bar', 21, 'gender', 'Pediatrics')), Professional);
console.log(Object.getPrototypeOf(doctor));
console.log(doctor instanceof classes.Person); // logs true
console.log(doctor instanceof classes.Doctor); // logs true
doctor.eat(); // logs 'Eating'
doctor.communicate(); // logs 'Communicating'
doctor.sleep(); // logs 'Sleeping'
console.log(doctor.fullName()); // logs 'foo bar'S
doctor.diagnose(); // logs 'Diagnosing'

const professor = extend(new classes.Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
console.log(professor instanceof classes.Person);     // logs true
console.log(professor instanceof classes.Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

Professional.invoice = function() {
  console.log(`${this.fullName()} is Asking customer to pay`);
}; // this is  static method so I am not sure why the below code should give those results. Meant to define on the prototype?

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'