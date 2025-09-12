let students = [
  { name: "Ali", marks: 40 },
  { name: "Sara", marks: 70 },
  { name: "Omar", marks: 55 }
];

let pass=students.filter(function(e){
     if(e.marks>=50){
          console.log(`${e.name} is pass`)
     }else{
          console.log(`${e.name} is fail`);
     }
})
