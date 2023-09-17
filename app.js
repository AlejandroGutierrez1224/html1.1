// JavaScript Document
const name = "aj";

function logger(){
	console.log(name);
console.log("Grape Soda!");
console.log("Grape Soda!");
console.log("Grape Soda!");
console.log("Grape Soda!");
}
logger();

function adder(num1, num2){
	console.log(num1+num2);
	
}
adder(6,20)

function toUpper(text){
	const upperCased = text.toUpperCase();
	console.log(upperCased);
}

toUpper(name);

function greet(name){
console.log("happy weekend" + name + ":)");
}

greet();

const person = {
  firstName: "Savannah",
  lastName : "Boyen",
  id     :  5566
};


document.getElementById("demo").innerHTML =
person.firstName + " " + person.lastName;




let text = "TryingOutDifferentMethods";
document.getElementById("demo").innerHTML = text.length;



