let array=[1,3,5];
let [a,b=0,c]=array; //default will,be ignored becuase value already exits so b=0 ignore
console.log(a,b,c);
console.log(array);
let [cd="soban",...d]=array;//same 1st value at array[0] exits so "soban " ignored ana 1 will be shown and rest d will collect and show array [3,5];
console.log(cd,d);