let student={
     name:"Ali",
     age:18,
     marks:85
};


function objectPrinter(n){

for(let item in n){
     console.log(`${item}:${n[item]}`);
}


}
objectPrinter(student);