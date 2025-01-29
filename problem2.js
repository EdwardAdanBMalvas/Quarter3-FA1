

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var birthYear = prompt("Enter your birth year: ");

var age = 2025 - parseInt(birthYear);

document.getElementById("output").innerHTML = "Hello " +firstName+ " "+lastName+ "! How does it feel to be " +age+ " years old?";