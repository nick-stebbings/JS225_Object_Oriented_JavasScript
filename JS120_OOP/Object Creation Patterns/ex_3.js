// Implement the following diagram using the pseudo-classical approach. Subclasses should inherit everything from the superclass and not just the methods. Reuse the constructors of the superclass when implementing a subclass.

// For the methods, you can have it log out anything you want.

// Here's a sample run you can use as a reference:

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

function Professor(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  
  this.subject = subject;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function () {
  console.log("Teaching");
};

Object.defineProperty(Professor.prototype, "constructor", {
  value: Professor,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});

function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender);
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function () {
  console.log("Diagnosing");
};
Object.defineProperty(Doctor.prototype, "constructor", {
  value: Doctor,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});

function Student(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  this.subject = subject;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log("Studying");
};
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});

function GraduateStudent(first, last, age, gender, gradDegree) {
  Person.call(this, first, last, age, gender);
  this.graduateDegree = gradDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function () {
  console.log("Researching");
};
Object.defineProperty(GraduateStudent.prototype, "constructor", {
  value: GraduateStudent,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});


const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

module.exports  = {
  Person,
  Doctor,
  Student,
  Professor,
  GraduateStudent,
}