let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click", function (e) {
  ul.classList.toggle("showdata");
  console.log(ul);
});
