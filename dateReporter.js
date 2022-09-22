const dateElement = document.getElementById("dateText");
//const date = "12 May 2022";

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

dateElement.textContent = `Today's date is ${day}/${month}/${year}`;

console.log();
