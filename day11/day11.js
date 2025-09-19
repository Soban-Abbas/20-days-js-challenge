let picture=["pak team.jpeg",
    "pak2.jpeg",
    "pak3.jpeg"
]
let image=document.getElementById("img");
 let pbtn=document.getElementById("previous");
 let nbtn=document.getElementById("next");
 let index=0;
 pbtn.addEventListener("click",function(e){
    if(index<0){
        image.src=picture[picture.length-1];
        index=(picture.length)-1;

    }
    else if(index===0){

image.src=picture[index];

index=index-1;


    }else{
        image.src=picture[index];
    }
 })