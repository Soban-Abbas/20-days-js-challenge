let students = [
  { name: "Ali", marks: 40 },
  { name: "Sara", marks: 70 },
  { name: "Omar", marks: 55 },
  {
    name: "Alice",
    totalMarks: 85,
  },
];

let highest = students.reduce(function (acc, nxt) {
  if (acc.length === 0) {
    acc.push(nxt);
    return acc;
  }
  if (acc[0].marks >= nxt.marks) {
    return acc;
  } else {
    acc.length = 0;
    acc.push(nxt);
    return acc;
  }
}, []);
console.log(highest);
