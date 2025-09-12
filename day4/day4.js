// spread and rest operator
//same syntax different use depending on context
//spread (expending)

let arr1=[1,2,3];
let arr2=[4,5,6];
let combine=[...arr1,...arr2];
console.log(combine);

let obj={a:1,b:2}
let obj2={...obj,c:3}
console.log(obj2);


//rest operator(collect into 1 varibel)

function sum(...nums){

return nums.reduce(function(acc,ntv){
    return acc+ntv;
},0);


}
console.log(sum(1,2,3,4,5,6));






//destructign with rest

let object={
    colour1:"black",
    colour2:"pink",
    colour3:"white",
    colour4:"yellow"
}


let {colour1:b,colour2:p,...rest}=object;

console.log(rest);

//  if destructing array rest give as array in return 
//if destructing object rest give an object in return
