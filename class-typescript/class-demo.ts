//Class : properties, method, constructor

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

//class object

let user1 = new User("Ratan", 45);
user1.display();

let user2 = new User("Bilkis", 68);
user2.display();
