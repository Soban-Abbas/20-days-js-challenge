let names = ["Ali", "Sara", "Bilal", "Hina"];
let input = document.getElementById("search");
let result = document.getElementById("result");

input.addEventListener("input", function () {
  let keyword = input.value.toLowerCase();  // user input in lowercase

  // filter array → only items that include the keyword
  let matches = names.filter(function(name) {
    //names.filter(...) → go through all names, keep only those that include the keyword.
    return name.toLowerCase().includes(keyword);
  });
console.log(matches);
  // display result

  result.innerHTML = matches.join("<br>"); //converting array into string seprating by commas or giving line break between items 
});
