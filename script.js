var mydemo = document.getElementById("demoparent");
console.log(mydemo.childNodes.length);

var mydemotags = document.getElementsByTagName("li");

console.log ("number of li links:" + mydemotags. length);

var linksinmenu = mydemo.getElementsByTagName("li");

console.log ("number of li items in menu: " + linksinmenu.length);

var mycomments = document.getElementById("comment");

mycomments.setAttribute("align", "right");
// JavaScript Document