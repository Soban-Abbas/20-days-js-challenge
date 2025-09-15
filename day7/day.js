let input = document.getElementById("input");
let ul=document.getElementById("ul");
input.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
   let createli=document.createElement("li");
   createli.innerText=input.value;
   ul.appendChild(createli);
   input.value="";

    }
})