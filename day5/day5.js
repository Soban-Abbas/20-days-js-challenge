//mouse event

let box=document.getElementById("box");
box.addEventListener("mouseover", function(e){
    box.style.background="green";
    console.log("mouse Entered");
})
box.addEventListener("mouseleave",function(e){
    box.style.background="lightblue";
    console.log("mouse out");
})