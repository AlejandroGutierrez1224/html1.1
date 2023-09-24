// JavaScript Document
const age = 10;

if(age >= 18) {
console.log("You have access!");		
} else if(age < 15) {
console.log("Sorry you're wayyy too young!");
}


else {
console.log("Access denied");
}
const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 || dice2 ===6){
console.log("+10 damage to monster!");
}else {
console.log("You have been SLAIN");	
}
const name = "Alejandro";

console.log(`Hello there my name is ${name}`);

console.log("Hello it's me " + name + " and my age is older than " + age + " and I love to drink coffee!");

console.log(`Hello it's me ${name} and my age is older than ${age}`);

const combined = name + age;
console.log(typeof combined);

const expr = 'snacks';
switch (expr) {
  case 'jerky':
    console.log('jerky is $1.70 a pound.');
    break;
  case 'apples':
  case 'bananas':
    console.log('apples and bananas are $1.00 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} //trying diff switch statement

const PI = 3.14159;
const num = PI.toFixed(3);

console.log(num);

