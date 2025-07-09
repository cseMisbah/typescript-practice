"use strict";
//console.log("Hello i am index");
//const form = document.querySelector(".user-form");
//const form = document.querySelector("form") as HTMLFormElement;
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
//console.log(userName);
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
