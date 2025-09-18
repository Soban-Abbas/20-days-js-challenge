let theme = document.getElementById("Theme");
theme.addEventListener("change", function (e) {
  if (e.target.value === "Themes") {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    document.body.classList.add("light");
  } else if (e.target.value === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    theme.value = "";
    localStorage.setItem("theme", "dark");
  } else if (e.target.value === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
window.addEventListener("load", function (a) {
  let applyTheme = localStorage.getItem("theme");
  console.log(applyTheme);
  if (applyTheme !== null && applyTheme === "dark") {
    document.body.classList.add("dark");
    theme.value = "Dark";
  } else if (applyTheme !== null && applyTheme === "light") {
    document.body.classList.add("light");
    theme.value = "Light";
  }
});
