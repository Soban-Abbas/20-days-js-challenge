let div=document.querySelector("div");
div.addEventListener("mouseover" ,function(e){
console.log("mouse entered")
    div.style.background="lightgreen";
    div.style.borderRadius="50%";

})
div.addEventListener("mouseleave",function(e){
    div.style.background="lightblue";
    div.style.width="200px";
    div.style.height="200px";
    console.log("mouseleave");
})