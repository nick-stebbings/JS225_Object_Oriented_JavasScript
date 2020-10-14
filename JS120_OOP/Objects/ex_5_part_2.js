/*
P:

In an earlier exercise, we created a school object. It works, however, it can still be improved. The following are improvements for you to implement in the solution provided:

    - Make the list students private.
      - Right now, anyone can gain access to it and manipulate it.
    - Make the constraint for allowed values for years a private variable. 
      - As a private variable it avoids an unnecessary statement in the addStudent method and at the same time makes the code more declarative.
    - Make the getCourse function accessible in the addGrade method also. 
      -As it is, only the courseReport method has access.
*/
const studentConstructor = require('./ex_4.js');

let school = privateSchool()

let foo = school.addStudent('foo', '3rd', [{
    name: "Math",
    code: 101,
    grade: 95
  },
  {
    name: "Advanced Math",
    code: 102,
    grade: 90
  },
  {
    name: "Physics",
    code: 202
  },
]);
let bar = school.addStudent('bar', '1st', [{
  name: "Math",
  code: 101,
  grade: 91
}]);
let qux = school.addStudent('qux', "2nd", [{
    name: "Math",
    code: 101,
    grade: 93
  },
  {
    name: "Advanced Math",
    code: 102,
    grade: 90
  },
]);
school.registerAllCourses();
// console.log(school.studentBody);
school.enrollStudent(foo, 'Math');
school.enrollStudent(bar, 'Math');
school.enrollStudent(qux, 'Math');

school.enrollStudent(foo, 'Advanced Math');
school.enrollStudent(qux, 'Advanced Math');
school.getReportCard(foo.name);
// // // Math: 95
// // // Advanced Math: 90
// // // Physics: In progress
console.log();
school.courseReport('Math');
// // // = =Math Grades=
// // // = foo: 95
// // // = bar: 91
// // // = qux: 93
// // // = ---
// // // = Course Average: 93

school.courseReport('Advanced Math');
// // = =Advanced Math Grades=
// // = foo: 90
// // = qux: 90
// // = ---j
// // = Course Average: 90

school.courseReport('Physics');

function privateSchool() {
  const permittedYears = ['1st', '2nd', '3rd', '4th'];
  let studentBody = [];
  let classRegisters = {};

  return {
    registerAllCourses() {
      for (const student of studentBody) {
        for (const course of student.courses) {
          if (!Object.keys(classRegisters).includes(course)) {
            classRegisters[course.name] = [];
          }
        }
      }
      return classRegisters;
    },

    addStudent(name, year, courses) {
      if (permittedYears.includes(year)) {
        let student = Object.assign(studentConstructor.createStudent(name, year), {
          courses
        });
        studentBody.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, subject) {
      if (Object.keys(classRegisters).includes(subject)) {
        classRegisters[subject].push(student);
      }
    },

    findStudent(studentName) {
      return studentBody.findIndex((student) => student.name === studentName);
    },

    getReportCard(studentName) {
      let studentId = this.findStudent(studentName);
      if (studentId !== -1) {
        for (const {
            name,
            _,
            grade
          } of studentBody[studentId].courses) {
          if (typeof grade !== 'undefined') {
            console.log(`${name}: ${grade}`);
          } else {
            console.log(`${name}: In progress`);
          }
        }
      }
    },

    courseReport(course) {
      let studentsEnrolled;

      for (const [subjectName, studentsArray] of Object.entries(classRegisters)) {
        if (course === subjectName) {
          studentsEnrolled = studentsArray;
        }
      }

      if (studentsEnrolled.length > 0) {
        console.log('=' + course + ' Grades =');
        let meanScore = studentsEnrolled.reduce((sum, student) => {
          let grade = student.findCourseGrade(course);
          console.log(student.name, ': ', grade);
          return sum + grade;
        }, 0) / studentsEnrolled.length;

        console.log('---');
        console.log('= Course Average: ', meanScore);
        console.log('');
      } else {
        console.log(course, ': undefined');
      }
    }
  };
}
// // = undefined
// console.log(school);