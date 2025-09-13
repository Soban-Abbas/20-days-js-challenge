document.getElementById("colors").addEventListener("change", function(e) {
  console.log("You selected:", e.target.value);
});

// chnage event is good when we have an option sto choose apply chnage event 
// when we have an input field when we type and click out of input field then chnage event happen and we can get value but at the same time if we use input event we get live value while typing
document.getElementById("helo").addEventListener("change",function(e){
   if (e.target.value === "") { // this will not run becuase chnage evevnt happens only when something chnage in input from previous states 
    console.log("nothing typed");
} else {
    console.log("you typed " + e.target.value);
}

})

document.getElementById("helo").addEventListener("input",function(e){
    console.log("you are typing " + e.target.value)
})