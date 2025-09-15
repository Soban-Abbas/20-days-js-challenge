let color=document.getElementById("color");
color.addEventListener("change",function(e){
    document.body.classList.remove("pink","black","yellow","default")
    
    if(e.target.value==="pink"){
        document.body.classList.add("pink");
    }else if(e.target.value==="black"){
        document.body.classList.add("black");
    }else if(e.target.value==="yellow"){
        document.body.classList.add("yellow");
    }else if(e.target.value==="choose"){
        document.body.classList.add("default");
    }
})