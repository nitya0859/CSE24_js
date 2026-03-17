let x=document.getElementById("demo");
x.innerHTML="hii";
//returns only one element
//other two methods
let y=document.getElementByClassName("demo1"); //this returns array 
y.innerHTML="oky";
let z=document.getElementsByTagName("h2"); //this too in array form
z.innerHTML="yyyy";
let a=document.querySelector(""); // .class, #id, tag(directly) anything can be given
let b=document.querySelectorAll(""); // .class, #id, tag(directly) anything can be given
//the query selector gives u the 1st value encountered 
//query selector all returns all the values 
