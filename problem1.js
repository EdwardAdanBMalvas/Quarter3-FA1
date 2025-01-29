

var nickname = prompt("Enter your nickname: ");
var height = prompt("Enter your height in inches: ");
var weight = prompt("Enter your weight in kg: ");

var heightx = parseInt(height) / 12 | 0;
var heighty = parseInt(height) % 12;
var weight = parseInt(weight) * 2.20462;

alert("Name: " +nickname+ "\n" + "Height: " + heightx + "'" + heighty + "\n" + "Weight: " + weight + " lbs");
