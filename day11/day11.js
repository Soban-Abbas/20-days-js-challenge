let picture=["pak team.jpeg",
    "pak2.jpeg",
    "pak3.jpeg"
]
let image=document.getElementById("img");
 let pbtn=document.getElementById("previous");
 let nbtn=document.getElementById("next");
 let index=0;
 image.src=picture[index];
 pbtn.addEventListener("click",function(){
    

index=index-1;
if(index<0){
    index=Number(picture.length)-1;
}
image.src=picture[index];


    
 })