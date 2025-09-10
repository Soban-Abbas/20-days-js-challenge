const students = [
  { name: "Ali", age: 17, marks: 45 },
  { name: "Sara", age: 20, marks: 75 },
  { name: "Bilal", age: 19, marks: 30 },
  { name: "Ayesha", age: 22, marks: 90 }
];




for(let student of students){
    console.log(student.name +"marks are"+ student.marks)
}

students.forEach(function(student,index){
 let result=(student.marks>=50)? "pass" : "fail";
 console.log(student.name +"is"+ result);
})

students.forEach(function(stdu){
    let marks=stdu.marks+5;
    console.log(marks);
})
 let newar=students.map(function(stud){
    return stud.name.toUpperCase();

 })

 console.log(newar);

//geting 1 obj and applying for in
 let stdn=students[0];
 console.log(stdn);

 for(let key in stdn){
    console.log(key +":" +stdn[key])
 }

 