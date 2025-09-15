let signupform=document.getElementById("signupform");
let dic2=document.getElementById("div2");
let userName=document.getElementById("username");
let password=document.getElementById("password");
signupform.addEventListener("submit",function(e){
    e.preventDefault();
div2.innerText="";
    if(userName.value.length>3 && password.value.length>6){
        div.innerText="";
        alert`form submitted`
    }else{
        let createspan=document.createElement("span");
        createspan.style.color="red";
        createspan.innerText="Username or Password are not correct"
        div2.appendChild(createspan);
    }

})