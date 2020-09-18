var x;	
x= prompt("Hey what's your name?");
	alert("Hey "+x+" Nice to meet you!");


var mydemo = document.getElementById("demoparent");
console.log(mydemo.childNodes.length);

var mydemotags = document.getElementsByTagName("li");

console.log ("number of li links:" + mydemotags. length);

var linksinmenu = mydemo.getElementsByTagName("li");

console.log ("number of li items in menu: " + linksinmenu.length);

var mycomments = document.getElementById("comment");

mycomments.setAttribute("align", "right");

mycomments.setAttribute("style", "color: red");

var newItem= document.createElement("li");

var newtext= document.createTextNode("hey, this wasnt here before!");

mydemo.appendChild(newItem);

newItem.appendChild(newtext);
// JavaScript Document