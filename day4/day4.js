//  destructing
// way to unpack values from array and objects into varibales
//array destrcuting 
let num=[10,20,30,[5,6,7,0]];
let [a,b,c,d]=num;
console.log(d);
let [j,k,,m]=d
console.log(j,k,m)
console.log(a,b,c);



//object destructing
let obj={
    name:"soban",
    age:20,
    class:"BSSE",
    subject:{
        sub1:"DBMS",
        sub2:"DSA",
        sub3:"SDA"
    }
}

// in obj destructing we must put same name of varible as of key of obj then we can rename this

let {name,age,class:className,subject:subjectName}=obj;

console.log(subjectName);
let {sub1,sub2,sub3}=subjectName;
console.log(sub3);
