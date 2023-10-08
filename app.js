// JavaScript Document
const schedule = ["Wake up", "Eat", "Voice record","Watch new movie"];

console.log(schedule[2]);
schedule.push("A new item has been added");

schedule.unshift("Something new"); 


console.log(schedule.indexOf("Voice record"));

const user = {
	name: "Aj",
	age: 21,
	employed: true,
	inventory: ["phone","wallet","keys"],

sayName: function(){
	console.log(this.name);
}
};

user.sayName();




