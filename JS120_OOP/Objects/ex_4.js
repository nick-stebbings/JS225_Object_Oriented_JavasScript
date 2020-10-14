/*
P:

Student

Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

    // info: Logs the name and year of the student.
    // addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
    // listCourses: Returns a list of the courses student has enrolled in.
    // addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
    // updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
    // viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

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

exports.createStudent = function(name, year) {
  let that = {
    name,
    year,
    info() {
      console.log(`${name} is a ${year} year student`);
    },
  };
  that.courses = [];

  that.addCourse = function (courseObject) {
    that.courses.push(courseObject);
  };

  that.listCourses = function () {
    console.log(that.courses);
  };

  that.findCourse = function (code) {
    for (const course of that.courses) {
      if (course.code === code) return course;
    }
    return -1;
  };

  that.findCourseGrade = function(course) {
    return this.courses[
      this.courses.findIndex((courseObject) => courseObject.name === course)
    ].grade;
  };

  that.addNote = function (code, newNote) {
    let foundCourse = that.findCourse(code);
    if (foundCourse !== -1) {
      foundCourse.note !== undefined
        ? (foundCourse.note += `; ${newNote}`)
        : (foundCourse.note = newNote);
    }
  };

  that.findCourseGrade = function(course) {
    return this.courses[
      this.courses.findIndex((courseObject) => courseObject.name === course)
    ].grade;
  };

  that.viewNotes = function () {
    let noteString = "";
    for (const course of that.courses) {
      if (course.note !== undefined) {
        noteString += `${course.name}: ${course.note}\n`;
      }
    }
    console.log(noteString);
  };

  that.updateNote = function (code, newNote) {
    let foundCourse = that.findCourse(code);
    if (foundCourse !== -1) {
      foundCourse.note = newNote;
    }
  };

  return that;
};

let foo = exports.createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
foo.addCourse({ name: 'Math', code: 101, grade: 100 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"
// console.log(foo.findCourseGrade('Math'));