let btn=document.getElementById("btn");
let div=document.getElementsByClassName("div");
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

    for(let item of array){
        console.log(item);
    }

})