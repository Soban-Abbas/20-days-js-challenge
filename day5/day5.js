let btn=document.getElementById("btn");
let value=1;
let increase=document.getElementById("increase");
btn.addEventListener("click",function(e){
    increase.innerText=`${value++}`;
    console.log(increase.innerText);
})