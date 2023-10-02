// JavaScript Document
const names = ["Aj","Sav","Ace","Ken","Gwen","Ben"];


for(name of names) {
console.log(name);
if(name === "Ace") {
console.log("Ace is my dog!");
	break;
}	
}
let loading = 0;

while(loading < 100){
console.log("Site is still loading...");
	
	loading ++;
}
 const text = document.querySelector(".title")
const changeColor = document.querySelector(".changeColor");



changeColor.addEventListener("click", function(){
	text.classList.toggle("change");
});

const	userList= document.querySelectorAll(".name-list li");

for(user of userList){
	user.addEventListener("click", function(){
	this.style.color = "blue";	
	})
}
console.log(userList);

const listInput = document.querySelector(".list-input");

console.log(listInput.value);



