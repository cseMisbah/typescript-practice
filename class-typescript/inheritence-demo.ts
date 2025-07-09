class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username : ${this.userName} , age : ${this.age}`);
  }
}

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
