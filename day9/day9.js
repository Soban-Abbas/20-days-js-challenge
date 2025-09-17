let timer=document.getElementById("timer");
let value=Number(timer.innerText);
console.log(value);


let stopInterval=setInterval(function(){

timer.innerText=value;

value--;
if(value===-1){
    clearInterval(stopInterval);
    alert("Time Up")
}




},1000)