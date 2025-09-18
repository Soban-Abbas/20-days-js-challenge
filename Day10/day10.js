let inputTime=document.getElementById("inputtime");
let btn=document.getElementById("btn");
let span=document.getElementById("span");
btn.addEventListener("click",function(e){
    console.log(Number(inputTime.value));
span.innerText=Number(inputTime.value);
let timer=Number(inputTime.value);
let stop=setInterval(() => {
    timer--;
    span.innerText=timer;
    if(timer===0){
        alert("Time Up")
clearInterval(stop);
    }
}, 1000);

})