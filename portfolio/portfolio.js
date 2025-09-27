let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click", function (e) {
  ul.classList.toggle("showdata");
  console.log(ul);
  if(ul.className==="showdata"){
    document.getElementById("bar").className="fas fa-times"
  }else{
    document.getElementById("bar").className="fa-solid fa-bars"
  }
});


console.log(ul);
let atag=ul.getElementsByTagName("a");
ul.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {

        for (let i = 0; i < atag.length; i++) {
            atag[i].classList.remove("active");
        }

        e.target.classList.add("active");
    }
});