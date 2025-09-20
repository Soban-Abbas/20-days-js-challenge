let openmodel=document.getElementById("openModel");
let closeBtn=document.getElementById("closebtn");
let maindiv=document.querySelector(".main");
closeBtn.addEventListener("click",function(){
    
maindiv.style.display='none';
openmodel.disabled=false;


})

  if(  maindiv.style.display='block'){
        openmodel.disabled=true;
    }


openmodel.addEventListener("click",function(){
  
    maindiv.style.display='block';
    openmodel.disabled=true;
})