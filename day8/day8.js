let btn=document.getElementById("btn");

btn.addEventListener("click",click)
function click(){

  document.body.classList.add("theme");
localStorage.setItem("pagetheme",JSON.stringify("theme"))

}


let showpage=JSON.parse(localStorage.getItem("pagetheme"))
console.log(showpage);
if(showpage){
  document.body.classList.add(showpage);
}