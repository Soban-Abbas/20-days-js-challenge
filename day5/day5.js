let list=document.getElementsByClassName("li");//return all eleemnt with thta class i array form
console.log(list);


let l=document.getElementsByTagName('li'); // also return array of all element present in html page in array
console.log(l);


let a=document.querySelector("li");
let b=document.querySelector(".li");
console.log(b);

console.log(a);
let c=document.querySelectorAll(".li");//accessing as class
let d=document.querySelectorAll("li")// accessing as tagname and also can accessas id and it retrun nodelist array while tag name and class name retrun array of html colections 
console.log(d);
console.log(c);