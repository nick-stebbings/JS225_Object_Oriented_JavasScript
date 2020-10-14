/*
P:
Create a school object. 

The school object uses the student object from the previous exercise. 
 - It has methods that use and update information about the student. 
  - Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

    // addStudent: 
    //  -Adds a student by creating a new student and adding the student to a collection of students.
    //  - The method adds a constraint that the year can only be any of the following values:
    //    - '1st', '2nd', '3rd', '4th', or '5th'.
    //  - Returns a student object if year is valid otherwise it logs "Invalid Year".


    enrollStudent: 
     - Enrolls a student in a course.
    
    addGrade: 
     - Adds the grade of a student for a course.

    getReportCard: 
     - Logs the grades of a student for all courses. 
     - If the course has no grade, it uses "In progress" as the grade.
    courseReport: 
    - Logs the grades of all students for a given course name. 
     - Only student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

E:

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/
const studentConstructor = require('./ex_4.js');

let school = {
  studentBody: [],
  classRegisters: {},
  registerAllCourses() {
    for (const student of school.studentBody) {
      for (const course of student.courses) {
        if(!Object.keys(this.classRegisters).includes(course)) {
          this.classRegisters[course.name] = [];
        }
      }
    }
    return this.classRegisters;
  },
  addStudent(name, year) {
    if (['1st', '2nd','3rd','4th', '5th'].includes(year)) {
      let student = studentConstructor.createStudent(name, year);
      this.studentBody.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },
  enrollStudent(student, subject) {
    if (Object.keys(this.classRegisters).includes(subject)) {
      this.classRegisters[subject].push(student);
    }
  },
  findStudent(studentName) {
    return this.studentBody.findIndex((student) => student.name === studentName);
  },
  getReportCard(studentName) {
    let studentId = this.findStudent(studentName);
    if (studentId !== -1) {
      for (const {name, _, grade} of this.studentBody[studentId].courses) {
        if(typeof grade !== 'undefined') {
          console.log(`${name}: ${grade}`);
        } else {
          console.log(`${name}: In progress`);
        }
      }
    }
  },
  courseReport(course) {
    let studentsEnrolled;

    for (const [subjectName, studentsArray] of Object.entries(this.classRegisters)) {
      if (course === subjectName) {
        studentsEnrolled = studentsArray;
      }
    }
    console.log(studentsEnrolled);
    }
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

//for physics return undefined.
  }


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
school.studentBody = [{
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
},
{
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
},
{
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}]

const [foo, bar, qux] = school.studentBody
// school.addStudent(foo, '1st')
school.enrollStudent(foo, 'Math');
school.enrollStudent(bar, 'Math');
school.enrollStudent(qux, 'Math');

school.enrollStudent(foo, 'Advanced Math');
school.enrollStudent(qux, 'Advanced Math');
school.registerAllCourses();
// school.getReportCard(foo.name);
// // Math: 95
// // Advanced Math: 90
// // Physics: In progress

school.courseReport('Math');
// // = =Math Grades=
// // = foo: 95
// // = bar: 91
// // = qux: 93
// // = ---
// // = Course Average: 93

school.courseReport('Advanced Math');
// // = =Advanced Math Grades=
// // = foo: 90
// // = qux: 90
// // = ---
// // = Course Average: 90

school.courseReport('Physics');
// // = undefined
// console.log(school);