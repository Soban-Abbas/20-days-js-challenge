let checkbtn=document.getElementById("checkbtn");
let input=document.getElementById("num");
checkbtn.addEventListener("click",check)
    function check(){
 if(input.value===""){
        console.log("Enter Number")
    }else{
         let result= (Number(input.value)%2===0)?"Number is even ":"number is odd";
          console.log(result);
    }
  
    }