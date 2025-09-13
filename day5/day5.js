let input = document.getElementById("input");
input.addEventListener("focus",function(e){
    console.log("input clicked");

})

input.addEventListener("blur",function(e){
    console.log("out from input");
    
})