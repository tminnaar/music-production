const dateElement = document.getElementById("dateText");

//methods to grab the date, month and year.
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

//string interpolates the values into the dateText element.
dateElement.textContent = `Today's date is ${day}/${month}/${year}`;
