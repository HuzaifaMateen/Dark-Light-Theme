const btn = document.querySelector(".butn");
const header = document.getElementById("header");
const mainThing = document.getElementById("main");
// header Section
function changeHeader(){
	let color = header.style.backgroundColor;
	if(color == "white"){
		header.style.backgroundColor= "#000000";
	} else{
		header.style.backgroundColor = "white";
	}
}
btn.addEventListener("click", changeHeader);

function changeHeaderText(){
	let  text = document.getElementById("blog");
	if(text.style.color == "black"){
		text.style.color = "white";
	} else {
		text.style.color = "black";
	}
}
btn.addEventListener("click", changeHeaderText);

//  header ends
// h1 
function changeText(){
	let bodyText = document.getElementById("heading");
	if(bodyText.style.color == "black"){
		bodyText.style.color = "white";
	} else{
		bodyText.style.color = "black";
	}
}
btn.addEventListener("click", changeText);
// main tag
function changeEveryThing() {
	let background = mainThing.style.backgroundColor;
	if(background == "white"){
		mainThing.style.backgroundColor = "black";
	} else{
		mainThing.style.backgroundColor = "white";
	}
}
btn.addEventListener("click", changeEveryThing);
//
function changeMainText() {
	let text = document.getElementById("para");
	if(text.style.color == "black"){
		text.style.color = "white";
	} else{
		text.style.color = "black";
	}
}
btn.addEventListener("click", changeMainText);
// main ends
// main Button

function changeButtonColor(){
	let color = document.getElementById("batn");
	if(color.style.backgroundColor == "black" && color.style.color == "white"){
		color.style.backgroundColor= "white";
		color.style.color= "black"
	} else{
		color.style.backgroundColor = "black";
		color.style.color = "white";
	}
}
btn.addEventListener("click", changeButtonColor);