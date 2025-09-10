let array=[
    {
    name:"soban",
    age:20
},{
name:"ali",
age:20,
}];

for(let items of array){
    console.log(items);
}
//in for each loop 
// its actually a loop which take a function in it 
// if we have a array of obj then in fun we pass a value which take the 1 object from array each time and and we can acess obj values like obj.name or obj . age;

let arry2=[1,2,3,4,5,6];
arry2.forEach(function(value,index){
    console.log("index : "+index +"value at index" +value);
})
arry2.forEach(function(value){
    console.log(value);
})


array.forEach(function(user){
    console.log(user.name);
})

