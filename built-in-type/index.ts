//built-in-type : number, string, boolean, void, undefined, null
/*
let id;
let userId : number
let userName  : string
let isActivated : boolean
*/
//userId = 101
let userId: number;
let firstName: string;
let lastName: string;
let isActivated: true;
let fullName: string;

userId = 102;

firstName = "Bakkar";
lastName = "chowdhury";
isActivated = true;

fullName = firstName.concat(lastName);

//console.log(
//`userId : ${userId}, userName : ${firstName}, account activated : ${isActivated} fullName : ${fullName}`
//);
//console.log(fullName.split(" "));

function display(): void {
  console.log("Hi.. am display");
}
display();
