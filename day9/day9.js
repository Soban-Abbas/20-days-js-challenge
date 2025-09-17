let onlineBtn=document.getElementById("btn1");
let offlineBtn=document.getElementById("btn2");
let updateStatus=document.getElementById("status");

onlineBtn.addEventListener("click",changestatus);
offlineBtn.addEventListener("click",offlinestatus);

function changestatus(){
    updateStatus.innerText="Online";

    localStorage.setItem("status","Online");
    console.log(online);
}

function offlinestatus(){
    updateStatus.innerText="Offline";
    localStorage.setItem("status","Offline");
    console.log(offline);
}

let updatescreen= 
(localStorage.getItem("status"));
console.log(updatescreen);
if(updatescreen){
    updateStatus.innerText=updatescreen;
}