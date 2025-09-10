let number=document.getElementById("num");
let checkbtn=document.getElementById("checkbtn");



checkbtn.addEventListener("click",check);


function check(){
    let num=Number(number.value);
    for (let i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i}`);
}
}
