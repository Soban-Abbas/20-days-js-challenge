let btn=document.getElementById("btn");
let div=document.getElementsByClassName("div")[0];
let array=[
    {
        rollNo:1,
        Name:"Soban",
        Marks:50,
        age:20,
        class:"BSSE"
    },
    {
         rollNo:2,
        Name:"ALi",
        Marks:40,
        age:21,
        class:"BSCS"
    }
]

btn.addEventListener("click",function(e){

 let firstStudent=array[0];

 for(let keys in firstStudent){
    let para=document.createElement("p");
    para.innerHTML=`${keys} : ${firstStudent[keys]} <br>`;
    div.appendChild(para);
 }







})