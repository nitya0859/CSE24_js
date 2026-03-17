let x=document.getElementById("demo").style.color="blue";
//this can be used to change the css properties of the element
//there is a difference in the properties as here they are in camel casing as compared to the css where they are in small letters and hyphenated
let y=document.createElement("p"); //this creates a new element
//this is orphan element as it is not yet added to the document
//now we have to give parent to this element
let parent=document.getElementsByTagName("body");//this returns array of body elements but we have only one body element so we will take the 0th index
parent[0].append(y); //this adds the element to the body
//prepend: adds in the starting wheras append: adds in the end
//before and after are also two positions 
//conventions are always in camel case
y.remove(); //deletion of the element 