//function signature

let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log("Jabbor is 56 years old");
};

userInfo2 = (name: string) => {
  console.log(`${name} is 56 years old`);
};

userInfo3 = (name: string, age: number) => {
  return `${name} is ${age} years old`;
};

userInfo1();
userInfo2("Jomir khan");
console.log(userInfo3("Soitonno", 90));
