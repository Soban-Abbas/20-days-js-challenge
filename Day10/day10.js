let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.getElementById("loginform");
loginForm.addEventListener("submit", function (a) {
  a.preventDefault();
  let span = document.getElementById("errors");
  span.innerText = "";
  if (name.value === "" || email.value === "" || password.value === "") {
    span.style.color = "red";
    span.innerText = "Enter correct information";
  } else {
    span.innerText = "";
    alert("form submitted Successfully");

    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  }
});
window.addEventListener("load", function (e) {
  let savename = localStorage.getItem("name");
  let saveemail = localStorage.getItem("email");
  let savepassword = localStorage.getItem("password");

  if (savename !== null) {
    name.value = savename;
  }
  if (saveemail !== null) {
    email.value = saveemail;
  }
  if (savepassword !== null) {
    password.value = savepassword;
  }
});
