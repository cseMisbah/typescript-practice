//console.log("Hello i am index");

//const form = document.querySelector(".user-form");

//const form = document.querySelector("form") as HTMLFormElement;

const userForm = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;

const userEmail = document.querySelector("#email") as HTMLInputElement;

const userCountry = document.querySelector("#country") as HTMLSelectElement;

const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

//console.log(userName);

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value,
  };

  console.log(data);
});
