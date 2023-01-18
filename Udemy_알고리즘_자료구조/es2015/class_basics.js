class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies++;
    if (this.tardies >= 3) {
      return `YOU ARE EXPELLED`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

const firstStudent = new Student("Emil", "Katz", 3);
const secondStudent = new Student("Blue", "Steele", 3);
console.log(Student.EnrollStudents());
// secondStudent.markLate();
// secondStudent.markLate();
// console.log(secondStudent.markLate());
// console.log(secondStudent.addScore(93));
// console.log(secondStudent.addScore(82));
// console.log(secondStudent);
// console.log(secondStudent.calculateAverage());
