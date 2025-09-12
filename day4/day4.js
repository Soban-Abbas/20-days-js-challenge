let student={
     name:"soban",
     age:20,
     address:{
          city:"wah cantt"
     }
}

console.log(student.name);
//if you try to acess key of main obj and its not exits it will return an undefined so we can assign value by nullish coalecing ??
//example
console.log(student.email??"sobanabbass@gmail.com");


console.log(student.address.city);
console.log(student.address.street??9); 
// here we get an eror because we are accessing key that not present in main obj and in that we are deeply accessing 

// console.log(student.info.class);

// to protect yourdelf from errors
//try optional chaining so it return undefined
console.log(student.info?.class);

//after that we can give value to class because now it contain undefinded
console.log(student.info?.class??"bhatti");



//********this was about optional chaning and nullish coalecing ***********/