//we cannot create object for abstract class

abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

//if any class inherit the abstract class then this class has to use the method of
// abstract class must examle(display() method etc. can be any method in abstract class)

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username : ${this.userName} , age : ${this.age}, Id : ${this.studentId}`
    );
  }
}

let student1 = new Student("bolder", 90, 93457);
student1.display();
