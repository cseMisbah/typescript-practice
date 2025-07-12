/*
function printUserInfo(userId: string | number | boolean | object) {
  console.log(`user id : ${userId}`);
}
printUserInfo("103");
printUserInfo(103);
printUserInfo(true);
printUserInfo({ id: 202 });
*/
//using generics with traditional function
//generic parameters(<x,y,z,a,b,c>) can work for any data types
function printUserInfo(userId, userAge) {
    console.log("ID : ".concat(userId, " , Age : ").concat(userAge));
}
printUserInfo(103, 23);
printUserInfo("23");
//using generics with es6 function
function printUserInfo() { }
(function (userId, userAge) {
    console.log("ID : ".concat(userId, " , Age : ").concat(userAge));
});
printUserInfo(45, 32);
