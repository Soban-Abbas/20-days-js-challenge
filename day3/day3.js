// //iterration method
let fruits=["apple", "banana", "apple", "orange", "banana", "apple"];
// let box={};
// for(let i=0;i<fruits.length;i++){
//    let fruit=fruits[i];
   
//    if(box[fruit]){
//     box[fruit]=box[fruit]+1;
//    }else{
//     box[fruit]=1;
//    }


// }

// console.log(box);

let count=fruits.reduce(function(acc,value){

    if(acc[value]){
        acc[value]=acc[value]+1;
    }else{
        acc[value]=1;
    }

return acc;

},{})
console.log(count);