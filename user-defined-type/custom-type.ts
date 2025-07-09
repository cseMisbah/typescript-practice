/*
let users: object[];
users = [];



let user1: { userName: string; userId: number };
user1 = { userName: "Nurol Hoda", userId: 101 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: "Habib", userId: 23 };
users.push(user2);

let user3: { userName: string; userId: number };
user3 = { userName: "Kobra", userId: 405 };
users.push(user3);

console.log(users);
*/

/*
let users: object[];
users = [];

type User = { userName: string; userId: number };

let user1: User;
user1 = { userName: "Nurol Hoda", userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: "Habib", userId: 23 };
users.push(user2);

let user3: User;
user3 = { userName: "Kobra", userId: 405 };
users.push(user3);

console.log(users);
*/

/*
type User = { userName: string; userId: number };
let users: User[];
users = [];

let user1: User;
user1 = { userName: "Nurol Hoda", userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: "Habib", userId: 23 };
users.push(user2);

let user3: User;
user3 = { userName: "Kobra", userId: 405 };
users.push(user3);

console.log(users);
*/

type RequestType = "GET" | "POST";

let getRequest: RequestType;

getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}

requestHandler("GET");
