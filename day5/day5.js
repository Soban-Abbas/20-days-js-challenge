let email = document.getElementById("email");

let span = document.createElement("span");
let password = document.getElementById("password");
let loginform = document.getElementById("loginform");
let div = document.querySelector("div");
loginform.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    email.value === "sobanabbass@gmail.com" &&
    password.value === "soban2669"
  ) {
    span.innerText = "";
    alert("login successfull");
    loginform.reset();
  } else {
    span.innerHTML = "";
    span.innerText = "Enter valid detail";
    span.classList.add("red");
    div.appendChild(span);
  }
});
