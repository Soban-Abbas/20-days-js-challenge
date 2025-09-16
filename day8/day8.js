let btn=document.getElementById("btn");
let array=[1,2,3,4,5,6];
let div=document.getElementById("div");
btn.addEventListener("click",function(e){
    let newarray=array.map(function(a){
return a*2;
    })


let makeString=newarray.toString(" <br> ");
let span=document.createElement("span");
span.innerText=makeString;
div.appendChild(span);

})